import React from 'react';

/** Thin page-bottom bar: chapter breadcrumb on the left, mono "page / total" on the right. */
export interface PageFooterProps {
  chapterLabel?: string;
  page?: number;
  totalPages?: number;
}
