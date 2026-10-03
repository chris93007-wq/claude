A horizontal numbered-step flow for processes that chain tools or stages together (e.g. the MaxDiff → Conversion → TURF pipeline), wraps on narrow widths.

```jsx
<StepPipeline steps={[
  { label: 'Score & rank', body: 'Run a MaxDiff study to score and rank the full item list' },
  { label: 'Convert to binary', body: 'Convert scores into binary top-choice data' },
  { label: 'Optimal bundle', body: 'Run TURF on that binary data to find the widest-reach mix' },
]} chapter={4} />
```

Pass `chapter` (1-5) to match the number-badge fill to the surrounding chapter color.
