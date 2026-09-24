import { useEffect, useMemo, useState } from 'react';
import { midiToNote, pitchClass } from '@music/core';
import { Keyboard, type KeyMark, type KeyRole } from '../components/Keyboard/Keyboard';
import { useExerciseNoteInput } from './focus';
import type { ExerciseComponentProps } from './types';

type BuildType = 'build-chord' | 'build-scale';

/** build-chord / build-scale: toggle the notes (click or play), then Check. Pitch classes count; octave is free. */
export function BuildNotes<T extends BuildType>(props: ExerciseComponentProps<T>) {
  const item = props.item as ExerciseComponentProps<BuildType>['item'];
  const { onAnswer, result, disabled, revealed } = props;
  const [sel, setSel] = useState<number[]>([]);
  useEffect(() => setSel([]), [item]);
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || disabled) return;
    setSel((s) => (s.includes(e.midi) ? s.filter((x) => x !== e.midi) : [...s, e.midi]));
  }, !disabled);
  const range: [number, number] = [48 + item.rootPc - (item.rootPc > 4 ? 12 : 0), 48 + item.rootPc + 24];
  const highlight = useMemo(() => {
    const h: Record<number, KeyRole> = {};
    if (item.givenRoot !== null) for (let m = range[0]; m <= range[1]; m++) if (pitchClass(m) === item.givenRoot) h[m] = 'root';
    return h;
  }, [item.givenRoot, range[0], range[1]]); // eslint-disable-line react-hooks/exhaustive-deps
  const marks = useMemo(() => {
    const m: Record<number, KeyMark> = {};
    const target = new Set(item.pitchClasses);
    if (revealed || result?.correct) for (let k = range[0]; k <= range[1]; k++) if (target.has(pitchClass(k))) m[k] = 'target';
    for (const s of sel) m[s] = result ? (target.has(pitchClass(s)) ? 'correct' : 'wrong') : 'target';
    return m;
  }, [sel, result, revealed, item.pitchClasses, range[0], range[1]]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="build-notes">
      <div className="big-symbol">{item.display}</div>
      <Keyboard range={range} marks={marks} highlight={highlight} showQwerty height={150} />
      <div className="row wrap">
        <span className="muted small">Selected: {[...new Set(sel.map((m) => midiToNote(m).replace(/-?\d+$/, '')))].join(' ') || '—'}</span>
        {!disabled && (
          <>
            <button type="button" className="btn ghost" onClick={() => setSel([])}>Clear</button>
            <button type="button" className="btn primary" disabled={sel.length === 0} onClick={() => onAnswer(sel as never)}>Check</button>
          </>
        )}
      </div>
    </div>
  );
}

/** build-interval: the root is marked; play the second note. */
export function BuildInterval({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'build-interval'>) {
  const [last, setLast] = useState<number | null>(null);
  useEffect(() => setLast(null), [item]);
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || disabled || e.midi === item.root) return;
    setLast(e.midi);
    onAnswer(e.midi);
  }, !disabled);
  const lo = Math.min(item.root, item.target);
  const hi = Math.max(item.root, item.target);
  const range: [number, number] = [Math.min(lo - (lo % 12), 48), Math.max(hi + (11 - (hi % 12)), 83)];
  const marks: Record<number, KeyMark> = {};
  if (revealed || result?.correct) marks[item.target] = 'target';
  if (last !== null && result) marks[last] = result.correct ? 'correct' : 'wrong';
  return (
    <div className="build-interval">
      <div className="big-symbol">{midiToNote(item.root)} → ?</div>
      <Keyboard range={range} highlight={{ [item.root]: 'root' }} marks={marks} showQwerty height={150} />
    </div>
  );
}

export default BuildNotes;
