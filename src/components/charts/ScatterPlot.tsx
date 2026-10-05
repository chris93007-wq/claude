import { scaleLinear } from 'd3-scale';
import { ch, type Chapter } from '../types';
import { ChartFrame, FONT, MONO, TICK, LABEL, fmt } from './shared';

export interface ScatterPoint {
  x: number;
  y: number;
  /** Printed next to the point */
  label?: string;
  chapter?: Chapter;
}

/** Scatter plot (e.g. perceptual maps, importance vs. performance). Labels are printed beside points; an optional quadrant cross-hair splits the plane. */
export interface ScatterPlotProps {
  points: ScatterPoint[];
  chapter: Chapter;
  xLabel?: string;
  yLabel?: string;
  /** Draw dashed quadrant lines at these values */
  quadrant?: { x: number; y: number };
  width?: number;
  height?: number;
  caption?: string;
}

export function ScatterPlot({ points, chapter, xLabel, yLabel, quadrant, width = 520, height = 320, caption }: ScatterPlotProps) {
  const m = { t: 14, r: 20, b: xLabel ? 46 : 28, l: yLabel ? 58 : 44 };
  const iw = width - m.l - m.r;
  const ih = height - m.t - m.b;
  const pad = (a: number[]) => { const lo = Math.min(...a), hi = Math.max(...a), d = (hi - lo || 1) * 0.08; return [lo - d, hi + d] as [number, number]; };
  const x = scaleLinear().domain(pad(points.map((p) => p.x))).nice(6).range([0, iw]);
  const y = scaleLinear().domain(pad(points.map((p) => p.y))).nice(6).range([ih, 0]);
  return (
    <ChartFrame width={width} height={height} caption={caption}>
      <g transform={`translate(${m.l},${m.t})`} fontFamily={FONT}>
        {y.ticks(5).map((t) => (
          <g key={`y${t}`}>
            <line x1={0} x2={iw} y1={y(t)} y2={y(t)} stroke="var(--line)" />
            <text x={-8} y={y(t)} dy="0.32em" textAnchor="end" fontSize={TICK} fill="var(--ink-500)" fontFamily={MONO}>{fmt(t)}</text>
          </g>
        ))}
        {x.ticks(6).map((t) => (
          <g key={`x${t}`}>
            <line x1={x(t)} x2={x(t)} y1={0} y2={ih} stroke="var(--line)" />
            <text x={x(t)} y={ih + 16} textAnchor="middle" fontSize={TICK} fill="var(--ink-500)" fontFamily={MONO}>{fmt(t)}</text>
          </g>
        ))}
        <line x1={0} x2={iw} y1={ih} y2={ih} stroke="var(--ink-500)" strokeWidth={1.5} />
        <line x1={0} x2={0} y1={0} y2={ih} stroke="var(--ink-500)" strokeWidth={1.5} />
        {quadrant && (
          <g stroke="var(--ink-300)" strokeWidth={1.5} strokeDasharray="6 4">
            <line x1={x(quadrant.x)} x2={x(quadrant.x)} y1={0} y2={ih} />
            <line x1={0} x2={iw} y1={y(quadrant.y)} y2={y(quadrant.y)} />
          </g>
        )}
        {points.map((p, i) => {
          const c = p.chapter ?? chapter;
          const flip = x(p.x) > iw - 90;
          return (
            <g key={i}>
              <circle cx={x(p.x)} cy={y(p.y)} r={6} fill={ch(c, 300)} stroke={ch(c, 500)} strokeWidth={2} />
              {p.label && <text x={x(p.x) + (flip ? -10 : 10)} y={y(p.y)} dy="0.32em" textAnchor={flip ? 'end' : 'start'} fontSize={LABEL} fontWeight={600} fill={ch(c, 900)}>{p.label}</text>}
            </g>
          );
        })}
        {xLabel && <text x={iw / 2} y={ih + 38} textAnchor="middle" fontSize={LABEL} fill="var(--ink-500)">{xLabel}</text>}
        {yLabel && <text transform={`translate(${-46},${ih / 2}) rotate(-90)`} textAnchor="middle" fontSize={LABEL} fill="var(--ink-500)">{yLabel}</text>}
      </g>
    </ChartFrame>
  );
}
