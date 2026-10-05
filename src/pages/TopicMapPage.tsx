import type { ReactNode } from 'react';
import { Page } from '../document/Page';
import { useDocument } from '../document/context';
import type { TocSpec } from '../document/NotesDocument';
import { ChapterHeader } from '../components/structure/ChapterHeader';
import { FlashcardGrid, type FlashcardGridProps } from '../components/flashcards/FlashCard';
import type { Chapter } from '../components/types';

export interface TopicMapPageProps {
  toc?: TocSpec;
  /** Mono label next to the week badge */
  label?: string;
  /** Defaults to the document title */
  title?: string;
  subtitle?: string;
  /** Week-badge color; defaults to the brand chapter */
  chapterNumber?: Chapter;
  /** One flashcard per topic in the packet */
  cards: FlashcardGridProps['cards'];
  cardColumns?: number;
  /**
   * Content after the flashcards, laid out in a 2-column grid (wrap a child in <Full> to span both columns).
   * Typically a SectionTitle "Introduction" and a couple of paired paragraphs/callouts.
   */
  children?: ReactNode;
}

/** Chapter overview: ChapterHeader, then the introduction (first) in a space-saving 2-column grid, then a flashcard per topic — sized to fit one sheet. */
export function TopicMapPage({ toc, label = 'Overview', title, subtitle, chapterNumber, cards, cardColumns = 2, children }: TopicMapPageProps) {
  const doc = useDocument();
  return (
    <Page toc={toc}>
      <ChapterHeader compact chapterNumber={chapterNumber ?? doc?.meta.brandChapter ?? 1} week={doc?.meta.week} chapter={label} title={title ?? doc?.meta.title ?? ''} subtitle={subtitle} />
      {/* Introduction first, then a flashcard per topic. Chromium ignores break-inside on grid rows, so the intro block is kept together as a whole. */}
      {children && <div className="no-break" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', columnGap: 34, rowGap: 13, alignItems: 'start', marginBottom: 12 }}>{children}</div>}
      <FlashcardGrid cards={cards} columns={cardColumns} />
    </Page>
  );
}
