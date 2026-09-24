import { useEffect, useMemo, useRef, useState } from 'react';
import { pitchClass, pcToName } from '@music/core';
import { Keyboard, type KeyMark } from '../components/Keyboard/Keyboard';
import { useExerciseNoteInput } from './focus';
import { rangeAround } from './util';

export interface PlayBackProps {
  /** Target notes (for count, keyboard range and reveal) */
  targets: number[];
  onAnswer(played: number[]): void;
  /** Per-target hits from the last evaluation */
  hits?: boolean[] | undefined;
  disabled: boolean;
  revealed: boolean;
  keyName?: string;
  resetKey?: unknown;
}

/** Play a sequence back on any keyboard (octave-free). Auto-submits after as many notes as targets. */
export function PlayBack({ targets, onAnswer, hits, disabled, revealed, keyName, resetKey }: PlayBackProps) {
  const [played, setPlayedState] = useState<number[]>([]);
  const ref = useRef<number[]>([]);
  const retry = useRef(false);
  const setPlayed = (v: number[]) => {
    ref.current = v;
    setPlayedState(v);
  };
  useEffect(() => {
    setPlayed([]);
    retry.current = false;
  }, [resetKey]);
  useEffect(() => {
    if (hits) retry.current = true;
  }, [hits]);
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || disabled) return;
    const base = retry.current ? [] : ref.current;
    retry.current = false;
    const next = [...base, e.midi];
    setPlayed(next);
    if (next.length >= targets.length) onAnswer(next);
  }, !disabled);

  const marks = useMemo(() => {
    const m: Record<number, KeyMark> = {};
    if (revealed) targets.forEach((t) => (m[t] = 'target'));
    return m;
  }, [revealed, targets]);
  const flats = false;
  return (
    <div className="play-back">
      <div className="slots">
        {targets.map((t, i) => {
          const p = played[i];
          const st = hits && !retry.current ? (hits[i] ? 'ok' : 'bad') : '';
          return (
            <span key={i} className={`slot static ${st}`}>
              <span className="slot-value">{p === undefined ? '·' : pcToName(pitchClass(p), { flats })}</span>
              {revealed && <span className="slot-solution">{pcToName(pitchClass(t), { flats })}</span>}
            </span>
          );
        })}
      </div>
      <p className="muted small">
        Played {Math.min(played.length, targets.length)}/{targets.length} — any octave.
        {played.length > 0 && !disabled && (
          <button type="button" className="btn link" onClick={() => setPlayed([])}>
            reset
          </button>
        )}
      </p>
      <Keyboard range={rangeAround(targets, 48, 83)} marks={marks} {...(keyName ? { keyName } : {})} showQwerty height={140} />
    </div>
  );
}

export default PlayBack;
