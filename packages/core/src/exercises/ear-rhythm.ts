import { DRUM_MAP, PPQ, parseTimeSig, type NoteEvent } from '../model.js';
import type { ExerciseDefinition, EvalResult } from './types.js';
import { beatClicks, randomRhythm, rhythmLength, rhythmSnippet, rhythmTargets, type Subdivision } from './rhythm-gen.js';
import { evaluatePerformance, perfSpec } from './perf-util.js';
import { parseSeqDetailed } from '../seq/seq.js';
import { ticksPerBar } from '../rhythm.js';

const VOICE_MIDI = (v: string): number => (DRUM_MAP as Record<string, number>)[v === 'hihat' ? 'hh' : v] ?? 76;

function normaliseSeq(s: string): string {
  return s.replace(/\|/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Grid pattern for multi-voice drum dictation. */
function drumGrid(rng: { chance(p: number): boolean; pick<T>(a: readonly T[]): T }, voices: string[], steps: number, stepsPerBeat: number, beatsPerBar: number): Record<string, boolean[]> {
  const grid: Record<string, boolean[]> = {};
  for (const v of voices) {
    const g = new Array<boolean>(steps).fill(false);
    const name = v === 'hihat' ? 'hh' : v;
    for (let i = 0; i < steps; i++) {
      const beatPos = i % stepsPerBeat;
      const beat = Math.floor(i / stepsPerBeat) % beatsPerBar;
      if (name === 'hh' || name === 'ride' || name === 'ohat') g[i] = stepsPerBeat >= 2 ? beatPos % Math.max(1, stepsPerBeat / 2) === 0 || rng.chance(0.15) : true;
      else if (name === 'kick') g[i] = (beat === 0 && beatPos === 0) || (beatPos === 0 && beat === 2 && rng.chance(0.7)) || rng.chance(beatPos === 0 ? 0.2 : 0.12);
      else if (name === 'snare' || name === 'clap') g[i] = (beatPos === 0 && beat % 2 === 1) || (beatPos !== 0 && rng.chance(0.08));
      else g[i] = rng.chance(0.3);
    }
    grid[v] = g;
  }
  // kick and snare on the same step is fine, but keep at least one hit per voice
  for (const v of voices) if (!grid[v]!.some(Boolean)) grid[v]![0] = true;
  return grid;
}

/**
 * Rhythm dictation. `answer: "choose"` — pick the notation you heard among `choices` (2–4, default 4);
 * `"tap"` — tap it back after a count-in (timing scored ±25% of a beat); `voices` — multi-voice drum dictation on a
 * step grid (one row per voice).
 */
export const earRhythm: ExerciseDefinition<'ear-rhythm'> = {
  type: 'ear-rhythm',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const timeSig = s.timeSig ?? '4/4';
    const ts = parseTimeSig(timeSig);
    const bpm = s.bpm ?? 80;
    const bars = s.bars ?? 1;
    const sub: Subdivision = s.subdivision ?? '8';
    if (s.voices?.length) {
      const stepsPerBeat = ts.den === 8 ? 1 : sub === '16' ? 4 : sub === '8t' ? 3 : sub === 'q' ? 1 : 2;
      const beatTicks = (PPQ * 4) / ts.den;
      const stepTicks = beatTicks / stepsPerBeat;
      const steps = ts.num * stepsPerBeat * bars;
      const grid = drumGrid(rng, s.voices, steps, stepsPerBeat, ts.num);
      const events: NoteEvent[] = [];
      for (const v of s.voices) grid[v]!.forEach((on, i) => on && events.push({ midi: VOICE_MIDI(v), startTick: i * stepTicks, durationTicks: stepTicks, velocity: 0.9 }));
      const len = steps * stepTicks;
      return {
        type: 'ear-rhythm', mode: 'grid', seq: '', timeSig, bpm, voices: s.voices, steps, stepTicks, grid,
        prompt: `Fill in the grid: which steps does each drum play? (${bars} bar${bars > 1 ? 's' : ''}, ${timeSig})`,
        reference: { bpm, timeSig: ts, tracks: [{ instrument: 'drums', events: beatClicks(ts, ticksPerBar(ts), 0.5) }] },
        // the pattern twice
        audio: { bpm, timeSig: ts, tracks: [{ instrument: 'drums', events: [...events, ...events.map((e) => ({ ...e, startTick: e.startTick + len }))] }] },
        solution: s.voices.map((v) => `${v}: ${grid[v]!.map((b) => (b ? 'x' : '·')).join('')}`).join('  '),
      };
    }
    const seq = randomRhythm(rng, { timeSig: ts, bars, subdivision: sub, rests: s.rests ?? false });
    const mode = s.answer ?? 'choose';
    const audio = rhythmSnippet(seq, ts, bpm);
    const reference = { bpm, timeSig: ts, tracks: [{ instrument: 'drums' as const, events: beatClicks(ts, ticksPerBar(ts), 0.5) }] };
    if (mode === 'tap') {
      const targets = rhythmTargets(seq, ts);
      return {
        type: 'ear-rhythm', mode: 'tap', seq, timeSig, bpm,
        prompt: 'Listen, then tap the rhythm back (space bar, any key, pad or MIDI) after the count-in.',
        reference, audio,
        performance: perfSpec({ targets, bpm, timeSig: ts, pitchMode: 'none', input: 'taps', lengthTicks: rhythmLength(seq, ts) }),
        solution: seq,
      };
    }
    const nChoices = Math.max(2, Math.min(4, s.choices ?? 4));
    // distractors must *sound* different: dedupe by onset pattern, not by spelling
    const options = new Map<string, string>([[onsets(seq, timeSig), normaliseSeq(seq)]]);
    let guard = 0;
    while (options.size < nChoices && guard++ < 200) {
      const alt = randomRhythm(rng, { timeSig: ts, bars, subdivision: sub, rests: s.rests ?? false });
      const key = onsets(alt, timeSig);
      if (!options.has(key)) options.set(key, normaliseSeq(alt));
    }
    const list = rng.shuffle([...options.values()]);
    return {
      type: 'ear-rhythm', mode: 'choose', seq, timeSig, bpm, answer: normaliseSeq(seq),
      prompt: 'Which rhythm did you hear?',
      reference, audio,
      choices: list.map((o, i) => ({ value: o, label: `${String.fromCharCode(65 + i)}` })),
      solution: seq,
    };
  },
  evaluate(item, answer): EvalResult {
    if (item.mode === 'tap' && item.performance) return evaluatePerformance(item.performance, answer, item.seq);
    if (item.mode === 'grid' && item.grid) {
      const given = (answer as { grid?: Record<string, boolean[]> } | null)?.grid ?? {};
      let right = 0;
      let total = 0;
      const perVoice: Record<string, boolean[]> = {};
      for (const [v, g] of Object.entries(item.grid)) {
        perVoice[v] = g.map((on, i) => {
          total++;
          const ok = !!given[v]?.[i] === on;
          if (ok) right++;
          return ok;
        });
      }
      const correct = right === total;
      const score = total ? Math.round((right / total) * 100) / 100 : 0;
      return {
        correct, score,
        feedback: correct ? 'Correct — every drum in its place!' : `${right}/${total} grid steps right.`,
        expected: item.solution,
        details: { cells: perVoice },
      };
    }
    const a = normaliseSeq(String(answer ?? ''));
    const target = item.answer ?? normaliseSeq(item.seq);
    const correct = a === target || sameRhythm(a, target, item.timeSig);
    return { correct, score: correct ? 1 : 0, feedback: correct ? 'Correct!' : 'Not quite — listen for where the notes fall against the beat.', expected: item.solution };
  },
};

function onsets(s: string, ts: string): string {
  return parseSeqDetailed(s, { timeSig: ts }).items.filter((i) => i.kind !== 'rest').map((i) => i.startTick).join(',');
}

function sameRhythm(a: string, b: string, ts: string): boolean {
  try {
    return onsets(a, ts) === onsets(b, ts);
  } catch {
    return false;
  }
}
