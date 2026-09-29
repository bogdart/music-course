import * as Tone from 'tone';
import type { InstrumentId, PianoSound } from '@music/core';

/** A playable voice. Pitches are MIDI numbers. */
export interface Instrument {
  id: InstrumentId;
  output: Tone.ToneAudioNode;
  attack(midi: number, time: number, velocity: number): void;
  release(midi: number, time: number): void;
  attackRelease(midi: number, durationSec: number, time: number, velocity: number): void;
  releaseAll(): void;
  dispose(): void;
}

const freq = (midi: number) => Tone.Frequency(midi, 'midi').toFrequency();

let room: Tone.Reverb | null = null;

/**
 * One room reverb shared by the keyboard patches (the engine connects it to the master). A convolver per instrument
 * instance (live + playback + panned copies) was constant audio-thread load — scratches on phones / Bluetooth.
 */
export function sharedRoom(): Tone.Reverb {
  room ??= new Tone.Reverb({ decay: 1.6, preDelay: 0.01, wet: 1 });
  return room;
}

/** `src` → dry `out` (the instrument's output) + a send of `amount` into the shared room. */
function withRoom(src: Tone.ToneAudioNode, amount: number): { out: Tone.Gain; nodes: Tone.ToneAudioNode[] } {
  const out = new Tone.Gain(1);
  const send = new Tone.Gain(amount);
  src.connect(out);
  src.connect(send);
  send.connect(sharedRoom());
  return { out, nodes: [out, send] };
}

function poly(id: InstrumentId, synth: Tone.PolySynth, out: Tone.ToneAudioNode = synth): Instrument {
  return {
    id,
    output: out,
    attack: (m, t, v) => synth.triggerAttack(freq(m), t, v),
    release: (m, t) => synth.triggerRelease(freq(m), t),
    attackRelease: (m, d, t, v) => synth.triggerAttackRelease(freq(m), d, t, v),
    releaseAll: () => synth.releaseAll(),
    dispose: () => {
      synth.dispose();
      if (out !== synth) out.dispose();
    },
  };
}

export function createSynthPiano(): Instrument {
  // FM "hammer" over a soft body: brighter attack that mellows as it decays, low-passed and in a small room
  const s = new Tone.PolySynth(Tone.FMSynth, {
    harmonicity: 1,
    modulationIndex: 3.5,
    oscillator: { type: 'sine' },
    modulation: { type: 'triangle' },
    envelope: { attack: 0.003, decay: 2.2, sustain: 0.05, release: 1.1 },
    modulationEnvelope: { attack: 0.002, decay: 0.6, sustain: 0.1, release: 0.8 },
    volume: -8,
  });
  s.maxPolyphony = 48;
  const tone = new Tone.Filter(3200, 'lowpass', -12);
  s.connect(tone);
  const { out, nodes } = withRoom(tone, 0.2);
  return { ...poly('piano', s, out), dispose: () => [s, tone, ...nodes].forEach((n) => n.dispose()) };
}

/**
 * Warm analog-style keys after Jon Hopkins' *Immunity* (Korg MS-20 era): each voice is a soft saw-ish wave
 * through its own resonant 12 dB low-pass whose envelope opens bright on the attack and settles near the
 * fundamental (key-tracked, so high notes stay as bright as low ones) — lively at the front, almost a pure
 * tone as it sustains. "Alive" comes from per-note analog drift: each note starts a few cents off and slowly
 * wanders, with a slightly different attack. No modulated delay (tape wow) and no bus saturation — both put
 * artefacts on chords — and releases are cosine so they reach true silence before the oscillator stops.
 */
export function createWarmSynth(): Instrument {
  const RELEASE = 0.35;
  const MAX_VOICES = 24;
  const bus = new Tone.Gain(0.2);
  const { out, nodes } = withRoom(bus, 0.12);

  // voices are built on demand (6 up front): 24 idle MonoSynths per instance kept the audio thread busy for nothing
  // lastStart: a voice may already hold a note scheduled up to lookAhead in the future; Web Audio refuses a start
  // earlier than that, so a voice is only reused for notes that start after it
  type Voice = { synth: Tone.MonoSynth; midi: number | null; busyUntil: number; lastStart: number };
  const newVoice = (): Voice => ({
    synth: new Tone.MonoSynth({
      oscillator: { type: 'custom', partials: [1, 0.42, 0.24, 0.14, 0.09, 0.06, 0.04, 0.025] },
      filter: { type: 'lowpass', rolloff: -12, Q: 2.2 },
      envelope: { attack: 0.006, attackCurve: 'sine', decay: 0.7, sustain: 0.2, release: RELEASE, releaseCurve: 'cosine' },
      filterEnvelope: { attack: 0.004, decay: 0.3, sustain: 0.2, release: RELEASE, baseFrequency: 500, octaves: 3.2, exponent: 2 },
    }).connect(bus),
    midi: null,
    busyUntil: 0,
    lastStart: -1,
  });
  const voices: Voice[] = Array.from({ length: 6 }, newVoice);
  const pick = (t: number): Voice => {
    const usable = voices.filter((v) => v.lastStart < t);
    const free = usable.find((v) => v.busyUntil <= t);
    if (free) return free;
    if (voices.length < MAX_VOICES || usable.length === 0) {
      const v = newVoice();
      voices.push(v);
      return v;
    }
    return usable.reduce((a, b) => (b.busyUntil < a.busyUntil ? b : a));
  };
  const start = (v: Voice, m: number, t: number, vel: number) => {
    v.lastStart = t;
    const f = freq(m);
    const drift = (Math.random() - 0.5) * 6;
    v.synth.detune.cancelScheduledValues(t);
    v.synth.detune.setValueAtTime(drift, t);
    v.synth.detune.linearRampToValueAtTime(drift + (Math.random() - 0.5) * 5, t + 3);
    v.synth.envelope.attack = 0.004 + Math.random() * 0.006;
    // key-tracked filter: settles at ~2.2× the fundamental, opens ~2^3.2≈9× on the attack (softer when played softly)
    v.synth.filterEnvelope.baseFrequency = Math.min(f * 2.2, 9000);
    v.synth.filterEnvelope.octaves = 1.8 + 1.4 * vel;
    v.synth.triggerAttack(f, t, vel);
  };

  return {
    id: 'piano',
    output: out,
    attack: (m, t, vel) => {
      const held = voices.find((x) => x.midi === m && x.lastStart < t);
      const v = held ?? pick(t);
      start(v, m, t, vel);
      v.midi = m;
      v.busyUntil = Infinity;
    },
    release: (m, t) => {
      const v = voices.find((x) => x.midi === m);
      if (!v) return;
      v.synth.triggerRelease(t);
      v.midi = null;
      v.busyUntil = t + RELEASE;
    },
    attackRelease: (m, d, t, vel) => {
      const v = pick(t);
      start(v, m, t, vel);
      v.synth.triggerRelease(t + d);
      v.midi = null;
      v.busyUntil = t + d + RELEASE;
    },
    releaseAll: () => {
      const t = Tone.now();
      for (const v of voices) {
        v.synth.triggerRelease(t);
        v.midi = null;
        v.busyUntil = Math.min(v.busyUntil, Math.max(t, v.lastStart) + RELEASE);
      }
    },
    dispose: () => [...voices.map((v) => v.synth), bus, ...nodes].forEach((n) => n.dispose()),
  };
}

/** Salamander-style sample map: every third semitone from A0 (A, C, D#, F#). */
export function salamanderUrls(): Record<string, string> {
  const urls: Record<string, string> = {};
  const names: [string, string][] = [['A', 'A'], ['C', 'C'], ['D#', 'Ds'], ['F#', 'Fs']];
  for (let oct = 0; oct <= 8; oct++) {
    for (const [note, file] of names) {
      if (oct === 0 && note !== 'A') continue;
      if (oct === 8 && note !== 'C') continue;
      urls[`${note}${oct}`] = `${file}${oct}.mp3`;
    }
  }
  return urls;
}

export async function createSampledPiano(baseUrl: string): Promise<Instrument> {
  return new Promise((resolve, reject) => {
    let nodes: Tone.ToneAudioNode[] = [];
    const sampler = new Tone.Sampler({
      urls: salamanderUrls(),
      baseUrl,
      release: 1,
      volume: -4,
      onload: () =>
        resolve({
          id: 'piano',
          output: nodes[0]!,
          attack: (m, t, v) => sampler.triggerAttack(freq(m), t, v),
          release: (m, t) => sampler.triggerRelease(freq(m), t),
          attackRelease: (m, d, t, v) => sampler.triggerAttackRelease(freq(m), d, t, v),
          releaseAll: () => sampler.releaseAll(),
          dispose: () => [sampler, ...nodes].forEach((n) => n.dispose()),
        }),
      onerror: (e) => {
        nodes.forEach((n) => n.dispose());
        reject(e);
      },
    });
    nodes = withRoom(sampler, 0.17).nodes;
  });
}

/** `pianoSound` picks the `piano` patch; 'grand' here is the synth fallback (the engine swaps in samples). */
export function createInstrument(id: InstrumentId, pianoSound: PianoSound = 'warm'): Instrument {
  switch (id) {
    case 'piano':
      return pianoSound === 'warm' ? createWarmSynth() : createSynthPiano();
    case 'epiano': {
      const s = new Tone.PolySynth(Tone.FMSynth, {
        harmonicity: 3.01,
        modulationIndex: 12,
        oscillator: { type: 'sine' },
        modulation: { type: 'sine' },
        envelope: { attack: 0.002, decay: 1.6, sustain: 0.2, release: 1.2 },
        modulationEnvelope: { attack: 0.002, decay: 0.3, sustain: 0, release: 0.2 },
        volume: -12,
      });
      const trem = new Tone.Tremolo(4, 0.25).start();
      s.connect(trem);
      return poly('epiano', s, trem);
    }
    case 'bass': {
      const s = new Tone.PolySynth(Tone.MonoSynth, {
        oscillator: { type: 'sawtooth' },
        filter: { Q: 2, type: 'lowpass', rolloff: -24 },
        envelope: { attack: 0.005, decay: 0.3, sustain: 0.6, release: 0.25 },
        filterEnvelope: { attack: 0.005, decay: 0.2, sustain: 0.3, release: 0.3, baseFrequency: 120, octaves: 2.6 },
        volume: -10,
      });
      return poly('bass', s);
    }
    case 'pad': {
      const s = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'fatsawtooth', count: 3, spread: 30 },
        envelope: { attack: 0.6, decay: 0.5, sustain: 0.8, release: 2 },
        volume: -20,
      });
      const f = new Tone.Filter(1400, 'lowpass');
      const rev = new Tone.Reverb({ decay: 4, wet: 0.45 });
      s.chain(f, rev);
      return { ...poly('pad', s, rev), dispose: () => [s, f, rev].forEach((n) => n.dispose()) };
    }
    case 'lead': {
      const s = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'square8' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.5, release: 0.3 },
        volume: -18,
      });
      const delay = new Tone.FeedbackDelay({ delayTime: '8n', feedback: 0.2, wet: 0.15 });
      s.connect(delay);
      return { ...poly('lead', s, delay), dispose: () => [s, delay].forEach((n) => n.dispose()) };
    }
    case 'pluck': {
      const s = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.001, decay: 0.35, sustain: 0, release: 0.3 },
        volume: -8,
      });
      return poly('pluck', s);
    }
    case 'strings': {
      const s = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'fatsawtooth', count: 3, spread: 20 },
        envelope: { attack: 0.25, decay: 0.3, sustain: 0.85, release: 1.2 },
        volume: -20,
      });
      const f = new Tone.Filter(2600, 'lowpass');
      const vib = new Tone.Vibrato(5, 0.08);
      s.chain(vib, f);
      return { ...poly('strings', s, f), dispose: () => [s, f, vib].forEach((n) => n.dispose()) };
    }
    case 'guitar': {
      // overdriven electric guitar: bright plucked saw → distortion → cab-ish low-pass
      const s = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'fatsawtooth', count: 2, spread: 12 },
        envelope: { attack: 0.004, decay: 0.5, sustain: 0.35, release: 0.35 },
        volume: -22,
      });
      const dist = new Tone.Distortion({ distortion: 0.55, wet: 0.85 });
      const cab = new Tone.Filter(3200, 'lowpass', -24);
      s.chain(dist, cab);
      return { ...poly('guitar', s, cab), dispose: () => [s, dist, cab].forEach((n) => n.dispose()) };
    }
    case 'drums':
      return createDrumKit();
  }
}

/** GM drum kit on synths: kick 36, snare 38, clap 39, hh 42, ohat 46, tom 45, crash 49, ride 51, other → click. */
export function createDrumKit(): Instrument {
  const out = new Tone.Volume(-4);
  const kick = new Tone.MembraneSynth({ pitchDecay: 0.04, octaves: 6, envelope: { attack: 0.001, decay: 0.4, sustain: 0, release: 0.1 } }).connect(out);
  const tom = new Tone.MembraneSynth({ pitchDecay: 0.06, octaves: 3, envelope: { attack: 0.001, decay: 0.35, sustain: 0, release: 0.1 }, volume: -6 }).connect(out);
  const snareNoise = new Tone.NoiseSynth({ noise: { type: 'white' }, envelope: { attack: 0.001, decay: 0.16, sustain: 0 }, volume: -10 });
  const snareHp = new Tone.Filter(1800, 'highpass').connect(out);
  snareNoise.connect(snareHp);
  const snareBody = new Tone.MembraneSynth({ pitchDecay: 0.01, octaves: 2, envelope: { attack: 0.001, decay: 0.1, sustain: 0 }, volume: -12 }).connect(out);
  const clapNoise = new Tone.NoiseSynth({ noise: { type: 'pink' }, envelope: { attack: 0.003, decay: 0.12, sustain: 0 }, volume: -8 });
  const clapBp = new Tone.Filter(1200, 'bandpass').connect(out);
  clapNoise.connect(clapBp);
  const hat = new Tone.MetalSynth({ envelope: { attack: 0.001, decay: 0.05, release: 0.01 }, harmonicity: 5.1, modulationIndex: 32, resonance: 6000, octaves: 1.5, volume: -24 }).connect(out);
  const ohat = new Tone.MetalSynth({ envelope: { attack: 0.001, decay: 0.35, release: 0.1 }, harmonicity: 5.1, modulationIndex: 32, resonance: 5000, octaves: 1.5, volume: -26 }).connect(out);
  const ride = new Tone.MetalSynth({ envelope: { attack: 0.001, decay: 0.8, release: 0.3 }, harmonicity: 3.1, modulationIndex: 16, resonance: 7000, octaves: 1, volume: -28 }).connect(out);
  const crash = new Tone.MetalSynth({ envelope: { attack: 0.001, decay: 1.6, release: 0.6 }, harmonicity: 5.1, modulationIndex: 40, resonance: 4000, octaves: 2, volume: -24 }).connect(out);
  const click = new Tone.MembraneSynth({ pitchDecay: 0.005, octaves: 1, envelope: { attack: 0.001, decay: 0.05, sustain: 0 }, volume: -6 }).connect(out);

  const hit = (m: number, t: number, v: number) => {
    switch (m) {
      case 35:
      case 36:
        kick.triggerAttackRelease('C1', '8n', t, v);
        break;
      case 38:
      case 40:
        snareNoise.triggerAttackRelease('16n', t, v);
        snareBody.triggerAttackRelease('G2', '16n', t, v * 0.6);
        break;
      case 39:
        clapNoise.triggerAttackRelease('16n', t, v);
        break;
      case 42:
      case 44:
        hat.triggerAttackRelease('C6', '32n', t, v);
        break;
      case 46:
        ohat.triggerAttackRelease('C6', '8n', t, v);
        break;
      case 41:
      case 43:
      case 45:
      case 47:
      case 48:
      case 50:
        tom.triggerAttackRelease(Tone.Frequency(m + 12, 'midi').toFrequency(), '8n', t, v);
        break;
      case 49:
      case 57:
        crash.triggerAttackRelease('C6', '2n', t, v);
        break;
      case 51:
      case 59:
        ride.triggerAttackRelease('C6', '4n', t, v);
        break;
      default:
        click.triggerAttackRelease(Tone.Frequency(Math.max(60, Math.min(m, 96)), 'midi').toFrequency(), '32n', t, v);
    }
  };
  const all = [kick, tom, snareNoise, snareHp, snareBody, clapNoise, clapBp, hat, ohat, ride, crash, click];
  return {
    id: 'drums',
    output: out,
    attack: hit,
    release: () => {},
    attackRelease: (m, _d, t, v) => hit(m, t, v),
    releaseAll: () => {},
    dispose: () => {
      all.forEach((n) => n.dispose());
      out.dispose();
    },
  };
}
