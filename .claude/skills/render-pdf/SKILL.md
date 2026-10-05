---
name: render-pdf
description: Render Christine's study-notes packets (notes/*.tsx) to PDF by running `npm run pdf`, then check the result. Use when asked to build, render, regenerate or export the notes PDF, or after editing anything in notes/ or src/.
user-invocable: true
disable-model-invocation: false
argument-hint: "[document name filter, e.g. week-03]"
allowed-tools: Bash(npm install), Bash(npm run pdf*), Bash(npm run typecheck), Bash(pdftoppm *), Bash(pdftotext *), Read
---

Render the notes to PDF. `$ARGUMENTS` is an optional filter on document names (matches part of a file name in `notes/`); empty means render every document.

1. If `node_modules/` is missing, run `npm install` first.
2. Run `npm run pdf -- $ARGUMENTS` (with no arguments, just `npm run pdf`). It builds, renders each document to `out/<name>.pdf`, fills in the Contents page numbers, and prints one `✓ <name>.pdf — N pages` line per document.
3. Read the output:
   - `⚠ page template N: … overflows` means content is wider than the printable area and gets clipped. Name the page and the text, and fix it in the notes file (usually by moving a wide block out of a 2-column `<Columns>`, or making the page landscape).
   - `✗` lines are runtime errors. Fix them and re-run.
   - `No Chromium found` means Chrome or Chromium isn't installed, or set `CHROMIUM_PATH` to it.
4. Spot-check the result before reporting: `pdftoppm -r 50 -png out/<name>.pdf /tmp/pg` and look at a few pages (cover, a notes page, the landscape pages).
5. Tell the user the output path(s), the page count, and any warnings you could not resolve.

Do not edit generated files in `out/` or `dist/`; change `notes/` or `src/` and re-render.
