---
id: w50-l2-speed-song-from-a-beat
title: "Speed Song 2: From a Beat"
week: 50
order: 2
phase: p5
duration_min: 50
goals:
  - Build a finished 2-minute song from a 2-bar drum-and-bass groove within one session
  - Find chords that agree with an existing bass line, then write a topline over the groove
  - Create the form by muting and adding layers rather than writing new material
prerequisites: [w50-l1-speed-song-from-a-hook]
tags: [songwriting, speed, beat, groove, topline, daw]
---

# Speed Song 2: From a Beat

Last session started from melody. Today starts from the opposite end — rhythm. This is how a lot of modern pop, hip-hop and R&B gets written: a producer makes a beat, and the song is built on top of it. Your ear-training for groove (weeks 45 and 48) now works in reverse.

## The seed

A two-bar groove in E minor at 104 BPM: a syncopated kick, snare on 2 and 4, 16th hats, and a bass line that already implies the harmony.

```example
{
  "title": "Seed groove (E minor, 104 BPM)",
  "bpm": 104, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16" },
    { "instrument": "bass", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Let the bass choose the chords

Transcribe the bass (it takes a minute now): it sits on E, then climbs through G–A–B or falls D–B–G. Home is E minor. The simplest harmony is **Em for all two bars** — a vamp. For the chorus you need movement, so borrow the bass's own passing notes as roots: Em – G – A – Bm or Em – C – G – D. The beat stays; only the chords above it change.

## The timebox

| Minutes | Stage | Decision |
|--------|-------|---------|
| 0–5 | Groove | Loop the seed; transcribe the bass; confirm key |
| 5–12 | Harmony | Verse vamp + a 4-chord chorus loop |
| 12–25 | [[topline]] | Improvise over the loop (hum or play), record, keep the best 2 bars as the hook |
| 25–35 | Form by layers | Mute and unmute: intro (drums only), verse (drums+bass+keys), chorus (all + hook), breakdown (no drums) |
| 35–45 | Ear candy + ending | One fill per section change, a riser or crash, a clean final hit |
| 45–50 | Listen once | Three fixes noted, not made |

Form target: 52 bars ≈ 2 minutes at 104 BPM.

The big idea for today: **form by layers**. The seed never changes; the song moves because layers come and go. You heard this in *Get Lucky* and *Seven Nation Army* — now use it.

```exercise
{
  "id": "w50l2-warm",
  "type": "ear-rhythm",
  "title": "Warm-up: 16th grooves (5 min)",
  "count": 6,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "w50l2-kick",
  "type": "rhythm-tap",
  "title": "Lock in with the seed kick",
  "spec": { "bpm": 104, "timeSig": "4/4", "seq": "x:8. x:16 r:q x:8 x:8 r:q | x:8. x:16 r:q x:8 x:8 r:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "w50l2-roots",
  "type": "ear-bass",
  "title": "Roots for the chorus (relative major G)",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "random", "chords": ["vi", "I", "IV", "V", "iii"], "answer": "play" }
}
```

```exercise
{
  "id": "w50l2-bassplay",
  "type": "play-melody",
  "title": "Play the seed bass line",
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "Em", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "w50l2-song",
  "type": "daw-task",
  "title": "The 45-minute song",
  "spec": {
    "template": { "bpm": 104, "key": "Em", "tracks": [
      { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16" },
      { "instrument": "bass", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "pad", "seq": "" } ] },
    "task": "Follow the timebox. Copy the seed groove across the whole song and build the form by muting and adding layers. Write a verse vamp, a 4-chord chorus, and a topline hook that repeats in every chorus. End on E minor.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"] },
      { "kind": "bars", "min": 52, "max": 60 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "in-key", "key": "E", "scale": "natural-minor", "allowPassing": true, "track": 3 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 3, "allowTransposed": false, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "custom", "id": "w50-timebox", "note": "Self-check: finished within the 45-minute timebox." }
    ],
    "minBars": 52, "maxBars": 60
  }
}
```

```exercise
{
  "id": "w50l2-retro",
  "type": "reflect",
  "title": "Beat-first vs hook-first",
  "spec": { "prompt": "Compare today with the hook-first session: which stage was faster, which was harder? Did building the form by layers feel like cheating or like freedom? Note your three fixes.", "minWords": 40 }
}
```
