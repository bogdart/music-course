import { describe, expect, it } from 'vitest';
import { generateSet, LADDERS, LADDER_SKILLS, getRung, rungStatus, skillState, MASTERY, type RungResult } from '../src/index.js';

describe('ladders', () => {
  it('every rung generates a full set', () => {
    for (const s of LADDER_SKILLS) {
      for (const r of LADDERS[s].rungs) {
        const set = generateSet(r.block, 42);
        expect(set.items.length, r.id).toBeGreaterThan(0);
        expect(getRung(r.id)).toBe(r);
      }
    }
  });
  it('mastery needs the window across two sessions, or near-perfect in one', () => {
    const run = (n: number, correct: (i: number) => boolean, session: (i: number) => number): RungResult[] =>
      Array.from({ length: n }, (_, i) => ({ correct: correct(i), session: session(i) }));
    expect(rungStatus(run(19, () => true, () => 1)).mastered).toBe(false);
    expect(rungStatus(run(20, () => true, () => 1)).mastered).toBe(true); // 100% ≥ fast
    expect(rungStatus(run(20, (i) => i % 10 !== 0, () => 1)).mastered).toBe(false); // 90%, one session
    expect(rungStatus(run(20, (i) => i % 10 !== 0, (i) => (i < 10 ? 1 : 2))).mastered).toBe(true); // 90%, two sessions
    const lost = [...run(20, () => true, () => 1), ...run(10, (i) => i < 6, () => 2)]; // then 60%
    expect(rungStatus(lost).mastered).toBe(false);
    const kept = [...run(20, () => true, () => 1), ...run(10, (i) => i < 7, () => 2)]; // 70% keeps it
    expect(rungStatus(kept).mastered).toBe(true);
    expect(MASTERY.window).toBe(20);
  });
  it('current rung = lowest unlocked rung not mastered', () => {
    const perfect = Array.from({ length: 20 }, () => ({ correct: true, session: 1 }));
    expect(skillState('octave', 0, {})).toMatchObject({ current: null, complete: false });
    expect(skillState('octave', 3, {})).toMatchObject({ current: 1, behind: 3 });
    expect(skillState('octave', 3, { 'octave-1': perfect })).toMatchObject({ current: 2, behind: 2 });
    expect(skillState('octave', 2, { 'octave-1': perfect, 'octave-2': perfect })).toMatchObject({ current: 2, complete: true, behind: 0 });
  });
});

import { resolutionPath } from '../src/exercises/util.js';
import { progressionSnippet, voiceProgression } from '../src/exercises/harmony.js';

describe('walk home and band mixes', () => {
  it('degrees 1–5 fall to 1, 6 and 7 rise to the upper 1', () => {
    expect(resolutionPath(60, 60)).toEqual([60]);
    expect(resolutionPath(64, 60)).toEqual([64, 62, 60]);
    expect(resolutionPath(67, 60)).toEqual([67, 65, 64, 62, 60]);
    expect(resolutionPath(69, 60)).toEqual([69, 71, 72]);
    expect(resolutionPath(71, 60)).toEqual([71, 72]);
    expect(resolutionPath(70, 60)).toEqual([70, 71, 72]); // chromatic b7 steps to 7 first
    expect(resolutionPath(63, 60, 'minor')).toEqual([63, 62, 60]);
  });
  it('band style: pad, bass, drums and a lead', () => {
    const snip = progressionSnippet(voiceProgression(['I', 'IV'], 'C', 'major'), { style: 'band' });
    expect(snip.tracks.map((t) => t.instrument)).toEqual(['pad', 'bass', 'drums', 'lead']);
    const bass = snip.tracks[1]!.events;
    expect(bass.every((e) => e.midi < 48)).toBe(true);
    expect(bass[0]!.midi % 12).toBe(0);
  });
});

import { evaluate as evalItem } from '../src/index.js';
describe('play-chord slash chords', () => {
  it('C/A: the non-chord-tone bass is required and allowed', () => {
    const item = generateSet({ id: 'p', type: 'play-chord', spec: { chords: ['C/A'] } } as never, 1).items[0]!;
    expect(evalItem(item, [45, 60, 64, 67]).correct).toBe(true); // A2 C4 E4 G4
    expect(evalItem(item, [48, 52, 55]).correct).toBe(false); // plain C
  });
});

describe('roman-analysis palette', () => {
  it('chromatic answers come with decoys; palette:"chromatic" offers them even for diatonic answers', () => {
    const chrom = generateSet({ id: 'r', type: 'roman-analysis', spec: { key: 'C', chords: ['C', 'A7', 'Dm', 'G'] } } as never, 1).items[0] as { palette: { value: string }[] };
    const vals = chrom.palette.map((p) => p.value);
    expect(vals).toContain('V/ii');
    expect(vals).toContain('V/V');
    const diat = generateSet({ id: 'r', type: 'roman-analysis', spec: { key: 'C', chords: ['C', 'F', 'G'] } } as never, 1).items[0] as { palette: { value: string }[] };
    expect(diat.palette.map((p) => p.value)).not.toContain('V/V');
    const forced = generateSet({ id: 'r', type: 'roman-analysis', spec: { key: 'C', chords: ['C', 'F', 'G'], palette: 'chromatic' } } as never, 1).items[0] as { palette: { value: string }[] };
    expect(forced.palette.map((p) => p.value)).toContain('bVII');
  });
});
