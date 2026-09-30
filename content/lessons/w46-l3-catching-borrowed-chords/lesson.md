---
id: w46-l3-catching-borrowed-chords
title: Catching Borrowed Chords
week: 46
order: 3
phase: p5
duration_min: 45
goals:
  - Flag a borrowed chord when the bass lands outside the major scale (♭VI, ♭VII)
  - Catch the minor iv, whose bass stays in the scale
  - Write an 8-bar progression with two borrowed chords
prerequisites: [w46-l2-sevenths-and-sus-in-context]
tags: [transcription, borrowed-chords, ear, daw]
---

# Catching Borrowed Chords

You met borrowed chords as a writer (weeks 19 and 33). Now turn it round: how do you *catch* one flying past in a song?

## The bass gives most of them away

Three borrowed chords do most of the work in pop, all from the parallel minor. In C major:

| Chord | Bass note | In the C major scale? | Sound |
|---|---|---|---|
| iv (Fm) | F | yes — only the chord's middle note changes | bittersweet |
| ♭VI (A♭) | A♭ | **no** | wide, cinematic |
| ♭VII (B♭) | B♭ | **no** | open, anthemic |

How to catch them, step by step:

1. **Bass search on white keys first** (in C). Search for the bass note with higher/lower as usual.
   *Check:* play it along. If every white key near it rubs, one too low and one too high, the bass is the black key in
   between. That is a note outside the scale: write a flat in front of its numeral (A♭ = ♭6, chord ♭VI).
2. **Confirm major.** Play the major chord on that bass note along with the loop. For ♭VI and ♭VII it nearly always
   blends.
3. **Catch the sneaky iv.** Its bass (F in C) is in the scale, so step 1 won't flag it. Play the default IV (F–A–C)
   along. If the A rubs, try A♭ (F–A♭–C). If that blends, it's iv, the bittersweet surprise from lesson 1.

The flat is measured from the *major* scale of home: in C, A♭ is a half step below A (degree 6), so it is ♭6 and its
chord ♭VI.

## One hidden song

Eight bars in C major. First the bass as degrees (step 1), then the numerals (steps 2–3). Stuck on a bar? Loop it and
compare two candidate keys back to back.

```example
{
  "title": "Mystery loop — 8 bars",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "C2:h. r:q | Ab1:h. r:q | Bb1:h. r:q | C2:h. r:q | C2:h. r:q | F2:h. r:q | F2:h. r:q | C2:h. r:q"},
    {"instrument": "piano", "seq": "[G3 C4 E4]:w | [Ab3 C4 Eb4]:w | [Bb3 D4 F4]:w | [G3 C4 E4]:w | [G3 C4 E4]:w | [A3 C4 F4]:w | [Ab3 C4 F4]:w | [G3 C4 E4]:w"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w43l3-bass",
  "type": "ear-bass",
  "title": "Pass 3: bass notes as degrees",
  "instructions": "Name each of the eight bass notes as a scale degree of C major. A note outside the scale gets a flat.",
  "srs": false,
  "spec": {
    "key": "C",
    "chords": ["I", "IV", "V", "vi", "bVI", "bVII"],
    "answer": "name",
    "example": {
      "title": "Mystery loop",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "C2:h. r:q | Ab1:h. r:q | Bb1:h. r:q | C2:h. r:q | C2:h. r:q | F2:h. r:q | F2:h. r:q | C2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 C4 E4]:w | [Ab3 C4 Eb4]:w | [Bb3 D4 F4]:w | [G3 C4 E4]:w | [G3 C4 E4]:w | [A3 C4 F4]:w | [Ab3 C4 F4]:w | [G3 C4 E4]:w"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w43l3-prog",
  "type": "ear-progression",
  "title": "Pass 4: the numerals",
  "srs": false,
  "spec": {
    "key": "C",
    "mode": "major",
    "chords": ["I", "IV", "iv", "V", "vi", "bVI", "bVII"],
    "example": {
      "title": "Mystery loop",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "C2:h. r:q | Ab1:h. r:q | Bb1:h. r:q | C2:h. r:q | C2:h. r:q | F2:h. r:q | F2:h. r:q | C2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 C4 E4]:w | [Ab3 C4 Eb4]:w | [Bb3 D4 F4]:w | [G3 C4 E4]:w | [G3 C4 E4]:w | [A3 C4 F4]:w | [Ab3 C4 F4]:w | [G3 C4 E4]:w"}
      ]
    },
    "progression": ["I", "bVI", "bVII", "I", "I", "IV", "iv", "I"]
  }
}
```

In the drill: bass first (in the scale or not?), colour second (major or minor?). The *How to do it* box under the
drill shows the exact method for your current rung.

```ladder
{
  "skill": "progressions",
  "unlocks": 21,
  "intro": "Several rungs of this ladder use borrowed chords; you practise at your own rung."
}
```

```exercise
{
  "id": "w43l3-analysis",
  "type": "roman-analysis",
  "title": "Analyse in G",
  "spec": {"key": "G", "chords": ["G", "Eb", "F", "G", "C", "Cm", "G", "D"], "prompt": "symbols", "palette": "chromatic"}
}
```

```exercise
{
  "id": "w43l3-daw",
  "type": "daw-task",
  "title": "Borrow two chords",
  "spec": {
    "template": {
      "bpm": 96,
      "key": "G",
      "tracks": [{"instrument": "drums", "seq": ""}, {"instrument": "bass", "seq": ""}, {"instrument": "piano", "seq": ""}]
    },
    "task": "Write 8 bars in G: G – E♭ – F – G | G – C – Cm – G (I – ♭VI – ♭VII – I | I – IV – iv – I). Add a pop groove and bass notes on beat 1. Listen back and write in the clip name what each borrowed chord does to the mood.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "piano"]},
      {
        "kind": "chord-tones-on-beats",
        "beats": [1],
        "progression": ["I", "bVI", "bVII", "I", "I", "IV", "iv", "I"],
        "barsPerChord": 1,
        "minRatio": 1,
        "track": 1
      },
      {
        "kind": "plays-progression",
        "progression": ["I", "bVI", "bVII", "I", "I", "IV", "iv", "I"],
        "barsPerChord": 1,
        "mode": "chords",
        "minRatio": 0.85,
        "track": 2
      },
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0},
      {"kind": "bars", "min": 8, "max": 8}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

## Between lessons

Play your 8-bar DAW progression once a day. In one song you know, listen for a bass note that won't fit on white keys
around home; that's your borrowed-chord suspect.
