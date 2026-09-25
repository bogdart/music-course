import { useCallback, useEffect, useRef, useState } from 'react';
import { beatSeconds, tickSeconds, type PerformanceSpec, type PlayedNote, type Snippet } from '@music/core';
import { audioTimeToPerf, play } from '../../audio/engine';
import type { PlaybackHandle } from '../../audio/types';
import { noteInputBus, type NoteInputEvent } from '../../input/NoteInputBus';
import { e2eHook } from '../../testHooks';

export type PerfPhase = 'idle' | 'countin' | 'recording' | 'done';

export interface PerformanceCapture {
  phase: PerfPhase;
  /** Notes captured so far (times in seconds from the first music tick) */
  notes: PlayedNote[];
  /** Current position in beats relative to tick 0 (negative during the count-in); null when idle */
  position: number | null;
  start(): Promise<void>;
  /** Stop early (the take is submitted as-is) */
  stop(): void;
  /** Abort without submitting */
  cancel(): void;
  /** Register a tap (pad / button) now */
  tap(): void;
}

const IGNORED_KEYS = new Set(['Shift', 'Control', 'Alt', 'Meta', 'Tab', 'Escape', 'CapsLock', 'Enter']);
/** MIDI number recorded for taps from the computer keyboard / pad */
export const TAP_MIDI = 76;

function isTypingTarget(t: EventTarget | null): boolean {
  return t instanceof HTMLElement && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
}

/**
 * Performance capture shared by timing exercises: count-in + metronome (+ optional backing) through the AudioEngine,
 * note-ons from the NoteInputBus (MIDI / on-screen / QWERTY) and, for tap input, any computer key (space…) or the
 * tap pad, timestamped relative to the first music tick using the audio clock → performance.now() mapping.
 * Untimed specs (`timed: false`) just collect notes until as many as there are targets have been played.
 */
export function usePerformanceCapture(spec: PerformanceSpec, opts: { backing?: Snippet | undefined; onDone(notes: PlayedNote[]): void; enabled?: boolean }): PerformanceCapture {
  const [phase, setPhase] = useState<PerfPhase>('idle');
  const [notes, setNotes] = useState<PlayedNote[]>([]);
  const [position, setPosition] = useState<number | null>(null);
  const notesRef = useRef<PlayedNote[]>([]);
  const t0 = useRef<number | null>(null);
  const handle = useRef<PlaybackHandle | null>(null);
  const phaseRef = useRef<PerfPhase>('idle');
  const raf = useRef<number | null>(null);
  const onDone = useRef(opts.onDone);
  onDone.current = opts.onDone;
  const cancelled = useRef(false);

  const setP = (p: PerfPhase) => {
    phaseRef.current = p;
    setPhase(p);
    const h = e2eHook();
    if (h) h.perf = { t0: p === 'countin' ? null : t0.current, phase: p, bpm: spec.bpm, startedAt: performance.now() };
  };

  const beatSec = beatSeconds(spec.bpm, spec.timeSig);
  const endSec = tickSeconds(spec.lengthTicks, spec.bpm);
  const nTargets = spec.targets.length;

  const record = useCallback((midi: number, perfMs: number) => {
    const p = phaseRef.current;
    if (p !== 'countin' && p !== 'recording') return;
    if (t0.current === null) return;
    const time = (perfMs - t0.current) / 1000;
    // ignore stray notes well before the downbeat (e.g. still playing along with the demo)
    if (spec.timed && time < -beatSec) return;
    const n = [...notesRef.current, { midi, time }];
    notesRef.current = n;
    setNotes(n);
    if (!spec.timed && n.length >= nTargets) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spec, beatSec, nTargets]);

  const finish = useCallback(() => {
    if (phaseRef.current === 'done' || phaseRef.current === 'idle') return;
    setP('done');
    if (raf.current !== null) cancelAnimationFrame(raf.current);
    raf.current = null;
    setPosition(null);
    const h = handle.current;
    handle.current = null;
    h?.stop();
    if (!cancelled.current) onDone.current(notesRef.current);
  }, []);

  // input subscriptions while capturing
  useEffect(() => {
    if (phase !== 'countin' && phase !== 'recording') return;
    const taps = spec.input === 'taps';
    const unsub = noteInputBus.subscribe((e: NoteInputEvent) => {
      if (e.type !== 'on') return;
      if (taps && e.source === 'qwerty') return; // computer keys are handled by the keydown listener below
      record(taps ? TAP_MIDI : e.midi, e.time);
    });
    const onKey = (e: KeyboardEvent) => {
      if (!taps || e.repeat || e.metaKey || e.ctrlKey || e.altKey || IGNORED_KEYS.has(e.key) || isTypingTarget(e.target)) return;
      if (e.key === ' ') e.preventDefault();
      record(TAP_MIDI, performance.now());
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (taps && e.key === ' ') e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      unsub();
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [phase, spec.input, record]);

  const tick = useCallback(() => {
    if (t0.current === null) return;
    const sec = (performance.now() - t0.current) / 1000;
    setPosition(sec / beatSec);
    if (phaseRef.current === 'countin' && sec >= 0) setP('recording');
    raf.current = requestAnimationFrame(tick);
  }, [beatSec]);

  const start = useCallback(async () => {
    cancelled.current = false;
    notesRef.current = [];
    setNotes([]);
    (document.activeElement as HTMLElement | null)?.blur?.();
    if (!spec.timed) {
      t0.current = performance.now();
      setP('recording');
      return;
    }
    setP('countin');
    t0.current = null;
    const snippet: Snippet = opts.backing ?? { bpm: spec.bpm, timeSig: spec.timeSig, tracks: [] };
    const h = await play(snippet, {
      bpm: spec.bpm,
      countIn: spec.countIn,
      metronome: spec.metronome,
      lengthTicks: spec.lengthTicks,
      onEnd: () => {
        if (handle.current === h || handle.current === null) finish();
      },
    });
    handle.current = h;
    // tick 0 (after the count-in) in performance.now() time
    t0.current = audioTimeToPerf(h.startTime);
    const hook = e2eHook();
    if (hook?.perf) hook.perf.t0 = t0.current;
    if (typeof requestAnimationFrame === 'function') raf.current = requestAnimationFrame(tick);
    // safety net if the engine never reports the end
    const total = (t0.current - performance.now()) / 1000 + endSec + 1.5;
    setTimeout(() => {
      if (handle.current === h) finish();
    }, Math.max(1000, total * 1000));
  }, [spec, opts.backing, tick, finish, endSec]);

  const stop = useCallback(() => finish(), [finish]);
  const cancel = useCallback(() => {
    cancelled.current = true;
    finish();
    setP('idle');
  }, [finish]);
  const tap = useCallback(() => record(TAP_MIDI, performance.now()), [record]);

  useEffect(() => {
    if (opts.enabled === false && (phaseRef.current === 'countin' || phaseRef.current === 'recording')) cancel();
  }, [opts.enabled, cancel]);

  useEffect(
    () => () => {
      cancelled.current = true;
      handle.current?.stop();
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    },
    [],
  );

  return { phase, notes, position, start, stop, cancel, tap };
}
