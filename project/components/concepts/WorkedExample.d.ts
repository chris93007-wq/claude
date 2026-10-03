import React from 'react';

/** Full worked-example walkthrough: title (shown inside a chapter-colored "Worked Example" badge), a Setup sentence, an optional data table, a "Show the Work" step box, a highlighted final-answer box, and a "So what" takeaway. */
export interface WorkedExampleStep {
  label?: string;
  lines?: string[];
}
export interface WorkedExampleProps {
  /** The example's title, shown next to the "Worked Example" badge */
  title?: string;
  /** One sentence describing the scenario, shown after a bold "Setup:" label */
  setup?: string;
  /** A supporting diagram/figure shown beside the setup text (e.g. a labeled shape or small illustration) — pass any ReactNode */
  context?: React.ReactNode;
  /** Optional data table — first column left-aligned, rest right-aligned */
  table?: { columns: string[]; rows: (string | number)[][] };
  /** "Show the Work" steps — short label + monospace lines per step */
  steps?: WorkedExampleStep[];
  /** The highlighted final result */
  answer?: { value: string; label: string };
  /** The takeaway — why this result matters, shown after a bold "So what:" label */
  soWhat?: React.ReactNode;
  /** Which chapter color (1-13) tints the card */
  chapter?: number;
}
