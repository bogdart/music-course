import { isNoteName, midiToNote, noteToMidi, pitchClass, pitchClassName, cleanNoteName } from '../theory/notes.js';
import { pcToDegree } from '../theory/keys.js';
import type { ExerciseDefinition } from './types.js';
import { melodic } from './util.js';

function sets(notes: string[] | string[][] | undefined, alt?: string[][]): string[][] {
  if (alt?.length) return alt;
  if (!notes) return [];
  if (notes.length > 0 && Array.isArray(notes[0])) return notes as string[][];
  return [notes as string[]];
}

export const playNotes: ExerciseDefinition<'play-notes'> = {
  type: 'play-notes',
  implemented: true,
  naturalCount(block) {
    return sets(block.spec.notes, block.spec.sets).length;
  },
  generate(block, _rng, ctx) {
    const s = block.spec;
    const all = sets(s.notes, s.sets);
    if (all.length === 0) throw new Error('play-notes: needs "notes" or "sets"');
    const notes = all[ctx.index % all.length]!.map(cleanNoteName);
    if (notes.length === 0) throw new Error('play-notes: notes must not be empty');
    const hasOctaves = notes.every((n) => isNoteName(n, true));
    const octave = s.octave ?? (hasOctaves ? 'exact' : 'any');
    const withOct = notes.map((n) => (isNoteName(n, true) ? n : n + '4'));
    const midis = withOct.map(noteToMidi);
    const display = s.prompt ?? 'names';
    const labels = display === 'degrees' && s.key
      ? notes.map((n) => pcToDegree(n, s.key!))
      : notes.map((n) => (octave === 'any' ? pitchClassName(n) : n));
    const ordered = s.ordered ?? true;
    const clef = s.clef ?? (Math.min(...midis) < 55 ? 'bass' : 'treble');
    const what = display === 'staff' ? 'the notes on the staff' : labels.join(' ');
    return {
      type: 'play-notes',
      prompt: `Play ${what}${ordered ? ' in order' : ''}${octave === 'any' ? ' (any octave)' : ''}.`,
      midis, pitchClasses: midis.map(pitchClass), ordered, octave, display, labels,
      seq: withOct.map((n) => `${n}:q`).join(' '), clef,
      ...(s.key ? { key: s.key } : {}),
      solution: withOct.join(' '),
      solutionAudio: melodic(midis, { beats: 1 }),
    };
  },
  evaluate(item, answer) {
    const played = Array.isArray(answer) ? answer.filter((n) => typeof n === 'number') : [];
    const norm = (m: number) => (item.octave === 'any' ? pitchClass(m) : m);
    const target = item.midis.map(norm);
    const got = played.map(norm);
    let score: number;
    let correct: boolean;
    if (item.ordered) {
      let hits = 0;
      for (let i = 0; i < target.length; i++) if (got[i] === target[i]) hits++;
      score = hits / Math.max(target.length, got.length || 1);
      correct = hits === target.length && got.length === target.length;
    } else {
      const t = new Set(target);
      const g = new Set(got);
      const inter = [...g].filter((x) => t.has(x)).length;
      const union = new Set([...t, ...g]).size;
      score = union ? inter / union : 0;
      correct = inter === t.size && g.size === t.size;
    }
    const wrong = played.filter((m) => !target.includes(norm(m))).map((m) => midiToNote(m));
    return {
      correct, score: correct ? 1 : Math.round(score * 100) / 100,
      feedback: correct ? 'Well played!' : wrong.length ? `Some notes were off (${wrong.join(', ')}). Target: ${item.solution}.` : `Check the ${item.ordered ? 'order' : 'notes'} — target: ${item.solution}.`,
      expected: item.solution,
      details: { played: played.map((m) => midiToNote(m)) },
    };
  },
};
