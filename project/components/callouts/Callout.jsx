import React from 'react';

export function Callout({ chapter = 1, label, children }) {
  const bg = `var(--chapter-${chapter}-100)`;
  const dark = `var(--chapter-${chapter}-900)`;
  const calloutWrap = { position: 'relative', background: bg, border: `2px solid ${dark}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-6) var(--space-6) var(--space-5)', marginTop: 12 };
  const calloutLabel = { position: 'absolute', top: -13, left: 20, background: 'var(--surface-page)', padding: '0 10px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', color: dark };
  const calloutBody = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)' };
  return (
    <div style={calloutWrap}>
      {label && <span style={calloutLabel}>{label}</span>}
      <div style={calloutBody}>{children}</div>
    </div>
  );
}
