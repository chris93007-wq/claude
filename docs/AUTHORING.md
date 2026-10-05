# Authoring notes

A notes packet is one `.tsx` file in `notes/`. It default-exports a component that returns a
`<NotesDocument>` whose children are page templates, in print order. Everything is imported from `@notes`.

```tsx
import { NotesDocument, CoverPage, ContentsPage, NotesPage, TopicHeader, Callout } from '@notes';

export default function Week04() {
  return (
    <NotesDocument meta={{ title: 'Segmentation', subtitle: '…', course: 'MKT 282 · Marketing Analytics', week: 'Week 4', author: 'Christine John' }}>
      <CoverPage />
      <ContentsPage />
      <NotesPage toc={{ title: 'Cluster Analysis', chapter: 7 }}>
        <TopicHeader topicNumber={2} title="Cluster Analysis" />
        <p>…</p>
      </NotesPage>
    </NotesDocument>
  );
}
```

Start from the template with `npm run new -- week-04-segmentation "Segmentation"`, preview with `npm run dev`,
and print with `npm run pdf -- week-04`.

## The rules

These are the design decisions settled in the design sessions. Keep to them.

**Color**
- Color comes from **chapter numbers 1–13** only. There are no per-type colors: a Callout, table or card takes
  the color of the chapter it sits in.
- **One color per topic, everywhere.** Pick one chapter number per topic and use it on that topic's Contents
  entry (`toc.chapter`), flashcard, notes page, cheat-sheet column and formula-sheet band. Two topic colors
  never mix on one page; the week badge matches too.
- Pick contrasting hues for neighbouring topics (opposite sides of the wheel), not color-wheel order:
  1 indigo · 2 orange · 3 teal · 4 pink · 5 lime · 6 deep purple · 7 amber · 8 light blue · 9 deep orange ·
  10 purple · 11 cyan · 12 light green · 13 blue.
- **Red, green and yellow are reserved.** Never use them as a chapter color.
- Text on color always uses the chapter's pastel **-100 fill with -900 ink**, never a translucent tint.
- The `PageBadge` on every page uses the document's `brandChapter`, not the topic color.
- The full Material palette is also available directly: `var(--green-100)`, `var(--deep-orange-700)` and so on.

**Emphasis** (plain HTML, no components)
- `<mark>…</mark>` is the yellow highlighter. **It's the only highlight color.**
- `<strong>…</strong>` is plain bold.
- `<strong className="trap">…</strong>` is bold red with no fill. Use it for traps and common mistakes.
- `<strong className="tip">…</strong>` is bold green with no fill. Use it for tips and clues.
- `<span className="badge ch-7">Best use case</span>` is an all-caps text badge in the chapter-500 color.
  Text badges are the system's only "icons". No emoji, no drawn icons.

**Callouts**
- There are only three: `KEY INSIGHT`, `NOTES` and `MEMORY AID`. Everything else, such as a common mistake, an
  exam note or a worked example, is a regular `<Section>` or a dedicated component.

**Pages**
- US Letter with 0.5in margins on every page. Content flows onto extra sheets automatically, and each
  template starts on a new sheet.
- The Cover is plain: no badge, no footer. Contents and Practice Questions have no footer.
  Every other content page gets a `PageBadge` and the footer (breadcrumb + `page / total`).
- Everything must be printable. Nothing hidden, collapsed or tooltip-only. Quiz answers are printed under each
  question.
- Use space-saving layouts: 2 columns (`<Columns>`) for short paired blocks in portrait, and landscape
  with 3–4 columns for dense reference pages (Cheat Sheet, Appendix).

**Concepts**
- Every concept gets a plain-language definition, the formula (KaTeX in `ConceptCard`, *in words* in
  `FlashCard`), and the **why**: the logic that makes the formula make sense.

## Page templates

| Template | Orientation | Badge | Footer | Notes |
|---|---|---|---|---|
| `CoverPage` | portrait | — | — | title/eyebrow from `meta`; `dots` = topic chapters |
| `ContentsPage` | portrait | Contents | — | built from every page's `toc`; page numbers filled by `npm run pdf` |
| `TopicMapPage` | portrait | ChapterHeader | ✓ | flashcard per topic + 2-col intro (`<Full>` spans both columns) |
| `NotesPage` | portrait* | Notes Page | ✓ | free content; plain `<p>` gets notes body style |
| `CheatSheetPage` | landscape | Cheat Sheet | ✓ | one column per topic: bullets + formula in words |
| `FormulaSheetPage` | portrait | Formula Sheet | ✓ | Concept / Decomposition / KaTeX formula, chapter bands |
| `QuizPage` | portrait | — | — | one chapter color; light-green answer strip |
| `AppendixPage` | landscape* | Appendix | ✓ | label badge, TopicHeader, intro, then a wide table |
| `GlossaryPage` | portrait | Glossary | ✓ | auto-sorted 2-column dictionary |
| `Page` | either | optional | optional | build any custom page |

\* `orientation` prop to change.

Any template takes `toc={{ title, chapter }}` to appear on the Contents page.

## Components

| Component | Use |
|---|---|
| `Callout` | Key Insight / Notes / Memory Aid box; label sits in the border notch |
| `ConceptCard` | definition + KaTeX formulas + optional `breakdown` tree + why |
| `WorkedExample` | setup (+ `context` figure), data table, show-the-work steps, highlighted answer, so-what |
| `FlashCard`, `FlashcardGrid` | mini definition / formula in words / why |
| `FormulaTree` | calculation broken down into connected value boxes |
| `Chain` | `A → B → C` or `A = B + C` pills |
| `Split` | two-sided comparison |
| `Matrix` | row × column framework grid |
| `Flowchart` | decision tree with box/diamond nodes |
| `StepPipeline` | numbered process steps with arrows |
| `KeyTermsTable` | Term / Simple Explanation / Why It Matters / Example |
| `ComparisonTable` | any data table (`columns[].align`, `columns[].width`) |
| `Image` | figure + caption; placeholder frame until `src` is set (import images from `notes/assets/`) |
| `ChapterHeader`, `TopicHeader`, `Section`, `SectionTitle`, `PageBadge`, `PageFooter` | structure |
| `Tex` | inline KaTeX anywhere |
| `Grid` / `Span`, `Columns`, `Full`, `Stack` | 12-column layout, N columns, full-width row, vertical stack |

Prop types are in each component's source file (`src/components/**`), with JSDoc on every prop.

## Images

Put files in `notes/assets/` and import them so Vite bundles them:

```tsx
import profileCard from './assets/profile-card.png';
<Image chapter={13} src={profileCard} alt="Conjoint profile card" caption="Fig. 1 — …" ratio="4/3" fit="contain" />
```

## Checks `npm run pdf` does for you
- Warns when something is wider than the printable area and would be clipped. It names the page and the text.
- Fails on React/runtime errors.
- Fills in the Contents page numbers in a second pass and warns if they shift.
