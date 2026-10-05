import type { CSSProperties, ReactNode } from 'react';
import { Page } from '../document/Page';
import type { TocSpec } from '../document/NotesDocument';
import { ch, type Chapter } from '../components/types';

export interface QuizPageProps {
  toc?: TocSpec;
  /** Practice Questions is a chapter of its own — one chapter color for every question number */
  chapter: Chapter;
  questions: Array<{ q: ReactNode; a: ReactNode }>;
}

/**
 * Practice questions with the answer printed right under each one in a light-green strip — nothing hidden
 * or collapsed, so the page is fully printable. No PageBadge and no footer.
 */
export function QuizPage({ toc, chapter, questions }: QuizPageProps) {
  const q: CSSProperties = { fontSize: 'var(--text-base)', lineHeight: 1.55, color: 'var(--ink-900)', margin: '4px 0 10px' };
  const qNum: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 9.4, color: ch(chapter, 500), fontWeight: 700, marginRight: 8 };
  const strip: CSSProperties = { background: 'var(--light-green-200)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', display: 'flex', gap: 8, alignItems: 'baseline' };
  const aLabel: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7.8, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-900)', flexShrink: 0 };
  const aText: CSSProperties = { fontSize: 10.6, color: 'var(--ink-900)', lineHeight: 1.5 };
  return (
    <Page toc={toc} footer={false}>
      {questions.map((it, i) => (
        <div key={i} style={{ marginBottom: 22, breakInside: 'avoid' }}>
          <p style={q}><span style={qNum}>Q{i + 1}</span>{it.q}</p>
          <div style={strip}><span style={aLabel}>A{i + 1}.</span><span style={aText}>{it.a}</span></div>
        </div>
      ))}
    </Page>
  );
}
