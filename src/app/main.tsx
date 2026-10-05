import { StrictMode, Suspense, lazy, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/index.css';
import { DocIndex } from './DocIndex';

/** Every file in notes/ (except _-prefixed templates) is a document: `?doc=<file name without .tsx>`. */
const modules = import.meta.glob<{ default: ComponentType }>(['../../notes/*.tsx', '!../../notes/_*.tsx']);
const docs = Object.fromEntries(Object.entries(modules).map(([path, load]) => [path.split('/').pop()!.replace(/\.tsx$/, ''), load]));

const slug = new URLSearchParams(location.search).get('doc');
const load = slug ? docs[slug] : undefined;
const Doc = load ? lazy(load) : null;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {Doc ? (
      <Suspense fallback={null}>
        <Doc />
      </Suspense>
    ) : (
      <DocIndex slugs={Object.keys(docs).sort()} missing={slug} />
    )}
  </StrictMode>,
);
