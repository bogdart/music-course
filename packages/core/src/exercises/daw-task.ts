/**
 * `daw-task`: the learner edits a project in the DAW; the answer is the project (+ self-check ticks) and the
 * evaluation runs the spec's predicates (packages/core/src/daw/checks.ts). score = passed / total.
 */
import type { Project } from '../model.js';
import { projectBars, projectFromEnvelope } from '../daw/project.js';
import { runChecks, taskChecks, type CheckResult, type DawCheckSpec } from '../daw/checks.js';
import { registerExercise } from './registry.js';
import type { ExerciseDefinition, ExerciseType, ItemBase } from './types.js';

export interface DawTaskItem extends ItemBase<'daw-task'> {
  task: string;
  /** Template project (fresh ids) to start from */
  template: Project;
  checks: DawCheckSpec[];
  minBars?: number;
  maxBars?: number;
  /** Optional countdown (minutes) */
  timerMin?: number;
  /** Continue the saved project with this slug instead of starting from the template */
  projectRef?: string;
  /** Key of the template (default key for checks) */
  key?: string;
}

export interface DawTaskAnswer {
  project: Project;
  /** Self-check answers for `custom` checks, by check id (or index) */
  selfChecks?: Record<string, boolean>;
}

/** Build the template project of a daw-task spec (envelope with `seq` tracks, or a full project). */
export function dawTaskTemplate(spec: { template?: Record<string, unknown>; minBars?: number; task?: string }, name?: string): Project {
  const tpl = spec.template ?? { bpm: 100, key: 'C', tracks: [{ instrument: 'piano', seq: '' }] };
  const p = projectFromEnvelope(tpl, { name: name ?? 'DAW task', ...(spec.minBars ? { minBars: spec.minBars } : {}) });
  return p;
}

export function evaluateDawTask(item: Pick<DawTaskItem, 'checks' | 'key'>, answer: DawTaskAnswer): { results: CheckResult[]; score: number; allPassed: boolean; passed: number; total: number } {
  return runChecks(answer.project, item.checks, { ...(item.key ? { defaultKey: item.key } : {}), ...(answer.selfChecks ? { selfChecks: answer.selfChecks } : {}) });
}

export const dawTask = {
  type: 'daw-task',
  implemented: true,
  naturalCount() {
    return 1;
  },
  generate(block) {
    const spec = block.spec as typeof block.spec & { timerMin?: number; projectRef?: string };
    const template = dawTaskTemplate(spec, block.title ?? 'DAW task');
    const item: DawTaskItem = {
      type: 'daw-task',
      prompt: spec.task,
      task: spec.task,
      template,
      checks: taskChecks(spec as { checks?: DawCheckSpec[]; minBars?: number; maxBars?: number }),
      solution: 'A project that passes every check.',
      ...(spec.minBars ? { minBars: spec.minBars } : {}),
      ...(spec.maxBars ? { maxBars: spec.maxBars } : {}),
      ...(typeof spec.timerMin === 'number' && spec.timerMin > 0 ? { timerMin: spec.timerMin } : {}),
      ...(typeof spec.projectRef === 'string' && spec.projectRef ? { projectRef: spec.projectRef } : {}),
      ...(template.key ? { key: template.key } : {}),
    };
    return item as never;
  },
  evaluate(item, answer) {
    const it = item as unknown as DawTaskItem;
    const a = answer as DawTaskAnswer | undefined;
    if (!a || !a.project || !Array.isArray(a.project.tracks)) return { correct: false, score: 0, feedback: 'No project submitted.' };
    const r = evaluateDawTask(it, a);
    const failed = r.results.filter((x) => !x.passed);
    return {
      correct: r.allPassed,
      score: r.score,
      feedback: r.allPassed
        ? `All ${r.total} checks passed — nice work!`
        : `${r.passed}/${r.total} checks passed. Still to do: ${failed.map((f) => f.label).join('; ')}.`,
      expected: it.solution,
      details: { results: r.results, bars: projectBars(a.project) },
    };
  },
} satisfies ExerciseDefinition<'daw-task'> as ExerciseDefinition<ExerciseType>;

registerExercise(dawTask);
