import React from 'react';

/** Two-column side-by-side comparison with a center divider — for contrasting a pair of concepts (e.g. Stated vs Revealed Preference). Each side gets its own title, accent color, and bullet list. */
export interface SplitSide {
  title: string;
  items?: string[];
  /** Which chapter color (1-13) tints this side's title and bullet dots */
  chapter?: number;
}
export interface SplitProps {
  left: SplitSide;
  right: SplitSide;
}
