import type { CSSProperties } from 'react';
import { ch, type Chapter } from '../types';

/** Recursive connected-box diagram for walking a calculation top-down: a result, then the operands that produce it, which may break down further. */
export interface FormulaTreeNode {
  value: string;
  label: string;
  /** Operator shown between this node's children */
  op?: '×' | '÷' | '+' | '−';
  /** Solid dark accent fill — use on the single top/result node */
  filled?: boolean;
  /** Pastel accent fill — use to call out one operand */
  tint?: boolean;
  children?: FormulaTreeNode[];
}
export interface FormulaTreeProps {
  root: FormulaTreeNode;
  chapter: Chapter;
}

const LINE = 'var(--ink-300)';

function Connector({ h = 16 }: { h?: number }) {
  return <div style={{ width: 2, height: h, background: LINE }} />;
}

function ValueNode({ node, chapter }: { node: FormulaTreeNode; chapter: Chapter }) {
  const col: CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' };
  const box: CSSProperties = {
    padding: '8px 16px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-base)',
    border: node.filled ? 'none' : `1.5px solid ${node.tint ? ch(chapter, 500) : 'var(--line)'}`,
    background: node.filled ? ch(chapter, 900) : node.tint ? ch(chapter, 100) : 'var(--surface-card)',
    color: node.filled ? '#fff' : node.tint ? ch(chapter, 900) : 'var(--ink-900)',
  };
  const label: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--ink-500)', textAlign: 'center' };
  const kids = node.children ?? [];
  const op = node.op || '×';
  return (
    <div style={col}>
      <div style={box}>{node.value}</div>
      <span style={label}>{node.label}</span>
      {kids.length > 0 && (
        <>
          {/* stem from this result down to the bar that joins its operands */}
          <Connector h={12} />
          <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: -8 }}>
            {kids.map((c, i) => (
              <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 var(--space-6)' }}>
                {/* horizontal bar: from the first operand's center to the last one's */}
                {kids.length > 1 && <div style={{ position: 'absolute', top: 0, height: 2, background: LINE, left: i === 0 ? '50%' : 0, right: i === kids.length - 1 ? '50%' : 0 }} />}
                {/* drop from the bar into this operand */}
                <Connector h={14} />
                <ValueNode node={c} chapter={chapter} />
                {/* operator between this operand and the next, level with the value boxes */}
                {i < kids.length - 1 && (
                  <span style={{ position: 'absolute', right: -10, top: 14 + 19, transform: 'translate(0, -50%)', width: 20, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--ink-500)', fontWeight: 600, background: 'var(--surface-card)', lineHeight: 1 }}>{op}</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function FormulaTree({ root, chapter }: FormulaTreeProps) {
  const wrap: CSSProperties = { display: 'flex', justifyContent: 'center', padding: 'var(--space-4) 0', breakInside: 'avoid' };
  return <div style={wrap}><ValueNode node={root} chapter={chapter} /></div>;
}
