import React from 'react';

/** Numbered topic heading that divides a chapter into its sub-topics. */
export interface TopicHeaderProps {
  topicNumber?: number;
  title: string;
  kicker?: string;
}
