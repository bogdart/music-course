import { useEffect, useState } from 'react';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { Arrangement } from './Arrangement';
import { useDawShortcuts, useLiveInstrument, useStopOnUnmount } from './hooks';
import { PianoRoll } from './PianoRoll';
import { DawContext, findTrack, getActiveDaw, setActiveDaw, useDaw, type DawStore } from './store';
import { TransportBar } from './TransportBar';
import './daw.css';

function RollOrHint({ compact }: { compact: boolean }) {
  const open = useDaw((s) => s.openClipId);
  if (open) return <PianoRoll compact={compact} />;
  return <p className="muted small daw-hint">Select a clip and tap it again (or double-click) to edit its notes in the piano roll.</p>;
}

function LiveKeyboard() {
  const keyName = useDaw((s) => s.project.key);
  const drums = useDaw((s) => findTrack(s.project, s.armedTrackId ?? s.selectedTrackId)?.instrument === 'drums');
  return <Keyboard showQwerty range={drums ? ['C2', 'B3'] : undefined} {...(keyName ? { keyName } : {})} height={120} />;
}

/**
 * The full DAW UI for a store: transport, arrangement, piano roll, optional on-screen keyboard.
 * Keyboard shortcuts apply to the workspace the user last touched.
 */
export function DawWorkspace({ store, compact = false }: { store: DawStore; compact?: boolean }) {
  const [showKeys, setShowKeys] = useState(!compact);
  useDawShortcuts(store);
  useLiveInstrument(store);
  useStopOnUnmount(store);
  // the full-page DAW takes the shortcuts right away; embeds once they are touched
  useEffect(() => {
    if (!compact) setActiveDaw(store.getState().key);
    return () => {
      if (getActiveDaw() === store.getState().key) setActiveDaw('');
    };
  }, [store, compact]);
  return (
    <DawContext.Provider value={store}>
      <div className={`daw ${compact ? 'compact' : ''}`} onPointerDownCapture={() => setActiveDaw(store.getState().key)} onFocusCapture={() => setActiveDaw(store.getState().key)}>
        <TransportBar compact={compact} />
        <Arrangement compact={compact} />
        <RollOrHint compact={compact} />
        <div className="row daw-keys-toggle">
          <button type="button" className="btn ghost small-btn" onClick={() => setShowKeys((v) => !v)} aria-expanded={showKeys}>
            {showKeys ? 'Hide keyboard' : 'Show keyboard'}
          </button>
          <span className="muted small">Shortcuts: Space play/stop · R record · Del delete · Ctrl+Z/Y undo/redo · Ctrl+D duplicate · ↑↓ transpose</span>
        </div>
        {showKeys && <LiveKeyboard />}
      </div>
    </DawContext.Provider>
  );
}
