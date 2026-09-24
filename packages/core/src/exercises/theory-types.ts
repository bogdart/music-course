import { keySignatureLabel, keysForAlteration, parseKey, relativeKey } from '../theory/keys.js';
import { parseChordSymbol } from '../theory/chords.js';
import { chordToRoman, diatonicChords, romanEquals, romanToChord } from '../theory/roman.js';
import { PPQ, type NoteEvent } from '../model.js';
import type { Choice, ExerciseDefinition } from './types.js';
import { cadence, ev, evaluateSlots, setOrder } from './util.js';
import { bassNote, voiceUpper } from './harmony.js';

function keyValue(tonic: string, mode: 'major' | 'minor'): string {
  return mode === 'minor' ? `${tonic}m` : tonic;
}
function keyLabel(tonic: string, mode: 'major' | 'minor'): string {
  return `${tonic} ${mode}`;
}
function countLabel(alteration: number): string {
  return alteration === 0 ? 'No ♯/♭' : alteration > 0 ? `${alteration} ♯` : `${-alteration} ♭`;
}
function countValue(alteration: number): string {
  return alteration === 0 ? '0' : alteration > 0 ? `${alteration}#` : `${-alteration}b`;
}
function parseCount(v: string): number | null {
  const t = v.trim().replace('♯', '#').replace('♭', 'b').toLowerCase();
  if (t === '0' || t === 'none' || t === 'no ♯/♭') return 0;
  const m = /^(\d)\s*(#|b|sharps?|flats?)$/.exec(t);
  if (!m) return null;
  return Number(m[1]) * (m[2]!.startsWith('#') || m[2]!.startsWith('s') ? 1 : -1);
}

/**
 * Key signatures. prompt "staff" shows the signature, "name" names the key; answer "name" = the key,
 * "count" = number of sharps/flats. prompt "name" + answer "name" asks for the relative major/minor.
 */
export const keySignature: ExerciseDefinition<'key-signature'> = {
  type: 'key-signature',
  implemented: true,
  generate(block, rng, ctx) {
    const s = block.spec;
    if (!s.keys.length) throw new Error('key-signature: keys must not be empty');
    const k = parseKey(s.keys[setOrder(rng, s.keys.length, ctx.index)]!, s.mode);
    const promptKind = s.prompt ?? 'staff';
    const answerKind = s.answer ?? 'name';
    const relative = promptKind === 'name' && answerKind === 'name';
    let choices: Choice[];
    let answer: string;
    let prompt: string;
    if (answerKind === 'count') {
      answer = countValue(k.alteration);
      const alts = new Set<number>([k.alteration]);
      for (const d of [1, -1, 2, -2, 3, -3]) if (alts.size < 4 && Math.abs(k.alteration + d) <= 7) alts.add(k.alteration + d);
      alts.add(-k.alteration);
      choices = [...alts].sort((a, b) => a - b).slice(0, 5).map((a) => ({ value: countValue(a), label: countLabel(a) }));
      prompt = promptKind === 'staff' ? 'How many sharps or flats are in this key signature?' : `How many sharps or flats does ${k.name} have?`;
    } else {
      const target = relative ? parseKey(relativeKey(k.tonic, k.mode)) : k;
      answer = keyValue(target.tonic, target.mode);
      const pool = new Map<string, string>();
      pool.set(answer, keyLabel(target.tonic, target.mode));
      for (const key of s.keys) {
        try {
          const o = parseKey(key, s.mode);
          const t = relative ? parseKey(relativeKey(o.tonic, o.mode)) : o;
          pool.set(keyValue(t.tonic, t.mode), keyLabel(t.tonic, t.mode));
        } catch {
          /* skip */
        }
      }
      for (const d of [1, -1, 2, -2]) {
        if (pool.size >= 4) break;
        const alt = target.alteration + d;
        if (Math.abs(alt) > 7) continue;
        const ks = keysForAlteration(alt);
        const t = target.mode === 'major' ? parseKey(ks.major) : parseKey(ks.minor, 'minor');
        pool.set(keyValue(t.tonic, t.mode), keyLabel(t.tonic, t.mode));
      }
      const entries = [...pool.entries()];
      const picked = entries.length > 6 ? [entries[0]!, ...rng.shuffle(entries.slice(1)).slice(0, 5)] : entries;
      choices = rng.shuffle(picked).map(([value, label]) => ({ value, label }));
      prompt = relative
        ? `What is the relative ${k.mode === 'major' ? 'minor' : 'major'} of ${k.name}?`
        : `Which ${k.mode} key has this key signature?`;
    }
    return {
      type: 'key-signature', key: k.tonic, mode: k.mode, promptKind: relative ? 'name' : promptKind, answerKind, vexKey: k.vexKey, answer,
      prompt,
      choices,
      solution: answerKind === 'count'
        ? `${k.name}: ${countLabel(k.alteration)}${k.accidentals.length ? ` (${k.accidentals.join(' ')})` : ''}`
        : relative ? `${keyLabel(parseKey(relativeKey(k.tonic, k.mode)).tonic, k.mode === 'major' ? 'minor' : 'major')}` : `${k.name} (${keySignatureLabel(k.tonic, k.mode)})`,
      // heard after answering (as the reference it would give the key away)
      solutionAudio: cadence(k.tonic, k.mode),
    };
  },
  evaluate(item, answer) {
    const a = String(answer ?? '').trim();
    let correct = false;
    if (item.answerKind === 'count') correct = parseCount(a) !== null && parseCount(a) === parseCount(item.answer);
    else {
      try {
        const g = parseKey(a);
        const e = parseKey(item.answer);
        correct = g.tonicPc === e.tonicPc && g.mode === e.mode;
      } catch {
        correct = false;
      }
    }
    return { correct, score: correct ? 1 : 0, feedback: correct ? 'Correct!' : `Not quite — ${item.solution}.`, expected: item.solution };
  },
};

/** Write roman numerals for a chord progression in a key (chord symbols shown, or heard with prompt "play"). */
export const romanAnalysis: ExerciseDefinition<'roman-analysis'> = {
  type: 'roman-analysis',
  implemented: true,
  naturalCount() {
    return 1;
  },
  generate(block) {
    const s = block.spec;
    const k = parseKey(s.key, s.mode);
    const slots = s.chords.map((c) => chordToRoman(c.split('/')[0]!, k.tonic, k.mode));
    const sevenths = slots.some((r) => /7|ø/.test(r));
    const diatonic = diatonicChords(k.tonic, k.mode, false).map((c) => c.roman);
    const diatonic7 = sevenths ? diatonicChords(k.tonic, k.mode, true).map((c) => c.roman) : [];
    const all = [...new Set([...diatonic, ...diatonic7, ...slots])];
    const degreeOf = (r: string) => {
      try {
        const c = romanToChord(r, k.tonic, k.mode);
        return ((c.pitchClasses[0]! - k.tonicPc + 12) % 12) * 10 + (r.includes('/') ? 5 : 0);
      } catch {
        return 999;
      }
    };
    const palette: Choice[] = all.sort((a, b) => degreeOf(a) - degreeOf(b) || a.length - b.length).map((r) => ({ value: r, label: r }));
    const promptKind = s.prompt ?? 'symbols';
    const events: NoteEvent[] = [];
    const bass: NoteEvent[] = [];
    let prev: number[] | undefined;
    s.chords.forEach((sym, i) => {
      const c = parseChordSymbol(sym);
      const up = voiceUpper(c.pitchClasses[0]!, c.quality, 65, prev);
      prev = up;
      const t = i * 2 * PPQ;
      for (const m of up) events.push(ev(m, t, 2 * PPQ, 0.6));
      const b = c.bass ? bassNote({ pitchClasses: [parseChordSymbol(c.bass).pitchClasses[0]!] }) : bassNote(c);
      bass.push(ev(b, t, 2 * PPQ, 0.75));
    });
    const audio = { bpm: 72, timeSig: { num: 4, den: 4 }, tracks: [{ instrument: 'piano' as const, events: [...events, ...bass] }] };
    return {
      type: 'roman-analysis', key: k.tonic, mode: k.mode, chords: s.chords, promptKind, slots, palette,
      prompt: promptKind === 'play'
        ? `Key of ${k.name}: listen and write the roman numeral of each of the ${s.chords.length} chords.`
        : `Key of ${k.name}: write the roman numeral for each chord.`,
      ...(promptKind === 'play' ? { audio, reference: cadence(k.tonic, k.mode) } : { solutionAudio: audio }),
      solution: s.chords.map((c, i) => `${c} = ${slots[i]}`).join(', '),
    };
  },
  evaluate(item, answer) {
    return evaluateSlots(item.slots, answer, (g, e) => {
      if (romanEquals(g, e, item.key, item.mode)) return 1;
      try {
        return romanToChord(g, item.key, item.mode).pitchClasses[0] === romanToChord(e, item.key, item.mode).pitchClasses[0] ? 0.5 : 0;
      } catch {
        return 0;
      }
    }, item.solution, 'analysis');
  },
};

/** Guided listening: one or more playable examples, optionally with quiz questions (one item per question). */
export const listen: ExerciseDefinition<'listen'> = {
  type: 'listen',
  implemented: true,
  naturalCount(block) {
    return Math.max(1, block.spec.questions?.length ?? 0);
  },
  generate(block, _rng, ctx) {
    const s = block.spec;
    const examples = s.examples?.length ? s.examples : s.example ? [s.example] : [];
    if (!examples.length) throw new Error('listen needs "example" or "examples"');
    const qs = s.questions ?? [];
    if (!qs.length) {
      return {
        type: 'listen', examples, question: null, questionIndex: 0,
        prompt: examples.length > 1 ? 'Listen to each example.' : 'Listen to the example.',
        solution: 'Listened',
      };
    }
    const questionIndex = ctx.index % qs.length;
    const q = qs[questionIndex]!;
    const correct = q.answers?.length ? [...q.answers] : typeof q.answer === 'number' ? [q.answer] : [];
    return {
      type: 'listen', examples, questionIndex,
      question: { q: q.q, choices: q.choices, correct, multi: correct.length > 1, ...(q.explain ? { explain: q.explain } : {}) },
      prompt: q.q,
      choices: q.choices.map((c, i) => ({ value: String(i), label: c })),
      solution: correct.map((i) => q.choices[i]).join(', '),
    };
  },
  evaluate(item, answer) {
    if (!item.question) return { correct: true, score: 1, feedback: 'Nice listening!' };
    const chosen = (Array.isArray(answer) ? answer : [answer]).map(Number).filter((n) => Number.isInteger(n));
    const set = new Set(item.question.correct);
    const right = chosen.filter((c) => set.has(c)).length;
    const wrong = chosen.filter((c) => !set.has(c)).length;
    const correct = right === set.size && wrong === 0;
    const explain = item.question.explain ? ` ${item.question.explain}` : '';
    return {
      correct, score: correct ? 1 : Math.max(0, (right - wrong) / Math.max(1, set.size)),
      feedback: correct ? `Correct!${explain}` : `Not quite — answer: ${item.solution}.${explain}`,
      expected: item.solution,
    };
  },
};

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** Free-text reflection saved to the journal (as the attempt answer). Passes once `minWords` is reached. */
export const reflect: ExerciseDefinition<'reflect'> = {
  type: 'reflect',
  implemented: true,
  generate(block) {
    return { type: 'reflect', prompt: block.spec.prompt, minWords: block.spec.minWords ?? 0, solution: '(your own words)' };
  },
  evaluate(item, answer) {
    const n = wordCount(String(answer ?? ''));
    const correct = n >= item.minWords && n > 0;
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? 'Saved to your journal. ✍️' : `Write at least ${Math.max(1, item.minWords)} words (you have ${n}).`,
      details: { words: n },
    };
  },
};
