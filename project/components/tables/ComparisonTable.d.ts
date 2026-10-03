import React from 'react';

/** Generic data table (bundle comparisons, design-choice grids, solution tables) with a tinted header row in one category color. */
export interface ComparisonTableProps {
  columns?: Array<{ key: string; label: string }>;
  rows?: Array<Record<string, React.ReactNode>>;
  /** Which chapter color (1-13) tints the header row */
  chapter?: number;
}
