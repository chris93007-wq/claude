---
name: christines-notes
description: Turn slides, readings or lecture notes into an ADHD-friendly, printable PDF study packet (cover, contents, topic map, notes pages, cheat sheet, formula sheet, practice questions, appendix, glossary) in Christine's design system — bright Material chapter colors, definition / formula / why for every concept, US Letter with narrow margins. Use when asked to make study notes, a study guide, a cheat sheet, a formula sheet or practice questions for a class week, or to re-render an existing packet. Builds the PDF by running the bundled generator (`npm run pdf`).
---

# Christine's Notes — PDF study-packet generator

This skill folder contains a complete generator in `generator/` (React + Vite + a headless-Chromium PDF renderer). Calling the skill means: write the packet's content file, then **run `npm run pdf`** to produce the PDF.

## 0. Check the environment (30 seconds)

Run these. The build needs all three to pass:

```bash
node -v                      # Node 18 or newer
npm ping                     # can reach the npm registry
ls /opt/pw-browsers 2>/dev/null; which chromium chromium-browser google-chrome 2>/dev/null   # a Chromium/Chrome
```

If something is missing, say so plainly and stop. Don't fake a PDF. Tell the user which piece is missing and offer the fallback in "If it can't run here" below.

## 1. Set up a working copy

The skill folder may be read-only, so work on a copy:

```bash
cp -r <this skill folder>/generator ./christines-notes-work
cd christines-notes-work && npm install
```

(If the Chromium path differs from the defaults, export `CHROMIUM_PATH=/path/to/chrome`.)

## 2. Learn the rules, then write the packet

1. Read `AUTHORING.md` (in this skill folder) and skim `generator/notes/week-03-preference-measurement.tsx`, the reference packet.
2. Collect what the user gave you: slides, readings, notes, topics. If the course, week, topics or wanted page types are unclear, ask first.
3. `npm run new -- week-NN-topic "Title"` creates `notes/week-NN-topic.tsx` from the template. Replace every TODO.
4. Follow the rules strictly: one contrasting chapter color per topic, used everywhere that topic appears; red/green/yellow never as chapter colors; `<mark>` is the only highlight; callouts only KEY INSIGHT / NOTES / MEMORY AID; every concept has definition + formula + why; everything printable (nothing hidden); exact numbers with their formula; no emoji.

## 3. Render

```bash
npm run typecheck
npm run pdf -- week-NN
```

Read the output: `✓ <name>.pdf — N pages` is success. Fix every `⚠ … overflows` warning and every `✗` error, then re-run. Spot-check by rasterizing a few pages (`pdftoppm -r 50 -png out/<name>.pdf pg`) and looking at them if the tools allow it.

## 4. Deliver

Copy `out/<name>.pdf` to wherever the app lets the user get files (the outputs folder; in Cowork, the folder the user selected) and tell them the path, page count, and any unresolved warnings.

## Re-rendering an existing packet

If the user only wants a re-render or small edit, skip step 2's authoring: edit the file in `notes/`, run `npm run pdf -- <name>`, deliver.

## If it can't run here

If there's no Node, no network for `npm install`, or no Chromium, the PDF cannot be built in this environment. Do the authoring anyway, deliver the `notes/<name>.tsx` file, and tell the user to render it on their own machine: clone `https://github.com/chris93007-wq/claude`, put the file in `notes/`, then `npm install && npm run pdf`. Say clearly that you did not produce a PDF.
