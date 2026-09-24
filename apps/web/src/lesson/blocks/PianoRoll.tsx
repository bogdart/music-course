import { snippetLength, type Snippet } from '@music/core';

const COLORS = ['#7aa2ff', '#ff9f68', '#7ee0a0', '#e38cff', '#ffd166', '#6fd6e0'];

/** Read-only mini piano roll of a snippet. */
export function PianoRoll({ snippet, sounding = [] }: { snippet: Snippet; sounding?: number[] }) {
  const events = snippet.tracks.flatMap((t, ti) => t.events.map((e) => ({ ...e, ti })));
  if (!events.length) return null;
  const len = snippetLength(snippet);
  const lo = Math.min(...events.map((e) => e.midi)) - 1;
  const hi = Math.max(...events.map((e) => e.midi)) + 1;
  const rows = hi - lo + 1;
  const h = Math.min(220, Math.max(80, rows * 8));
  const rowH = h / rows;
  const bar = (1920 * snippet.timeSig.num) / snippet.timeSig.den;
  return (
    <svg className="pianoroll" viewBox={`0 0 1000 ${h}`} preserveAspectRatio="none" role="img" aria-label="Piano roll" style={{ height: h }}>
      {Array.from({ length: Math.ceil(len / bar) + 1 }, (_, i) => (
        <line key={i} x1={(i * bar * 1000) / len} x2={(i * bar * 1000) / len} y1={0} y2={h} stroke="#333a48" />
      ))}
      {events.map((e, i) => (
        <rect
          key={i}
          x={(e.startTick * 1000) / len}
          y={(hi - e.midi) * rowH}
          width={Math.max(2, (e.durationTicks * 1000) / len - 1)}
          height={Math.max(2, rowH - 1)}
          rx={2}
          fill={sounding.includes(e.midi) ? '#fff' : COLORS[e.ti % COLORS.length]}
        />
      ))}
    </svg>
  );
}
