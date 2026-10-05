import { scaleBand, scaleLinear } from 'd3-scale';
import { ch, type Chapter } from '../types';
import { ChartFrame, FONT, MONO, TICK, LABEL, fmt } from './shared';

export interface BarDatum {
  label: string;
  value: number;
  /** Override this bar's chapter color (e.g. highlight the winner) */
  chapter?: Chapter;
}

/** Bar chart (horizontal by default — long labels such as ranked perks read best that way). Negative values extend left/down from a zero line, with their value printed on the other side of it so it never collides with the category names. Values are printed on the bars: nothing relies on hover. */
export interface BarChartProps {
  data: BarDatum[];
  /** Default bar color */
  chapter: Chapter;
  orientation?: 'horizontal' | 'vertical';
  /** Appended to value labels and ticks, e.g. "%" or "pp" */
  unit?: string;
  /** Axis title (the value axis) */
  valueLabel?: string;
  width?: number;
  height?: number;
  caption?: string;
}

export function BarChart({ data, chapter, orientation = 'horizontal', unit = '', valueLabel, width = 520, height, caption }: BarChartProps) {
  const horizontal = orientation === 'horizontal';
  const rowH = 29;
  const H = height ?? (horizontal ? Math.max(120, data.length * rowH + 52) : 280);
  const longest = Math.max(...data.map((d) => d.label.length));
  const m = horizontal ? { t: 8, r: 52, b: valueLabel ? 40 : 26, l: Math.min(190, 15 + longest * 6.8) } : { t: 22, r: 12, b: 54, l: 44 };
  const iw = width - m.l - m.r;
  const ih = H - m.t - m.b;
  const vals = data.map((d) => d.value);
  const lo = Math.min(0, ...vals);
  const hi = Math.max(0, ...vals);
  const v = scaleLinear().domain([lo, hi]).nice(5).range(horizontal ? [0, iw] : [ih, 0]);
  const band = scaleBand<string>().domain(data.map((d) => d.label)).range(horizontal ? [0, ih] : [0, iw]).padding(0.28);
  const ticks = v.ticks(5);
  const zero = v(0);

  return (
    <ChartFrame width={width} height={H} caption={caption}>
      <g transform={`translate(${m.l},${m.t})`} fontFamily={FONT}>
        {ticks.map((t) => (
          horizontal ? (
            <g key={t}>
              <line x1={v(t)} x2={v(t)} y1={0} y2={ih} stroke="var(--line)" strokeWidth={1} />
              <text x={v(t)} y={ih + 16} textAnchor="middle" fontSize={TICK} fill="var(--ink-500)" fontFamily={MONO}>{fmt(t, unit)}</text>
            </g>
          ) : (
            <g key={t}>
              <line x1={0} x2={iw} y1={v(t)} y2={v(t)} stroke="var(--line)" strokeWidth={1} />
              <text x={-8} y={v(t)} dy="0.32em" textAnchor="end" fontSize={TICK} fill="var(--ink-500)" fontFamily={MONO}>{fmt(t, unit)}</text>
            </g>
          )
        ))}
        {data.map((d) => {
          const c = d.chapter ?? chapter;
          const pos = band(d.label) ?? 0;
          const bw = band.bandwidth();
          const val = v(d.value);
          const neg = d.value < 0;
          const labelText = fmt(d.value, unit);
          if (horizontal) {
            const x = Math.min(zero, val);
            const w = Math.abs(val - zero);
            return (
              <g key={d.label}>
                <text x={-8} y={pos + bw / 2} dy="0.32em" textAnchor="end" fontSize={LABEL} fill="var(--ink-900)">{d.label}</text>
                <rect x={x} y={pos} width={Math.max(w, 1)} height={bw} rx={4} fill={ch(c, 300)} stroke={ch(c, 500)} strokeWidth={1.5} />
                <text x={neg ? zero + 5 : x + w + 5} y={pos + bw / 2} dy="0.32em" textAnchor="start" fontSize={TICK} fontWeight={700} fill={ch(c, 900)} fontFamily={MONO}>{labelText}</text>
              </g>
            );
          }
          const y = Math.min(zero, val);
          const h = Math.abs(val - zero);
          return (
            <g key={d.label}>
              <rect x={pos} y={y} width={bw} height={Math.max(h, 1)} rx={4} fill={ch(c, 300)} stroke={ch(c, 500)} strokeWidth={1.5} />
              <text x={pos + bw / 2} y={neg ? y + h + 13 : y - 5} textAnchor="middle" fontSize={TICK} fontWeight={700} fill={ch(c, 900)} fontFamily={MONO}>{labelText}</text>
              <text x={pos + bw / 2} y={ih + 16} textAnchor="middle" fontSize={LABEL} fill="var(--ink-900)">{d.label}</text>
            </g>
          );
        })}
        {horizontal ? <line x1={zero} x2={zero} y1={0} y2={ih} stroke="var(--ink-500)" strokeWidth={1.5} /> : <line x1={0} x2={iw} y1={zero} y2={zero} stroke="var(--ink-500)" strokeWidth={1.5} />}
        {valueLabel && (horizontal
          ? <text x={iw / 2} y={ih + 34} textAnchor="middle" fontSize={LABEL} fill="var(--ink-500)">{valueLabel}</text>
          : <text transform={`translate(${-34},${ih / 2}) rotate(-90)`} textAnchor="middle" fontSize={LABEL} fill="var(--ink-500)">{valueLabel}</text>)}
      </g>
    </ChartFrame>
  );
}
