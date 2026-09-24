---
id: w50-l1-speed-song-from-a-hook
title: "Speed Song 1: From a Hook"
week: 50
order: 1
phase: p5
duration_min: 50
goals:
  - Take a 2-bar hook to a finished 2-minute song inside one timeboxed session
  - Harmonise a hook fast by putting chord tones under its downbeats
  - Build contrast between verse and chorus with register and density, not new ideas
prerequisites: [w49-l3-rock-reference-analysis]
tags: [songwriting, speed, hook, workflow, daw]
---

# Speed Song 1: From a Hook

You've spent nine weeks taking songs apart. Now reverse the arrow. Transcription taught you that finished songs are made from a small number of decisions: a key, a form, four chords, a hook, a groove, a few layers. Speed songwriting is making those decisions *quickly* and not revisiting them.

This week: three sessions, three different starting points, one finished 2-minute song each. The finished song matters more than the perfect song.

## The timebox

Work to a [[timebox]] — a fixed time per stage. Set a timer on your phone. When it rings, you move on, finished or not.

| Minutes | Stage | Decision |
|--------|-------|---------|
| 0–5 | Hook | Play the seed until you know it; set tempo and key |
| 5–15 | Chorus | Chords under the hook, 8 bars, bass roots |
| 15–25 | Verse | Same key, lower and sparser; 8 bars |
| 25–35 | Form + groove | Intro 4, V 8, C 8, V 8, C 8, bridge 4, C 8 = 48 bars; drums throughout |
| 35–45 | Layers + ending | Add a pad or counter-line to choruses; write a final cadence |
| 45–50 | Listen once | Note three fixes — and *don't make them today* |

At 96 BPM, 48 bars is exactly two minutes.

## The seed

```example
{
  "title": "Seed hook (A major, 96 BPM)",
  "bpm": 96, "timeSig": "4/4", "key": "A",
  "tracks": [ { "instrument": "lead", "seq": "C#5:8 C#5:8 B4:8 A4:8 r:8 E4:8 A4:q | B4:q. C#5:8 B4:q A4:q" } ],
  "show": ["staff", "keyboard"],
  "loop": true
}
```

## Harmonise it in two minutes

Look at the downbeat notes of the hook: bar 1 starts on C#, bar 2 on B. Now use the transcriber's trick in reverse: which chords in A major contain C#? A, F#m (and C#m). Which contain B? E, Bm (and G#°). Pick one per bar and you have a chorus: **A – E**, or **F#m – E**, or **A – Bm**. Try all three against the hook and keep the one that makes you smile. Don't look for a "best" option — any of them can make a song. Continue with two more bars (often IV and V) and repeat.

For the verse, keep the chords but *change the arrangement*: melody lower, fewer notes, no drums or half the drums. Contrast from density is faster than contrast from new material.

```exercise
{
  "id": "w50l1-warm",
  "type": "ear-melody",
  "title": "Warm-up: hook-shaped phrases in A (5 min)",
  "count": 6,
  "passScore": 0.7,
  "spec": { "key": "A", "degrees": [1, 2, 3, 5, 6], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w50l1-hook",
  "type": "play-melody",
  "title": "Learn the seed",
  "spec": { "bpm": 96, "timeSig": "4/4", "key": "A", "seq": "C#5:8 C#5:8 B4:8 A4:8 r:8 E4:8 A4:q | B4:q. C#5:8 B4:q A4:q", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "w50l1-fit",
  "type": "quiz",
  "title": "Which chords fit the hook?",
  "spec": { "questions": [
    { "q": "Bar 1 starts on C#. Which A-major chords contain C#?", "choices": ["A and F#m", "E and Bm", "D and Bm", "E and D"], "answer": 0 },
    { "q": "Bar 2 starts on B. Which chord contains B?", "choices": ["A", "E", "D", "F#m"], "answer": 1 },
    { "q": "Your verse needs contrast with the chorus. Fastest option?", "choices": ["Write new chords in a new key", "Same chords, lower melody, sparser arrangement", "Change tempo", "Add a key change"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "w50l1-prog",
  "type": "ear-progression",
  "title": "Hear chorus options in A",
  "count": 6,
  "passScore": 0.75,
  "spec": { "key": "A", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w50l1-song",
  "type": "daw-task",
  "title": "The 45-minute song",
  "spec": {
    "template": { "bpm": 96, "key": "A", "tracks": [
      { "instrument": "lead", "seq": "C#5:8 C#5:8 B4:8 A4:8 r:8 E4:8 A4:q | B4:q. C#5:8 B4:q A4:q" },
      { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }, { "instrument": "pad", "seq": "" } ] },
    "task": "Follow the timebox table exactly (use a timer). The seed hook is on the lead track — build the chorus around it, then verse, form (48 bars), groove, layers and an ending on A. Stop at 45 minutes even if unfinished, and bounce what you have.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass", "drums"] },
      { "kind": "bars", "min": 48, "max": 56 },
      { "kind": "in-key", "key": "A", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 3, "allowTransposed": false, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "track": 3 },
      { "kind": "custom", "id": "w50-timebox", "note": "Self-check: finished within the 45-minute timebox." }
    ],
    "minBars": 48, "maxBars": 56
  }
}
```

```exercise
{
  "id": "w50l1-retro",
  "type": "reflect",
  "title": "Three fixes, not today",
  "spec": { "prompt": "Which stage overran its timebox, and why? Write the three fixes you noted in the last five minutes. Which decision did you agonise over that, in hindsight, didn't matter?", "minWords": 40 }
}
```
