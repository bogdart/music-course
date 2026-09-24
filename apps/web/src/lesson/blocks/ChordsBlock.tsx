import { useMemo, useState } from 'react';
import {
  chordMidi, chordToRoman, pitchClass, parseTimeSig, ticksPerBar, tryParseChordSymbol, tryRomanToChord, type NoteEvent, type ParsedChord, type Snippet,
} from '@music/core';
import { usePlayback } from './usePlayback';

export interface ChordsData {
  key?: string;
  bars: string[];
  roman?: boolean;
  play?: boolean;
  bpm?: number;
  timeSig?: string;
  caption?: string;
}

interface Cell {
  label: string;
  chord: ParsedChord | null;
  roman: string | null;
}

function resolve(sym: string, key?: string): Cell {
  let chord: ParsedChord | null = tryParseChordSymbol(sym);
  if (!chord && key) chord = tryRomanToChord(sym, key);
  let roman: string | null = null;
  if (key && chord) {
    try {
      roman = tryParseChordSymbol(sym) ? chordToRoman(chord.symbol, key) : sym;
    } catch {
      roman = null;
    }
  }
  return { label: tryParseChordSymbol(sym) ? sym : (chord?.symbol ?? sym), chord, roman };
}

function voice(c: ParsedChord): { chord: number[]; bass: number } {
  let root = 60 + c.pitchClasses[0]!;
  if (root > 66) root -= 12;
  const bassPc = c.bass ? pitchClass(c.bass) : c.pitchClasses[0]!;
  return { chord: chordMidi(root, c.quality), bass: 36 + bassPc };
}

export function ChordsBlock({ data }: { data: ChordsData }) {
  const bars = useMemo(() => data.bars.map((b) => b.trim().split(/\s+/).filter(Boolean).map((s) => resolve(s, data.key))), [data]);
  const { playing, current, start, stop } = usePlayback();
  const [showRoman, setShowRoman] = useState(data.roman ?? false);
  const ts = parseTimeSig(data.timeSig ?? '4/4');
  const barTicks = ticksPerBar(ts);

  const snippet = useMemo<Snippet>(() => {
    const chordEv: NoteEvent[] = [];
    const bassEv: NoteEvent[] = [];
    bars.forEach((cells, bi) => {
      const each = barTicks / Math.max(1, cells.length);
      cells.forEach((cell, ci) => {
        if (!cell.chord) return;
        const v = voice(cell.chord);
        const t = bi * barTicks + ci * each;
        v.chord.forEach((m) => chordEv.push({ midi: m, startTick: t, durationTicks: each * 0.95, velocity: 0.6 }));
        bassEv.push({ midi: v.bass, startTick: t, durationTicks: each * 0.95, velocity: 0.8 });
      });
    });
    return { bpm: data.bpm ?? 80, timeSig: ts, tracks: [{ instrument: 'piano', events: chordEv }, { instrument: 'bass', events: bassEv }] };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bars, data.bpm, barTicks]);

  const currentBar = current ? Math.floor(current.ev.startTick / barTicks) : -1;
  return (
    <figure className="card chords-block" data-testid="chords-block">
      <div className="example-head">
        {data.play !== false && (
          <button type="button" className="btn play" onClick={() => (playing ? stop() : void start(snippet))}>
            {playing ? '■ Stop' : '▶ Play'}
          </button>
        )}
        <figcaption>
          <strong>Chords{data.key ? ` in ${data.key}` : ''}</strong>
          {data.caption && <span className="muted small"> · {data.caption}</span>}
        </figcaption>
        {data.key && (
          <label className="small toggle">
            <input type="checkbox" checked={showRoman} onChange={(e) => setShowRoman(e.target.checked)} /> roman
          </label>
        )}
      </div>
      <div className="chord-grid">
        {bars.map((cells, bi) => (
          <div key={bi} className={`chord-bar ${bi === currentBar ? 'active' : ''}`}>
            {cells.map((c, ci) => (
              <div key={ci} className={`chord-cell ${c.chord ? '' : 'bad'}`}>
                <span className="chord-symbol">{c.label}</span>
                {showRoman && c.roman && <span className="chord-roman">{c.roman}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </figure>
  );
}
