import type { CSSProperties, ReactNode } from 'react';
import { SectionTitle } from './SectionTitle';
import type { Chapter } from '../types';

/** A labeled content block: a chapter-tinted SectionTitle followed by its body content, spaced consistently. */
export interface SectionProps {
  /** Which chapter color (1-13) tints the section title */
  chapter: Chapter;
  /** The section's label (e.g. "Introduction", "Worked Example") */
  title: string;
  children?: ReactNode;
}

export function Section({ chapter, title, children }: SectionProps) {
  const wrap: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', margin: 'var(--space-5) 0' };
  const content: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' };
  return (
    <div style={wrap}>
      <SectionTitle chapter={chapter}>{title}</SectionTitle>
      <div style={content}>{children}</div>
    </div>
  );
}
