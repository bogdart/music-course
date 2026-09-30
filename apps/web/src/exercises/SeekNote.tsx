import { useEffect, useState } from 'react';
import { seekHint } from '@music/core';
import { Keyboard, type KeyMark } from '../components/Keyboard/Keyboard';
import { useExerciseNoteInput } from './focus';

/**
 * Seek: find the exact note you heard. Every key tried sounds and gets a "higher / lower" hint right here; the search
 * is answered once — when the note is found, or when `limit` tries are used up (then keep searching to finish).
 */
export function SeekNote({ onAnswer, disabled, range, target, limit, reset }: {
  /** the whole search so far (keys tried, in order) */
  onAnswer: (tries: number[]) => void;
  disabled: boolean;
  range: [number, number];
  target: number;
  limit: number;
  reset: unknown;
}) {
  const [tries, setTries] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setTries([]);
    setSubmitted(false);
  }, [reset]);
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || disabled) return;
    const t = [...tries, e.midi];
    setTries(t);
    // answer when found, or once the allowed tries are used up (a failed first attempt; searching goes on)
    if (e.midi === target || (!submitted && t.length >= limit)) {
      setSubmitted(true);
      onAnswer(t);
    }
  }, !disabled);
  const last = tries[tries.length - 1];
  const marks: Record<number, KeyMark> = {};
  for (const m of tries) marks[m] = 'wrong';
  if (disabled) marks[target] = 'correct';
  const lo = range[0] - ([1, 3, 6, 8, 10].includes(range[0] % 12) ? 1 : 0);
  const hi = range[1] + ([1, 3, 6, 8, 10].includes(range[1] % 12) ? 1 : 0);
  return (
    <div className="seek-note">
      <p className="muted small">
        Replay the note as often as you like. Try a key — it sounds and tells you which way to go. Find it within {limit} tries for it to count.
        {!disabled && ` Tries: ${tries.length}/${limit}.`}
      </p>
      {!disabled && last !== undefined && last !== target && (
        <p className="seek-hint" role="status" aria-live="polite">
          {seekHint(last, target)}
        </p>
      )}
      <Keyboard range={[lo, hi]} marks={marks} showQwerty height={150} />
    </div>
  );
}
