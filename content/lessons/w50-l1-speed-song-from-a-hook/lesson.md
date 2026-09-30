---
id: w50-l1-speed-song-from-a-hook
title: "Speed Song A, Session 1: From a Hook"
week: 50
order: 1
phase: p5
duration_min: 50
goals:
  - Transcribe a 2-bar seed hook by ear, then harmonise it fast with chord tones under its downbeats
  - Write an 8-bar chorus and an 8-bar verse inside a timebox
  - Make the verse contrast with the chorus by register and density, not new material
prerequisites: [w49-l3-rock-reference-analysis]
tags: [songwriting, speed, hook, workflow, daw]
---

# Speed Song A, Session 1: From a Hook

Nine weeks of taking songs apart showed you that a finished song is a small number of decisions: a key, a form, four
chords, a hook, a groove, a few layers. Speed songwriting is making those decisions *quickly* and not reopening them.

This week you write **two** 2-minute songs from two different starting points, **each over two sessions**: song A starts
from a hook (sessions 1–2), song B from a beat (sessions 3–4). That makes **four 50-minute sessions this week** instead
of the usual two or three: comparing two starting points only works when both songs get finished. If the week is too
full, spread the four sessions over ten days rather than cutting a song. The finished song matters more than the perfect
song.

## The timebox for session 1

Work to a [[timebox]]: a fixed time per stage. Set a timer; when it rings, move on, finished or not.

| Minutes | Stage | Decision |
|---|---|---|
| 0–10 | Hook | Transcribe the seed, learn it, keep its key and tempo |
| 10–20 | Chorus | Chords under the hook, 8 bars, bass notes |
| 20–33 | Verse | Same key, lower and sparser; 8 bars |
| 33–40 | Listen | Play the 16 bars twice; note what session 2 needs — don't fix it now |
| 40–50 | Close | Notes for session 2, a short ladder drill |

The DAW timer covers minutes 10–40 (30 minutes).

## The seed — by ear

Your seed hook arrives the way ideas arrive: as sound. Transcribe it first.

```example
{
  "title": "Seed hook",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [{"instrument": "lead", "seq": "C#5:8 C#5:8 B4:8 A4:8 r:8 E4:8 A4:q | B4:q. C#5:8 B4:q A4:q"}],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w50l1-seed",
  "type": "ear-melody",
  "title": "Transcribe the seed",
  "instructions": "Ten notes. Play them back; then reveal the seed above.",
  "srs": false,
  "spec": {
    "key": "A",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Seed hook",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [{"instrument": "lead", "seq": "C#5:8 C#5:8 B4:8 A4:8 r:8 E4:8 A4:q | B4:q. C#5:8 B4:q A4:q"}]
    }
  }
}
```

```exercise
{
  "id": "w50l1-hook",
  "type": "play-melody",
  "title": "Learn the seed",
  "spec": {
    "bpm": 96,
    "timeSig": "4/4",
    "key": "A",
    "seq": "C#5:8 C#5:8 B4:8 A4:8 r:8 E4:8 A4:q | B4:q. C#5:8 B4:q A4:q",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

## Harmonise it in two minutes

Use the transcriber's trick in reverse: look at the note on each bar's downbeat and list the chords of the key that
contain it. For example, a bar starting on E in A major could take A (A C# E), C#m (C# E G#) or E (E G# B). Do the same for
each bar of your seed — the quiz below walks you through the first two — pick one chord per bar, try the options against
the hook and keep the one you like; any of them can make a song. Continue with two more bars (often IV and V) and repeat.

For the verse, keep the chords and *change the arrangement*: melody lower, fewer notes, no drums or half the drums.
Contrast from density is faster than contrast from new material.

```exercise
{
  "id": "w50l1-fit",
  "type": "quiz",
  "title": "Which chords fit the hook?",
  "spec": {
    "questions": [
      {"q": "Bar 1 starts on C#. Which A-major chords contain C#?", "choices": ["A and F#m", "E and Bm", "D and Bm", "E and D"], "answer": 0, "explain": "A (A C# E) and F#m (F# A C#) — C#m (C# E G#) has it too."},
      {"q": "Bar 2 starts on B. Which chord contains B?", "choices": ["A", "E", "D", "F#m"], "answer": 1, "explain": "E (E G# B); Bm has it too. So bar 1 – bar 2 could be A – E, F#m – E or A – Bm: try each against the hook."},
      {"q": "Your verse needs contrast with the chorus. Fastest option?", "choices": ["New chords in a new key", "Same chords, lower melody, sparser arrangement", "Change the tempo", "Add a key change"], "answer": 1}
    ]
  }
}
```

```exercise
{
  "id": "w50l1-song",
  "type": "daw-task",
  "title": "Session 1: chorus and verse (16 bars)",
  "spec": {
    "template": {
      "bpm": 96,
      "key": "A",
      "tracks": [
        {"instrument": "lead", "seq": ""},
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "drums", "seq": ""},
        {"instrument": "pad", "seq": ""}
      ]
    },
    "task": "Follow the timebox. Put the seed hook on the lead track, build an 8-bar chorus around it (chords on the piano, bass notes), then an 8-bar verse after it. Stop when the 30-minute timer runs out, even if unfinished — session 2 continues this project.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["lead", "piano", "bass"]},
      {"kind": "bars", "min": 16},
      {"kind": "in-key", "key": "A", "scale": "major", "allowPassing": true, "track": 0},
      {"kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 0},
      {"kind": "custom", "id": "w50-timebox-a1", "note": "Self-check: I stopped when the timebox ran out."}
    ],
    "minBars": 16,
    "projectRef": "w50-song-a",
    "timerMin": 30
  }
}
```

```exercise
{
  "id": "w50l1-notes",
  "type": "reflect",
  "title": "Notes for session 2",
  "spec": {
    "prompt": "Which stage overran its timebox, and why? List what session 2 has to add (form, drums, layers, ending) and one decision you agonised over that probably doesn't matter.",
    "minWords": 30
  }
}
```

```ladder
{"skill": "melody", "unlocks": 19, "intro": "Two minutes of melody at your own rung before you close the session."}
```
