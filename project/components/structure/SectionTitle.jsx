import React from 'react';

export function SectionTitle({ chapter = 1, children }) {
  const wrap = { display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%' };
  const line = { flex: 1, height: 1, background: `var(--chapter-${chapter}-500)` };
  const dash = { width: 14, height: 2, background: `var(--chapter-${chapter}-500)`, flexShrink: 0 };
  const label = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: `var(--chapter-${chapter}-500)`, whiteSpace: 'nowrap' };
  return (
    <div style={wrap}>
      <span style={dash} />
      <span style={label}>{children}</span>
      <span style={line} />
    </div>
  );
}
