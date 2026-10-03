import React from 'react';

export function FlashCard({ number, title, definition, formula, why, chapter = 1 }) {
  const card = { border: '1px solid var(--line)', borderTop: `3px solid var(--chapter-${chapter}-500)`, borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', padding: 'var(--space-4) var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' };
  const titleStyle = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: `var(--chapter-${chapter}-900)` };
  const label = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-500)' };
  const bodyStyle = { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-900)', lineHeight: 1.5 };
  const formulaBox = { fontFamily: 'var(--font-mono)', fontSize: 12, color: `var(--chapter-${chapter}-900)`, background: `var(--chapter-${chapter}-100)`, borderRadius: 'var(--radius-sm)', padding: '8px 10px', whiteSpace: 'pre-wrap' };
  const section = { display: 'flex', flexDirection: 'column', gap: 3 };
  return (
    <div style={card}>
      <span style={titleStyle}>{number != null ? `${String(number).padStart(2, '0')} · ${title}` : title}</span>
      <div style={section}><span style={label}>Definition</span><span style={bodyStyle}>{definition}</span></div>
      {formula && <div style={section}><span style={label}>Formula, in words</span><div style={formulaBox}>{formula}</div></div>}
      <div style={section}><span style={label}>Why</span><span style={bodyStyle}>{why}</span></div>
    </div>
  );
}

export function FlashcardGrid({ cards = [], columns = 2 }) {
  const grid = { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 16 };
  return (
    <div style={grid}>
      {cards.map((c, i) => (
        <FlashCard key={i} number={c.number != null ? c.number : i + 1} title={c.title} definition={c.definition} formula={c.formula} why={c.why} chapter={c.chapter || ((i % 5) + 1)} />
      ))}
    </div>
  );
}
