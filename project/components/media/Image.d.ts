import React from 'react';

/** An image frame plus its caption, stacked with consistent spacing — a chapter-tinted placeholder box shows when no `src` is given, so the layout reads correctly before real artwork is dropped in. */
export interface ImageProps {
  /** Image URL — omit to show a labeled placeholder frame instead */
  src?: string;
  /** Alt text; also shown as the placeholder label when src is omitted */
  alt?: string;
  /** Caption text shown below the image */
  caption?: string;
  /** Aspect ratio for the frame, e.g. "16/9", "4/3", "1/1" */
  ratio?: string;
  /** Which chapter color (1-13) tints the placeholder frame */
  chapter?: number;
}
