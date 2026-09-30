---
id: w40-l1-mood-mode-tempo-orchestration
title: Mood — Mode, Tempo, Orchestration
week: 40
order: 1
phase: p4
duration_min: 45
goals:
  - Order the six modes you know from brightest to darkest and pick one for a mood
  - Change mood with tempo, register and instrument choice
  - Start hearing modes inside tunes, not only as scale runs
prerequisites: [w39-l3-three-electronic-sketches-daw, w26-l2-lydian-and-phrygian]
tags: [film, game, composition, modes, orchestration]
songs:
  - { title: "The Simpsons Theme", composer: "Danny Elfman", public_domain: false }
  - { title: "Jaws (main title)", composer: "John Williams", public_domain: false }
---

# Mood — Mode, Tempo, Orchestration

In songs, music serves a melody and a lyric. In film and games it serves a **picture**, and the picture tells you what the audience should feel. You steer that feeling with four levers: mode, tempo, register and orchestration. None of them is new to you; today you learn to pull them on purpose.

## Lever 1: mode

You know six modes from week 26. Put them in order and they form a [[brightness ladder]] — each step down darkens **one** note:

**Lydian** (♯4) → **major** → **Mixolydian** (♭7) → **Dorian** (♭3 ♭7) → **natural minor** (♭3 ♭6 ♭7) → **Phrygian** (♭2 ♭3 ♭6 ♭7).

There is a seventh mode below Phrygian: **Locrian** (♭2 ♭3 ♭5 ♭6 ♭7), the white keys from B to B. Its ♭5 makes its home chord *diminished*, so it never quite sounds like home, and scores rarely use it for long. Hear it once, with the home note B held underneath:

```example
{
  "title": "B Locrian over a held B",
  "bpm": 80, "timeSig": "4/4",
  "tracks": [
    { "instrument": "strings", "seq": "B3:q C4:q D4:q E4:q | F4:q G4:q A4:q B4:q | A4:q G4:q F4:q E4:q | D4:q C4:q B3:h |" },
    { "instrument": "pad", "seq": "B2:w | B2:w | B2:w | B2:w |" }
  ],
  "show": ["keyboard"]
}
```

Lydian's raised 4th floats — the "Simpsons" theme (by reference) opens on it, and film scores use Lydian for wonder and flight. Phrygian's ♭2, a half step above home, is the sound of threat; the "Jaws" main title (by reference) is built on a two-note half-step pulse.

Hear the same melodic shape in three modes. Listen for the colour note each time: F♯ in C Lydian, B (the raised 6th) in D Dorian, F (the ♭2) in E Phrygian. If it slips past, play the colour note yourself and then the plain version (F♯ then F in C; B then B♭ over D; F then F♯ over E) — the difference is one key, and you can hear it best that way.

```example
{
  "title": "Same shape: C Lydian (wonder) → D Dorian (adventure) → E Phrygian (menace)",
  "bpm": 80, "timeSig": "4/4",
  "tracks": [
    { "instrument": "strings", "seq": "C4:q E4:q F#4:q G4:q | B4:h. A4:q | G4:q F#4:q E4:q D4:q | C4:w | D4:q F4:q G4:q A4:q | C5:h. B4:q | A4:q G4:q F4:q E4:q | D4:w | E4:q G4:q A4:q B4:q | D5:h. C5:q | B4:q A4:q G4:q F4:q | E4:w |" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w | [D3 A3]:w | [C3 G3]:w | [D3 A3]:w | [D3 A3]:w | [G2 D3]:w | [D3 A3]:w | [E2 B2]:w | [E2 B2]:w | [F2 C3]:w | [E2 B2]:w |" }
  ],
  "show": ["staff"]
}
```

## Ear: modes as tunes

This lesson opens the scales ladder's last rung: the six modes as **short tunes** instead of scale runs. Be honest with yourself here — in a tune the colour note may pass by in a moment, so this is clearly harder than a scale run. The drill starts wherever you are on the ladder; the new rung only arrives once the earlier ones are mastered.

Method: first find where the tune rests (home) and play that note on the keyboard; then decide bright or dark; then listen for the one special note (♭7, ♯4, raised 6 or ♭2) — play it and its plain neighbour over home to compare. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "scales", "unlocks": 13, "intro": "Opens the rung with the six modes as tunes; the drill runs at your current scales rung." }
```

## Levers 2–4: tempo, register, orchestration

- **Tempo:** slow = weight, grief, awe; fast = action, panic, comedy.
- **Register:** low = danger, size; high = fragility, air. A melody moved an octave up can turn from brooding to hopeful.
- **Orchestration:** strings = emotion; pluck = playful or ticking; pad = atmosphere; lead = heroic statement; low piano = dread.

The same five notes, twice:

```example
{
  "title": "One motif, mood 1: slow, low piano",
  "bpm": 60, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "A2:q C3:q B2:q E2:q | A2:w |" } ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "…mood 2: the same motif, fast and high on pluck",
  "bpm": 150, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "pluck", "seq": "A5:8 C6:8 B5:8 E5:8 A5:8 C6:8 B5:8 E5:8 | A5:w |" } ],
  "show": ["keyboard"]
}
```

Real cues pull several levers at once, and the strongest effects come from **contrast**: a scene turning from fear to relief might move from Phrygian to Lydian, from low piano to high strings, from a restless pulse to long notes — all on the same beat. When unsure, change fewer things more decisively.

## Hands

```exercise
{
  "id": "e1-play-lydian",
  "type": "play-scale",
  "title": "C Lydian — find the ♯4 (F♯)",
  "passScore": 0.7,
  "spec": { "root": "C", "scale": "lydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

```exercise
{
  "id": "e2-play-phrygian",
  "type": "play-scale",
  "title": "E Phrygian — all white keys from E; the ♭2 is F",
  "passScore": 0.7,
  "spec": { "root": "E", "scale": "phrygian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

```exercise
{
  "id": "e3-mood-quiz",
  "type": "quiz",
  "title": "Scoring choices",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "A child sees a dragon for the first time — awe, not fear. Best mode?", "choices": ["Lydian", "Phrygian", "Locrian", "natural minor"], "answer": 0 },
      { "q": "A slow-creeping threat under water. Best combination?", "choices": ["high pluck, fast, Lydian", "low register, slow, a half-step ostinato", "bright lead, major, 140 BPM"], "answer": 1 },
      { "q": "Which mode is one note darker than major?", "choices": ["Dorian", "Mixolydian", "Lydian", "Phrygian"], "answer": 1, "explain": "Mixolydian lowers only the 7th." },
      { "q": "Which note makes Phrygian darker than natural minor?", "choices": ["♭2", "♭3", "♯4", "♭7"], "answer": 0 }
    ]
  }
}
```

## Make it

1. On strings, write a 4-bar phrase in C Lydian. Put F♯ on a long note or a strong beat so it can't slip by.
2. Copy it to bars 5–8 on the piano track, then move every note to E Phrygian (white keys from E): shift the phrase so it starts on E, an octave lower.
3. Make the rhythm feel slower: turn pairs of short notes into one long note, and lean on F, the note just above home.
4. **Judge by ear:** play bars 1–4, then 5–8. Is the second half clearly darker? If not, go lower, slower, or repeat the E–F half step.
5. **Stuck?** Start from the "same shape" example: copy its Lydian bar and its Phrygian bar and extend each to four bars.

```exercise
{
  "id": "e4-daw-mood-flip",
  "type": "daw-task",
  "title": "Flip the mood",
  "instructions": "Bars 1–4: a phrase in C Lydian on strings (wonder) — use F♯. Bars 5–8: rewrite the same idea for menace on the piano track: E Phrygian (all white keys from E, lean on F), lower register, slower-feeling rhythm.",
  "spec": {
    "template": {
      "bpm": 80, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "strings", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "pad", "seq": "" }
      ]
    },
    "task": "Same idea, two moods: 4 bars Lydian, 4 bars Phrygian.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["strings", "piano"] },
      { "kind": "in-key", "key": "C", "scale": "lydian", "allowPassing": false, "track": 0 },
      { "kind": "in-key", "key": "E", "scale": "phrygian", "allowPassing": false, "track": 1 },
      { "kind": "note-count", "min": 8, "track": 1 },
      { "kind": "custom", "id": "mood-flip", "note": "Self-check: bars 5–8 are lower, darker and on a different instrument, but you can still hear the same idea." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Play C Lydian and E Phrygian once a day, stopping on the colour note (F♯, F) and holding it over home.
