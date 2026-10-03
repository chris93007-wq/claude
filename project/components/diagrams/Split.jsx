import React from 'react';

export function Split({ left, right }) {
  const wrap = { display: 'grid', gridTemplateColumns: '1fr 2px 1fr', gap: 'var(--space-6)', alignItems: 'start' };
  const side = (s) => ({ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' });
  const head = (s) => ({ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: `var(--chapter-${s.chapter || 1}-900)`, margin: 0, textAlign: 'center' });
  const list = { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', margin: 0, padding: 0, listStyle: 'none' };
  const item = (s) => ({ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' });
  const dot = (s) => ({ width: 6, height: 6, borderRadius: '50%', background: `var(--chapter-${s.chapter || 1}-500)`, flexShrink: 0, marginTop: 7 });
  const divider = { background: 'var(--line)', alignSelf: 'stretch' };
  return (
    <div style={wrap}>
      <div style={side(left)}>
        <h4 style={head(left)}>{left.title}</h4>
        <ul style={list}>{(left.items || []).map((t, i) => <li key={i} style={item(left)}><span style={dot(left)} /><span>{t}</span></li>)}</ul>
      </div>
      <div style={divider} />
      <div style={side(right)}>
        <h4 style={head(right)}>{right.title}</h4>
        <ul style={list}>{(right.items || []).map((t, i) => <li key={i} style={item(right)}><span style={dot(right)} /><span>{t}</span></li>)}</ul>
      </div>
    </div>
  );
}
