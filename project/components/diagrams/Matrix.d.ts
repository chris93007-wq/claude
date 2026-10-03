import React from 'react';

/** A row × column grid for 2D frameworks (e.g. method vs. use-case fit) — tinted row/column headers in one accent color, plain cells. */
export interface MatrixProps {
  rowLabels?: string[];
  colLabels?: string[];
  /** 2D array, cells[row][col] */
  cells?: React.ReactNode[][];
  /** Which chapter color (1-13) tints the headers */
  chapter?: number;
}
