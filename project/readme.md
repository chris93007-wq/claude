# Christine's ADHD-Friendly Notes — Design System

A personal design system for Christine's class notes, built around one real artifact: **Week 3 Class Notes — Preference Measurement** (MKT 282 Marketing Analytics, TEMBA Section II, Prof. Raghunath Rao, McCombs School of Business, UT Austin), prepared by Christine John from pre-class notes + in-class discussion. That PDF lives at `uploads/Week 3 Notes - Preference Measurement-1.pdf` and is the only source material provided — no codebase, Figma file, or existing brand kit was attached.

The notes themselves are already structured like a design system waiting to happen: recurring note types (KEY INSIGHT, EXAM, COMMON MISTAKE, MEMORY AID, WORKED EXAMPLE, SEE ALSO), worked-example walkthroughs, key-terms glossary tables, data/solution tables, and a chapter → topic → page-footer hierarchy. This system turns that structure into reusable tokens and components so future notes (any subject) can be laid out consistently, quickly, and in a way that's easier for an ADHD reader to scan: color-coded by note type, generously spaced, rounded, no walls of undifferentiated text.

**Brand direction:** "ADHD friendly, bright & pastel colors" (per brief). No logo or existing visual identity was provided — there is no company, just Christine's own notes — so this system invents a palette and type pairing from scratch rather than extracting one from an existing asset. See CAVEATS at the bottom.

## Content fundamentals

Derived from the source PDF's actual prose:

- **Voice:** plain, direct, instructional — no "I" or "you," written in third person about the concepts ("MaxDiff answers 'what matters most'"). Imperative only in memory aids ("never divide by selections only").
- **Structure over sentences:** content is organized as labeled chunks (KEY, EXAM, COMMON MISTAKE, DESIGN CHOICE / WHY IT MATTERS, worked examples, key-terms tables) rather than long paragraphs. A typical topic is: concept paragraph → one or two callouts → a worked numeric example → a key-terms recap table.
- **Precision language:** numbers are exact and shown with their formula ("Net score = 50.3% − 6.5% = +43.8pp"), not rounded or hand-waved.
- **Casing:** callout labels are ALL CAPS ("KEY INSIGHT", "COMMON MISTAKE"); table headers are Title Case; body text is standard sentence case.
- **No emoji.** The notes use zero emoji and zero decorative icons — emphasis comes entirely from bold labels and color.
- **Attribution line:** every page carries "Prepared by Christine John" and a "for personal study use only" note — a personal, non-commercial artifact, not a product.

## Visual foundations

- **Color:** built on the full Material-UI color system (`tokens/material-colors.css`) — 19 hues × 10 steps each (50–900), referenced directly by name and step (e.g. `var(--green-100)`, `var(--deep-orange-700)`), exactly matching MUI's published values. On top of that, thirteen `chapter-N` aliases (e.g. `--chapter-1-500`) map each chapter to one Material hue — `chapter-1`→indigo, `chapter-2`→orange, `chapter-3`→teal, `chapter-4`→pink, `chapter-5`→lime, `chapter-6`→deep purple, `chapter-7`→amber, `chapter-8`→light blue, `chapter-9`→deep orange, `chapter-10`→purple, `chapter-11`→cyan, `chapter-12`→light green, `chapter-13`→blue — deliberately scrambled (not color-wheel order) so adjacent chapters contrast. Components take a `chapter` number and read its -100/-300/-500/-900 steps directly — never a translucent/alpha tint. Two colors are reserved outside the chapter system: `Highlight special="trap"` is fixed `--red-100`/`--red-900` and `special="tip"` is fixed `--green-100`/`--green-900`.
- **Type:** Merriweather (serif display face) for chapter/topic titles and pill labels; Lexend (geometric, high-legibility body face) for all paragraph and table text at a generous 1.65 line-height and a 17px base size — larger than typical body copy, deliberately, for easier scanning; Fira Code for page numbers and raw data values, to visually separate "math" from "prose." Math formulas (inside `ConceptCard`) render via KaTeX, loaded from CDN — the only non-design-system typeface, used strictly for variable-heavy equations, never for headings or labels.
- **Shape:** fully rounded — radii from 8px (chips) to 20px (callout boxes) to a full pill for labels. No sharp corners anywhere.
- **Shadow:** soft and ink-tinted (`rgba(34,34,59,…)`), never pure black — low-elevation `shadow-sm` for resting cards, `shadow-md` for anything that should pop slightly.
- **Callouts:** solid pastel fill, full-bleed (no left border, no outline) — a small dark-filled pill carries the label in the corner. This was a deliberate choice against the "rounded card + colored left border" pattern, which reads as generic/AI-templated; a full pastel fill reads as a highlighter/sticky-note instead.
- **Backgrounds:** flat color only — no gradients, no photography, no illustration, no texture/grain. The source material is academic lecture notes; imagery would be noise.
- **Animation:** none defined — this is a static document system, not an interactive product. If this system is later used for an interactive note-taking app, add hover/press states before introducing motion.
- **Borders:** 1px `--line` (a warm light gray) on tables and dividers only; callouts and tags use fill + pill, not borders.
- **Layout:** single-column, generously margined, max ~820px reading width — notes are read top-to-bottom, not scanned as a dashboard.

## Iconography

**No icon system exists in the source** — the PDF uses zero icons, zero emoji, and zero unicode symbols as icons (the only non-text glyphs are a plain arrow `→` in process flows and standard math symbols in formulas). The brand's entire "iconography" is its bold all-caps text-badge system (KEY INSIGHT, EXAM, COMMON MISTAKE, MEMORY AID, WORKED EXAMPLE, SEE ALSO) — see the **Text Badges** card in the Brand group. Do not introduce a drawn icon set or emoji into this system; if a future note genuinely needs a glyph (e.g. a checkmark), reach for a plain Unicode character rather than custom SVG.

## Components

Not derived from an existing component library (none was provided) — authored from scratch, sized to what the source notes actually use:

- **`components/callouts/Callout`** — pastel note box, colored by a `chapter` number (1-13); label text is typed manually.
- **`components/tables/KeyTermsTable`**, **`ComparisonTable`** — the glossary recap table and the general data/bundle-comparison table, both chapter-colored.
- **`components/structure/ChapterHeader`**, **`PageBadge`**, **`SectionTitle`**, **`TopicHeader`**, **`PageFooter`** — the chapter-opening title band (with a `chapterNumber`-tinted week badge), the standalone week+page-type badge for non-cover pages, a slim dash+rule section divider, the numbered topic divider, and the page-bottom breadcrumb.
- **`components/flow/StepPipeline`** — numbered, arrow-connected process steps (e.g. MaxDiff → Conversion → TURF), chapter-colored badges.
- **`components/text/`** was removed — Tag/Highlight are gone; use the inline badge (`guidelines/brand-badges.html`) and highlighter (`guidelines/brand-highlight.html`) patterns directly where needed.
- **`components/concepts/ConceptCard`** — three-part explainer for one concept: plain-language definition, formula spelled out in words, and the underlying "why."
- **`components/concepts/WorkedExample`** — full walkthrough: title + method tags, Setup sentence (with an optional supporting diagram via `context`), a data table, a "Show the Work" step box, a highlighted final answer, and a "So what" takeaway.
- **`components/diagrams/FormulaTree`**, **`Chain`**, **`Split`**, **`Matrix`**, **`Flowchart`** — recursive calculation breakdown diagram, inline sequence/equivalence chain, two-sided comparison, row×column framework grid, and a branching decision flowchart. All chapter-colored.
- **`components/flashcards/FlashCard`**, **`FlashcardGrid`** — mini definition/formula/why cards for an overview page, chapter-colored.
- **`components/media/Image`** — image frame + caption, with a chapter-tinted placeholder box when no `src` is given yet.

### Intentional additions
None of the above were "invented beyond the source" — every component maps directly to a recurring pattern actually present in the Week 3 notes PDF.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `radius-shadow.css` — design tokens.
- `guidelines/` — 14 foundation specimen cards (Colors, Type, Spacing, Radius & Shadow, Brand groups) in the Design System tab.
- `components/` — 5 component directories (callouts, tables, structure, flow, text), each with `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` demo.
- `ui_kits/study-notes/` — a 12-page study-notes packet: Cover, Contents, Topic Map (overview), Notes Page (per-topic), Cheat Sheet, Formula Sheet, Practice Questions, Appendix, Glossary — all sharing the `PageBadge`/`PageFooter`/`SectionTitle` components for a consistent identity.
- `SKILL.md` — portable skill file for using this system in Claude Code or elsewhere.
- `thumbnail.html` — the project's homepage tile.

## Caveats — please help me iterate

- **No logo or existing brand exists.** This is a from-scratch palette/type pairing guessed from the brief ("ADHD friendly, bright & pastel"), not extracted from anything you gave me. If you have a color or font you already like for your notes, tell me and I'll rebuild the tokens around it.
- **Fonts are Google Fonts, loaded live** (Merriweather / Lexend / Fira Code) — no original font files existed to copy in, so there's nothing to substitute *from*, but flagging in case you'd rather pick different families.
- **Only one source document was provided** (a MaxDiff/TURF/Conjoint lecture-notes PDF). The component set and UI kit are built entirely around that one document's structure — if your notes for other subjects use different patterns (e.g. heavy diagrams, code blocks, citations), I likely haven't covered them yet. Send another sample and I'll extend the system.
- **No existing UI kit or app** — this assumes the "product" is a notes document/page. If you actually want an app (e.g. a note-taking tool with navigation, search, etc.), that's a different and bigger build — let me know.
