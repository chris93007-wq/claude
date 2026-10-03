import React from 'react';

/**
 * Three-part explainer for one concept: plain-language definition, the formula(s) rendered as real math (LaTeX via KaTeX),
 * an optional visual calculation breakdown diagram (connected value boxes), and the underlying logic that makes the formula make sense.
 */
export interface ConceptCardProps {
  term: string;
  /** Plain-language definition — no jargon, no formula */
  definition: string;
  /** One or more LaTeX strings (rendered with KaTeX), joined with "or" when more than one */
  formulas?: string[];
  /**
   * Optional recursive value-box diagram walking a worked example (e.g. WTP = utility × $/util, where $/util = price range ÷ utility range).
   * Each node: { value: string, label: string, op?: '×'|'÷'|'+'|'−', filled?: boolean, tint?: boolean, children?: BreakdownNode[] }.
   * `filled` = solid dark accent box (the final result); `tint` = pastel accent box; neither = plain outlined box.
   */
  breakdown?: { value: string; label: string; op?: string; filled?: boolean; tint?: boolean; children?: any[] };
  /** The underlying logic/intuition for why the formula works — not just a fact to memorize. */
  why: React.ReactNode;
  /** Which chapter color (1-13) tints the card */
  chapter?: number;
}
