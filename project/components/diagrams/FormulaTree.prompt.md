A recursive connected-box diagram for walking a worked-example calculation top-down — a result box, connected down to the operands that produce it, which may themselves break down further (e.g. WTP = utility × $/util, where $/util = price range ÷ utility range).

```jsx
<FormulaTree chapter={1} root={{
  value: '$5,892', label: 'Willingness to Pay', filled: true, op: '×',
  children: [
    { value: '11.85 utils', label: "Attribute's Utility" },
    { value: '$497/util', label: '$ Per Util Rate', tint: true, op: '÷', children: [
      { value: '$30,000', label: 'Price Range' },
      { value: '60.34 utils', label: 'Utility Range' },
    ]},
  ],
}} />
```
