---
id: w09-l3-greensleeves-and-minor-daw
title: Greensleeves and Your First Minor Song
week: 9
order: 3
phase: p2
duration_min: 50
goals:
  - Play the first half of "Greensleeves" and name its chords in A minor
  - Hear and play the minor loop i – VI – III – VII
  - Write an 8-bar minor piece with chords, bass and melody in the DAW
prerequisites: [w09-l2-harmonic-and-melodic-minor]
tags: [minor, song, progression, daw]
songs:
  - { title: "Greensleeves", composer: "Traditional (English)", public_domain: true }
  - { title: "Hello", composer: "Adele (2015)", public_domain: false }
---

# Greensleeves and Your First Minor Song

*Greensleeves* is over 400 years old and still one of the best lessons in minor-key writing. It's in A minor, in 3/4, and it uses **both** kinds of fifth chord you met last lesson: the soft minor v (Em) in the middle of phrases, and the strong major V (E) at the cadences. Listen for the G# in the melody each time the E major chord arrives — and for the F# near the very end: melodic minor, climbing smoothly back home.

```example
{
  "title": "Greensleeves (traditional) — melody and chords",
  "bpm": 100, "timeSig": "3/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "r:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:h A4:q | A4:q. G#4:8 A4:q | B4:h G#4:q | E4:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:q. B4:8 A4:q | G#4:q. F#4:8 G#4:q | A4:h. |" },
    { "instrument": "pad", "seq": "r:h. | [A2 C3 E3]:h. | [G2 C3 E3]:h. | [G2 B2 D3]:h. | [G2 B2 E3]:h. | [A2 C3 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. | [A2 C3 E3]:h. | [G2 C3 E3]:h. | [G2 B2 D3]:h. | [G2 B2 E3]:h. | [A2 C3 E3]:h. | [G#2 B2 E3]:h. | [A2 C3 E3]:h. |" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```chords
{ "key": "Am", "bars": ["Am", "C", "G", "Em", "Am", "E", "E", "E", "Am", "C", "G", "Em", "Am", "E", "Am"], "roman": true, "play": true, "bpm": 100 }
```

```exercise
{
  "id": "e1", "type": "roman-analysis", "title": "Name Greensleeves' chords",
  "instructions": "Key: A minor. Use lower-case for minor chords. Watch the difference between Em and E.",
  "count": 6, "passScore": 0.8,
  "spec": { "key": "Am", "chords": ["Am", "C", "G", "Em", "Am", "E"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Greensleeves, first half",
  "instructions": "Right hand, with the chords as backing. Shift up an octave if your keyboard ends at C5. The dotted rhythm (long–short–long) is the song's lilt.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "3/4", "key": "Am", "seq": "r:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:h A4:q | A4:q. G#4:8 A4:q | B4:h G#4:q | E4:h. |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "r:h. | [A2 C3 E3]:h. | [G2 C3 E3]:h. | [G2 B2 D3]:h. | [G2 B2 E3]:h. | [A2 C3 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. |" } }
}
```

## The minor loop: i – VI – III – VII

Modern songs in minor love one loop: **Am – F – C – G**, or **i – VI – III – VII**. It uses only natural-minor chords, so it feels open and "epic" rather than classical.

Here's a secret: those are the same four chords as C major's **vi – IV – I – V**. Relative keys share chords too — the difference is which chord feels like home. Adele's *Hello* (2015, F minor, about 79 BPM) cycles a close cousin, **Fm – Ab – Eb – Db** (i – III – VII – VI), under its verses. Listen for how the loop never lands on a major V: the sadness never fully resolves.

```example
{
  "title": "i – VI – III – VII in A minor, with bass roots",
  "bpm": 84, "timeSig": "4/4", "key": "Am", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "bass", "seq": "A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Play the loop",
  "instructions": "Am – F – C – G. Notice how little your hand moves when you keep common notes.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "Minor-key progressions",
  "instructions": "New from here on: the key changes with every question. The cadence at the start sets the new home, and the answers (i, VI, III, VII) mean the same in every key. Always starts on i. Follow the bass: does it drop to VI, or go up to III?",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "mode": "minor", "length": 4, "chords": ["i", "VI", "III", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e5", "type": "ear-scale", "title": "Review: major or minor?",
  "count": 8, "passScore": 0.8,
  "spec": { "scales": ["major", "natural-minor", "harmonic-minor"], "play": "melody" }
}
```

## Make it: an 8-bar minor piece

Use the loop twice. Put block chords on the piano, the root of each chord on the bass, and a melody on the lead. Make melody notes on beat 1 of each bar chord tones; end on A.

```exercise
{
  "id": "e6", "type": "daw-task", "title": "8 bars in A minor",
  "spec": {
    "template": { "bpm": 84, "key": "Am", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Chords are ready (i – VI – III – VII twice). 1) On the bass track, play the root of each chord (A, F, C, G) in the low octave, at least on beats 1 and 3. 2) On the lead track, write an 8-bar melody using A natural minor. Put a chord tone on beat 1 of every bar, use at least two note values, and end on A.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false, "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "minRatio": 0.75, "track": 2 },
      { "kind": "uses-rhythm", "values": ["h", "q", "8"], "minDistinct": 2, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
