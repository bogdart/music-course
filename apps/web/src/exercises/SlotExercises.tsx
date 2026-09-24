import { pcToDegree } from '@music/core';
import { PlayBack } from './PlayBack';
import { SlotAnswer } from './SlotAnswer';
import type { ExerciseComponentProps } from './types';

const solutionShown = (p: { revealed: boolean; result: { correct: boolean } | null }) => p.revealed || !!p.result?.correct;

/** ear-progression: write the numerals of the chords heard. */
export function EarProgression(props: ExerciseComponentProps<'ear-progression'>) {
  const { item } = props;
  return (
    <SlotAnswer
      count={item.slots.length} palette={item.palette} onSubmit={props.onAnswer} disabled={props.disabled}
      resultSlots={props.result?.details?.slots} solution={item.slots} showSolution={solutionShown(props)} resetKey={item}
      {...(solutionShown(props) ? { captions: item.symbols } : {})}
    />
  );
}

/** roman-analysis: numerals for written (or heard) chords. */
export function RomanAnalysis(props: ExerciseComponentProps<'roman-analysis'>) {
  const { item } = props;
  const showSymbols = item.promptKind === 'symbols' || solutionShown(props);
  return (
    <SlotAnswer
      count={item.slots.length} palette={item.palette} onSubmit={props.onAnswer} disabled={props.disabled}
      resultSlots={props.result?.details?.slots} solution={item.slots} showSolution={solutionShown(props)} resetKey={item}
      {...(showSymbols ? { captions: item.chords } : {})}
    />
  );
}

/** ear-melody: play the melody back, or write its degrees (degrees can also be entered by playing). */
export function EarMelody(props: ExerciseComponentProps<'ear-melody'>) {
  const { item } = props;
  if (item.answerKind === 'play') {
    return (
      <PlayBack targets={item.midis} onAnswer={props.onAnswer} hits={props.result?.details?.slots} disabled={props.disabled}
        revealed={solutionShown(props)} keyName={item.key} resetKey={item} />
    );
  }
  return (
    <SlotAnswer
      count={item.degrees.length} palette={item.palette ?? []} onSubmit={props.onAnswer} disabled={props.disabled}
      resultSlots={props.result?.details?.slots} solution={item.degrees} showSolution={solutionShown(props)} resetKey={item}
      fromMidi={(m) => pcToDegree(m, item.key, item.mode)}
      {...(solutionShown(props) ? { captions: item.names } : {})}
    />
  );
}

/** ear-bass: play the bass notes, or name them as degrees. */
export function EarBass(props: ExerciseComponentProps<'ear-bass'>) {
  const { item } = props;
  if (item.answerKind === 'play') {
    return (
      <PlayBack targets={item.midis} onAnswer={props.onAnswer} hits={props.result?.details?.slots} disabled={props.disabled}
        revealed={solutionShown(props)} keyName={item.key} resetKey={item} />
    );
  }
  return (
    <SlotAnswer
      count={item.midis.length} palette={item.palette ?? []} onSubmit={props.onAnswer} disabled={props.disabled}
      resultSlots={props.result?.details?.slots} solution={item.slots} showSolution={solutionShown(props)} resetKey={item}
      fromMidi={(m) => pcToDegree(m, item.key, item.mode)}
      {...(solutionShown(props) && item.numerals.length ? { captions: item.numerals } : {})}
    />
  );
}
