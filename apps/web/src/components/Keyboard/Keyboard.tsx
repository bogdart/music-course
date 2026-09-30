import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import { isBlackKey, midiToNote, noteToMidi, pcToDegree, parseKey } from '@music/core';
import { noteInputBus } from '../../input/NoteInputBus';
import { useInputStore } from '../../stores/input';
import { useSettingsStore } from '../../stores/settings';
import { midiToQwerty } from '../../input/qwerty';
import styles from './Keyboard.module.css';

export type KeyRole = 'root' | 'third' | 'fifth' | 'seventh' | 'other';
export type KeyMark = 'correct' | 'wrong' | 'target';

export interface KeyboardProps {
  /** Note names or MIDI numbers; default: settings.keyboardRange. Snapped outward to white keys. */
  range?: [string | number, string | number];
  labels?: 'names' | 'degrees' | 'none';
  /** Key for degree labels / flat spelling */
  keyName?: string;
  /** Highlighted keys: list (role "other") or map midi → role */
  highlight?: number[] | Record<number, KeyRole>;
  /** Feedback marks */
  marks?: Record<number, KeyMark>;
  /** Show notes currently held from any input source (default true) */
  showHeld?: boolean;
  /** Accept pointer input (default true) */
  interactive?: boolean;
  /** Emit presses to the NoteInputBus as source "screen" (default true) — this also plays them via live-thru */
  emit?: boolean;
  onNoteOn?: (midi: number) => void;
  onNoteOff?: (midi: number) => void;
  /** Show QWERTY hints on keys */
  showQwerty?: boolean;
  /** Key height in px (default 180) */
  height?: number;
  className?: string;
  'aria-label'?: string;
}

function toMidi(v: string | number): number {
  return typeof v === 'number' ? v : noteToMidi(v);
}

export function Keyboard(props: KeyboardProps) {
  const settingsRange = useSettingsStore((s) => s.settings.keyboardRange);
  const settingsLabels = useSettingsStore((s) => s.settings.keyLabels);
  const heldNotes = useInputStore((s) => s.held);
  const qwertyOctave = useInputStore((s) => s.qwertyOctave);
  const {
    labels = settingsLabels, keyName, highlight, marks, showHeld = true, interactive = true, emit = true,
    onNoteOn, onNoteOff, showQwerty = false, height = 180,
  } = props;

  const [lo, hi] = useMemo(() => {
    const r = props.range ?? settingsRange;
    let a = toMidi(r[0]);
    let b = toMidi(r[1]);
    if (a > b) [a, b] = [b, a];
    while (isBlackKey(a)) a--;
    while (isBlackKey(b)) b++;
    return [a, b];
  }, [props.range, settingsRange]);

  const flats = useMemo(() => {
    if (!keyName) return false;
    try {
      return parseKey(keyName).prefersFlats;
    } catch {
      return false;
    }
  }, [keyName]);

  const roles = useMemo(() => {
    const m = new Map<number, KeyRole>();
    if (Array.isArray(highlight)) highlight.forEach((n) => m.set(n, 'other'));
    else if (highlight) Object.entries(highlight).forEach(([k, v]) => m.set(Number(k), v));
    return m;
  }, [highlight]);

  const held = useMemo(() => new Set(showHeld ? heldNotes : []), [heldNotes, showHeld]);

  const whites: number[] = [];
  const blacks: number[] = [];
  for (let m = lo; m <= hi; m++) (isBlackKey(m) ? blacks : whites).push(m);
  const ww = 100 / whites.length;

  const pointers = useRef(new Map<number, number>());
  const press = useCallback(
    (midi: number) => {
      if (emit) noteInputBus.noteOn(midi, 0.8, 'screen');
      onNoteOn?.(midi);
    },
    [emit, onNoteOn],
  );
  const release = useCallback(
    (midi: number) => {
      if (emit) noteInputBus.noteOff(midi, 'screen');
      onNoteOff?.(midi);
    },
    [emit, onNoteOff],
  );

  const keyAt = (e: RPointerEvent): number | null => {
    const el = typeof document.elementFromPoint === 'function' ? document.elementFromPoint(e.clientX, e.clientY) : (e.target as Element);
    const k = (el as Element | null)?.closest?.('[data-midi]') ?? (e.target as Element).closest?.('[data-midi]');
    return k ? Number(k.getAttribute('data-midi')) : null;
  };

  const onDown = (e: RPointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const k = (e.target as Element).closest('[data-midi]');
    if (!k) return;
    e.preventDefault();
    const midi = Number(k.getAttribute('data-midi'));
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, midi);
    press(midi);
  };
  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    const cur = pointers.current.get(e.pointerId);
    if (cur === undefined) return;
    const midi = keyAt(e);
    if (midi === null || midi === cur) return;
    release(cur);
    pointers.current.set(e.pointerId, midi);
    press(midi);
  };
  const onUp = (e: RPointerEvent<HTMLDivElement>) => {
    const cur = pointers.current.get(e.pointerId);
    if (cur === undefined) return;
    pointers.current.delete(e.pointerId);
    release(cur);
  };

  const label = (m: number): string | null => {
    if (labels === 'none') return null;
    if (labels === 'degrees' && keyName) {
      try {
        return pcToDegree(m, keyName);
      } catch {
        return null;
      }
    }
    const n = midiToNote(m, { flats });
    return !isBlackKey(m) && n.startsWith('C') ? n : n.replace(/-?\d+$/, '');
  };

  const cls = (m: number, black: boolean) => {
    const c = [black ? styles.black : styles.white];
    const role = roles.get(m);
    if (role) c.push(styles[`role_${role}`]!);
    const mark = marks?.[m];
    if (mark) c.push(styles[`mark_${mark}`]!);
    if (held.has(m)) c.push(styles.held!);
    if (m === 60) c.push(styles.middleC!);
    return c.join(' ');
  };

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [overflows, setOverflows] = useState(false);
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollWidth > el.clientWidth + 1);
    check();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [whites.length]);

  return (
    <div
      ref={scrollerRef}
      className={`${styles.scroller} ${props.className ?? ''}`}
      // a keyboard wider than the screen scrolls: then it must be reachable (and scrollable) from the keyboard too
      {...(overflows ? { tabIndex: 0, role: 'region', 'aria-label': 'Keyboard (scroll sideways)' } : {})}
    >
      <div
        className={styles.keyboard}
        style={{ height, minWidth: whites.length * 34 }}
        role="group"
        aria-label={props['aria-label'] ?? 'Piano keyboard'}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onContextMenu={(e) => e.preventDefault()}
      >
        {whites.map((m, i) => (
          <div
            key={m}
            data-midi={m}
            data-testid={`key-${m}`}
            className={cls(m, false)}
            style={{ left: `${i * ww}%`, width: `${ww}%` }}
            aria-label={midiToNote(m, { flats })}
            aria-pressed={held.has(m)}
            role="button"
          >
            {showQwerty && midiToQwerty(m, qwertyOctave) && <span className={styles.qwerty}>{midiToQwerty(m, qwertyOctave)}</span>}
            {label(m) && <span className={styles.label}>{label(m)}</span>}
          </div>
        ))}
        {blacks.map((m) => {
          const whiteIndex = whites.findIndex((w) => w > m);
          const left = whiteIndex * ww - ww * 0.3;
          return (
            <div
              key={m}
              data-midi={m}
              data-testid={`key-${m}`}
              className={cls(m, true)}
              style={{ left: `${left}%`, width: `${ww * 0.6}%` }}
              aria-label={midiToNote(m, { flats })}
              aria-pressed={held.has(m)}
              role="button"
            >
              {showQwerty && midiToQwerty(m, qwertyOctave) && <span className={styles.qwerty}>{midiToQwerty(m, qwertyOctave)}</span>}
              {labels !== 'none' && (roles.has(m) || labels === 'degrees') && label(m) && <span className={styles.label}>{label(m)}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
