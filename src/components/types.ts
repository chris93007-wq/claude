/**
 * The 13 chapter colors. Each maps to one Material hue (see src/styles/tokens/colors.css), scrambled so
 * neighbouring chapters contrast:
 * 1 indigo · 2 orange · 3 teal · 4 pink · 5 lime · 6 deep purple · 7 amber · 8 light blue ·
 * 9 deep orange · 10 purple · 11 cyan · 12 light green · 13 blue.
 * Red, green and yellow are reserved (trap / tip / highlight) and are never chapter colors.
 */
export type Chapter = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type Step = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900;

/** `var(--chapter-N-STEP)` */
export const ch = (chapter: Chapter | number, step: Step) => `var(--chapter-${chapter}-${step})`;
