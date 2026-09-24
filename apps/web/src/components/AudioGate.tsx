import { useEffect, useState } from 'react';
import { startAudio } from '../audio/engine';
import { useAudioStore } from '../stores/audio';

/**
 * Browsers only allow audio after a user gesture. Shows a "Tap to enable audio" banner and unlocks the
 * AudioEngine on the first pointer/key gesture anywhere on the page.
 */
export function AudioGate() {
  const started = useAudioStore((s) => s.started);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (started) return;
    const unlock = () => {
      startAudio().catch((e: Error) => setError(e.message));
    };
    window.addEventListener('pointerdown', unlock, { once: true, capture: true });
    window.addEventListener('keydown', unlock, { once: true, capture: true });
    return () => {
      window.removeEventListener('pointerdown', unlock, { capture: true });
      window.removeEventListener('keydown', unlock, { capture: true });
    };
  }, [started]);
  if (started) return null;
  return (
    <button type="button" className="audio-gate" onClick={() => startAudio().catch((e: Error) => setError(e.message))}>
      🔊 Tap to enable audio{error ? ` — ${error}` : ''}
    </button>
  );
}
