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
  /**
   * 'auto' (default): portrait for a small cheat sheet, landscape when it's dense (more than 4 topics, or more
   * than 16 bullets in total). Force 'portrait' or 'landscape' to override.
   */
  orientation?: 'auto' | 'portrait' | 'landscape';
  /** Topic columns per row. Default: 2 in portrait, 4 in landscape. */
  perRow?: number;
}

/** One-sheet recap of every topic — one chapter-topped column per topic. Portrait and roomy when small, landscape and ultra-dense when big. */
export function CheatSheetPage({ toc, columns, orientation = 'auto', perRow }: CheatSheetPageProps) {
  const bulletCount = columns.reduce((n, c) => n + c.bullets.length, 0);
  const resolved = orientation === 'auto' ? (columns.length > 4 || bulletCount > 16 ? 'landscape' : 'portrait') : orientation;
  const landscape = resolved === 'landscape';
  const cols = perRow ?? (landscape ? 4 : 2);

  // Landscape is "ultra-dense" (small type); portrait has the room, so it uses the regular type scale.
  const bodySize = landscape ? 10 : 'var(--text-sm)';
  const titleSize = landscape ? 11.5 : 'var(--text-lg)';
  const formulaSize = landscape ? 9 : 'var(--text-xs)';

  const grid: CSSProperties = { display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, columnGap: landscape ? 17 : 28, rowGap: landscape ? 21 : 28 };
  const bullet: CSSProperties = { fontSize: bodySize, lineHeight: 1.5, color: 'var(--ink-900)', margin: 0, paddingLeft: landscape ? 12 : 16, position: 'relative' };
  return (
    <Page toc={toc} badge="Cheat Sheet" orientation={resolved}>
      <div style={grid}>
        {columns.map((c, i) => (
          <div key={i} style={{ borderTop: `4px solid ${ch(c.chapter, 500)}`, paddingTop: landscape ? 9 : 12, display: 'flex', flexDirection: 'column', gap: landscape ? 7 : 10, breakInside: 'avoid' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: titleSize, color: ch(c.chapter, 900), margin: 0 }}>{c.title}</h3>
            {c.bullets.map((t, j) => (
              <p key={j} style={bullet}><span style={{ position: 'absolute', left: 0, color: ch(c.chapter, 500) }}>•</span>{t}</p>
            ))}
            {c.formula && <div style={{ fontFamily: 'var(--font-mono)', fontSize: formulaSize, color: ch(c.chapter, 900), background: ch(c.chapter, 100), borderRadius: 'var(--radius-sm)', padding: landscape ? '5px 7px' : '8px 10px', lineHeight: 1.4, whiteSpace: 'pre-wrap' }}>{c.formula}</div>}
          </div>
        ))}
      </div>
    </Page>
  );
}
