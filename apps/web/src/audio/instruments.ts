import * as Tone from 'tone';
import type { InstrumentId } from '@music/core';

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
  const room = new Tone.Reverb({ decay: 1.6, preDelay: 0.01, wet: 0.18 });
  s.chain(tone, room);
  return { ...poly('piano', s, room), dispose: () => [s, tone, room].forEach((n) => n.dispose()) };
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
  const room = new Tone.Reverb({ decay: 1.8, preDelay: 0.01, wet: 0.15 });
  return new Promise((resolve, reject) => {
    const sampler = new Tone.Sampler({
      urls: salamanderUrls(),
      baseUrl,
      release: 1,
      volume: -4,
      onload: () =>
        resolve({
          id: 'piano',
          output: room,
          attack: (m, t, v) => sampler.triggerAttack(freq(m), t, v),
          release: (m, t) => sampler.triggerRelease(freq(m), t),
          attackRelease: (m, d, t, v) => sampler.triggerAttackRelease(freq(m), d, t, v),
          releaseAll: () => sampler.releaseAll(),
          dispose: () => [sampler, room].forEach((n) => n.dispose()),
        }),
      onerror: (e) => {
        room.dispose();
        reject(e);
      },
    }).connect(room);
  });
}

export function createInstrument(id: InstrumentId): Instrument {
  switch (id) {
    case 'piano':
      return createSynthPiano();
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
