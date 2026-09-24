import type { Answer, EvalResult, ExerciseBlockOf, ExerciseType, Item } from '@music/core';

/**
 * Props every exercise component receives from <ExerciseShell>. The shell owns generation, evaluation,
 * attempts, hints, reveal, audio replay and progress recording; the component only renders the prompt/input
 * for ONE item and calls `onAnswer` with the type's answer payload (see AnswerMap in @music/core).
 */
export interface ExerciseComponentProps<T extends ExerciseType = ExerciseType> {
  item: Item<T>;
  block: ExerciseBlockOf<T>;
  /** Submit an answer; the shell evaluates it with @music/core `evaluate` and updates `result` */
  onAnswer(answer: Answer<T>): void;
  /** Latest evaluation for this item (null before the first answer) */
  result: EvalResult | null;
  /** Number of answers submitted for this item */
  attempts: number;
  /** The learner pressed "Reveal" — show the solution */
  revealed: boolean;
  /** No more answers accepted (answered correctly or revealed) */
  disabled: boolean;
}
