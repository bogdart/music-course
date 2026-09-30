import type {
  AttemptInput, CurriculumDTO, ExerciseCompleteInput, GlossaryTerm, ParsedLessonDTO, ProgressSummaryDTO,
  JournalEntryDTO, LadderStateDTO, ProjectDTO, ProjectSummaryDTO, Settings, SrsDueDTO,
} from '@music/core';

export class ApiError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

async function req<T>(method: string, path: string, body?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api${path}`, {
      method,
      headers: body !== undefined ? { 'content-type': 'application/json' } : {},
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
  } catch (e) {
    throw new ApiError(`Server unreachable (${(e as Error).message})`, 0);
  }
  const text = await res.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    throw new ApiError(res.ok ? 'Invalid JSON from server' : `HTTP ${res.status}`, res.status);
  }
  if (!res.ok) throw new ApiError((data as { error?: string } | null)?.error ?? `HTTP ${res.status}`, res.status);
  return data as T;
}

export const api = {
  curriculum: () => req<CurriculumDTO>('GET', '/content/curriculum'),
  lesson: (id: string) => req<ParsedLessonDTO>('GET', `/content/lessons/${encodeURIComponent(id)}`),
  glossary: () => req<{ terms: GlossaryTerm[] }>('GET', '/content/glossary'),
  assetUrl: (lessonId: string, file: string) => `/api/content/lessons/${encodeURIComponent(lessonId)}/assets/${file}`,
  progress: () => req<ProgressSummaryDTO>('GET', '/progress'),
  attempt: (a: AttemptInput) => req<{ ok: true; id: number }>('POST', '/progress/attempts', a),
  exerciseComplete: (c: ExerciseCompleteInput) => req<{ ok: true }>('POST', '/progress/exercises/complete', c),
  restart: (fromLessonId: string) => req<{ ok: true; reset: number; lessonIds: string[] }>('POST', '/progress/restart', { fromLessonId }),
  lessonComplete: (id: string) => req<{ ok: true }>('POST', `/progress/lessons/${encodeURIComponent(id)}/complete`),
  srsDue: (limit = 20, newLimit?: number) => req<SrsDueDTO>('GET', `/srs/due?limit=${limit}${newLimit !== undefined ? `&newLimit=${newLimit}` : ''}`),
  journal: (lessonId: string, exerciseId: string, limit = 5) =>
    req<JournalEntryDTO[]>('GET', `/progress/attempts?lessonId=${encodeURIComponent(lessonId)}&exerciseId=${encodeURIComponent(exerciseId)}&limit=${limit}`),
  ladder: () => req<LadderStateDTO>('GET', '/ladder'),
  ladderUnlock: (skill: string, unlocks: number) => req<LadderStateDTO>('POST', '/ladder/unlock', { skill, unlocks }),
  srsReview: (cardId: number, grade: number) => req<{ card: unknown }>('POST', '/srs/review', { cardId, grade }),
  projects: () => req<ProjectSummaryDTO[]>('GET', '/projects'),
  project: (id: string) => req<ProjectDTO>('GET', `/projects/${encodeURIComponent(id)}`),
  /** The project, or null when it does not exist (200 null — no 404 in the console). */
  projectIfExists: (id: string) => req<ProjectDTO | null>('GET', `/projects/${encodeURIComponent(id)}?ifExists=1`),
  createProject: (p: Partial<ProjectDTO>) => req<ProjectDTO>('POST', '/projects', p),
  saveProject: (p: ProjectDTO) => req<ProjectDTO>('PUT', `/projects/${encodeURIComponent(p.id)}`, p),
  deleteProject: (id: string) => req<{ ok: true }>('DELETE', `/projects/${encodeURIComponent(id)}`),
  settings: () => req<Settings>('GET', '/settings'),
  saveSettings: (s: Partial<Settings>) => req<Settings>('PUT', '/settings', s),
};
