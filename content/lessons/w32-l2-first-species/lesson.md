---
id: w32-l2-first-species
title: First Species Counterpoint
week: 32
order: 2
phase: p4
duration_min: 40
goals:
  - Know what a cantus firmus is and why counterpoint is learned in species
  - Know the four rules of first species (note against note)
  - Write a note-against-note counterpoint above a given melody in the DAW
prerequisites: [w32-l1-two-voice-writing]
tags: [counterpoint, intervals, composition, daw, ear]
---

# First Species Counterpoint

Last lesson you heard the three kinds of vertical interval and why parallel fifths fuse two lines into one. Today you write your first line against a melody.

## Learning it in "species"

Since Johann Fux's textbook of 1725, counterpoint has been taught in five **species**: five exercises, each allowing one more kind of rhythm against a slow given melody called the [[cantus firmus]]. First species (today) is one note against one note; second species (next lesson) is two against one; the later species add syncopation and free rhythm. The rules are strict on purpose, like scales for a pianist: they train your ear to follow two lines at once. We will do the first two.

## The rules of first species

1. Only consonances between the voices, mostly 3rds and 6ths.
2. Begin on a unison, 5th or octave; end on a unison or octave, with the upper voice arriving by step (usually 7 → 1).
3. Move mostly by step; leaps of up to a 4th are fine now and then.
4. No parallel fifths or octaves.

Here is a correct example. Read the intervals: 8 – 6 – 3 – 6 – 3 – 6 – 6 – 6 – 8.

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

Notice what the rules produce: the upper line is a small melody of its own (mostly steps, one clear high point on D), and against the cantus it is almost all 6ths and 3rds, so you hear two voices the whole way through.

### Try it

1. Play the example once. Then play only the upper line yourself (C4 B3 A3 C4 B3 D4 C4 B3 C4): does it sound like a tune on its own?
2. Play the pairs as chords, slowly, one per breath. Notice the first and last pair sound *hollow* (octave) and all the middle ones *sweet*.
3. Now change bar 5 to G3+D4 (a 5th) and bar 6 to F3+C4 (another 5th). Play bars 4–7 again.

**Check:** the changed version should sound barer and more "one line" in the middle — that is the parallel 5th you just wrote.

**If you can't hear it yet:** play the middle pairs as sweet/hollow twins — B3 over G3, then D4 over G3 — back and forth. Rule 1 in practice is just "keep it sweet".

## Drills

```exercise
{
  "id": "e1-play-both",
  "type": "play-melody",
  "title": "Play both voices",
  "instructions": "Left hand the cantus firmus, right hand the counterpoint. Listen to each line on its own, then together.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 C4]:w | [D3 B3]:w | [F3 A3]:w | [E3 C4]:w | [G3 B3]:w | [F3 D4]:w | [E3 C4]:w | [D3 B3]:w | [C3 C4]:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2-rules-quiz",
  "type": "quiz",
  "title": "Check the rules",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "The cantus firmus starts on C3. Which first note above it breaks rule 2?", "choices": ["C4 (octave)", "G3 (5th)", "E3 (3rd)", "C3 (unison)"], "answer": 2, "explain": "The first interval must be a perfect consonance: unison, 5th or octave. A 3rd is fine in the middle, not at the start." },
    { "q": "Cantus D3 → C3 at the end. Which upper-voice ending follows the rules?", "choices": ["B3 → C4", "A3 → C4", "F3 → E3", "G3 → G3"], "answer": 0, "explain": "B3 over D3 is a 6th, and B → C arrives on the octave by step (7 → 1)." },
    { "q": "Cantus F3 → G3, upper voice C4 → D4. Allowed?", "choices": ["yes", "no: parallel 5ths"], "answer": 1, "explain": "F–C and G–D are both 5ths, moving in the same direction." },
    { "q": "Cantus E3, upper voice A3. Allowed in first species?", "choices": ["yes: a 4th is fine", "no: a 4th counts as a dissonance here"], "answer": 1, "explain": "E up to A is a perfect 4th, which counts as dissonant between two voices in this style." }
  ] }
}
```

## Ear: every interval together

**Method** (see the *How to do it* box): the same sorting as last lesson — one, hollow, sweet or rough — then pick inside the group: 3rds are close and warm, 6ths wider; major brighter, minor darker. The drill runs at your current intervals rung, which may be an earlier one; its box covers it.

```ladder
{ "skill": "intervals", "unlocks": 20, "intro": "Opens all twelve intervals played together, the sounds between two voices; the drill runs at your current intervals rung." }
```

## Make it

1. Play the cantus firmus once and circle its lowest and highest notes in your head; your line will sit above it, between C4 and C5 or so.
2. **Fix the ends first.** Bar 1: C4 (octave). Last two bars: B3 over D3, then C4 over C3.
3. **Fill the middle one bar at a time.** For each cantus note, try the note a 6th above it and the note a 3rd above it (moved up an octave if it would fall below B3). Pick whichever is a step away from your previous note.
4. After each bar, play the last two bars as pairs. If both are 5ths or both are octaves, change the new note.

**Judge it by ear:** play your line alone — it should sound like a simple, calm tune with one high point. Then with the cantus: sweet all the way, with hollow sounds only at the ends.

**If you're stuck:** a line that moves the *opposite* way to the cantus almost always works — when the cantus goes up, step down, and vice versa.

```exercise
{
  "id": "e3-daw-first-species",
  "type": "daw-task",
  "title": "Your first species",
  "instructions": "A new cantus firmus is on the piano track. On the strings track, write one whole note per bar above it: start on a unison, 5th or octave; use 3rds and 6ths in the middle (a 5th or octave at most once or twice); move mostly by step; end on the octave, arriving by step from B. The checks include parallel fifths and octaves. About 20 minutes.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "strings", "seq": "" }, { "instrument": "piano", "seq": "C3:w | E3:w | F3:w | G3:w | E3:w | A3:w | G3:w | E3:w | D3:w | C3:w |" } ] },
    "task": "10-bar first-species counterpoint above the given cantus firmus.",
    "checks": [
      { "kind": "note-count", "min": 10, "max": 10, "track": 0 },
      { "kind": "uses-rhythm", "values": ["w"], "minDistinct": 1, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "no-parallel-fifths", "tracks": [0, 1], "octaves": true },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "max-leap", "semitones": 5, "track": 0 },
      { "kind": "custom", "id": "consonances-only", "note": "Self-check: every vertical interval is a unison, 3rd, 5th, 6th or octave (or one of these plus an octave)." }
    ],
    "minBars": 10, "maxBars": 10
  }
}
```

## Between lessons

Play your finished counterpoint with both hands once a day. Then hide the upper line and try to find it again by ear against the cantus, one bar at a time.
