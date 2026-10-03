import React from 'react';

/** Horizontal numbered step flow (e.g. MaxDiff → Conversion → TURF) connected by arrow glyphs. */
export interface StepPipelineProps {
  steps?: Array<{ label: string; body?: string }>;
  /** Which chapter color (1-5) fills the number badges, matching the surrounding section */
  chapter?: 1 | 2 | 3 | 4 | 5;
}
