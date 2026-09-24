import { describe, expect, it } from 'vitest';
import {
  checkSeq, durationToTicks, parseSeq, parseSeqDetailed, snippetFromEnvelope, ticksToDurations, toSeq, PPQ,
  tickToPosition, positionToTick, ticksPerBar, quantizeTick, ticksToSeconds, RHYTHM_HIT_MIDI,
} from '../src/index.js';

describe('durations', () => {
  it('computes ticks at PPQ 480', () => {
    expect(durationToTicks('w')).toBe(1920);
    expect(durationToTicks('h')).toBe(960);
    expect(durationToTicks('q')).toBe(480);
    expect(durationToTicks('8')).toBe(240);
    expect(durationToTicks('16')).toBe(120);
    expect(durationToTicks('32')).toBe(60);
    expect(durationToTicks('q.')).toBe(720);
    expect(durationToTicks('h.')).toBe(1440);
    expect(durationToTicks('8t')).toBe(160);
    expect(durationToTicks('qt')).toBe(320);
    expect(() => durationToTicks('3')).toThrow();
  });
  it('splits ticks into tokens', () => {
    expect(ticksToDurations(480)).toEqual(['q']);
    expect(ticksToDurations(720)).toEqual(['q.']);
    expect(ticksToDurations(160)).toEqual(['8t']);
    expect(ticksToDurations(1200)).toEqual(['h', '8']);
    expect(ticksToDurations(1920 + 480)).toEqual(['w', 'q']);
  });
});

describe('parseSeq', () => {
  it('parses notes, rests and durations', () => {
    const ev = parseSeq('C4:q D4:q E4:h r:q G4:8');
    expect(ev.map((e) => [e.midi, e.startTick, e.durationTicks])).toEqual([
      [60, 0, 480], [62, 480, 480], [64, 960, 960], [67, 2400, 240],
    ]);
  });
  it('parses chords and ignores bar lines', () => {
    const ev = parseSeq('| [C4 E4 G4]:w | [F4 A4 C5]:h. G4:q |');
    expect(ev.filter((e) => e.startTick === 0).map((e) => e.midi)).toEqual([60, 64, 67]);
    expect(ev.filter((e) => e.startTick === 1920).map((e) => e.midi)).toEqual([65, 69, 72]);
    expect(ev.find((e) => e.midi === 67 && e.startTick === 3360)?.durationTicks).toBe(480);
  });
  it('merges ties', () => {
    const ev = parseSeq('C4:q~ C4:q D4:h');
    expect(ev).toHaveLength(2);
    expect(ev[0]).toMatchObject({ midi: 60, startTick: 0, durationTicks: 960 });
    const chordTie = parseSeq('[C4 E4]:h~ [C4 E4]:q');
    expect(chordTie.map((e) => e.durationTicks)).toEqual([1440, 1440]);
    const d = parseSeqDetailed('C4:q~ C4:q');
    expect(d.items).toHaveLength(2);
    expect(d.items[0]!.tie).toBe(true);
  });
  it('handles triplets and dotted notes', () => {
    const d = parseSeqDetailed('C4:8t D4:8t E4:8t F4:q.');
    expect(d.items.map((i) => i.startTick)).toEqual([0, 160, 320, 480]);
    expect(d.totalTicks).toBe(1200);
  });
  it('parses drum names and generic hits', () => {
    const ev = parseSeq('kick:q snare:q hh:8 hh:8 ohat:8 clap:8 tom:q ride:q crash:q x:q');
    expect(ev.map((e) => e.midi)).toEqual([36, 38, 42, 42, 46, 39, 45, 51, 49, RHYTHM_HIT_MIDI]);
    const d = parseSeqDetailed('kick:q x:q');
    expect(d.items.map((i) => i.kind)).toEqual(['drum', 'hit']);
  });
  it('supports accents', () => {
    const ev = parseSeq('>kick:q hh:q >[C4 E4]:h');
    expect(ev.map((e) => e.velocity)).toEqual([1, 0.8, 1, 1]);
    expect(parseSeqDetailed('>C4:q D4:q').items.map((i) => i.accent)).toEqual([true, false]);
    expect(toSeq(ev, { drums: true })).toBe('>kick:q hh:q >[C4 E4]:h');
  });
  it('reuses the previous duration when omitted', () => {
    const ev = parseSeq('C4:8 D4 E4 F4:q G4');
    expect(ev.map((e) => e.durationTicks)).toEqual([240, 240, 240, 480, 480]);
  });
  it('reports bars for the time signature', () => {
    expect(parseSeqDetailed('C4:h. D4:h.', { timeSig: '3/4' }).bars).toBe(2);
    expect(parseSeqDetailed('C4:w C4:w').bars).toBe(2);
  });
  it('reports errors with position', () => {
    expect(checkSeq('C4:q D4:x')).toMatch(/Invalid duration/);
    expect(checkSeq('C4:q H4:q')).toMatch(/Unknown note/);
    expect(checkSeq('[C4 E4:q')).toMatch(/Unclosed/);
    expect(checkSeq('r:q~ C4:q')).toMatch(/Rests/);
    expect(checkSeq('C4:q | D4:q |')).toBeNull();
  });
});

describe('toSeq round-trips', () => {
  const cases = [
    'C4:q D4:q E4:q F4:q G4:q A4:q B4:q C5:q',
    'C4:h r:q E4:q',
    '[C4 E4 G4]:w [F4 A4 C5]:h [G4 B4 D5]:h',
    'C4:8t D4:8t E4:8t F4:q. G4:8',
    'C4:16 D4:16 E4:8 F#4:q Bb4:h',
    'A3:w~ A3:q r:h.',
  ];
  for (const s of cases) {
    it(s, () => {
      const ev = parseSeq(s);
      const back = toSeq(ev);
      expect(parseSeq(back)).toEqual(ev);
    });
  }
  it('uses flats, drums and rhythm options', () => {
    expect(toSeq(parseSeq('Bb4:q Eb4:q'), { flats: true })).toBe('Bb4:q Eb4:q');
    expect(toSeq(parseSeq('kick:q snare:q hh:8 hh:8'), { drums: true })).toBe('kick:q snare:q hh:8 hh:8');
    expect(toSeq(parseSeq('x:q x:8 x:8 r:q x:q'), { rhythm: true })).toBe('x:q x:8 x:8 r:q x:q');
    expect(toSeq(parseSeq('C4:w D4:w'), { timeSig: '4/4' })).toBe('C4:w | D4:w');
  });
});

describe('rhythm helpers & envelopes', () => {
  it('positions', () => {
    const ts = { num: 4, den: 4 };
    expect(ticksPerBar(ts)).toBe(1920);
    expect(ticksPerBar({ num: 6, den: 8 })).toBe(1440);
    expect(tickToPosition(1920 + 480 + 10, ts)).toEqual({ bar: 2, beat: 2, tick: 10 });
    expect(positionToTick({ bar: 2, beat: 2, tick: 10 }, ts)).toBe(2410);
    expect(quantizeTick(250, 240)).toBe(240);
    expect(quantizeTick(300, 240, 0.5)).toBe(270);
    expect(ticksToSeconds(PPQ, 120)).toBeCloseTo(0.5);
  });
  it('builds snippets from envelopes', () => {
    const s = snippetFromEnvelope({ bpm: 100, timeSig: '3/4', tracks: [{ instrument: 'piano', seq: 'C4:q E4:q G4:q' }, { instrument: 'drums', seq: 'kick:h.' }] });
    expect(s.timeSig).toEqual({ num: 3, den: 4 });
    expect(s.tracks[0]!.events).toHaveLength(3);
    expect(s.tracks[1]!.events[0]!.midi).toBe(36);
  });
});
