import React from 'react';

/** Top-down branching flowchart — box or diamond (decision) nodes connected by arrows, each edge optionally labeled (e.g. "Yes"/"No"). Good for a decision tree like "which measurement method should I use?" */
export interface FlowchartNode {
  label: string;
  /** 'box' (default, a statement/action) or 'diamond' (a decision point) */
  shape?: 'box' | 'diamond';
  /** Solid dark accent fill — use on a terminal/outcome node */
  filled?: boolean;
  children?: Array<{ label?: string; to: FlowchartNode }>;
}
export interface FlowchartProps {
  root: FlowchartNode;
  /** Which chapter color (1-13) tints the nodes */
  chapter?: number;
}
