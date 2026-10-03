import React from 'react';

/** Big friendly chapter/course title band — week/session badge (chapter-colored), mono chapter label, display-font title, optional subtitle, optional full topic list for an overview page. */
export interface ChapterHeaderProps {
  eyebrow?: string;
  /** Week/session badge text (e.g. "Week 3"), shown as a pastel pill tinted by chapterNumber */
  week?: string;
  /** Which chapter color (1-13) tints the week badge and (cycling) the topic-list numbers */
  chapterNumber?: number;
  chapter?: string;
  title: string;
  subtitle?: string;
  /** When given, renders a numbered list of every topic covered — use on an overview/chapter-opening page */
  topics?: string[];
}
