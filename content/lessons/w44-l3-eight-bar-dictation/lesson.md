---
id: w44-l3-eight-bar-dictation
title: Eight-Bar Melody Dictation
week: 44
order: 3
phase: p5
duration_min: 50
goals:
  - Dictate a hidden 8-bar melody with the skeleton-first method
  - "Use the chords to predict and check each bar's first note"
  - Enter the whole melody in the DAW and check it against the original
prerequisites: [w44-l2-melody-over-harmony]
tags: [transcription, melody, dictation, daw]
---

# Eight-Bar Melody Dictation

Eight bars is a real melodic unit — a whole verse or chorus — and far too much to hold in your head at once. The trick is
never to try.

## Skeleton first

Use the [[skeleton-first]] method:

1. **Chunk.** Work on one 2- or 4-bar phrase at a time, looping it (use the slowed version below).
2. **Downbeats.** In each bar find only the first note: play the bar's chord tones (root, 3rd, 5th) one at a time with
   the loop; the one that merges is it. Check: write the eight skeleton notes down and play them along with the loop —
   each should sit on its chord.
3. **Rhythm.** Tap the chunk's rhythm, ignoring pitch. Check: tap it along with the loop; your taps and the notes should
   click together.
4. **Fill in.** Fill the gaps between skeleton notes; most fills move by step, and a leap lands on a chord tone. Ask of
   each move: up or down, step or leap?
5. **Play it back** with the track and fix only what sounds wrong.

When stuck on a bar: loop only that bar, guess the note, compare it with its neighbour key back to back, and move on
after two tries — the next downbeat is already known, so one wrong fill note costs you nothing.

The skeleton means you never lose your place: even if a fill note is wrong, the next downbeat is already known.

## Mystery Song #3

Pass 4 is done for you: the chords are **D – A – Bm – G | D – G – A – D**. A realistic target: the skeleton in five
minutes, the whole melody in twenty. Watch for repetition — noticing that a phrase starts like an earlier one halves the
work.

```example
{
  "title": "Mystery Song #3 — full mix",
  "bpm": 90,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 snare:8 snare:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "D2:q. D2:8 D2:h | A1:q. A1:8 A1:h | B1:q. B1:8 B1:h | G1:q. G1:8 G1:h | D2:q. D2:8 D2:h | G1:q. G1:8 G1:h | A1:q. A1:8 A1:h | D2:q. D2:8 D2:h"},
    {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w"},
    {"instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Mystery Song #3 — melody and chords, slowed",
  "bpm": 60,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w"},
    {"instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w44l3-skeleton",
  "type": "listen",
  "title": "Step 2: the skeleton",
  "spec": {
    "example": {
      "title": "Mystery Song #3 — melody and chords",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w"},
        {"instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Bar 1 (D chord): the first melody note is the chord's…", "choices": ["Root", "3rd", "5th"], "answer": 1, "explain": "The 3rd, F#."},
      {"q": "Bar 4 (G chord): the long note is the chord's…", "choices": ["Root", "3rd", "5th"], "answer": 0, "explain": "The root, G."},
      {"q": "Compare bar 5 with bar 1. What does bar 5 do?", "choices": ["Something new, lower down", "Starts like bar 1, then leaps higher", "Repeats bar 1 exactly", "Starts like bar 1, then goes lower"], "answer": 1, "explain": "It starts like bar 1 (F♯, A) and then leaps up to D5 — the second half of the tune climbs higher than the first."},
      {"q": "The last note (bar 8) is which degree?", "choices": ["1", "3", "5", "7"], "answer": 0, "explain": "1: D, home."}
    ]
  }
}
```

```exercise
{
  "id": "w44l3-first",
  "type": "ear-melody",
  "title": "Bars 1–4 as degrees",
  "instructions": "Thirteen notes. Skeleton first, then fill in. Answer as degrees of D major.",
  "srs": false,
  "spec": {
    "key": "D",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "degrees",
    "example": {
      "title": "Bars 1–4",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w44l3-second",
  "type": "ear-melody",
  "title": "Bars 5–8 played back",
  "instructions": "Fourteen notes. Play them back on the keyboard.",
  "srs": false,
  "spec": {
    "key": "D",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Bars 5–8",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w"},
        {"instrument": "lead", "seq": "F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

## Into the DAW

1. Enter your skeleton first: one note at the start of each bar. Play it with the piano track — every note should sit on
   its chord.
2. Fill in bars 1–4 from your answers above, then bars 5–8. Play each 2-bar chunk against the hidden full mix, A/B:
   first the original, then yours.
3. A bar sounds wrong? Solo the lead, loop that bar, and move one note at a time a key up or down until it matches.
4. Rhythm feels stiff? Look for a note that should start an eighth early (an anticipation) and drag it left.

```exercise
{
  "id": "w44l3-daw",
  "type": "daw-task",
  "title": "All eight bars",
  "spec": {
    "template": {
      "bpm": 90,
      "key": "D",
      "tracks": [
        {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w"},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Enter the whole 8-bar melody of Mystery Song #3 on the lead track, with its rhythm. The check compares your notes and their timing with the original. When it passes, reveal the notation and play both versions.",
    "checks": [
      {"kind": "bars", "min": 8, "max": 8},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 90,
          "tracks": [
            {"instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.8,
        "octave": "any"
      },
      {"kind": "ends-on", "degree": 1, "track": 1}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

## Your own level: melody

The drill is today's routine in miniature: first note by search, then up/down and step/leap, chunk long melodies. The
*How to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "melody", "unlocks": 19, "intro": "Melody dictation at your own rung."}
```

```exercise
{
  "id": "w44l3-play",
  "type": "play-melody",
  "title": "Play the answer",
  "instructions": "Only after the DAW task: play the correct melody with the chords.",
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "D",
    "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q",
    "showStaff": true,
    "showKeyboard": false,
    "countIn": 1,
    "backing": {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w"}
  }
}
```

## Between lessons

One Practice session, then play your DAW version of Mystery Song #3 against the original once more and fix any bar that
still sounds off.
