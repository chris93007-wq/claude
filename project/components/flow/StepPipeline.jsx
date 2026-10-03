import React from 'react';

export function StepPipeline({ steps = [], chapter = 1 }) {
  const wrap = { display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 'var(--space-3)' };
  const stepBox = { flex: '1 1 160px', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', background: 'var(--surface-card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' };
  const headRow = { display: 'flex', alignItems: 'center', gap: 'var(--space-2)' };
  const num = { width: 28, height: 28, flexShrink: 0, borderRadius: '50%', background: `var(--chapter-${chapter}-500)`, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const label = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--ink-900)' };
  const body = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink-700)', lineHeight: 'var(--leading-body)' };
  const arrow = { display: 'flex', alignItems: 'center', fontSize: 'var(--text-xl)', color: 'var(--ink-300)', padding: '0 2px' };
  const nodes = [];
  steps.forEach((s, i) => {
    nodes.push(
      <div key={`s${i}`} style={stepBox}>
        <div style={headRow}><span style={num}>{i + 1}</span><span style={label}>{s.label}</span></div>
        <span style={body}>{s.body}</span>
      </div>
    );
    if (i < steps.length - 1) nodes.push(<div key={`a${i}`} style={arrow}>→</div>);
  });
  return <div style={wrap}>{nodes}</div>;
}
