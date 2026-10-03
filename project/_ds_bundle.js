/* @ds-bundle: {"format":4,"namespace":"Notes_fd16d9","components":[{"name":"Callout","sourcePath":"components/callouts/Callout.jsx"},{"name":"ConceptCard","sourcePath":"components/concepts/ConceptCard.jsx"},{"name":"WorkedExample","sourcePath":"components/concepts/WorkedExample.jsx"},{"name":"Chain","sourcePath":"components/diagrams/Chain.jsx"},{"name":"Flowchart","sourcePath":"components/diagrams/Flowchart.jsx"},{"name":"FormulaTree","sourcePath":"components/diagrams/FormulaTree.jsx"},{"name":"Matrix","sourcePath":"components/diagrams/Matrix.jsx"},{"name":"Split","sourcePath":"components/diagrams/Split.jsx"},{"name":"FlashCard","sourcePath":"components/flashcards/FlashCard.jsx"},{"name":"FlashcardGrid","sourcePath":"components/flashcards/FlashCard.jsx"},{"name":"StepPipeline","sourcePath":"components/flow/StepPipeline.jsx"},{"name":"Image","sourcePath":"components/media/Image.jsx"},{"name":"ChapterHeader","sourcePath":"components/structure/ChapterHeader.jsx"},{"name":"PageBadge","sourcePath":"components/structure/PageBadge.jsx"},{"name":"PageFooter","sourcePath":"components/structure/PageFooter.jsx"},{"name":"Section","sourcePath":"components/structure/Section.jsx"},{"name":"SectionTitle","sourcePath":"components/structure/SectionTitle.jsx"},{"name":"TopicHeader","sourcePath":"components/structure/TopicHeader.jsx"},{"name":"ComparisonTable","sourcePath":"components/tables/ComparisonTable.jsx"},{"name":"KeyTermsTable","sourcePath":"components/tables/KeyTermsTable.jsx"}],"sourceHashes":{"components/callouts/Callout.jsx":"8eeede4ce090","components/concepts/ConceptCard.jsx":"650dc6bf57e9","components/concepts/WorkedExample.jsx":"bc58ff0074ec","components/concepts/katex-loader.js":"8b225e44212a","components/diagrams/Chain.jsx":"cf225507b58d","components/diagrams/Flowchart.jsx":"2b7330746888","components/diagrams/FormulaTree.jsx":"5cc2af7b6317","components/diagrams/Matrix.jsx":"dce4faa346b4","components/diagrams/Split.jsx":"8d92387414d2","components/flashcards/FlashCard.jsx":"adba9ec9bf38","components/flow/StepPipeline.jsx":"017e807c8f6d","components/media/Image.jsx":"25874c2e77cf","components/structure/ChapterHeader.jsx":"ba105c650a11","components/structure/PageBadge.jsx":"dd6025259ada","components/structure/PageFooter.jsx":"5b4db003490c","components/structure/Section.jsx":"e8288f17457f","components/structure/SectionTitle.jsx":"6551407ca324","components/structure/TopicHeader.jsx":"62f089fcda6e","components/tables/ComparisonTable.jsx":"fae7f5d14b8a","components/tables/KeyTermsTable.jsx":"94f32bdbb2df"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureKatex","sourcePath":"components/concepts/katex-loader.js"}]} */

(() => {

const __ds_ns = (window.Notes_fd16d9 = window.Notes_fd16d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/callouts/Callout.jsx
try { (() => {
function Callout({
  chapter = 1,
  label,
  children
}) {
  const bg = `var(--chapter-${chapter}-100)`;
  const dark = `var(--chapter-${chapter}-900)`;
  const calloutWrap = {
    position: 'relative',
    background: bg,
    border: `2px solid ${dark}`,
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-6) var(--space-6) var(--space-5)',
    marginTop: 12
  };
  const calloutLabel = {
    position: 'absolute',
    top: -13,
    left: 20,
    background: 'var(--surface-page)',
    padding: '0 10px',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.06em',
    color: dark
  };
  const calloutBody = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: calloutWrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: calloutLabel
  }, label), /*#__PURE__*/React.createElement("div", {
    style: calloutBody
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/callouts/Callout.jsx", error: String((e && e.message) || e) }); }

// components/concepts/WorkedExample.jsx
try { (() => {
function WorkedExample({
  title,
  setup,
  context,
  table,
  steps = [],
  answer,
  soWhat,
  chapter = 1
}) {
  const card = {
    border: `2px solid var(--chapter-${chapter}-500)`,
    borderTop: `6px solid var(--chapter-${chapter}-500)`,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--surface-card)',
    boxShadow: 'var(--shadow-card)',
    padding: 'var(--space-6)'
  };
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    fontFamily: 'var(--font-body)'
  };
  const badge = {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    background: `var(--chapter-${chapter}-500)`,
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: 'var(--radius-pill)',
    marginBottom: 'var(--space-2)'
  };
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xl)',
    color: 'var(--ink-900)',
    margin: 0
  };
  const setupStyle = {
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)',
    margin: 0
  };
  const setupLabel = {
    fontWeight: 700
  };
  const setupRow = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-5)',
    flexWrap: 'wrap'
  };
  const contextBox = {
    flex: '1 1 260px',
    minWidth: 0
  };
  const tableWrap = {
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden'
  };
  const tableEl = {
    width: '100%',
    borderCollapse: 'collapse'
  };
  const th = {
    textAlign: 'left',
    padding: 'var(--space-3) var(--space-4)',
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontWeight: 600
  };
  const td = {
    padding: 'var(--space-2) var(--space-4)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-900)',
    borderTop: '1px solid var(--line)'
  };
  const stepsBox = {
    border: `1.5px solid var(--chapter-${chapter}-500)`,
    background: `var(--chapter-${chapter}-100)`,
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-5) var(--space-6)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  };
  const stepsLabel = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: `var(--chapter-${chapter}-900)`
  };
  const stepLabel = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    color: `var(--chapter-${chapter}-900)`
  };
  const lines = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-900)',
    lineHeight: 1.6,
    marginTop: 2
  };
  const step = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  };
  const answerBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    padding: 'var(--space-5)',
    borderRadius: 'var(--radius-md)',
    background: `var(--chapter-${chapter}-900)`,
    color: '#fff'
  };
  const answerValue = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: 'var(--text-2xl)'
  };
  const answerLabel = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    opacity: 0.85
  };
  const soWhatBox = {
    borderLeft: `3px solid var(--chapter-${chapter}-500)`,
    paddingLeft: 'var(--space-4)',
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)'
  };
  const soWhatLabel = {
    fontWeight: 700
  };
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: badge
  }, "Worked Example"), /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title)), (setup || context) && /*#__PURE__*/React.createElement("div", {
    style: setupRow
  }, setup && /*#__PURE__*/React.createElement("p", {
    style: {
      ...setupStyle,
      flex: '1 1 260px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: setupLabel
  }, "Setup: "), setup), context && /*#__PURE__*/React.createElement("div", {
    style: contextBox
  }, context)), table && /*#__PURE__*/React.createElement("div", {
    style: tableWrap
  }, /*#__PURE__*/React.createElement("table", {
    style: tableEl
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, table.columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...th,
      textAlign: i === 0 ? 'left' : 'right'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, table.rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      ...td,
      textAlign: j === 0 ? 'left' : 'right'
    }
  }, cell))))))), steps.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: stepsBox
  }, /*#__PURE__*/React.createElement("span", {
    style: stepsLabel
  }, "Show the Work"), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: step
  }, /*#__PURE__*/React.createElement("span", {
    style: stepLabel
  }, "Step ", i + 1, s.label ? ` — ${s.label}` : ''), /*#__PURE__*/React.createElement("div", {
    style: lines
  }, (s.lines || []).map((l, j) => /*#__PURE__*/React.createElement("div", {
    key: j
  }, l)))))), answer && /*#__PURE__*/React.createElement("div", {
    style: answerBox
  }, /*#__PURE__*/React.createElement("span", {
    style: answerValue
  }, answer.value), /*#__PURE__*/React.createElement("span", {
    style: answerLabel
  }, answer.label)), soWhat && /*#__PURE__*/React.createElement("div", {
    style: soWhatBox
  }, /*#__PURE__*/React.createElement("span", {
    style: soWhatLabel
  }, "So what: "), soWhat)));
}
Object.assign(__ds_scope, { WorkedExample });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/concepts/WorkedExample.jsx", error: String((e && e.message) || e) }); }

// components/concepts/katex-loader.js
try { (() => {
let katexReady = null;
function ensureKatex() {
  if (window.katex) return Promise.resolve(window.katex);
  if (katexReady) return katexReady;
  katexReady = new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
    script.onload = () => resolve(window.katex);
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return katexReady;
}
Object.assign(__ds_scope, { ensureKatex });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/concepts/katex-loader.js", error: String((e && e.message) || e) }); }

// components/diagrams/Chain.jsx
try { (() => {
function Chain({
  items = [],
  chapter = 1,
  connector = '→'
}) {
  const wrap = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 'var(--space-3)',
    fontFamily: 'var(--font-body)'
  };
  const box = {
    padding: '8px 18px',
    borderRadius: 'var(--radius-pill)',
    border: `1.5px solid var(--chapter-${chapter}-500)`,
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: 'var(--text-sm)',
    whiteSpace: 'nowrap'
  };
  const glyph = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-lg)',
    color: 'var(--ink-300)',
    fontWeight: 600
  };
  const nodes = [];
  items.forEach((it, i) => {
    nodes.push(/*#__PURE__*/React.createElement("span", {
      key: `b${i}`,
      style: box
    }, it));
    if (i < items.length - 1) nodes.push(/*#__PURE__*/React.createElement("span", {
      key: `c${i}`,
      style: glyph
    }, connector));
  });
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, nodes);
}
Object.assign(__ds_scope, { Chain });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Chain.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Flowchart.jsx
try { (() => {
function Shape({
  node,
  chapter
}) {
  const isDecision = node.shape === 'diamond';
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    color: `var(--chapter-${chapter}-900)`,
    textAlign: 'center'
  };
  if (isDecision) {
    const size = 120;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: `var(--chapter-${chapter}-100)`,
        border: `1.5px solid var(--chapter-${chapter}-500)`,
        transform: 'rotate(45deg)',
        borderRadius: 6
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
      }
    }, node.label));
  }
  const boxStyle = {
    ...base,
    padding: '10px 18px',
    borderRadius: 'var(--radius-md)',
    background: node.filled ? `var(--chapter-${chapter}-900)` : `var(--chapter-${chapter}-100)`,
    color: node.filled ? '#fff' : `var(--chapter-${chapter}-900)`,
    border: node.filled ? 'none' : `1.5px solid var(--chapter-${chapter}-500)`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: boxStyle
  }, node.label);
}
function Arrow({
  label
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2
  };
  const lbl = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    color: 'var(--ink-500)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      height: 18,
      background: 'var(--ink-300)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '6px solid var(--ink-300)',
      marginTop: -2
    }
  }));
}
function FlowNode({
  node,
  chapter
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const row = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-6)',
    marginTop: 4
  };
  const branch = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Shape, {
    node: node,
    chapter: chapter
  }), node.children && node.children.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: row
  }, node.children.map((edge, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: branch
  }, /*#__PURE__*/React.createElement(Arrow, {
    label: edge.label
  }), /*#__PURE__*/React.createElement(FlowNode, {
    node: edge.to,
    chapter: chapter
  })))));
}
function Flowchart({
  root,
  chapter = 1
}) {
  const wrap = {
    display: 'flex',
    justifyContent: 'center',
    padding: 'var(--space-4) 0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(FlowNode, {
    node: root,
    chapter: chapter
  }));
}
Object.assign(__ds_scope, { Flowchart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Flowchart.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/FormulaTree.jsx
try { (() => {
function OpGlyph({
  op
}) {
  const style = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-lg)',
    color: 'var(--ink-500)',
    fontWeight: 600
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, op);
}
function Connector() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      height: 16,
      background: 'var(--ink-300)'
    }
  });
}
function ValueNode({
  node,
  chapter
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-2)'
  };
  const boxStyle = {
    padding: '8px 16px',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: 'var(--text-base)',
    border: node.filled ? 'none' : `1.5px solid ${node.tint ? `var(--chapter-${chapter}-500)` : 'var(--line)'}`,
    background: node.filled ? `var(--chapter-${chapter}-900)` : node.tint ? `var(--chapter-${chapter}-100)` : 'var(--surface-card)',
    color: node.filled ? '#fff' : node.tint ? `var(--chapter-${chapter}-900)` : 'var(--ink-900)'
  };
  const labelStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'var(--ink-500)'
  };
  const row = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: boxStyle
  }, node.value), /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, node.label), node.children && node.children.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Connector, null), /*#__PURE__*/React.createElement("div", {
    style: row
  }, node.children.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(OpGlyph, {
    op: node.op || '×'
  }), /*#__PURE__*/React.createElement(ValueNode, {
    node: c,
    chapter: chapter
  }))))));
}
function FormulaTree({
  root,
  chapter = 1
}) {
  const wrap = {
    display: 'flex',
    justifyContent: 'center',
    padding: 'var(--space-4) 0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(ValueNode, {
    node: root,
    chapter: chapter
  }));
}
Object.assign(__ds_scope, { FormulaTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/FormulaTree.jsx", error: String((e && e.message) || e) }); }

// components/concepts/ConceptCard.jsx
try { (() => {
function Formula({
  tex
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    __ds_scope.ensureKatex().then(katex => {
      if (!cancelled && ref.current) ref.current.innerHTML = katex.renderToString(tex, {
        throwOnError: false
      });
    });
    return () => {
      cancelled = true;
    };
  }, [tex]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, tex);
}
function ConceptCard({
  term,
  definition,
  formulas = [],
  breakdown,
  why,
  chapter = 1
}) {
  const wrap = {
    border: `2px solid var(--chapter-${chapter}-500)`,
    borderTop: `6px solid var(--chapter-${chapter}-500)`,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--surface-card)',
    boxShadow: 'var(--shadow-card)',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)'
  };
  const body = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-5)',
    padding: 'var(--space-6)'
  };
  const badge = {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    background: `var(--chapter-${chapter}-500)`,
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: 'var(--radius-pill)',
    marginBottom: 'var(--space-2)'
  };
  const section = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)'
  };
  const label = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--ink-500)'
  };
  const termStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xl)',
    color: 'var(--ink-900)',
    margin: 0
  };
  const text = {
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)',
    margin: 0
  };
  const formulaBox = {
    border: `1.5px solid var(--chapter-${chapter}-500)`,
    background: `var(--chapter-${chapter}-100)`,
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-5) var(--space-6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-4)',
    flexWrap: 'wrap',
    fontSize: 'var(--text-lg)'
  };
  const orStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-500)',
    fontStyle: 'italic'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: body
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: badge
  }, "Concept"), /*#__PURE__*/React.createElement("h3", {
    style: termStyle
  }, term)), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Definition"), /*#__PURE__*/React.createElement("p", {
    style: text
  }, definition)), formulas.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Formula"), /*#__PURE__*/React.createElement("div", {
    style: formulaBox
  }, formulas.map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: orStyle
  }, "or"), /*#__PURE__*/React.createElement(Formula, {
    tex: f
  }))))), breakdown && /*#__PURE__*/React.createElement(__ds_scope.FormulaTree, {
    root: breakdown,
    chapter: chapter
  }), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Why It Works"), /*#__PURE__*/React.createElement("p", {
    style: text
  }, why))));
}
Object.assign(__ds_scope, { ConceptCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/concepts/ConceptCard.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Matrix.jsx
try { (() => {
function Matrix({
  rowLabels = [],
  colLabels = [],
  cells = [],
  chapter = 1
}) {
  const wrap = {
    display: 'inline-grid',
    gridTemplateColumns: `140px repeat(${colLabels.length}, 1fr)`,
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)'
  };
  const corner = {
    background: 'var(--paper-100)',
    borderRight: '1px solid var(--line)',
    borderBottom: '1px solid var(--line)'
  };
  const colHead = {
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    padding: 'var(--space-3)',
    textAlign: 'center',
    borderBottom: '1px solid var(--line)',
    borderRight: '1px solid var(--line)'
  };
  const rowHead = {
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    padding: 'var(--space-3)',
    borderRight: '1px solid var(--line)',
    borderBottom: '1px solid var(--line)'
  };
  const cell = {
    padding: 'var(--space-3)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-900)',
    borderRight: '1px solid var(--line)',
    borderBottom: '1px solid var(--line)',
    textAlign: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: corner
  }), colLabels.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: `c${i}`,
    style: colHead
  }, c)), rowLabels.map((r, ri) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: `r${ri}`
  }, /*#__PURE__*/React.createElement("div", {
    style: rowHead
  }, r), colLabels.map((_, ci) => /*#__PURE__*/React.createElement("div", {
    key: `cell${ri}-${ci}`,
    style: cell
  }, (cells[ri] || [])[ci])))));
}
Object.assign(__ds_scope, { Matrix });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Matrix.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Split.jsx
try { (() => {
function Split({
  left,
  right
}) {
  const wrap = {
    display: 'grid',
    gridTemplateColumns: '1fr 2px 1fr',
    gap: 'var(--space-6)',
    alignItems: 'start'
  };
  const side = s => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  });
  const head = s => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-lg)',
    color: `var(--chapter-${s.chapter || 1}-900)`,
    margin: 0,
    textAlign: 'center'
  });
  const list = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  };
  const item = s => ({
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-2)'
  });
  const dot = s => ({
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: `var(--chapter-${s.chapter || 1}-500)`,
    flexShrink: 0,
    marginTop: 7
  });
  const divider = {
    background: 'var(--line)',
    alignSelf: 'stretch'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: side(left)
  }, /*#__PURE__*/React.createElement("h4", {
    style: head(left)
  }, left.title), /*#__PURE__*/React.createElement("ul", {
    style: list
  }, (left.items || []).map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: item(left)
  }, /*#__PURE__*/React.createElement("span", {
    style: dot(left)
  }), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement("div", {
    style: divider
  }), /*#__PURE__*/React.createElement("div", {
    style: side(right)
  }, /*#__PURE__*/React.createElement("h4", {
    style: head(right)
  }, right.title), /*#__PURE__*/React.createElement("ul", {
    style: list
  }, (right.items || []).map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: item(right)
  }, /*#__PURE__*/React.createElement("span", {
    style: dot(right)
  }), /*#__PURE__*/React.createElement("span", null, t))))));
}
Object.assign(__ds_scope, { Split });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Split.jsx", error: String((e && e.message) || e) }); }

// components/flashcards/FlashCard.jsx
try { (() => {
function FlashCard({
  number,
  title,
  definition,
  formula,
  why,
  chapter = 1
}) {
  const card = {
    border: '1px solid var(--line)',
    borderTop: `3px solid var(--chapter-${chapter}-500)`,
    borderRadius: 'var(--radius-md)',
    background: 'var(--surface-card)',
    padding: 'var(--space-4) var(--space-5)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  };
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    color: `var(--chapter-${chapter}-900)`
  };
  const label = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 10,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--ink-500)'
  };
  const bodyStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    color: 'var(--ink-900)',
    lineHeight: 1.5
  };
  const formulaBox = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: `var(--chapter-${chapter}-900)`,
    background: `var(--chapter-${chapter}-100)`,
    borderRadius: 'var(--radius-sm)',
    padding: '8px 10px',
    whiteSpace: 'pre-wrap'
  };
  const section = {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  };
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("span", {
    style: titleStyle
  }, number != null ? `${String(number).padStart(2, '0')} · ${title}` : title), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Definition"), /*#__PURE__*/React.createElement("span", {
    style: bodyStyle
  }, definition)), formula && /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Formula, in words"), /*#__PURE__*/React.createElement("div", {
    style: formulaBox
  }, formula)), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Why"), /*#__PURE__*/React.createElement("span", {
    style: bodyStyle
  }, why)));
}
function FlashcardGrid({
  cards = [],
  columns = 2
}) {
  const grid = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: grid
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(FlashCard, {
    key: i,
    number: c.number != null ? c.number : i + 1,
    title: c.title,
    definition: c.definition,
    formula: c.formula,
    why: c.why,
    chapter: c.chapter || i % 5 + 1
  })));
}
Object.assign(__ds_scope, { FlashCard, FlashcardGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/flashcards/FlashCard.jsx", error: String((e && e.message) || e) }); }

// components/flow/StepPipeline.jsx
try { (() => {
function StepPipeline({
  steps = [],
  chapter = 1
}) {
  const wrap = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    gap: 'var(--space-3)'
  };
  const stepBox = {
    flex: '1 1 160px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    background: 'var(--surface-card)',
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-4)'
  };
  const headRow = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)'
  };
  const num = {
    width: 28,
    height: 28,
    flexShrink: 0,
    borderRadius: '50%',
    background: `var(--chapter-${chapter}-500)`,
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const label = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-900)'
  };
  const body = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-700)',
    lineHeight: 'var(--leading-body)'
  };
  const arrow = {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'var(--text-xl)',
    color: 'var(--ink-300)',
    padding: '0 2px'
  };
  const nodes = [];
  steps.forEach((s, i) => {
    nodes.push(/*#__PURE__*/React.createElement("div", {
      key: `s${i}`,
      style: stepBox
    }, /*#__PURE__*/React.createElement("div", {
      style: headRow
    }, /*#__PURE__*/React.createElement("span", {
      style: num
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: label
    }, s.label)), /*#__PURE__*/React.createElement("span", {
      style: body
    }, s.body)));
    if (i < steps.length - 1) nodes.push(/*#__PURE__*/React.createElement("div", {
      key: `a${i}`,
      style: arrow
    }, "\u2192"));
  });
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, nodes);
}
Object.assign(__ds_scope, { StepPipeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/flow/StepPipeline.jsx", error: String((e && e.message) || e) }); }

// components/media/Image.jsx
try { (() => {
function Image({
  src,
  alt,
  caption,
  ratio = '16/9',
  chapter = 1
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)'
  };
  const frame = {
    aspectRatio: ratio,
    borderRadius: 'var(--radius-md)',
    border: `1.5px solid var(--chapter-${chapter}-500)`,
    background: `var(--chapter-${chapter}-50)`,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const img = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };
  const placeholder = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: `var(--chapter-${chapter}-900)`,
    opacity: 0.6,
    padding: 'var(--space-4)',
    textAlign: 'center'
  };
  const captionStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-500)',
    lineHeight: 'var(--leading-body)'
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      ...wrap,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: frame
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || '',
    style: img
  }) : /*#__PURE__*/React.createElement("span", {
    style: placeholder
  }, alt || 'Image placeholder')), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: captionStyle
  }, caption));
}
Object.assign(__ds_scope, { Image });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Image.jsx", error: String((e && e.message) || e) }); }

// components/structure/ChapterHeader.jsx
try { (() => {
function ChapterHeader({
  eyebrow,
  week,
  chapterNumber = 1,
  chapter = 'Chapter 1',
  title,
  subtitle,
  topics = []
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
    padding: 'var(--space-7) 0 var(--space-6)'
  };
  const badge = {
    background: `var(--chapter-${chapterNumber}-100)`,
    color: `var(--chapter-${chapterNumber}-900)`,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.08em',
    padding: '5px 14px',
    borderRadius: 'var(--radius-pill)',
    width: 'fit-content',
    textTransform: 'uppercase'
  };
  const eyebrowStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-500)',
    letterSpacing: '0.04em'
  };
  const chapterLabel = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-500)',
    letterSpacing: '0.04em'
  };
  const h1 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-3xl)',
    color: 'var(--ink-900)',
    lineHeight: 'var(--leading-tight)',
    margin: 0
  };
  const sub = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    color: 'var(--ink-700)',
    margin: 0
  };
  const topicList = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    marginTop: 'var(--space-2)'
  };
  const topicRow = {
    display: 'flex',
    alignItems: 'baseline',
    gap: 'var(--space-3)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--ink-900)'
  };
  const topicNum = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    minWidth: 22
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, (week || chapter) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12
    }
  }, week && /*#__PURE__*/React.createElement("span", {
    style: badge
  }, week), /*#__PURE__*/React.createElement("span", {
    style: chapterLabel
  }, chapter), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: eyebrowStyle
  }, eyebrow)), /*#__PURE__*/React.createElement("h1", {
    style: h1
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: sub
  }, subtitle), topics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: topicList
  }, topics.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: topicRow
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...topicNum,
      color: `var(--chapter-${(chapterNumber - 1 + i) % 13 + 1}-500)`
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, t)))));
}
Object.assign(__ds_scope, { ChapterHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/ChapterHeader.jsx", error: String((e && e.message) || e) }); }

// components/structure/PageBadge.jsx
try { (() => {
function PageBadge({
  week = 'Week 3',
  label,
  chapter = 1
}) {
  const row = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 'var(--space-6)'
  };
  const pill = {
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.08em',
    padding: '5px 14px',
    borderRadius: 'var(--radius-pill)',
    textTransform: 'uppercase',
    flexShrink: 0
  };
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-500)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: pill
  }, week), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, label));
}
Object.assign(__ds_scope, { PageBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/PageBadge.jsx", error: String((e && e.message) || e) }); }

// components/structure/PageFooter.jsx
try { (() => {
function PageFooter({
  chapterLabel,
  page = 1,
  totalPages = 1
}) {
  const wrap = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--space-3) 0',
    borderTop: '1px solid var(--line)',
    fontFamily: 'var(--font-body)'
  };
  const left = {
    fontSize: 'var(--text-xs)',
    color: 'var(--ink-500)',
    letterSpacing: '0.02em'
  };
  const right = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    color: 'var(--ink-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: left
  }, chapterLabel), /*#__PURE__*/React.createElement("span", {
    style: right
  }, page, " / ", totalPages));
}
Object.assign(__ds_scope, { PageFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/PageFooter.jsx", error: String((e && e.message) || e) }); }

// components/structure/SectionTitle.jsx
try { (() => {
function SectionTitle({
  chapter = 1,
  children
}) {
  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    width: '100%'
  };
  const line = {
    flex: 1,
    height: 1,
    background: `var(--chapter-${chapter}-500)`
  };
  const dash = {
    width: 14,
    height: 2,
    background: `var(--chapter-${chapter}-500)`,
    flexShrink: 0
  };
  const label = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: `var(--chapter-${chapter}-500)`,
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: dash
  }), /*#__PURE__*/React.createElement("span", {
    style: label
  }, children), /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/structure/Section.jsx
try { (() => {
function Section({
  chapter = 1,
  title,
  children
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
    margin: 'var(--space-5) 0'
  };
  const content = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionTitle, {
    chapter: chapter
  }, title), /*#__PURE__*/React.createElement("div", {
    style: content
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Section.jsx", error: String((e && e.message) || e) }); }

// components/structure/TopicHeader.jsx
try { (() => {
function TopicHeader({
  topicNumber,
  title,
  kicker
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: 'var(--space-6) 0 var(--space-4)',
    borderBottom: '2px solid var(--line)'
  };
  const h2 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-2xl)',
    color: 'var(--ink-900)',
    margin: 0,
    display: 'flex',
    alignItems: 'baseline',
    gap: 'var(--space-3)'
  };
  const num = {
    color: 'var(--ink-300)'
  };
  const kick = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--ink-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, topicNumber != null && /*#__PURE__*/React.createElement("span", {
    style: num
  }, String(topicNumber).padStart(2, '0')), title), kicker && /*#__PURE__*/React.createElement("span", {
    style: kick
  }, kicker));
}
Object.assign(__ds_scope, { TopicHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/TopicHeader.jsx", error: String((e && e.message) || e) }); }

// components/tables/ComparisonTable.jsx
try { (() => {
function ComparisonTable({
  columns = [],
  rows = [],
  chapter = 1
}) {
  const wrap = {
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)'
  };
  const table = {
    width: '100%',
    borderCollapse: 'collapse'
  };
  const th = {
    textAlign: 'left',
    padding: 'var(--space-3) var(--space-4)',
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontWeight: 600,
    borderRight: '1px solid var(--border-default)'
  };
  const td = {
    padding: 'var(--space-3) var(--space-4)',
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)',
    borderTop: '1px solid var(--border-default)',
    borderRight: '1px solid var(--border-default)'
  };
  const trAlt = {
    background: `color-mix(in srgb, var(--chapter-${chapter}-100) 45%, var(--surface-card))`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("table", {
    style: table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: th
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: i % 2 ? trAlt : undefined
  }, columns.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: td
  }, r[c.key])))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/tables/KeyTermsTable.jsx
try { (() => {
function KeyTermsTable({
  terms = [],
  chapter = 1
}) {
  const wrap = {
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)'
  };
  const table = {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed'
  };
  const th = {
    textAlign: 'left',
    padding: 'var(--space-3) var(--space-4)',
    background: `var(--chapter-${chapter}-100)`,
    color: `var(--chapter-${chapter}-900)`,
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontWeight: 600,
    borderRight: '1px solid var(--border-default)'
  };
  const td = {
    padding: 'var(--space-3) var(--space-4)',
    fontSize: 'var(--text-sm)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--ink-900)',
    borderTop: '1px solid var(--border-default)',
    borderRight: '1px solid var(--border-default)',
    verticalAlign: 'top',
    overflowWrap: 'break-word'
  };
  const trAlt = {
    background: `color-mix(in srgb, var(--chapter-${chapter}-100) 45%, var(--surface-card))`
  };
  const hasExamples = terms.some(t => t.example);
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("table", {
    style: table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: '20%'
    }
  }, "Term"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: hasExamples ? '24%' : '32%'
    }
  }, "Simple Explanation"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: hasExamples ? '32%' : '48%'
    }
  }, "Why It Matters"), hasExamples && /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: '24%'
    }
  }, "Example / Analogy"))), /*#__PURE__*/React.createElement("tbody", null, terms.map((t, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: i % 2 ? trAlt : undefined
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 700
    }
  }, t.term), /*#__PURE__*/React.createElement("td", {
    style: td
  }, t.explanation), /*#__PURE__*/React.createElement("td", {
    style: td
  }, t.why), hasExamples && /*#__PURE__*/React.createElement("td", {
    style: td
  }, t.example))))));
}
Object.assign(__ds_scope, { KeyTermsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/KeyTermsTable.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ConceptCard = __ds_scope.ConceptCard;

__ds_ns.WorkedExample = __ds_scope.WorkedExample;

__ds_ns.Chain = __ds_scope.Chain;

__ds_ns.Flowchart = __ds_scope.Flowchart;

__ds_ns.FormulaTree = __ds_scope.FormulaTree;

__ds_ns.Matrix = __ds_scope.Matrix;

__ds_ns.Split = __ds_scope.Split;

__ds_ns.FlashCard = __ds_scope.FlashCard;

__ds_ns.FlashcardGrid = __ds_scope.FlashcardGrid;

__ds_ns.StepPipeline = __ds_scope.StepPipeline;

__ds_ns.Image = __ds_scope.Image;

__ds_ns.ChapterHeader = __ds_scope.ChapterHeader;

__ds_ns.PageBadge = __ds_scope.PageBadge;

__ds_ns.PageFooter = __ds_scope.PageFooter;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.TopicHeader = __ds_scope.TopicHeader;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.KeyTermsTable = __ds_scope.KeyTermsTable;

})();
