---
id: w50-l3-speed-song-from-a-beat
title: "Speed Song B, Session 1: From a Beat"
week: 50
order: 3
phase: p5
duration_min: 50
goals:
  - "Transcribe a seed groove's bass and let it choose the chords"
  - Write a verse vamp and a 4-chord chorus loop over an unchanging beat
  - Find a topline hook by improvising over the loop
prerequisites: [w50-l2-hook-song-finish]
tags: [songwriting, speed, beat, groove, topline, daw]
---

# Speed Song B, Session 1: From a Beat

Song A started from melody. Song B starts from the opposite end — rhythm. A lot of modern pop, hip-hop and R&B is written
this way: a producer makes a beat and the song is built on top. Your groove ear from weeks 45 and 48 now works in reverse.

## The seed — by ear

A two-bar groove: drums and a bass line that already implies the harmony. Transcribe the bass before looking.

1. **Tune out the drums.** Loop it and listen only for the low, pitched thump under the kick.
2. **The first note.** It repeats three times — easy to catch. Search low keys (octaves 2–3): play one, ask *higher or
   lower?*, move. Check: play your key with the loop; the right one merges into the bass, a wrong one rubs.
3. **The runs.** Each bar ends with three quick notes. Ask *up or down?* for each run, then search note by note from the
   one before. Check: play the run along with the loop.
4. **Stuck?** Get bar 1 right first, then bar 2 (it starts the same). Guess, check against the loop, move one key.

```example
{
  "title": "Seed groove",
  "bpm": 104,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16"},
    {"instrument": "bass", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w50l3-bass",
  "type": "ear-bass",
  "title": "Transcribe the seed bass",
  "instructions": "Twelve notes over two bars — including the repeated ones.",
  "srs": false,
  "spec": {
    "key": "Em",
    "chords": ["i", "III", "iv", "v", "VI", "VII"],
    "answer": "play",
    "example": {
      "title": "Seed groove",
      "bpm": 104,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16"},
        {"instrument": "bass", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w50l3-kick",
  "type": "rhythm-tap",
  "title": "Lock in with the seed kick",
  "spec": {
    "bpm": 104,
    "timeSig": "4/4",
    "seq": "x:8. x:16 r:q x:8 x:8 r:q | x:8. x:16 r:q x:8 x:8 r:q",
    "showNotation": true,
    "countIn": 1,
    "loops": 2
  }
}
```

## Let the bass choose the chords

The bass sits on E and climbs G–A–B or falls D–B–G: home is E minor, and every note it plays (E G A B D) belongs to E
natural minor. The simplest harmony is **Em for both bars** — a vamp, perfect for a verse. For the chorus you need
movement, so use the bass's own passing notes as roots and build each chord from E natural minor: G → G major, A → Am,
B → Bm, D → D major. That gives loops like **Em – G – Am – Bm** or **Em – D – G – Am** — every root is a note the bass
already plays. The beat stays; only the chords above it change.

Pick the chorus loop by ear: play each candidate loop on the electric piano over the beat, twice through. Keep the one
where the last chord makes you want to hear the first one again.

Then the [[topline]], in steps:

1. **Loop the chorus chords** and play along on the keyboard using only E, G, A, B, D (the notes the bass uses —
   they all sit in E minor). Record three 2-minute passes without stopping.
2. **Listen back** and mark any 2-bar moment you'd want to hear again. Rhythm counts more than notes: a repeated
   short rhythm is what makes a hook.
3. **Keep one**, copy it four times through the chorus. Check: on the fourth repeat it should still feel good; if it
   gets boring, change only its last note.
4. **Stuck?** Take the bass's own rhythm, play it on the lead two octaves up on E and G, and change one note per bar.

| Minutes | Stage |
|---|---|
| 0–10 | Transcribe the bass, tap the kick; confirm the key |
| 10–16 | Verse vamp + a 4-chord chorus loop |
| 16–35 | Topline: improvise, record, keep the best 2 bars, repeat them through the chorus |
| 35–42 | Play verse + chorus twice; note what session 2 needs |
| 42–50 | Groove drill at your rung |

The DAW timer covers minutes 10–42 (32 minutes).

```exercise
{
  "id": "w50l3-song",
  "type": "daw-task",
  "title": "Session 1: groove, harmony, topline (16 bars)",
  "spec": {
    "template": {
      "bpm": 104,
      "key": "Em",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16"},
        {"instrument": "bass", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8"},
        {"instrument": "epiano", "seq": ""},
        {"instrument": "lead", "seq": ""},
        {"instrument": "pad", "seq": ""}
      ]
    },
    "task": "Copy the seed groove across 16 bars. Bars 1–8: verse vamp on the electric piano. Bars 9–16: your 4-chord chorus loop with the topline hook on the lead track, repeated. Stop when the 32-minute timer runs out — session 2 continues this project.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"]},
      {"kind": "bars", "min": 16},
      {"kind": "in-key", "key": "E", "scale": "natural-minor", "allowPassing": true, "track": 3},
      {"kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 3},
      {"kind": "custom", "id": "w50-timebox-b1", "note": "Self-check: I stopped when the timebox ran out."}
    ],
    "minBars": 16,
    "projectRef": "w50-song-b",
    "timerMin": 32
  }
}
```

## Close: rhythm drill

Count the beat out loud and keep it going through rests; get one bar right before the next. The *How to do it* box
under the drill shows the exact method for your current rung.

```ladder
{"skill": "rhythm", "unlocks": 16, "intro": "Groove dictation at your own rung."}
```

## Between lessons

Loop the chorus once a day for a minute without editing. If the hook is stuck in your head, keep it; if not, note
which 2 bars of your recorded passes come back to you instead.
