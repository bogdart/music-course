---
id: w05-l3-melody-over-a-drone-daw
title: Melody over a Drone (DAW)
week: 5
order: 3
phase: p1
duration_min: 50
goals:
  - Hear how each of the seven degrees sits against a held low C — blending or leaning
  - Shape a melody inside do–do' that lets leaning notes move on by step
  - Write and record an 8-bar melody over a C drone in the DAW
prerequisites: [w05-l2-melodies-from-do-to-do]
tags: [melody, drone, scale-degrees, daw, ear]
---

# Melody over a drone

You have all seven notes, you find a tune's first note from home, and you hear in chunks. Today you **make** a
melody from them — over a [[drone]]: a low C held underneath the whole time, like bagpipes. The drone keeps home
sounding, so every note of your tune shows its role against it. You met the drone in week 3, under do, mi and sol;
now it holds up the whole octave. The drone sits an octave below middle C (C3) — it is a *reference* sound you
only listen to; every note you judge or play stays between C4 and C5.

## Seven notes against home

**Try it:**

1. Left hand: hold C3 (a sustain pedal helps; or use the DAW's pad later). Right hand: play C4 and hold it two
   seconds. Then D4, E4, F4, G4, A4, B4, C5 — one at a time, each held.
2. For each note ask one question: does it **blend in** with the drone, or does it **want to move**?
3. Let the restless ones move one step: D → C, F → E, A → G, B → C5. Listen to the restlessness going away.

Many people hear C, E, G (and C5) blend, and D, F, A, B lean — the same *at rest / leaning* sort you use in the degree
drill. On a piano the effect is gentle, and at first every note may just sound "fine" — that's normal. The pad sound
in the DAW holds the drone steadier and usually makes it clearer.

```example
{
  "title": "Over a held C: every note of the octave, each leaning note resolving",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "C3:w | C3:w | C3:w | C3:w | C3:w | C3:w", "volume": 0.6 },
    { "instrument": "piano", "seq": "C4:h D4:q C4:q | E4:h F4:q E4:q | G4:w | A4:q G4:q r:h | B4:q C5:q r:h | C5:w" }
  ],
  "show": ["keyboard"]
}
```

### Check it

```exercise
{
  "id": "c4",
  "type": "listen",
  "title": "Which one blends?",
  "instructions": "Each example plays two notes over the held C. Replay, and play the two notes over your own held C3 if that helps.",
  "spec": {
    "examples": [
      { "title": "Example 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "C3:w | C3:w", "volume": 0.6 }, { "instrument": "piano", "seq": "F4:w | E4:w" } ] },
      { "title": "Example 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "C3:w | C3:w", "volume": 0.6 }, { "instrument": "piano", "seq": "G4:w | A4:w" } ] },
      { "title": "Example 3", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "C3:w | C3:w", "volume": 0.6 }, { "instrument": "piano", "seq": "B4:w | C5:w" } ] }
    ],
    "questions": [
      { "q": "Example 1: which note blends in with the drone?", "choices": ["the first", "the second"], "answer": 1, "explain": "F (fa) leans down; E (mi) blends." },
      { "q": "Example 2: which note blends in with the drone?", "choices": ["the first", "the second"], "answer": 0, "explain": "G (sol) blends; A (la) leans back down to it." },
      { "q": "Example 3: which note blends in with the drone?", "choices": ["the first", "the second"], "answer": 1, "explain": "B (ti) pulls up; C5 (do') is home." }
    ]
  }
}
```

**If you can't hear it yet:** make the difference bigger with your own hands. Hold C3 with your left hand (or loop
the example), and with your right play the first note of the pair and hold it for three seconds; then move it one
step (down, or up for ti) and hold that. Do the same with the second note. The note that sounds *relieved* when you
move it was leaning; the one that sounds *worse* when you move it was already at rest. Replay the example after. If
both still sound "fine", that's normal this week — the DAW task below trains exactly this.

## Shaping a melody

A melody that works over a drone usually has four parts. None of this is a rule; it's a starting shape.

1. **Start at rest** — on do, mi or sol.
2. **Travel** — mostly steps, some skips; the chunks from last lesson (*3 2 1*, *5 6 5*, *5 6 7 1'*) are ready-made
   pieces.
3. **A high point** — la or do' is a good peak. Reach it once, not every bar.
4. **Come home** — end on do (C4) or do' (C5), on a long note.

Leaning notes are the spice: put them anywhere, but let them **move on by step** — fa to mi, la to sol, ti to do'.
A leaning note held on the last beat of a phrase sounds like a question, which is fine in the middle and wrong at the
end.

```example
{
  "title": "A model: 8 bars over a C drone, do to do'",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "C3:w | C3:w | C3:w | C3:w | C3:w | C3:w | C3:w | C3:w", "volume": 0.6 },
    { "instrument": "piano", "seq": "C4:q E4:q G4:h | F4:q E4:q D4:h | E4:q G4:q A4:q G4:q | E4:q D4:q C4:h | G4:q A4:q B4:q C5:q | A4:q G4:q E4:h | F4:q G4:q A4:q B4:q | C5:w" }
  ],
  "show": ["staff", "pianoroll"]
}
```

**Try it:** play the model and point at its four parts: start (C, bar 1), travel (bars 1–4), high point (C5, bar 5),
home (C5, bar 8). Bar 2 ends on re — a question; bar 4 answers it on do. Bar 7 climbs fa sol la ti: which leaning
note is left hanging at the end of the bar, and where does it go?

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Play the model over the drone",
  "instructions": "Thumb on C4; shift your hand up at bar 5. Listen to each leaning note resolve against the drone.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "C4:q E4:q G4:h | F4:q E4:q D4:h | E4:q G4:q A4:q G4:q | E4:q D4:q C4:h | G4:q A4:q B4:q C5:q | A4:q G4:q E4:h | F4:q G4:q A4:q B4:q | C5:w", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "pad", "seq": "C3:w | C3:w | C3:w | C3:w | C3:w | C3:w | C3:w | C3:w" } }
}
```

## Your melody

Take it in two sittings if you like: write 4 bars today, finish tomorrow.

```exercise
{
  "id": "e8",
  "type": "daw-task",
  "title": "A do-to-do' melody over a drone",
  "spec": {
    "template": { "bpm": 80, "key": "C", "tracks": [ { "instrument": "pad", "seq": "C3:w | C3:w | C3:w | C3:w | C3:w | C3:w | C3:w | C3:w" }, { "instrument": "piano", "seq": "" } ] },
    "task": "Track 1 (pad) already holds the C drone for 8 bars — keep it. Track 2 (piano): write or record an 8-bar melody in C major between C4 and C5. Start on do, mi or sol; travel mostly by steps and skips; use la or ti at least once and let it move on by step; reach one high point; end on do or do' with a long note. Use quarter notes and at least one longer note. Solo the melody, then play both tracks and listen to how each note sits on the drone; change one note that leans where you wanted rest.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pad", "piano"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "range", "low": "C4", "high": "C5", "track": 1 },
      { "kind": "note-count", "min": 12, "max": 40, "track": 1 },
      { "kind": "starts-on", "degrees": [1, 3, 5], "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "uses-rhythm", "values": ["q", "h", "w"], "minDistinct": 2, "track": 1 },
      { "kind": "custom", "id": "la-ti-resolve", "note": "Every la or ti in my melody moves on by step (la → sol, ti → do')." }
    ],
    "minBars": 8, "maxBars": 8,
    "timerMin": 25
  }
}
```

## Ear practice

Review drills at your current rungs: degrees (up to all seven) and melody (up to five notes).

```ladder
{ "skill": "degrees", "unlocks": 7, "intro": "Degrees at your current rung (review: up to all seven in C)." }
```

```ladder
{ "skill": "melody", "unlocks": 8, "intro": "Melody at your current rung (review: up to five notes inside do–do')." }
```

```exercise
{
  "id": "e2",
  "type": "read-note",
  "title": "Reading warm-up: see it, play it",
  "count": 10,
  "passScore": 0.75,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

## Between lessons (and the end of week 5)

- **Finish the drone piece** if it didn't fit today; listen to it once with fresh ears the next day.
- Two or three **Practice** sessions of about 10 minutes. Degrees and melody are the ones to keep moving; the octave
  strand ticks along in the background.
- **Ready for week 6?** It brings chords — several notes sounding together — and a short run of four chords, the
  *cadence*, that becomes the new reference for home. The dashboard's *practise first* note is the only signal to
  slow down.
