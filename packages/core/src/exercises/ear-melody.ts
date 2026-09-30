import { PPQ, type NoteEvent } from '../model.js';
import { midiToNote, pitchClass } from '../theory/notes.js';
import { degreeEquals, degreeToNoteName, degreeToSemitones, parseKey, pcToDegree, SOLFEGE } from '../theory/keys.js';
import { romanToChord } from '../theory/roman.js';
import { scoreSequence } from '../performance.js';
import type { Choice, ExerciseDefinition } from './types.js';
import { ev, evaluateSlots, keyReference } from './util.js';
import { lineOf, mixSnippet, partTrack } from './example-mix.js';
import { resolveKey, voiceUpper } from './harmony.js';

const CHROMATIC = { major: ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'], minor: ['1', 'b2', '2', '3', '#3', '4', '#4', '5', '6', '#6', '7', '#7'] };

function durations(rng: { pick<T>(a: readonly T[]): T; chance(p: number): boolean }, n: number, rhythm: 'quarters' | 'simple' | 'free'): number[] {
  if (rhythm === 'quarters') return Array.from({ length: n }, (_, i) => (i === n - 1 ? 2 : 1));
  const out: number[] = [];
  while (out.length < n) {
    const last = out.length === n - 1;
    if (last) {
      out.push(2);
      break;
    }
    if (rhythm === 'simple') {
      const d = rng.pick([1, 1, 1, 2, 0.5]);
      if (d === 0.5 && out.length < n - 2) out.push(0.5, 0.5);
      else out.push(d === 0.5 ? 1 : d);
    } else {
      const d = rng.pick([1, 1, 0.5, 1.5, 2, 0.5]);
      if (d === 1.5 && out.length < n - 2) out.push(1.5, 0.5);
      else if (d === 0.5 && out.length < n - 2) out.push(0.5, 0.5);
      else out.push(d === 1.5 || d === 0.5 ? 1 : d);
    }
  }
  return out.slice(0, n);
}

/**
 * Melodic dictation: hear a short melody (after a cadence) and play it back (pitch classes, any octave) or write its
 * scale degrees. Options: `chromatic` (chromatic neighbour tones + 12-degree palette), `backing` (roman numerals
 * played underneath), `maxLeap` (semitones), `example` + `track` (transcribe a part of an attached mix).
 */
export const earMelody: ExerciseDefinition<'ear-melody'> = {
  type: 'ear-melody',
  implemented: true,
  naturalCount(block) {
    return block.spec.example ? 1 : undefined;
  },
  generate(block, rng) {
    const s = block.spec;
    const { tonic, mode } = resolveKey(rng, s.key === 'random' ? undefined : s.key ?? s.example?.key, s.mode, s.keys);
    const k = parseKey(tonic, mode);
    const answerKind = s.answer ?? 'play';
    const instrument = s.instrument ?? 'piano';
    let midis: number[];
    let audio;
    if (s.example) {
      audio = mixSnippet(s.example);
      midis = lineOf(audio, partTrack(s.example, s.track), 'highest');
      if (midis.length === 0) throw new Error('ear-melody: example track has no notes');
    } else {
      const pool = [...new Set(s.degrees.map(String))];
      if (pool.length === 0) throw new Error('ear-melody: degrees must not be empty');
      const n = Math.max(1, s.length ?? 4);
      const tonicMidi = 60 + ((k.tonicPc + 12 - 0) % 12) - (k.tonicPc > 7 ? 12 : 0);
      const lo = tonicMidi + (s.span?.[0] ?? -7);
      const hi = tonicMidi + (s.span?.[1] ?? 16);
      const place = (deg: string, near: number): number => {
        const pc = (tonicMidi + degreeToSemitones(deg, mode)) % 12;
        let best = -1;
        for (let m = lo; m <= hi; m++) if (m % 12 === pc && (best < 0 || Math.abs(m - near) < Math.abs(best - near))) best = m;
        return best < 0 ? tonicMidi + degreeToSemitones(deg, mode) : best;
      };
      const diatonicPcs = new Set(pool.map((d) => (tonicMidi + degreeToSemitones(d, mode)) % 12));
      midis = [];
      let forced: number | null = null;
      for (let i = 0; i < n; i++) {
        if (forced !== null) {
          midis.push(forced);
          forced = null;
          continue;
        }
        const prev = midis[i - 1];
        if (prev === undefined) {
          midis.push(place(pool.includes('1') ? '1' : rng.pick(pool), tonicMidi + 2));
          continue;
        }
        // chromatic neighbour / passing tone resolving by half step into the pool
        if (s.chromatic && i < n - 1 && rng.chance(0.3)) {
          const dir = rng.chance(0.5) ? 1 : -1;
          const chrom = prev + dir;
          const target = chrom + dir;
          if (!diatonicPcs.has(((chrom % 12) + 12) % 12) && diatonicPcs.has(((target % 12) + 12) % 12)) {
            midis.push(chrom);
            forced = target;
            continue;
          }
        }
        const lastTwoSame = i >= 2 && midis[i - 1] === midis[i - 2];
        let cands = pool.map((d) => place(d, prev)).filter((m) => !(lastTwoSame && m === prev));
        if (s.maxLeap !== undefined) {
          const ok = cands.filter((m) => Math.abs(m - prev) <= s.maxLeap!);
          if (ok.length) cands = ok;
        }
        if (i === n - 1 && pool.includes('1') && rng.chance(0.5)) {
          const home = place('1', prev);
          if (s.maxLeap === undefined || Math.abs(home - prev) <= s.maxLeap) cands = [home];
        }
        midis.push(rng.pick(cands.length ? cands : [prev]));
      }
      // octave transfer: the whole tune sounds an octave (or two) away from the reference; answers are any octave
      if (s.octaveShift?.length) {
        const sh = 12 * rng.pick(s.octaveShift);
        midis = midis.map((m) => m + sh);
      }
      const durs = durations(rng, midis.length, s.rhythm ?? 'quarters');
      const events: NoteEvent[] = [];
      let t = 0;
      midis.forEach((m, i) => {
        const d = Math.round(durs[i]! * PPQ);
        events.push(ev(m, t, d, 0.85));
        t += d;
      });
      const tracks = [{ instrument, events }];
      if (s.backing?.length) {
        const per = Math.max(PPQ, Math.round(t / s.backing.length / PPQ) * PPQ);
        const chords: NoteEvent[] = [];
        let prevV: number[] | undefined;
        s.backing.forEach((r, i) => {
          const c = romanToChord(r, tonic, mode);
          const v = voiceUpper(c.pitchClasses[0]!, c.quality, 52, prevV).map((m) => m - 12 >= 40 ? m - 12 : m);
          prevV = v;
          const start = i * per;
          if (start >= t) return;
          for (const m of v) chords.push(ev(m, start, Math.min(per, t - start), 0.4));
        });
        tracks.push({ instrument: 'pad', events: chords });
      }
      audio = { bpm: s.bpm ?? 80, timeSig: { num: 4, den: 4 }, tracks };
    }
    const degrees = midis.map((m) => pcToDegree(m, tonic, mode));
    const names = degrees.map((d) => degreeToNoteName(tonic, d, mode));
    const chromaticPalette = s.chromatic || degrees.some((d) => !/^[1-7]$/.test(d));
    const palDegrees = chromaticPalette ? CHROMATIC[mode] : [...new Set([...s.degrees.map(String), ...degrees])].sort((a, b) => degreeToSemitones(a, mode) - degreeToSemitones(b, mode));
    const palette: Choice[] = palDegrees.map((d) => {
      const solf = mode === 'major' ? SOLFEGE[d] : undefined;
      return { value: d, label: solf ? `${d} ${solf}` : d };
    });
    return {
      type: 'ear-melody', key: tonic, mode, answerKind, midis, degrees, names,
      prompt: answerKind === 'play'
        ? `Key of ${k.name}: play the melody back (${midis.length} notes, any octave).`
        : `Key of ${k.name}: write the scale degrees of the melody (${midis.length} notes).`,
      ...((s.reference ?? 'cadence') !== 'none' ? { reference: keyReference(s.reference ?? 'cadence', tonic, mode, instrument) } : {}),
      audio,
      ...(answerKind === 'degrees' ? { slots: degrees, palette } : {}),
      solution: degrees.map((d, i) => `${d} (${names[i]})`).join(' '),
    };
  },
  evaluate(item, answer) {
    if (item.answerKind === 'degrees') {
      return evaluateSlots(item.slots ?? item.degrees, answer, (g, e) => (degreeEquals(g, e, item.mode) ? 1 : 0), item.solution, 'melody');
    }
    const played = (Array.isArray(answer) ? answer : []).filter((n): n is number => typeof n === 'number');
    const seq = scoreSequence(item.midis, played, 'pitch-class');
    return {
      correct: seq.correct, score: seq.correct ? 1 : seq.score,
      feedback: seq.correct ? 'Correct — well heard!' : `${seq.hits.filter(Boolean).length}/${item.midis.length} notes right. The melody was ${item.solution}.`,
      expected: item.solution,
      details: { sequence: seq, slots: seq.hits, played: played.map((m) => midiToNote(m)), pcs: played.map(pitchClass) },
    };
  },
};
