import type { CSSProperties, ReactNode } from 'react';

export const FONT = 'var(--font-body)';
export const MONO = 'var(--font-mono)';
export const TICK = 11; // px — about 8pt, the "xs" step of the type scale
export const LABEL = 12;

/** Figure wrapper shared by every chart: SVG scales down to fit its column, caption underneath, never split across pages. */
export function ChartFrame({ width, height, caption, children, label }: { width: number; height: number; caption?: string; children: ReactNode; label?: string }) {
  const fig: CSSProperties = { margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', breakInside: 'avoid' };
  const cap: CSSProperties = { fontFamily: FONT, fontSize: 'var(--text-sm)', color: 'var(--ink-500)', lineHeight: 'var(--leading-body)' };
  return (
    <figure style={fig}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ maxWidth: '100%', height: 'auto', display: 'block', overflow: 'visible' }} role="img" aria-label={label ?? caption}>
        {children}
      </svg>
      {caption && <figcaption style={cap}>{caption}</figcaption>}
    </figure>
  );
}

/** Nicely formatted tick numbers: 1200 → "1.2k" only when asked; otherwise plain with up to 2 decimals. */
export const fmt = (v: number, unit = '') => `${Number.isInteger(v) ? v : +v.toFixed(2)}${unit}`;
