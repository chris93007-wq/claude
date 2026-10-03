import React from 'react';

export function Image({ src, alt, caption, ratio = '16/9', chapter = 1 }) {
  const wrap = { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' };
  const frame = { aspectRatio: ratio, borderRadius: 'var(--radius-md)', border: `1.5px solid var(--chapter-${chapter}-500)`, background: `var(--chapter-${chapter}-50)`, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const img = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };
  const placeholder = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: `var(--chapter-${chapter}-900)`, opacity: 0.6, padding: 'var(--space-4)', textAlign: 'center' };
  const captionStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)', lineHeight: 'var(--leading-body)' };
  return (
    <figure style={{ ...wrap, margin: 0 }}>
      <div style={frame}>
        {src ? <img src={src} alt={alt || ''} style={img} /> : <span style={placeholder}>{alt || 'Image placeholder'}</span>}
      </div>
      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
}
