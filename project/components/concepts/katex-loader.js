let katexReady = null;
export function ensureKatex() {
  if (window.katex) return Promise.resolve(window.katex);
  if (katexReady) return katexReady;
  katexReady = new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
    script.onload = () => resolve(window.katex);
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return katexReady;
}
