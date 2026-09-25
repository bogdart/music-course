import { useRef, useState } from 'react';
import { createClip, createProject, ticksPerBar, type ProjectSummaryDTO } from '@music/core';
import { api } from '../api/client';
import { downloadMidi, parseSnippetText, readMidiFile } from './io';
import { openNew, openProject, saveNow } from './persistence';
import { useDaw, useDawStore } from './store';

export function isLessonProject(id: string): boolean {
  return id.startsWith('task-') || id.startsWith('ref-');
}

export function blankProject() {
  const p = createProject({ name: `Song ${new Date().toLocaleDateString()}` });
  p.tracks[0]!.clips.push(createClip(0, 4 * ticksPerBar(p.timeSig), [], 'Clip'));
  return p;
}

const SAVE_LABEL: Record<string, string> = { idle: '', dirty: 'unsaved…', saving: 'saving…', saved: 'saved ✓', error: 'save failed', offline: 'offline — not saved' };

export function ProjectBar({ onOpened }: { onOpened?: (id: string) => void }) {
  const store = useDawStore();
  const name = useDaw((s) => s.project.name);
  const id = useDaw((s) => s.project.id);
  const saveState = useDaw((s) => s.saveState);
  const saveError = useDaw((s) => s.saveError);
  const canUndo = useDaw((s) => s.past.length > 0);
  const canRedo = useDaw((s) => s.future.length > 0);
  const [panel, setPanel] = useState<'none' | 'open' | 'snippet'>('none');
  const [list, setList] = useState<ProjectSummaryDTO[] | null>(null);
  const [listError, setListError] = useState<string | null>(null);
  const [snippet, setSnippet] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const st = store.getState();

  const refresh = async () => {
    setListError(null);
    try {
      setList(await api.projects());
    } catch (e) {
      setListError((e as Error).message);
    }
  };
  const open = async (pid: string) => {
    setError(null);
    try {
      if (await openProject(store, pid)) {
        setPanel('none');
        onOpened?.(pid);
      } else setError('That project no longer exists.');
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const create = async (p = blankProject()) => {
    setError(null);
    await openNew(store, p);
    setPanel('none');
    onOpened?.(p.id);
  };

  return (
    <div className="daw-projectbar">
      <div className="row wrap">
        <input className="daw-project-name" value={name} aria-label="Project name" onFocus={() => st.beginGesture()}
          onChange={(e) => st.mutate((d) => { d.name = e.target.value; }, { history: false })}
          onBlur={() => { if (!store.getState().project.name.trim()) st.mutate((d) => { d.name = 'Untitled'; }, { history: false }); }} />
        <span className={`small ${saveState === 'error' || saveState === 'offline' ? 'bad-text' : 'muted'}`} title={saveError ?? ''}>{SAVE_LABEL[saveState]}</span>
        <div className="row wrap daw-project-actions">
          <button type="button" className="btn small-btn" disabled={!canUndo} onClick={() => st.undo()} title="Undo (Ctrl+Z)">↶</button>
          <button type="button" className="btn small-btn" disabled={!canRedo} onClick={() => st.redo()} title="Redo (Ctrl+Y)">↷</button>
          <button type="button" className="btn small-btn" onClick={() => void create()}>New</button>
          <button type="button" className="btn small-btn" onClick={() => { setPanel(panel === 'open' ? 'none' : 'open'); void refresh(); }}>Open…</button>
          <button type="button" className="btn small-btn" onClick={() => setPanel(panel === 'snippet' ? 'none' : 'snippet')}>Load snippet…</button>
          <button type="button" className="btn small-btn" onClick={() => fileRef.current?.click()}>Import .mid</button>
          <button type="button" className="btn small-btn" onClick={() => downloadMidi(store.getState().project)}>Export .mid</button>
          <button type="button" className="btn small-btn" onClick={() => void saveNow(store)}>Save</button>
          {confirmDelete ? (
            <>
              <button type="button" className="btn small-btn danger" onClick={async () => {
                setConfirmDelete(false);
                try {
                  await api.deleteProject(id);
                } catch {
                  /* not saved yet */
                }
                const rest = (await api.projects().catch(() => [])).filter((p) => !isLessonProject(p.id));
                if (rest[0]) await open(rest[0].id);
                else await create();
              }}>Delete “{name}”?</button>
              <button type="button" className="btn small-btn ghost" onClick={() => setConfirmDelete(false)}>Cancel</button>
            </>
          ) : (
            <button type="button" className="btn small-btn ghost" onClick={() => setConfirmDelete(true)}>Delete</button>
          )}
        </div>
        <input ref={fileRef} type="file" accept=".mid,.midi,audio/midi" hidden onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = '';
          if (!f) return;
          try {
            await create(await readMidiFile(f));
          } catch (err) {
            setError(`Could not import: ${(err as Error).message}`);
          }
        }} />
      </div>
      {error && <div className="small bad-text">{error}</div>}
      {panel === 'open' && (
        <div className="daw-panel">
          {listError && <p className="bad-text small">{listError}</p>}
          {!list && !listError && <p className="muted small">Loading…</p>}
          {list && list.length === 0 && <p className="muted small">No saved projects yet.</p>}
          {list && list.length > 0 && (
            <>
              <ProjectList title="My projects" items={list.filter((p) => !isLessonProject(p.id))} current={id} onOpen={open} />
              <ProjectList title="Lesson projects" items={list.filter((p) => isLessonProject(p.id))} current={id} onOpen={open} />
            </>
          )}
        </div>
      )}
      {panel === 'snippet' && (
        <div className="daw-panel">
          <p className="small muted">
            Paste an <code>example</code> block’s JSON (<code>{'{"bpm":90,"tracks":[{"instrument":"piano","seq":"C4:q E4:q G4:h"}]}'}</code>) or just a seq like <code>C4:q D4:q E4:h</code>.
          </p>
          <textarea className="daw-snippet" value={snippet} onChange={(e) => setSnippet(e.target.value)} rows={5} aria-label="Snippet" />
          <div className="row">
            <button type="button" className="btn primary small-btn" onClick={() => {
              try {
                void create(parseSnippetText(snippet));
                setSnippet('');
              } catch (e) {
                setError((e as Error).message);
              }
            }}>Create project</button>
            <button type="button" className="btn ghost small-btn" onClick={() => setPanel('none')}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectList({ title, items, current, onOpen }: { title: string; items: ProjectSummaryDTO[]; current: string; onOpen: (id: string) => void }) {
  if (!items.length) return null;
  return (
    <div>
      <div className="small muted">{title}</div>
      <ul className="daw-project-list">
        {items.map((p) => (
          <li key={p.id}>
            <button type="button" className={`btn link ${p.id === current ? 'current' : ''}`} onClick={() => onOpen(p.id)}>{p.name}</button>
            <span className="muted small"> · {new Date(p.updatedAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
