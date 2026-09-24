import { describe, expect, it } from 'vitest';
import {
  chordStampMidis, createProject, exportMidi, generateSet, importMidi, normalizeProject, parseMidi, projectBars,
  projectFromEnvelope, quantizeNotes, runCheck, runChecks, taskChecks, trackNotes, evaluate, isImplemented,
  type DawCheckSpec, type ExerciseBlock, type InstrumentId, type Project,
} from '../src/index.js';

type T = { instrument: InstrumentId; seq: string };
const proj = (tracks: T[], extra: { key?: string; timeSig?: string; bpm?: number } = {}): Project =>
  projectFromEnvelope({ bpm: extra.bpm ?? 100, key: extra.key ?? 'C', ...(extra.timeSig ? { timeSig: extra.timeSig } : {}), tracks });
const mel = (seq: string, extra?: { key?: string; timeSig?: string; bpm?: number }) => proj([{ instrument: 'piano', seq }], extra);
const check = (p: Project, c: DawCheckSpec, ctx = {}) => runCheck(p, c, 0, ctx);
const pass = (p: Project, c: DawCheckSpec, ctx = {}) => expect(check(p, c, ctx).passed, check(p, c, ctx).message).toBe(true);
const fail = (p: Project, c: DawCheckSpec, ctx = {}) => expect(check(p, c, ctx).passed, check(p, c, ctx).message).toBe(false);

describe('project utils', () => {
  it('builds a project from an envelope with minBars', () => {
    const p = projectFromEnvelope({ bpm: 90, key: 'G', timeSig: '3/4', tracks: [{ instrument: 'bass', seq: 'G2:h.' }] }, { minBars: 4 });
    expect(p.timeSig).toEqual({ num: 3, den: 4 });
    expect(p.tracks[0]!.clips[0]!.lengthTicks).toBe(4 * 3 * 480);
    expect(projectBars(p)).toBe(1);
  });
  it('normalises junk', () => {
    const p = normalizeProject({ bpm: 1000, tracks: [{ instrument: 'nope', clips: [{ notes: [{ midi: 200, startTick: 5 }] }] }], markers: [{ bar: 2, name: 'Chorus' }] });
    expect(p.bpm).toBe(400);
    expect(p.tracks[0]!.instrument).toBe('piano');
    expect(p.tracks[0]!.clips[0]!.notes[0]!.midi).toBe(127);
    expect(p.markers).toEqual([{ bar: 2, name: 'Chorus' }]);
  });
  it('trims notes outside clips and offsets clips', () => {
    const p = createProject({ tracks: [] });
    p.tracks.push({ id: 't', name: 't', instrument: 'piano', volume: 1, pan: 0, mute: false, solo: false, clips: [
      { id: 'c', name: 'c', startTick: 1920, lengthTicks: 960, notes: [{ midi: 60, startTick: 0, durationTicks: 480, velocity: 1 }, { midi: 62, startTick: 960, durationTicks: 480, velocity: 1 }] },
    ] });
    expect(trackNotes(p.tracks[0]!)).toEqual([{ midi: 60, startTick: 1920, durationTicks: 480, velocity: 1 }]);
  });
  it('quantizes with strength', () => {
    const n = [{ midi: 60, startTick: 100, durationTicks: 200, velocity: 1 }];
    expect(quantizeNotes(n, 120)[0]!.startTick).toBe(120);
    expect(quantizeNotes(n, 120, 0.5)[0]!.startTick).toBe(110);
  });
  it('stamps chords from symbols and numerals', () => {
    expect(chordStampMidis('Am')!.midis).toEqual([57, 60, 64]);
    expect(chordStampMidis('V7', 'C')!.midis).toEqual([55, 59, 62, 65]);
    expect(chordStampMidis('C/E')!.midis[0]! % 12).toBe(4);
    expect(chordStampMidis('xyz')).toBeNull();
  });
});

describe('MIDI export/import', () => {
  it('round-trips a project through SMF type 1', () => {
    const p = proj([
      { instrument: 'piano', seq: 'C4:q E4:8 G4:8 [C4 E4 G4]:h' },
      { instrument: 'bass', seq: 'C2:w' },
      { instrument: 'drums', seq: 'kick:q snare:q kick:q snare:q' },
    ], { bpm: 123, key: 'Am', timeSig: '3/4' });
    p.markers = [{ bar: 1, name: 'Intro' }];
    const bytes = exportMidi(p);
    const f = parseMidi(bytes);
    expect(f.format).toBe(1);
    expect(f.division).toBe(480);
    expect(f.tracks).toHaveLength(4);
    expect(Math.round(f.bpm!)).toBe(123);
    expect(f.timeSig).toEqual({ num: 3, den: 4 });
    expect(f.keySig).toEqual({ sf: 0, minor: true });
    expect(f.markers[0]!.text).toBe('Intro');
    expect(f.tracks[3]!.notes.every((n) => n.channel === 9)).toBe(true);
    expect(f.tracks[2]!.programs[1]).toBe(33);
    const q = importMidi(bytes);
    expect(q.tracks.map((t) => t.instrument)).toEqual(['piano', 'bass', 'drums']);
    expect(q.key).toBe('Am');
    expect(q.markers).toEqual([{ bar: 1, name: 'Intro' }]);
    for (let i = 0; i < 3; i++) {
      const a = trackNotes(p.tracks[i]!).map(({ midi, startTick, durationTicks }) => ({ midi, startTick, durationTicks }));
      const b = trackNotes(q.tracks[i]!).map(({ midi, startTick, durationTicks }) => ({ midi, startTick, durationTicks }));
      expect(b).toEqual(a);
    }
  });
  it('rescales other divisions and handles running status', () => {
    // format 0, division 96, one note C4 quarter with running status note-off (velocity 0)
    const bytes = Uint8Array.from([
      0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0, 96,
      0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, 12, 0x00, 0x90, 60, 100, 96, 60, 0, 0x00, 0xff, 0x2f, 0x00, 0x00,
    ]);
    const q = importMidi(bytes);
    expect(trackNotes(q.tracks[0]!)[0]).toMatchObject({ midi: 60, startTick: 0, durationTicks: 480 });
  });
  it('rejects non-MIDI data', () => {
    expect(() => parseMidi(Uint8Array.from([1, 2, 3, 4]))).toThrow();
  });
});

describe('daw-task predicates', () => {
  it('in-key (incl. passing notes and "project" key)', () => {
    pass(mel('C4 D4 E4 F4 G4'), { kind: 'in-key', key: 'C', scale: 'major' });
    fail(mel('C4 D4 Eb4 F4'), { kind: 'in-key', key: 'C', scale: 'major' });
    pass(mel('C4:q C#4:8 D4:q'), { kind: 'in-key', key: 'C', scale: 'major', allowPassing: true });
    fail(mel('C4:q F#4:h A4:q'), { kind: 'in-key', key: 'C', scale: 'major', allowPassing: true });
    pass(mel('A3 B3 C4 D4 E4', { key: 'Am' }), { kind: 'in-key', key: 'project' });
    fail(mel('A3 B3 C#4', { key: 'Am' }), { kind: 'in-key', key: 'project' });
    pass(mel('A3 C4 D4 Eb4 E4 G4'), { kind: 'in-key', key: 'A', scale: 'blues' });
    fail(mel(''), { kind: 'in-key', key: 'C' });
  });
  it('per-predicate track', () => {
    const p = proj([{ instrument: 'piano', seq: 'C4 D4' }, { instrument: 'lead', seq: 'F#4 G4' }]);
    pass(p, { kind: 'in-key', key: 'C', track: 0 });
    fail(p, { kind: 'in-key', key: 'C', track: 1 });
    pass(p, { kind: 'in-key', key: 'G', track: 1 });
    fail(p, { kind: 'in-key', key: 'C', track: 5 });
  });
  it('note-count, range, bars', () => {
    pass(mel('C4 D4 E4 F4'), { kind: 'note-count', min: 4, max: 4 });
    fail(mel('C4 D4 E4'), { kind: 'note-count', min: 4 });
    fail(mel('C4 D4 E4 F4 G4'), { kind: 'note-count', min: 1, max: 4 });
    pass(mel('C4 G4 C5'), { kind: 'range', low: 'C4', high: 'C5' });
    fail(mel('B3 G4'), { kind: 'range', low: 'C4', high: 'C5' });
    pass(mel('C4:w D4:w'), { kind: 'bars', min: 2, max: 2 });
    fail(mel('C4:w D4:w E4:q'), { kind: 'bars', min: 2, max: 2 });
    fail(mel('C4:w'), { kind: 'bars', min: 2 });
    // slightly held past the bar line still counts as 1 bar
    const p = mel('C4:w');
    p.tracks[0]!.clips[0]!.lengthTicks = 3840;
    p.tracks[0]!.clips[0]!.notes[0]!.durationTicks = 1940;
    pass(p, { kind: 'bars', min: 1, max: 1 });
  });
  it('ends-on / starts-on', () => {
    pass(mel('E4 D4 C4'), { kind: 'ends-on', degree: 1 });
    fail(mel('E4 D4 G4'), { kind: 'ends-on', degree: 1 });
    pass(mel('B3 D4 G4', { key: 'G' }), { kind: 'ends-on', degree: 1 });
    pass(mel('E4 D4 C4 [G3 D4]'), { kind: 'ends-on', degree: 5 });
    pass(mel('E4 D4 C4'), { kind: 'starts-on', degrees: [1, 3, 5] });
    fail(mel('D4 C4'), { kind: 'starts-on', degrees: [1, 3, 5] });
    pass(mel('Eb4 D4 C4'), { kind: 'starts-on', degrees: ['b3'] });
  });
  it('chord-tones-on-beats (progression loops)', () => {
    // I V vi IV with chord tones on beats 1 and 3, then loops I again in bar 5
    const seq = 'C4:h E4:h | D4:h G4:h | A4:h C5:h | F4:h A4:h | E4:h G4:h';
    pass(mel(seq), { kind: 'chord-tones-on-beats', beats: [1, 3], progression: ['I', 'V', 'vi', 'IV'], barsPerChord: 1, minRatio: 1 });
    fail(mel('D4:h F4:h | C4:h E4:h'), { kind: 'chord-tones-on-beats', beats: [1, 3], progression: ['I', 'V'], barsPerChord: 1, minRatio: 0.75 });
    pass(mel('C4:w | E4:w | B3:w | D4:w'), { kind: 'chord-tones-on-beats', beats: [1], progression: ['I', 'V'], barsPerChord: 2, minRatio: 1 });
  });
  it('uses-rhythm incl. dotted and triplets', () => {
    pass(mel('C4:q D4:8 E4:8 F4:h'), { kind: 'uses-rhythm', values: ['q', '8', 'h'], minDistinct: 3 });
    fail(mel('C4:q D4:q E4:q F4:q'), { kind: 'uses-rhythm', values: ['8', 'h'], minDistinct: 1 });
    pass(mel('C4:q. D4:8 E4:h'), { kind: 'uses-rhythm', values: ['q.', '8.'], minDistinct: 1 });
    pass(mel('C4:8t D4:8t E4:8t F4:q'), { kind: 'uses-rhythm', values: ['8t'], minDistinct: 1 });
    pass(proj([{ instrument: 'drums', seq: 'hh:16 hh:16 hh:32 hh:32 hh:8' }]), { kind: 'uses-rhythm', values: ['16', '32'], minDistinct: 2, track: 0 });
  });
  it('max-leap / min-leap', () => {
    pass(mel('C4 E4 G4 E4'), { kind: 'max-leap', semitones: 4 });
    fail(mel('C4 A4'), { kind: 'max-leap', semitones: 7 });
    pass(mel('C4 G4 F4'), { kind: 'min-leap', semitones: 7 });
    fail(mel('C4 D4 E4'), { kind: 'min-leap', semitones: 5 });
  });
  it('has-tracks (needs notes, counts duplicates)', () => {
    const p = proj([{ instrument: 'drums', seq: 'kick:q' }, { instrument: 'bass', seq: 'C2' }, { instrument: 'piano', seq: '' }]);
    pass(p, { kind: 'has-tracks', instruments: ['drums', 'bass'] });
    fail(p, { kind: 'has-tracks', instruments: ['drums', 'bass', 'piano'] });
    fail(p, { kind: 'has-tracks', instruments: ['bass', 'bass'] });
  });
  it('drum-pattern', () => {
    const rock = proj([{ instrument: 'drums', seq: '[kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8' }]);
    pass(rock, { kind: 'drum-pattern', requires: ['kick', 'snare', 'hihat'], kickOnBeats: [1, 3], snareOnBeats: [2, 4], hatOn: '8' });
    fail(rock, { kind: 'drum-pattern', requires: ['kick', 'clap'] });
    fail(rock, { kind: 'drum-pattern', requires: [], hatOn: '16' });
    fail(rock, { kind: 'drum-pattern', requires: [], clapOn: [2, 4] }); // clap is not snare
    pass(rock, { kind: 'drum-pattern', requires: [], kickOnBeats: [1, 3], mode: 'exact' });
    fail(rock, { kind: 'drum-pattern', requires: [], kickOnBeats: [1], mode: 'exact' });
    fail(rock, { kind: 'drum-pattern', requires: [], forbid: { snare: [2, 4] } });
    pass(rock, { kind: 'drum-pattern', requires: [], forbid: { snare: [1, 3] } });
    const trap = proj([{ instrument: 'drums', seq: 'kick:h clap:h | kick:q kick:q clap:h' }]);
    pass(trap, { kind: 'drum-pattern', requires: ['kick', 'clap'], clapOn: [3], track: 0 });
    pass(trap, { kind: 'drum-pattern', requires: [], kickOnBeats: [1, 2], bars: [2, 2] });
    fail(trap, { kind: 'drum-pattern', requires: [], kickOnBeats: [1, 2], bars: [1, 2], minRatio: 1 });
    fail(mel('C4'), { kind: 'drum-pattern', requires: ['kick'] });
  });
  it('no-parallel-fifths', () => {
    const bad = proj([{ instrument: 'piano', seq: 'G4:h A4:h' }, { instrument: 'bass', seq: 'C4:h D4:h' }]);
    fail(bad, { kind: 'no-parallel-fifths', tracks: [0, 1] });
    const good = proj([{ instrument: 'piano', seq: 'G4:h F4:h' }, { instrument: 'bass', seq: 'C4:h D4:h' }]);
    pass(good, { kind: 'no-parallel-fifths', tracks: [0, 1] });
  });
  it('repetition (with and without transposition)', () => {
    pass(mel('C4 D4 E4 C4 | C4 D4 E4 C4 | G4:w'), { kind: 'repetition', motifBars: 1, minRepeats: 2, allowTransposed: false });
    fail(mel('C4 D4 E4 C4 | D4 E4 F#4 D4 | G4:w'), { kind: 'repetition', motifBars: 1, minRepeats: 2, allowTransposed: false });
    pass(mel('C4 D4 E4 C4 | D4 E4 F#4 D4 | G4:w'), { kind: 'repetition', motifBars: 1, minRepeats: 2, allowTransposed: true });
  });
  it('contour', () => {
    pass(mel('C4 D4 E4 G4 A4 C5'), { kind: 'contour', shape: 'ascending' });
    fail(mel('C5 A4 G4 E4 C4'), { kind: 'contour', shape: 'ascending' });
    pass(mel('C5 A4 G4 E4 C4'), { kind: 'contour', shape: 'descending' });
    pass(mel('C4 E4 G4 C5 A4 F4 D4'), { kind: 'contour', shape: 'arch' });
    fail(mel('C4 E4 G4 C5'), { kind: 'contour', shape: 'arch' });
    pass(mel('C4 E4 C4 E4 C4 E4'), { kind: 'contour', shape: 'wave' });
    pass(mel('C5 G4 C4 E4 A4'), { kind: 'contour', shape: 'valley' });
  });
  it('custom (self-check)', () => {
    const c = { kind: 'custom', id: 'feel', note: 'It grooves' };
    const r = check(mel('C4'), c);
    expect(r.custom).toBe(true);
    expect(r.passed).toBe(false);
    expect(check(mel('C4'), c, { selfChecks: { feel: true } }).passed).toBe(true);
  });
  it('has-rest', () => {
    pass(mel('C4:q r:q D4:h'), { kind: 'has-rest' });
    pass(mel('C4:h D4:q'), { kind: 'has-rest' }); // trailing rest to bar end
    fail(mel('C4:q D4:q E4:h'), { kind: 'has-rest' });
  });
  it('plays-progression (chords and roots)', () => {
    const pads = proj([{ instrument: 'pad', seq: '[C4 E4 G4]:w [G3 B3 D4]:w [A3 C4 E4]:w [F3 A3 C4]:w' }]);
    pass(pads, { kind: 'plays-progression', progression: ['I', 'V', 'vi', 'IV'], track: 0, minRatio: 1 });
    fail(pads, { kind: 'plays-progression', progression: ['I', 'IV', 'V', 'I'], track: 0, minRatio: 1 });
    const bass = proj([{ instrument: 'bass', seq: 'C2:h G2:h G2:h D3:h A2:h E2:h F2:w' }]);
    pass(bass, { kind: 'plays-progression', progression: ['I', 'V', 'vi', 'IV'], track: 0, minRatio: 1 });
    // too short: only half the progression present
    fail(proj([{ instrument: 'pad', seq: '[C4 E4 G4]:w [G3 B3 D4]:w' }]), { kind: 'plays-progression', progression: ['I', 'V', 'vi', 'IV'], minRatio: 1 });
  });
  it('is-transposition (with time offset)', () => {
    const p = proj([{ instrument: 'piano', seq: 'C4 D4 E4 C4' }, { instrument: 'lead', seq: 'r:w G4:q A4 B4 G4' }]);
    pass(p, { kind: 'is-transposition', of: 0, track: 1 });
    pass(p, { kind: 'is-transposition', of: 0, track: 1, semitones: 7 });
    fail(p, { kind: 'is-transposition', of: 0, track: 1, semitones: 5 });
    fail(proj([{ instrument: 'piano', seq: 'C4 D4 E4 C4' }, { instrument: 'lead', seq: 'G4 A4 A4 G4' }]), { kind: 'is-transposition', of: 0, track: 1 });
    fail(proj([{ instrument: 'piano', seq: 'C4 D4' }, { instrument: 'lead', seq: 'C4 D4' }]), { kind: 'is-transposition', of: 0, track: 1 });
  });
  it('voice-leading', () => {
    pass(mel('[C4 E4 G4]:w [B3 D4 G4]:w [C4 E4 G4]:w'), { kind: 'voice-leading', maxMove: 2 });
    fail(mel('[C4 E4 G4]:w [G4 B4 D5]:w'), { kind: 'voice-leading', maxMove: 2 });
  });
  it('chord-has-seventh / uses-chord', () => {
    pass(mel('[C4 E4 G4 B4]:w'), { kind: 'chord-has-seventh' });
    pass(mel('[G3 B3 D4 F4]:w'), { kind: 'chord-has-seventh' });
    fail(mel('[C4 E4 G4]:w'), { kind: 'chord-has-seventh' });
    pass(mel('[C4 E4 G4]:w [F4 Ab4 C5]:w'), { kind: 'uses-chord', roman: 'iv', key: 'C' });
    fail(mel('[C4 E4 G4]:w [F4 A4 C5]:w'), { kind: 'uses-chord', roman: 'iv', key: 'C' });
    // chord split across bass + pad tracks
    pass(proj([{ instrument: 'pad', seq: '[Ab3 C4]:w' }, { instrument: 'bass', seq: 'F2:w' }]), { kind: 'uses-chord', roman: 'iv' });
    pass(mel('[Bb3 D4 F4]:w'), { kind: 'uses-chord', roman: 'bVII' });
  });
  it('tempo / syncopation / duration-seconds', () => {
    pass(mel('C4', { bpm: 120 }), { kind: 'tempo', min: 110, max: 130 });
    fail(mel('C4', { bpm: 90 }), { kind: 'tempo', min: 110 });
    pass(mel('C4:8 D4:q E4:q F4:q G4:8'), { kind: 'syncopation', minOffbeatRatio: 0.3 });
    fail(mel('C4:q D4:q E4:q F4:q'), { kind: 'syncopation' });
    // 8 bars of 4/4 at 120 bpm = 16 s
    pass(mel('C4:w | C4:w | C4:w | C4:w | C4:w | C4:w | C4:w | C4:w', { bpm: 120 }), { kind: 'duration-seconds', min: 15, max: 17 });
    fail(mel('C4:w', { bpm: 120 }), { kind: 'duration-seconds', min: 15 });
  });
  it('matches-reference', () => {
    const reference = { bpm: 100, tracks: [{ instrument: 'piano' as const, seq: 'C4 E4 G4 C5' }, { instrument: 'drums' as const, seq: 'kick snare kick snare' }] };
    const p = proj([{ instrument: 'piano', seq: 'C5 E4 G3 C5' }, { instrument: 'drums', seq: 'kick snare kick snare' }]);
    pass(p, { kind: 'matches-reference', reference, minSimilarity: 0.9 }); // pitch-class based
    fail(p, { kind: 'matches-reference', reference, minSimilarity: 0.9, octave: 'exact' });
    pass(p, { kind: 'matches-reference', reference, track: 1, refTrack: 1, minSimilarity: 1 });
    const wrong = proj([{ instrument: 'piano', seq: 'D4 F#4 A4 D5' }]);
    fail(wrong, { kind: 'matches-reference', reference, track: 0, minSimilarity: 0.5 });
    pass(wrong, { kind: 'matches-reference', reference, track: 0, minSimilarity: 0.9, transpose: true });
    const r = check(p, { kind: 'matches-reference', reference });
    expect(r.value).toBeGreaterThan(0.9);
  });
  it('sections', () => {
    const p = mel('C4');
    fail(p, { kind: 'sections', names: ['Verse', 'Chorus'] });
    p.markers = [{ bar: 1, name: 'Verse 1' }, { bar: 9, name: 'Chorus' }];
    pass(p, { kind: 'sections', names: ['verse', 'chorus'] });
    fail(p, { kind: 'sections', min: 3 });
  });
  it('unknown kinds fail gracefully', () => {
    expect(check(mel('C4'), { kind: 'nope' }).passed).toBe(false);
  });
});

describe('every check kind used in content is implemented', () => {
  it('covers the catalogue', async () => {
    const { CHECK_KINDS } = await import('../src/daw/checks.js');
    for (const k of ['in-key', 'note-count', 'range', 'bars', 'ends-on', 'starts-on', 'chord-tones-on-beats', 'uses-rhythm', 'max-leap',
      'has-tracks', 'drum-pattern', 'no-parallel-fifths', 'repetition', 'contour', 'custom', 'has-rest', 'min-leap', 'plays-progression',
      'is-transposition', 'voice-leading', 'chord-has-seventh', 'uses-chord', 'tempo', 'syncopation', 'matches-reference',
      'duration-seconds', 'sections']) expect(CHECK_KINDS).toContain(k);
  });
});

describe('daw-task exercise', () => {
  const block = {
    id: 'd1', type: 'daw-task',
    spec: {
      template: { bpm: 90, key: 'G', timeSig: '3/4', tracks: [{ instrument: 'piano', seq: '' }] },
      task: 'Write 2 bars in G ending on G.',
      checks: [{ kind: 'in-key', key: 'G', scale: 'major', track: 0 }, { kind: 'ends-on', degree: 1, track: 0 }, { kind: 'custom', id: 'sing', note: 'Sing it' }],
      minBars: 2, maxBars: 2, timerMin: 10, projectRef: 'w41-song',
    },
  } as unknown as ExerciseBlock;
  it('is registered and generates one item with the template', () => {
    expect(isImplemented('daw-task')).toBe(true);
    const { items } = generateSet(block, 1);
    expect(items).toHaveLength(1);
    const it0 = items[0] as unknown as { template: Project; checks: DawCheckSpec[]; timerMin: number; projectRef: string };
    expect(it0.template.timeSig).toEqual({ num: 3, den: 4 });
    expect(it0.template.tracks[0]!.clips[0]!.lengthTicks).toBe(2 * 1440);
    expect(it0.checks[0]!.kind).toBe('bars');
    expect(it0.timerMin).toBe(10);
    expect(it0.projectRef).toBe('w41-song');
  });
  it('evaluates score = passed/total with self-checks', () => {
    const item = generateSet(block, 1).items[0]!;
    const project = proj([{ instrument: 'piano', seq: 'B4:q A4:q G4:q | D4:q F#4:q G4:q' }], { key: 'G', timeSig: '3/4' });
    const r1 = evaluate(item, { project } as never);
    expect(r1.score).toBeCloseTo(3 / 4);
    expect(r1.correct).toBe(false);
    const r2 = evaluate(item, { project, selfChecks: { sing: true } } as never);
    expect(r2.correct).toBe(true);
    expect(r2.score).toBe(1);
    expect(evaluate(item, undefined as never).score).toBe(0);
  });
  it('taskChecks does not duplicate explicit bars', () => {
    expect(taskChecks({ checks: [{ kind: 'bars', min: 4 }], minBars: 4, maxBars: 4 })).toHaveLength(1);
    expect(runChecks(mel('C4'), []).score).toBe(1);
  });
});
