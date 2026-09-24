/**
 * Standard MIDI File (SMF) export (type 1) and import (type 0/1). Pure: works on Uint8Array.
 * Export layout: track 0 = conductor (name, tempo, time signature, key signature, section markers);
 * one MTrk per project track (name, program change, CC7 volume, CC10 pan, notes). Drums use channel 10.
 */
import { PPQ, type InstrumentId, type NoteEvent, type Project, type TimeSig } from '../model.js';
import { ticksPerBar } from '../rhythm.js';
import { keysForAlteration, parseKey } from '../theory/keys.js';
import { createClip, createTrack, INSTRUMENT_LABELS, normalizeProject, newId, trackNotes } from './project.js';

/** General MIDI program per instrument (0-based). */
export const GM_PROGRAM: Record<InstrumentId, number> = {
  piano: 0, epiano: 4, bass: 33, pad: 89, lead: 80, pluck: 45, strings: 48, guitar: 30, drums: 0,
};

/** Instrument for a GM program number (0-based). */
export function instrumentForProgram(program: number): InstrumentId {
  if (program < 8) return program === 4 || program === 5 ? 'epiano' : 'piano';
  if (program < 16) return 'pluck';
  if (program < 24) return 'pad';
  if (program < 32) return 'guitar';
  if (program < 40) return 'bass';
  if (program < 56) return 'strings';
  if (program < 80) return 'lead';
  if (program < 88) return 'lead';
  if (program < 104) return 'pad';
  return 'pluck';
}

// ---------------- writing ----------------

function vlq(n: number): number[] {
  let v = Math.max(0, Math.round(n));
  const bytes = [v & 0x7f];
  v >>= 7;
  while (v > 0) {
    bytes.unshift((v & 0x7f) | 0x80);
    v >>= 7;
  }
  return bytes;
}

const u32 = (n: number) => [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
const u16 = (n: number) => [(n >> 8) & 0xff, n & 0xff];
const text = (s: string) => [...new TextEncoder().encode(s)];

interface RawEvent {
  tick: number;
  /** ordering at equal ticks: meta/setup 0, note-off 1, note-on 2 */
  order: number;
  data: number[];
}

function meta(tick: number, type: number, payload: number[]): RawEvent {
  return { tick, order: 0, data: [0xff, type, ...vlq(payload.length), ...payload] };
}

function chunk(events: RawEvent[]): number[] {
  const sorted = [...events].sort((a, b) => a.tick - b.tick || a.order - b.order);
  const body: number[] = [];
  let last = 0;
  for (const e of sorted) {
    body.push(...vlq(e.tick - last), ...e.data);
    last = e.tick;
  }
  body.push(0, 0xff, 0x2f, 0x00);
  return [...text('MTrk'), ...u32(body.length), ...body];
}

/** Export a project as a type-1 Standard MIDI File (PPQ 480). Mute/solo are ignored (all tracks exported). */
export function exportMidi(project: Project): Uint8Array {
  const conductor: RawEvent[] = [meta(0, 0x03, text(project.name))];
  const mpqn = Math.round(60_000_000 / project.bpm);
  conductor.push(meta(0, 0x51, [(mpqn >> 16) & 0xff, (mpqn >> 8) & 0xff, mpqn & 0xff]));
  const { num, den } = project.timeSig;
  conductor.push(meta(0, 0x58, [num, Math.round(Math.log2(den)), 24, 8]));
  if (project.key) {
    try {
      const k = parseKey(project.key);
      conductor.push(meta(0, 0x59, [k.alteration & 0xff, k.mode === 'minor' ? 1 : 0]));
    } catch {
      /* skip */
    }
  }
  const bar = ticksPerBar(project.timeSig);
  for (const m of project.markers ?? []) conductor.push(meta((m.bar - 1) * bar, 0x06, text(m.name)));

  const chunks: number[][] = [chunk(conductor)];
  let nextChannel = 0;
  for (const t of project.tracks) {
    let ch: number;
    if (t.instrument === 'drums') ch = 9;
    else {
      ch = nextChannel % 16;
      if (ch === 9) ch = ++nextChannel % 16;
      nextChannel++;
    }
    const evs: RawEvent[] = [meta(0, 0x03, text(t.name))];
    if (t.instrument !== 'drums') evs.push({ tick: 0, order: 0, data: [0xc0 | ch, GM_PROGRAM[t.instrument]] });
    evs.push({ tick: 0, order: 0, data: [0xb0 | ch, 7, Math.round(Math.min(1, Math.max(0, t.volume)) * 127)] });
    evs.push({ tick: 0, order: 0, data: [0xb0 | ch, 10, Math.min(127, Math.max(0, Math.round(64 + t.pan * 63.5)))] });
    for (const n of trackNotes(t)) {
      const vel = Math.min(127, Math.max(1, Math.round(n.velocity * 127)));
      evs.push({ tick: n.startTick, order: 2, data: [0x90 | ch, n.midi, vel] });
      evs.push({ tick: n.startTick + Math.max(1, n.durationTicks), order: 1, data: [0x80 | ch, n.midi, 0] });
    }
    chunks.push(chunk(evs));
  }
  const header = [...text('MThd'), ...u32(6), ...u16(1), ...u16(chunks.length), ...u16(PPQ)];
  return Uint8Array.from([...header, ...chunks.flat()]);
}

// ---------------- reading ----------------

export interface MidiNote extends NoteEvent {
  channel: number;
}

export interface MidiTrackData {
  name?: string;
  notes: MidiNote[];
  /** first program change per channel */
  programs: Record<number, number>;
  volume?: number;
  pan?: number;
}

export interface MidiFileData {
  format: number;
  /** ticks per quarter note (SMPTE timing is not supported) */
  division: number;
  tracks: MidiTrackData[];
  /** first tempo (BPM) */
  bpm?: number;
  timeSig?: TimeSig;
  /** key signature: sharps(+)/flats(-), minor flag */
  keySig?: { sf: number; minor: boolean };
  markers: { tick: number; text: string }[];
}

export class MidiParseError extends Error {}

/** Parse a Standard MIDI File (format 0 or 1). Notes carry raw file ticks (see `division`). */
export function parseMidi(bytes: Uint8Array): MidiFileData {
  let p = 0;
  const need = (n: number) => {
    if (p + n > bytes.length) throw new MidiParseError('Unexpected end of file');
  };
  const read4 = () => {
    need(4);
    const v = ((bytes[p]! << 24) | (bytes[p + 1]! << 16) | (bytes[p + 2]! << 8) | bytes[p + 3]!) >>> 0;
    p += 4;
    return v;
  };
  const read2 = () => {
    need(2);
    const v = (bytes[p]! << 8) | bytes[p + 1]!;
    p += 2;
    return v;
  };
  const str = (n: number) => {
    need(n);
    const s = new TextDecoder().decode(bytes.subarray(p, p + n));
    p += n;
    return s;
  };
  if (str(4) !== 'MThd') throw new MidiParseError('Not a MIDI file (missing MThd)');
  const hlen = read4();
  const hStart = p;
  const format = read2();
  const ntracks = read2();
  const division = read2();
  if (division & 0x8000) throw new MidiParseError('SMPTE time division is not supported');
  p = hStart + hlen;

  const out: MidiFileData = { format, division, tracks: [], markers: [] };
  for (let ti = 0; ti < ntracks && p < bytes.length; ti++) {
    const id = str(4);
    const len = read4();
    const end = p + len;
    if (id !== 'MTrk') {
      p = end;
      continue;
    }
    const tr: MidiTrackData = { notes: [], programs: {} };
    const open = new Map<number, { start: number; vel: number }[]>();
    let tick = 0;
    let status = 0;
    const vlqRead = () => {
      let v = 0;
      for (let i = 0; i < 4; i++) {
        need(1);
        const b = bytes[p++]!;
        v = (v << 7) | (b & 0x7f);
        if (!(b & 0x80)) return v;
      }
      return v;
    };
    const close = (ch: number, midi: number, at: number) => {
      const key = ch * 128 + midi;
      const q = open.get(key);
      const o = q?.shift();
      if (!o) return;
      tr.notes.push({ midi, startTick: o.start, durationTicks: Math.max(1, at - o.start), velocity: o.vel / 127, channel: ch });
    };
    while (p < end) {
      tick += vlqRead();
      need(1);
      let b = bytes[p]!;
      if (b & 0x80) {
        p++;
        if (b < 0xf0) status = b;
      } else {
        if (!status) throw new MidiParseError('Running status without a status byte');
        b = status;
      }
      if (b === 0xff) {
        need(1);
        const type = bytes[p++]!;
        const l = vlqRead();
        need(l);
        const data = bytes.subarray(p, p + l);
        p += l;
        if (type === 0x2f) break;
        if (type === 0x03 && tr.name === undefined) tr.name = new TextDecoder().decode(data);
        else if (type === 0x51 && out.bpm === undefined && l === 3) out.bpm = Math.round((60_000_000 / ((data[0]! << 16) | (data[1]! << 8) | data[2]!)) * 100) / 100;
        else if (type === 0x58 && !out.timeSig && l >= 2) out.timeSig = { num: data[0]!, den: 2 ** data[1]! };
        else if (type === 0x59 && !out.keySig && l >= 2) out.keySig = { sf: (data[0]! << 24) >> 24, minor: data[1] === 1 };
        else if (type === 0x06) out.markers.push({ tick, text: new TextDecoder().decode(data) });
        continue;
      }
      if (b === 0xf0 || b === 0xf7) {
        const l = vlqRead();
        p += l;
        continue;
      }
      const type = b & 0xf0;
      const ch = b & 0x0f;
      const d1 = bytes[p++]!;
      const d2 = type === 0xc0 || type === 0xd0 ? 0 : bytes[p++]!;
      if (type === 0x90 && d2 > 0) {
        const key = ch * 128 + d1;
        const q = open.get(key) ?? [];
        q.push({ start: tick, vel: d2 });
        open.set(key, q);
      } else if (type === 0x80 || (type === 0x90 && d2 === 0)) close(ch, d1, tick);
      else if (type === 0xc0 && tr.programs[ch] === undefined) tr.programs[ch] = d1;
      else if (type === 0xb0 && d1 === 7 && tr.volume === undefined) tr.volume = d2 / 127;
      else if (type === 0xb0 && d1 === 10 && tr.pan === undefined) tr.pan = Math.max(-1, Math.min(1, (d2 - 64) / 63.5));
    }
    for (const [key, q] of open) for (const o of q) tr.notes.push({ midi: key % 128, startTick: o.start, durationTicks: Math.max(1, tick - o.start), velocity: o.vel / 127, channel: Math.floor(key / 128) });
    tr.notes.sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
    out.tracks.push(tr);
    p = end;
  }
  return out;
}

/**
 * Import a MIDI file as a Project: one track per MTrk (format 1) or per channel (format 0 / mixed-channel
 * tracks); channel 10 → drums; program → instrument; ticks rescaled to PPQ 480; one clip per track.
 */
export function importMidi(bytes: Uint8Array, name = 'Imported MIDI'): Project {
  const f = parseMidi(bytes);
  const scale = PPQ / f.division;
  const timeSig = f.timeSig ?? { num: 4, den: 4 };
  const bar = ticksPerBar(timeSig);
  const tracks = [];
  for (const tr of f.tracks) {
    const channels = [...new Set(tr.notes.map((n) => n.channel))];
    for (const ch of channels) {
      const notes = tr.notes.filter((n) => n.channel === ch).map((n) => ({
        midi: n.midi, velocity: n.velocity,
        startTick: Math.round(n.startTick * scale), durationTicks: Math.max(1, Math.round(n.durationTicks * scale)),
      }));
      const instrument: InstrumentId = ch === 9 ? 'drums' : instrumentForProgram(tr.programs[ch] ?? 0);
      const end = notes.reduce((a, n) => Math.max(a, n.startTick + n.durationTicks), 0);
      const baseName = tr.name?.trim() || INSTRUMENT_LABELS[instrument];
      tracks.push(createTrack(instrument, {
        name: channels.length > 1 ? `${baseName} (ch ${ch + 1})` : baseName,
        ...(tr.volume !== undefined ? { volume: tr.volume } : {}),
        ...(tr.pan !== undefined ? { pan: tr.pan } : {}),
        clips: [createClip(0, Math.max(1, Math.ceil(end / bar)) * bar, notes, baseName)],
      }));
    }
  }
  const project: Project = {
    id: newId('p'), name: f.tracks[0]?.name?.trim() && f.tracks.length > 1 && f.tracks[0]!.notes.length === 0 ? f.tracks[0]!.name!.trim() : name,
    bpm: f.bpm ?? 120, timeSig, tracks,
  };
  if (f.keySig) {
    try {
      const k = keysForAlteration(f.keySig.sf);
      project.key = f.keySig.minor ? `${k.minor}m` : k.major;
    } catch {
      /* ignore */
    }
  }
  const markers = f.markers.map((m) => ({ bar: Math.floor((m.tick * scale) / bar) + 1, name: m.text }));
  if (markers.length) project.markers = markers;
  return normalizeProject(project);
}
