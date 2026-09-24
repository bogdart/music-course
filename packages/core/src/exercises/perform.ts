import { PPQ, parseTimeSig, type NoteEvent, type Snippet, type SnippetTrack } from '../model.js';
import type { PerfTarget } from '../performance.js';
import { applySwing, parseSeq, parseSeqDetailed, snippetLength } from '../seq/seq.js';
import { midiToNote, noteToMidi, pitchClass, pitchClassName } from '../theory/notes.js';
import { parseKey } from '../theory/keys.js';
import { resolveScaleId, SCALE_NAMES, scaleMidi, scaleNotes } from '../theory/scales.js';
import type { ExerciseDefinition } from './types.js';
import { evaluatePerformance, perfSpec } from './perf-util.js';
import { randomRhythm, rhythmLength, rhythmSnippet, rhythmTargets } from './rhythm-gen.js';

const ROOTS = ['C', 'G', 'D', 'F', 'A', 'E', 'Bb'];

function clefFor(midis: number[]): 'treble' | 'bass' {
  if (!midis.length) return 'treble';
  return midis.reduce((a, b) => a + b, 0) / midis.length < 57 ? 'bass' : 'treble';
}

/** Play a scale: pitches in order (octave-lenient); with `tempo` also in time with a count-in and metronome. */
export const playScale: ExerciseDefinition<'play-scale'> = {
  type: 'play-scale',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const scale = resolveScaleId(s.scale);
    const root = !s.root || s.root === 'random' ? rng.pick(ROOTS) : pitchClassName(s.root);
    const octaves = s.octaves ?? 1;
    const direction = s.direction ?? 'asc-desc';
    const hands = s.hands ?? 'right';
    const pc = pitchClass(root);
    const rightRoot = noteToMidi(`${root}4`) - (pc > 7 ? 12 : 0);
    const leftRoot = rightRoot - 12;
    const right = scaleMidi(rightRoot, scale, octaves, direction);
    const left = scaleMidi(leftRoot - (octaves > 1 ? 12 : 0), scale, octaves, direction);
    const lines = hands === 'both' ? [right, left] : hands === 'left' ? [left] : [right];
    const bpm = s.tempo ?? 60;
    const targets: PerfTarget[] = [];
    lines.forEach((line, v) => line.forEach((m, i) => targets.push({ midi: m, startTick: i * PPQ, durationTicks: PPQ, voice: v })));
    const main = lines[0]!;
    const k = (() => {
      try {
        return parseKey(root, scale === 'natural-minor' || scale === 'harmonic-minor' || scale === 'melodic-minor' ? 'minor' : 'major');
      } catch {
        return null;
      }
    })();
    const flats = k?.prefersFlats ?? false;
    const spelled = scaleNotes(root, scale);
    const seq = main.map((m, i) => {
      const name = spelled.find((n) => pitchClass(n) === pitchClass(m)) ?? midiToNote(m, { flats }).replace(/-?\d+$/, '');
      void i;
      return `${name}${Math.floor(m / 12) - 1 + (name.startsWith('Cb') ? 1 : name.startsWith('B#') ? -1 : 0)}:q`;
    }).join(' ');
    const timed = s.tempo !== undefined;
    const events: NoteEvent[] = targets.map((t) => ({ midi: t.midi!, startTick: t.startTick, durationTicks: t.durationTicks, velocity: 0.8 }));
    const handText = hands === 'both' ? 'both hands' : `${hands} hand`;
    return {
      type: 'play-scale', root, scale, midis: main,
      prompt: `Play ${root} ${SCALE_NAMES[scale].toLowerCase()} ${direction === 'asc-desc' ? 'up and down' : direction === 'asc' ? 'ascending' : 'descending'}, ${octaves} octave${octaves > 1 ? 's' : ''}, ${handText}${timed ? `, one note per beat at ${bpm} BPM` : ''}.`,
      performance: perfSpec({ timed, targets, bpm, timeSig: { num: 4, den: 4 }, metronome: s.metronome ?? true, pitchMode: 'pitch-class' }),
      seq, clef: clefFor(main), timeSigStr: '4/4', showStaff: true, showKeyboard: true,
      solution: spelled.join(' ') + (direction === 'asc-desc' ? ' (and back down)' : ''),
      solutionAudio: { bpm, timeSig: { num: 4, den: 4 }, tracks: [{ instrument: 'piano', events }] },
    };
  },
  evaluate(item, answer) {
    return evaluatePerformance(item.performance, answer, item.solution);
  },
};

/**
 * Play a melody (plus optional extra voices in `tracks`, e.g. a left-hand part) with count-in, metronome and
 * optional backing; pitch and timing are scored. `swing` delays off-beat 8ths (targets and playback).
 */
export const playMelody: ExerciseDefinition<'play-melody'> = {
  type: 'play-melody',
  implemented: true,
  generate(block) {
    const s = block.spec;
    const timeSigStr = s.timeSig ?? '4/4';
    const ts = parseTimeSig(timeSigStr);
    const bpm = s.bpm ?? 80;
    const swing = s.swing ?? 0;
    const instrument = s.instrument ?? 'piano';
    const voices = [{ instrument, seq: s.seq }, ...(s.tracks ?? []).filter((t) => t.instrument !== 'drums')];
    const drumTracks = (s.tracks ?? []).filter((t) => t.instrument === 'drums');
    const targets: PerfTarget[] = [];
    const demo: SnippetTrack[] = [];
    voices.forEach((v, vi) => {
      const evs = applySwing(parseSeq(v.seq, { timeSig: ts }), swing);
      evs.forEach((e) => targets.push({ midi: e.midi, startTick: e.startTick, durationTicks: e.durationTicks, voice: vi }));
      demo.push({ instrument: v.instrument, events: evs });
    });
    if (targets.length === 0) throw new Error('play-melody: seq has no notes');
    const backingTracks: SnippetTrack[] = [
      ...(s.backing ? [{ instrument: s.backing.instrument, events: applySwing(parseSeq(s.backing.seq, { timeSig: ts }), swing), volume: 0.7 }] : []),
      ...drumTracks.map((t) => ({ instrument: t.instrument, events: applySwing(parseSeq(t.seq, { timeSig: ts }), swing), volume: 0.7 })),
    ];
    const backing: Snippet | undefined = backingTracks.length ? { bpm, timeSig: ts, tracks: backingTracks } : undefined;
    const mainMidis = parseSeq(s.seq, { timeSig: ts }).map((e) => e.midi);
    const bar = (PPQ * 4 * ts.num) / ts.den;
    const end = Math.max(...targets.map((t) => t.startTick + t.durationTicks), backing ? snippetLength(backing) : 0);
    const names = parseSeqDetailed(s.seq, { timeSig: ts }).items.filter((i) => i.kind !== 'rest').map((i) => (i.names.length > 1 ? `[${i.names.join(' ')}]` : i.names[0]));
    return {
      type: 'play-melody',
      prompt: `Play the ${voices.length > 1 ? 'parts' : 'melody'} in time${s.backing ? ' with the backing' : ''} (${bpm} BPM${swing ? ', swung' : ''}).`,
      performance: perfSpec({ targets, bpm, timeSig: ts, countIn: s.countIn ?? 1, metronome: true, pitchMode: 'exact', lengthTicks: Math.ceil(end / bar) * bar }),
      seq: s.seq, clef: clefFor(mainMidis), ...(s.key ? { keySig: s.key } : {}), timeSigStr,
      showStaff: s.showStaff ?? true, showKeyboard: s.showKeyboard ?? true,
      ...(backing ? { backing } : {}),
      solution: names.join(' '),
      solutionAudio: { bpm, timeSig: ts, tracks: [...demo, ...backingTracks] },
    };
  },
  evaluate(item, answer) {
    return evaluatePerformance(item.performance, answer, item.solution);
  },
};

/** Tap a written rhythm in time (space bar / any key / pad / MIDI), `loops` times through. */
export const rhythmTap: ExerciseDefinition<'rhythm-tap'> = {
  type: 'rhythm-tap',
  implemented: true,
  generate(block) {
    const s = block.spec;
    const timeSigStr = s.timeSig ?? '4/4';
    const ts = parseTimeSig(timeSigStr);
    const bpm = s.bpm ?? 80;
    const loops = s.loops ?? 1;
    const targets = rhythmTargets(s.seq, ts, loops);
    if (targets.length === 0) throw new Error('rhythm-tap: seq has no hits');
    const len = rhythmLength(s.seq, ts);
    return {
      type: 'rhythm-tap',
      prompt: `Tap the rhythm${loops > 1 ? ` ${loops} times through` : ''} after the count-in (${bpm} BPM).`,
      performance: perfSpec({ targets, bpm, timeSig: ts, countIn: s.countIn ?? 1, pitchMode: 'none', input: 'taps', lengthTicks: len * loops }),
      seq: s.seq, clef: 'percussion', timeSigStr, showStaff: s.showNotation ?? true, showKeyboard: false,
      solution: s.seq,
      solutionAudio: rhythmSnippet(s.seq, ts, bpm, { loops }),
    };
  },
  evaluate(item, answer) {
    return evaluatePerformance(item.performance, answer, item.solution);
  },
};

/** Read a (random) written rhythm and tap it in time. */
export const readRhythm: ExerciseDefinition<'read-rhythm'> = {
  type: 'read-rhythm',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const timeSigStr = s.timeSig ?? '4/4';
    const ts = parseTimeSig(timeSigStr);
    const bpm = s.bpm ?? 70;
    const seq = randomRhythm(rng, { timeSig: ts, bars: s.bars ?? 1, subdivision: s.subdivision ?? '8', rests: s.rests ?? true });
    const targets = rhythmTargets(seq, ts);
    return {
      type: 'read-rhythm',
      prompt: `Read the rhythm and tap it after the count-in (${bpm} BPM).`,
      performance: perfSpec({ targets, bpm, timeSig: ts, countIn: s.countIn ?? 1, pitchMode: 'none', input: 'taps', lengthTicks: rhythmLength(seq, ts) }),
      seq, clef: 'percussion', timeSigStr, showStaff: true, showKeyboard: false,
      solution: seq,
      solutionAudio: rhythmSnippet(seq, ts, bpm),
    };
  },
  evaluate(item, answer) {
    return evaluatePerformance(item.performance, answer, item.solution);
  },
};
