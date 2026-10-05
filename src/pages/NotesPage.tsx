import type { ReactNode } from 'react';
import { Page } from '../document/Page';
import type { TocSpec } from '../document/NotesDocument';

export interface NotesPageProps {
  toc?: TocSpec;
  /** PageBadge label */
  badge?: string;
  orientation?: 'portrait' | 'landscape';
  /**
   * Dense per-topic lecture notes: TopicHeader, paragraphs, Sections, ConceptCards, WorkedExamples,
   * Callouts, tables, diagrams. Plain <p> children get the notes body style. Use <Columns> for 2-col asides.
   */
  children?: ReactNode;
}

/** A real per-topic notes page — flows onto as many sheets as the content needs. */
export function NotesPage({ toc, badge = 'Notes Page', orientation = 'portrait', children }: NotesPageProps) {
  return (
    <Page toc={toc} badge={badge} orientation={orientation} className="notes-flow">
      {children}
    </Page>
  );
}
