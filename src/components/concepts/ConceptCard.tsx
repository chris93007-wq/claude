import { Fragment, type CSSProperties, type ReactNode } from 'react';
import { Tex } from '../math/Tex';
import { FormulaTree, type FormulaTreeNode } from '../diagrams/FormulaTree';
import { ch, type Chapter } from '../types';

/**
 * Three-part explainer for one concept: plain-language definition, the formula(s) rendered as real math
 * (KaTeX), an optional calculation breakdown diagram, and the underlying "why" that makes the formula make sense.
 */
export interface ConceptCardProps {
  term: string;
  /** Plain-language definition — no jargon, no formula */
  definition: ReactNode;
  /** One or more LaTeX strings, joined with "or" when more than one */
  formulas?: string[];
  /** Optional value-box diagram walking a worked example (see FormulaTree) */
  breakdown?: FormulaTreeNode;
  /** The underlying logic/intuition for why the formula works — not just a fact to memorize */
  why: ReactNode;
  /** Which chapter color (1-13) tints the card */
  chapter: Chapter;
}

export function ConceptCard({ term, definition, formulas = [], breakdown, why, chapter }: ConceptCardProps) {
  const accent = ch(chapter, 500);
  const wrap: CSSProperties = { border: `2px solid ${accent}`, borderTop: `6px solid ${accent}`, borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', fontFamily: 'var(--font-body)', breakInside: 'avoid' };
  const body: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', padding: 'var(--space-6)' };
  const badge: CSSProperties = { display: 'inline-flex', alignSelf: 'flex-start', background: accent, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9.4px', borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-2)' };
  const section: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' };
  const label: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-500)' };
  const termStyle: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--ink-900)', margin: 0, lineHeight: 'var(--leading-tight)' };
  const text: CSSProperties = { fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', margin: 0 };
  const formulaBox: CSSProperties = { border: `1.5px solid ${accent}`, background: ch(chapter, 100), borderRadius: 'var(--radius-md)', padding: 'var(--space-5) var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', fontSize: 'var(--text-lg)' };
  const orStyle: CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', fontStyle: 'italic' };
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
                <Fragment key={i}>
                  {i > 0 && <span style={orStyle}>or</span>}
                  <Tex tex={f} />
                </Fragment>
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
