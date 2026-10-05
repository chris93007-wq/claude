import { Fragment, type CSSProperties } from 'react';
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

function OpGlyph({ op }: { op: string }) {
  const style: CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--ink-500)', fontWeight: 600 };
  return <span style={style}>{op}</span>;
}

function Connector() {
  return <div style={{ width: 2, height: 16, background: 'var(--ink-300)' }} />;
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
  const row: CSSProperties = { display: 'flex', alignItems: 'center', gap: 'var(--space-3)' };
  return (
    <div style={col}>
      <div style={box}>{node.value}</div>
      <span style={label}>{node.label}</span>
      {node.children && node.children.length > 0 && (
        <>
          <Connector />
          <div style={row}>
            {node.children.map((c, i) => (
              <Fragment key={i}>
                {i > 0 && <OpGlyph op={node.op || '×'} />}
                <ValueNode node={c} chapter={chapter} />
              </Fragment>
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
