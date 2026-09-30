import type { KeyMark } from '../components/Keyboard/Keyboard';
import { ChoiceExercise } from './ChoiceExercise';
import { FindNote } from './FindNote';
import type { ExerciseComponentProps } from './types';
import { rangeAround } from './util';

/** ear-chord-root: name the root (choices) or find it on any keyboard (try keys, then Check), any octave. */
export function EarChordRoot(props: ExerciseComponentProps<'ear-chord-root'>) {
  const { item, onAnswer, disabled, revealed, result } = props;
  if (item.answerKind === 'name') return <ChoiceExercise {...(props as unknown as ExerciseComponentProps<"ear-chord-root">)} />;
  const marks: Record<number, KeyMark> = {};
  const done = revealed || result?.correct;
  if (done) item.midis.forEach((m) => (marks[m] = 'target'));
  return (
    <div className="ear-chord-root">
      <FindNote
        onAnswer={(m) => onAnswer(m)}
        disabled={!!disabled}
        range={rangeAround(item.midis, 48, 83)}
        marks={marks}
        reset={item}
        hint="Find the note the chord is built on: try keys until one fits as the chord's foundation, then press Check. Any octave counts."
      />
    </div>
  );
}

export default EarChordRoot;
