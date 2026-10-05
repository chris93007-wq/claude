# Christine's Notes — PDF study-notes generator

Generates printable, ADHD-friendly study notes from **Christine's Notes design system**. The system has
bright Material chapter colors, pastel fills with dark ink, Merriweather / Lexend / Fira Code type, and KaTeX
math. A notes packet is written as a small React file of page templates and components and rendered to a
US Letter PDF that mixes portrait and landscape pages.

```bash
npm install
npm run dev                        # live preview at http://localhost:5173 (pick a document)
npm run pdf                        # build + render every notes/*.tsx → out/*.pdf
npm run pdf -- week-03             # just the matching document(s)
npm run new -- week-04-segmentation "Segmentation"   # start a new packet from the template
npm run typecheck
```

`npm run pdf` needs Chromium or Google Chrome. It uses `$CHROMIUM_PATH`, then a Playwright-managed Chromium,
then an installed Chrome. Fonts and KaTeX are bundled, so rendering works offline.

## What's here

| Path | |
|---|---|
| `notes/week-03-preference-measurement.tsx` | Sample packet with all 9 page types: Cover, Contents, Topic Map, 4 Notes pages, Cheat Sheet, Formula Sheet, Practice Questions, Appendix, Glossary |
| `notes/design-system.tsx` | The design system as a printable spec: palette, type, spacing, brand, layout, every component |
| `notes/_template.tsx` | Starter packet used by `npm run new` |
| `src/styles/` | Tokens (Material palette, chapter aliases, type, spacing, radius/shadow), base + highlighter/badge CSS, print geometry |
| `src/components/` | The 20 design-system components, typed |
| `src/pages/` | Page templates |
| `src/document/` | `NotesDocument` (meta, Contents, footer) and `Page` |
| `src/layout/` | 12-column `Grid`/`Span`, `Columns`, `Full`, `Stack` |
| `scripts/pdf.ts` | Renderer: two-pass PDF with Contents page numbers, overflow check, bookmarks |
| `docs/AUTHORING.md` | **How to write notes, and the design rules** |
| `.claude/skills/christines-notes/` | Claude Code skill for writing new packets with these rules |
| `project/`, `chats/`, `HANDOFF.md` | The original Claude Design handoff bundle (reference only) |

## How printing works

- Page geometry is real print CSS. `@page` sets US Letter with 0.5in margins. Named pages (`landscape`,
  `portrait-bare`, `cover`) switch orientation and footers per template.
- The footer (breadcrumb + `page / total`) is drawn in `@page` margin boxes, so it repeats on every printed
  sheet with correct numbers.
- Content flows across sheets. Cards, callouts, table rows and diagrams avoid splitting.
- On screen each template is drawn as a sheet, so the preview matches the printable width exactly.
  Browser *Print → Save as PDF* gives the same result as `npm run pdf`, except that Contents page numbers
  only come from `npm run pdf`.
