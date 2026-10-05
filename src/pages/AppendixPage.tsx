import type { ReactNode } from 'react';
import { Page } from '../document/Page';
import { useDocument } from '../document/context';
import type { TocSpec } from '../document/NotesDocument';
import { TopicHeader } from '../components/structure/TopicHeader';
import type { Chapter } from '../components/types';

export interface AppendixPageProps {
  toc?: TocSpec;
  /** Text badge above the heading, e.g. "Appendix A" */
  label?: string;
  title: string;
  kicker?: string;
  /** One-paragraph lead-in */
  intro?: ReactNode;
  /** Badge color; defaults to the brand chapter */
  chapter?: Chapter;
  orientation?: 'portrait' | 'landscape';
  /** Usually one wide ComparisonTable */
  children?: ReactNode;
}

/** Reference data page — landscape by default so wide tables fit every column. */
export function AppendixPage({ toc, label, title, kicker, intro, chapter, orientation = 'landscape', children }: AppendixPageProps) {
  const doc = useDocument();
  return (
    <Page toc={toc} badge="Appendix" orientation={orientation}>
      {label && <div style={{ marginBottom: 9.4 }}><span className={`badge ch-${chapter ?? doc?.meta.brandChapter ?? 1}`}>{label}</span></div>}
      <TopicHeader title={title} kicker={kicker} />
      {intro && <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.65, margin: '12.5px 0 15.7px' }}>{intro}</p>}
      {children}
    </Page>
  );
}
