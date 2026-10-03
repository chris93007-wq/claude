import React from 'react';

/**
 * A full-bleed pastel note box, colored by the chapter it sits in (never a fixed per-type color).
 * The label is plain text you provide yourself — e.g. "KEY INSIGHT", "EXAM", "COMMON MISTAKE" — matching
 * the source class notes' recurring markers, but no longer auto-generated from a type name.
 */
export interface CalloutProps {
  /** Which chapter color (1-13) tints the box border, background, and label text — always pass this */
  chapter?: number;
  /** The all-caps pill text shown in the border notch (e.g. "KEY INSIGHT", "EXAM") — type it yourself */
  label?: string;
  children?: React.ReactNode;
}
