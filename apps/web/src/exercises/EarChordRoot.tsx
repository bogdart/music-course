import { useState } from 'react';
import { Keyboard, type KeyMark } from '../components/Keyboard/Keyboard';
import { useExerciseNoteInput } from './focus';
import { ChoiceExercise } from './ChoiceExercise';
import type { ExerciseComponentProps } from './types';
import { rangeAround } from './util';

/** ear-chord-root: name the root (choices) or play it on any keyboard, any octave. */
export function EarChordRoot(props: ExerciseComponentProps<'ear-chord-root'>) {
  const { item, onAnswer, disabled, revealed, result } = props;
  const [last, setLast] = useState<number | null>(null);
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || disabled) return;
    setLast(e.midi);
    onAnswer(e.midi);
  }, item.answerKind === 'play' && !disabled);
  if (item.answerKind === 'name') return <ChoiceExercise {...(props as unknown as ExerciseComponentProps<"ear-chord-root">)} />;
  const marks: Record<number, KeyMark> = {};
  const done = revealed || result?.correct;
  if (done) item.midis.forEach((m) => (marks[m] = 'target'));
  if (last !== null && result) marks[last] = result.correct ? 'correct' : 'wrong';
  return (
    <div className="ear-chord-root">
      <p className="muted small">Listen for the note the chord is built on — hum it, then find it. Any octave counts.</p>
      <Keyboard range={rangeAround(item.midis, 48, 83)} marks={marks} showQwerty height={150} />
    </div>
  );
}

export default EarChordRoot;
