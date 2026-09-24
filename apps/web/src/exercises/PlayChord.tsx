import { useEffect, useMemo, useRef, useState } from 'react';
import { pitchClass } from '@music/core';
import { Keyboard, type KeyMark } from '../components/Keyboard/Keyboard';
import { noteInputBus } from '../input/NoteInputBus';
import { useExerciseNoteInput } from './focus';
import type { ExerciseComponentProps } from './types';
import { rangeAround } from './util';

const SETTLE_MS = 350;

/**
 * play-chord: hold the chord. The answer is submitted once enough distinct notes are held and stay unchanged for a
 * moment, or when all keys are released after at least two notes (the largest set held counts).
 */
export function PlayChord({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'play-chord'>) {
  const [peak, setPeak] = useState<number[]>([]);
  const peakRef = useRef<number[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submitted = useRef(false);
  const need = Math.max(2, item.required.length);
  useEffect(() => {
    peakRef.current = [];
    setPeak([]);
    submitted.current = false;
  }, [item]);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const submit = (notes: number[]) => {
    if (submitted.current || notes.length === 0) return;
    submitted.current = true;
    onAnswer([...notes].sort((a, b) => a - b));
  };

  useExerciseNoteInput((e) => {
    if (disabled) return;
    const held = noteInputBus.held();
    if (e.type === 'on') {
      if (submitted.current) {
        // a new attempt starts with the next press after an answer
        submitted.current = false;
        peakRef.current = [];
      }
      if (held.length >= peakRef.current.length) {
        peakRef.current = held;
        setPeak(held);
      }
      if (timer.current) clearTimeout(timer.current);
      const distinct = new Set(held.map(pitchClass)).size;
      if (distinct >= need) timer.current = setTimeout(() => submit(noteInputBus.held().length >= peakRef.current.length ? noteInputBus.held() : peakRef.current), SETTLE_MS);
    } else if (held.length === 0) {
      if (timer.current) clearTimeout(timer.current);
      if (peakRef.current.length >= 2) submit(peakRef.current);
    }
  }, !disabled);

  const marks = useMemo(() => {
    const m: Record<number, KeyMark> = {};
    if (revealed) item.midis.forEach((t) => (m[t] = 'target'));
    if (result && peak.length) {
      const wrong = new Set((result.details?.wrong as number[] | undefined) ?? []);
      peak.forEach((p) => (m[p] = wrong.has(pitchClass(p)) ? 'wrong' : 'correct'));
    }
    return m;
  }, [revealed, item.midis, result, peak]);

  return (
    <div className="play-chord">
      {item.sequence && (
        <div className="chord-seq" aria-label="Progression">
          {item.sequence.map((c, i) => (
            <span key={i} className={`chord-chip ${i === item.position ? 'current' : i < (item.position ?? 0) ? 'past' : ''}`}>{c}</span>
          ))}
        </div>
      )}
      <div className="big-symbol">{item.display}</div>
      <Keyboard range={rangeAround([...item.midis, ...peak], 48, 83)} marks={marks} showQwerty height={150} />
      <p className="muted small">Hold all the notes together{peak.length ? ` — held: ${peak.length}` : ''}.</p>
    </div>
  );
}

export default PlayChord;
