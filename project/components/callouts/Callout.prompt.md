A pastel note box that flags one note type — key insight, exam note, common mistake, memory aid, worked example, see-also, whatever you need — used to break up dense study notes into scannable chunks. Color always comes from the chapter it belongs to; the label text is plain text you type yourself, not auto-generated.

```jsx
<Callout chapter={3} label="COMMON MISTAKE">
  The denominator trap: if an item appeared 3 times and was picked Most twice, the rate is 2 ÷ 3 — not 2 ÷ 2.
</Callout>
```

`chapter` (1-13) always drives the color — never a fixed per-type color — so every callout in a chapter matches its surroundings.
