import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { projectFromEnvelope } from '@music/core';
import { api } from '../api/client';
import { DawWorkspace } from '../daw/DawWorkspace';
import { takePendingSnippet } from '../daw/io';
import { openNew, openProject, useAutosave } from '../daw/persistence';
import { blankProject, isLessonProject, ProjectBar } from '../daw/ProjectBar';
import { DawContext, getDawStore, type DawStore } from '../daw/store';

/** Initial loads in flight, keyed by URL params (React StrictMode runs effects twice in dev). */
const inflight = new Map<string, Promise<{ status: string | null | undefined; setUrl: boolean }>>();

/** `status: undefined` = nothing was loaded (e.g. the URL was just updated to the current project): keep the message. */
async function initialLoad(store: DawStore, want: string | null, fromSnippet: boolean): Promise<{ status: string | null | undefined; setUrl: boolean }> {
  try {
    const snippet = fromSnippet ? takePendingSnippet() : null;
    const st = store.getState();
    if (snippet) {
      await openNew(store, projectFromEnvelope(snippet, { name: snippet.title ?? 'Snippet' }));
      return { status: null, setUrl: true };
    }
    if (want && want !== st.project.id) {
      if (await openProject(store, want)) return { status: null, setUrl: false };
      await openNew(store, blankProject());
      return { status: `Project "${want}" was not found — started a new one.`, setUrl: true };
    }
    if (want && want === st.project.id && st.persistent) return { status: undefined, setUrl: false };
    if (!st.persistent) {
      const list = (await api.projects()).filter((p) => !isLessonProject(p.id));
      if (list[0]) await openProject(store, list[0].id);
      else await openNew(store, blankProject());
    }
    return { status: null, setUrl: true };
  } catch (e) {
    return { status: `Server unreachable (${(e as Error).message}) — working locally, changes are not saved.`, setUrl: false };
  }
}

/** The micro-DAW page: /daw, /daw?project=<id>, /daw?snippet=1 (see daw/io.ts openSnippetInDaw). */
export function Daw() {
  const store = getDawStore('main');
  const [params, setParams] = useSearchParams();
  const [status, setStatus] = useState<string | null>('Loading…');
  useAutosave(store);

  useEffect(() => {
    let cancelled = false;
    const key = `${params.get('project') ?? ''}|${params.get('snippet') ?? ''}`;
    let job = inflight.get(key);
    if (!job) {
      job = initialLoad(store, params.get('project'), !!params.get('snippet')).finally(() => setTimeout(() => inflight.delete(key), 0));
      inflight.set(key, job);
    }
    job.then((r) => {
      if (cancelled) return;
      // keep a "not found" message when the follow-up URL update re-runs this effect for the project just created
      setStatus((cur) => (r.status !== undefined ? r.status : cur === 'Loading…' ? null : cur));
      if (r.setUrl && params.get('project') !== store.getState().project.id) setParams({ project: store.getState().project.id }, { replace: true });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.get('project'), params.get('snippet')]);

  return (
    <div className="page daw-page">
      <h1 className="sr-only">DAW</h1>
      <DawContext.Provider value={store}>
        <ProjectBar onOpened={(id) => setParams({ project: id }, { replace: true })} />
      </DawContext.Provider>
      {status && <p className="muted small">{status}</p>}
      <DawWorkspace store={store} />
    </div>
  );
}
export default Daw;
