import { PPQ, secondsToTicks, type NoteStatus, type PerformanceResult, type PerformanceSpec, type PlayedNote } from '@music/core';

export const STATUS_COLOR: Record<NoteStatus | 'extra' | 'pending', string> = {
  ok: '#43c26b',
  early: '#f3c945',
  late: '#ff9f43',
  octave: '#c38cff',
  wrong: '#e5534b',
  missed: '#e5534b',
  extra: '#e5534b',
  pending: '#7a8499',
};

export const STATUS_LABEL: Record<NoteStatus | 'extra', string> = {
  ok: 'in time', early: 'early', late: 'late', octave: 'wrong octave', wrong: 'wrong note', missed: 'missed', extra: 'extra',
};

export interface PerformanceStripProps {
  spec: PerformanceSpec;
  /** Notes played (live or final) */
  played: PlayedNote[];
  result?: PerformanceResult | null;
  /** Playhead in beats from tick 0 */
  position?: number | null;
}

/**
 * Timeline of a take: target notes as bars (a pitch lane per note, or one lane for taps), played notes as markers,
 * coloured by status once scored (green in time, yellow early, orange late, red wrong/missed/extra).
 */
export function PerformanceStrip({ spec, played, result, position }: PerformanceStripProps) {
  const taps = spec.input === 'taps' || spec.pitchMode === 'none';
  const beatTicks = (PPQ * 4) / spec.timeSig.den;
  const len = Math.max(spec.lengthTicks, beatTicks);
  const pad = beatTicks * 0.5;
  const x0 = -pad;
  const span = len + 2 * pad;
  const W = 1000;
  const X = (tick: number) => ((tick - x0) / span) * W;
  const pitches = taps ? [0] : [...new Set([...spec.targets.map((t) => t.midi ?? 60), ...played.map((p) => p.midi)])].sort((a, b) => b - a);
  const lo = Math.min(...pitches);
  const hi = Math.max(...pitches);
  const rows = taps ? 1 : hi - lo + 1;
  const rowH = taps ? 34 : Math.max(6, Math.min(16, 140 / rows));
  const H = rows * rowH + 18;
  const Y = (midi: number | null) => (taps || midi === null ? 8 : (hi - midi) * rowH + 8);
  const statusOfPlayed = new Map<number, NoteStatus | 'extra'>();
  result?.notes.forEach((n) => n.played !== null && statusOfPlayed.set(n.played, n.status));
  result?.extras.forEach((i) => statusOfPlayed.set(i, 'extra'));
  const beats = Math.ceil(len / beatTicks);
  const bar = beatTicks * spec.timeSig.num;
  const tolTicks = result ? secondsToTicks(result.toleranceSec, spec.bpm) : 0;

  return (
    <div className="perf-strip" data-testid="perf-strip">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ height: Math.min(200, H * 1.2) }} role="img" aria-label="Performance timeline">
        {Array.from({ length: beats + 1 }, (_, b) => (
          <line key={b} x1={X(b * beatTicks)} x2={X(b * beatTicks)} y1={0} y2={H} stroke={(b * beatTicks) % bar === 0 ? '#4a5263' : '#2c323e'} strokeWidth={(b * beatTicks) % bar === 0 ? 2 : 1} />
        ))}
        {spec.targets.map((t, i) => {
          const st = result?.notes[i]?.status;
          const color = st ? STATUS_COLOR[st] : STATUS_COLOR.pending;
          const w = Math.max(4, X(t.startTick + (taps ? Math.min(t.durationTicks, beatTicks / 4) : t.durationTicks)) - X(t.startTick) - 2);
          return (
            <g key={`t${i}`}>
              {result && tolTicks > 0 && <rect x={X(t.startTick - tolTicks)} y={Y(t.midi) - 1} width={X(t.startTick + tolTicks) - X(t.startTick - tolTicks)} height={(taps ? 26 : rowH) + 2} fill="#ffffff" opacity={0.05} />}
              <rect
                x={X(t.startTick)} y={Y(t.midi)} width={w} height={taps ? 24 : rowH - 2} rx={3}
                fill={st && st !== 'missed' ? color : 'none'} fillOpacity={0.35} stroke={color} strokeWidth={2}
                strokeDasharray={st === 'missed' ? '5 4' : undefined}
                data-status={st ?? 'pending'}
              >
                <title>{st ? STATUS_LABEL[st] : 'target'}</title>
              </rect>
            </g>
          );
        })}
        {played.map((p, i) => {
          const st = statusOfPlayed.get(i);
          const color = st ? STATUS_COLOR[st] : '#e8eaf0';
          const x = X(secondsToTicks(p.time, spec.bpm));
          const y = Y(taps ? null : p.midi) + (taps ? 12 : rowH / 2 - 1);
          return st === 'extra' ? (
            <g key={`p${i}`} stroke={color} strokeWidth={3}>
              <line x1={x - 6} x2={x + 6} y1={y - 6} y2={y + 6} />
              <line x1={x - 6} x2={x + 6} y1={y + 6} y2={y - 6} />
            </g>
          ) : (
            <circle key={`p${i}`} cx={x} cy={y} r={taps ? 7 : Math.max(3, rowH / 2 - 1)} fill={color} stroke="#0b0c10" strokeWidth={1.5} />
          );
        })}
        {position !== null && position !== undefined && position >= -0.5 && (
          <line x1={X(position * beatTicks)} x2={X(position * beatTicks)} y1={0} y2={H} stroke="#7aa2ff" strokeWidth={3} />
        )}
      </svg>
      {result && (
        <div className="perf-legend small">
          {(['ok', 'early', 'late', 'octave', 'wrong', 'missed', 'extra'] as const)
            .filter((k) => result.counts[k] > 0)
            .map((k) => (
              <span key={k} className="legend-item">
                <span className="swatch" style={{ background: STATUS_COLOR[k] }} /> {result.counts[k]} {STATUS_LABEL[k]}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}

export default PerformanceStrip;
