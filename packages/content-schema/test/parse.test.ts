import { describe, expect, it } from 'vitest';
import { parseLesson, parseGlossary, mergeGlossaries, glossaryIndex, lookupTerm, findInlineRefs, blockSchemas, curriculumSchema, formatIssues, specSchemas } from '../src/index.js';

const LESSON = `---
id: w03-l2-major-scale
title: The Major Scale
week: 3
order: 2
phase: p1
duration_min: 40
goals:
  - Build a major scale
prerequisites: [w03-l1-half-and-whole-steps]
tags: [scales]
extra_field: tolerated
---

# The major scale

A [[scale]] is a ladder. Play {{note:C4}} then {{chord:Cmaj7}}.

\`\`\`example
{ "title": "C major", "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["staff", "keyboard"], "loop": false }
\`\`\`

## Drill

\`\`\`exercise
{ "id": "e1", "type": "ear-note", "count": 8, "spec": { "key": "C", "degrees": [1, 2, 3], "reference": "cadence" } }
\`\`\`

\`\`\`keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "E4", "G4"], "labels": "names", "colors": { "C4": "root" } }
\`\`\`

\`\`\`staff
{ "clef": "treble", "key": "G", "timeSig": "3/4", "seq": "G4:q A4:q B4:q | D5:h. |" }
\`\`\`

\`\`\`chords
{ "key": "C", "bars": ["C", "Am", "F", "G7"], "roman": true, "play": true, "bpm": 80 }
\`\`\`

\`\`\`exercise
{ "id": "e2", "type": "quiz", "spec": { "questions": [ { "q": "Steps?", "choices": ["W-W-H", "H-H-W"], "answer": 0 } ] } }
\`\`\`

\`\`\`js
console.log('not a lesson block')
\`\`\`
`;

describe('parseLesson', () => {
  const l = parseLesson(LESSON, { id: 'w03-l2-major-scale' });
  it('parses front matter and body', () => {
    expect(l.problems).toEqual([]);
    expect(l.frontmatter).toMatchObject({ id: 'w03-l2-major-scale', week: 3, order: 2, extra_field: 'tolerated' });
    expect(l.body.startsWith('\n# The major scale')).toBe(true);
    expect(l.bodyLineOffset).toBe(13);
  });
  it('extracts blocks with line numbers', () => {
    expect(l.blocks.map((b) => b.lang)).toEqual(['example', 'exercise', 'keyboard', 'staff', 'chords', 'exercise']);
    expect(l.blocks.every((b) => b.valid)).toBe(true);
    expect(l.blocks[0]!.line).toBe(LESSON.split('\n').findIndex((x) => x === '```example') + 1);
    expect(l.exercises.map((e) => e.id)).toEqual(['e1', 'e2']);
  });
  it('builds sections and inline refs', () => {
    expect(l.sections.map((s) => [s.title, s.depth, s.blocks])).toEqual([['The major scale', 1, [0]], ['Drill', 2, [1, 2, 3, 4, 5]]]);
    expect(l.refs.terms.map((t) => t.term)).toEqual(['scale']);
    expect(l.refs.notes[0]!.note).toBe('C4');
    expect(l.refs.chords[0]!.chord).toBe('Cmaj7');
  });
  it('reports problems without throwing', () => {
    const bad = parseLesson(LESSON.replace('"degrees": [1, 2, 3]', '"degrees": [9]').replace('"seq": "G4:q A4:q', '"seq": "G4:q H4:q').replace('id: w03-l2-major-scale', 'id: w03-l2-other'), { id: 'w03-l2-major-scale' });
    expect(bad.problems.join('\n')).toMatch(/must equal folder name/);
    expect(bad.problems.join('\n')).toMatch(/spec\.degrees\[0\]/);
    expect(bad.problems.join('\n')).toMatch(/invalid seq/);
    expect(bad.exercises.map((e) => e.id)).toEqual(['e2']);
    const noFm = parseLesson('# hi');
    expect(noFm.problems[0]).toMatch(/missing front matter/);
    const badJson = parseLesson(LESSON.replace('"count": 8,', '"count": 8,,'));
    expect(badJson.problems.join()).toMatch(/invalid JSON/);
    const dup = parseLesson(LESSON.replace('"id": "e2"', '"id": "e1"'));
    expect(dup.problems.join()).toMatch(/duplicate exercise id/);
  });
  it('warns about unknown fields but accepts them', () => {
    const w = parseLesson(LESSON.replace('"count": 8,', '"count": 8, "fancy": 1,').replace('"reference": "cadence"', '"reference": "cadence", "newThing": true'));
    expect(w.problems).toEqual([]);
    expect(w.warnings.join('\n')).toMatch(/unknown field\(s\) fancy/);
    expect(w.warnings.join('\n')).toMatch(/unknown spec field\(s\) newThing/);
  });
  it('finds refs outside code fences only', () => {
    const r = findInlineRefs('see [[Interval|intervals]]\n```\n[[not]]\n```\n{{ note : F#3 }}');
    expect(r.terms.map((t) => t.term)).toEqual(['Interval']);
    expect(r.notes.map((n) => n.note)).toEqual(['F#3']);
  });
});

describe('schemas', () => {
  const ok = (lang: keyof typeof blockSchemas, data: unknown) => {
    const r = blockSchemas[lang].safeParse(data);
    return r.success ? [] : formatIssues(r.error);
  };
  it('validates every exercise type example from CONTENT_SCHEMA', () => {
    const examples: Record<string, unknown> = {
      'ear-note': { key: 'C', mode: 'major', degrees: [1, 2, 3, 4, 5], reference: 'cadence', octaves: [3, 4], instrument: 'piano' },
      'ear-octave': { notes: ['C', 'G'], octaves: [2, 3, 4, 5, 6], mode: 'same-or-different' },
      'ear-interval': { intervals: ['m2', 'M2', 'm3', 'M3', 'P4', 'TT', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8'], direction: 'asc', root: 'random', range: ['C3', 'C5'] },
      'ear-chord': { qualities: ['maj', 'min', 'dim', 'aug', 'maj7', 'min7', 'dom7', 'm7b5', 'sus2', 'sus4'], inversions: [0], voicing: 'close', range: ['C3', 'C5'] },
      'ear-chord-root': { qualities: ['maj', 'min'], answer: 'play', range: ['C3', 'C5'] },
      'ear-scale': { scales: ['major', 'natural-minor', 'harmonic-minor', 'melodic-minor', 'dorian', 'mixolydian', 'lydian', 'phrygian', 'locrian', 'major-pentatonic', 'minor-pentatonic', 'blues', 'whole-tone', 'diminished'], play: 'asc' },
      'ear-progression': { key: 'random', mode: 'major', length: 4, chords: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'V7', 'bVII', 'iv'], style: 'block' },
      'ear-melody': { key: 'C', degrees: [1, 2, 3, 5], length: 4, rhythm: 'quarters', answer: 'play' },
      'ear-rhythm': { timeSig: '4/4', bars: 1, subdivision: '8', rests: true, answer: 'tap' },
      'ear-bass': { key: 'C', chords: ['I', 'IV', 'V', 'vi'], answer: 'play' },
      'ear-tempo': { range: [60, 160], tolerance: 4 },
      'ear-meter': { meters: ['3/4', '4/4', '6/8'] },
      'play-notes': { prompt: 'names', notes: ['C4', 'E4', 'G4'], ordered: true, key: 'C' },
      'play-scale': { root: 'random', scale: 'major', octaves: 1, direction: 'asc-desc', hands: 'right', tempo: 60, metronome: true },
      'play-chord': { chords: ['C', 'G', 'Am', 'F'], inversion: 'any', sequence: true, bpm: 60 },
      'play-melody': { bpm: 80, timeSig: '4/4', key: 'C', seq: 'E4:q E4:q F4:q G4:q', showStaff: true, showKeyboard: true, countIn: 1, backing: { instrument: 'pad', seq: '[C3 E3 G3]:w' } },
      'rhythm-tap': { bpm: 90, timeSig: '4/4', seq: 'x:q x:8 x:8 r:q x:q', showNotation: true, countIn: 1, loops: 2 },
      'build-chord': { chords: ['Cmaj7', 'Dm', 'G7'], root: 'given', prompt: 'symbol', key: 'C' },
      'build-scale': { roots: ['C', 'G', 'D', 'F'], scale: 'major', prompt: 'name' },
      'build-interval': { intervals: ['M3', 'P5', 'm7'], direction: 'asc', root: 'random' },
      'read-note': { clef: 'treble', range: ['C4', 'G5'], accidentals: false, answer: 'play', timed: 0 },
      'read-rhythm': { timeSig: '4/4', bars: 1, subdivision: '8' },
      quiz: { questions: [{ q: 'How many half steps in a perfect fifth?', choices: ['5', '6', '7', '8'], answer: 2, explain: '...' }] },
      'quiz-input': { questions: [{ q: 'Name the 5th degree of D major', answer: ['A'], kind: 'note' }] },
      'key-signature': { keys: ['G', 'D', 'F', 'Bb'], prompt: 'staff', answer: 'name' },
      'roman-analysis': { key: 'G', chords: ['G', 'Em', 'C', 'D7'], prompt: 'symbols' },
      'daw-task': {
        template: { bpm: 100, key: 'C', tracks: [{ instrument: 'piano', seq: '' }] }, task: 'Write a 4-bar melody.', minBars: 4, maxBars: 4,
        checks: [
          { kind: 'in-key', key: 'C', scale: 'major', allowPassing: false }, { kind: 'note-count', min: 8, max: 32 },
          { kind: 'range', low: 'C4', high: 'C6' }, { kind: 'bars', min: 4, max: 8 }, { kind: 'ends-on', degree: 1 },
          { kind: 'starts-on', degrees: [1, 3, 5] },
          { kind: 'chord-tones-on-beats', beats: [1, 3], progression: ['I', 'V', 'vi', 'IV'], barsPerChord: 1, minRatio: 0.75 },
          { kind: 'uses-rhythm', values: ['8', 'q'], minDistinct: 2 }, { kind: 'max-leap', semitones: 7 },
          { kind: 'has-tracks', instruments: ['drums', 'bass', 'piano'] },
          { kind: 'drum-pattern', requires: ['kick', 'snare'], kickOnBeats: [1, 3], snareOnBeats: [2, 4] },
          { kind: 'no-parallel-fifths', tracks: [0, 1] }, { kind: 'repetition', motifBars: 1, minRepeats: 2, allowTransposed: true },
          { kind: 'contour', shape: 'arch' }, { kind: 'custom', id: 'x', note: 'self-check' },
        ],
      },
      listen: { example: { tracks: [{ instrument: 'piano', seq: 'C4:q' }] }, questions: [{ q: 'a?', choices: ['x', 'y'], answer: 1 }] },
      reflect: { prompt: 'Describe what you hear', minWords: 20 },
    };
    expect(Object.keys(examples).sort()).toEqual(Object.keys(specSchemas).sort());
    for (const [type, spec] of Object.entries(examples)) {
      expect([type, ok('exercise', { id: 'e1', type, count: 10, passScore: 0.8, srs: true, seed: 42, hints: ['h'], spec })]).toEqual([type, []]);
    }
  });
  it('is strict on ids and types', () => {
    expect(ok('exercise', { id: 'e1', type: 'ear-magic', spec: {} }).join()).toMatch(/type/);
    expect(ok('exercise', { id: 'e1', type: 'ear-interval', spec: { intervals: ['M9x'] } }).join()).toMatch(/interval id/);
    expect(ok('exercise', { id: 'e1', type: 'ear-chord', spec: { qualities: ['major'] } }).join()).toMatch(/chord quality/);
    expect(ok('exercise', { id: 'e1', type: 'ear-scale', spec: { scales: ['bebop'] } }).join()).toMatch(/scale/);
    expect(ok('exercise', { id: 'e1', type: 'ear-progression', spec: { chords: ['I', 'Q'] } }).join()).toMatch(/roman/);
    expect(ok('exercise', { id: 'e1', type: 'quiz', spec: { questions: [{ q: 'a', choices: ['x', 'y'], answer: 5 }] } }).join()).toMatch(/out of range/);
    expect(ok('exercise', { id: 'e1', type: 'ear-note', count: '3', spec: { key: 'C', degrees: [1] } }).join()).toMatch(/count/);
    expect(ok('example', { tracks: [{ instrument: 'banjo', seq: 'C4:q' }] }).join()).toMatch(/instrument/);
    expect(ok('keyboard', { range: ['C3', 'C5'], labels: 'degrees' }).join()).toMatch(/requires "key"/);
    expect(ok('staff', { clef: 'alto', seq: 'C4:q' }).join()).toMatch(/clef/);
    expect(ok('chords', { key: 'C', bars: ['C', 'Xm'] }).join()).toMatch(/invalid chord symbol/);
    expect(ok('chords', { key: 'C', bars: ['C G', '%', 'N.C.'] })).toEqual([]);
  });
  it('accepts the SCHEMA_GAPS additions', () => {
    const ex = (type: string, spec: object) => ok('exercise', { id: 'e', type, spec });
    expect(ex('ear-octave', { notes: ['C'], octaves: [3, 4], mode: 'higher-or-lower' })).toEqual([]);
    expect(ex('ear-interval', { intervals: ['P1', 'm9', 'M10'] })).toEqual([]);
    expect(ex('listen', { examples: [{ tracks: [{ instrument: 'piano', seq: '>C4:q' }], swing: 0.5 }] })).toEqual([]);
    expect(ex('listen', { questions: [] }).join()).toMatch(/example/);
    expect(ex('play-chord', { chords: ['C'], inversion: 1 })).toEqual([]);
    expect(ex('ear-rhythm', { subdivision: 'q', choices: 3 })).toEqual([]);
    expect(ex('daw-task', { task: 't', checks: [{ kind: 'uses-chord', roman: 'bVII' }, { kind: 'tempo', min: 80 }] })).toEqual([]);
  });
  it('validates curriculum.json', () => {
    expect(curriculumSchema.safeParse({ phases: [{ id: 'p1', title: 'F', weeks: [1, 8], goal: 'g' }], weeks: [{ week: 1, title: 't', lessons: ['w01-l1-welcome'] }] }).success).toBe(true);
    expect(curriculumSchema.safeParse({ phases: [], weeks: [] }).success).toBe(false);
    expect(curriculumSchema.safeParse({ phases: [{ id: 'p1', title: 'F', weeks: [1, 8], goal: 'g' }], weeks: [{ week: 1, title: 't', lessons: ['Welcome'] }] }).success).toBe(false);
  });
});

describe('glossary', () => {
  it('parses headings, aliases and one-line entries and merges fragments', () => {
    const a = parseGlossary(`# Glossary\n\n## Interval (intervals)\nThe distance between two notes.\n\n*Aliases: step size*\n\n### Octave\nSame letter, double frequency.\n`);
    const b = parseGlossary(`- **Tonic**: the home note.\n**Chord** — three or more notes together.\n\n## Octave\nDuplicate.\n`);
    expect(a.map((t) => t.term)).toEqual(['Interval', 'Octave']);
    expect(a[0]!.aliases).toEqual(['intervals', 'step size']);
    expect(a[0]!.definition).toBe('The distance between two notes.');
    expect(b.map((t) => t.term)).toEqual(['Tonic', 'Chord', 'Octave']);
    const merged = mergeGlossaries([a, b]);
    expect(merged.terms.map((t) => t.term)).toEqual(['Chord', 'Interval', 'Octave', 'Tonic']);
    expect(merged.duplicates).toEqual(['Octave']);
    const idx = glossaryIndex(merged.terms);
    expect(lookupTerm(idx, 'interval')?.term).toBe('Interval');
    expect(lookupTerm(idx, 'Intervals')?.term).toBe('Interval');
    expect(lookupTerm(idx, 'octaves')?.term).toBe('Octave');
    expect(lookupTerm(idx, 'step size')?.term).toBe('Interval');
    expect(lookupTerm(idx, 'nothing')).toBeUndefined();
  });
});

describe('reveal blocks', () => {
  const fm = '---\nid: w01-l1-x\ntitle: X\nweek: 1\norder: 1\nphase: p1\nduration_min: 30\ngoals: [g]\n---\n';
  it('validates inner blocks, refuses exercises inside, and keeps top-level block indexes', () => {
    const md = fm + '# A\n\n````reveal Show the answers\nThe loop is **I–V–vi–IV**.\n\n```chords\n{ "key": "C", "bars": ["C", "G", "Am", "F"] }\n```\n````\n\n```keyboard\n{ "range": ["C4", "C5"] }\n```\n';
    const l = parseLesson(md, { id: 'w01-l1-x' });
    expect(l.problems).toEqual([]);
    expect(l.blocks.map((b) => [b.lang, b.index])).toEqual([['keyboard', 0]]);
    const bad = parseLesson(fm + '````reveal X\n```exercise\n{ "id": "e1", "type": "quiz", "spec": { "questions": [] } }\n```\n````\n', { id: 'w01-l1-x' });
    expect(bad.problems.join()).toMatch(/cannot be inside a reveal/);
  });
});
