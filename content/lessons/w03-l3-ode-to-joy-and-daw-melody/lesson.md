---
id: w03-l3-ode-to-joy-and-daw-melody
title: Ode to Joy and Your First Composed Melody
week: 3
order: 3
phase: p1
duration_min: 50
goals:
  - Play "Ode to Joy" with the right hand in C major
  - Read a melody as scale degrees and hear why it ends where it does
  - Write a 4-bar melody from degrees 1–5 in the DAW
prerequisites: [w03-l2-scale-degrees-and-solfege]
tags: [melody, songs, scale-degrees, daw]
songs:
  - { title: "Ode to Joy (Symphony No. 9, 4th movement)", composer: "Ludwig van Beethoven", public_domain: true }
---

# Ode to Joy

Beethoven's "Ode to Joy" (1824) is one of the most famous melodies ever written, and it uses almost nothing: five neighbouring notes, moving mostly by **step**. That's the lesson hiding inside it — a great melody doesn't need big jumps or many notes. It needs a clear shape and a good ending.

## Degrees without the drone

The next degree rung takes the low C away: after the home run, the note sounds alone, and you keep home "in your
ear" from the run. It's noticeably harder — expect to drop a little when you get there.

**Try it:**

1. Play the home run (C D E F G F E D C) and stop on the long C.
2. Wait two seconds, then play D4. Now walk it home yourself: D → C. One step: degree 2.
3. Home run again, then E4, walk home: E → D → C. Two steps: degree 3.

```exercise
{
  "id": "e10",
  "type": "listen",
  "title": "No drone: 1, 2 or 3?",
  "instructions": "Answer, then check on the keyboard: find the note and walk it down to C, counting steps.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | D4:w" } ] },
      { "title": "Clip 2", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | E4:w" } ] }
    ],
    "questions": [
      { "q": "Clip 1: the last note is degree…", "choices": ["1", "2", "3"], "answer": 1, "explain": "D = 2: one step above home." },
      { "q": "Clip 2: the last note is degree…", "choices": ["1", "2", "3"], "answer": 2, "explain": "E = 3: two steps above home." }
    ]
  }
}
```

**If you lose home:** press the drill's reference replay, or play C yourself right after the question note. The
keyboard answer (find the key: C D E = 1 2 3) is always allowed.

```ladder
{ "skill": "degrees", "unlocks": 3, "intro": "Degrees 1–3 at your current rung — with or without the low C." }
```

## The tune in degrees

Your right hand sits on C–G (thumb on C, one finger per key), so every finger *is* a degree: thumb = 1, index = 2, middle = 3, ring = 4, little = 5.

```example
{
  "title": "Ode to Joy (Beethoven), C major",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h | D4:q D4:q E4:q C4:q | D4:q E4:8 F4:8 E4:q C4:q | D4:q E4:8 F4:8 E4:q D4:q | C4:q D4:q G3:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h" } ],
  "show": ["staff", "keyboard"]
}
```

Degrees of the first line: **3 3 4 5 | 5 4 3 2 | 1 1 2 3 | 3 2 2**. Now compare the ends of the first two lines:

- Line 1 ends on **2** — unfinished. It sounds like a question.
- Line 2 ends on **1** — home. It sounds like the answer.

Same notes, different ending, a different feeling — you heard exactly this with Twinkle last lesson. (In bar 12 the melody dips to a low G, degree 5 *below* home. Stretch your thumb down, or shift your hand for that one note.)

The long-short rhythm in bars 4 and 8 is a dotted quarter plus an eighth: hold the first note a bit longer, then hurry to the next. You'll learn the maths next week — for now, copy what you hear.

## Writing degrees down

The next melody rung asks you to **write** what you hear as numbers instead of playing it back: three notes from
1, 2 and 3. The practical way is two steps: play it back on the keyboard first (as in the echo drill), then
translate what your fingers did — thumb, index, middle = 1, 2, 3.

**Try it:** play E D C and say "3 2 1"; play C D C and say "1 2 1".

```ladder
{ "skill": "melody", "unlocks": 5, "intro": "Opens \"Write 3 notes as degrees\"; the drill runs at your current melody rung." }
```

## Composing with five notes

In the DAW today you'll write your own 4-bar melody with the same tools Beethoven used: degrees 1–5, mostly steps, ending on 1. Tips that always work:

- **Start on 1, 3 or 5** — they sound stable.
- Move mostly by step; allow one small leap.
- Use at least two note lengths (quarters and halves) so it breathes.
- **End on 1**, ideally with a long note. Try ending on 2 first, then fix it — hear the difference.

## Drills

```exercise
{
  "id": "e2",
  "type": "quiz-input",
  "title": "Ode to Joy in degrees",
  "spec": { "questions": [
    { "q": "Degrees of bar 1 (E E F G), separated by spaces:", "answer": ["3 3 4 5"], "kind": "text" },
    { "q": "Degrees of bar 3 (C C D E):", "answer": ["1 1 2 3"], "kind": "text" },
    { "q": "Line 1 ends on degree…", "answer": ["2"], "kind": "number" },
    { "q": "Line 2 ends on degree…", "answer": ["1"], "kind": "number" },
    { "q": "The highest degree used in the tune is…", "answer": ["5"], "kind": "number" },
    { "q": "Which finger plays degree 4 (thumb = 1)?", "answer": ["4"], "kind": "number" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e3",
  "type": "play-melody",
  "title": "Ode to Joy, lines 1–2",
  "instructions": "Thumb on C4. Slow and even.",
  "passScore": 0.75,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Ode to Joy, complete",
  "instructions": "All four lines. Watch for the low G3 in bar 12. The soft background is made of chords — you'll learn about them in week 6; for now just play along.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h | D4:q D4:q E4:q C4:q | D4:q E4:8 F4:8 E4:q C4:q | D4:q E4:8 F4:8 E4:q D4:q | C4:q D4:q G3:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h | [B2 D3 G3]:w | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```

```exercise
{
  "id": "e6",
  "type": "daw-task",
  "title": "A 4-bar melody from degrees 1–5",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" } ] },
    "task": "Write (draw or record) a 4-bar melody in C major using only C D E F G (degrees 1–5). Start on 1, 3 or 5. Move mostly by step. Use both quarter notes and half notes. End on C (degree 1) with a long note. Play it back; then try changing only the last note to D and listen to how it stops sounding finished — then change it back.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false },
      { "kind": "range", "low": "C4", "high": "G4" },
      { "kind": "note-count", "min": 8, "max": 16 },
      { "kind": "starts-on", "degrees": [1, 3, 5] },
      { "kind": "ends-on", "degree": 1 },
      { "kind": "uses-rhythm", "values": ["q", "h"], "minDistinct": 2 },
      { "kind": "max-leap", "semitones": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons (and the end of week 3)

- Two **Practice** sessions of about 10 minutes.
- Play Ode to Joy lines 1–2 once a day; say the degrees of line 1 as you play.
- Ready for week 4 when the dashboard doesn't say **practise first**.
