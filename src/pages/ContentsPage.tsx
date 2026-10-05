import type { CSSProperties } from 'react';
import { Page } from '../document/Page';
import { useDocument, type TocEntry } from '../document/context';
import { ch } from '../components/types';

export interface ContentsPageProps {
  title?: string;
}

/**
 * Compact 2-column contents list: a numbered chapter-200 badge per entry, title, dotted leader, page number.
 * Entries come from every page's `toc` prop; page numbers are filled in by `npm run pdf` (blank on screen).
 */
export function ContentsPage({ title = 'Contents' }: ContentsPageProps) {
  const doc = useDocument();
  const toc = doc?.toc ?? [];
  const pages = doc?.tocPages ?? {};
  const half = Math.ceil(toc.length / 2);

  const h1: CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, margin: '0 0 15.7px' };
  const grid: CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 28 };
  const row: CSSProperties = { display: 'flex', alignItems: 'baseline', gap: 8, padding: '6.3px 0' };
  const titleStyle: CSSProperties = { fontSize: 11, color: 'var(--ink-900)' };
  const leader: CSSProperties = { flex: 1, borderBottom: '1px dotted var(--ink-300)', margin: '0 4.7px', transform: 'translateY(-4px)' };
  const pageNo: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 9.4, color: 'var(--ink-500)', minWidth: 14, textAlign: 'right' };

  const Row = (it: TocEntry) => (
    <div key={it.n} style={row}>
      <span style={{ width: 20, height: 20, borderRadius: 5, background: ch(it.chapter, 200), color: ch(it.chapter, 900), fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7.8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, alignSelf: 'center' }}>{it.n}</span>
      <span style={titleStyle}>{it.title}</span>
      <span style={leader} />
      <span style={pageNo}>{pages[it.n] ?? ''}</span>
    </div>
  );

  return (
    <Page badge="Contents" footer={false}>
      <h1 style={h1}>{title}</h1>
      <div style={grid}>
        <div>{toc.slice(0, half).map(Row)}</div>
        <div>{toc.slice(half).map(Row)}</div>
      </div>
    </Page>
  );
}
