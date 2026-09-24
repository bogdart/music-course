import type { ExerciseComponentProps } from './types';
import { Perform } from './perf/Perform';

type PerfType = 'play-scale' | 'play-melody' | 'rhythm-tap' | 'read-rhythm';

/** play-scale, play-melody, rhythm-tap and read-rhythm: notation + timed (or untimed) capture, scored in core. */
export function PerformExercise<T extends PerfType>({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<T>) {
  const it = item as ExerciseComponentProps<PerfType>['item'];
  // reading exercises get no "listen first" demo (the solution audio plays after answering)
  const demo = it.type === 'read-rhythm' ? undefined : it.solutionAudio;
  return (
    <Perform
      spec={it.performance}
      onAnswer={onAnswer as (a: { notes: { midi: number; time: number }[] }) => void}
      result={result}
      disabled={disabled}
      revealed={revealed}
      seq={it.seq}
      clef={it.clef}
      keySig={it.keySig}
      timeSigStr={it.timeSigStr}
      showStaff={it.showStaff}
      showKeyboard={it.showKeyboard}
      backing={it.backing}
      demo={demo}
      startLabel={it.performance.input === 'taps' ? 'Start tapping' : it.performance.timed ? 'Start (count-in)' : 'Ready'}
    />
  );
}

export default PerformExercise;
