import type { CSSProperties } from 'react';
import { Page } from '../document/Page';
import { useDocument } from '../document/context';
import type { TocSpec } from '../document/NotesDocument';
import { ch, type Chapter } from '../components/types';

export interface GlossaryPageProps {
  toc?: TocSpec;
  title?: string;
  /** Any order — sorted and grouped by first letter automatically */
  entries: Array<{ term: string; def: string }>;
  /** Letter-heading color; defaults to the brand chapter */
  chapter?: Chapter;
}

/** 2-column alphabetical dictionary layout, grouped by letter. */
export function GlossaryPage({ toc, title = 'Glossary', entries, chapter }: GlossaryPageProps) {
  const doc = useDocument();
  const c = chapter ?? doc?.meta.brandChapter ?? 1;
  const groups = new Map<string, GlossaryPageProps['entries']>();
  [...entries]
    .sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }))
    .forEach((e) => {
      const letter = /^[a-z]/i.test(e.term) ? e.term[0].toUpperCase() : '#';
      groups.set(letter, [...(groups.get(letter) ?? []), e]);
    });

  const h1: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, margin: '0 0 20px' };
  const letterHead: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: ch(c, 500), letterSpacing: '0.06em', margin: '14px 0 2px', breakAfter: 'avoid' };
  const entry: CSSProperties = { breakInside: 'avoid', padding: '7px 0', borderBottom: '1px solid var(--line)' };
  return (
    <Page toc={toc} badge="Glossary">
      <h1 style={h1}>{title}</h1>
      <div style={{ columnCount: 2, columnGap: 36 }}>
        {[...groups].map(([letter, items]) => (
          <div key={letter}>
            <div style={letterHead}>{letter}</div>
            {items.map((it, i) => (
              <div key={i} style={entry}>
                <span style={{ fontWeight: 700, fontSize: 14, display: 'block' }}>{it.term}</span>
                <span style={{ fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.5 }}>{it.def}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Page>
  );
}
