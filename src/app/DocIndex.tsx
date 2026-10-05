import type { CSSProperties } from 'react';

/** Landing page for `npm run dev`: lists every document in notes/. */
export function DocIndex({ slugs, missing }: { slugs: string[]; missing: string | null }) {
  const wrap: CSSProperties = { maxWidth: 720, margin: '55px auto', padding: '0 13.8px', fontFamily: 'var(--font-body)', color: 'var(--ink-900)' };
  const link: CSSProperties = { display: 'block', padding: '10.3px 13.8px', marginBottom: 6.9, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', color: 'var(--chapter-1-900)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 15 };
  return (
    <div style={wrap}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-2xl)', margin: '0 0 6.9px' }}>Christine's Notes</h1>
      <p style={{ color: 'var(--ink-700)', margin: '0 0 20.9px' }}>
        Pick a document to preview. Print it from the browser (US Letter, margins: default) or run <code>npm run pdf</code> for the final PDF with Contents page numbers.
      </p>
      {missing && <p style={{ color: 'var(--red-900)' }}>No document called “{missing}” in notes/.</p>}
      {slugs.map((s) => (
        <a key={s} href={`?doc=${s}`} style={link}>{s}</a>
      ))}
    </div>
  );
}
