import katex from 'katex';
import { useMemo, type CSSProperties } from 'react';

export interface TexProps {
  /** LaTeX source, rendered with KaTeX (e.g. "WTP = \\dfrac{u_i}{\\beta_{price}}") */
  tex: string;
  /** Display mode (block, centered) instead of inline */
  display?: boolean;
  style?: CSSProperties;
}

/** KaTeX math, rendered synchronously so it is in the DOM before the PDF is printed. */
export function Tex({ tex, display = false, style }: TexProps) {
  const html = useMemo(() => katex.renderToString(tex, { throwOnError: false, displayMode: display, output: 'html' }), [tex, display]);
  return <span style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}
