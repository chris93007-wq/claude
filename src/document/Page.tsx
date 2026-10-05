import type { CSSProperties, ReactNode } from 'react';
import { PageBadge } from '../components/structure/PageBadge';
import { PageFooter } from '../components/structure/PageFooter';
import type { TocSpec } from './NotesDocument';
import { useDocument, usePageSlot } from './context';

export interface PageProps {
  /** Portrait (default) or landscape US Letter */
  orientation?: 'portrait' | 'landscape';
  /** Show the breadcrumb + page-number footer (default true) */
  footer?: boolean;
  /** PageBadge label (e.g. "Notes Page"). Every content page except the Cover gets one. Omit for none. */
  badge?: string;
  /** List this page on the Contents page */
  toc?: TocSpec;
  /** Full-bleed page with no margins (Cover only) */
  cover?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * One page template = one or more printed sheets. Content flows onto extra sheets automatically; every
 * template starts on a fresh sheet. Use directly for custom pages, or via the ready-made templates.
 */
export function Page({ orientation = 'portrait', footer = true, badge, cover = false, className, style, children }: PageProps) {
  const doc = useDocument();
  const slot = usePageSlot();
  const name = cover ? 'cover' : footer ? (orientation === 'landscape' ? 'landscape' : 'portrait') : `${orientation}-bare`;
  return (
    <section className={['page', className].filter(Boolean).join(' ')} data-page={name} data-orientation={orientation} style={style}>
      {slot?.tocEntry && <span className="toc-marker" aria-hidden="true">TOCMARK-{slot.tocEntry.n}-</span>}
      <div className="page-body">
        {badge && <PageBadge label={badge} />}
        {children}
      </div>
      {footer && !cover && (
        <div className="screen-only screen-footer">
          <PageFooter chapterLabel={doc?.meta.footerLabel ?? doc?.meta.title} page={slot?.index ?? 1} totalPages="…" />
        </div>
      )}
    </section>
  );
}
