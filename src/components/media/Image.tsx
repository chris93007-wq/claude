import type { CSSProperties } from 'react';
import { ch, type Chapter } from '../types';

/** An image frame plus its caption. Shows a chapter-tinted placeholder box when no `src` is given, so the layout reads correctly before real artwork is dropped in. */
export interface ImageProps {
  /** Image URL or import — omit to show a labeled placeholder frame instead */
  src?: string;
  /** Alt text; also shown as the placeholder label when src is omitted */
  alt?: string;
  /** Caption text shown below the image */
  caption?: string;
  /** Aspect ratio for the frame, e.g. "16/9", "4/3", "1/1" */
  ratio?: string;
  /** How the image fills the frame — "cover" crops, "contain" letterboxes (use for diagrams) */
  fit?: 'cover' | 'contain';
  /** Which chapter color (1-13) tints the frame */
  chapter: Chapter;
}

export function Image({ src, alt, caption, ratio = '16/9', fit = 'cover', chapter }: ImageProps) {
  const frame: CSSProperties = { aspectRatio: ratio, borderRadius: 'var(--radius-md)', border: `1.5px solid ${ch(chapter, 500)}`, background: ch(chapter, 50), overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const img: CSSProperties = { width: '100%', height: '100%', objectFit: fit, display: 'block' };
  const placeholder: CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: ch(chapter, 900), opacity: 0.6, padding: 'var(--space-4)', textAlign: 'center' };
  const captionStyle: CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', lineHeight: 'var(--leading-body)' };
  return (
    <figure style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', margin: 0 }}>
      <div style={frame}>
        {src ? <img src={src} alt={alt || ''} style={img} /> : <span style={placeholder}>{alt || 'Image placeholder'}</span>}
      </div>
      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
}
