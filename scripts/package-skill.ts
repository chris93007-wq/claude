/**
 * Package the generator as a self-contained skill zip for the Claude desktop app (Claude chat + Cowork):
 *   npm run skill:zip   →   skill-dist/christines-notes.zip
 * Upload it in Settings → Capabilities → Skills (or Customize → Skills, depending on app version).
 * The Claude Code project skill in .claude/skills/ is separate and is not touched.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'skill-dist');
const dir = join(out, 'christines-notes');
const gen = join(dir, 'generator');

rmSync(out, { recursive: true, force: true });
mkdirSync(gen, { recursive: true });

writeFileSync(join(dir, 'SKILL.md'), readFileSync(join(root, 'skill', 'SKILL.md')));
cpSync(join(root, 'docs', 'AUTHORING.md'), join(dir, 'AUTHORING.md'));

for (const f of ['package.json', 'package-lock.json', 'tsconfig.json', 'vite.config.ts', 'index.html', '.gitignore']) cpSync(join(root, f), join(gen, f));
for (const d of ['src', 'scripts', 'notes']) cpSync(join(root, d), join(gen, d), { recursive: true, filter: (p) => !p.endsWith('package-skill.ts') });
// the project skill and handoff bundle are not part of the generator
for (const p of [join(gen, 'notes', 'assets', '.gitkeep')]) if (!existsSync(p)) mkdirSync(dirname(p), { recursive: true });

const zip = join(out, 'christines-notes.zip');
execFileSync('zip', ['-qr', zip, 'christines-notes'], { cwd: out });
console.log(`✓ ${zip}`);
