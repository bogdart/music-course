import { Staff } from '../components/Staff/Staff';
import { ChoiceExercise } from './ChoiceExercise';
import type { ExerciseComponentProps } from './types';

/** key-signature: signature on a staff (or a key name) → choose the key / the number of sharps or flats. */
export function KeySignature(props: ExerciseComponentProps<'key-signature'>) {
  const { item } = props;
  const showStaff = item.promptKind === 'staff' || props.revealed || !!props.result?.correct;
  return (
    <div className="key-signature">
      {showStaff && (
        <div className="read-note-staff">
          <Staff seq="" clef="treble" keySig={item.mode === 'minor' ? `${item.key}m` : item.key} showTimeSig={false} />
        </div>
      )}
      <ChoiceExercise {...props} />
    </div>
  );
}

export default KeySignature;
