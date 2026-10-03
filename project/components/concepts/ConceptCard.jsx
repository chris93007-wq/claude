import React from 'react';
import { ensureKatex } from './katex-loader.js';
import { FormulaTree } from '../diagrams/FormulaTree.jsx';

function Formula({ tex }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    ensureKatex().then(katex => {
      if (!cancelled && ref.current) ref.current.innerHTML = katex.renderToString(tex, { throwOnError: false });
    });
    return () => { cancelled = true; };
  }, [tex]);
  return <span ref={ref}>{tex}</span>;
}

export function ConceptCard({ term, definition, formulas = [], breakdown, why, chapter = 1 }) {
  const wrap = { border: `2px solid var(--chapter-${chapter}-500)`, borderTop: `6px solid var(--chapter-${chapter}-500)`, borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', fontFamily: 'var(--font-body)' };
  const body = { display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', padding: 'var(--space-6)' };
  const badge = { display: 'inline-flex', alignSelf: 'flex-start', background: `var(--chapter-${chapter}-500)`, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-2)' };
  const section = { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' };
  const label = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-500)' };
  const termStyle = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--ink-900)', margin: 0 };
  const text = { fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', margin: 0 };
  const formulaBox = { border: `1.5px solid var(--chapter-${chapter}-500)`, background: `var(--chapter-${chapter}-100)`, borderRadius: 'var(--radius-md)', padding: 'var(--space-5) var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', fontSize: 'var(--text-lg)' };
  const orStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', fontStyle: 'italic' };
  return (
    <div style={wrap}>
      <div style={body}>
        <div>
          <span style={badge}>Concept</span>
          <h3 style={termStyle}>{term}</h3>
        </div>
        <div style={section}><span style={label}>Definition</span><p style={text}>{definition}</p></div>
        {formulas.length > 0 && (
          <div style={section}>
            <span style={label}>Formula</span>
            <div style={formulaBox}>
              {formulas.map((f, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span style={orStyle}>or</span>}
                  <Formula tex={f} />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {breakdown && <FormulaTree root={breakdown} chapter={chapter} />}
        <div style={section}><span style={label}>Why It Works</span><p style={text}>{why}</p></div>
      </div>
    </div>
  );
}
