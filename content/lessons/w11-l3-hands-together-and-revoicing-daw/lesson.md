---
id: w11-l3-hands-together-and-revoicing-daw
title: Smooth Voice Leading and Hands Together
week: 11
order: 3
phase: p2
duration_min: 50
goals:
  - Voice I – V – vi – IV smoothly using common tones and small steps
  - Play left-hand chords under a right-hand melody
  - Re-voice a jumpy chord part in the DAW and add a root bass line
prerequisites: [w11-l2-hearing-the-root]
tags: [voice-leading, inversions, keyboard, daw, ear]
songs:
  - { title: "Someone Like You", composer: "Adele (2011)", public_domain: false }
  - { title: "Canon in D", composer: "Johann Pachelbel", public_domain: true }
---

# Smooth Voice Leading and Hands Together

Why do inversions exist at all? Because they let chords **connect**. Playing every chord in root position makes your hand jump around, and the music sounds blocky. Good pianists, arrangers and choirs move from chord to chord with as little motion as possible. That craft is called [[voice leading]].

## Two rules of thumb

1. **Keep common tones.** If the next chord shares a note with this one, hold it.
2. **Move the others by step.** Go to the nearest note of the next chord.

Take I – V – vi – IV in C (C, G, Am, F). C major (C E G) and G major (G B D) share G. So keep G, move C down to B and E down to D. That gives G/B. Keep going and you get the voicings below — your hand barely moves.

```example
{
  "title": "Blocky (root position) versus smooth (common tones held)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w | r:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 A3]:w | [C3 F3 A3]:w" } ],
  "show": ["keyboard", "pianoroll"]
}
```

```keyboard
{ "range": ["C3", "C5"], "highlight": ["B2", "D3", "G3"], "labels": "names", "colors": { "G3": "root", "B2": "third", "D3": "fifth" } }
```

Notice that the smooth version puts some chords in inversion — and yet you still hear C, G, Am, F. Yesterday's skill in action: the root is not always at the bottom.

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Smooth I – V – vi – IV, left hand",
  "instructions": "Left hand, around C3. Thumb and pinky barely move. Say the chord names aloud.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 A3]:w | [C3 F3 A3]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "Find your own smooth path",
  "instructions": "Same four chords, any inversions — but move each finger as little as possible.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["C", "G", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

## Inversions in pop

Adele's *Someone Like You* (2011, A major, about 67 BPM) loops **A – E/G# – F#m – D** (I – V – vi – IV). Putting E major in 1st inversion makes the bass step down A → G# → F#: one smooth line instead of a jump. Listen for that falling bass under the piano; the roots are still A, E, F#, D.

```exercise
{
  "id": "e3", "type": "ear-bass", "title": "Bass of I – V – vi – IV",
  "instructions": "Play each bass note as you hear it.",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "random", "chords": ["I", "V", "vi", "IV"], "answer": "play" }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "Four-chord order",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "block" }
}
```

## Hands together

Left hand plays smooth chords, right hand plays a simple melody. Both hands strike together on every half note, which keeps coordination simple.

```exercise
{
  "id": "e5", "type": "play-melody", "title": "Chords + melody",
  "instructions": "Practise each hand alone first, then together at a slow tempo.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 G3 G4]:h [C3 E3 G3 E4]:h | [B2 D3 G3 D4]:h [B2 D3 G3 G4]:h | [C3 E3 A3 E4]:h [C3 E3 A3 A4]:h | [C3 F3 A3 A4]:h [C3 F3 A3 F4]:h | [C3 E3 G3 E4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e6", "type": "ear-chord-root", "title": "Root review",
  "count": 8, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min"], "answer": "play", "range": ["C3", "C5"] }
}
```

## Make it: re-voice the four chords

```exercise
{
  "id": "e7", "type": "daw-task", "title": "Re-voice I – V – vi – IV smoothly",
  "spec": {
    "template": { "bpm": 72, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "epiano", "seq": "[C3 E3 G3]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w | [C3 E3 G3]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The e-piano plays the progression the blocky way. 1) Rewrite it with smooth voicings: keep common tones, move other notes by step, stay between G2 and E4. 2) Record roots on the bass track (C, G, A, F) — even when your piano chord is inverted, the bass plays the root. 3) Optional: a simple melody on the lead track. Self-check: between any two chords, does at least one note stay put?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "G2", "high": "E4", "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 1.0, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "range", "low": "C2", "high": "C3", "track": 1 },
      { "kind": "custom", "id": "common-tones-held", "note": "Self-check: each chord change keeps at least one common tone and moves the other notes by step." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
