/** `npm run new -- week-04-segmentation "Segmentation"` → notes/week-04-segmentation.tsx from the template. */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [slug, ...titleWords] = process.argv.slice(2);
if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error('Usage: npm run new -- <file-name-in-kebab-case> ["Title"]');
  process.exit(1);
}
const file = join(root, 'notes', `${slug}.tsx`);
if (existsSync(file)) {
  console.error(`notes/${slug}.tsx already exists`);
  process.exit(1);
}
const title = titleWords.join(' ') || slug.replace(/^week-\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
writeFileSync(file, readFileSync(join(root, 'notes', '_template.tsx'), 'utf8').replace('__TITLE__', title.replace(/'/g, "\\'")));
console.log(`Created notes/${slug}.tsx\n  preview: npm run dev  →  ?doc=${slug}\n  pdf:     npm run pdf -- ${slug}`);
