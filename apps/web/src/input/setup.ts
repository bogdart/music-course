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

  if (MidiManager.supported()) {
    midi = new MidiManager(noteInputBus, (midiInputs) => useInputStore.getState().setMidi({ midiInputs }));
    midi
      .init()
      .then(() => {
        useInputStore.getState().setMidi({ midiSupported: true, midiError: null });
        midi?.select(useSettingsStore.getState().settings.midiInput);
      })
      .catch((e: Error) => useInputStore.getState().setMidi({ midiSupported: false, midiError: e.message }));
  } else {
    input.setMidi({ midiSupported: false, midiError: 'Web MIDI not available in this browser (Chrome/Edge over localhost or HTTPS).' });
  }
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
