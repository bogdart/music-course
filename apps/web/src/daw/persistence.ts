import { useEffect } from 'react';
import type { Project } from '@music/core';
import { api, ApiError } from '../api/client';
import type { DawStore } from './store';

const DEBOUNCE_MS = 1000;

/** Save now (PUT /api/projects/:id). */
export async function saveNow(store: DawStore): Promise<void> {
  const st = store.getState();
  if (!st.persistent) return;
  const project = st.project;
  st.set({ saveState: 'saving' });
  try {
    await api.saveProject(project);
    // only mark saved if nothing changed meanwhile
    if (store.getState().project === project) store.getState().set({ saveState: 'saved', saveError: null });
    else store.getState().set({ saveState: 'dirty' });
  } catch (e) {
    store.getState().set({ saveState: e instanceof ApiError && e.status === 0 ? 'offline' : 'error', saveError: (e as Error).message });
  }
}

/**
 * Debounced autosave of the store's project while mounted (only when `persistent`). Flushes pending changes
 * on unmount.
 */
export function useAutosave(store: DawStore): void {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const flush = () => {
      if (timer) clearTimeout(timer);
      timer = null;
      void saveNow(store);
    };
    const unsub = store.subscribe((s, prev) => {
      if (s.project === prev.project || !s.persistent) return;
      if (prev.project.id !== s.project.id) return; // a load, not an edit
      if (s.saveState !== 'dirty') s.set({ saveState: 'dirty' });
      if (timer) clearTimeout(timer);
      timer = setTimeout(flush, DEBOUNCE_MS);
    });
    const onUnload = () => {
      if (!timer) return;
      const p = store.getState().project;
      try {
        void fetch(`/api/projects/${encodeURIComponent(p.id)}`, { method: 'PUT', keepalive: true, headers: { 'content-type': 'application/json' }, body: JSON.stringify(p) });
      } catch {
        /* ignore */
      }
    };
    window.addEventListener('beforeunload', onUnload);
    return () => {
      unsub();
      window.removeEventListener('beforeunload', onUnload);
      if (timer) flush();
    };
  }, [store]);
}

/** Load a project from the server into the store. Returns false if it doesn't exist. */
export async function openProject(store: DawStore, id: string): Promise<boolean> {
  try {
    const p = await api.project(id);
    store.getState().load(p as Project, { persistent: true });
    return true;
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return false;
    throw e;
  }
}

/** Put a new project into the store and create it on the server. */
export async function openNew(store: DawStore, project: Project): Promise<void> {
  store.getState().load(project, { persistent: true });
  await saveNow(store);
}
