import { useState } from 'react';
import Markdown from 'react-markdown';
import { noteToMidi, isNoteName, parseChordSymbol, chordMidi } from '@music/core';
import { play, playNote } from '../audio/engine';
import { findGlossaryTerm, useProgressStore } from '../stores/progress';
import { useSettingsStore } from '../stores/settings';

export function NoteChip({ value }: { value: string }) {
  const instrument = useSettingsStore((s) => s.settings.liveInstrument);
  const valid = isNoteName(value);
  return (
    <button
      type="button"
      className="chip note-chip"
      title={valid ? `Play ${value}` : `Unknown note ${value}`}
      disabled={!valid}
      onClick={() => {
        const n = /\d$/.test(value) ? value : value + '4';
        void playNote(instrument, noteToMidi(n), 0.8, 1);
      }}
    >
      ♪ {value}
    </button>
  );
}

export function ChordChip({ value }: { value: string }) {
  let midis: number[] = [];
  try {
    const c = parseChordSymbol(value);
    let root = 60 + c.pitchClasses[0]!;
    if (root > 66) root -= 12;
    midis = chordMidi(root, c.quality);
  } catch {
    midis = [];
  }
  return (
    <button
      type="button"
      className="chip chord-chip"
      disabled={!midis.length}
      title={midis.length ? `Play ${value}` : `Unknown chord ${value}`}
      onClick={() =>
        void play({
          bpm: 60, timeSig: { num: 4, den: 4 },
          tracks: [{ instrument: 'piano', events: midis.map((m) => ({ midi: m, startTick: 0, durationTicks: 960, velocity: 0.75 })) }],
        })
      }
    >
      🎹 {value}
    </button>
  );
}

export function GlossaryTerm({ term, children }: { term: string; children: React.ReactNode }) {
  const entry = useProgressStore((s) => findGlossaryTerm(s.glossary, term));
  const [open, setOpen] = useState(false);
  return (
    <span className="term-wrap">
      <button
        type="button"
        className="term"
        aria-expanded={open}
        title={entry ? entry.definition.slice(0, 200) : 'Glossary'}
        onClick={() => setOpen((o) => !o)}
      >
        {children}
      </button>
      {open && (
        <span className="term-pop" role="tooltip">
          <strong>{entry?.term ?? term}</strong>
          {entry ? <Markdown>{entry.definition}</Markdown> : <span className="muted"> — not in the glossary yet.</span>}
        </span>
      )}
    </span>
  );
}
