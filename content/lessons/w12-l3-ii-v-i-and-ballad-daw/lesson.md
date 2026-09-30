---
id: w12-l3-ii-v-i-and-ballad-daw
title: ii – V – I and a Pop Ballad with Sevenths
week: 12
order: 3
phase: p2
duration_min: 50
goals:
  - Explain predominant chords (ii and IV) and play ii7 – V7 – Imaj7 smoothly in C, G and F
  - Hear minor 7 against dominant 7, then all three seventh qualities
  - Write an 8-bar ballad with seventh chords, bass and melody in the DAW
prerequisites: [w12-l2-dominant-function-v7-to-i]
tags: [harmony, sevenths, ii-v-i, daw]
---

# ii – V – I and a Pop Ballad with Sevenths

## Home, away, tension, home

The cadence the app plays before degree questions, I – IV – V – I, tells a little story: **home → away → tension → home**. Each step has a job:

- **I** is home.
- **IV** moves *away*, a lift with no tension in it: no leading tone, no tritone.
- **V** (or V7) creates the tension that pulls home.

Chords that do the "away" job, leading into V, are called [[predominant]] chords: they come *before the dominant*. In a major key the two main ones are **IV** and **ii**. Listen to the story told both ways:

```example
{
  "title": "I – IV – V7 – I, then I – ii – V7 – I (in C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [F3 G3 B3]:w | [E3 G3 C4]:w | r:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 G3 B3]:w | [E3 G3 C4]:w" },
    { "instrument": "bass", "seq": "C2:w | F2:w | G1:w | C2:w | r:w | C2:w | D2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

Most people hear ii as a slightly darker, softer "away" than IV (it's a minor chord). Both lead naturally into V.

## ii – V – I

Put the three steps together with seventh chords and you get the most famous progression in jazz, and a staple of soul and ballads: **ii7 – V7 – Imaj7**. In C: **Dm7 – G7 – Cmaj7**.

Why does ii lead so well into V? Dm7 (D F A C) shares D and F with G7 (G B D F). And its root falls a fifth to G, just as G falls a fifth to C: **D → G → C**, two falls of a fifth in a row, each a push toward home.

Voiced smoothly, the three chords feel like one gesture. Below, the bass plays the roots and the right hand plays four chord tones close together. Watch how little they move:

```example
{
  "title": "Dm7 – G7 – Cmaj7: right hand F A C D → F G B D → E G B C, bass D, G, C",
  "bpm": 70, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "epiano", "seq": "[F3 A3 C4 D4]:w | [F3 G3 B3 D4]:w | [E3 G3 B3 C4]:w | [E3 G3 B3 C4]:w" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | C2:w" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "ii – V – I, left-hand root + right-hand chord",
  "instructions": "Left hand plays the root, right hand the four upper notes. Right hand: F stays, A→G, C→B, D stays; then F→E, D→C.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F3 A3 C4 D4]:w | [G2 F3 G3 B3 D4]:w | [C3 E3 G3 B3 C4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "ii – V – I in three keys",
  "instructions": "C: Dm7 G7 Cmaj7. G: Am7 D7 Gmaj7. F: Gm7 C7 Fmaj7.",
  "count": 9, "passScore": 0.7,
  "spec": { "chords": ["Dm7", "G7", "Cmaj7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "roman-analysis", "title": "Spot the ii – V – I",
  "instructions": "Key: G major. Name each chord, then find the three that form ii – V – I.",
  "passScore": 0.7,
  "spec": { "key": "G", "chords": ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Cmaj7"], "prompt": "symbols" }
}
```

## Minor 7 or dominant 7?

ii7 is a minor 7 chord, V7 a dominant 7. Earlier this week both chords you compared were built on a major triad. Now compare **Dm7** (D F A C) with **D7** (D F♯ A C). They share the root, 5th and 7th; only the 3rd differs. D7 has the tritone (F♯ up to C) and leans forward. Dm7 has no tritone and sits still, soft and smooth.

```example
{
  "title": "Dm7, then D7, twice",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[D3 F3 A3 C4]:h [D3 F#3 A3 C4]:h | [D3 F3 A3 C4]:h [D3 F#3 A3 C4]:h" } ],
  "show": ["keyboard"]
}
```

## All three sevenths by ear

This lesson opens two chord rungs: minor 7 against dominant 7 (a pair first, as always), then all three sevenths mixed — major 7, dominant 7, minor 7. For the mix, a useful order of questions: first, is it minor underneath? (then m7). If major: is there the restless "question" (dom 7) or the shimmering rub (maj7)? The drill runs at your current chord rung, so you'll meet these once the earlier seventh pairs are solid.

```ladder
{ "skill": "chords", "unlocks": 6, "intro": "Opens \"Minor 7 or dominant 7\", then \"The three sevenths\"; the drill runs at your current rung." }
```

## The ballad loop

Swap the triads of a pop loop for sevenths and it instantly sounds like a slow soul ballad. Try **Cmaj7 – Am7 – Dm7 – G7** (Imaj7 – vi7 – ii7 – V7). It's a home → away → tension story, and G7 at the end pulls you back to the start.

```example
{
  "title": "Ballad loop: Cmaj7 – Am7 – Dm7 – G7",
  "bpm": 66, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "epiano", "seq": "[E3 G3 B3]:h [E3 G3 B3]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [F3 G3 B3]:h" },
    { "instrument": "bass", "seq": "C2:h. C2:q | A1:h. A1:q | D2:h. D2:q | G1:h. G1:q" }
  ],
  "show": ["pianoroll"]
}
```

(Here the e-piano leaves the root to the bass in the first three chords and plays only their 3rd, 5th and 7th. On G7 it keeps the root and drops the 5th instead — F, G, B are the 7th, root and 3rd — because the 3rd and 7th, the tritone B–F, are what make it a dominant 7. Pianists do this all the time.)

## Make it: an 8-bar ballad

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Pop ballad with sevenths",
  "spec": {
    "template": { "bpm": 66, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Write 8 bars on Cmaj7 – Am7 – Dm7 – G7, one bar each, twice. 1) E-piano: seventh chords, voiced smoothly between G2 and G4 (you may leave the root to the bass). 2) Bass: the root on beat 1 of each bar. 3) Lead: a slow melody, mostly half and quarter notes, with a chord tone on beat 1 of each bar. Try landing on a chord's 7th once (B over Cmaj7, or G over Am7): that's the ballad colour. End on C.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "G2", "high": "G4", "track": 0 },
      { "kind": "chord-has-seventh", "min": 4 },
      { "kind": "plays-progression", "progression": ["I", "vi", "ii", "V"], "barsPerChord": 1, "mode": "roots", "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "uses-rhythm", "values": ["h", "q"], "minDistinct": 2, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
