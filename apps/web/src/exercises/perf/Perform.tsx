import { useMemo, useRef, useState } from 'react';
import {
  PPQ, parseSeqDetailed, pitchClass, type PerformanceResult, type PerformanceSpec, type PlayedNote, type SequenceResult, type Snippet,
} from '@music/core';
import { Keyboard, type KeyMark } from '../../components/Keyboard/Keyboard';
import { Staff } from '../../components/Staff/Staff';
import { play } from '../../audio/engine';
import type { EvalResult } from '@music/core';
import { PerformanceStrip, STATUS_COLOR } from './PerformanceStrip';
import { usePerformanceCapture } from './usePerformance';

export interface PerformProps {
  spec: PerformanceSpec;
  onAnswer(answer: { notes: PlayedNote[] }): void;
  result: EvalResult | null;
  disabled: boolean;
  revealed?: boolean;
  seq?: string | undefined;
  clef?: 'treble' | 'bass' | 'percussion' | undefined;
  keySig?: string | undefined;
  timeSigStr?: string;
  showStaff?: boolean;
  showKeyboard?: boolean;
  backing?: Snippet | undefined;
  /** "Listen first" demo */
  demo?: Snippet | undefined;
  /** Label for the start button */
  startLabel?: string;
}

/** Map staff items (main voice) to per-item colours from the per-target statuses. */
export function staffColors(seq: string, timeSig: string, spec: PerformanceSpec, perf: PerformanceResult | undefined): Record<number, string> {
  if (!perf) return {};
  let items;
  try {
    items = parseSeqDetailed(seq, { timeSig }).items;
  } catch {
    return {};
  }
  const voice0 = spec.targets.map((t, i) => ({ t, i })).filter(({ t }) => (t.voice ?? 0) === 0);
  const out: Record<number, string> = {};
  const rank = { ok: 0, early: 1, late: 1, octave: 2, wrong: 3, missed: 3 } as const;
  let k = 0;
  let prevTie: { tie: boolean; midis: number[]; color?: string } | null = null;
  const taps = spec.input === 'taps';
  const seenTicks = new Set<number>();
  for (const it of items) {
    if (it.kind === 'rest') {
      prevTie = null;
      continue;
    }
    if (prevTie?.tie && prevTie.color && it.midis.every((m) => prevTie!.midis.includes(m))) {
      out[it.index] = prevTie.color;
      prevTie = { tie: it.tie, midis: it.midis, color: prevTie.color };
      continue;
    }
    // taps: one target per onset; notes: one target per chord member
    const n = taps ? (seenTicks.has(it.startTick) ? 0 : 1) : it.midis.length;
    seenTicks.add(it.startTick);
    let worst: keyof typeof rank = 'ok';
    for (let j = 0; j < n && k < voice0.length; j++, k++) {
      const st = perf.notes[voice0[k]!.i]?.status ?? 'missed';
      if (rank[st] > rank[worst]) worst = st;
    }
    const color = STATUS_COLOR[worst];
    out[it.index] = color;
    prevTie = { tie: it.tie, midis: it.midis, color };
  }
  return out;
}

/**
 * Performance UI shared by play-scale, play-melody, rhythm-tap, read-rhythm and ear-rhythm (tap): notation, count-in,
 * metronome/backing, capture (keys / MIDI / taps), then a coloured result on the staff, keyboard and timeline.
 */
export function Perform(props: PerformProps) {
  const { spec, result, disabled } = props;
  const [last, setLast] = useState<PlayedNote[]>([]);
  const onAnswer = useRef(props.onAnswer);
  onAnswer.current = props.onAnswer;
  const cap = usePerformanceCapture(spec, {
    backing: props.backing,
    onDone: (notes) => {
      setLast(notes);
      onAnswer.current({ notes });
    },
    enabled: !disabled,
  });
  const taps = spec.input === 'taps';
  const active = cap.phase === 'countin' || cap.phase === 'recording';
  const perf = result?.details?.performance as PerformanceResult | undefined;
  const seqRes = result?.details?.sequence as SequenceResult | undefined;
  const shown = active ? cap.notes : last;
  const timeSig = props.timeSigStr ?? `${spec.timeSig.num}/${spec.timeSig.den}`;

  const colors = useMemo(() => (props.seq && !active ? staffColors(props.seq, timeSig, spec, perf) : {}), [props.seq, timeSig, spec, perf, active]);
  const highlight = useMemo(() => {
    if (!props.seq || !active || cap.position === null || cap.position < 0) return null;
    const tick = cap.position * ((PPQ * 4) / spec.timeSig.den);
    try {
      const items = parseSeqDetailed(props.seq, { timeSig }).items;
      const loopLen = items.length ? Math.max(...items.map((i) => i.startTick + i.durationTicks)) : 1;
      const t = tick % Math.max(1, loopLen);
      return items.find((i) => i.kind !== 'rest' && t >= i.startTick && t < i.startTick + i.durationTicks)?.index ?? null;
    } catch {
      return null;
    }
  }, [props.seq, active, cap.position, spec.timeSig.den, timeSig]);

  const marks = useMemo(() => {
    const m: Record<number, KeyMark> = {};
    if (props.revealed || (result && !active)) for (const t of spec.targets) if (t.midi !== null) m[t.midi] = 'target';
    if (!active && result) {
      if (perf) perf.notes.forEach((n) => n.played !== null && shown[n.played] && (m[shown[n.played]!.midi] = n.status === 'wrong' ? 'wrong' : 'correct'));
      if (perf) perf.extras.forEach((i) => shown[i] && (m[shown[i]!.midi] = 'wrong'));
      if (seqRes) shown.forEach((p, i) => (m[p.midi] = seqRes.extras.includes(i) ? 'wrong' : 'correct'));
    }
    return m;
  }, [props.revealed, result, active, spec.targets, perf, seqRes, shown]);

  const midis = spec.targets.map((t) => t.midi).filter((m): m is number => m !== null);
  const lo = midis.length ? Math.min(...midis) : 60;
  const hi = midis.length ? Math.max(...midis) : 72;
  const range: [number, number] = spec.pitchMode === 'pitch-class' ? [Math.min(lo - (lo % 12), 48), Math.max(hi + (11 - (hi % 12)), 83)] : [Math.min(lo - (lo % 12), 60), Math.max(hi + (11 - (hi % 12)), 71)];

  const countInBeats = spec.countIn * spec.timeSig.num;
  const countdown = cap.phase === 'countin' ? (cap.position !== null && cap.position < 0 ? Math.ceil(-cap.position) : countInBeats || 1) : null;

  return (
    <div className="perform" data-phase={cap.phase}>
      {props.showStaff !== false && props.seq && (
        <Staff seq={props.seq} clef={props.clef ?? 'auto'} timeSig={timeSig} {...(props.keySig ? { keySig: props.keySig } : {})} highlight={highlight} colors={colors} />
      )}
      <div className="row wrap perform-controls">
        {props.demo && !active && (
          <button type="button" className="btn ghost" onClick={() => void play(props.demo!)}>
            ▶ Listen first
          </button>
        )}
        {!active && !disabled && (
          <button type="button" className="btn primary" onClick={() => void cap.start()} data-testid="perf-start">
            {result ? '↻ Try again' : `● ${props.startLabel ?? (spec.timed ? 'Start' : 'Ready')}`}
          </button>
        )}
        {active && (
          <button type="button" className="btn" onClick={cap.stop} data-testid="perf-stop">
            ■ {spec.timed ? 'Stop' : 'Done'}
          </button>
        )}
        {active && spec.timed && (
          <span className={`perf-count ${countdown ? 'countin' : 'rec'}`} aria-live="polite">
            {countdown ? `Count-in… ${countdown}` : `● Recording${taps ? ' — tap!' : ''}`}
          </span>
        )}
        {active && !spec.timed && (
          <span className="perf-count rec">
            Played {cap.notes.length}/{spec.targets.length}
          </span>
        )}
        {!active && !result && spec.timed && (
          <span className="muted small">
            {countInBeats > 0 ? `${countInBeats}-beat count-in, ` : ''}
            {spec.bpm} BPM{taps ? ' · tap with space / any key / the pad / a MIDI key' : ''}
          </span>
        )}
      </div>
      {taps && (
        <button
          type="button"
          className={`tap-pad ${active ? 'live' : ''}`}
          disabled={!active}
          onPointerDown={(e) => {
            e.preventDefault();
            cap.tap();
          }}
          data-testid="tap-pad"
        >
          TAP
        </button>
      )}
      {spec.timed && (shown.length > 0 || active || result) && <PerformanceStrip spec={spec} played={shown} result={active ? null : perf ?? null} position={cap.position} />}
      {props.showKeyboard !== false && !taps && <Keyboard range={range} marks={marks} {...(props.keySig ? { keyName: props.keySig } : {})} showQwerty height={140} />}
      {seqRes && !active && (
        <p className="small muted">
          Your notes: {shown.map((p, i) => <span key={i} className={seqRes.extras.includes(i) ? 'bad-text' : 'ok-text'}>{i ? ' ' : ''}{pcName(p.midi)}</span>)}
        </p>
      )}
    </div>
  );
}

function pcName(m: number): string {
  return ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'][pitchClass(m)]!;
}

export default Perform;
