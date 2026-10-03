import React from 'react';

export function Matrix({ rowLabels = [], colLabels = [], cells = [], chapter = 1 }) {
  const wrap = { display: 'inline-grid', gridTemplateColumns: `140px repeat(${colLabels.length}, 1fr)`, border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden', fontFamily: 'var(--font-body)' };
  const corner = { background: 'var(--paper-100)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' };
  const colHead = { background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', padding: 'var(--space-3)', textAlign: 'center', borderBottom: '1px solid var(--line)', borderRight: '1px solid var(--line)' };
  const rowHead = { background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', padding: 'var(--space-3)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' };
  const cell = { padding: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--ink-900)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textAlign: 'center' };
  return (
    <div style={wrap}>
      <div style={corner} />
      {colLabels.map((c, i) => <div key={`c${i}`} style={colHead}>{c}</div>)}
      {rowLabels.map((r, ri) => (
        <React.Fragment key={`r${ri}`}>
          <div style={rowHead}>{r}</div>
          {colLabels.map((_, ci) => <div key={`cell${ri}-${ci}`} style={cell}>{(cells[ri] || [])[ci]}</div>)}
        </React.Fragment>
      ))}
    </div>
  );
}
