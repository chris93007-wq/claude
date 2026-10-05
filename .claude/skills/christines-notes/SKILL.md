---
name: christines-notes
description: Write a new ADHD-friendly study-notes packet (PDF) for Christine using this repo's design system — from slides, readings, lecture notes or a topic. Use when asked to make notes, a study guide, cheat sheet, formula sheet, practice questions or glossary for a class week.
user-invocable: true
---

You are writing a notes packet as a `.tsx` file in `notes/`, rendered to PDF with this repo's design system.

1. Read `docs/AUTHORING.md` (the rules and the component/page list) and skim `notes/week-03-preference-measurement.tsx` as the reference packet.
2. Gather the source material the user gave you. If the course, week, topics, or which page types they want are unclear, ask before writing.
3. `npm run new -- week-NN-topic "Title"`, then replace every TODO. Typical packet: Cover → Contents → Topic Map → one Notes page per topic → Cheat Sheet → Formula Sheet → Practice Questions → (Appendix) → Glossary.
4. Follow the rules strictly: one contrasting chapter color per topic used everywhere for that topic; red/green/yellow never as chapter colors; `<mark>` is the only highlight (yellow); `strong.trap` red / `strong.tip` green; callouts only KEY INSIGHT / NOTES / MEMORY AID; every concept has definition + formula (KaTeX or in words) + why; nothing hidden — everything printable.
5. Keep numbers exact and show their formula. No emoji. Third person, plain and direct.
6. Run `npm run typecheck` and `npm run pdf -- week-NN`. Fix every ⚠ overflow warning and ✗ error, then rasterize a few pages (`pdftoppm -r 60 -png`) and look at them before handing over `out/<name>.pdf`.
