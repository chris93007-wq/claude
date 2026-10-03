import React from 'react';

export function WorkedExample({ title, setup, context, table, steps = [], answer, soWhat, chapter = 1 }) {
  const card = { border: `2px solid var(--chapter-${chapter}-500)`, borderTop: `6px solid var(--chapter-${chapter}-500)`, borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-card)', padding: 'var(--space-6)' };
  const wrap = { display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-body)' };
  const badge = { display: 'inline-flex', alignSelf: 'flex-start', background: `var(--chapter-${chapter}-500)`, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-2)' };
  const titleStyle = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--ink-900)', margin: 0 };
  const setupStyle = { fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', margin: 0 };
  const setupLabel = { fontWeight: 700 };
  const setupRow = { display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)', flexWrap: 'wrap' };
  const contextBox = { flex: '1 1 260px', minWidth: 0 };
  const tableWrap = { border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden' };
  const tableEl = { width: '100%', borderCollapse: 'collapse' };
  const th = { textAlign: 'left', padding: 'var(--space-3) var(--space-4)', background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 };
  const td = { padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--ink-900)', borderTop: '1px solid var(--line)' };
  const stepsBox = { border: `1.5px solid var(--chapter-${chapter}-500)`, background: `var(--chapter-${chapter}-100)`, borderRadius: 'var(--radius-md)', padding: 'var(--space-5) var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' };
  const stepsLabel = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', color: `var(--chapter-${chapter}-900)` };
  const stepLabel = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: `var(--chapter-${chapter}-900)` };
  const lines = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ink-900)', lineHeight: 1.6, marginTop: 2 };
  const step = { display: 'flex', flexDirection: 'column', gap: 2 };
  const answerBox = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', background: `var(--chapter-${chapter}-900)`, color: '#fff' };
  const answerValue = { fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-2xl)' };
  const answerLabel = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.85 };
  const soWhatBox = { borderLeft: `3px solid var(--chapter-${chapter}-500)`, paddingLeft: 'var(--space-4)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)' };
  const soWhatLabel = { fontWeight: 700 };
  return (
    <div style={card}>
    <div style={wrap}>
      <div>
        <span style={badge}>Worked Example</span>
        <h3 style={titleStyle}>{title}</h3>
      </div>
      {(setup || context) && (
        <div style={setupRow}>
          {setup && <p style={{ ...setupStyle, flex: '1 1 260px', minWidth: 0 }}><span style={setupLabel}>Setup: </span>{setup}</p>}
          {context && <div style={contextBox}>{context}</div>}
        </div>
      )}
      {table && (
        <div style={tableWrap}>
          <table style={tableEl}>
            <thead><tr>{table.columns.map((c, i) => <th key={i} style={{ ...th, textAlign: i === 0 ? 'left' : 'right' }}>{c}</th>)}</tr></thead>
            <tbody>{table.rows.map((r, i) => <tr key={i}>{r.map((cell, j) => <td key={j} style={{ ...td, textAlign: j === 0 ? 'left' : 'right' }}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {steps.length > 0 && (
        <div style={stepsBox}>
          <span style={stepsLabel}>Show the Work</span>
          {steps.map((s, i) => (
            <div key={i} style={step}>
              <span style={stepLabel}>Step {i + 1}{s.label ? ` — ${s.label}` : ''}</span>
              <div style={lines}>{(s.lines || []).map((l, j) => <div key={j}>{l}</div>)}</div>
            </div>
          ))}
        </div>
      )}
      {answer && <div style={answerBox}><span style={answerValue}>{answer.value}</span><span style={answerLabel}>{answer.label}</span></div>}
      {soWhat && <div style={soWhatBox}><span style={soWhatLabel}>So what: </span>{soWhat}</div>}
    </div>
    </div>
  );
}
