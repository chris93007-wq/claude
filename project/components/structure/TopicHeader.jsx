import React from 'react';

export function TopicHeader({ topicNumber, title, kicker }) {
  const wrap = { display: 'flex', flexDirection: 'column', gap: '4px', padding: 'var(--space-6) 0 var(--space-4)', borderBottom: '2px solid var(--line)' };
  const h2 = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--ink-900)', margin: 0, display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' };
  const num = { color: 'var(--ink-300)' };
  const kick = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)' };
  return (
    <div style={wrap}>
      <h2 style={h2}>{topicNumber != null && <span style={num}>{String(topicNumber).padStart(2, '0')}</span>}{title}</h2>
      {kicker && <span style={kick}>{kicker}</span>}
    </div>
  );
}
