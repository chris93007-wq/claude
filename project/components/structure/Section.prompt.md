A labeled content block — a chapter-tinted SectionTitle divider followed by its body, with consistent spacing. Use instead of manually pairing `<SectionTitle>` and a wrapping `<div>` on every notes page.

```jsx
<Section chapter={4} title="Worked Example">
  <p>Four binary attributes...</p>
  <WorkedExample ... />
</Section>
```
