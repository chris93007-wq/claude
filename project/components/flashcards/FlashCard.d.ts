import React from 'react';

/** A small top-bordered mini explainer card for one concept — definition, optional formula in words, and the underlying why — a compact preview before the full topic treatment. */
export interface FlashCardProps {
  number?: number;
  title: string;
  /** Plain-language definition — no jargon, no formula */
  definition: string;
  /** The formula spelled out in words, not symbols. Omit if the concept has none. */
  formula?: string;
  /** The underlying logic that makes the formula make sense */
  why: string;
  /** Which chapter color (1-8) tints the top border, title, and formula box */
  chapter?: number;
}

/** Grid of FlashCards, one per concept, for an overview/table-of-contents page. */
export interface FlashcardGridProps {
  cards?: Array<{ number?: number; title: string; definition: string; formula?: string; why: string; chapter?: number }>;
  columns?: number;
}
