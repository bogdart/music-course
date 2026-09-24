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
import type { ComponentType } from 'react';
import { isImplemented, type ExerciseType } from '@music/core';
import ChoiceExercise from './ChoiceExercise';
import PlayNotes from './PlayNotes';
import Quiz from './Quiz';
import QuizInput from './QuizInput';
import ReadNote from './ReadNote';
import type { ExerciseComponentProps } from './types';

export type ExerciseComponent<T extends ExerciseType> = ComponentType<ExerciseComponentProps<T>>;

export const exerciseComponents: { [T in ExerciseType]?: ExerciseComponent<T> } = {
  'ear-note': ChoiceExercise,
  'ear-octave': ChoiceExercise,
  'ear-interval': ChoiceExercise,
  'ear-chord': ChoiceExercise,
  'play-notes': PlayNotes,
  quiz: Quiz,
  'quiz-input': QuizInput,
  'read-note': ReadNote,
};

export function getExerciseComponent<T extends ExerciseType>(type: T): ExerciseComponent<T> | null {
  if (!isImplemented(type)) return null;
  return (exerciseComponents[type] as ExerciseComponent<T> | undefined) ?? null;
}

/** Exercise types that take their input from a keyboard (shell shows the input hint). */
export const KEYBOARD_TYPES = new Set<string>(['play-notes', 'read-note']);
