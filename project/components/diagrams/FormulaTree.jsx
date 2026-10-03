import React from 'react';

function OpGlyph({ op }) {
  const style = { fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--ink-500)', fontWeight: 600 };
  return <span style={style}>{op}</span>;
}

function Connector() {
  return <div style={{ width: 2, height: 16, background: 'var(--ink-300)' }} />;
}

function ValueNode({ node, chapter }) {
  const col = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' };
  const boxStyle = {
    padding: '8px 16px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-base)',
    border: node.filled ? 'none' : `1.5px solid ${node.tint ? `var(--chapter-${chapter}-500)` : 'var(--line)'}`,
    background: node.filled ? `var(--chapter-${chapter}-900)` : (node.tint ? `var(--chapter-${chapter}-100)` : 'var(--surface-card)'),
    color: node.filled ? '#fff' : (node.tint ? `var(--chapter-${chapter}-900)` : 'var(--ink-900)'),
  };
  const labelStyle = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--ink-500)' };
  const row = { display: 'flex', alignItems: 'center', gap: 'var(--space-3)' };
  return (
    <div style={col}>
      <div style={boxStyle}>{node.value}</div>
      <span style={labelStyle}>{node.label}</span>
      {node.children && node.children.length > 0 && (
        <React.Fragment>
          <Connector />
          <div style={row}>
            {node.children.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 && <OpGlyph op={node.op || '×'} />}
                <ValueNode node={c} chapter={chapter} />
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export function FormulaTree({ root, chapter = 1 }) {
  const wrap = { display: 'flex', justifyContent: 'center', padding: 'var(--space-4) 0' };
  return <div style={wrap}><ValueNode node={root} chapter={chapter} /></div>;
}
