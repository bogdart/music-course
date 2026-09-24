import { z } from 'zod';
import {
  INSTRUMENT_IDS, checkSeq, isChordQuality, isIntervalId, isNoteName, isScaleId, isValidKey, parseTimeSig,
  tryParseChordSymbol, tryRomanToChord, isDegree, isDurationToken, resolveScaleId,
} from '@music/core';

/** Lesson id: wNN-lM-slug (docs use both l2 and l02). */
export const LESSON_ID_RE = /^w\d{2}-l\d{1,2}-[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const lessonId = z.string().regex(LESSON_ID_RE, 'lesson id must look like w03-l2-major-scale');

export const instrument = z.enum(INSTRUMENT_IDS);

/** Note with octave: "C4", "F#3", "Bb5" */
export const noteWithOctave = z.string().refine((s) => isNoteName(s, true), { message: 'expected a note with octave like C4, F#3, Bb5' });
/** Note with or without octave */
export const noteName = z.string().refine((s) => isNoteName(s), { message: 'expected a note name like C, F#, Bb or C4' });
/** Pitch class only: "C", "F#", "Bb" */
export const pitchClassName = z.string().refine((s) => isNoteName(s) && !isNoteName(s, true), { message: 'expected a pitch class like C, F#, Bb (no octave)' });

export const range = z.tuple([noteWithOctave, noteWithOctave]);

export const key = z.string().refine(isValidKey, { message: 'expected a key like C, G, Bb, F#, Am, C# minor' });
export const keyOrRandom = z.union([z.literal('random'), key]);
export const mode = z.enum(['major', 'minor']);

export const timeSig = z.string().refine((s) => {
  try {
    parseTimeSig(s);
    return true;
  } catch {
    return false;
  }
}, { message: 'expected a time signature like 4/4, 3/4, 6/8' });

export const seq = z.string().superRefine((s, ctx) => {
  const err = checkSeq(s);
  if (err) ctx.addIssue({ code: 'custom', message: `invalid seq: ${err}` });
});

export const intervalId = z.string().refine(isIntervalId, { message: 'expected an interval id (P1 m2 M2 m3 M3 P4 TT P5 m6 M6 m7 M7 P8, compound m9..M13)' });
/** Any ear-scale id plus the aliases minor / ionian / aeolian (docs/SCHEMA_GAPS.md #26). */
export const scaleId = z.string().refine((s) => {
  if (isScaleId(s)) return true;
  try {
    resolveScaleId(s);
    return true;
  } catch {
    return false;
  }
}, { message: 'unknown scale id (see CONTENT_SCHEMA ear-scale)' });
export const chordQuality = z.string().refine(isChordQuality, { message: 'unknown chord quality (maj min dim aug maj7 min7 dom7 m7b5 sus2 sus4 …)' });
export const chordSymbol = z.string().refine((s) => tryParseChordSymbol(s) !== null, { message: 'invalid chord symbol (e.g. C, Dm, G7, Cmaj7, F#m7b5, Bb/D)' });
export const romanNumeral = z.string().refine((s) => tryRomanToChord(s, 'C') !== null, { message: 'invalid roman numeral (e.g. I, ii, V7, bVII, iv, V/V, vii°)' });
export const degree = z.union([z.number().int().min(1).max(7), z.string().refine(isDegree, { message: 'expected a scale degree 1-7 with optional b/#' })]);
export const durationToken = z.string().refine(isDurationToken, { message: 'expected a duration token w h q 8 16 32 (+ . or t)' });
export const bpm = z.number().min(20).max(300);
