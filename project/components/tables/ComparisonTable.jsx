import React from 'react';

export function ComparisonTable({ columns = [], rows = [], chapter = 1 }) {
  const wrap = { border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', fontFamily: 'var(--font-body)' };
  const table = { width: '100%', borderCollapse: 'collapse' };
  const th = { textAlign: 'left', padding: 'var(--space-3) var(--space-4)', background: `var(--chapter-${chapter}-100)`, color: `var(--chapter-${chapter}-900)`, fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600, borderRight: '1px solid var(--border-default)' };
  const td = { padding: 'var(--space-3) var(--space-4)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', borderTop: '1px solid var(--border-default)', borderRight: '1px solid var(--border-default)' };
  const trAlt = { background: `color-mix(in srgb, var(--chapter-${chapter}-100) 45%, var(--surface-card))` };
  return (
    <div style={wrap}>
      <table style={table}>
        <thead><tr>{columns.map((c, i) => <th key={i} style={th}>{c.label}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={i % 2 ? trAlt : undefined}>
              {columns.map((c, j) => <td key={j} style={td}>{r[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
