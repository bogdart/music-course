---
id: w41-l3-mystery-song-one
title: Mystery Song One — All Seven Passes
week: 41
order: 3
phase: p5
duration_min: 50
goals:
  - Run all seven listening passes on a hidden 8-bar song and fill in a form map
  - Diagnose a wrong answer by the pass it belongs to
  - "Rebuild the song's drums, bass and chords in the DAW and compare them with the original"
prerequisites: [w41-l2-finding-key-and-tempo]
tags: [transcription, workflow, daw]
---

# Mystery Song One — All Seven Passes

Today you run the whole workflow once, start to finish, on a short song. Speed doesn't matter; the order does. Keep a
[[form map]] open (paper, or the reflect box at the end) and write one line after each pass.

## The plan, pass by pass

Use the method from [the first lesson of this week](../w41-l1-the-transcription-workflow/). Loop, ask one question,
test every guess on the keyboard.

1. **Key.** Find the note the tune rests on at the end of bar 4 and bar 8, and hold it under the loop.
   *Check:* it sounds settled all the way through. Then play major and minor chords on it.
2. **Form.** Count bars from the first downbeat (tap 1-2-3-4 per bar). Listen for a drum fill and a crash cymbal: in
   pop they mark a new section. *Check:* your sections add up to 8 bars.
3. **Bass.** Use the slowed copy. Find bar 1's bass note with higher/lower searching, then each next one from the last
   (up or down? a step or a jump?). *Check:* play all eight along with the full-speed loop; none should rub.
4. **Numerals.** Count up from home to each bass note. Unsure about major or minor? Play both on that note along with
   the loop and keep the one that blends.
5. **Hook.** Find its first note by searching, then follow the up/down path one note at a time.
6. **Groove and layers.** One listen for the snare, one for which instrument plays the chords.

Write one line of the [[form map]] after each pass (paper, or the reflect box at the end). The slowed copy helps with
bass and melody; key and form are easier at full speed. Both examples are hidden: answer *before* you press Reveal.

```example
{
  "title": "Mystery Song #1 — full speed",
  "bpm": 76,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:8 snare:8"},
    {"instrument": "bass", "seq": "G2:h. r:q | D2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q | D2:h. r:q | G2:h. r:q | E2:h. r:q"},
    {"instrument": "piano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h"},
    {"instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Mystery Song #1 — slowed, bass and melody only",
  "bpm": 52,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "bass", "seq": "G2:h. r:q | D2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q | D2:h. r:q | G2:h. r:q | E2:h. r:q"},
    {"instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

**When an answer is wrong, ask which pass failed.** Right bass note, wrong numeral? That's pass 4: replay that bar
and compare major and minor again. Wrong bass note? Go back to pass 3 and search again one or two keys either side.

```exercise
{
  "id": "w41l3-map",
  "type": "listen",
  "title": "Passes 1–2: key and form",
  "spec": {
    "example": {
      "title": "Mystery Song #1",
      "bpm": 76,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:8 snare:8"},
        {"instrument": "bass", "seq": "G2:h. r:q | D2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q | D2:h. r:q | G2:h. r:q | E2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h"},
        {"instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Key?", "choices": ["G major", "E minor", "D major", "C major"], "answer": 0, "explain": "G major. Play a G-major scale along and nothing clashes, and the strongest resting point comes near the end of the eight bars. Passes 3 and 5 below show you exactly where."},
      {"q": "How do the 8 bars divide?", "choices": ["2 + 6", "4 + 4", "One 8-bar section", "3 + 5"], "answer": 1, "explain": "4 + 4: a tom fill ends bar 4, a crash marks bar 5, and the melody jumps higher — a verse, then a chorus."},
      {"q": "Pass 6: where does the snare hit?", "choices": ["Beats 1 and 3", "Beats 2 and 4", "Every eighth note", "Only beat 3"], "answer": 1},
      {"q": "Pass 7: which instrument plays the chords?", "choices": ["Strings", "Piano", "Guitar", "Pad"], "answer": 1}
    ]
  }
}
```

```exercise
{
  "id": "w41l3-bass",
  "type": "ear-bass",
  "title": "Pass 3: eight bass notes",
  "instructions": "One bass note per bar. Find each on the keyboard with higher/lower searching (the slowed copy helps), check it along with the loop, then play the eight in order.",
  "srs": false,
  "spec": {
    "key": "G",
    "chords": ["I", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Mystery Song #1",
      "bpm": 76,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:8 snare:8"},
        {"instrument": "bass", "seq": "G2:h. r:q | D2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q | D2:h. r:q | G2:h. r:q | E2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h"},
        {"instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w41l3-prog",
  "type": "ear-progression",
  "title": "Pass 4: eight numerals",
  "srs": false,
  "spec": {
    "key": "G",
    "mode": "major",
    "chords": ["I", "IV", "V", "vi"],
    "example": {
      "title": "Mystery Song #1",
      "bpm": 76,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:8 snare:8"},
        {"instrument": "bass", "seq": "G2:h. r:q | D2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q | D2:h. r:q | G2:h. r:q | E2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h"},
        {"instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q"}
      ]
    },
    "progression": ["I", "V", "vi", "IV", "IV", "V", "I", "vi"]
  }
}
```

```exercise
{
  "id": "w41l3-hook",
  "type": "ear-melody",
  "title": "Pass 5: the hook (bars 7–8 only)",
  "instructions": "Just the last two bars of the tune, over the chords. Find the first note by searching, then follow up/down for the other three and play all four back.",
  "srs": false,
  "spec": {
    "key": "G",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Mystery Song #1 — hook",
      "bpm": 66,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "pad", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w", "volume": 0.6},
        {"instrument": "lead", "seq": "B4:q D5:q G5:h | E5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w41l3-rebuild",
  "type": "daw-task",
  "title": "Pass 7: rebuild Mystery Song #1",
  "spec": {
    "template": {
      "bpm": 76,
      "key": "G",
      "tracks": [{"instrument": "drums", "seq": ""}, {"instrument": "bass", "seq": ""}, {"instrument": "piano", "seq": ""}]
    },
    "timerMin": 15,
    "task": "About 15 minutes; if the session runs out, finish it at the start of next lesson. From your form map, rebuild the 8 bars: drums (snare on 2 and 4, a fill into bar 5), one bass note per bar on beat 1, and piano chords. The checks compare your bass with the original. Then reveal the original's notation and play the two versions back to back.",
    "checks": [
      {"kind": "bars", "min": 8, "max": 8},
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 76,
          "tracks": [
            {"instrument": "bass", "seq": "G2:h. r:q | D2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q | D2:h. r:q | G2:h. r:q | E2:h. r:q"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.75,
        "octave": "any"
      },
      {
        "kind": "plays-progression",
        "progression": ["I", "V", "vi", "IV", "IV", "V", "I", "vi"],
        "barsPerChord": 1,
        "mode": "chords",
        "minRatio": 0.75,
        "track": 2
      },
      {
        "kind": "custom",
        "id": "w41-compare-original",
        "note": "Self-check: I compared my rebuild with the revealed original, bar by bar."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

```exercise
{
  "id": "w41l3-formmap",
  "type": "reflect",
  "title": "Your first complete form map",
  "spec": {
    "prompt": "Write the full form map for Mystery Song #1: key, sections with bars, bass notes and numerals, the hook, the drum pattern and which instrument plays which role. Which pass was hardest, and which of your mistakes belonged to which pass?",
    "minWords": 30
  }
}
```

## Between lessons

Play your rebuild and the original back to back once a day. Fix one bar each time until you can't tell them apart
on the bass and chords.
