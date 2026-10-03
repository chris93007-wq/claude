import React from 'react';

export function ChapterHeader({ eyebrow, week, chapterNumber = 1, chapter = 'Chapter 1', title, subtitle, topics = [] }) {
  const wrap = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-7) 0 var(--space-6)' };
  const badge = { background: `var(--chapter-${chapterNumber}-100)`, color: `var(--chapter-${chapterNumber}-900)`, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.08em', padding: '5px 14px', borderRadius: 'var(--radius-pill)', width: 'fit-content', textTransform: 'uppercase' };
  const eyebrowStyle = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', letterSpacing: '0.04em' };
  const chapterLabel = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', letterSpacing: '0.04em' };
  const h1 = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-3xl)', color: 'var(--ink-900)', lineHeight: 'var(--leading-tight)', margin: 0 };
  const sub = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--ink-700)', margin: 0 };
  const topicList = { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' };
  const topicRow = { display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink-900)' };
  const topicNum = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', minWidth: 22 };
  return (
    <div style={wrap}>
      {(week || chapter) && <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
        {week && <span style={badge}>{week}</span>}
        <span style={chapterLabel}>{chapter}</span>
        {eyebrow && <span style={eyebrowStyle}>{eyebrow}</span>}
      </div>}
      <h1 style={h1}>{title}</h1>
      {subtitle && <p style={sub}>{subtitle}</p>}
      {topics.length > 0 && (
        <div style={topicList}>
          {topics.map((t, i) => (
            <div key={i} style={topicRow}>
              <span style={{ ...topicNum, color: `var(--chapter-${((chapterNumber - 1 + i) % 13) + 1}-500)` }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{t}</span>
            </div>))}
        </div>
      )}
    </div>
  );
}
