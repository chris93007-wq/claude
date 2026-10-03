import React from 'react';

/** The standard top-of-page identity badge used on every content page except the Cover Page — a week/session pill plus a mono page-type label (e.g. "WEEK 3" + "APPENDIX"). Always the same chapter color across a document (the doc's primary/brand chapter), independent of whatever topic colors appear in the page body. */
export interface PageBadgeProps {
  /** Week/session pill text */
  week?: string;
  /** Mono uppercase page-type label (e.g. "CONTENTS", "APPENDIX", "CHEAT SHEET") */
  label: string;
  /** Which chapter color (1-13) tints the pill and label — use the document's primary/brand chapter consistently, not the per-section topic color */
  chapter?: number;
}
