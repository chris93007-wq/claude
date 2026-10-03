import React from 'react';

/** Recursive connected-box diagram for walking a worked-example calculation top-down (result, then the operands that produce it, which may themselves break down further). */
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
  chapter?: number;
}
