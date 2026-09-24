import { useEffect, useState } from 'react';
import type { ExerciseType } from '@music/core';
import { pcToDegree } from '@music/core';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { useExerciseNoteInput } from './focus';
import { ChoiceButtons } from './ChoiceButtons';
import type { ExerciseComponentProps } from './types';

type ChoiceType = 'ear-note' | 'ear-octave' | 'ear-interval' | 'ear-chord' | 'ear-scale' | 'ear-meter' | 'ear-chord-root' | 'key-signature';

function itemMidis(item: ExerciseComponentProps<ChoiceType>['item']): number[] {
  if ('midis' in item && Array.isArray(item.midis)) return item.midis;
  if ('midi' in item && typeof item.midi === 'number') return [item.midi];
  return [];
}

/**
 * Generic multiple-choice exercise (ear-note, ear-octave, ear-interval, ear-chord, ear-scale, ear-meter, ear-chord-root
 * "name", key-signature).
 * For ear-note with degree answers the learner may also answer by playing the note on any keyboard.
 */
export function ChoiceExercise<T extends ChoiceType>(props: ExerciseComponentProps<T>) {
  const { item, onAnswer, result, revealed, disabled } = props;
  const [wrong, setWrong] = useState<string[]>([]);
  const [last, setLast] = useState<string | null>(null);
  useEffect(() => {
    setWrong([]);
    setLast(null);
  }, [item]);
  useEffect(() => {
    if (result && !result.correct && last) setWrong((w) => (w.includes(last) ? w : [...w, last]));
  }, [result, last]);

  const choose = (v: string) => {
    setLast(v);
    (onAnswer as (a: string) => void)(v);
  };

  const earNote = item.type === 'ear-note' ? (item as ExerciseComponentProps<'ear-note'>['item']) : null;
  useExerciseNoteInput((e) => {
    if (!earNote || e.type !== 'on' || disabled) return;
    const value = earNote.answerKind === 'degree' ? pcToDegree(e.midi, earNote.key, earNote.mode) : null;
    if (value && item.choices?.some((c) => c.value === value)) choose(value);
  }, !!earNote && !disabled);

  const answer = (item as { answer?: string }).answer ?? (item as { rootName?: string }).rootName ?? null;
  const showSolution = disabled && (revealed || result?.correct);
  const midis = itemMidis(item);
  const lo = Math.min(...midis, 60);
  const hi = Math.max(...midis, 72);

  return (
    <div className="choice-exercise">
      <ChoiceButtons choices={item.choices ?? []} onChoose={choose} wrong={wrong} correct={showSolution ? answer : null} disabled={disabled} />
      {earNote && !disabled && <p className="muted small">Tip: you can also answer by playing the note on your keyboard.</p>}
      {showSolution && midis.length > 0 && (
        <div className="solution-keys">
          <Keyboard range={[lo - (lo % 12), hi + (11 - (hi % 12))]} highlight={midis} height={110} interactive={false} showHeld={false} />
        </div>
      )}
    </div>
  );
}

export default ChoiceExercise as <T extends ExerciseType>(p: ExerciseComponentProps<T>) => JSX.Element;
