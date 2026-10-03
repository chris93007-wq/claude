Full worked-example walkthrough — a "Worked Example" badge + title, a "Setup:" sentence, an optional data table, a "Show the Work" step box, a highlighted final-answer box, and a "So what" takeaway.

```jsx
<WorkedExample
  chapter={11}
  title="Handheld GPS Device"
  setup="Four binary attributes — Accuracy (5ft vs. 50ft), Battery (32hr vs. 12hr), Display (3D vs. 2D), Price ($150 vs. $250). All 16 profiles shown; each rated 1–100."
  context={<div style={{width:110,height:44,background:'var(--chapter-11-100)',border:'1.5px solid var(--chapter-11-500)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:11}}>2⁴ = 16 profiles</div>}
  table={{ columns: ['Variable', 'Partworth (β)'], rows: [['Intercept', '2.7'], ['5ft vs. 50ft (Accuracy)', '9.6'], ['$150 vs. $250 (Price)', '40.6']] }}
  steps={[{ label: 'Rank by size', lines: ['Price swing: 40.6 (largest)', 'Battery swing: 30.4'] }]}
  answer={{ value: '40.6', label: 'Price Partworth — Largest Swing' }}
  soWhat="Price drives choice more than any feature — a $100 discount beats any single upgrade."
/>
```

`context` holds any supporting diagram or figure the consumer provides (a labeled shape, a small image, etc.) — it is not generated automatically.
