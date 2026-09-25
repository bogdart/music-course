import { liveNoteOff, liveNoteOn } from '../audio/engine';
import { useInputStore } from '../stores/input';
import { useSettingsStore } from '../stores/settings';
import { MidiManager } from './midi';
import { noteInputBus } from './NoteInputBus';
import { attachQwerty } from './qwerty';

let midi: MidiManager | null = null;

export function getMidiManager(): MidiManager | null {
  return midi;
}

/**
 * Request Web MIDI access (again). Safe to call repeatedly, e.g. from a "Connect MIDI" button, which also
 * gives Chromium the user gesture it wants before showing its permission prompt.
 */
export async function connectMidi(): Promise<void> {
  const setMidi = useInputStore.getState().setMidi;
  if (typeof window !== 'undefined' && !window.isSecureContext) {
    setMidi({
      midiStatus: 'insecure', midiSupported: false,
      midiError: `Browsers only allow MIDI on secure pages. Open http://localhost:${location.port || '80'} on the computer the keyboard is plugged into, or start the server with HTTPS (npm run start:https) and use https://${location.hostname}:${location.port || '443'}.`,
    });
    return;
  }
  if (!MidiManager.supported()) {
    setMidi({ midiStatus: 'unsupported', midiSupported: false, midiError: 'This browser has no Web MIDI. Use Chrome, Chromium, Edge or Firefox.' });
    return;
  }
  setMidi({ midiStatus: 'requesting', midiError: null });
  midi?.dispose();
  midi = new MidiManager(noteInputBus, (midiInputs) => useInputStore.getState().setMidi({ midiInputs }));
  try {
    await midi.init();
    setMidi({ midiStatus: 'ready', midiSupported: true, midiError: null });
    midi.select(useSettingsStore.getState().settings.midiInput);
  } catch (e) {
    const err = e as Error;
    const denied = err.name === 'NotAllowedError' || err.name === 'SecurityError';
    midi = null;
    setMidi({
      midiStatus: denied ? 'denied' : 'error', midiSupported: false, midiInputs: [],
      midiError: denied
        ? 'MIDI access is blocked for this site. Click the icon left of the address bar → Site settings → "MIDI device control" → Allow, then press Connect MIDI.'
        : `Could not open MIDI: ${err.message}`,
    });
  }
}

/** Reconnect automatically when the user flips the site's MIDI permission in browser settings. */
function watchMidiPermission(): void {
  const perms = typeof navigator !== 'undefined' ? navigator.permissions : undefined;
  if (!perms?.query) return;
  perms
    .query({ name: 'midi' as PermissionName })
    .then((status) => {
      status.onchange = () => {
        if (status.state !== 'denied') void connectMidi();
        else useInputStore.getState().setMidi({ midiStatus: 'denied', midiSupported: false, midiInputs: [] });
      };
    })
    .catch(() => undefined);
}

/**
 * Wire global input once at app start: QWERTY, Web MIDI (device from settings), held-notes store and
 * live-thru (every note-on from any source sounds through the live instrument immediately).
 */
export function setupInput(): () => void {
  const input = useInputStore.getState();
  const unsubThru = noteInputBus.subscribe((e) => {
    if (e.type === 'on') liveNoteOn(e.midi, e.velocity);
    else if (!noteInputBus.held().includes(e.midi)) liveNoteOff(e.midi);
    useInputStore.getState().setHeld(noteInputBus.held(), e.source);
  });
  input.setQwertyOctave(useSettingsStore.getState().settings.qwertyOctave);
  const detachQwerty = attachQwerty(noteInputBus, {
    getOctave: () => useInputStore.getState().qwertyOctave,
    setOctave: (o) => {
      useInputStore.getState().setQwertyOctave(o);
      void useSettingsStore.getState().update({ qwertyOctave: useInputStore.getState().qwertyOctave });
    },
  });

  void connectMidi();
  watchMidiPermission();
  const unsubSettings = useSettingsStore.subscribe((s, prev) => {
    if (s.settings.midiInput !== prev.settings.midiInput) midi?.select(s.settings.midiInput);
    if (s.settings.qwertyOctave !== prev.settings.qwertyOctave) useInputStore.getState().setQwertyOctave(s.settings.qwertyOctave);
  });
  const onBlur = () => noteInputBus.releaseAll('screen');
  window.addEventListener('blur', onBlur);
  return () => {
    unsubThru();
    detachQwerty();
    unsubSettings();
    midi?.dispose();
    window.removeEventListener('blur', onBlur);
  };
}
