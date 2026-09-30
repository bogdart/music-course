import { isExerciseType, type ExerciseBlock } from '@music/core';
import { ExerciseShell } from '../../exercises/ExerciseShell';
import { ComingSoon } from '../../exercises/ComingSoon';
import { getExerciseComponent } from '../../exercises/registry';
import { useLesson } from '../LessonContext';
import { ChordsBlock, type ChordsData } from './ChordsBlock';
import { ExampleBlock, type ExampleData } from './ExampleBlock';
import { KeyboardBlock, type KeyboardData } from './KeyboardBlock';
import { LadderBlock, type LadderData } from './LadderBlock';
import { StaffBlock, type StaffData } from './StaffBlock';

export function BlockError({ lang, message }: { lang: string; message: string }) {
  return (
    <div className="card error-card" data-testid="block-error">
      <strong>Broken {lang} block</strong>
      <p className="small">{message}</p>
    </div>
  );
}

/** Renders one interactive fenced block. Prefers validated data from the parsed lesson, falls back to raw JSON. */
export function LessonBlockView({ lang, index, raw }: { lang: string; index: number; raw: string }) {
  const { blocks, lessonId, record, onExerciseComplete } = useLesson();
  const known = blocks.find((b) => b.index === index && b.lang === lang);
  let data: unknown = known?.data;
  if (data === undefined) {
    try {
      data = JSON.parse(raw);
    } catch (e) {
      return <BlockError lang={lang} message={`Invalid JSON: ${(e as Error).message}`} />;
    }
  }
  const invalid = known && !known.valid ? known.error ?? 'invalid block' : null;
  try {
    switch (lang) {
      case 'example':
        return invalid ? <BlockError lang={lang} message={invalid} /> : <ExampleBlock data={data as ExampleData} />;
      case 'keyboard':
        return invalid ? <BlockError lang={lang} message={invalid} /> : <KeyboardBlock data={data as KeyboardData} />;
      case 'staff':
        return invalid ? <BlockError lang={lang} message={invalid} /> : <StaffBlock data={data as StaffData} />;
      case 'chords':
        return invalid ? <BlockError lang={lang} message={invalid} /> : <ChordsBlock data={data as ChordsData} />;
      case 'ladder':
        return invalid ? (
          <BlockError lang={lang} message={invalid} />
        ) : (
          <div id={`ex-ladder-${index}`} className="exercise-anchor">
            <LadderBlock data={data as LadderData} record={record} />
          </div>
        );
      case 'exercise': {
        const ex = data as ExerciseBlock;
        if (!ex || typeof ex !== 'object' || !isExerciseType(ex.type) || !getExerciseComponent(ex.type)) {
          return (
            <div id={`ex-${ex?.id ?? index}`} className="exercise-anchor">
              <ComingSoon type={String(ex?.type ?? 'unknown')} {...(ex?.title ? { title: ex.title } : {})} />
            </div>
          );
        }
        if (invalid) return <BlockError lang={`exercise "${ex.id}"`} message={invalid} />;
        return (
          <div id={`ex-${ex.id}`} className="exercise-anchor">
            <ExerciseShell block={ex} lessonId={lessonId} record={record} onComplete={(s) => onExerciseComplete?.(ex.id, s)} />
          </div>
        );
      }
      default:
        return <BlockError lang={lang} message="Unknown block type" />;
    }
  } catch (e) {
    return <BlockError lang={lang} message={(e as Error).message} />;
  }
}
