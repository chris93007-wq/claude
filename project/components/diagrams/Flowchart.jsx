import React from 'react';

function Shape({ node, chapter }) {
  const isDecision = node.shape === 'diamond';
  const base = { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)', color: `var(--chapter-${chapter}-900)`, textAlign: 'center' };
  if (isDecision) {
    const size = 120;
    return (
      <div style={{ width: size, height: size, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: `var(--chapter-${chapter}-100)`, border: `1.5px solid var(--chapter-${chapter}-500)`, transform: 'rotate(45deg)', borderRadius: 6 }} />
        <div style={{ ...base, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>{node.label}</div>
      </div>
    );
  }
  const boxStyle = { ...base, padding: '10px 18px', borderRadius: 'var(--radius-md)', background: node.filled ? `var(--chapter-${chapter}-900)` : `var(--chapter-${chapter}-100)`, color: node.filled ? '#fff' : `var(--chapter-${chapter}-900)`, border: node.filled ? 'none' : `1.5px solid var(--chapter-${chapter}-500)` };
  return <div style={boxStyle}>{node.label}</div>;
}

function Arrow({ label }) {
  const wrap = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 };
  const lbl = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', color: 'var(--ink-500)', textTransform: 'uppercase', letterSpacing: '0.04em' };
  return (
    <div style={wrap}>
      {label && <span style={lbl}>{label}</span>}
      <div style={{ width: 2, height: 18, background: 'var(--ink-300)' }} />
      <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid var(--ink-300)', marginTop: -2 }} />
    </div>
  );
}

function FlowNode({ node, chapter }) {
  const col = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
  const row = { display: 'flex', alignItems: 'flex-start', gap: 'var(--space-6)', marginTop: 4 };
  const branch = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
  return (
    <div style={col}>
      <Shape node={node} chapter={chapter} />
      {node.children && node.children.length > 0 && (
        <div style={row}>
          {node.children.map((edge, i) => (
            <div key={i} style={branch}>
              <Arrow label={edge.label} />
              <FlowNode node={edge.to} chapter={chapter} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Flowchart({ root, chapter = 1 }) {
  const wrap = { display: 'flex', justifyContent: 'center', padding: 'var(--space-4) 0' };
  return <div style={wrap}><FlowNode node={root} chapter={chapter} /></div>;
}
