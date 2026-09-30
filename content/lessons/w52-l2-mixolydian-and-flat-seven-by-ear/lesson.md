---
id: w52-l2-mixolydian-and-flat-seven-by-ear
title: "Transcribe 4: Rock — Mixolydian and ♭VII by Ear"
week: 52
order: 2
phase: p5
duration_min: 45
goals:
  - Recognise I – ♭VII – IV and avoid naming the song after the key of its IV chord
  - Hear the lowered 7th (♭7) in a rock melody over a major home chord
  - Write an 8-bar Mixolydian rock section
prerequisites: [w52-l1-riffs-and-power-chords]
tags: [transcription, rock, mixolydian, borrowed-chords, ear, daw]
---

# Transcribe 4: Rock — Mixolydian and ♭VII by Ear

If one chord defines classic and indie rock, it's **♭VII**: the major chord a whole step below home (week 19). E – D – A –
E is a typical shape. It sounds open and confident — and it trips transcribers in a specific way.

## The key trap

Take E – D – A – E. E, D and A all belong to **A major**. Someone who only collects chord names concludes "key of A"
and gets every numeral wrong. Your pass-1 tests prevent this: where do phrases *end*? Where does the bass *rest*? If the
answer is E, the chords are **I – ♭VII – IV** in E: the D chord is built on the ♭7 of E — E Mixolydian, the major scale
with a lowered 7th (week 26).

**Avoiding the trap, step by step:**

1. Find the bass notes of the loop (low key, higher/lower until it merges).
2. Take the two strongest candidates for home — here, the root of the chord the loop comes to rest on, and the key its
   chord names suggest. (Where the loop *starts* proves nothing.) Hold each one low under the loop for a full cycle.
   The home note can ring through everything; the other one starts to feel like it wants to move. *Check:* the resting
   chord of each phrase should be built on that note.
3. Look for **♭VII**: a bass note a whole step (two keys) *below* home, under a major chord. *Check:* play the major
   chord on it along with the loop — it should blend; it sounds relaxed, not pulling back home the way V does.

Rule of thumb: if it sounds like V – IV – I of some key but keeps coming home to the V, you're in Mixolydian on that V.

## The ♭7 in the melody

Mixolydian melodies use ♭7 freely, even over the home chord. When a note sits just below home but doesn't pull up into
it, test it on the keyboard: play 7 (one key below home) and ♭7 (two keys below) against the replay and keep the one
that matches. If it's ♭7, look for a ♭VII chord nearby.

Mystery track *Highway Hum*, hidden:

```example
{
  "title": "Highway Hum",
  "bpm": 100,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "D2:q. D2:8 D2:q A2:q | C2:q. C2:8 C2:q G2:q | G1:q. G1:8 G1:q D2:q | D2:q. D2:8 D2:q C2:q"},
    {"instrument": "pluck", "seq": "[D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q | [C3 E3 G3 C4]:q [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:8 r:8 [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:q | [G2 B2 D3 G3]:q [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:8 r:8 [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:q | [D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q"},
    {"instrument": "lead", "seq": "F#4:8 A4:8 A4:8 B4:8 A4:q F#4:q | E4:8 G4:8 G4:8 A4:8 G4:q C5:q | B4:q. A4:8 G4:q D4:q | C5:8 B4:8 A4:8 F#4:8 D4:h"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w49l2-listen",
  "type": "listen",
  "title": "Which key? Which mode?",
  "spec": {
    "example": {
      "title": "Highway Hum",
      "bpm": 100,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "D2:q. D2:8 D2:q A2:q | C2:q. C2:8 C2:q G2:q | G1:q. G1:8 G1:q D2:q | D2:q. D2:8 D2:q C2:q"},
        {"instrument": "pluck", "seq": "[D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q | [C3 E3 G3 C4]:q [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:8 r:8 [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:q | [G2 B2 D3 G3]:q [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:8 r:8 [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:q | [D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q"},
        {"instrument": "lead", "seq": "F#4:8 A4:8 A4:8 B4:8 A4:q F#4:q | E4:8 G4:8 G4:8 A4:8 G4:q C5:q | B4:q. A4:8 G4:q D4:q | C5:8 B4:8 A4:8 F#4:8 D4:h"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Resting chord and hold-it-under test: where is home?", "choices": ["G", "D", "C", "A"], "answer": 1, "explain": "D: the loop keeps coming to rest on the D chord, the tune falls to D at the end, and D held under the loop rings through everything, while G starts to lean."},
      {"q": "Which scale does the loop live in?", "choices": ["D Mixolydian", "D major", "D Dorian", "G major"], "answer": 0, "explain": "D Mixolydian: D major with C natural instead of C#."}
    ]
  }
}
```

```exercise
{
  "id": "w49l2-prog",
  "type": "ear-progression",
  "title": "Pass 4: the numerals",
  "srs": false,
  "spec": {
    "key": "D",
    "mode": "major",
    "chords": ["I", "IV", "V", "bVII", "vi"],
    "example": {
      "title": "Highway Hum",
      "bpm": 100,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "D2:q. D2:8 D2:q A2:q | C2:q. C2:8 C2:q G2:q | G1:q. G1:8 G1:q D2:q | D2:q. D2:8 D2:q C2:q"},
        {"instrument": "pluck", "seq": "[D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q | [C3 E3 G3 C4]:q [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:8 r:8 [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:q | [G2 B2 D3 G3]:q [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:8 r:8 [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:q | [D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q"},
        {"instrument": "lead", "seq": "F#4:8 A4:8 A4:8 B4:8 A4:q F#4:q | E4:8 G4:8 G4:8 A4:8 G4:q C5:q | B4:q. A4:8 G4:q D4:q | C5:8 B4:8 A4:8 F#4:8 D4:h"}
      ]
    },
    "progression": ["I", "bVII", "IV", "I"]
  }
}
```

```exercise
{
  "id": "w49l2-b7",
  "type": "ear-melody",
  "title": "The last melody phrase, as degrees",
  "instructions": "Five notes over the home chord. Answer as degrees of D.",
  "srs": false,
  "spec": {
    "key": "D",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "degrees",
    "example": {
      "title": "Last phrase",
      "bpm": 80,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "pluck", "seq": "[D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q"},
        {"instrument": "lead", "seq": "C5:8 B4:8 A4:8 F#4:8 D4:h"}
      ]
    },
    "track": 1
  }
}
```

## Ear: degrees and progressions at your level

Two drills, one routine: hold home in your head (or on a key), then place each note or chord against it — for chords,
bass note first, then colour. The *How to do it* box under each drill shows the exact method for your current rung.

```ladder
{"skill": "degrees", "unlocks": 30, "intro": "Rung 27 of this ladder is the ♭7; at your own rung."}
```

```ladder
{"skill": "progressions", "unlocks": 21, "intro": "Rung 12 is V or ♭VII; at your own rung."}
```

```exercise
{
  "id": "w49l2-analysis",
  "type": "roman-analysis",
  "title": "Analyse in A",
  "spec": {"key": "A", "chords": ["A", "G", "D", "A", "A", "G", "D", "E"], "prompt": "symbols", "palette": "chromatic"}
}
```

## Your Mixolydian section

1. Chords first on the pluck: A – G – D – A (I – ♭VII – IV – I), two bars each or one bar each, repeated to 8 bars.
2. Bass: eighth-note roots. Drums: kick on 1 and 3, snare on 2 and 4, eighth hats.
3. Melody: start from A, use G natural at least twice (try it over the G chord first, then over A), end on A.

*Check:* play it and hold A on your keyboard throughout — it should feel like home all the way. If G major starts to
sound like home, end the section more clearly on A.

```exercise
{
  "id": "w49l2-daw",
  "type": "daw-task",
  "title": "8 bars of Mixolydian rock",
  "spec": {
    "template": {
      "bpm": 104,
      "key": "A",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "pluck", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Write 8 bars in A Mixolydian: a rock beat, eighth-note bass roots, power chords or full chords on the pluck using A, G and D, and a melody that uses G natural (♭7) at least twice and ends on A.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "pluck", "lead"]},
      {"kind": "bars", "min": 8, "max": 8},
      {"kind": "in-key", "key": "A", "scale": "mixolydian", "allowPassing": false, "track": 3},
      {"kind": "in-key", "key": "A", "scale": "mixolydian", "allowPassing": false, "track": 1},
      {"kind": "ends-on", "degree": 1, "track": 3},
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

## Between lessons

Find one rock song with a ♭VII (bass two keys below home under a major chord) and test home with the held-note test.
