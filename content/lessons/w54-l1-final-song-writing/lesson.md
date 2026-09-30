---
id: w54-l1-final-song-writing
title: "Final Project 1: Brief, Form and Core"
week: 54
order: 1
phase: p5
duration_min: 50
goals:
  - Write a short brief and choose a reference track for your final song
  - "Borrow the reference's form as your song's skeleton"
  - "Reach checkpoint 3: a finished 16-bar core of verse and chorus"
prerequisites: [w53-l4-beat-song-finish]
tags: [songwriting, final-project, form, reference, daw]
---

# Final Project 1: Brief, Form and Core

One song, fully finished, at least three minutes long, with a complete arrangement. Like last week, this week has **four
50-minute sessions**, one per lesson, instead of the usual two or three: a three-minute song with a full arrangement does
not fit in fewer, and splitting it across weeks loses momentum. Spread the sessions over ten days if you need to. There are
six checkpoints — each a concrete, checkable result, so you always know where you are. All four lessons open the same DAW
project.

Today's timetable: brief 8 minutes · form map 7 · core 25 (timer) · warm-up chords and ear drill 10.

| # | Checkpoint | Session |
|---|---|---|
| 1 | Brief + reference track | 1 |
| 2 | Form map (borrowed from the reference) | 1 |
| 3 | Core: verse + chorus chords, bass, melody | 1 |
| 4 | Full-length structure with drums and bass | 2 |
| 5 | Layers and energy curve | 3 |
| 6 | Self-transcription, balance, pan, sign-off | 4 |

## Checkpoint 1 — the brief

Three sentences: *style* (one of the four you transcribed, or a blend), *mood* in two words, *starting point* (hook,
beat or chords — your fastest from week 53). Then pick a **reference track**: a song you analysed this phase, or any song
you love. You borrow only decisions from it — tempo range, form, density — never melody or lyrics.

## Checkpoint 2 — borrow the form

Adopt the reference's form. Form isn't ownable, and a proven form removes a whole category of decisions. Keep this
quick: if the reference is a song you already mapped in weeks 49–52, copy that form map from your notes. If it's a new
song, do one listening pass for section names and rough lengths only — don't count every bar today; your song's own bar
counts come from the length rule below.

Length rule: in 4/4, **bars ≥ BPM × 0.75** gives at least three minutes. At 100 BPM that's 75 bars — for example Intro 4,
Verse 16, Chorus 8, Verse 16, Chorus 8, Bridge 8, Chorus 8, Chorus 8, Outro 4 = 80.

## Checkpoint 3 — the core

Write only the verse and chorus — chords, bass notes and melody, 8 bars each — at full quality, in about 25 minutes, no
drums yet. Everything else in the song is made from these 16 bars. Here's what a finished core can sound like (an original
example — yours will differ):

```example
{
  "title": "Example core: 4 bars of verse + 4 bars of chorus",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "G",
  "tracks": [
    {"instrument": "bass", "seq": "E2:h E2:h | C2:h C2:h | G1:h G1:h | D2:h D2:h | C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h"},
    {"instrument": "piano", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w | [G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h"},
    {"instrument": "lead", "seq": "B4:q B4:8 A4:8 G4:q E4:q | G4:h. r:q | D4:q G4:8 A4:8 B4:q G4:q | A4:h. r:q | E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q"}
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The verse sits low and uses vi – IV – I – V; the chorus lifts the melody and reorders the chords (IV – V – vi – I).

Work in this order, with your week-53 starting point first:

1. **Chords (5 min).** Four chords per section from I, IV, V, vi (add one borrowed or seventh chord only if you already
   hear it in your head). Check: loop each 4-chord line twice — the last chord should lead back into the first.
2. **Bass (3 min).** Roots, low, one or two notes per bar. Check: solo bass + piano; any bar that sounds floorless has a
   wrong root.
3. **Chorus hook (10 min).** Improvise over the chorus loop on the keyboard, record, keep the best 2 bars, repeat them.
   Check: loop the chorus four times — still good on the fourth?
4. **Verse melody (7 min).** Lower than the hook, more notes on fewer pitches. Check: play verse into chorus; the
   chorus should lift. If not, move the verse melody down a few steps.

**Stuck?** Borrow the example core's chords in your key and write only the melody.

```exercise
{
  "id": "w51l1-brief",
  "type": "reflect",
  "title": "Checkpoint 1: the brief",
  "spec": {
    "prompt": "Style, mood (two words), starting point, tempo and key. Name your reference track and say in one sentence what you will borrow from it (decisions such as tempo, form, density — not melody or lyrics).",
    "minWords": 40
  }
}
```

```exercise
{
  "id": "w51l1-form",
  "type": "reflect",
  "title": "Checkpoint 2: the form map",
  "spec": {
    "prompt": "Write the reference's form (section names, rough lengths), then your song's form map with bar counts. Show the arithmetic: total bars ≥ BPM × 0.75.",
    "minWords": 25
  }
}
```

```exercise
{
  "id": "w51l1-core-play",
  "type": "play-chord",
  "title": "Warm up on the example core",
  "spec": {"chords": ["Em", "C", "G", "D", "C", "D", "Em", "G"], "inversion": "any", "sequence": true, "bpm": 80}
}
```

```exercise
{
  "id": "w51l1-core",
  "type": "daw-task",
  "title": "Checkpoint 3: the core (16 bars)",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "C",
      "tracks": [
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "lead", "seq": ""},
        {"instrument": "drums", "seq": ""},
        {"instrument": "pad", "seq": ""},
        {"instrument": "pluck", "seq": ""}
      ]
    },
    "task": "Set your own tempo and key. Write the 8-bar verse followed by the 8-bar chorus: chords (piano), bass notes, melody (lead). The chorus melody sits higher than the verse's, and its hook repeats at least twice. Sessions 2–4 continue in this project.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["piano", "bass", "lead"]},
      {"kind": "bars", "min": 16},
      {"kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": true, "track": 2},
      {"kind": "max-leap", "semitones": 9, "track": 2},
      {"kind": "in-key", "key": "project", "allowPassing": true, "track": 2}
    ],
    "minBars": 16,
    "projectRef": "final-song",
    "timerMin": 25
  }
}
```

## Close: progressions

Bass first — find each chord's lowest note on the keyboard — then colour: play major and minor on that root and pick
the one that matches. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{
  "skill": "progressions",
  "unlocks": 21,
  "intro": "A few minutes of ear practice at your own rung before you close the session."
}
```

## Between lessons

Listen to your 16-bar core once a day without editing. Note any bar you skip past in your head — that's where session 2
looks first.
