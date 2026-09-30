import { watch, type FSWatcher } from 'node:fs';
import type { CurriculumPhase, GlossaryTerm, ParsedLessonDTO } from '@music/core';
import { formatProblems, loadContent, type LoadedContent } from '@music/content-schema/node';

/** Loads + validates content/ at startup; optionally watches for changes (dev). */
export class ContentStore {
  private data: LoadedContent;
  private watcher: FSWatcher | null = null;
  private timer: NodeJS.Timeout | null = null;
  version = 0;

  constructor(readonly dir: string, private readonly log: (msg: string) => void = console.log) {
    this.data = this.load();
  }

  private load(): LoadedContent {
    const d = loadContent(this.dir);
    const errors = d.problems.filter((p) => p.severity === 'error');
    this.log(`[content] ${d.lessons.size} lessons, ${d.glossary.length} glossary terms, ${errors.length} error(s), ${d.problems.length - errors.length} warning(s)`);
    if (errors.length) this.log(formatProblems(errors));
    this.version++;
    return d;
  }

  reload(): void {
    this.data = this.load();
  }

  watch(): void {
    if (this.watcher) return;
    try {
      this.watcher = watch(this.dir, { recursive: true }, () => {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.reload(), 250);
      });
      this.log(`[content] watching ${this.dir}`);
    } catch (e) {
      this.log(`[content] watch unavailable: ${(e as Error).message}`);
    }
  }

  close(): void {
    this.watcher?.close();
    if (this.timer) clearTimeout(this.timer);
  }

  get content(): LoadedContent {
    return this.data;
  }

  get phases(): CurriculumPhase[] {
    return (this.data.curriculum?.phases ?? []) as CurriculumPhase[];
  }

  get order(): string[] {
    return this.data.order;
  }

  get glossary(): GlossaryTerm[] {
    return this.data.glossary;
  }

  lesson(id: string): (ParsedLessonDTO & { dir: string }) | undefined {
    const l = this.data.lessons.get(id);
    if (!l) return undefined;
    const i = this.data.order.indexOf(id);
    const exists = (x: string | undefined) => (x && this.data.lessons.has(x) ? x : null);
    // strip the AST and node-only fields from the DTO
    return {
      id: l.id || id,
      frontmatter: l.frontmatter,
      body: l.body,
      blocks: l.blocks,
      exercises: l.exercises,
      sections: l.sections,
      problems: l.problems,
      prev: i > 0 ? exists(this.data.order.slice(0, i).reverse().find((x) => this.data.lessons.has(x))) : null,
      next: i >= 0 ? exists(this.data.order.slice(i + 1).find((x) => this.data.lessons.has(x))) : null,
      dir: l.dir,
    };
  }

  /** ```ladder blocks of a lesson: which skill each opens, up to which rung. */
  ladderUnlocks(id: string): { skill: string; unlocks: number }[] {
    const l = this.content.lessons.get(id);
    if (!l) return [];
    return l.blocks
      .filter((b) => b.lang === 'ladder' && b.valid)
      .map((b) => b.data as { skill: string; unlocks: number });
  }

  hasLesson(id: string): boolean {
    return this.data.lessons.has(id);
  }

  /** Find an exercise block by lesson + exercise id. */
  exercise(lessonId: string, exerciseId: string) {
    return this.data.lessons.get(lessonId)?.exercises.find((e) => e.id === exerciseId);
  }
}
