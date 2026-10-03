A general-purpose data table for bundle comparisons, design-choice grids, or regression solution tables. The header row tints with one of the five category colors via `accent`.

```jsx
<ComparisonTable
  chapter={3}
  columns={[{ key: 'bundle', label: 'Bundle' }, { key: 'cost', label: 'Cost/Year' }, { key: 'reach', label: 'Reach' }]}
  rows={[{ bundle: 'B', cost: '$59', reach: '80%' }]}
/>
```
