import {
  Accidental, Annotation, Articulation, Beam, Dot, Formatter, Renderer, Stave, StaveNote, StaveTie, Tuplet, Voice, type StemmableNote,
} from 'vexflow/bravura';
import { parseKey, parseSeqDetailed, parseTimeSig, ticksPerBar, type SeqItem } from '@music/core';

export interface StaffRenderOptions {
  seq: string;
  clef?: 'treble' | 'bass' | 'percussion' | 'auto';
  key?: string;
  timeSig?: string;
  /** Highlight this item index (SeqItem.index) */
  highlight?: number | null;
  /** Per-item colours (item index → css colour) */
  colors?: Record<number, string>;
  width: number;
  /** Max bars per line (default: fit by width) */
  barsPerLine?: number;
  /** Draw the time signature (default true) */
  showTimeSig?: boolean;
  /** Lyrics: one syllable per note (rests skipped, tied continuations skipped), shown under the staff */
  lyrics?: string[];
}

const DUR: Record<string, string> = { w: 'w', h: 'h', q: 'q', '8': '8', '16': '16', '32': '32', '64': '64' };

function vexDuration(tok: string): { duration: string; dots: number; triplet: boolean } {
  const m = /^(w|h|q|8|16|32|64)(\.{0,2})(t?)$/.exec(tok);
  if (!m) return { duration: 'q', dots: 0, triplet: false };
  return { duration: DUR[m[1]!]!, dots: m[2]!.length, triplet: m[3] === 't' };
}

function vexKey(name: string): string {
  const m = /^([A-G])(#{1,2}|b{1,2})?(-?\d+)$/.exec(name);
  if (!m) return 'b/4';
  return `${m[1]!.toLowerCase()}${m[2] ?? ''}/${m[3]}`;
}

export function autoClef(items: SeqItem[]): 'treble' | 'bass' | 'percussion' {
  const pitched = items.filter((i) => i.kind === 'note' || i.kind === 'chord').flatMap((i) => i.midis);
  if (pitched.length === 0) return items.some((i) => i.kind === 'drum' || i.kind === 'hit') ? 'percussion' : 'treble';
  const avg = pitched.reduce((a, b) => a + b, 0) / pitched.length;
  return avg < 57 ? 'bass' : 'treble';
}

/** Render a seq to an SVG inside `el` (cleared first). Returns the rendered height. */
export function renderStaff(el: HTMLElement, opts: StaffRenderOptions): number {
  el.innerHTML = '';
  const ts = parseTimeSig(opts.timeSig ?? '4/4');
  const parsed = parseSeqDetailed(opts.seq, { timeSig: ts });
  const items = parsed.items;
  const clef = !opts.clef || opts.clef === 'auto' ? autoClef(items) : opts.clef;
  let keySpec = 'C';
  if (opts.key) {
    try {
      keySpec = parseKey(opts.key).vexKey;
    } catch {
      /* ignore */
    }
  }
  const barTicks = ticksPerBar(ts);
  // split into bars by start tick
  const bars: SeqItem[][] = [];
  for (const it of items) {
    const b = Math.floor(it.startTick / barTicks);
    while (bars.length <= b) bars.push([]);
    bars[b]!.push(it);
  }
  if (bars.length === 0) bars.push([]);

  const restKey = clef === 'bass' ? 'd/3' : 'b/4';
  const width = Math.max(260, opts.width);
  const firstExtra = 90 + Math.abs(parseKeyAlteration(keySpec)) * 10;
  const barWidths = bars.map((b) => Math.max(110, 50 + b.length * 34));
  // line breaking
  const lines: number[][] = [];
  let cur: number[] = [];
  let used = 0;
  bars.forEach((_, i) => {
    const w = barWidths[i]! + (cur.length === 0 ? firstExtra : 0);
    if (cur.length > 0 && (used + w > width - 10 || (opts.barsPerLine && cur.length >= opts.barsPerLine))) {
      lines.push(cur);
      cur = [];
      used = 0;
    }
    cur.push(i);
    used += barWidths[i]! + (cur.length === 1 ? firstExtra : 0);
  });
  if (cur.length) lines.push(cur);

  const lineHeight = opts.lyrics?.length ? 145 : 120;
  const height = lines.length * lineHeight + 20;
  const renderer = new Renderer(el as HTMLDivElement, Renderer.Backends.SVG);
  renderer.resize(width, height);
  const ctx = renderer.getContext();

  const allNotes = new Map<number, StaveNote>();
  // lyrics: syllables assigned to sounding (non-rest, non-tied-continuation) items in order
  const lyricOf = new Map<number, string>();
  if (opts.lyrics?.length) {
    let k = 0;
    let prevTie = false;
    for (const it of items) {
      if (it.kind === 'rest') {
        prevTie = false;
        continue;
      }
      if (!prevTie && k < opts.lyrics.length) lyricOf.set(it.index, opts.lyrics[k++]!);
      prevTie = it.tie;
    }
  }
  lines.forEach((line, li) => {
    const natural = line.reduce((a, i) => a + barWidths[i]!, 0) + firstExtra;
    const scale = Math.min(1.6, (width - 10) / natural);
    let x = 5;
    line.forEach((bi, j) => {
      const isFirst = j === 0;
      const w = (barWidths[bi]! + (isFirst ? firstExtra : 0)) * (li === lines.length - 1 && natural < width * 0.6 ? 1 : scale);
      const stave = new Stave(x, 10 + li * lineHeight, w);
      if (isFirst) {
        stave.addClef(clef);
        if (clef !== 'percussion') stave.addKeySignature(keySpec);
        if (li === 0 && opts.showTimeSig !== false) stave.addTimeSignature(`${ts.num}/${ts.den}`);
      }
      if (bi === bars.length - 1) stave.setEndBarType(3);
      stave.setContext(ctx).draw();
      const barItems = bars[bi]!;
      if (barItems.length === 0) return void (x += w);
      const notes: StaveNote[] = barItems.map((it) => {
        const d = vexDuration(it.duration);
        const rest = it.kind === 'rest';
        const keys = rest
          ? [restKey]
          : it.kind === 'drum' || it.kind === 'hit'
            ? it.midis.map((m) => (m === 42 || m === 46 || m === 49 || m === 51 ? 'g/5/x2' : m === 36 ? 'f/4' : 'c/5'))
            : it.names.map(vexKey);
        const n = new StaveNote({ keys, duration: d.duration + (rest ? 'r' : ''), clef: clef === 'percussion' ? 'percussion' : clef, autoStem: true });
        if (d.dots) Dot.buildAndAttach([n], { all: true });
        if (it.accent && !rest) n.addModifier(new Articulation('a>').setPosition(3), 0);
        const syl = lyricOf.get(it.index);
        if (syl) n.addModifier(new Annotation(syl).setVerticalJustification(Annotation.VerticalJustify.BOTTOM).setFont('sans-serif', 12), 0);
        const colour = opts.highlight === it.index ? '#e0463c' : opts.colors?.[it.index];
        if (colour) n.setStyle({ fillStyle: colour, strokeStyle: colour });
        allNotes.set(it.index, n);
        return n;
      });
      const voice = new Voice({ numBeats: ts.num, beatValue: ts.den });
      voice.setMode(Voice.Mode.SOFT);
      voice.addTickables(notes);
      if (clef !== 'percussion') Accidental.applyAccidentals([voice], keySpec);
      const beams = Beam.generateBeams(notes as StemmableNote[]);
      // triplets: group consecutive triplet items by 3
      const tuplets: Tuplet[] = [];
      let group: StaveNote[] = [];
      barItems.forEach((it, k) => {
        if (vexDuration(it.duration).triplet) {
          group.push(notes[k]!);
          if (group.length === 3) {
            tuplets.push(new Tuplet(group));
            group = [];
          }
        } else group = [];
      });
      new Formatter().joinVoices([voice]).format([voice], w - (isFirst ? firstExtra : 20) - 10);
      voice.draw(ctx, stave);
      beams.forEach((b) => b.setContext(ctx).draw());
      tuplets.forEach((t) => t.setContext(ctx).draw());
      x += w;
    });
  });
  // ties
  items.forEach((it, i) => {
    const next = items[i + 1];
    if (!it.tie || !next) return;
    const a = allNotes.get(it.index);
    const b = allNotes.get(next.index);
    if (!a || !b) return;
    const idx = it.midis.map((_, k) => k).filter((k) => next.midis.includes(it.midis[k]!));
    const firstIdx = idx.length ? idx : [0];
    const lastIdx = firstIdx.map((k) => Math.max(0, next.midis.indexOf(it.midis[k]!)));
    try {
      new StaveTie({ firstNote: a, lastNote: b, firstIndexes: firstIdx, lastIndexes: lastIdx }).setContext(ctx).draw();
    } catch {
      /* ties across lines may fail; ignore */
    }
  });
  return height;
}

function parseKeyAlteration(vexKey: string): number {
  try {
    return parseKey(vexKey.endsWith('m') ? vexKey.slice(0, -1) + ' minor' : vexKey).alteration;
  } catch {
    return 0;
  }
}
