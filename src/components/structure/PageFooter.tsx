import type { CSSProperties } from 'react';

/**
 * Thin page-bottom bar: breadcrumb on the left, mono "page / total" on the right.
 * In generated PDFs the footer is drawn by @page margin boxes (src/styles/print.css) so it repeats on every
 * printed sheet with real page numbers; this component is the on-screen/specimen version of the same design.
 */
export interface PageFooterProps {
  chapterLabel?: string;
  page?: number | string;
  totalPages?: number | string;
}

export function PageFooter({ chapterLabel, page = 1, totalPages = 1 }: PageFooterProps) {
  const wrap: CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderTop: '1px solid var(--line)', fontFamily: 'var(--font-body)' };
  const left: CSSProperties = { fontSize: 'var(--text-xs)', color: 'var(--ink-500)', letterSpacing: '0.02em' };
  const right: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-500)' };
  return (
    <div style={wrap}>
      <span style={left}>{chapterLabel}</span>
      <span style={right}>{page} / {totalPages}</span>
    </div>
  );
}
