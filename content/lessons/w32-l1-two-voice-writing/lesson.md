---
id: w32-l1-two-voice-writing
title: Two-Voice Writing
week: 32
order: 1
phase: p4
duration_min: 40
goals:
  - Sort intervals into perfect consonances, imperfect consonances and dissonances
  - Write a note-against-note counterpoint above a cantus firmus
  - Hear two independent lines instead of "a melody plus chords"
prerequisites: [w31-l3-improvised-chorus-daw, w10-l2-harmonic-intervals]
tags: [counterpoint, intervals, composition]
songs:
  - { title: "Two-Part Inventions", composer: "J. S. Bach", public_domain: true }
---

# Two-Voice Writing

So far you've thought vertically: chords, voicings, a melody on top. [[counterpoint]] thinks horizontally — two or more melodies that are each good on their own *and* sound good together. Bach's Two-Part Inventions (public domain; well worth hearing) are the gold standard: two hands, two melodies, no chords, yet you hear full harmony.

The classic way to learn is **species counterpoint**: strict exercises over a slow given melody called the [[cantus firmus]]. We'll use the first species today — one note against one note.

## Three kinds of interval

| Class | Intervals | Use |
|-------|-----------|-----|
| Perfect consonance | unison, P5, P8 | start and end; sparingly in between |
| Imperfect consonance | 3rds, 6ths | the backbone — use most |
| Dissonance | 2nds, 4ths, 7ths, tritone | not allowed in first species |

Why prefer 3rds and 6ths? Perfect intervals are so blended that two voices on them fuse into one. Imperfect intervals keep the voices sweet *and* distinct.

## An example

Cantus firmus below (whole notes), counterpoint above. Read the intervals: 8 – 6 – 3 – 6 – 3 – 6 – 6 – 6 – 8. Open with a perfect interval, fill the middle with imperfect ones, close with the leading tone rising to the octave.

```example
{
  "title": "First species: counterpoint above a cantus firmus",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "strings", "seq": "C4:w | B3:w | A3:w | C4:w | B3:w | D4:w | C4:w | B3:w | C4:w |" },
    { "instrument": "piano", "seq": "C3:w | D3:w | F3:w | E3:w | G3:w | F3:w | E3:w | D3:w | C3:w |" }
  ],
  "show": ["staff"]
}
```

Notice the upper line mostly moves opposite to the lower — that's contrary motion, next lesson's topic. And it moves mainly by step: a good counterpoint is a good melody first.

## Drills

```exercise
{
  "id": "e1-ear-consonance",
  "type": "ear-interval",
  "title": "Harmonic intervals: perfect or imperfect?",
  "count": 12, "passScore": 0.75,
  "spec": { "intervals": ["m3", "M3", "P5", "m6", "M6", "P8"], "direction": "harmonic", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e2-build-consonances",
  "type": "build-interval",
  "title": "Build consonances above a note",
  "count": 8, "passScore": 0.8,
  "spec": { "intervals": ["m3", "M3", "P5", "m6", "M6", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e3-play-both",
  "type": "play-melody",
  "title": "Play both voices",
  "instructions": "Left hand the cantus firmus, right hand the counterpoint. Listen to each line separately, then together.",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 C4]:w | [D3 B3]:w | [F3 A3]:w | [E3 C4]:w | [G3 B3]:w | [F3 D4]:w | [E3 C4]:w | [D3 B3]:w | [C3 C4]:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-interval-quiz",
  "type": "quiz",
  "title": "Classify",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "C3 below A3 forms a…", "choices": ["perfect consonance", "imperfect consonance", "dissonance"], "answer": 1 },
    { "q": "D3 below G3 forms a…", "choices": ["perfect consonance", "imperfect consonance", "dissonance"], "answer": 2, "explain": "A perfect 4th above the lower voice counts as dissonant in two-voice counterpoint." },
    { "q": "The most-used intervals in first species are…", "choices": ["unisons and octaves", "3rds and 6ths", "2nds and 7ths", "4ths and 5ths"], "answer": 1 },
    { "q": "A first-species counterpoint should begin and end on…", "choices": ["a 3rd", "a perfect consonance", "any interval", "a 6th"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e5-ear-melody-lines",
  "type": "ear-melody",
  "title": "Stepwise lines by ear",
  "count": 6, "passScore": 0.75,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 5, "rhythm": "quarters", "answer": "degrees" }
}
```

```exercise
{
  "id": "e6-daw-first-species",
  "type": "daw-task",
  "title": "Your first species",
  "instructions": "A new cantus firmus is on the piano track. Write one whole note per bar on the strings track above it: start on a unison, 5th or octave, use only 3rds and 6ths in the middle (a 5th or octave at most once), move mostly by step, and end on the octave approached by step from below.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "strings", "seq": "" }, { "instrument": "piano", "seq": "C3:w | E3:w | F3:w | G3:w | E3:w | A3:w | G3:w | E3:w | D3:w | C3:w |" } ] },
    "task": "10-bar first-species counterpoint above the given cantus firmus.",
    "checks": [
      { "kind": "note-count", "min": 10, "max": 10, "track": 0 },
      { "kind": "uses-rhythm", "values": ["w"], "minDistinct": 1, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "no-parallel-fifths", "tracks": [0, 1] },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "max-leap", "semitones": 5, "track": 0 },
      { "kind": "custom", "id": "consonances-only", "note": "Self-check: every vertical interval is a unison, 3rd, 5th, 6th or octave (plus compounds)." }
    ],
    "minBars": 10, "maxBars": 10
  }
}
```
