import { useEffect, useRef, useState } from 'react';
import type { ExerciseComponentProps } from './types';

/** ear-tempo: type the BPM; a tap-tempo button helps measure it. */
export function EarTempo({ item, onAnswer, disabled }: ExerciseComponentProps<'ear-tempo'>) {
  const [value, setValue] = useState('');
  const taps = useRef<number[]>([]);
  const [tapBpm, setTapBpm] = useState<number | null>(null);
  useEffect(() => {
    setValue('');
    setTapBpm(null);
    taps.current = [];
  }, [item]);
  const tap = () => {
    const now = performance.now();
    const t = taps.current.filter((x) => now - x < 3000);
    t.push(now);
    taps.current = t.slice(-8);
    if (taps.current.length >= 3) {
      const iv = taps.current.slice(1).map((x, i) => x - taps.current[i]!);
      const avg = iv.reduce((a, b) => a + b, 0) / iv.length;
      const bpm = Math.round(60000 / avg);
      setTapBpm(bpm);
      setValue(String(bpm));
    }
  };
  return (
    <form className="ear-tempo" onSubmit={(e) => { e.preventDefault(); if (value.trim()) onAnswer(Number(value)); }}>
      <div className="row wrap">
        <button type="button" className="btn big tap-tempo" onPointerDown={(e) => { e.preventDefault(); tap(); }} disabled={disabled}>
          Tap along {tapBpm ? `· ${tapBpm}` : ''}
        </button>
        <input className="text-input short" inputMode="numeric" aria-label="BPM" placeholder="BPM" value={value} disabled={disabled} onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className="btn primary" disabled={disabled || !value.trim()}>
          Check
        </button>
      </div>
      <p className="muted small">Tap the button with the beat (at least 3 taps), or type a number between {item.range[0]} and {item.range[1]}.</p>
    </form>
  );
}

export default EarTempo;
