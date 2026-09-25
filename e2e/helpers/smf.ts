/**
 * Minimal, independent Standard MIDI File reader for verifying the DAW's .mid export (deliberately not the app's
 * own importer). Parses the header and every MTrk (running status, meta, sysex) into absolute-tick events.
 */
export interface SmfNote { track: number; channel: number; midi: number; velocity: number; startTick: number; durationTicks: number }
export interface Smf {
  format: number;
  ntrks: number;
  division: number;
  tracks: { name: string | null; program: number | null; tempoUsPerQuarter: number | null; timeSig: [number, number] | null; notes: SmfNote[]; endOfTrack: boolean }[];
}

export function parseSmf(buf: Uint8Array): Smf {
  let p = 0;
  const str = (n: number) => String.fromCharCode(...buf.subarray(p, p + n));
  const u32 = () => ((buf[p++]! << 24) | (buf[p++]! << 16) | (buf[p++]! << 8) | buf[p++]!) >>> 0;
  const u16 = () => (buf[p++]! << 8) | buf[p++]!;
  const vlq = () => {
    let v = 0;
    for (let i = 0; i < 4; i++) {
      const b = buf[p++]!;
      v = (v << 7) | (b & 0x7f);
      if (!(b & 0x80)) return v;
    }
    throw new Error('bad VLQ');
  };
  if (str(4) !== 'MThd') throw new Error('missing MThd');
  p += 4;
  if (u32() !== 6) throw new Error('bad header length');
  const format = u16();
  const ntrks = u16();
  const division = u16();
  const tracks: Smf['tracks'] = [];
  for (let t = 0; t < ntrks; t++) {
    if (str(4) !== 'MTrk') throw new Error(`missing MTrk #${t} at ${p}`);
    p += 4;
    const len = u32();
    const end = p + len;
    let tick = 0;
    let status = 0;
    const open = new Map<string, { start: number; vel: number }>();
    const tr: Smf['tracks'][number] = { name: null, program: null, tempoUsPerQuarter: null, timeSig: null, notes: [], endOfTrack: false };
    while (p < end) {
      tick += vlq();
      let b = buf[p]!;
      if (b & 0x80) {
        status = b;
        p++;
      } else if (!status) throw new Error('running status without status');
      b = status;
      if (b === 0xff) {
        const type = buf[p++]!;
        const l = vlq();
        const data = buf.subarray(p, p + l);
        p += l;
        if (type === 0x03) tr.name = new TextDecoder().decode(data);
        if (type === 0x51) tr.tempoUsPerQuarter = (data[0]! << 16) | (data[1]! << 8) | data[2]!;
        if (type === 0x58) tr.timeSig = [data[0]!, 2 ** data[1]!];
        if (type === 0x2f) tr.endOfTrack = true;
        status = 0;
        continue;
      }
      if (b === 0xf0 || b === 0xf7) {
        p += vlq();
        status = 0;
        continue;
      }
      const kind = b & 0xf0;
      const ch = b & 0x0f;
      const d1 = buf[p++]!;
      const d2 = kind === 0xc0 || kind === 0xd0 ? 0 : buf[p++]!;
      if (kind === 0xc0) tr.program = d1;
      const key = `${ch}:${d1}`;
      if (kind === 0x90 && d2 > 0) open.set(key, { start: tick, vel: d2 });
      else if (kind === 0x80 || (kind === 0x90 && d2 === 0)) {
        const o = open.get(key);
        if (o) {
          tr.notes.push({ track: t, channel: ch, midi: d1, velocity: o.vel, startTick: o.start, durationTicks: tick - o.start });
          open.delete(key);
        }
      }
    }
    if (p !== end) throw new Error(`track ${t} length mismatch`);
    tr.notes.sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
    tracks.push(tr);
  }
  return { format, ntrks, division, tracks };
}
