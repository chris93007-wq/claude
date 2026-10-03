import React from 'react';

export function Chain({ items = [], chapter = 1, connector = '→' }) {
  const wrap = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-body)' };
  const box = { padding: '8px 18px', borderRadius: 'var(--radius-pill)', border: `1.5px solid var(--chapter-${chapter}-500)`, background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' };
  const glyph = { fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--ink-300)', fontWeight: 600 };
  const nodes = [];
  items.forEach((it, i) => {
    nodes.push(<span key={`b${i}`} style={box}>{it}</span>);
    if (i < items.length - 1) nodes.push(<span key={`c${i}`} style={glyph}>{connector}</span>);
  });
  return <div style={wrap}>{nodes}</div>;
}
