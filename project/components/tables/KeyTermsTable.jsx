import React from 'react';

export function KeyTermsTable({ terms = [], chapter = 1 }) {
  const wrap = { border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', fontFamily: 'var(--font-body)' };
  const table = { width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' };
  const th = { textAlign: 'left', padding: 'var(--space-3) var(--space-4)', background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600, borderRight: '1px solid var(--border-default)' };
  const td = { padding: 'var(--space-3) var(--space-4)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', borderTop: '1px solid var(--border-default)', borderRight: '1px solid var(--border-default)', verticalAlign: 'top', overflowWrap: 'break-word' };
  const trAlt = { background: `color-mix(in srgb, var(--chapter-${chapter}-100) 45%, var(--surface-card))` };
  const hasExamples = terms.some((t) => t.example);
  return (
    <div style={wrap}>
      <table style={table}>
        <thead><tr>
          <th style={{...th,width:'20%'}}>Term</th><th style={{...th,width:hasExamples?'24%':'32%'}}>Simple Explanation</th><th style={{...th,width:hasExamples?'32%':'48%'}}>Why It Matters</th>{hasExamples && <th style={{...th,width:'24%'}}>Example / Analogy</th>}
        </tr></thead>
        <tbody>
          {terms.map((t, i) => (
            <tr key={i} style={i % 2 ? trAlt : undefined}>
              <td style={{ ...td, fontWeight: 700 }}>{t.term}</td>
              <td style={td}>{t.explanation}</td>
              <td style={td}>{t.why}</td>
              {hasExamples && <td style={td}>{t.example}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
