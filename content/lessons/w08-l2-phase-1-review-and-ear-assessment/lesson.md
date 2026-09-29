---
id: w08-l2-phase-1-review-and-ear-assessment
title: Phase 1 Review and Ear Assessment
week: 8
order: 2
phase: p1
duration_min: 50
goals:
  - Review every skill from weeks 1–8 in one sitting
  - Measure your ear on octaves, degrees, intervals, chord quality, melody and rhythm
  - Identify the one or two areas to keep drilling going into Phase 2
prerequisites: [w08-l1-phrases-and-cadences]
tags: [review, assessment, ear]
---

# Phase 1 review

Eight weeks ago, three Cs sounded like three unrelated sounds. Look at the list of what you can do now:

- find and name any key, and read the treble clef from middle C up;
- count and tap rhythms in 4/4 and 3/4;
- build the major scale from its step pattern, in C, G and F;
- hear scale degrees against a cadence;
- name and hear intervals up to the octave;
- build, play and hear major and minor triads, and know the seven chords of a key;
- write melodies and chord parts in the DAW, and transpose them.

Today is a check-up, not an exam. There's no new material. The goal is an honest picture of where your ear is, so the practice queue can focus on what needs it.

## How to take the assessment

- **Do it in one sitting**, with headphones, in a quiet room.
- **Replay freely.** Real listening involves replaying; there's no penalty.
- **Use your tools**: sing the notes, sing down to home, check your anchor songs. These aren't crutches — they're exactly how trained musicians do it, just slower.
- **Don't guess wildly.** If you truly don't know, pick your best guess and move on; the app records which items you miss.

A quick refresher on the anchor points before you start:

```example
{
  "title": "Refresher: cadence, then degrees 1 2 3 4 5 6 7 1",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h | C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "Refresher: m2, M2, m3, M3, P4, P5, P8 from C",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Db4:q r:h | C4:q D4:q r:h | C4:q Eb4:q r:h | C4:q E4:q r:h | C4:q F4:q r:h | C4:q G4:q r:h | C4:q C5:q r:h" } ]
}
```

## Reading your results

- **80% or more** on a drill: solid. The spaced-repetition deck will keep it fresh.
- **60–80%**: normal at this stage. Keep going; these cards will show up more often.
- **Under 60%**: don't redo the whole phase. Go back to the one lesson that introduced it, do its drills again, then continue. Phase 2 builds on everything, but it also *repeats* everything.

The most common weak spots after eight weeks are **P4 vs P5**, **degrees 4 and 6**, and **octave recognition across wide gaps**. If that's you, you're right on schedule.

## Assessment

```exercise
{
  "id": "e9",
  "type": "ear-octave",
  "title": "Octaves: same name or different?",
  "instructions": "One or two octaves apart; the different notes sit right next to the octave, or a fifth away.",
  "count": 12,
  "passScore": 0.75,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [2, 3, 4, 5], "mode": "same-or-different", "gap": [1, 2], "foils": [1, 5, 6, 7, 11] }
}
```

```exercise
{
  "id": "e2",
  "type": "ear-note",
  "title": "Scale degrees 1–7",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e3",
  "type": "ear-interval",
  "title": "Intervals up to the octave",
  "count": 12,
  "passScore": 0.7,
  "spec": { "intervals": ["m2", "M2", "m3", "M3", "P4", "P5", "P8"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-chord",
  "title": "Major or minor triad",
  "count": 12,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-melody",
  "title": "Melody in degrees",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "degrees" }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-rhythm",
  "title": "Rhythm: hear and tap",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "e7",
  "type": "read-note",
  "title": "Reading: see it, play it",
  "count": 12,
  "passScore": 0.8,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

```exercise
{
  "id": "e8",
  "type": "quiz",
  "title": "Theory check",
  "spec": { "questions": [
    { "q": "The major scale step pattern:", "choices": ["W W H W W W H", "W H W W H W W", "W W W H W W H"], "answer": 0 },
    { "q": "Half steps in a perfect 5th:", "choices": ["5", "7", "8"], "answer": 1 },
    { "q": "A minor triad is built…", "choices": ["M3 + m3", "m3 + M3", "m3 + m3"], "answer": 1 },
    { "q": "In G major, the IV chord is…", "choices": ["C", "D", "Am"], "answer": 0 },
    { "q": "F major's key signature has…", "choices": ["one sharp: F♯", "one flat: B♭", "no sharps or flats"], "answer": 1 },
    { "q": "A dotted half note in 3/4 lasts…", "choices": ["2 beats", "3 beats", "a whole bar of 4/4"], "answer": 1 },
    { "q": "The cadence V → I is called…", "choices": ["half cadence", "authentic cadence"], "answer": 1 },
    { "q": "vi in C major is…", "choices": ["Am", "A", "Em"], "answer": 0 }
  ] },
  "passScore": 0.75
}
```
