import { INSTRUMENT_IDS, isNoteName, type InstrumentId, type Settings as SettingsT } from '@music/core';
import { useState } from 'react';
import { configureEngine, playNote } from '../audio/engine';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { useAudioStore } from '../stores/audio';
import { useInputStore } from '../stores/input';
import { useSettingsStore } from '../stores/settings';

const RANGES: [string, string][] = [['C4', 'C5'], ['C3', 'C5'], ['F3', 'F5'], ['C3', 'C6'], ['C2', 'C6'], ['A0', 'C8']];

export function Settings() {
  const { settings, update } = useSettingsStore();
  const midi = useInputStore();
  const sampled = useAudioStore((s) => s.sampledPiano);
  const [lo, setLo] = useState(settings.keyboardRange[0]);
  const [hi, setHi] = useState(settings.keyboardRange[1]);
  const set = (p: Partial<SettingsT>) => {
    void update(p);
    void configureEngine(p);
  };
  return (
    <div className="page settings">
      <h1>Settings</h1>
      <section className="card form">
        <h2>MIDI keyboard</h2>
        {midi.midiSupported === false && <p className="muted">{midi.midiError}</p>}
        <label>
          Input device
          <select value={settings.midiInput} onChange={(e) => set({ midiInput: e.target.value })}>
            <option value="all">All connected inputs</option>
            {midi.midiInputs.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name} {i.state === 'disconnected' ? '(disconnected)' : ''}
              </option>
            ))}
          </select>
        </label>
        <p className="muted small">
          {midi.midiInputs.filter((i) => i.state === 'connected').length} device(s) connected. Plug in a keyboard any time — it is detected automatically.
          Computer keys: <kbd>Z</kbd>…<kbd>,</kbd> white keys, <kbd>S D G H J</kbd> black keys, <kbd>Q</kbd>… upper octave, <kbd>-</kbd>/<kbd>=</kbd> octave (now {midi.qwertyOctave}).
        </p>
      </section>
      <section className="card form">
        <h2>Sound</h2>
        <label>
          Live instrument
          <select value={settings.liveInstrument} onChange={(e) => set({ liveInstrument: e.target.value as InstrumentId })}>
            {INSTRUMENT_IDS.map((i) => (
              <option key={i} value={i}>
                {i}
                {i === 'piano' && sampled ? ' (sampled)' : ''}
              </option>
            ))}
          </select>
        </label>
        <label>
          Volume {Math.round(settings.volume * 100)}%
          <input type="range" min={0} max={1} step={0.01} value={settings.volume} onChange={(e) => set({ volume: Number(e.target.value) })} />
        </label>
        <label>
          Metronome volume {Math.round(settings.metronomeVolume * 100)}%
          <input type="range" min={0} max={1} step={0.01} value={settings.metronomeVolume} onChange={(e) => set({ metronomeVolume: Number(e.target.value) })} />
        </label>
        <button type="button" className="btn" onClick={() => void playNote(settings.liveInstrument, 60)}>
          Test sound
        </button>
      </section>
      <section className="card form">
        <h2>On-screen keyboard</h2>
        <div className="row wrap">
          {RANGES.map((r) => (
            <button
              key={r.join('-')}
              type="button"
              className={`btn ${settings.keyboardRange[0] === r[0] && settings.keyboardRange[1] === r[1] ? 'primary' : 'ghost'}`}
              onClick={() => {
                setLo(r[0]);
                setHi(r[1]);
                set({ keyboardRange: r });
              }}
            >
              {r[0]}–{r[1]}
            </button>
          ))}
        </div>
        <div className="row wrap">
          <input className="text-input short" value={lo} onChange={(e) => setLo(e.target.value)} aria-label="Lowest note" />
          <input className="text-input short" value={hi} onChange={(e) => setHi(e.target.value)} aria-label="Highest note" />
          <button type="button" className="btn" disabled={!isNoteName(lo, true) || !isNoteName(hi, true)} onClick={() => set({ keyboardRange: [lo, hi] })}>
            Apply
          </button>
        </div>
        <label>
          Key labels
          <select value={settings.keyLabels} onChange={(e) => set({ keyLabels: e.target.value as SettingsT['keyLabels'] })}>
            <option value="names">Note names</option>
            <option value="degrees">Scale degrees</option>
            <option value="none">None</option>
          </select>
        </label>
        <Keyboard keyName="C" showQwerty />
      </section>
    </div>
  );
}
export default Settings;
