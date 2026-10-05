import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { ch, type Chapter } from '../types';
import { ChartFrame, FONT, MONO, TICK, LABEL, fmt } from './shared';

export interface LineSeries {
  name: string;
  points: Array<{ x: number; y: number }>;
  chapter: Chapter;
}

/** Line chart with 1–4 series. Series are labeled directly at the line end (plus distinct dash/marker shapes), so it still reads in black-and-white print — no legend lookup, no hover. */
export interface LineChartProps {
  series: LineSeries[];
  xLabel?: string;
  yLabel?: string;
  /** Appended to y ticks, e.g. "%" */
  yUnit?: string;
  xUnit?: string;
  /** Force the y axis to start at 0 (default true) */
  zeroBased?: boolean;
  width?: number;
  height?: number;
  caption?: string;
}

const DASHES = [undefined, '7 4', '2 3', '10 3 2 3'];

export function LineChart({ series, xLabel, yLabel, yUnit = '', xUnit = '', zeroBased = true, width = 520, height = 280, caption }: LineChartProps) {
  const longest = Math.max(...series.map((s) => s.name.length));
  const m = { t: 14, r: Math.min(130, 17 + longest * 7.3), b: xLabel ? 46 : 28, l: yLabel ? 58 : 44 };
  const iw = width - m.l - m.r;
  const ih = height - m.t - m.b;
  const xs = series.flatMap((s) => s.points.map((p) => p.x));
  const ys = series.flatMap((s) => s.points.map((p) => p.y));
  const x = scaleLinear().domain([Math.min(...xs), Math.max(...xs)]).nice(6).range([0, iw]);
  const y = scaleLinear().domain([zeroBased ? Math.min(0, ...ys) : Math.min(...ys), Math.max(...ys)]).nice(5).range([ih, 0]);
  const path = line<{ x: number; y: number }>().x((p) => x(p.x)).y((p) => y(p.y));

  // keep end labels from colliding
  const ends = series.map((s, i) => ({ i, y: y(s.points[s.points.length - 1].y) })).sort((a, b) => a.y - b.y);
  const labelY: number[] = [];
  ends.forEach((e, k) => { labelY[e.i] = k > 0 ? Math.max(e.y, labelY[ends[k - 1].i] + 14) : e.y; });

  return (
    <ChartFrame width={width} height={height} caption={caption}>
      <g transform={`translate(${m.l},${m.t})`} fontFamily={FONT}>
        {y.ticks(5).map((t) => (
          <g key={`y${t}`}>
            <line x1={0} x2={iw} y1={y(t)} y2={y(t)} stroke="var(--line)" />
            <text x={-8} y={y(t)} dy="0.32em" textAnchor="end" fontSize={TICK} fill="var(--ink-500)" fontFamily={MONO}>{fmt(t, yUnit)}</text>
          </g>
        ))}
        {x.ticks(6).map((t) => (
          <text key={`x${t}`} x={x(t)} y={ih + 16} textAnchor="middle" fontSize={TICK} fill="var(--ink-500)" fontFamily={MONO}>{fmt(t, xUnit)}</text>
        ))}
        <line x1={0} x2={iw} y1={ih} y2={ih} stroke="var(--ink-500)" strokeWidth={1.5} />
        <line x1={0} x2={0} y1={0} y2={ih} stroke="var(--ink-500)" strokeWidth={1.5} />
        {series.map((s, i) => (
          <g key={s.name}>
            <path d={path(s.points) ?? ''} fill="none" stroke={ch(s.chapter, 500)} strokeWidth={2.5} strokeDasharray={DASHES[i % DASHES.length]} strokeLinejoin="round" strokeLinecap="round" />
            {s.points.map((p, j) => (i % 2 === 0
              ? <circle key={j} cx={x(p.x)} cy={y(p.y)} r={3.5} fill="#fff" stroke={ch(s.chapter, 500)} strokeWidth={2} />
              : <rect key={j} x={x(p.x) - 3.5} y={y(p.y) - 3.5} width={7} height={7} fill="#fff" stroke={ch(s.chapter, 500)} strokeWidth={2} />))}
            <text x={iw + 10} y={labelY[i]} dy="0.32em" fontSize={LABEL} fontWeight={700} fill={ch(s.chapter, 900)}>{s.name}</text>
          </g>
        ))}
        {xLabel && <text x={iw / 2} y={ih + 38} textAnchor="middle" fontSize={LABEL} fill="var(--ink-500)">{xLabel}</text>}
        {yLabel && <text transform={`translate(${-46},${ih / 2}) rotate(-90)`} textAnchor="middle" fontSize={LABEL} fill="var(--ink-500)">{yLabel}</text>}
      </g>
    </ChartFrame>
  );
}
