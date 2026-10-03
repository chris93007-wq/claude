import React from 'react';

/** A labeled content block: a chapter-tinted SectionTitle divider (dash + label + rule) followed by its body content, spaced consistently. Use to break a notes page into named sections without repeating the title + spacing boilerplate. */
export interface SectionProps {
  /** Which chapter color (1-13) tints the section title */
  chapter?: number;
  /** The section's label (e.g. "Introduction", "Worked Example") */
  title: string;
  children?: React.ReactNode;
}
