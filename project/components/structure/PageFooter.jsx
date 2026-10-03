import React from 'react';

export function PageFooter({ chapterLabel, page = 1, totalPages = 1 }) {
  const wrap = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderTop: '1px solid var(--line)', fontFamily: 'var(--font-body)' };
  const left = { fontSize: 'var(--text-xs)', color: 'var(--ink-500)', letterSpacing: '0.02em' };
  const right = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-500)' };
  return (
    <div style={wrap}>
      <span style={left}>{chapterLabel}</span>
      <span style={right}>{page} / {totalPages}</span>
    </div>
  );
}
