import React from 'react';

/** Four-column glossary table (Term / Simple Explanation / Why It Matters / Example) for a topic's key-terms recap. */
export interface KeyTermsTableProps {
  terms?: Array<{ term: string; explanation: string; why: string; example: string }>;
  /** Which chapter color (1-13) tints the header row */
  chapter?: number;
}
