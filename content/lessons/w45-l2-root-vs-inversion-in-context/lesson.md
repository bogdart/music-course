---
id: w45-l2-root-vs-inversion-in-context
title: Root or Inversion? Bass in Context
week: 45
order: 2
phase: p5
duration_min: 45
goals:
  - Write a chord whose bass is not its root as a slash chord (G/B) or an inversion numeral (V6)
  - Follow a stepwise bass line under ordinary chords and write what you hear
  - Recognise a pedal point by ear
prerequisites: [w45-l1-bass-in-full-mixes]
tags: [transcription, bass, inversions, slash-chords, ear]
---

# Root or Inversion? Bass in Context

"The landing note is the root" is true most of the time. Today is about the exceptions — common in pop, and a classic
way to write a wrong chord that *looks* right.

## Slash chords and inversion numerals

When the bass plays the 3rd or 5th of a chord (an inversion, week 11), chord charts write a [[slash chord]]:
**chord / bass note**. G/B means "a G major chord with B in the bass".

Roman numerals mark the same thing with small numbers borrowed from old figured bass — an [[inversion numeral]]:

| Bass note | Symbol in C | Numeral |
|---|---|---|
| root | G | V |
| 3rd | G/B | V6 ("first inversion") |
| 5th | G/D | V64 ("second inversion") |

We don't write "V/3": a slash in a *numeral* already means something else — V/V is the dominant of V (week 27).

Songwriters use slash chords to make the bass move by step instead of jumping. Listen to this one (notation shown — it is
the explanation, not a test):

```example
{
  "title": "C – G/D – C/E – F – G – Am – F – G",
  "bpm": 80,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {"instrument": "bass", "seq": "C2:h D2:h | E2:h F2:h | G2:h A2:h | F2:h G2:h"},
    {"instrument": "piano", "seq": "[G3 C4 E4]:h [G3 B3 D4]:h | [G3 C4 E4]:h [A3 C4 F4]:h | [G3 B3 D4]:h [A3 C4 E4]:h | [A3 C4 F4]:h [G3 B3 D4]:h"}
  ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

Play along with the bass: it is simply a scale climbing, C–D–E–F–G–A, then F–G. Had you written roots only, bar 1
would say "C – G" with a G in the bass, and the playback would sound wrong at once. With the root in the bass a chord
sounds settled; with the 3rd in the bass it sounds lighter, in motion. Don't expect to *name* that difference by ear
yet. Use the keyboard instead:

1. **Bass first.** Find the lowest note with higher/lower searching and write it down, even if it doesn't look like a
   root. *Check:* it melts into the bass when you play it along.
2. **Then the chord above.** Try the triads of the key that *contain* that bass note (for B in G major: G, Em, B dim).
   Play each in the right hand along with the loop. *Check:* the right one blends with everything, not just the bass.
3. **Write chord / bass.** If the bass is the chord's root, write the chord alone; otherwise write a slash chord.
4. **Clue:** a bass that walks by step through several chords almost always means some slash chords.

Same moves in the drill: listen to the lowest line only and play what it actually plays, even when it isn't a root. The
*How to do it* box under the drill shows the exact method for your current rung.

```ladder
{
  "skill": "roots",
  "unlocks": 16,
  "intro": "One rung of this ladder, the bass not on the root, is today's skill in drill form; you practise at your own rung."
}
```

```exercise
{
  "id": "w42l2-bass",
  "type": "ear-bass",
  "title": "A new walking bass (hidden)",
  "instructions": "Eight bass notes, two per bar. Find the first by searching, then follow the line: up or down, step or jump? Play the lowest note you hear, not the root of the chord.",
  "srs": false,
  "spec": {
    "key": "G",
    "chords": ["I", "ii", "iii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Walking bass",
      "bpm": 80,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:8 kick:8 snare:q"},
        {"instrument": "bass", "seq": "G2:h F#2:h | E2:h D2:h | C2:h B1:h | A1:h D2:h"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 B3 D4]:h | [A3 C4 E4]:h [F#3 A3 D4]:h"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w42l2-listen",
  "type": "listen",
  "title": "Which chord, which bass?",
  "spec": {
    "example": {
      "title": "Walking bass",
      "bpm": 80,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:8 kick:8 snare:q"},
        {"instrument": "bass", "seq": "G2:h F#2:h | E2:h D2:h | C2:h B1:h | A1:h D2:h"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 B3 D4]:h | [A3 C4 E4]:h [F#3 A3 D4]:h"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Bar 1, second half: find the bass note, then try the triads that contain it along with the loop. Which symbol fits?", "choices": ["F#dim", "D/F#", "F#m", "Bm"], "answer": 1, "explain": "D/F#: a D major chord (D–F#–A) with its 3rd, F#, in the bass. In numerals: V6."},
      {"q": "Bar 3, second half: the chord above sounds like the home chord again, but the bass is not the home note. Which chord tone of the home chord is in the bass?", "choices": ["Root", "3rd", "5th", "Not a chord tone"], "answer": 1, "explain": "The 3rd: B under a G major triad, G/B — numeral I6."},
      {"q": "Bar 2: the chord above stays the same for the whole bar. What does the bass do in the second half?", "choices": ["Stays on the same note", "Steps down by one note", "Jumps up a fifth", "Steps up by one note"], "answer": 1, "explain": "It steps down from E to D under the same E minor triad: Em/D. D isn't in the chord at all — it's a passing bass note that keeps the scale walking."}
    ]
  }
}
```

````reveal Show the walking-bass loop
Two chords per bar: **G – D/F# | Em – Em/D | C – G/B | Am – D**. Bass G–F#–E–D–C–B–A–D: a scale walking down, with
the slash chords keeping it on its path. You will play it at the start of next lesson.
````

```exercise
{
  "id": "w42l2-name",
  "type": "quiz-input",
  "title": "Write the slash chord",
  "spec": {
    "questions": [
      {"q": "A C major triad with E in the bass is written…", "answer": ["C/E"], "kind": "text"},
      {"q": "An F major triad over a C bass is written…", "answer": ["F/C"], "kind": "text"},
      {"q": "An A minor triad with G in the bass is written…", "answer": ["Am/G"], "kind": "text"},
      {"q": "In F major, C/E as a roman numeral (first inversion) is…", "answer": ["V6"], "kind": "text"}
    ]
  }
}
```

## Pedal points

The opposite trick: the bass *stays* on one note while the chords change above it — a [[pedal point]]. Ballads, film
music and dance builds use it for tension: the chords move but the floor stays put. When you transcribe one, write both
layers: "F/C" tells a player exactly what to do.

To check for a pedal: hold one low key for the whole loop. If it never rubs while the chords change, the floor isn't
moving.

```exercise
{
  "id": "w42l2-pedal",
  "type": "listen",
  "title": "Does the floor move?",
  "spec": {
    "examples": [
      {
        "title": "Mystery loop 1",
        "bpm": 80,
        "timeSig": "4/4",
        "tracks": [
          {"instrument": "bass", "seq": "C2:w | C2:w | C2:w | C2:w"},
          {"instrument": "pad", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w"}
        ],
        "show": ["staff", "pianoroll"],
        "hidden": true,
        "loop": true
      },
      {
        "title": "Mystery loop 2",
        "bpm": 80,
        "timeSig": "4/4",
        "tracks": [
          {"instrument": "bass", "seq": "C2:w | F2:w | G2:w | C2:w"},
          {"instrument": "pad", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w"}
        ],
        "show": ["staff", "pianoroll"],
        "hidden": true,
        "loop": true
      }
    ],
    "questions": [
      {"q": "Follow only the bass in each loop. Which loop has a pedal point?", "choices": ["Loop 1", "Loop 2", "Both", "Neither"], "answer": 0, "explain": "Loop 1: C for all four bars, a tonic pedal. In loop 2 the bass follows the roots, C – F – G – C, under the same chords."},
      {"q": "Loop 1, bar 2: the chord above sounds like F major. With the bass as it is, the symbol is…", "choices": ["F", "F/C", "Fm", "C"], "answer": 1, "explain": "F/C — F major over its 5th. Loop 1 is C – F/C – G/C – C."}
    ]
  }
}
```

```exercise
{
  "id": "w42l2-daw",
  "type": "daw-task",
  "title": "Your own stepwise bass",
  "spec": {
    "template": {"bpm": 80, "key": "G", "tracks": [{"instrument": "piano", "seq": ""}, {"instrument": "bass", "seq": ""}]},
    "task": "In G major, write 4 bars of chords (two per bar, piano on track 1) whose bass line (track 2) walks steadily down by step from G, using at least two slash chords (for example G – Bm/F# – Em – G/D …). Every piano chord is a full triad of the key; the self-check asks you to name your slash chords.",
    "checks": [
      {"kind": "uses-chord", "roman": ["I", "ii", "iii", "IV", "V", "vi"], "min": 8, "track": 0},
      {"kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 0},
      {"kind": "custom", "id": "w42l2-slash", "note": "Self-check: at least two of my chords have a bass note that is not their root, and I wrote them as slash chords (e.g. D/F#)."},
      {"kind": "contour", "shape": "descending", "track": 1},
      {"kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 1},
      {"kind": "max-leap", "semitones": 5, "track": 1},
      {"kind": "starts-on", "degrees": [1], "track": 1},
      {"kind": "bars", "min": 4, "max": 4}
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```

## Between lessons

Play the walking-bass loop from the reveal once a day, left hand alone first. Listen to your stepwise bass
from the DAW task and check each slash chord against its piano chord.
