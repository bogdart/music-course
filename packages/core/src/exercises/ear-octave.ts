import { cleanNoteName, isNoteName, midiToNote, noteToMidi, pitchClass, pitchClassName, octaveOf } from '../theory/notes.js';
import type { EarOctaveItem, ExerciseDefinition, SpecMap } from './types.js';
import { harmonic, melodic } from './util.js';
import type { Rng } from '../rng.js';
import type { InstrumentId } from '../model.js';

export const earOctave: ExerciseDefinition<'ear-octave'> = {
  type: 'ear-octave',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const notes = s.notes.map((n) => pitchClassName(cleanNoteName(n)));
    const octaves = s.octaves.length ? s.octaves : [3, 4, 5];
    const instrument = s.instrument ?? 'piano';
    if (s.mode === 'which-octave') {
      const note = rng.pick(notes);
      const octave = rng.pick(octaves);
      const midi = noteToMidi(`${note}${octave}`);
      return {
        type: 'ear-octave', mode: 'which-octave', midis: [midi], answer: String(octave),
        prompt: `Middle C (C4) plays first. Which octave is the ${note}?`,
        reference: melodic([60], { instrument, beats: 2 }),
        audio: melodic([midi], { instrument, beats: 2 }),
        choices: [...octaves].sort((a, b) => a - b).map((o) => ({ value: String(o), label: `${note}${o}` })),
        solution: `${note}${octave}`,
      };
    }
    if (s.mode === 'find') {
      // hear one note, play the same note name anywhere on the keyboard: octave equivalence in action
      const note = rng.pick(notes);
      const octave = rng.pick(octaves);
      const midi = noteToMidi(`${note}${octave}`);
      const home = noteToMidi(`${note}4`);
      const walk: number[] = [midi];
      while (walk[walk.length - 1]! !== home) walk.push(walk[walk.length - 1]! + (home > midi ? 12 : -12));
      return {
        type: 'ear-octave', mode: 'find', midis: [midi], answer: pitchClassName(note),
        prompt: 'Find this note on your keyboard — in any octave. (It may be far lower or higher than your keys.)',
        audio: melodic([midi], { instrument, beats: 2 }),
        solution: `${note} (it was ${note}${octave})`,
        compare: [
          ...(walk.length > 1 ? [{ label: `Walk it to octave 4: ${walk.map((m) => midiToNote(m)).join(' → ')}`, audio: melodic(walk, { instrument, beats: 1 }) }] : []),
          { label: `${note}${octave} and ${note}4 together`, audio: harmonic([Math.min(midi, home), Math.max(midi, home)].filter((m, i, a) => a.indexOf(m) === i), { instrument, beats: 2.5 }) },
        ],
      };
    }
    if (s.mode === 'seek') {
      // hear a note, find the exact key: every wrong key says "higher" or "lower" (same register, no octave jumps)
      const pool = [...new Set(notes.flatMap((n) => octaves.map((o) => noteToMidi(`${n}${o}`))))].sort((a, b) => a - b);
      const midi = rng.pick(pool);
      const lo = pool[0]!;
      const hi = pool[pool.length - 1]!;
      return {
        // a middle-first search needs about log2(n) + 1 keys: finding it within that counts as correct
        type: 'ear-octave', mode: 'seek', midis: [midi], answer: String(midi), range: [lo, hi], limit: Math.ceil(Math.log2(pool.length)) + 1,
        prompt: `Find this exact note between ${midiToNote(lo)} and ${midiToNote(hi)} — within ${Math.ceil(Math.log2(pool.length)) + 1} tries. Each key you try tells you to go higher or lower.`,
        audio: melodic([midi], { instrument, beats: 2 }),
        solution: midiToNote(midi),
        compare: [{ label: 'The note again', audio: melodic([midi], { instrument, beats: 2 }) }],
      };
    }
    if (s.mode === 'same-pitch') {
      // two notes in the same register: exactly the same note twice, or a different one (foils in semitones, up or down)
      const pool = notes.flatMap((n) => octaves.map((o) => noteToMidi(`${n}${o}`)));
      const a = rng.pick(pool);
      const same = rng.chance(0.5);
      const dist = rng.pick(s.foils?.length ? s.foils : [2, 4, 7]);
      const b = same ? a : a + (rng.chance(0.5) ? dist : -dist);
      return {
        type: 'ear-octave', mode: 'same-pitch', midis: [a, b], answer: same ? 'same' : 'different',
        prompt: 'Two notes: exactly the same note twice, or two different notes?',
        audio: melodic([a, b], { instrument, beats: 1.5 }),
        choices: [{ value: 'same', label: 'The same note' }, { value: 'different', label: 'Different notes' }],
        solution: `${same ? 'The same note' : 'Different'} — ${midiToNote(a)} then ${midiToNote(b)}`,
        compare: [
          { label: `Only the first note, twice: ${midiToNote(a)} ${midiToNote(a)}`, audio: melodic([a, a], { instrument, beats: 1.5 }) },
          ...(same ? [] : [{ label: 'Both together (two different notes rub)', audio: harmonic([Math.min(a, b), Math.max(a, b)], { instrument, beats: 2.5 }) }]),
        ],
      };
    }
    if (s.mode === 'higher-or-lower') {
      const pool = [...new Set(notes.flatMap((n) => octaves.map((o) => noteToMidi(`${n}${o}`))))];
      if (pool.length < 2) throw new Error('ear-octave higher-or-lower needs at least two distinct pitches');
      const a = rng.pick(pool);
      const b = rng.pick(pool.filter((m) => m !== a));
      const answer = b > a ? 'higher' : 'lower';
      return {
        type: 'ear-octave', mode: 'higher-or-lower', midis: [a, b], answer,
        prompt: 'Is the second note higher or lower than the first?',
        audio: melodic([a, b], { instrument, beats: 1.5 }),
        choices: [{ value: 'lower', label: 'Lower' }, { value: 'higher', label: 'Higher' }],
        solution: `${answer === 'higher' ? 'Higher' : 'Lower'} — ${midiToNote(a)} then ${midiToNote(b)}`,
        compare: [{ label: 'Slowly, with a pause', audio: melodic([a, a, b], { instrument, beats: 2 }) }],
      };
    }
    return comparePair(s, notes, octaves, instrument, rng);
  },
  evaluate(item, answer) {
    if (item.mode === 'seek') {
      // the answer is the search: the keys tried, in order (a single number = one key)
      const tries = (Array.isArray(answer) ? answer : [answer]).map(Number).filter(Number.isFinite);
      const target = item.midis[0]!;
      const last = tries[tries.length - 1];
      const found = last === target;
      const feedback = found
        ? `Found it — ${midiToNote(target)}${tries.length > 1 ? ` in ${tries.length} tries` : ' first time'}!`
        : last === undefined
          ? 'Play a key.'
          : `Not found within ${item.limit ?? tries.length} tries — ${seekHint(last, target)} Keep searching.`;
      return { correct: found, score: found ? 1 : 0, feedback, expected: item.solution };
    }
    if (item.mode === 'find') {
      const pc = typeof answer === 'number' ? answer % 12 : isNoteName(String(answer ?? '')) ? pitchClass(String(answer)) : -1;
      const correct = pc === item.midis[0]! % 12;
      return {
        correct, score: correct ? 1 : 0,
        feedback: correct ? 'Correct — same note, different octave!' : `Not quite — it was ${item.solution}.`,
        expected: item.solution,
      };
    }
    const a = String(answer ?? '').trim().toLowerCase();
    const correct = a === item.answer.toLowerCase();
    const octNote = item.mode === 'which-octave' ? octaveOf(item.midis[0]!) : undefined;
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? 'Correct!' : `Not quite — ${item.solution}.`,
      expected: item.solution,
      ...(octNote !== undefined ? { details: { octave: octNote } } : {}),
    };
  },
};

/**
 * `same-or-different` (one after the other), `together` (both at once — an octave melts into one sound) and `match`
 * (a note, then two candidates: which one is its octave?). The second note sits `gap` octaves from the first; a
 * "different" note is placed right next to that octave position, so how far apart the notes are gives nothing away and
 * only the note's "colour" decides. Foils come from `foils` (semitones) or else from the other `notes`.
 */
function comparePair(s: SpecMap['ear-octave'], notes: string[], octaves: number[], instrument: InstrumentId, rng: Rng): EarOctaveItem {
  const mode = s.mode as 'same-or-different' | 'together' | 'match';
  const gaps = s.gap?.length ? s.gap : [1, 2];
  const dirs = mode === 'same-or-different' ? [1, -1] : [1];
  const combos: { name: string; o1: number; dir: number; g: number }[] = [];
  for (const name of notes) for (const o1 of octaves) for (const g of gaps) for (const dir of dirs) {
    if (octaves.includes(o1 + dir * g)) combos.push({ name, o1, dir, g });
  }
  // octave list too narrow for the gap: go up from the lowest octave anyway
  const c = combos.length ? rng.pick(combos) : { name: rng.pick(notes), o1: Math.min(...octaves), dir: 1, g: gaps[0]! };
  const m1 = noteToMidi(`${c.name}${c.o1}`);
  const octave = m1 + c.dir * 12 * c.g;
  const pc1 = pitchClass(c.name);
  const foilPcs = s.foils?.length
    ? [...new Set(s.foils.map((f) => (pc1 + f) % 12))]
    : [...new Set(notes.map((n) => pitchClass(n)).filter((pc) => pc !== pc1))];
  const pcs = foilPcs.length ? foilPcs : [(pc1 + 6) % 12];
  const foil = (() => {
    const pc = rng.pick(pcs);
    const up = octave + ((pc - (octave % 12) + 12) % 12); // same pc at or above the octave position
    const down = up - 12;
    if (up - octave === octave - down) return rng.chance(0.5) ? up : down;
    return up - octave < octave - down ? up : down;
  })();
  const n = (m: number) => midiToNote(m);
  const bridge = c.g > 1 ? [{ label: 'Walk up the octaves', audio: melodic(c.dir > 0 ? [m1, m1 + 12, octave] : [m1, m1 - 12, octave], { instrument, beats: 1 }) }] : [];

  if (mode === 'match') {
    const octaveFirst = rng.chance(0.5);
    const [a, b] = octaveFirst ? [octave, foil] : [foil, octave];
    const d = Math.round(1.5 * 480);
    const events = [m1, a, b].map((m, i) => ({ midi: m, startTick: i === 0 ? 0 : (i + 0.5) * d, durationTicks: d, velocity: 0.8 }));
    return {
      type: 'ear-octave', mode, midis: [m1, a, b], answer: octaveFirst ? 'A' : 'B',
      prompt: 'First a note, then two more (A and B). Which one is the same note, an octave away?',
      audio: { bpm: 80, timeSig: { num: 4, den: 4 }, tracks: [{ instrument, events }] },
      choices: [{ value: 'A', label: 'A (first)' }, { value: 'B', label: 'B (second)' }],
      solution: `${octaveFirst ? 'A' : 'B'} — ${n(m1)}, then A = ${n(a)}, B = ${n(b)}`,
      compare: [
        { label: `${n(m1)} + ${n(octave)} together (octave)`, audio: harmonic([m1, octave], { instrument, beats: 2.5 }) },
        { label: `${n(m1)} + ${n(foil)} together (different)`, audio: harmonic([Math.min(m1, foil), Math.max(m1, foil)], { instrument, beats: 2.5 }) },
        ...bridge,
      ],
    };
  }

  const same = rng.chance(0.5);
  const m2 = same ? octave : foil;
  const together = mode === 'together';
  const pair = [Math.min(m1, m2), Math.max(m1, m2)];
  return {
    type: 'ear-octave', mode, midis: together ? pair : [m1, m2], answer: same ? 'same' : 'different',
    prompt: together
      ? 'Two notes at the same time. One note doubled in another octave (they melt into one sound), or two different notes?'
      : 'Two notes: are they the same note (maybe in different octaves) or different notes?',
    audio: together ? harmonic(pair, { instrument, beats: 2.5 }) : melodic([m1, m2], { instrument, beats: 1.5 }),
    choices: together
      ? [{ value: 'same', label: 'One note (octave)' }, { value: 'different', label: 'Two different notes' }]
      : [{ value: 'same', label: 'Same note' }, { value: 'different', label: 'Different notes' }],
    solution: `${same ? 'Same' : 'Different'} — ${n(m1)} ${together ? '+' : 'then'} ${n(m2)}`,
    compare: [
      ...(together ? [{ label: 'One after the other', audio: melodic([m1, m2], { instrument, beats: 1.5 }) }] : [{ label: 'Both together', audio: harmonic(pair, { instrument, beats: 2.5 }) }]),
      ...(same ? bridge : [
        { label: `The real octave: ${n(m1)} → ${n(octave)}`, audio: melodic([m1, octave], { instrument, beats: 1.5 }) },
        { label: `Octave vs this note: ${n(octave)}, ${n(m2)}`, audio: melodic([octave, m2], { instrument, beats: 1.5 }) },
      ]),
    ],
  };
}

/** Direction hint for a seek try. */
export function seekHint(tried: number, target: number): string {
  if (tried === target) return 'That is it!';
  const dir = tried < target ? 'higher ↑' : 'lower ↓';
  return tried % 12 === target % 12
    ? `${midiToNote(tried)} is the right note name in the wrong octave — go ${dir} by a whole octave.`
    : `Not ${midiToNote(tried)} — go ${dir}.`;
}
