Top-down branching flowchart — box or diamond (decision) nodes connected by arrows, each edge optionally labeled. Use for a decision tree (e.g. "which measurement method fits my question?").

```jsx
<Flowchart chapter={1} root={{
  label: 'Need a ranking or a $ value?', shape: 'diamond',
  children: [
    { label: 'Ranking', to: { label: 'Use MaxDiff', filled: true } },
    { label: '$ Value', to: { label: 'Use Conjoint Analysis', filled: true } },
  ],
}} />
```
