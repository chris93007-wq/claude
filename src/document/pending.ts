/**
 * Async content (Mermaid diagrams, anything that renders after mount) registers its work here, and
 * NotesDocument only reports `__NOTES_READY__` — which scripts/pdf.ts waits for — once all of it has finished
 * and been painted. Without this the PDF could be printed with empty diagram frames.
 */
const pending = new Set<Promise<unknown>>();

export function trackPending<T>(p: Promise<T>): Promise<T> {
  pending.add(p);
  const done = () => pending.delete(p);
  p.then(done, done);
  return p;
}

const nextFrames = () => new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));

/** Resolves when nothing is pending (including work that gets queued while waiting) and React has committed. */
export async function allSettled(): Promise<void> {
  do {
    while (pending.size) await Promise.allSettled([...pending]);
    await nextFrames();
  } while (pending.size);
}
