---
id: w31-l3-improvised-chorus-daw
title: Record an Improvised Chorus
week: 31
order: 3
phase: p4
duration_min: 50
goals:
  - Improvise over the F jazz blues using guide tones, approaches and a motif
  - Phrase in call-and-response with deliberate space
  - Record two choruses and keep the better one
prerequisites: [w31-l2-approach-notes-and-enclosures, w29-l2-jazz-blues]
tags: [improvisation, jazz-blues, daw, recording]
songs:
  - { title: "Now's the Time", composer: "Charlie Parker", public_domain: false }
---

# Record an Improvised Chorus

Improvising is composing in real time — and like composing, it gets easier with a plan. Today you record a solo over the F jazz blues from week 29. One pass through the 12 bars is one chorus — in jazz that word means a pass through the whole form, not the pop chorus section (see [[jazz chorus]]).

## A three-layer plan

Build your solo in layers, each one a full pass of the form:

1. **Guide tones only.** Whole notes or half notes: A (3rd of F7), Ab (7th of Bb7), A… Follow them through bar by bar. Boring? Good — this is the skeleton.
2. **Add approaches.** Keep the same targets but approach each from a half step below or with an enclosure.
3. **Add a motif.** Pick a 2–4 note rhythmic idea and repeat it, moving its notes to fit each chord. Repetition makes improvisation sound composed.

## Call and response

Blues is conversation. Play a short phrase (1–2 bars), then **rest** for as long as you played. Space is not failure; it's the other half of the phrase. Listen by reference to Charlie Parker's "Now's the Time" — even at bebop speed, the phrases breathe.

```example
{
  "title": "A sample chorus: motif, space and approach notes (original)",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 G#4:8 A4:8 C5:8 A4:q r:q | r:w | r:8 G4:8 Ab4:8 C5:8 Ab4:q r:q | r:w | r:8 C#5:8 D5:8 F5:8 D5:q r:q | r:8 D5:8 F5:8 Ab5:8 F5:q r:q | C5:8 A4:8 F4:8 A4:8 C5:q r:q | C5:8 A4:8 F#4:8 A4:8 C5:q r:q | Bb4:8 A4:8 G4:8 F4:8 E4:8 D4:8 F4:8 D#4:8 | E4:h r:h | A4:8 C5:8 Eb5:8 C5:8 A4:q F#4:q | G4:q Bb4:q E4:h |" },
    { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |" },
    { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" }
  ],
  "show": ["staff"]
}
```

The motif (8th rest, approach, target, leap, fall back) appears in bars 1, 3, 5 and 6, bent to fit each chord. Bars 9–10 run down G dorian and enclose the E of C7.

## Drills

```exercise
{
  "id": "e1-guide-tone-chorus",
  "type": "play-melody",
  "title": "Layer 1: guide-tone chorus",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "F", "seq": "A4:w | Ab4:w | A4:w | Bb4:h A4:h | Ab4:w | Ab4:w | A4:w | F#4:w | F4:w | E4:w | A4:h F#4:h | F4:h E4:h |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" } }
}
```

```exercise
{
  "id": "e2-motif-rhythm",
  "type": "rhythm-tap",
  "title": "Tap the motif, then the space",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "r:8 x:8 x:8 x:8 x:q r:q | r:w |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e3-ear-blues-melody",
  "type": "ear-melody",
  "title": "Echo short blues phrases",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 3, 4, 5, 6], "length": 4, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "e4-ear-scales",
  "type": "ear-scale",
  "title": "Solo colours",
  "count": 8, "passScore": 0.75,
  "spec": { "scales": ["blues", "mixolydian", "dorian", "major-pentatonic", "minor-pentatonic"], "play": "melody" }
}
```

```exercise
{
  "id": "e5-daw-record-solo",
  "type": "daw-task",
  "title": "Record your chorus",
  "instructions": "Arm the lead track, count-in 1 bar, and record two choruses (24 bars) without stopping. Quantize lightly (1/8, 50%). Keep the better chorus, or splice the best bars. Aim for: guide tones at chord changes, at least one repeated motif, and at least two bars of rest.",
  "spec": {
    "template": { "bpm": 100, "key": "F", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "" },
      { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h | [F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |" },
      { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h | F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" },
      { "instrument": "drums", "seq": "" } ] },
    "task": "Record a 12- or 24-bar improvised solo over the F jazz blues.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 24 },
      { "kind": "note-count", "min": 30, "track": 0 },
      { "kind": "range", "low": "C4", "high": "C6", "track": 0 },
      { "kind": "uses-rhythm", "values": ["8", "q", "h"], "minDistinct": 2, "track": 0 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 0 },
      { "kind": "custom", "id": "space", "note": "Self-check: at least two bars contain mostly rest (call and response)." }
    ],
    "minBars": 12, "maxBars": 24
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Solo review",
  "spec": { "prompt": "Listen back once without judging, then once as a critic. Name one bar you love and why, and one habit to change next time (e.g. starting every phrase on beat 1, never resting).", "minWords": 30 }
}
```
