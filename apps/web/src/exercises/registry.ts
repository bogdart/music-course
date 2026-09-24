/**
 * Exercise UI registry.
 *
 * To add a UI for an exercise type:
 *   1. implement generate/evaluate in packages/core (exercises/<type>.ts, registered in core's registry);
 *   2. create apps/web/src/exercises/<Type>.tsx exporting a component typed
 *      `(props: ExerciseComponentProps<'<type>'>) => JSX.Element` (see ./types.ts);
 *   3. add one line below.
 * The component renders ONE generated item and calls `props.onAnswer(answer)`; <ExerciseShell> does the
 * rest (evaluation, retries, hints, reveal, replay of item.reference/item.audio, recording attempts).
 * Types without an entry here (or not implemented in core) render the "coming soon" card.
 */
import { lazy, type ComponentType } from 'react';
import { isImplemented, type ExerciseType } from '@music/core';
import ChoiceExercise from './ChoiceExercise';
import PlayNotes from './PlayNotes';
import Quiz from './Quiz';
import QuizInput from './QuizInput';
import ReadNote from './ReadNote';
import EarChordRoot from './EarChordRoot';
import EarRhythm from './EarRhythm';
import EarTempo from './EarTempo';
import PlayChord from './PlayChord';
import PerformExercise from './PerformExercise';
import BuildNotes, { BuildInterval } from './BuildNotes';
import KeySignature from './KeySignature';
import Listen from './Listen';
import Reflect from './Reflect';
import { EarBass, EarMelody, EarProgression, RomanAnalysis } from './SlotExercises';
import type { ExerciseComponentProps } from './types';

export type ExerciseComponent<T extends ExerciseType> = ComponentType<ExerciseComponentProps<T>>;

export const exerciseComponents: { [T in ExerciseType]?: ExerciseComponent<T> } = {
  'daw-task': lazy(() => import('./DawTask')),
  'ear-note': ChoiceExercise,
  'ear-octave': ChoiceExercise,
  'ear-interval': ChoiceExercise,
  'ear-chord': ChoiceExercise,
  'ear-chord-root': EarChordRoot,
  'ear-scale': ChoiceExercise,
  'ear-progression': EarProgression,
  'ear-melody': EarMelody,
  'ear-rhythm': EarRhythm,
  'ear-bass': EarBass,
  'ear-tempo': EarTempo,
  'ear-meter': ChoiceExercise,
  'play-notes': PlayNotes,
  'play-scale': PerformExercise,
  'play-chord': PlayChord,
  'play-melody': PerformExercise,
  'rhythm-tap': PerformExercise,
  'build-chord': BuildNotes,
  'build-scale': BuildNotes,
  'build-interval': BuildInterval,
  quiz: Quiz,
  'quiz-input': QuizInput,
  'read-note': ReadNote,
  'read-rhythm': PerformExercise,
  'key-signature': KeySignature,
  'roman-analysis': RomanAnalysis,
  listen: Listen,
  reflect: Reflect,
};

export function getExerciseComponent<T extends ExerciseType>(type: T): ExerciseComponent<T> | null {
  if (!isImplemented(type)) return null;
  return (exerciseComponents[type] as ExerciseComponent<T> | undefined) ?? null;
}

/** Exercise types that take their input from a keyboard (shell shows the input hint). */
export const KEYBOARD_TYPES = new Set<string>([
  'play-notes', 'read-note', 'play-scale', 'play-chord', 'play-melody', 'build-chord', 'build-scale', 'build-interval', 'ear-chord-root',
  'ear-melody', 'ear-bass',
]);
