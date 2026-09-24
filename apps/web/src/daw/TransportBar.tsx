import { PPQ, ticksPerBar, ticksToSeconds, tickToPosition } from '@music/core';
import { useDaw, useDawStore } from './store';
import { stop, togglePlay, toggleRecord } from './transport';

export const KEYS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];
const QUANT = [
  { label: 'off', v: 0 }, { label: '1/4', v: PPQ }, { label: '1/8', v: PPQ / 2 }, { label: '1/16', v: PPQ / 4 },
  { label: '1/8T', v: PPQ / 3 }, { label: '1/16T', v: PPQ / 6 },
];

function Position() {
  const playhead = useDaw((s) => s.playhead);
  const ts = useDaw((s) => s.project.timeSig);
  const bpm = useDaw((s) => s.project.bpm);
  const counting = useDaw((s) => s.countingIn);
  const p = tickToPosition(Math.floor(playhead), ts);
  const secs = ticksToSeconds(playhead, bpm);
  return (
    <div className="daw-pos" aria-label="position">
      <span className="daw-pos-bbt">{counting ? 'count-in' : `${p.bar}.${p.beat}.${String(Math.floor(p.tick / (PPQ / 4)) + 1)}`}</span>
      <span className="muted small">{Math.floor(secs / 60)}:{(secs % 60).toFixed(1).padStart(4, '0')}</span>
    </div>
  );
}

export function TransportBar({ compact = false }: { compact?: boolean }) {
  const store = useDawStore();
  const playing = useDaw((s) => s.playing);
  const recording = useDaw((s) => s.recording);
  const loopOn = useDaw((s) => s.loopOn);
  const loop = useDaw((s) => s.project.loop);
  const ts = useDaw((s) => s.project.timeSig);
  const bpm = useDaw((s) => s.project.bpm);
  const keyName = useDaw((s) => s.project.key ?? '');
  const metronome = useDaw((s) => s.metronome);
  const countIn = useDaw((s) => s.countIn);
  const inputQuantize = useDaw((s) => s.inputQuantize);
  const master = useDaw((s) => s.masterVolume);
  const st = store.getState();
  const bar = ticksPerBar(ts);
  const loopStartBar = loop ? Math.floor(loop.startTick / bar) + 1 : 1;
  const loopEndBar = loop ? Math.ceil(loop.endTick / bar) : 4;

  const setLoop = (a: number, b: number) => {
    const s = Math.max(1, Math.min(a, b));
    const e = Math.max(s, Math.max(a, b));
    st.mutate((d) => {
      d.loop = { startTick: (s - 1) * bar, endTick: e * bar };
    });
    st.set({ loopOn: true });
  };

  return (
    <div className="daw-transport" role="toolbar" aria-label="Transport">
      <div className="daw-group">
        <button type="button" className="btn daw-btn" title="Return to start (Enter)" onClick={() => { stop(); st.set({ playhead: 0 }); }}>⏮</button>
        <button type="button" className={`btn daw-btn ${playing && !recording ? 'on' : ''}`} title="Play / stop (Space)" aria-label={playing ? 'Stop' : 'Play'} onClick={() => togglePlay(store)}>
          {playing ? '■' : '▶'}
        </button>
        <button type="button" className={`btn daw-btn rec ${recording ? 'on' : ''}`} title="Record on the armed track (R)" aria-label="Record" onClick={() => toggleRecord(store)}>●</button>
        <button type="button" className={`btn daw-btn ${loopOn ? 'on' : ''}`} title="Loop on/off (drag on the ruler to set the region)" aria-pressed={loopOn} onClick={() => {
          if (!loopOn && !loop) setLoop(1, 4);
          else st.set({ loopOn: !loopOn });
        }}>Loop</button>
        {loopOn && (
          <span className="daw-loop-range small">
            bars <input type="number" min={1} value={loopStartBar} aria-label="Loop start bar" onChange={(e) => setLoop(Number(e.target.value) || 1, loopEndBar)} />
            –<input type="number" min={1} value={loopEndBar} aria-label="Loop end bar" onChange={(e) => setLoop(loopStartBar, Number(e.target.value) || 1)} />
          </span>
        )}
      </div>
      <Position />
      <div className="daw-group">
        <button type="button" className={`btn daw-btn ${metronome ? 'on' : ''}`} title="Metronome" aria-pressed={metronome} onClick={() => st.set({ metronome: !metronome })}>𝅘𝅥 click</button>
        <label className="daw-field" title="Count-in bars before recording">
          <span>count-in</span>
          <select value={countIn} onChange={(e) => st.set({ countIn: Number(e.target.value) })}>
            {[0, 1, 2].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <label className="daw-field">
          <span>BPM</span>
          <input type="number" min={20} max={300} value={bpm} className="daw-num"
            onChange={(e) => {
              const v = Math.round(Number(e.target.value));
              if (v >= 20 && v <= 300) st.mutate((d) => { d.bpm = v; });
            }} />
        </label>
        <label className="daw-field">
          <span>time</span>
          <select value={ts.num} aria-label="Beats per bar" onChange={(e) => st.mutate((d) => { d.timeSig = { ...d.timeSig, num: Number(e.target.value) }; })}>
            {[2, 3, 4, 5, 6, 7, 9, 12].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          /
          <select value={ts.den} aria-label="Beat unit" onChange={(e) => st.mutate((d) => { d.timeSig = { ...d.timeSig, den: Number(e.target.value) }; })}>
            {[2, 4, 8].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <label className="daw-field" title="Key: highlights out-of-key notes in the piano roll">
          <span>key</span>
          <select value={keyName} onChange={(e) => st.mutate((d) => {
            if (e.target.value) d.key = e.target.value;
            else delete d.key;
          })}>
            <option value="">—</option>
            {KEYS.map((k) => <option key={k} value={k}>{k.endsWith('m') ? `${k.slice(0, -1)} minor` : `${k} major`}</option>)}
          </select>
        </label>
      </div>
      {!compact && (
        <div className="daw-group">
          <label className="daw-field" title="Quantize recorded notes">
            <span>rec quantize</span>
            <select value={inputQuantize} onChange={(e) => st.set({ inputQuantize: Number(e.target.value) })}>
              {QUANT.map((q) => <option key={q.v} value={q.v}>{q.label}</option>)}
            </select>
          </label>
          <label className="daw-field" title="Master volume">
            <span>master</span>
            <input type="range" min={0} max={1} step={0.01} value={master} onChange={(e) => st.set({ masterVolume: Number(e.target.value) })} />
          </label>
        </div>
      )}
    </div>
  );
}
