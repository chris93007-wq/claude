import type { CSSProperties, ReactNode } from 'react';

/**
 * Layout primitives following the Layout guidelines (Material-style 12-column grid). Rows can mix
 * full-width blocks with rows split into 2-4 columns, and the same logic works inside cards and sections.
 *
 *   <Grid>                         12 columns, 24px gutter
 *     <Span cols={12}>…</Span>     full-width row
 *     <Span cols={6}>…</Span><Span cols={6}>…</Span>
 *   </Grid>
 *
 *   <Columns count={2}>…</Columns>  shorthand: N equal columns, children placed in order
 */
export interface GridProps {
  columns?: number;
  /** Column gutter in px (Material expanded = 24) */
  gap?: number;
  rowGap?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Grid({ columns = 12, gap = 24, rowGap = 20, style, children }: GridProps) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, columnGap: gap, rowGap, alignItems: 'start', ...style }}>{children}</div>;
}

export interface SpanProps {
  /** How many grid columns this cell spans, or "full" for the whole row */
  cols: number | 'full';
  style?: CSSProperties;
  children?: ReactNode;
}

export function Span({ cols, style, children }: SpanProps) {
  return <div style={{ gridColumn: cols === 'full' ? '1 / -1' : `span ${cols}`, minWidth: 0, ...style }}>{children}</div>;
}

export interface ColumnsProps {
  count?: number;
  gap?: number;
  rowGap?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Columns({ count = 2, gap = 32, rowGap = 18, style, children }: ColumnsProps) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`, columnGap: gap, rowGap, alignItems: 'start', ...style }}>{children}</div>;
}

/** Inside a multi-column page/grid: a child that spans every column. */
export function Full({ style, children }: { style?: CSSProperties; children?: ReactNode }) {
  return <div style={{ gridColumn: '1 / -1', minWidth: 0, ...style }}>{children}</div>;
}

/** Vertical stack with consistent gap — for grouping several blocks inside one grid cell. */
export function Stack({ gap = 20, style, children }: { gap?: number; style?: CSSProperties; children?: ReactNode }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap, minWidth: 0, ...style }}>{children}</div>;
}
