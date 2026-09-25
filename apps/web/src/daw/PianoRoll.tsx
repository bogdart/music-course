import { useEffect, useMemo, useRef, useState, type MouseEvent as RMouseEvent, type PointerEvent as RPointerEvent } from 'react';
import {
  DRUM_LANES, GRID_OPTIONS, PPQ, chordStampMidis, isBlackKey, midiToNote, parseKey, resolveScaleId, SCALE_INTERVALS,
  ticksPerBar, ticksPerBeat, type NoteEvent,
} from '@music/core';
import { playNote } from '../audio/engine';
import {
  deleteSelection, duplicateSelection, gridTicks, quantizeSelection, selectAll, stampChord, transposeSelection,
} from './actions';
import { findClip, setActiveDaw, useDaw, useDawStore } from './store';

const KEY_W = 58;
const VEL_H = 64;
const LOW = 21;
const HIGH = 108;

const LENGTHS = [
  { label: 'grid', v: 0 }, { label: '1/16', v: PPQ / 4 }, { label: '1/8', v: PPQ / 2 }, { label: '1/4', v: PPQ },
  { label: '1/2', v: PPQ * 2 }, { label: 'bar', v: -1 },
];

interface Gesture {
  mode: 'move' | 'resize' | 'band' | 'vel';
  x0: number;
  y0: number;
  orig: NoteEvent[];
  sel: number[];
  moved: boolean;
  /** gesture already has an undo snapshot */
  snap: boolean;
  anchor?: number;
  lastPitch?: number;
}

function Playhead({ clipStart, pxPerTick }: { clipStart: number; pxPerTick: number }) {
  const playhead = useDaw((s) => s.playhead);
  const x = (playhead - clipStart) * pxPerTick;
  if (x < 0) return null;
  return <div className="daw-playhead roll" style={{ left: KEY_W + x }} aria-hidden />;
}

export function PianoRoll({ compact = false }: { compact?: boolean }) {
  const store = useDawStore();
  const openClipId = useDaw((s) => s.openClipId);
  const project = useDaw((s) => s.project);
  const selected = useDaw((s) => s.selectedNotes);
  const tool = useDaw((s) => s.tool);
  const grid = useDaw((s) => s.grid);
  const snapOn = useDaw((s) => s.snap);
  const noteLength = useDaw((s) => s.noteLength);
  const chordText = useDaw((s) => s.chordText);
  const zoomX = useDaw((s) => s.rollZoomX);
  const rowH = useDaw((s) => s.rollRowH);
  const quantizeStrength = useDaw((s) => s.quantizeStrength);
  const st = store.getState();
  const found = findClip(project, openClipId);
  const scrollRef = useRef<HTMLDivElement>(null);
  const gesture = useRef<Gesture | null>(null);
  const [band, setBand] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const drums = found?.track.instrument === 'drums';
  const rows: number[] = useMemo(() => {
    if (!found) return [];
    if (drums) {
      const lanes = DRUM_LANES.map((l) => l.midi);
      const extra = [...new Set(found.clip.notes.map((n) => n.midi))].filter((m) => !lanes.includes(m)).sort((a, b) => b - a);
      return [...extra, ...lanes];
    }
    return Array.from({ length: HIGH - LOW + 1 }, (_, i) => HIGH - i);
  }, [found, drums]);
  const laneH = drums ? Math.max(rowH, 24) : rowH;

  const scalePcs = useMemo(() => {
    if (!project.key) return null;
    try {
      const k = parseKey(project.key);
      const sc = SCALE_INTERVALS[resolveScaleId(k.mode === 'minor' ? 'natural-minor' : 'major')];
      return new Set(sc.map((i) => (k.tonicPc + i) % 12));
    } catch {
      return null;
    }
  }, [project.key]);

  // centre the view on the clip's notes (or C4) when a clip is opened
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !found || drums) return;
    const ms = found.clip.notes.map((n) => n.midi);
    const centre = ms.length ? Math.round((Math.min(...ms) + Math.max(...ms)) / 2) : 64;
    el.scrollTop = Math.max(0, (HIGH - centre) * laneH - el.clientHeight / 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openClipId]);

  if (!found) return null;
  const { clip, track } = found;
  const pxPerTick = zoomX / PPQ;
  const bar = ticksPerBar(project.timeSig);
  const beat = ticksPerBeat(project.timeSig);
  const g = gridTicks(store);
  const viewTicks = Math.max(clip.lengthTicks + bar, Math.ceil((Math.max(0, ...clip.notes.map((n) => n.startTick + n.durationTicks)) + bar) / bar) * bar);
  const W = viewTicks * pxPerTick;
  const H = rows.length * laneH;
  const rowIndex = new Map(rows.map((m, i) => [m, i]));
  const newLen = noteLength === -1 ? bar : noteLength === 0 ? g : noteLength;

  const snapRound = (t: number) => (snapOn ? Math.round(t / g) * g : Math.round(t));
  const snapFloor = (t: number) => (snapOn ? Math.floor(t / g) * g : Math.round(t));
  const point = (e: { clientX: number; clientY: number }, el: Element) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const row = Math.max(0, Math.min(rows.length - 1, Math.floor(y / laneH)));
    return { x, y, tick: Math.max(0, x / pxPerTick), row, midi: rows[row]! };
  };
  const audition = (midi: number, vel = 0.8) => void playNote(track.instrument, midi, vel, 0.35);
  const withSnapshot = (gs: Gesture) => {
    if (!gs.snap) {
      st.beginGesture();
      gs.snap = true;
    }
  };
  const updateNotes = (fn: (notes: NoteEvent[]) => NoteEvent[]) =>
    st.mutate((d) => {
      const c = findClip(d, clip.id)?.clip;
      if (!c) return;
      c.notes = fn(c.notes);
      const end = c.notes.reduce((a, n) => Math.max(a, n.startTick + n.durationTicks), 0);
      if (end > c.lengthTicks) c.lengthTicks = Math.ceil(end / bar) * bar;
    }, { history: false });

  const onDown = (e: RPointerEvent<SVGSVGElement>) => {
    setActiveDaw(st.key);
    if (e.button === 2) return;
    const svg = e.currentTarget;
    svg.setPointerCapture?.(e.pointerId);
    const p = point(e, svg);
    const target = e.target as Element;
    const idxAttr = target.getAttribute('data-idx');
    const cur = store.getState();
    if (idxAttr !== null) {
      const idx = Number(idxAttr);
      const isSel = cur.selectedNotes.includes(idx);
      if (e.shiftKey && isSel) {
        st.set({ selectedNotes: cur.selectedNotes.filter((i) => i !== idx) });
        return;
      }
      const sel = isSel ? cur.selectedNotes : e.shiftKey ? [...cur.selectedNotes, idx] : [idx];
      st.set({ selectedNotes: sel });
      const edge = target.getAttribute('data-edge') === '1';
      gesture.current = { mode: edge ? 'resize' : 'move', x0: e.clientX, y0: e.clientY, orig: clip.notes.map((n) => ({ ...n })), sel, moved: false, snap: false, anchor: idx, lastPitch: clip.notes[idx]?.midi };
      if (!edge) audition(clip.notes[idx]!.midi, clip.notes[idx]!.velocity);
      return;
    }
    if (tool === 'select') {
      if (!e.shiftKey) st.set({ selectedNotes: [] });
      gesture.current = { mode: 'band', x0: p.x, y0: p.y, orig: clip.notes, sel: e.shiftKey ? cur.selectedNotes : [], moved: false, snap: true };
      return;
    }
    if (tool === 'chord') {
      const base = drums ? 60 : p.midi - (((p.midi % 12) + 12) % 12);
      const err = stampChord(store, snapFloor(p.tick), base, newLen);
      setMsg(err);
      if (!err) {
        const c = chordStampMidis(store.getState().chordText, project.key ?? 'C', base);
        c?.midis.forEach((m) => audition(m, 0.6));
      }
      return;
    }
    // draw: create a note, then drag to set its length
    st.beginGesture();
    const note: NoteEvent = { midi: p.midi, startTick: snapFloor(p.tick), durationTicks: newLen, velocity: 0.8 };
    const idx = clip.notes.length;
    updateNotes((ns) => [...ns, note]);
    st.set({ selectedNotes: [idx] });
    audition(p.midi);
    gesture.current = { mode: 'resize', x0: e.clientX, y0: e.clientY, orig: [...clip.notes.map((n) => ({ ...n })), note], sel: [idx], moved: false, snap: true, anchor: idx };
  };

  const onMove = (e: RPointerEvent<SVGSVGElement>) => {
    const gs = gesture.current;
    if (!gs) return;
    const dx = e.clientX - gs.x0;
    const dy = e.clientY - gs.y0;
    if (gs.mode === 'band') {
      const p = point(e, e.currentTarget);
      const x = Math.min(gs.x0, p.x);
      const y = Math.min(gs.y0, p.y);
      const w = Math.abs(p.x - gs.x0);
      const h = Math.abs(p.y - gs.y0);
      setBand({ x, y, w, h });
      const t0 = x / pxPerTick;
      const t1 = (x + w) / pxPerTick;
      const r0 = Math.floor(y / laneH);
      const r1 = Math.floor((y + h) / laneH);
      const hit = clip.notes
        .map((n, i) => ({ n, i }))
        .filter(({ n }) => {
          const r = rowIndex.get(n.midi);
          return r !== undefined && r >= r0 && r <= r1 && n.startTick < t1 && n.startTick + n.durationTicks > t0;
        })
        .map(({ i }) => i);
      st.set({ selectedNotes: [...new Set([...gs.sel, ...hit])] });
      return;
    }
    if (!gs.moved && Math.abs(dx) < 3 && Math.abs(dy) < 3) return;
    gs.moved = true;
    withSnapshot(gs);
    const sel = new Set(gs.sel);
    if (gs.mode === 'move') {
      const minStart = Math.min(...gs.sel.map((i) => gs.orig[i]?.startTick ?? 0));
      const dt = Math.max(-minStart, snapRound(dx / pxPerTick));
      const drow = Math.round(dy / laneH);
      updateNotes((ns) => ns.map((n, i) => {
        if (!sel.has(i) || !gs.orig[i]) return n;
        const o = gs.orig[i]!;
        let midi = o.midi;
        if (drums) {
          const r = rowIndex.get(o.midi) ?? 0;
          midi = rows[Math.max(0, Math.min(rows.length - 1, r + drow))]!;
        } else midi = Math.max(LOW, Math.min(HIGH, o.midi - drow));
        return { ...n, startTick: o.startTick + dt, midi };
      }));
      const anchor = gs.anchor !== undefined ? gs.orig[gs.anchor] : undefined;
      if (anchor) {
        const newPitch = drums ? rows[Math.max(0, Math.min(rows.length - 1, (rowIndex.get(anchor.midi) ?? 0) + drow))]! : Math.max(LOW, Math.min(HIGH, anchor.midi - drow));
        if (newPitch !== gs.lastPitch) {
          gs.lastPitch = newPitch;
          audition(newPitch, anchor.velocity);
        }
      }
    } else if (gs.mode === 'resize') {
      const dt = snapRound(dx / pxPerTick);
      const minLen = snapOn ? g : PPQ / 16;
      updateNotes((ns) => ns.map((n, i) => (sel.has(i) && gs.orig[i] ? { ...n, durationTicks: Math.max(minLen, gs.orig[i]!.durationTicks + dt) } : n)));
    }
  };

  const onUp = () => {
    gesture.current = null;
    setBand(null);
  };

  const onContext = (e: RMouseEvent) => {
    const idxAttr = (e.target as Element).getAttribute('data-idx');
    if (idxAttr === null) return;
    e.preventDefault();
    const idx = Number(idxAttr);
    st.set({ selectedNotes: [idx] });
    deleteSelection(store);
  };

  // velocity lane
  const velDown = (e: RPointerEvent<SVGSVGElement>) => {
    setActiveDaw(st.key);
    const svg = e.currentTarget;
    svg.setPointerCapture?.(e.pointerId);
    const x = e.clientX - svg.getBoundingClientRect().left;
    const t = x / pxPerTick;
    let best = -1;
    let bestD = Infinity;
    clip.notes.forEach((n, i) => {
      const d = Math.abs(n.startTick - t) - (selected.includes(i) ? 2 / pxPerTick : 0);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    if (best < 0 || bestD * pxPerTick > 12) return;
    st.beginGesture();
    const targets = selected.includes(best) ? selected : [best];
    if (!selected.includes(best)) st.set({ selectedNotes: [best] });
    gesture.current = { mode: 'vel', x0: e.clientX, y0: e.clientY, orig: clip.notes, sel: targets, moved: true, snap: true };
    velMove(e);
  };
  const velMove = (e: RPointerEvent<SVGSVGElement>) => {
    const gs = gesture.current;
    if (!gs || gs.mode !== 'vel') return;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
    const v = Math.max(0.05, Math.min(1, 1 - (y - 4) / (VEL_H - 8)));
    const sel = new Set(gs.sel);
    updateNotes((ns) => ns.map((n, i) => (sel.has(i) ? { ...n, velocity: Math.round(v * 100) / 100 } : n)));
  };

  const selVel = selected.length ? clip.notes[selected[0]!]?.velocity ?? 0.8 : null;
  const chordPreview = tool === 'chord' ? chordStampMidis(chordText, project.key ?? 'C') : null;
  const barLines: number[] = [];
  for (let t = 0; t <= viewTicks; t += g) barLines.push(t);

  return (
    <div className={`daw-roll ${compact ? 'compact' : ''}`} onPointerDown={() => setActiveDaw(st.key)}>
      <div className="daw-roll-toolbar row wrap">
        <input className="daw-clip-title" value={clip.name} aria-label="Clip name" onFocus={() => st.beginGesture()}
          onChange={(e) => st.mutate((d) => { const c = findClip(d, clip.id)?.clip; if (c) c.name = e.target.value; }, { history: false })} />
        <span className="muted small">{track.name}</span>
        <div className="daw-seg" role="radiogroup" aria-label="Tool">
          {([['draw', '✎ Draw'], ['select', '⬚ Select'], ['chord', '♫ Chord']] as const).map(([t, l]) => (
            <button key={t} type="button" role="radio" aria-checked={tool === t} className={`daw-mini wide ${tool === t ? 'on' : ''}`} onClick={() => st.set({ tool: t })}>{l}</button>
          ))}
        </div>
        {tool === 'chord' && (
          <label className="daw-field" title="Chord symbol (Am7, F/A) or roman numeral in the project key (vi, V7, bVII)">
            <span>chord</span>
            <input className="daw-chord-input" value={chordText} onChange={(e) => st.set({ chordText: e.target.value })} />
            <span className={chordPreview ? 'muted small' : 'bad-text small'}>{chordPreview ? chordPreview.symbol : '?'}</span>
          </label>
        )}
        <label className="daw-field">
          <span>grid</span>
          <select value={grid} onChange={(e) => st.set({ grid: Number(e.target.value) })}>
            {GRID_OPTIONS.map((o) => <option key={o.label} value={o.ticks}>{o.label}</option>)}
          </select>
          <input type="checkbox" checked={snapOn} onChange={(e) => st.set({ snap: e.target.checked })} title="Snap to grid" aria-label="Snap" />
        </label>
        <label className="daw-field">
          <span>length</span>
          <select value={noteLength} onChange={(e) => st.set({ noteLength: Number(e.target.value) })}>
            {LENGTHS.map((o) => <option key={o.label} value={o.v}>{o.label}</option>)}
          </select>
        </label>
        <div className="daw-seg" aria-label="Transpose">
          {[-12, -1, 1, 12].map((n) => (
            <button key={n} type="button" className="daw-mini" title={`Transpose ${n > 0 ? '+' : ''}${n} (selection or whole clip)`} onClick={() => transposeSelection(store, n)}>
              {n > 0 ? `+${n}` : n}
            </button>
          ))}
        </div>
        <div className="daw-seg">
          <button type="button" className="daw-mini wide" title="Quantize selection (or whole clip) to the grid" onClick={() => quantizeSelection(store, quantizeStrength)}>Quantize</button>
          <input type="range" min={0.1} max={1} step={0.05} value={quantizeStrength} aria-label="Quantize strength" title={`Strength ${Math.round(quantizeStrength * 100)}%`}
            onChange={(e) => st.set({ quantizeStrength: Number(e.target.value) })} className="daw-strength" />
          <span className="muted small">{Math.round(quantizeStrength * 100)}%</span>
        </div>
        <button type="button" className="daw-mini wide" title="Select all (Ctrl+A)" onClick={() => selectAll(store)}>All</button>
        <button type="button" className="daw-mini wide" title="Duplicate (Ctrl+D)" disabled={!selected.length} onClick={() => duplicateSelection(store)}>Dup</button>
        <button type="button" className="daw-mini wide" title="Delete (Del)" disabled={!selected.length} onClick={() => deleteSelection(store)}>Del</button>
        {selVel !== null && (
          <label className="daw-field" title="Velocity of the selection">
            <span>vel</span>
            <input type="range" min={0.05} max={1} step={0.01} value={selVel} onPointerDown={() => st.beginGesture()}
              onChange={(e) => {
                const v = Number(e.target.value);
                store.getState().mutate((d) => {
                  const c = findClip(d, clip.id)?.clip;
                  if (c) for (const i of store.getState().selectedNotes) if (c.notes[i]) c.notes[i]!.velocity = v;
                }, { history: false });
              }} />
          </label>
        )}
        <div className="daw-seg">
          <button type="button" className="daw-mini" title="Zoom out" onClick={() => st.set({ rollZoomX: Math.max(16, zoomX / 1.3) })}>−</button>
          <button type="button" className="daw-mini" title="Zoom in" onClick={() => st.set({ rollZoomX: Math.min(320, zoomX * 1.3) })}>+</button>
        </div>
        <button type="button" className="daw-mini" title="Close piano roll" aria-label="Close piano roll" onClick={() => st.set({ openClipId: null, selectedNotes: [] })}>✕</button>
      </div>
      {msg && <div className="small bad-text">{msg}</div>}
      <div className="daw-roll-scroll" ref={scrollRef} tabIndex={0} role="region" aria-label={`Piano roll: ${clip.name}`} style={{ height: drums ? Math.min(H + VEL_H + 30, compact ? 300 : 420) : compact ? 300 : 420 }}>
        <div className="daw-roll-inner" style={{ width: KEY_W + W }}>
          <div className="daw-roll-ruler" style={{ width: KEY_W + W }}
            onPointerDown={(e) => {
              const x = e.clientX - e.currentTarget.getBoundingClientRect().left - KEY_W;
              if (x >= 0) st.set({ playhead: clip.startTick + Math.round(x / pxPerTick / beat) * beat });
            }}>
            <div className="daw-roll-corner" style={{ width: KEY_W }} />
            {Array.from({ length: Math.ceil(viewTicks / bar) }, (_, i) => (
              <span key={i} className="daw-bar-num" style={{ left: KEY_W + i * bar * pxPerTick }}>{Math.floor(clip.startTick / bar) + i + 1}</span>
            ))}
          </div>
          <div className="daw-roll-body">
            <div className="daw-roll-keys" style={{ width: KEY_W, height: H }}>
              {rows.map((m) => {
                const lane = drums ? DRUM_LANES.find((l) => l.midi === m)?.name ?? midiToNote(m) : null;
                const black = !drums && isBlackKey(m);
                const out = !drums && scalePcs && !scalePcs.has(m % 12);
                return (
                  <div key={m} className={`daw-key ${black ? 'black' : 'white'} ${out ? 'out' : ''}`} style={{ height: laneH }}
                    onPointerDown={() => audition(m)}>
                    {drums ? lane : m % 12 === 0 ? midiToNote(m) : ''}
                  </div>
                );
              })}
            </div>
            <svg className={`daw-roll-grid tool-${tool}`} width={W} height={H} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp}
              onPointerCancel={onUp} onContextMenu={onContext} role="application" aria-label="Piano roll grid">
              {rows.map((m, i) => {
                const out = !drums && scalePcs && !scalePcs.has(m % 12);
                const cls = drums ? (i % 2 ? 'row-a' : 'row-b') : isBlackKey(m) ? 'row-black' : 'row-white';
                return <rect key={m} x={0} y={i * laneH} width={W} height={laneH} className={`${cls} ${out ? 'row-out' : ''} ${!drums && m % 12 === 0 ? 'row-c' : ''}`} />;
              })}
              <rect x={clip.lengthTicks * pxPerTick} y={0} width={Math.max(0, W - clip.lengthTicks * pxPerTick)} height={H} className="past-end" />
              {barLines.map((t) => (
                <line key={t} x1={t * pxPerTick} x2={t * pxPerTick} y1={0} y2={H} className={t % bar === 0 ? 'bar-line' : t % beat === 0 ? 'beat-line' : 'grid-line'} />
              ))}
              {clip.notes.map((n, i) => {
                const r = rowIndex.get(n.midi);
                if (r === undefined) return null;
                const x = n.startTick * pxPerTick;
                const w = Math.max(4, n.durationTicks * pxPerTick);
                const out = !drums && scalePcs && !scalePcs.has(n.midi % 12);
                const sel = selected.includes(i);
                return (
                  <g key={i}>
                    <rect data-idx={i} x={x + 0.5} y={r * laneH + 1} width={w - 1} height={laneH - 2} rx={2}
                      className={`note ${sel ? 'sel' : ''} ${out ? 'out' : ''}`} style={{ opacity: 0.45 + n.velocity * 0.55 }}>
                      <title>{`${drums ? DRUM_LANES.find((l) => l.midi === n.midi)?.name ?? midiToNote(n.midi) : midiToNote(n.midi)}${out ? ' (out of key)' : ''} · vel ${Math.round(n.velocity * 127)}`}</title>
                    </rect>
                    <rect data-idx={i} data-edge="1" x={x + w - Math.min(8, w / 3)} y={r * laneH + 1} width={Math.min(8, w / 3)} height={laneH - 2} className="note-edge" />
                  </g>
                );
              })}
              {band && <rect x={band.x} y={band.y} width={band.w} height={band.h} className="band" />}
            </svg>
          </div>
          <div className="daw-vel" style={{ width: KEY_W + W, height: VEL_H }}>
            <div className="daw-vel-label small muted" style={{ width: KEY_W }}>velocity</div>
            <svg width={W} height={VEL_H} onPointerDown={velDown} onPointerMove={velMove} onPointerUp={onUp} className="daw-vel-svg" aria-label="Velocity lane">
              {clip.notes.map((n, i) => {
                const h = n.velocity * (VEL_H - 8);
                return <rect key={i} x={n.startTick * pxPerTick} y={VEL_H - 4 - h} width={4} height={h} className={selected.includes(i) ? 'vel sel' : 'vel'} />;
              })}
            </svg>
          </div>
          <Playhead clipStart={clip.startTick} pxPerTick={pxPerTick} />
        </div>
      </div>
      <div className="muted small daw-hint">
        {tool === 'draw' && 'Click to add a note (drag to set its length) · drag notes to move · drag the right edge to resize · right-click deletes'}
        {tool === 'select' && 'Drag on empty space to select several notes · Shift adds to the selection · arrows move/transpose'}
        {tool === 'chord' && 'Type a chord (Am7, F/A) or numeral (vi, V7) and click where the chord should start; the row sets the octave'}
      </div>
    </div>
  );
}
