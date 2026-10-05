import type { CSSProperties, ReactNode } from 'react';
import { ch, type Chapter } from '../types';

/**
 * Pastel note box, colored by the chapter it sits in (never a fixed per-type color). The label sits in a
 * notch that breaks the rounded border. Only three callout kinds exist in notes — "KEY INSIGHT", "NOTES"
 * and "MEMORY AID" — everything else is a regular Section.
 */
export interface CalloutProps {
  /** Which chapter color (1-13) tints the border and background — always pass this */
  chapter: Chapter;
  /** All-caps label shown in the border notch, typed by hand (e.g. "KEY INSIGHT", "NOTES", "MEMORY AID") */
  label?: string;
  children?: ReactNode;
}

export function Callout({ chapter, label, children }: CalloutProps) {
  const dark = ch(chapter, 900);
  const wrap: CSSProperties = { position: 'relative', background: ch(chapter, 100), border: `2px solid ${dark}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-6) var(--space-6) var(--space-5)', marginTop: 12, breakInside: 'avoid' };
  const labelStyle: CSSProperties = { position: 'absolute', top: -13, left: 20, background: 'var(--surface-page)', padding: '0 10px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', color: dark };
  const body: CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)' };
  return (
    <div style={wrap}>
      {label && <span style={labelStyle}>{label}</span>}
      <div style={body}>{children}</div>
    </div>
  );
}
