import type { CSSProperties, ReactNode } from 'react';
import { ch, type Chapter } from '../types';

/**
 * Full worked-example walkthrough in a card: "Worked Example" badge + title, a Setup sentence (with an
 * optional supporting figure), an optional data table, a "Show the Work" step box, a highlighted final
 * answer, and a "So what" takeaway.
 */
export interface WorkedExampleStep {
  label?: string;
  lines?: string[];
}
export interface WorkedExampleProps {
  title: string;
  /** One sentence describing the scenario, shown after a bold "Setup:" label */
  setup?: ReactNode;
  /** A supporting diagram/figure shown beside the setup text — any ReactNode you provide */
  context?: ReactNode;
  /** Optional data table — first column left-aligned, rest right-aligned */
  table?: { columns: string[]; rows: (string | number)[][] };
  /** "Show the Work" steps — short label + monospace lines per step */
  steps?: WorkedExampleStep[];
  /** The highlighted final result */
  answer?: { value: string; label: string };
  /** The takeaway — why this result matters, shown after a bold "So what:" label */
  soWhat?: ReactNode;
  /** Which chapter color (1-13) tints the card */
  chapter: Chapter;
}

export function WorkedExample({ title, setup, context, table, steps = [], answer, soWhat, chapter }: WorkedExampleProps) {
  const accent = ch(chapter, 500);
  const ink = ch(chapter, 900);
  const card: CSSProperties = { border: `2px solid ${accent}`, borderTop: `6px solid ${accent}`, borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-card)', padding: 'var(--space-6)' };
  const wrap: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-body)' };
  const badge: CSSProperties = { display: 'inline-flex', alignSelf: 'flex-start', background: accent, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3.3px 10.3px', borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-2)' };
  const titleStyle: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--ink-900)', margin: 0, lineHeight: 'var(--leading-tight)' };
  const setupStyle: CSSProperties = { fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', margin: 0, flex: '1 1 260px', minWidth: 0 };
  const setupRow: CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)', flexWrap: 'wrap' };
  const contextBox: CSSProperties = { flex: '1 1 260px', minWidth: 0 };
  const tableWrap: CSSProperties = { border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden', breakInside: 'avoid' };
  const tableEl: CSSProperties = { width: '100%', borderCollapse: 'collapse' };
  const th: CSSProperties = { padding: 'var(--space-3) var(--space-4)', background: ch(chapter, 100), color: ink, fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 };
  const td: CSSProperties = { padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--ink-900)', borderTop: '1px solid var(--line)' };
  const stepsBox: CSSProperties = { border: `1.5px solid ${accent}`, background: ch(chapter, 100), borderRadius: 'var(--radius-md)', padding: 'var(--space-5) var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', breakInside: 'avoid' };
  const stepsLabel: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', color: ink };
  const stepLabel: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: ink };
  const lines: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ink-900)', lineHeight: 1.6, marginTop: 1.8 };
  const step: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 1.8 };
  const answerBox: CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3.3, padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', background: ink, color: '#fff', breakInside: 'avoid' };
  const answerValue: CSSProperties = { fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-2xl)', lineHeight: 1.2 };
  const answerLabel: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.85 };
  const soWhatBox: CSSProperties = { borderLeft: `3px solid ${accent}`, paddingLeft: 'var(--space-4)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--ink-900)', breakInside: 'avoid' };
  return (
    <div style={card}>
      <div style={wrap}>
        {/* Badge, title and setup always stay together on one sheet. */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', breakInside: 'avoid' }}>
        <div>
          <span style={badge}>Worked Example</span>
          <h3 style={titleStyle}>{title}</h3>
        </div>
        {(setup || context) && (
          <div style={setupRow}>
            {setup && <p style={setupStyle}><span style={{ fontWeight: 700 }}>Setup: </span>{setup}</p>}
            {context && <div style={contextBox}>{context}</div>}
          </div>
        )}
        </div>
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
        {soWhat && <div style={soWhatBox}><span style={{ fontWeight: 700 }}>So what: </span>{soWhat}</div>}
      </div>
    </div>
  );
}
