import React from 'react';

/** A compact inline sequence or equivalence chain — plain pill boxes linked by a connector glyph. Lighter weight than StepPipeline: no step numbers, no body copy, just the chain itself (e.g. "MaxDiff → Binary data → TURF" or "Conjoint = Consider + Jointly"). */
export interface ChainProps {
  items?: string[];
  /** Which chapter color (1-13) tints the pills */
  chapter?: number;
  /** Glyph drawn between items */
  connector?: '→' | '=' | '+' | '⇒';
}
