import React from 'react';
import { SectionTitle } from './SectionTitle.jsx';

export function Section({ chapter = 1, title, children }) {
  const wrap = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', margin: 'var(--space-5) 0' };
  const content = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' };
  return (
    <div style={wrap}>
      <SectionTitle chapter={chapter}>{title}</SectionTitle>
      <div style={content}>{children}</div>
    </div>
  );
}
