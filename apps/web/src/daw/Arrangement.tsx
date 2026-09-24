import { useEffect, useMemo, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import { INSTRUMENT_IDS, INSTRUMENT_LABELS, PPQ, ticksPerBar, ticksPerBeat, type Clip, type InstrumentId, type Track } from '@music/core';
import { edits, useDaw, useDawStore } from './store';
import { play, projectEnd } from './transport';

const ROW_H = 58;

function ClipPreview({ clip, widthPx, drums }: { clip: Clip; widthPx: number; drums: boolean }) {
  const h = ROW_H - 20;
  if (!clip.notes.length) return null;
  const lo = Math.min(...clip.notes.map((n) => n.midi));
  const hi = Math.max(...clip.notes.map((n) => n.midi));
  const span = Math.max(hi - lo, drums ? 1 : 12);
  const sx = widthPx / clip.lengthTicks;
  return (
    <svg className="daw-clip-preview" width={widthPx} height={h} aria-hidden>
      {clip.notes.filter((n) => n.startTick < clip.lengthTicks).map((n, i) => (
        <rect key={i} x={n.startTick * sx} y={h - 3 - ((n.midi - lo) / span) * (h - 6)} width={Math.max(2, Math.min(n.durationTicks, clip.lengthTicks - n.startTick) * sx - 1)} height={3} rx={1} />
      ))}
    </svg>
  );
}

function Playhead({ pxPerTick, offset }: { pxPerTick: number; offset: number }) {
  const playhead = useDaw((s) => s.playhead);
  return <div className="daw-playhead" style={{ left: offset + playhead * pxPerTick }} aria-hidden />;
}

function TrackHeader({ track, index, compact }: { track: Track; index: number; compact: boolean }) {
  const store = useDawStore();
  const selected = useDaw((s) => s.selectedTrackId === track.id);
  const armed = useDaw((s) => s.armedTrackId === track.id);
  const nTracks = useDaw((s) => s.project.tracks.length);
  const st = store.getState();
  const patch = (p: Partial<Track>, history = true) => st.mutate((d) => edits.patchTrack(d, track.id, p), { history });
  return (
    <div className={`daw-track-head ${selected ? 'selected' : ''}`} onPointerDown={() => st.set({ selectedTrackId: track.id })} style={{ height: ROW_H }}>
      <div className="row">
        <span className="daw-track-num muted small">{index + 1}</span>
        <input className="daw-track-name" value={track.name} aria-label={`Track ${index + 1} name`} onChange={(e) => patch({ name: e.target.value }, false)} onFocus={() => st.beginGesture()} />
        <select value={track.instrument} aria-label="Instrument" onChange={(e) => patch({ instrument: e.target.value as InstrumentId })}>
          {INSTRUMENT_IDS.map((id) => <option key={id} value={id}>{INSTRUMENT_LABELS[id]}</option>)}
        </select>
      </div>
      <div className="row">
        <button type="button" className={`daw-mini ${track.mute ? 'on mute' : ''}`} title="Mute" aria-pressed={track.mute} onClick={() => patch({ mute: !track.mute })}>M</button>
        <button type="button" className={`daw-mini ${track.solo ? 'on solo' : ''}`} title="Solo" aria-pressed={track.solo} onClick={() => patch({ solo: !track.solo })}>S</button>
        <button type="button" className={`daw-mini ${armed ? 'on arm' : ''}`} title="Arm for recording" aria-pressed={armed} onClick={() => st.set({ armedTrackId: armed ? null : track.id, selectedTrackId: track.id })}>●</button>
        <input type="range" min={0} max={1} step={0.01} value={track.volume} title={`Volume ${Math.round(track.volume * 100)}%`} aria-label="Volume" className="daw-vol"
          onPointerDown={() => st.beginGesture()} onChange={(e) => patch({ volume: Number(e.target.value) }, false)} />
        {!compact && (
          <input type="range" min={-1} max={1} step={0.05} value={track.pan} title={`Pan ${track.pan.toFixed(2)} (saved + MIDI export)`} aria-label="Pan" className="daw-pan"
            onPointerDown={() => st.beginGesture()} onChange={(e) => patch({ pan: Number(e.target.value) }, false)} onDoubleClick={() => patch({ pan: 0 })} />
        )}
        <button type="button" className="daw-mini" title="Delete track" aria-label="Delete track" disabled={nTracks <= 1}
          onClick={() => {
            st.mutate((d) => edits.removeTrack(d, track.id));
            const s = store.getState();
            if (s.selectedTrackId === track.id) s.set({ selectedTrackId: s.project.tracks[0]?.id ?? null });
          }}>✕</button>
      </div>
    </div>
  );
}

function useNarrow(query = '(max-width: 640px)'): boolean {
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && !!window.matchMedia?.(query).matches);
  useEffect(() => {
    const m = window.matchMedia?.(query);
    if (!m) return;
    const on = () => setNarrow(m.matches);
    m.addEventListener?.('change', on);
    return () => m.removeEventListener?.('change', on);
  }, [query]);
  return narrow;
}

interface DragState {
  kind: 'move' | 'resize';
  clipId: string;
  x0: number;
  orig: { startTick: number; lengthTicks: number };
  moved: boolean;
  wasSelected: boolean;
}

export function Arrangement({ compact: compactProp = false }: { compact?: boolean }) {
  const narrow = useNarrow();
  const compact = compactProp || narrow;
  const store = useDawStore();
  const project = useDaw((s) => s.project);
  const zoomX = useDaw((s) => s.zoomX);
  const selectedClipId = useDaw((s) => s.selectedClipId);
  const openClipId = useDaw((s) => s.openClipId);
  const loopOn = useDaw((s) => s.loopOn);
  const st = store.getState();
  const [addInst, setAddInst] = useState<InstrumentId>('piano');
  const drag = useRef<DragState | null>(null);
  const rulerDrag = useRef<{ x0: number; t0: number; moved: boolean } | null>(null);

  const headerW = narrow ? 128 : compact ? 160 : 230;
  const pxPerTick = zoomX / PPQ;
  const bar = ticksPerBar(project.timeSig);
  const beat = ticksPerBeat(project.timeSig);
  const bars = useMemo(() => Math.max(compact ? 8 : 16, Math.ceil(Math.max(projectEnd(project), project.loop?.endTick ?? 0) / bar) + (compact ? 2 : 8)), [project, bar, compact]);
  const width = bars * bar * pxPerTick;

  const tickAt = (e: { clientX: number }, el: Element) => Math.max(0, (e.clientX - el.getBoundingClientRect().left) / pxPerTick);
  const snapBeat = (t: number) => Math.round(t / beat) * beat;

  const onClipDown = (e: RPointerEvent, track: Track, clip: Clip, kind: 'move' | 'resize') => {
    e.stopPropagation();
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    drag.current = { kind, clipId: clip.id, x0: e.clientX, orig: { startTick: clip.startTick, lengthTicks: clip.lengthTicks }, moved: false, wasSelected: selectedClipId === clip.id };
    st.set({ selectedClipId: clip.id, selectedTrackId: track.id });
  };
  const onClipMove = (e: RPointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x0;
    if (!d.moved && Math.abs(dx) < 5) return;
    if (!d.moved) {
      d.moved = true;
      st.beginGesture();
    }
    const dt = snapBeat(dx / pxPerTick);
    st.mutate((p) => {
      for (const t of p.tracks) {
        const c = t.clips.find((x) => x.id === d.clipId);
        if (!c) continue;
        if (d.kind === 'move') c.startTick = Math.max(0, d.orig.startTick + dt);
        else c.lengthTicks = Math.max(beat, d.orig.lengthTicks + dt);
        t.clips.sort((a, b) => a.startTick - b.startTick);
      }
    }, { history: false });
  };
  const onClipUp = (clip: Clip) => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved && d.wasSelected) st.set({ openClipId: clip.id, selectedNotes: [] });
  };

  const addClipAt = (track: Track, tick: number) => {
    const start = Math.floor(tick / bar) * bar;
    const next = track.clips.filter((c) => c.startTick > start).map((c) => c.startTick);
    const len = Math.max(bar, Math.min(4 * bar, (next.length ? Math.min(...next) : Infinity) - start));
    if (track.clips.some((c) => c.startTick <= start && start < c.startTick + c.lengthTicks)) return;
    let id: string | undefined;
    st.mutate((p) => {
      id = edits.addClip(p, track.id, start, Number.isFinite(len) ? len : 4 * bar)?.id;
    });
    if (id) st.set({ selectedClipId: id, openClipId: id, selectedTrackId: track.id, selectedNotes: [] });
  };

  const onRulerDown = (e: RPointerEvent) => {
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    rulerDrag.current = { x0: e.clientX, t0: tickAt(e, e.currentTarget), moved: false };
  };
  const onRulerMove = (e: RPointerEvent) => {
    const r = rulerDrag.current;
    if (!r) return;
    if (!r.moved && Math.abs(e.clientX - r.x0) < 6) return;
    if (!r.moved) st.beginGesture();
    r.moved = true;
    const t1 = tickAt(e, e.currentTarget);
    const a = Math.floor(Math.min(r.t0, t1) / bar) * bar;
    const b = Math.max(a + bar, Math.ceil(Math.max(r.t0, t1) / bar) * bar);
    st.mutate((p) => { p.loop = { startTick: a, endTick: b }; }, { history: false });
    if (!store.getState().loopOn) st.set({ loopOn: true });
  };
  const onRulerUp = () => {
    const r = rulerDrag.current;
    rulerDrag.current = null;
    if (r && !r.moved) {
      st.set({ playhead: snapBeat(r.t0) });
      if (store.getState().playing && !store.getState().recording) void play(store);
    }
  };

  const addMarker = () => {
    const s = store.getState();
    const b = Math.floor(s.playhead / bar) + 1;
    const name = window.prompt(`Section name at bar ${b}:`, ['Intro', 'Verse', 'Chorus', 'Bridge', 'Outro'][(s.project.markers?.length ?? 0) % 5]);
    if (!name) return;
    st.mutate((p) => {
      p.markers = [...(p.markers ?? []).filter((m) => m.bar !== b), { bar: b, name }].sort((x, y) => x.bar - y.bar);
    });
  };
  const editMarker = (barNo: number, old: string) => {
    const name = window.prompt('Rename section (empty = delete):', old);
    if (name === null) return;
    st.mutate((p) => {
      p.markers = (p.markers ?? []).map((m) => (m.bar === barNo ? { ...m, name } : m)).filter((m) => m.name.trim());
    });
  };

  const selTrack = project.tracks.find((t) => t.id === st.selectedTrackId) ?? project.tracks[0];

  return (
    <div className={`daw-arr ${compact ? 'compact' : ''}`}>
      <div className="daw-arr-scroll" style={{ ['--hdr' as string]: `${headerW}px` }}>
        <div className="daw-arr-inner" style={{ width: headerW + width }}>
          <div className="daw-arr-row daw-ruler-row">
            <div className="daw-corner" style={{ width: headerW }}>
              <button type="button" className="daw-mini" title="Zoom out" onClick={() => st.set({ zoomX: Math.max(6, zoomX / 1.4) })}>−</button>
              <button type="button" className="daw-mini" title="Zoom in" onClick={() => st.set({ zoomX: Math.min(160, zoomX * 1.4) })}>+</button>
              <button type="button" className="daw-mini wide" title="Add a section marker at the playhead" onClick={addMarker}>{compact ? "+ sec" : "+ marker"}</button>
            </div>
            <div className="daw-ruler" style={{ width }} onPointerDown={onRulerDown} onPointerMove={onRulerMove} onPointerUp={onRulerUp}
              title="Click: move playhead · drag: set loop region">
              {project.loop && (
                <div className={`daw-loop-band ${loopOn ? 'on' : ''}`} style={{ left: project.loop.startTick * pxPerTick, width: (project.loop.endTick - project.loop.startTick) * pxPerTick }} />
              )}
              {Array.from({ length: bars }, (_, i) => (
                <span key={i} className="daw-bar-num" style={{ left: i * bar * pxPerTick }}>{i + 1}</span>
              ))}
              {(project.markers ?? []).map((m) => (
                <button type="button" key={m.bar} className="daw-marker" style={{ left: (m.bar - 1) * bar * pxPerTick }}
                  onPointerDown={(e) => e.stopPropagation()} onClick={() => editMarker(m.bar, m.name)} title="Rename / delete section">
                  {m.name}
                </button>
              ))}
            </div>
          </div>
          {project.tracks.map((track, ti) => (
            <div className="daw-arr-row" key={track.id}>
              <TrackHeader track={track} index={ti} compact={compact} />
              <div className={`daw-lane ${st.selectedTrackId === track.id ? 'selected' : ''}`} style={{ width, height: ROW_H, backgroundSize: `${bar * pxPerTick}px 100%` }}
                onPointerDown={() => st.set({ selectedTrackId: track.id, selectedClipId: null })}
                onDoubleClick={(e) => addClipAt(track, tickAt(e, e.currentTarget))}>
                {track.clips.map((clip) => {
                  const w = Math.max(8, clip.lengthTicks * pxPerTick);
                  return (
                    <div key={clip.id}
                      className={`daw-clip ${track.instrument} ${selectedClipId === clip.id ? 'selected' : ''} ${openClipId === clip.id ? 'open' : ''}`}
                      style={{ left: clip.startTick * pxPerTick, width: w }}
                      onPointerDown={(e) => onClipDown(e, track, clip, 'move')} onPointerMove={onClipMove} onPointerUp={() => onClipUp(clip)}
                      onDoubleClick={(e) => { e.stopPropagation(); st.set({ openClipId: clip.id, selectedNotes: [] }); }}
                      title="Drag to move · tap again (or double-click) to edit notes">
                      <span className="daw-clip-name">{clip.name}</span>
                      <ClipPreview clip={clip} widthPx={w} drums={track.instrument === 'drums'} />
                      <span className="daw-clip-resize" onPointerDown={(e) => onClipDown(e, track, clip, 'resize')} aria-hidden />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <Playhead pxPerTick={pxPerTick} offset={headerW} />
        </div>
      </div>
      <div className="daw-arr-foot row wrap">
        <select value={addInst} onChange={(e) => setAddInst(e.target.value as InstrumentId)} aria-label="New track instrument">
          {INSTRUMENT_IDS.map((id) => <option key={id} value={id}>{INSTRUMENT_LABELS[id]}</option>)}
        </select>
        <button type="button" className="btn small-btn" onClick={() => {
          let id: string | undefined;
          st.mutate((p) => { id = edits.addTrack(p, addInst).id; });
          if (id) st.set({ selectedTrackId: id, armedTrackId: id });
        }}>+ Track</button>
        {selTrack && (
          <button type="button" className="btn small-btn" title="Add a clip on the selected track at the playhead (or double-click an empty lane)"
            onClick={() => addClipAt(selTrack, store.getState().playhead)}>+ Clip</button>
        )}
        {selectedClipId && (
          <>
            <button type="button" className="btn small-btn" onClick={() => st.set({ openClipId: selectedClipId, selectedNotes: [] })}>Edit notes</button>
            <button type="button" className="btn small-btn" onClick={() => {
              let id: string | undefined;
              st.mutate((p) => { id = edits.duplicateClip(p, selectedClipId)?.id; });
              if (id) st.set({ selectedClipId: id });
            }}>Duplicate clip</button>
            <button type="button" className="btn small-btn" onClick={() => {
              st.mutate((p) => edits.removeClip(p, selectedClipId));
              st.set({ selectedClipId: null, ...(openClipId === selectedClipId ? { openClipId: null } : {}) });
            }}>Delete clip</button>
          </>
        )}
        <span className="muted small daw-hint">Double-click a lane to add a clip · drag the ruler to set a loop</span>
      </div>
    </div>
  );
}
