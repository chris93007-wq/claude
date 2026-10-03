import React from 'react';

/** Slim inline section divider — a short dash, an all-caps label, and a rule extending to fill the remaining width. Use to break a notes page into sections (e.g. "INTRODUCTION") without the weight of a full ChapterHeader. */
export interface SectionTitleProps {
  /** Which chapter color (1-13) tints the dash, label, and rule */
  chapter?: number;
  children?: React.ReactNode;
}
