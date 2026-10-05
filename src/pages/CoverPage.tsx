import { Fragment, type CSSProperties } from 'react';
import { Page } from '../document/Page';
import { useDocument } from '../document/context';
import { ch, type Chapter } from '../components/types';

export interface CoverPageProps {
  /** Mono line at the top; defaults to "COURSE · WEEK" from the document meta */
  eyebrow?: string;
  /** Defaults to meta.title. Use "\n" for a manual line break. */
  title?: string;
  /** Defaults to meta.subtitle */
  subtitle?: string;
  /** Bottom-left credit lines; defaults to "Prepared by {author}" + "For personal study use only" */
  credit?: string[];
  /** Small chapter-color dots, bottom right — usually the topic chapters inside */
  dots?: Chapter[];
  /** Chapter color for the eyebrow and title; defaults to the brand chapter */
  chapter?: Chapter;
}

/** Title page — white ground, chapter-colored text. Plain and minimal: no PageBadge, no footer. */
export function CoverPage({ eyebrow, title, subtitle, credit, dots = [2, 3, 4, 5], chapter }: CoverPageProps) {
  const doc = useDocument();
  const meta = doc?.meta;
  const c = chapter ?? meta?.brandChapter ?? 1;
  const eb = eyebrow ?? [meta?.course, meta?.week].filter(Boolean).join(' · ').toUpperCase();
  const t = title ?? meta?.title ?? '';
  const credits = credit ?? [meta?.author ? `Prepared by ${meta.author}` : '', 'For personal study use only'].filter(Boolean);

  const sheet: CSSProperties = { height: '11in', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 50, background: '#fff', fontFamily: 'var(--font-body)', color: 'var(--ink-900)', overflow: 'hidden' };
  return (
    <Page cover>
      <div style={sheet}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: ch(c, 500) }}>{eb}</div>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 50.2, lineHeight: 1.1, margin: '0 0 12.5px', color: ch(c, 900) }}>
            {t.split('\n').map((line, i) => <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>)}
          </h1>
          {(subtitle ?? meta?.subtitle) && <div style={{ fontSize: 17.3, color: 'var(--ink-700)' }}>{subtitle ?? meta?.subtitle}</div>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 11.8, color: 'var(--ink-500)', lineHeight: 1.5 }}>
            {credits.map((line, i) => <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>)}
          </div>
          <div style={{ display: 'flex', gap: 6.3 }}>
            {dots.map((d, i) => <div key={i} style={{ width: 20, height: 20, borderRadius: '50%', background: ch(d, 500) }} />)}
          </div>
        </div>
      </div>
    </Page>
  );
}
