import {
  exportMidi, importMidi, projectFromEnvelope, checkSeq, isInstrumentId,
  type Project, type SnippetEnvelope,
} from '@music/core';

/** Trigger a browser download of the project as a .mid file. */
export function downloadMidi(project: Project): void {
  const bytes = exportMidi(project);
  const blob = new Blob([bytes as BlobPart], { type: 'audio/midi' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${project.name.replace(/[^\w\- ]+/g, '').trim() || 'project'}.mid`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function readMidiFile(file: File): Promise<Project> {
  const buf = new Uint8Array(await file.arrayBuffer());
  return importMidi(buf, file.name.replace(/\.midi?$/i, ''));
}

/**
 * Parse pasted snippet text: an `example`-style JSON envelope `{bpm, timeSig, key, tracks:[{instrument, seq}]}`
 * (extra fields ignored), a JSON project, or a bare seq string (→ one piano track). Throws with a readable message.
 */
export function parseSnippetText(text: string, name = 'Snippet'): Project {
  const t = text.trim();
  if (!t) throw new Error('Paste a snippet first.');
  if (t.startsWith('{')) {
    let data: unknown;
    try {
      data = JSON.parse(t);
    } catch (e) {
      throw new Error(`Invalid JSON: ${(e as Error).message}`);
    }
    const env = data as SnippetEnvelope & { title?: string };
    if (!Array.isArray(env.tracks)) throw new Error('The snippet needs a "tracks" array.');
    for (const [i, tr] of env.tracks.entries()) {
      const x = tr as { instrument?: unknown; seq?: unknown; clips?: unknown };
      if (Array.isArray(x.clips)) continue;
      if (!isInstrumentId(x.instrument)) throw new Error(`tracks[${i}]: unknown instrument "${String(x.instrument)}"`);
      const err = typeof x.seq === 'string' ? checkSeq(x.seq) : null;
      if (err) throw new Error(`tracks[${i}]: ${err}`);
    }
    return projectFromEnvelope(env, { name: env.title ?? name });
  }
  const err = checkSeq(t);
  if (err) throw new Error(err);
  return projectFromEnvelope({ bpm: 100, tracks: [{ instrument: 'piano', seq: t }] }, { name });
}

const SNIPPET_KEY = 'music-course.daw.snippet';

/**
 * Open an `example` envelope in the DAW page (for lessons: "Open in DAW"). Usage:
 * `openSnippetInDaw(envelope, navigate)` → navigates to /daw?snippet=1, which creates a new project from it.
 */
export function openSnippetInDaw(envelope: SnippetEnvelope & { title?: string }, navigate: (to: string) => void): void {
  try {
    sessionStorage.setItem(SNIPPET_KEY, JSON.stringify(envelope));
  } catch {
    /* ignore */
  }
  navigate('/daw?snippet=1');
}

export function takePendingSnippet(): (SnippetEnvelope & { title?: string }) | null {
  try {
    const raw = sessionStorage.getItem(SNIPPET_KEY);
    sessionStorage.removeItem(SNIPPET_KEY);
    return raw ? (JSON.parse(raw) as SnippetEnvelope & { title?: string }) : null;
  } catch {
    return null;
  }
}
