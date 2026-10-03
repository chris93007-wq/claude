import React from 'react';

export function PageBadge({ week = 'Week 3', label, chapter = 1 }) {
  const row = { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'var(--space-6)' };
  const pill = { background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.08em', padding: '5px 14px', borderRadius: 'var(--radius-pill)', textTransform: 'uppercase', flexShrink: 0 };
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', letterSpacing: '0.04em', textTransform: 'uppercase' };
  return (
    <div style={row}>
      <span style={pill}>{week}</span>
      <span style={mono}>{label}</span>
    </div>
  );
}
