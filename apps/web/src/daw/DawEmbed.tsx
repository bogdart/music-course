import { useEffect, useMemo, useState } from 'react';
import { runChecks, type ChecksSummary, type DawCheckSpec, type DawTaskAnswer, type Project } from '@music/core';
import { DawWorkspace } from './DawWorkspace';
import { openNew, openProject, saveNow, useAutosave } from './persistence';
import { getDawStore, type DawStore } from './store';

export interface DawEmbedProps {
  /** Store key, e.g. "task:<lessonId>:<exerciseId>" */
  storeKey: string;
  /** Server id under which the learner's work is saved */
  projectId: string;
  /** Template project to start from */
  template: Project;
  checks: DawCheckSpec[];
  /** Key for checks without one (template key) */
  defaultKey?: string;
  /** Task text (omit when the surrounding shell already shows it) */
  task?: string;
  timerMin?: number;
  /** Save to the server (default true) */
  persist?: boolean;
  disabled?: boolean;
  onSubmit?(answer: DawTaskAnswer, summary: ChecksSummary): void;
}

function useProjectLoad(store: DawStore, projectId: string, template: Project, persist: boolean): string | null {
  const [status, setStatus] = useState<string | null>(null);
  useEffect(() => {
    const st = store.getState();
    if (st.project.id === projectId && (st.persistent || !persist)) return;
    const fromTemplate = () => ({ ...structuredClone(template), id: projectId });
    const openFirstClip = () => {
      const s = store.getState();
      const clip = s.project.tracks[0]?.clips[0];
      if (clip && !s.openClipId) s.set({ openClipId: clip.id, selectedClipId: clip.id });
    };
    if (!persist) {
      st.load(fromTemplate(), { persistent: false });
      openFirstClip();
      return;
    }
    let cancelled = false;
    setStatus('Loading your project…');
    openProject(store, projectId)
      .then(async (found) => {
        if (cancelled) return;
        if (!found) await openNew(store, fromTemplate());
        openFirstClip();
        setStatus(null);
      })
      .catch((e: Error) => {
        if (cancelled) return;
        store.getState().load(fromTemplate(), { persistent: false });
        openFirstClip();
        setStatus(`Server unreachable (${e.message}) — your work in this task will not be saved.`);
      });
    return () => {
      cancelled = true;
    };
  }, [store, projectId, template, persist]);
  return status;
}

function Timer({ storeKey, minutes }: { storeKey: string; minutes: number }) {
  const lsKey = `music-course.daw-timer.${storeKey}`;
  const [start, setStart] = useState<number>(() => {
    try {
      const v = Number(localStorage.getItem(lsKey));
      if (v > 0) return v;
      const now = Date.now();
      localStorage.setItem(lsKey, String(now));
      return now;
    } catch {
      return Date.now();
    }
  });
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const left = Math.max(0, Math.round((start + minutes * 60_000 - now) / 1000));
  const restart = () => {
    const n = Date.now();
    try {
      localStorage.setItem(lsKey, String(n));
    } catch {
      /* ignore */
    }
    setStart(n);
  };
  return (
    <span className={`daw-timer ${left === 0 ? 'done' : left < 60 ? 'soon' : ''}`} role="timer">
      ⏱ {left === 0 ? "Time's up — wrap up and submit" : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`}
      <button type="button" className="btn link small" onClick={restart}>restart</button>
    </span>
  );
}

/** A compact DAW bound to a daw-task: template project, per-check feedback, self-checks and submit. */
export function DawEmbed(props: DawEmbedProps) {
  const { storeKey, projectId, template, checks, defaultKey, task, timerMin, persist = true, disabled, onSubmit } = props;
  const store = useMemo(() => getDawStore(storeKey), [storeKey]);
  const status = useProjectLoad(store, projectId, template, persist);
  useAutosave(store);
  const [summary, setSummary] = useState<ChecksSummary | null>(null);
  const [selfChecks, setSelfChecks] = useState<Record<string, boolean>>({});
  const [confirmReset, setConfirmReset] = useState(false);
  const customs = checks.map((c, i) => ({ c, i })).filter(({ c }) => c.kind === 'custom');
  const idOf = (c: DawCheckSpec, i: number) => (typeof c.id === 'string' ? c.id : String(i));

  const check = () => {
    const s = runChecks(store.getState().project, checks, { ...(defaultKey ? { defaultKey } : {}), selfChecks });
    setSummary(s);
    return s;
  };

  return (
    <div className="daw-embed">
      {task && <p className="daw-task-text">{task}</p>}
      <div className="row wrap daw-embed-bar">
        {timerMin ? <Timer storeKey={storeKey} minutes={timerMin} /> : null}
        {status && <span className="muted small">{status}</span>}
        <span className="muted small">Your work is saved automatically{persist ? '' : ' (not in this preview)'}.</span>
        {confirmReset ? (
          <>
            <button type="button" className="btn small-btn danger" onClick={() => {
              setConfirmReset(false);
              store.getState().beginGesture();
              store.getState().load({ ...structuredClone(template), id: projectId }, { keepHistory: true, persistent: persist });
              if (persist) void saveNow(store);
              setSummary(null);
            }}>Reset to the template?</button>
            <button type="button" className="btn small-btn ghost" onClick={() => setConfirmReset(false)}>Cancel</button>
          </>
        ) : (
          <button type="button" className="btn small-btn ghost" onClick={() => setConfirmReset(true)}>Start over</button>
        )}
      </div>
      <DawWorkspace store={store} compact />
      <div className="daw-checks">
        <div className="row wrap">
          <button type="button" className="btn" onClick={check}>Check</button>
          {onSubmit && (
            <button type="button" className="btn primary" disabled={disabled} onClick={() => {
              const s = check();
              onSubmit({ project: structuredClone(store.getState().project), selfChecks }, s);
            }}>Submit</button>
          )}
          {summary && <span className={summary.allPassed ? 'ok-text' : 'muted'}>{summary.passed}/{summary.total} checks passed</span>}
        </div>
        {customs.length > 0 && (
          <fieldset className="daw-selfchecks">
            <legend className="small muted">Self-check (tick when done)</legend>
            {customs.map(({ c, i }) => (
              <label key={i} className="row small">
                <input type="checkbox" checked={!!selfChecks[idOf(c, i)]} onChange={(e) => setSelfChecks((s) => ({ ...s, [idOf(c, i)]: e.target.checked }))} />
                <span>{String(c.note ?? c.id ?? 'Self-check')}</span>
              </label>
            ))}
          </fieldset>
        )}
        {summary && (
          <ul className="daw-check-list" aria-label="Check results">
            {summary.results.filter((r) => !r.custom).map((r) => (
              <li key={r.index} className={r.passed ? 'ok' : 'bad'}>
                <span className="daw-check-icon" aria-hidden>{r.passed ? '✓' : '✗'}</span>
                <span><strong>{r.label}</strong> — <span className="small">{r.message}</span></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
