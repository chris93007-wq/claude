A three-part explainer card for one concept: plain-language definition, the formula rendered as real math (KaTeX, not symbol-soup text), an optional worked-example breakdown diagram of connected value boxes, and the underlying "why" — the logic that makes the formula make sense rather than something to memorize.

```jsx
<ConceptCard
  chapter={1}
  term="Willingness to Pay (WTP)"
  definition="The dollar amount a consumer's trade-offs say they'd pay for one upgrade. Comes from the model, not asked directly."
  formulas={["WTP = \\dfrac{\\text{attribute's utility}}{\\text{utils per dollar}}", "WTP_i = \\dfrac{u_i}{\\beta_{price}}"]}
  breakdown={{
    value: '$5,892', label: 'Willingness to Pay', filled: true, op: '×',
    children: [
      { value: '11.85 utils', label: "Attribute's Utility" },
      { value: '$497/util', label: '$ Per Util Rate', tint: true, op: '÷', children: [
        { value: '$30,000', label: 'Price Range' },
        { value: '60.34 utils', label: 'Utility Range' },
      ]},
    ],
  }}
  why={<span>Price is the only attribute measured in <mark style={{background:'var(--chapter-7-300)',color:'var(--ink-900)',padding:'1px 5px',borderRadius:8,fontWeight:700}}>real dollars</mark>. β_price converts a dollar into utils, so dividing by it undoes that conversion — turning utils back into dollars.</span>}
/>
```

Omit `formulas`/`breakdown` for a concept with no formula or no worked-example diagram — both sections are skipped.
