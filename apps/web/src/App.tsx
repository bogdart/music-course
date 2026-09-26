import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { configureEngine, preloadAudio } from './audio/engine';
import { AudioGate } from './components/AudioGate';
import { setupInput } from './input/setup';
import { useAudioStore } from './stores/audio';
import { useInputStore } from './stores/input';
import { useProgressStore } from './stores/progress';
import { useSettingsStore } from './stores/settings';
import Dashboard from './pages/Dashboard';
import { applyTheme } from './theme';

const Curriculum = lazy(() => import('./pages/Curriculum'));
const LessonPage = lazy(() => import('./pages/Lesson'));
const Practice = lazy(() => import('./pages/Practice'));
const Settings = lazy(() => import('./pages/Settings'));
const Daw = lazy(() => import('./pages/Daw'));
const DevDemo = lazy(() => import('./pages/DevDemo'));

function ServerBanner() {
  const { serverOk, serverError } = useAudioStore();
  if (serverOk !== false) return null;
  return (
    <div className="banner error" role="alert">
      Can’t reach the server ({serverError}). Progress won’t be saved. Start it with <code>npm run dev</code>.{' '}
      <button type="button" className="btn link" onClick={() => void useProgressStore.getState().refresh()}>
        Retry
      </button>
    </div>
  );
}

function InputIndicator() {
  const { midiInputs, lastSource, held, qwertyOctave, midiStatus } = useInputStore();
  const connected = midiInputs.filter((i) => i.state === 'connected' && !/midi through/i.test(i.name)).length;
  const label = connected ? `MIDI ×${connected}` : midiStatus === 'denied' || midiStatus === 'insecure' ? 'MIDI blocked' : 'no MIDI';
  return (
    <span className="input-indicator muted small" title={`QWERTY octave ${qwertyOctave}`}>
      <span className={`led ${held.length ? 'on' : ''}`} /> {label}
      {lastSource ? ` · ${lastSource}` : ''}
    </span>
  );
}

export function App() {
  const theme = useSettingsStore((s) => s.settings.theme);
  useEffect(() => applyTheme(theme), [theme]);
  useEffect(() => {
    const teardown = setupInput();
    // preload Tone.js so the first tap can unlock audio synchronously
    void preloadAudio();
    void useSettingsStore.getState().load().then(() => {
      const s = useSettingsStore.getState().settings;
      void configureEngine({ volume: s.volume, liveInstrument: s.liveInstrument, metronomeVolume: s.metronomeVolume, pianoSound: s.pianoSound });
    });
    void useProgressStore.getState().refresh();
    return teardown;
  }, []);
  return (
    <BrowserRouter>
      <header className="topbar">
        <NavLink to="/" className="brand">
          ♪ Music Course
        </NavLink>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/curriculum">Curriculum</NavLink>
          <NavLink to="/practice">Practice</NavLink>
          <NavLink to="/daw">DAW</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
        <InputIndicator />
      </header>
      <ServerBanner />
      <AudioGate />
      <main>
        <Suspense fallback={<div className="page">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/daw" element={<Daw />} />
            <Route path="/dev/demo" element={<DevDemo />} />
            <Route path="*" element={<div className="page"><h1>Not found</h1></div>} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
export default App;
