/**
 * Ear-training ladders: the spine of the course. Each skill is an ordered list of rungs; each rung is one concrete
 * drill (an exercise block) that differs from the rung before in ONE dimension, and a two-way contrast always comes
 * before a wider choice. Lessons *unlock* rungs (```ladder blocks, see docs/EAR_LADDERS.md); the learner *masters* them
 * by practice. What a lesson or a practice session drills is the learner's current rung: the lowest unlocked rung not
 * yet mastered. Pure: no DOM, no I/O.
 */
import type { ExerciseBlock } from './exercises/types.js';
import { methodOf } from './ladder-methods.js';

export const LADDER_SKILLS = ['pitch', 'octave', 'degrees', 'intervals', 'chords', 'roots', 'progressions', 'melody', 'rhythm', 'scales'] as const;
export type LadderSkill = (typeof LADDER_SKILLS)[number];

export interface Rung {
  /** Stable id `<skill>-<n>` (n from 1) */
  id: string;
  skill: LadderSkill;
  /** 1-based position */
  n: number;
  /** Short title shown to the learner */
  title: string;
  /** What changes compared to the previous rung (one sentence) */
  step: string;
  /** Practical method: what to do with ears and hands to answer this rung (from ladder-methods.ts) */
  how: string;
  block: ExerciseBlock;
}

export interface Ladder {
  skill: LadderSkill;
  title: string;
  /** What the skill is for, in one sentence */
  purpose: string;
  rungs: Rung[];
}

type RungDef = { title: string; step: string; block: Omit<ExerciseBlock, 'id' | 'title' | 'count'> & { count?: number; title?: string } };

const WHITE = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const ALL12 = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const D17 = [1, 2, 3, 4, 5, 6, 7];

const octave = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-octave', spec, instructions }) as RungDef['block'];
const degree = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-note', spec: { mode: 'major', octaves: [4], ...spec }, instructions }) as RungDef['block'];
const intervalNarrow = (intervals: string[], direction: string, instructions: string) =>
  ({ type: 'ear-interval', spec: { intervals, direction, root: 'random', range: ['C4', 'C5'] }, instructions }) as RungDef['block'];
const interval = (intervals: string[], direction: string, instructions: string) =>
  ({ type: 'ear-interval', spec: { intervals, direction, root: 'random', range: ['C3', 'C5'] }, instructions }) as RungDef['block'];
const chord = (qualities: string[], instructions: string, extra: Record<string, unknown> = {}) =>
  ({ type: 'ear-chord', spec: { qualities, inversions: [0], voicing: 'close', range: ['C3', 'C5'], ...extra }, instructions }) as RungDef['block'];
const root = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-chord-root', spec: { answer: 'play', ...spec }, instructions }) as RungDef['block'];
const bass = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-bass', spec: { answer: 'play', ...spec }, instructions }) as RungDef['block'];
const prog = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-progression', spec: { mode: 'major', style: 'block', ...spec }, instructions }) as RungDef['block'];
const mel = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-melody', spec: { rhythm: 'quarters', answer: 'play', ...spec }, instructions }) as RungDef['block'];
const rhythm = (spec: Record<string, unknown>, instructions: string) => ({ type: 'ear-rhythm', spec, instructions }) as RungDef['block'];
const scale = (scales: string[], play: string, instructions: string) => ({ type: 'ear-scale', spec: { scales, play, root: 'C' }, instructions }) as RungDef['block'];

const DEFS: Record<LadderSkill, { title: string; purpose: string; rungs: RungDef[] }> = {
  pitch: {
    title: 'Pitch',
    purpose: 'Hear whether a note goes up or down, and find a note you heard on the keyboard — the ground everything else stands on.',
    rungs: [
      { title: 'Higher or lower: far apart', step: 'Two notes far apart (up to almost an octave): did the second go up or down?', block: octave({ notes: ['C', 'A', 'B'], octaves: [4], mode: 'higher-or-lower' }, 'Is the second note higher or lower than the first?') },
      { title: 'Higher or lower: closer', step: 'The notes are a 3rd to a 5th apart.', block: octave({ notes: ['C', 'E', 'G'], octaves: [4], mode: 'higher-or-lower' }, 'Is the second note higher or lower?') },
      { title: 'Higher or lower: neighbours', step: 'Only a step or two apart.', block: octave({ notes: ['C', 'D', 'E'], octaves: [4], mode: 'higher-or-lower' }, 'Is the second note higher or lower? They are close.') },
      { title: 'Find it: C, D or E', step: 'Hear a note, find the exact key among three.', block: octave({ notes: ['C', 'D', 'E'], octaves: [4], mode: 'seek' }, 'Find the note you heard: C4, D4 or E4.') },
      { title: 'Find it: C to G', step: 'Five keys to search.', block: octave({ notes: ['C', 'D', 'E', 'F', 'G'], octaves: [4], mode: 'seek' }, 'Find the note you heard, between C4 and G4.') },
      { title: 'Same note or not?', step: 'Two notes: exactly the same, or different (a 3rd or more apart)?', block: octave({ notes: WHITE, octaves: [4], mode: 'same-pitch', foils: [3, 4, 5, 7] }, 'The same note twice, or two different notes?') },
      { title: 'Same note or not: close', step: 'The different note is only a half or whole step away.', block: octave({ notes: WHITE, octaves: [4], mode: 'same-pitch', foils: [1, 2] }, 'The same note twice, or two notes very close together?') },
      { title: 'Find it: all white keys', step: 'Seven keys, C4 to B4.', block: octave({ notes: WHITE, octaves: [4], mode: 'seek' }, 'Find the note you heard, C4 to B4 (white keys).') },
      { title: 'Find it: black keys too', step: 'All twelve keys of the octave.', block: octave({ notes: ALL12, octaves: [4], mode: 'seek' }, 'Find the note you heard, C4 to B4 (black keys too).') },
      { title: 'Find it: two octaves', step: 'The note may be in octave 3 or 4.', block: octave({ notes: WHITE, octaves: [3, 4], mode: 'seek' }, 'Find the note you heard, C3 to B4.') },
    ],
  },
  octave: {
    title: 'Octaves',
    purpose: 'Hear the same note name through different heights — the base of hearing bass lines, chords and melodies in any register.',
    rungs: [
      { title: 'Together: octave or clash', step: 'Two notes at once, one octave vs a tritone.', block: octave({ notes: WHITE, octaves: [3, 4], mode: 'together', gap: [1], foils: [6] }, 'Two notes at once. Do they melt into one sound (octave) or clash?') },
      { title: 'Together: octave or near-miss', step: 'The wrong note is now a half step off the octave.', block: octave({ notes: WHITE, octaves: [3, 4], mode: 'together', gap: [1], foils: [1, 11] }, 'Two notes at once: a clean octave, or a note right next to it (it rubs)?') },
      { title: 'Which one is the octave?', step: 'One after the other: pick the octave out of two candidates.', block: octave({ notes: WHITE, octaves: [3, 4], mode: 'match', gap: [1], foils: [6] }, 'A note, then A and B. Which one is the same note an octave higher?') },
      { title: 'Which one is the octave? (near-misses)', step: 'The wrong candidate can now be a half step off.', block: octave({ notes: WHITE, octaves: [3, 4], mode: 'match', gap: [1], foils: [1, 6, 11] }, 'A note, then A and B. Which one is the octave? The other may be only a half step off.') },
      { title: 'Same or different, one after the other', step: 'No candidates to compare: judge a single pair.', block: octave({ notes: WHITE, octaves: [3, 4, 5], mode: 'same-or-different', gap: [1], foils: [6] }, 'Two notes an octave-ish apart: the same note again, or a different note?') },
      { title: 'Same or different: near-misses', step: 'The different note may be a half step off the octave.', block: octave({ notes: WHITE, octaves: [3, 4, 5], mode: 'same-or-different', gap: [1], foils: [1, 6, 11] }, 'Same note an octave away, or a note right next to it?') },
      { title: 'Find it on your keyboard', step: 'Hear one note, play the same note name in any octave.', block: octave({ notes: WHITE, octaves: [3, 4, 5], mode: 'find' }, 'Find the note you hear on your keyboard, in any octave.') },
      { title: 'Find it: black keys too', step: 'All twelve notes, from octave 2 up to 5.', block: octave({ notes: ALL12, octaves: [2, 3, 4, 5], mode: 'find' }, 'Find the note on your keyboard, any octave. Black keys included.') },
      { title: 'Octave or fifth? (together)', step: 'The wrong note is now a 4th/5th away — the most octave-like sound.', block: octave({ notes: WHITE, octaves: [3, 4], mode: 'together', gap: [1], foils: [5, 7] }, 'Two notes at once: one note (octave), or an open, hollow pair (a fifth)?') },
      { title: 'Octave or fifth? (one after the other)', step: 'The fifth trap, one note after the other.', block: octave({ notes: WHITE, octaves: [3, 4, 5], mode: 'same-or-different', gap: [1], foils: [5, 7] }, 'Same note an octave away, or a 4th/5th away from it?') },
      { title: 'Two octaves apart: which one?', step: 'Candidates may be two octaves up.', block: octave({ notes: WHITE, octaves: [3, 4, 5], mode: 'match', gap: [1, 2], foils: [1, 6, 11] }, 'A note, then A and B, one or two octaves higher. Which is the same note?') },
      { title: 'Two octaves apart: same or different', step: 'Single pairs, one or two octaves apart.', block: octave({ notes: WHITE, octaves: [3, 4, 5], mode: 'same-or-different', gap: [1, 2], foils: [1, 6, 11] }, 'Same note one or two octaves away, or a different note?') },
      { title: 'Find the bass note', step: 'Very low notes (octaves 1–2) on a bass sound.', block: octave({ notes: ALL12, octaves: [1, 2], mode: 'find', instrument: 'bass' }, 'A low bass note: find it on your keyboard, any octave.') },
      { title: 'Everything at once', step: 'All registers, one or two octaves, every kind of wrong note.', block: octave({ notes: WHITE, octaves: [2, 3, 4, 5], mode: 'same-or-different', gap: [1, 2], foils: [1, 5, 6, 7, 11] }, 'Same note or different? Any register, any gap.') },
    ],
  },
  degrees: {
    title: 'Scale degrees (home)',
    purpose: 'Hear where a note sits relative to home — the skill behind playing melodies by ear and finding the key of a song.',
    rungs: [
      // Stage 1 — C major, one octave (do … ti), home run, then the cadence
      { title: 'Home or 3? (with drone)', step: 'C major, do or mi, the home note held underneath.', block: degree({ key: 'C', degrees: [1, 3], reference: 'scale', drone: true, span: [0, 11] }, 'After the home run, a note over a low C. Home (1) or 3?') },
      { title: 'Do, mi or sol (with drone)', step: 'Sol joins: the three notes of the home chord.', block: degree({ key: 'C', degrees: [1, 3, 5], reference: 'scale', drone: true, span: [0, 11] }, 'After the home run: 1, 3 or 5?') },
      { title: 'Do, mi or sol', step: 'No drone: hold home in your head.', block: degree({ key: 'C', degrees: [1, 3, 5], reference: 'scale', span: [0, 11] }, 'After the home run: 1, 3 or 5?') },
      { title: 'Re joins', step: 'Degree 2, the step above home.', block: degree({ key: 'C', degrees: [1, 2, 3, 5], reference: 'scale', span: [0, 11] }, 'After the home run: 1, 2, 3 or 5?') },
      { title: '1 to 5', step: 'Fa (4) joins.', block: degree({ key: 'C', degrees: [1, 2, 3, 4, 5], reference: 'scale', span: [0, 11] }, 'After the home run: which degree, 1 to 5?') },
      { title: '1 to 6', step: 'La (6) joins.', block: degree({ key: 'C', degrees: [1, 2, 3, 4, 5, 6], reference: 'scale', span: [0, 11] }, 'After the home run: which degree, 1 to 6?') },
      { title: 'All seven in C', step: 'Ti (7) joins: the whole octave, do to ti.', block: degree({ key: 'C', degrees: D17, reference: 'scale', span: [0, 11] }, 'After the home run: which degree, 1 to 7?') },
      { title: 'All seven after a cadence', step: 'Same notes; the reference becomes the chord cadence.', block: degree({ key: 'C', degrees: D17, reference: 'cadence', span: [0, 11] }, 'After the cadence (C–F–G–C): which degree?') },
      // Stage 2 — register: the same notes in other octaves
      { title: 'Do and sol, other octaves', step: 'Only 1 and 5, but the note may be an octave below or above the cadence.', block: degree({ key: 'C', degrees: [1, 5], reference: 'cadence', span: [-12, 23] }, 'Home (1) or sol (5)? The note may be in another octave.') },
      { title: 'Do, mi, sol, other octaves', step: 'The home chord notes in any of three octaves.', block: degree({ key: 'C', degrees: [1, 3, 5], reference: 'cadence', span: [-12, 23] }, '1, 3 or 5 — in any of three octaves.') },
      { title: 'All seven, other octaves', step: 'Every degree, octave 3, 4 or 5.', block: degree({ key: 'C', degrees: D17, reference: 'cadence', span: [-12, 23] }, 'Which degree? The note may be in another octave.') },
      // Stage 3 — below do and two octaves
      { title: 'Low sol', step: 'The range reaches below home: sol under do.', block: degree({ key: 'C', degrees: [1, 2, 3, 4, 5], reference: 'cadence', span: [-5, 11] }, 'Which degree? 5 may sit below home.') },
      { title: 'Low la and ti', step: 'All seven from low sol up to do\u2032.', block: degree({ key: 'C', degrees: D17, reference: 'cadence', span: [-5, 12] }, 'Which degree? From low sol up to high do.') },
      { title: 'Two octaves around home', step: 'Any degree, an octave below to an octave above home.', block: degree({ key: 'C', degrees: D17, reference: 'cadence', span: [-12, 12] }, 'Which degree? Anywhere within an octave of home.') },
      // Stage 4 — keys
      { title: 'All seven in G', step: 'One new key, one octave.', block: degree({ key: 'G', degrees: D17, reference: 'cadence', span: [0, 11] }, 'Home is G. Which degree?') },
      { title: 'All seven in F', step: 'Another new key.', block: degree({ key: 'F', degrees: D17, reference: 'cadence', span: [0, 11] }, 'Home is F. Which degree?') },
      { title: 'Near keys', step: 'C, G, F, D or B\u266d — a new home each question, one octave.', block: degree({ key: 'random', keys: ['C', 'G', 'F', 'D', 'Bb'], degrees: D17, reference: 'cadence', span: [0, 11] }, 'A new home each question (C, G, F, D or B\u266d). Which degree?') },
      { title: 'Any major key', step: 'Every major key, still one octave.', block: degree({ key: 'random', degrees: D17, reference: 'cadence', span: [0, 11] }, 'Any key. Listen to the cadence for home. Which degree?') },
      { title: 'Any key, two octaves', step: 'Any key, the note anywhere within an octave of home.', block: degree({ key: 'random', degrees: D17, reference: 'cadence', span: [-12, 12] }, 'Any key, any register. Which degree?') },
      // Stage 5 — minor
      { title: 'Minor: 1 to 5 in A', step: 'A minor, one octave: the darker home.', block: degree({ key: 'A', mode: 'minor', degrees: [1, 2, 3, 4, 5], reference: 'cadence', span: [0, 11] }, 'A minor. Which degree, 1 to 5?') },
      { title: 'Minor: all seven in A', step: 'Natural minor, all seven.', block: degree({ key: 'A', mode: 'minor', degrees: D17, reference: 'cadence', span: [0, 11] }, 'A minor. Which degree?') },
      { title: 'Minor: near keys', step: 'A, E or D minor.', block: degree({ key: 'random', mode: 'minor', keys: ['A', 'E', 'D'], degrees: D17, reference: 'cadence', span: [0, 11] }, 'A minor key (A, E or D). Which degree?') },
      { title: 'Minor: any key', step: 'Every minor key, one then two octaves.', block: degree({ key: 'random', mode: 'minor', degrees: D17, reference: 'cadence', span: [-12, 12] }, 'Any minor key. Which degree?') },
      { title: 'Minor: the raised 7', step: 'Harmonic minor: #7, the leading tone, joins.', block: degree({ key: 'random', mode: 'minor', degrees: [...D17, '#7'], reference: 'cadence', span: [0, 11] }, 'Minor key; 7 may be raised (#7). Which degree?') },
      { title: 'Minor: raised 6 and 7', step: 'Melodic minor: #6 joins too.', block: degree({ key: 'random', mode: 'minor', degrees: [...D17, '#6', '#7'], reference: 'cadence', span: [0, 11] }, 'Minor key; 6 and 7 may be raised. Which degree?') },
      // Stage 6 — chromatic notes in major (b3, b7, b6, #4, b2)
      { title: 'The flat 3', step: '\u266d3, the blue third, joins the major scale.', block: degree({ key: 'random', degrees: [...D17, 'b3'], reference: 'cadence', span: [0, 11] }, 'Major key; \u266d3 may appear. Which degree?') },
      { title: 'The flat 7', step: '\u266d7 joins.', block: degree({ key: 'random', degrees: [...D17, 'b3', 'b7'], reference: 'cadence', span: [0, 11] }, 'Major key; \u266d3 or \u266d7 may appear.') },
      { title: 'The flat 6', step: '\u266d6 joins.', block: degree({ key: 'random', degrees: [...D17, 'b3', 'b6', 'b7'], reference: 'cadence', span: [0, 11] }, 'Major key; \u266d3, \u266d6 or \u266d7 may appear.') },
      { title: 'The sharp 4', step: '\u266f4 joins.', block: degree({ key: 'random', degrees: [...D17, 'b3', '#4', 'b6', 'b7'], reference: 'cadence', span: [0, 11] }, 'Major key; \u266d3, \u266f4, \u266d6 or \u266d7 may appear.') },
      { title: 'All twelve', step: '\u266d2 joins: every chromatic degree.', block: degree({ key: 'random', degrees: [...D17, 'b2', 'b3', '#4', 'b6', 'b7'], chromatic: true, reference: 'cadence', span: [0, 11] }, 'Any of the twelve notes against the key. Which degree?') },
    ],
  },
  intervals: {
    title: 'Intervals',
    purpose: 'Hear the distance between two notes — useful for melodies and for checking what you hear.',
    rungs: [
      { title: 'Half step or whole step', step: 'm2 vs M2, going up.', block: intervalNarrow(['m2', 'M2'], 'asc', 'Two notes going up: a half step (squeezed) or a whole step?') },
      { title: 'Whole step or major 3rd', step: 'M2 vs M3.', block: intervalNarrow(['M2', 'M3'], 'asc', 'A step (M2) or a skip (M3)?') },
      { title: 'Minor or major 3rd', step: 'm3 vs M3 — dark vs bright.', block: intervalNarrow(['m3', 'M3'], 'asc', 'Minor 3rd (darker) or major 3rd (brighter)?') },
      { title: '4th or 5th', step: 'P4 vs P5 (Here Comes the Bride vs Twinkle).', block: intervalNarrow(['P4', 'P5'], 'asc', 'Perfect 4th or perfect 5th?') },
      { title: '3rd, 4th or 5th', step: 'Three choices.', block: intervalNarrow(['M3', 'P4', 'P5'], 'asc', 'Major 3rd, 4th or 5th?') },
      { title: 'Seconds and thirds', step: 'The four small intervals together.', block: intervalNarrow(['m2', 'M2', 'm3', 'M3'], 'asc', 'Which interval: half step, whole step, minor or major 3rd?') },
      { title: 'Seconds to fifths', step: 'The 4th and 5th join the small intervals.', block: intervalNarrow(['m2', 'M2', 'm3', 'M3', 'P4', 'P5'], 'asc', 'Which interval, from half step to fifth?') },
      { title: 'Seconds to fifths, any register', step: 'The same intervals, now from low to high registers.', block: interval(['m2', 'M2', 'm3', 'M3', 'P4', 'P5'], 'asc', 'Which interval? It may be low or high.') },
      { title: '5th or octave', step: 'P5 vs P8.', block: interval(['P5', 'P8'], 'asc', 'Perfect 5th or octave?') },
      { title: 'Minor or major 6th', step: 'm6 vs M6.', block: interval(['m6', 'M6'], 'asc', 'Minor 6th or major 6th?') },
      { title: '7ths and the octave', step: 'm7, M7, P8.', block: interval(['m7', 'M7', 'P8'], 'asc', 'Minor 7th, major 7th or octave?') },
      { title: 'The tritone', step: 'P4 vs TT vs P5.', block: interval(['P4', 'TT', 'P5'], 'asc', 'Fourth, tritone or fifth?') },
      { title: 'Big intervals, up', step: 'Tritone to octave: TT, 6ths, 7ths, P8.', block: interval(['TT', 'm6', 'M6', 'm7', 'M7', 'P8'], 'asc', 'Which big interval (going up)?') },
      { title: 'All intervals, up', step: 'Small and big together: all twelve, ascending.', block: interval(['m2', 'M2', 'm3', 'M3', 'P4', 'TT', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'], 'asc', 'Which interval (going up)?') },
      { title: 'Going down', step: 'Descending: M2, M3, P4, P5.', block: interval(['M2', 'M3', 'P4', 'P5'], 'desc', 'Two notes going down: which interval?') },
      { title: 'Down: seconds to fifths', step: 'Descending, the six small and middle intervals.', block: interval(['m2', 'M2', 'm3', 'M3', 'P4', 'P5'], 'desc', 'Two notes going down: which interval?') },
      { title: 'All intervals, down', step: 'All twelve, descending.', block: interval(['m2', 'M2', 'm3', 'M3', 'P4', 'TT', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'], 'desc', 'Which interval (going down)?') },
      { title: 'Together: 3rd, 5th, octave', step: 'Both notes at once.', block: interval(['M3', 'P5', 'P8'], 'harmonic', 'Both notes at once: major 3rd, 5th or octave?') },
      { title: 'Together: 3rds and 6ths', step: 'The sweet intervals.', block: interval(['m3', 'M3', 'm6', 'M6'], 'harmonic', 'Both at once: which 3rd or 6th?') },
      { title: 'Together: the rough ones', step: 'M2, TT, m7, M7.', block: interval(['M2', 'TT', 'm7', 'M7'], 'harmonic', 'Both at once: which dissonance?') },
      { title: 'Together: all', step: 'All intervals, both notes at once.', block: interval(['m2', 'M2', 'm3', 'M3', 'P4', 'TT', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'], 'harmonic', 'Both at once: which interval?') },
      { title: 'Everything', step: 'Up, down or together.', block: interval(['m2', 'M2', 'm3', 'M3', 'P4', 'TT', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'], 'mixed', 'Which interval?') },
    ],
  },
  chords: {
    title: 'Chord colours',
    purpose: 'Hear a chord’s quality (major, minor, seventh…) — half of knowing any chord in a song.',
    rungs: [
      { title: 'Major or minor', step: 'Two triads: bright vs dark.', block: chord(['maj', 'min'], 'Major (bright) or minor (dark)?', { range: ['C4', 'C5'] }) },
      { title: 'Major or minor, any register', step: 'The same two colours, low or high.', block: chord(['maj', 'min'], 'Major or minor? The chord may be low or high.', { range: ['C3', 'C5'] }) },
      { title: 'Major, minor or diminished', step: 'The tense diminished triad joins.', block: chord(['maj', 'min', 'dim'], 'Major, minor or diminished (tense, squeezed)?') },
      { title: 'Triad or seventh?', step: 'Major triad vs dominant 7th.', block: chord(['maj', 'dom7'], 'Plain major triad, or dominant 7th (bluesy, wants to move)?') },
      { title: 'Major 7 or dominant 7', step: 'Two sevenths on a major triad.', block: chord(['maj7', 'dom7'], 'Major 7th (dreamy) or dominant 7th (bluesy)?') },
      { title: 'Minor 7 or dominant 7', step: 'Minor vs dominant seventh.', block: chord(['min7', 'dom7'], 'Minor 7th (soft) or dominant 7th?') },
      { title: 'The three sevenths', step: 'maj7, dom7, min7.', block: chord(['maj7', 'dom7', 'min7'], 'Major 7, dominant 7 or minor 7?') },
      { title: 'Triads and dominant 7', step: 'maj, min and dom7 mixed.', block: chord(['maj', 'min', 'dom7'], 'Major, minor or dominant 7th?') },
      { title: 'Major or sus4', step: 'Suspended: the 3rd replaced by the 4th.', block: chord(['maj', 'sus4'], 'Major, or sus4 (open, waiting to resolve)?') },
      { title: 'Major, sus2 or sus4', step: 'Both suspensions.', block: chord(['maj', 'sus2', 'sus4'], 'Major, sus2 or sus4?') },
      { title: 'Minor 7 or half-diminished', step: 'min7 vs m7b5.', block: chord(['min7', 'm7b5'], 'Minor 7th, or half-diminished (m7♭5, darker, tense)?') },
      { title: 'Four sevenths', step: 'maj7, dom7, min7, m7b5.', block: chord(['maj7', 'dom7', 'min7', 'm7b5'], 'Which seventh chord?') },
      { title: 'Colour chords', step: 'add9 and 6 next to plain major.', block: chord(['maj', 'add9', 'maj6'], 'Plain major, add9 (sparkly) or 6 (sweet, vintage)?') },
      { title: 'Four sevenths, spread out', step: 'Open voicing across two octaves.', block: chord(['maj7', 'dom7', 'min7', 'm7b5'], 'Which seventh chord? (spread voicing)', { voicing: 'open', range: ['C2', 'C5'] }) },
      { title: 'Diminished or augmented', step: 'dim vs aug next to maj/min.', block: chord(['maj', 'min', 'dim', 'aug'], 'Major, minor, diminished or augmented (stretched, dreamy)?') },
      { title: 'Major 7 or major 9', step: 'The ninth added on top of a maj7.', block: chord(['maj7', 'maj9'], 'Major 7th, or major 9th (the same with an extra shimmer on top)?') },
      { title: 'Sevenths or ninths', step: 'Dominant chords too: maj7, maj9, dom7, dom9.', block: chord(['maj7', 'maj9', 'dom7', 'dom9'], 'Seventh or ninth chord?') },
    ],
  },
  roots: {
    title: 'Roots and bass',
    purpose: 'Hear the bass note / the root of a chord — the key to naming chords and hearing progressions.',
    rungs: [
      { title: 'Root of a major chord', step: 'Play the root of a root-position major triad.', block: root({ qualities: ['maj'], range: ['C4', 'C5'] }, 'A major chord: play its root (the lowest note here), any octave.') },
      { title: 'Root of major or minor', step: 'Minor chords too.', block: root({ qualities: ['maj', 'min'], range: ['C4', 'C5'] }, 'A major or minor chord: play its root.') },
      { title: 'Bass line: I and V', step: 'Two chords in C, play their bass notes.', block: bass({ key: 'C', chords: ['I', 'V'], length: 2 }, 'Two chords in C: play the two bass notes you hear.') },
      { title: 'Bass line: I, IV, V', step: 'Three chords in C.', block: bass({ key: 'C', chords: ['I', 'IV', 'V'], length: 3 }, 'Three chords in C: play the bass notes.') },
      { title: 'Bass line: I, IV, V, vi', step: 'Four chords in C, including vi.', block: bass({ key: 'C', chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'Four chords in C: play the bass line.') },
      { title: 'Root when the chord is inverted', step: 'The root is no longer the lowest note (major chords).', block: root({ qualities: ['maj'], inversions: [0, 1, 2], range: ['C3', 'C5'] }, 'A major chord, maybe inverted: play its ROOT (not just the lowest note).') },
      { title: 'Inverted major and minor', step: 'Minor chords too.', block: root({ qualities: ['maj', 'min'], inversions: [0, 1, 2], range: ['C3', 'C5'] }, 'Major or minor, maybe inverted: play the root.') },
      { title: 'Bass line in G', step: 'Same four chords in G.', block: bass({ key: 'G', chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'Four chords in G: play the bass line.') },
      { title: 'Bass line, near keys', step: 'C, G, F, D or B\u266d — a new home each time.', block: bass({ key: 'random', keys: ['C', 'G', 'F', 'D', 'Bb'], chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'A new key each time (C, G, F, D or B\u266d): play the bass line.') },
      { title: 'Bass line, any key', step: 'The key changes every time.', block: bass({ key: 'random', chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'A new key each time: play the bass line.') },
      { title: 'Bass line with ii and iii', step: 'More chords to choose from.', block: bass({ key: 'random', chords: ['I', 'ii', 'iii', 'IV', 'V', 'vi'], length: 4 }, 'Play the bass line (chords from the whole key).') },
      { title: 'Bass not on the root', step: 'Inversions: the bass may be the 3rd or 5th.', block: bass({ key: 'random', chords: ['I', 'IV', 'V', 'vi'], length: 4, inversions: [0, 1] }, 'Play the bass line — some chords are inverted, so follow the actual lowest note.') },
      { title: 'Minor-key bass lines', step: 'Minor keys.', block: bass({ key: 'random', mode: 'minor', chords: ['i', 'iv', 'V', 'VI', 'VII'], length: 4 }, 'A minor key: play the bass line.') },
      { title: 'The borrowed ♭VII in the bass', step: 'bVII (a whole step below home) joins the major-key bass lines.', block: bass({ key: 'random', chords: ['I', 'IV', 'V', 'vi', 'bVII'], length: 4 }, 'Major key, but bVII may appear: play the bass line.') },
      { title: 'Bass in a band', step: 'Full mix: drums, pad and a melody on top.', block: bass({ key: 'random', chords: ['I', 'IV', 'V', 'vi'], length: 4, style: 'band' }, 'A little band plays: find and play the bass line under everything.') },
      { title: 'Band, any chord', step: 'Full mix, wider palette.', block: bass({ key: 'random', chords: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'bVII'], length: 4, style: 'band' }, 'Full band: play the bass line.') },
    ],
  },
  progressions: {
    title: 'Progressions',
    purpose: 'Name the chords of a song by their role in the key (I, IV, V…).',
    rungs: [
      { title: 'Home or tension: I or V', step: 'Two chords in C.', block: prog({ key: 'C', chords: ['I', 'V'], length: 2 }, 'Two chords in C: each one I (home) or V (tension)?') },
      { title: 'I, IV, V', step: 'IV joins.', block: prog({ key: 'C', chords: ['I', 'IV', 'V'], length: 3 }, 'Three chords in C: I, IV or V?') },
      { title: 'I, IV, V, vi', step: 'The four pop chords, in C.', block: prog({ key: 'C', chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'Four chords in C: which of I, IV, V, vi?') },
      { title: 'Four chords in G', step: 'Same, in G.', block: prog({ key: 'G', chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'Four chords in G.') },
      { title: 'Four chords, near keys', step: 'C, G, F, D or B\u266d.', block: prog({ key: 'random', keys: ['C', 'G', 'F', 'D', 'Bb'], chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'A new key each time (C, G, F, D or B\u266d): I, IV, V or vi?') },
      { title: 'Four chords, any key', step: 'Random keys.', block: prog({ key: 'random', chords: ['I', 'IV', 'V', 'vi'], length: 4 }, 'A new key each time: I, IV, V or vi?') },
      { title: 'Adding ii', step: 'ii joins.', block: prog({ key: 'random', chords: ['I', 'ii', 'IV', 'V', 'vi'], length: 4 }, 'I, ii, IV, V or vi?') },
      { title: 'Adding iii', step: 'iii joins.', block: prog({ key: 'random', chords: ['I', 'ii', 'iii', 'IV', 'V', 'vi'], length: 4 }, 'All the major and minor chords of the key.') },
      { title: 'V or V7', step: 'The dominant with its seventh.', block: prog({ key: 'random', chords: ['I', 'IV', 'V', 'V7'], length: 3 }, 'Is the dominant plain V, or V7?') },
      { title: 'Minor: i, iv, V', step: 'A minor, three chords.', block: prog({ key: 'A', mode: 'minor', chords: ['i', 'iv', 'V'], length: 3 }, 'A minor: i, iv or V?') },
      { title: 'IV or iv?', step: 'The borrowed minor iv.', block: prog({ key: 'random', chords: ['I', 'IV', 'iv', 'V'], length: 3 }, 'Is the IV major (IV) or borrowed minor (iv)?') },
      { title: 'V or bVII?', step: 'The borrowed bVII.', block: prog({ key: 'random', chords: ['I', 'IV', 'V', 'bVII'], length: 4 }, 'I, IV, V or bVII?') },
      { title: 'Minor: the pop minor chords', step: 'i, iv, VI, VII in A minor.', block: prog({ key: 'A', mode: 'minor', chords: ['i', 'iv', 'VI', 'VII'], length: 4 }, 'A minor: i, iv, VI or VII?') },
      { title: 'Minor, any key', step: 'Random minor keys.', block: prog({ key: 'random', mode: 'minor', chords: ['i', 'iv', 'V', 'VI', 'VII'], length: 4 }, 'A new minor key each time.') },
      { title: 'In a band', step: 'Full mix, four pop chords plus ii.', block: prog({ key: 'random', chords: ['I', 'ii', 'IV', 'V', 'vi'], length: 4, style: 'band' }, 'A band plays: name the chords.') },
      { title: 'ii or V/V?', step: 'The secondary dominant V/V against ii.', block: prog({ key: 'random', chords: ['I', 'ii', 'V/V', 'V'], length: 4 }, 'Is the chord on 2 minor (ii) or major (V/V)?') },
      { title: 'iii or V/vi?', step: 'V/vi against iii.', block: prog({ key: 'random', chords: ['I', 'iii', 'V/vi', 'vi', 'IV'], length: 4 }, 'Is the chord on 3 minor (iii) or major (V/vi)?') },
      { title: 'Secondary dominants', step: 'Mixed palette.', block: prog({ key: 'random', chords: ['I', 'ii', 'IV', 'V', 'vi', 'V/V', 'V/vi'], length: 4 }, 'The whole key plus V/V and V/vi.') },
      { title: 'Sevenths: ii–V–I', step: 'Jazz sevenths.', block: prog({ key: 'random', chords: ['Imaj7', 'ii7', 'V7', 'vi7'], length: 4 }, 'Imaj7, ii7, V7 or vi7?') },
      { title: 'Borrowed chords', step: 'bVI joins iv and bVII.', block: prog({ key: 'random', chords: ['I', 'IV', 'iv', 'V', 'vi', 'bVI', 'bVII'], length: 4 }, 'Major key with borrowed chords.') },
      { title: 'In a band, borrowed too', step: 'Full mix, wider palette.', block: prog({ key: 'random', chords: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'bVII', 'iv'], length: 4, style: 'band' }, 'A band plays: name the chords.') },
    ],
  },
  melody: {
    title: 'Melodies',
    purpose: 'Play back or write down a melody you hear — the core of playing and transcribing by ear.',
    rungs: [
      // one octave in C
      { title: 'Echo 3 notes (C D E)', step: 'Play back 3 notes from do, re, mi.', block: mel({ key: 'C', degrees: [1, 2, 3], length: 3, reference: 'tonic', span: [0, 4] }, 'Play back the 3 notes you hear (C, D and E only).') },
      { title: 'Echo 4 notes (C D E)', step: 'Four notes.', block: mel({ key: 'C', degrees: [1, 2, 3], length: 4, reference: 'tonic', span: [0, 4] }, 'Play back the 4 notes (C, D, E).') },
      { title: 'Echo 3 notes (C to G)', step: 'Five notes to choose from, do to sol.', block: mel({ key: 'C', degrees: [1, 2, 3, 4, 5], length: 3, reference: 'tonic', span: [0, 7] }, 'Play back 3 notes from C D E F G.') },
      { title: 'Echo 4 notes (C to G)', step: 'Four notes from five.', block: mel({ key: 'C', degrees: [1, 2, 3, 4, 5], length: 4, reference: 'scale', span: [0, 7] }, 'Play back 4 notes from C D E F G.') },
      { title: 'Write 3 notes as degrees', step: 'Answer with numbers instead of keys.', block: mel({ key: 'C', degrees: [1, 2, 3], length: 3, answer: 'degrees', reference: 'scale', span: [0, 4] }, 'Write the degrees (1, 2, 3) of the three notes.') },
      { title: 'Write 4 notes as degrees', step: 'Degrees 1–5.', block: mel({ key: 'C', degrees: [1, 2, 3, 4, 5], length: 4, answer: 'degrees', reference: 'scale', span: [0, 7] }, 'Write the degrees of the four notes (1–5).') },
      { title: 'Echo the whole octave', step: 'All seven, do up to do\u2032.', block: mel({ key: 'C', degrees: D17, length: 4, reference: 'scale', span: [0, 12] }, 'Play back 4 notes from C4 up to C5.') },
      { title: 'Five notes', step: 'Longer: 5 notes, one octave.', block: mel({ key: 'C', degrees: D17, length: 5, span: [0, 12], reference: 'scale' }, 'Play back 5 notes (C major, one octave).') },
      // register
      { title: 'The tune in another octave', step: 'The same kind of tune, played an octave lower or higher.', block: mel({ key: 'C', degrees: [1, 2, 3, 4, 5], length: 4, span: [0, 7], octaveShift: [-1, 1] }, 'The tune sounds an octave away — play it back in any octave.') },
      { title: 'Below do', step: 'Tunes that dip below home (low sol, la, ti).', block: mel({ key: 'C', degrees: D17, length: 5, span: [-5, 12] }, 'Play back 5 notes — some sit below home.') },
      { title: 'Two octaves', step: 'Tunes spread over two octaves around home.', block: mel({ key: 'C', degrees: D17, length: 5, span: [-12, 12] }, 'Play back 5 notes across two octaves.') },
      // keys
      { title: 'Five notes in G', step: 'A new key, one octave.', block: mel({ key: 'G', degrees: D17, length: 5, span: [0, 12] }, 'G major: play back 5 notes.') },
      { title: 'Five notes in F', step: 'Another key.', block: mel({ key: 'F', degrees: D17, length: 5, span: [0, 12] }, 'F major: play back 5 notes.') },
      { title: 'Near keys', step: 'C, G, F, D or B\u266d, one octave.', block: mel({ key: 'random', keys: ['C', 'G', 'F', 'D', 'Bb'], degrees: D17, length: 5, span: [0, 12] }, 'A new key each time (C, G, F, D or B\u266d): play back 5 notes.') },
      { title: 'Any key', step: 'Any major key, one octave.', block: mel({ key: 'random', degrees: D17, length: 5, span: [0, 12] }, 'Any key: play back 5 notes.') },
      { title: 'Any key: write degrees', step: 'Degrees answer in any key.', block: mel({ key: 'random', degrees: D17, length: 5, answer: 'degrees', span: [0, 12] }, 'Write the degrees of the 5 notes.') },
      { title: 'Any key, any register', step: 'Any key, tunes over two octaves.', block: mel({ key: 'random', degrees: D17, length: 5, span: [-12, 12] }, 'Any key, any register: play back 5 notes.') },
      { title: 'Minor tunes in A', step: 'A natural minor, one octave.', block: mel({ key: 'A', mode: 'minor', degrees: D17, length: 5, span: [0, 12] }, 'A minor: play back 5 notes.') },
      { title: 'Minor, any key', step: 'Any minor key.', block: mel({ key: 'random', mode: 'minor', degrees: D17, length: 5, span: [-5, 12] }, 'A minor key: play back 5 notes.') },
      { title: 'Six notes with rhythm', step: 'Longer, with simple rhythm.', block: mel({ key: 'random', degrees: D17, length: 6, rhythm: 'simple', span: [-5, 12] }, 'Play back 6 notes (with rhythm).') },
      { title: 'Leaps', step: 'Melodies that jump up to a 6th.', block: mel({ key: 'random', degrees: D17, length: 6, rhythm: 'simple', maxLeap: 9, span: [-7, 14] }, 'Play back 6 notes — this melody leaps.') },
      { title: 'Over chords', step: 'A melody with chords underneath.', block: mel({ key: 'random', degrees: D17, length: 6, rhythm: 'simple', backing: ['I', 'IV', 'V', 'I'], span: [-5, 12] }, 'Play back the melody (chords play underneath).') },
      { title: 'Eight notes', step: 'Longer phrases, freer rhythm.', block: mel({ key: 'random', degrees: D17, length: 8, rhythm: 'free', span: [-7, 14] }, 'Play back 8 notes.') },
      { title: 'Chromatic notes', step: 'Chromatic neighbour and passing notes.', block: mel({ key: 'random', degrees: D17, length: 6, rhythm: 'simple', chromatic: true, span: [-5, 12] }, 'Play back 6 notes — some are outside the key.') },
    ],
  },
  rhythm: {
    title: 'Rhythm',
    purpose: 'Hear and reproduce rhythms, grooves, meters and tempos.',
    rungs: [
      { title: 'Choose the rhythm: quarters and halves', step: 'Pick the notation you heard.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: 'q', answer: 'choose', choices: 2 }, 'Which rhythm did you hear?') },
      { title: 'Choose: with eighths', step: 'Eighth notes, 3 choices.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '8', answer: 'choose', choices: 3 }, 'Which rhythm did you hear?') },
      { title: 'Tap it back: quarters', step: 'Tap the rhythm yourself.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: 'q', answer: 'tap' }, 'Tap back the rhythm.') },
      { title: 'Tap it back: eighths and rests', step: 'Eighths and rests.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '8', rests: true, answer: 'tap' }, 'Tap back the rhythm (rests included).') },
      { title: 'Meter: 3 or 4?', step: 'Hear the time signature.', block: { type: 'ear-meter', spec: { meters: ['3/4', '4/4'], style: 'drums' }, instructions: 'Is it in 3 or in 4?' } as RungDef['block'] },
      { title: 'Tap in 3/4', step: 'Waltz time.', block: rhythm({ timeSig: '3/4', bars: 1, subdivision: '8', answer: 'tap' }, 'Tap back the rhythm in 3/4.') },
      { title: 'Choose: sixteenths', step: 'Sixteenth notes.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '16', answer: 'choose', choices: 3 }, 'Which rhythm (with sixteenths)?') },
      { title: 'Tap: sixteenths', step: 'Tap sixteenths.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '16', answer: 'tap' }, 'Tap back the rhythm (sixteenths).') },
      { title: 'Choose: triplets', step: 'Eighth-note triplets.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '8t', answer: 'choose', choices: 3 }, 'Which rhythm (with triplets)?') },
      { title: 'Meter: 3/4, 4/4, 6/8', step: 'Compound 6/8 joins.', block: { type: 'ear-meter', spec: { meters: ['3/4', '4/4', '6/8'], style: 'mixed' }, instructions: 'Which time signature?' } as RungDef['block'] },
      { title: 'Two bars', step: 'Two bars of sixteenths.', block: rhythm({ timeSig: '4/4', bars: 2, subdivision: '16', answer: 'tap' }, 'Tap back two bars.') },
      { title: 'Tempo', step: 'Estimate the BPM.', block: { type: 'ear-tempo', spec: { range: [70, 140], tolerance: 8, style: 'drums' }, instructions: 'How fast is it? Tap along to measure.' } as RungDef['block'] },
      { title: 'Drums: kick and snare', step: 'Two drum voices on a grid.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '8', voices: ['kick', 'snare'] }, 'Fill in the kick and snare you hear.') },
      { title: 'Drums: kick, snare, hi-hat', step: 'Three voices.', block: rhythm({ timeSig: '4/4', bars: 1, subdivision: '8', voices: ['kick', 'snare', 'hihat'] }, 'Fill in kick, snare and hi-hat.') },
      { title: 'Four or five?', step: '5/4 against 4/4.', block: { type: 'ear-meter', spec: { meters: ['4/4', '5/4'], style: 'drums' }, instructions: 'Four beats per bar, or five?' } as RungDef['block'] },
      { title: 'Odd meters', step: '7/8 joins, with all the others.', block: { type: 'ear-meter', spec: { meters: ['3/4', '4/4', '6/8', '5/4', '7/8'], style: 'mixed' }, instructions: 'Which time signature?' } as RungDef['block'] },
    ],
  },
  scales: {
    title: 'Scale colours',
    purpose: 'Hear the colour of a scale or mode — major, minor, Dorian, blues…',
    rungs: [
      { title: 'Major or minor scale', step: 'Two scales on C, played up.', block: scale(['major', 'natural-minor'], 'asc', 'Major or natural minor?') },
      { title: 'Major or minor tune', step: 'As a short melody instead of a scale.', block: scale(['major', 'natural-minor'], 'melody', 'Is this tune major or minor?') },
      { title: 'Natural or harmonic minor', step: 'The raised 7th.', block: scale(['natural-minor', 'harmonic-minor'], 'asc', 'Natural or harmonic minor?') },
      { title: 'Three minors', step: 'Natural, harmonic, melodic.', block: scale(['natural-minor', 'harmonic-minor', 'melodic-minor'], 'asc', 'Which minor scale?') },
      { title: 'Major or pentatonic', step: 'Five notes vs seven.', block: scale(['major', 'major-pentatonic'], 'asc-desc', 'Major scale or major pentatonic?') },
      { title: 'Minor pentatonic or blues', step: 'The blue note.', block: scale(['minor-pentatonic', 'blues'], 'asc-desc', 'Minor pentatonic or blues scale?') },
      { title: 'Major or Mixolydian', step: 'The b7, on the same root.', block: scale(['major', 'mixolydian'], 'asc-desc', 'Major, or Mixolydian (flat 7)?') },
      { title: 'Minor or Dorian', step: 'The raised 6, on the same root.', block: scale(['natural-minor', 'dorian'], 'asc-desc', 'Natural minor, or Dorian (raised 6)?') },
      { title: 'Major or Lydian', step: 'The #4.', block: scale(['major', 'lydian'], 'asc-desc', 'Major, or Lydian (sharp 4)?') },
      { title: 'Minor or Phrygian', step: 'The b2.', block: scale(['natural-minor', 'phrygian'], 'asc-desc', 'Natural minor, or Phrygian (flat 2)?') },
      { title: 'Four scales', step: 'Major, minor, Dorian, Mixolydian.', block: scale(['major', 'natural-minor', 'dorian', 'mixolydian'], 'asc-desc', 'Which scale?') },
      { title: 'Six scales', step: 'Lydian and Phrygian join.', block: scale(['major', 'natural-minor', 'dorian', 'mixolydian', 'lydian', 'phrygian'], 'asc-desc', 'Which scale?') },
      { title: 'Six modes as tunes', step: 'Melodies instead of scale runs.', block: scale(['major', 'natural-minor', 'dorian', 'mixolydian', 'lydian', 'phrygian'], 'melody', 'Which mode is this tune in?') },
    ],
  },
};

function build(skill: LadderSkill): Ladder {
  const d = DEFS[skill];
  return {
    skill, title: d.title, purpose: d.purpose,
    rungs: d.rungs.map((r, i) => {
      const id = `${skill}-${i + 1}`;
      return { id, skill, n: i + 1, title: r.title, step: r.step, how: methodOf(skill, r.title), block: { count: 10, passScore: 0.85, ...r.block, id, title: r.title } as ExerciseBlock };
    }),
  };
}

export const LADDERS: Record<LadderSkill, Ladder> = Object.fromEntries(LADDER_SKILLS.map((s) => [s, build(s)])) as Record<LadderSkill, Ladder>;

/** Pseudo lesson id under which ladder answers are recorded (exercise id = rung id). */
export const LADDER_LESSON_ID = 'ladder';

export function isLadderSkill(v: unknown): v is LadderSkill {
  return typeof v === 'string' && (LADDER_SKILLS as readonly string[]).includes(v);
}

export function getRung(id: string): Rung | undefined {
  const m = /^([a-z]+)-(\d+)$/.exec(id);
  if (!m || !isLadderSkill(m[1])) return undefined;
  return LADDERS[m[1]].rungs[Number(m[2]) - 1];
}

// ---- mastery ------------------------------------------------------------------------------------------------------

/** Rules: a rung is mastered after ≥85% of the last 20 first answers across ≥2 sessions (or ≥95% in one go); a learner
 * who already has the skill places out: the first 10 answers on a rung all correct master it at once. It is lost again
 * when the last 10 answers drop below 70%. */
export const MASTERY = { window: 20, need: 0.85, fast: 0.95, sessions: 2, dropWindow: 10, dropBelow: 0.7, placement: 10 } as const;

export interface RungResult {
  correct: boolean;
  session: number;
}

export interface RungStatus {
  attempts: number;
  /** Accuracy over the last `window` answers (null before any answer) */
  recent: number | null;
  mastered: boolean;
}

/** Replay the answer history of one rung, in order, and decide whether it is mastered now. */
export function rungStatus(results: RungResult[]): RungStatus {
  let mastered = false;
  for (let i = 0; i < results.length; i++) {
    const upto = results.slice(0, i + 1);
    if (!mastered) {
      if (upto.length === MASTERY.placement && upto.every((r) => r.correct)) {
        mastered = true;
        continue;
      }
      const w = upto.slice(-MASTERY.window);
      if (w.length < MASTERY.window) continue;
      const acc = w.filter((r) => r.correct).length / w.length;
      const sessions = new Set(w.map((r) => r.session)).size;
      if ((acc >= MASTERY.need && sessions >= MASTERY.sessions) || acc >= MASTERY.fast) mastered = true;
    } else {
      const w = upto.slice(-MASTERY.dropWindow);
      if (w.length >= MASTERY.dropWindow && w.filter((r) => r.correct).length / w.length < MASTERY.dropBelow) mastered = false;
    }
  }
  const w = results.slice(-MASTERY.window);
  return { attempts: results.length, recent: w.length ? w.filter((r) => r.correct).length / w.length : null, mastered };
}

export interface SkillState {
  skill: LadderSkill;
  /** Highest rung number unlocked by lessons (0 = none yet) */
  unlocked: number;
  /** Rung number the learner works on now: the lowest unlocked rung not mastered (null when nothing is unlocked) */
  current: number | null;
  /** All unlocked rungs mastered: practice reviews them */
  complete: boolean;
  /** How many unlocked rungs are not mastered yet */
  behind: number;
  rungs: (RungStatus & { id: string; n: number; title: string; step: string })[];
}

export interface LadderStateDTO {
  session: number;
  skills: SkillState[];
}

export function skillState(skill: LadderSkill, unlocked: number, results: Record<string, RungResult[]>): SkillState {
  const ladder = LADDERS[skill];
  const u = Math.max(0, Math.min(unlocked, ladder.rungs.length));
  const rungs = ladder.rungs.map((r) => ({ id: r.id, n: r.n, title: r.title, step: r.step, ...rungStatus(results[r.id] ?? []) }));
  const open = rungs.slice(0, u);
  const firstOpen = open.find((r) => !r.mastered);
  return {
    skill, unlocked: u,
    current: u === 0 ? null : (firstOpen?.n ?? u),
    complete: u > 0 && !firstOpen,
    behind: open.filter((r) => !r.mastered).length,
    rungs,
  };
}
