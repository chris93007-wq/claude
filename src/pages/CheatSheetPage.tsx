import type { CSSProperties } from 'react';
import { Page } from '../document/Page';
import type { TocSpec } from '../document/NotesDocument';
import { ch, type Chapter } from '../components/types';

export interface CheatSheetColumn {
  chapter: Chapter;
  title: string;
  bullets: string[];
  /** Formula in words (monospace box); "\n" for line breaks */
  formula?: string;
}

export interface CheatSheetPageProps {
  toc?: TocSpec;
  columns: CheatSheetColumn[];
  /** Columns per row (default 4) — topics beyond that wrap to a new row */
  perRow?: number;
}

/** Landscape, ultra-dense recap of every topic on one sheet — one chapter-topped column per topic. */
export function CheatSheetPage({ toc, columns, perRow = 4 }: CheatSheetPageProps) {
  const grid: CSSProperties = { display: 'grid', gridTemplateColumns: `repeat(${perRow}, minmax(0, 1fr))`, columnGap: 17.3, rowGap: 20.9 };
  const bullet: CSSProperties = { fontSize: 9.9, lineHeight: 1.5, color: 'var(--ink-900)', margin: 0, paddingLeft: 12.1, position: 'relative' };
  return (
    <Page toc={toc} badge="Cheat Sheet" orientation="landscape">
      <div style={grid}>
        {columns.map((c, i) => (
          <div key={i} style={{ borderTop: `4px solid ${ch(c.chapter, 500)}`, paddingTop: 8.8, display: 'flex', flexDirection: 'column', gap: 6.9, breakInside: 'avoid' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11.2, color: ch(c.chapter, 900), margin: 0 }}>{c.title}</h3>
            {c.bullets.map((t, j) => (
              <p key={j} style={bullet}><span style={{ position: 'absolute', left: 0, color: ch(c.chapter, 500) }}>•</span>{t}</p>
            ))}
            {c.formula && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: ch(c.chapter, 900), background: ch(c.chapter, 100), borderRadius: 'var(--radius-sm)', padding: '5.2px 6.9px', lineHeight: 1.4, whiteSpace: 'pre-wrap' }}>{c.formula}</div>}
          </div>
        ))}
      </div>
    </Page>
  );
}
