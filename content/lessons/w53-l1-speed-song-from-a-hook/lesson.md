---
id: w53-l1-speed-song-from-a-hook
title: "Speed Song A, Session 1: From a Hook"
week: 53
order: 1
phase: p5
duration_min: 50
goals:
  - Transcribe a 2-bar seed hook by ear, then harmonise it fast with chord tones under its downbeats
  - Write an 8-bar chorus and an 8-bar verse inside a timebox
  - Make the verse contrast with the chorus by register and density, not new material
prerequisites: [w52-l3-rock-reference-analysis]
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

Your seed hook arrives the way ideas arrive: as sound. Transcribe it first (timebox: 10 minutes, including learning it).

1. **Home.** Loop it and listen to the last note of each bar. Search for that note on the keyboard (higher/lower from
   the middle of the keyboard). Check: hold the key down while the loop plays — home sounds settled, not rubbing.
2. **First note.** Search for the very first note the same way. Check: play it right after the loop starts; it should
   merge with the recording.
3. **The path.** Chunk it: bar 1, then bar 2. For each move ask *up or down, step or jump?* and let your fingers
   follow. Check: play the chunk along with the loop; a wrong note sticks out — move it one key and try again.
4. **Stuck?** Get the first and last note of each chunk right and guess the middle. A near-miss here costs nothing:
   you reveal it next anyway.

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

Use the transcriber's trick in reverse: find chords that contain the note on each bar's downbeat.

1. **List candidates.** For each bar, take its first note and list the chords of the key that contain it. Example: a
   bar starting on E in A major could take A (A C# E), C#m (C# E G#) or E (E G# B). The quiz below does the first two
   bars with you.
2. **Try each one.** Loop the hook, hold one candidate chord under that bar, then the next. Keep the one that makes the
   hook sound supported; if two sound fine, take the first — any of them can make a song.
3. **Fill 8 bars.** Repeat the 2-bar hook with its chords, then add two more bars (IV and V are the safe first try)
   and repeat all four. Check: loop the chorus four times — if the hook still pleases you on the fourth, keep it.
4. **Bass.** Play each chord's root, low, on the bass track. Check: solo bass and piano; a wrong root sounds like the
   chord has lost its floor.
5. **Verse.** Keep the chords and *change the arrangement*: melody lower, fewer notes, no drums or half the drums.
   Check: jump from verse to chorus — the chorus should feel like it opens up. If it doesn't, thin the verse further.

**Stuck on a chord?** Use I, IV, V or vi only. **Stuck on the verse melody?** Play the hook's rhythm on one or two
low notes (home and 5). Contrast from density is faster than contrast from new material.

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

## Close: melody drill

Same method as the seed: find the first note by searching, then follow up/down and step/jump in chunks, checking each
chunk against the replay. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "melody", "unlocks": 24, "intro": "Two minutes of melody at your own rung before you close the session."}
```

## Between lessons

Listen once to the 16 bars without editing — ideally on another device (phone, speaker) — and add one line to your notes.
