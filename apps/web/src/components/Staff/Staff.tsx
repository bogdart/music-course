import { useEffect, useRef, useState } from 'react';
import type { StaffRenderOptions } from './renderStaff';
import styles from './Staff.module.css';

export interface StaffProps {
  seq: string;
  clef?: StaffRenderOptions['clef'];
  keySig?: string;
  timeSig?: string;
  /** SeqItem index to highlight (e.g. the note currently playing) */
  highlight?: number | null;
  colors?: Record<number, string>;
  barsPerLine?: number;
  className?: string;
  showTimeSig?: boolean;
  lyrics?: string[] | undefined;
}

/** VexFlow notation for a seq string. VexFlow is lazy-loaded (code-split). */
export function Staff({ seq, clef, keySig, timeSig, highlight = null, colors, barsPerLine, className, showTimeSig, lyrics }: StaffProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [error, setError] = useState<string | null>(null);
  // a wide score scrolls horizontally: the scroll container must then be keyboard-reachable (WCAG scrollable-region-focusable)
  const [overflowing, setOverflowing] = useState(false);
  const checkOverflow = () => {
    const el = ref.current;
    if (el) setOverflowing(el.scrollWidth > el.clientWidth + 1);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(Math.floor(el.clientWidth || 600));
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current?.querySelector<HTMLDivElement>('[data-staff-canvas]');
    if (!el || !width) return;
    let cancelled = false;
    import('./renderStaff')
      .then(async (m) => {
        if (cancelled) return;
        const draw = () => {
          try {
            m.renderStaff(el, { seq, clef, key: keySig, timeSig, highlight, colors, width, barsPerLine, showTimeSig, lyrics });
            setError(null);
            checkOverflow();
          } catch (e) {
            setError((e as Error).message);
          }
        };
        draw();
        // redraw once music fonts are ready (first render may use fallback metrics)
        if (document.fonts?.ready) {
          await document.fonts.ready;
          if (!cancelled) draw();
        }
      })
      .catch((e: Error) => setError(e.message));
    return () => {
      cancelled = true;
    };
  }, [seq, clef, keySig, timeSig, highlight, colors, width, barsPerLine, showTimeSig, lyrics?.join(' ')]);

  return (
    <div
      ref={ref}
      className={`${styles.staff} ${className ?? ''}`}
      data-testid="staff"
      data-seq={seq}
      {...(overflowing ? { tabIndex: 0, role: 'region', 'aria-label': 'Notation (scroll horizontally)' } : {})}
    >
      <div data-staff-canvas />
      {error && <div className={styles.error}>Notation error: {error}</div>}
    </div>
  );
}

export default Staff;
