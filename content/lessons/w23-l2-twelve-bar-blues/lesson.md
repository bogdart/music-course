---
id: w23-l2-twelve-bar-blues
title: The Twelve-Bar Blues
week: 23
order: 2
phase: p3
duration_min: 50
goals:
  - Play and program the 12-bar blues form with dominant 7th chords and a shuffle feel
  - Use the blues scale and blue notes in a call-and-response melody
  - Hear blues scales and I-IV-V movement by ear
prerequisites: [w23-l1-pentatonic-scales]
tags: [blues, form, shuffle, blues-scale, ear]
songs:
  - { title: "Johnny B. Goode", composer: "Chuck Berry", public_domain: false }
  - { title: "Hound Dog", composer: "Jerry Leiber, Mike Stoller", public_domain: false }
---

# The Twelve-Bar Blues

Rock and roll, R&B, jazz and funk all grew out of one 12-bar form. Learn it once and you can play with anyone.

## The form

The [[twelve-bar blues]] uses three chords — I, IV and V — usually all as **dominant 7ths** (C7, F7, G7 in C). Normally a dom7 wants to resolve; in the blues it is simply the home colour.

```chords
{ "key": "C", "bars": ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "C7", "G7", "F7", "C7", "G7"], "roman": true, "play": true, "bpm": 100 }
```

Three 4-bar lines: **statement** (I), **repeat** over IV (back to I), **answer** (V–IV–I). The final G7 is the [[turnaround]] that sends you back to bar 1.

## Blues feel and blues notes

Blues is usually played with a [[shuffle]]: each beat is split long-short, like a triplet with the middle note left out. The melody uses the [[blues scale]] — minor pentatonic plus the b5: in C, **C Eb F Gb G Bb**. Singing Eb and Bb over *major-sounding* C7 creates the bittersweet rub of the [[blue note]].

Blues melodies are built on [[call and response]]: a 2-bar call, 2 bars of space (for another instrument to answer), the same call over IV, and a new answer over V–IV.

```example
{
  "title": "12-bar blues in C: boogie bass, shuffle, call and response",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 G4:8 Bb4:8 C5:8 Eb5:q C5:q | Bb4:q G4:q C5:h | r:w | r:w | r:8 G4:8 Bb4:8 C5:8 Eb5:q C5:q | Bb4:q G4:q F4:h | r:w | r:w | C5:q. Bb4:8 G4:q Bb4:q | F4:q Gb4:8 F4:8 Eb4:q C4:q | C4:h. r:q | r:w" },
    { "instrument": "epiano", "seq": "[E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [Eb3 F3 A3]:w | [Eb3 F3 A3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [D3 F3 B3]:w | [Eb3 F3 A3]:w | [E3 G3 Bb3]:w | [D3 F3 B3]:w" },
    { "instrument": "bass", "seq": "C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | F2:qt A2:8t C3:qt D3:8t Eb3:qt D3:8t C3:qt A2:8t | F2:qt A2:8t C3:qt D3:8t Eb3:qt D3:8t C3:qt A2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | G2:qt B2:8t D3:qt E3:8t F3:qt E3:8t D3:qt B2:8t | F2:qt A2:8t C3:qt D3:8t Eb3:qt D3:8t C3:qt A2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | G2:qt B2:8t D3:qt E3:8t F3:qt E3:8t D3:qt B2:8t" },
    { "instrument": "drums", "seq": "[kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The bass plays the classic boogie shape 1-3-5-6-b7-6-5-3, moved to each chord. The epiano plays just the 3rd and 7th of each chord (plus one colour note) — the notes that define a dominant 7th.

**By reference:** "Johnny B. Goode" (Chuck Berry, Bb, fast straight-eighth rock and roll) and "Hound Dog" (Elvis Presley's recording, C) are both 12-bar blues. Count the bars and listen for the move to IV in bar 5.

```exercise
{
  "id": "blues-form-quiz",
  "type": "quiz-input",
  "title": "Know the form",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "In a 12-bar blues in C, which chord is in bar 5?", "answer": ["F7", "F"], "kind": "text" },
    { "q": "In a 12-bar blues in C, which chord is in bar 9?", "answer": ["G7", "G"], "kind": "text" },
    { "q": "In a 12-bar blues in A, which chord is in bar 10? (IV)", "answer": ["D7", "D"], "kind": "text" },
    { "q": "Name the extra note that turns C minor pentatonic into the C blues scale.", "answer": ["Gb", "F#"], "kind": "note" },
    { "q": "How many bars in one chorus of the blues?", "answer": ["12"], "kind": "number" }
  ] }
}
```

```exercise
{
  "id": "play-blues-changes",
  "type": "play-chord",
  "title": "Play the 12-bar changes",
  "instructions": "Play each dominant 7th with your left or right hand. Use whatever inversion is closest.",
  "count": 12,
  "passScore": 0.8,
  "spec": { "chords": ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "C7", "G7", "F7", "C7", "G7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "tap-shuffle",
  "type": "rhythm-tap",
  "title": "Tap the shuffle",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:qt x:8t x:qt x:8t x:qt x:8t x:qt x:8t", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "ear-blues-scale",
  "type": "ear-scale",
  "title": "Blues, pentatonic or minor?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "scales": ["blues", "minor-pentatonic", "major-pentatonic", "natural-minor"], "play": "asc-desc" }
}
```

```exercise
{
  "id": "ear-blues-changes",
  "type": "ear-progression",
  "title": "I, IV or V?",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "V7"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "daw-blues-backing",
  "type": "daw-task",
  "title": "Program a 12-bar blues backing in G",
  "spec": {
    "template": { "bpm": 96, "key": "G", "tracks": [
      { "instrument": "drums", "seq": "[kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t" },
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "12-bar blues in G: G7 G7 G7 G7 | C7 C7 G7 G7 | D7 C7 G7 D7. Epiano: whole-note 7th chords (or just 3rd + 7th). Bass: the boogie shape 1-3-5-6-b7-6-5-3 in shuffle triplets on every chord.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "has-tracks", "instruments": ["drums", "epiano", "bass"] },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "V"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 8, "allowTransposed": true, "track": 2 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 2 }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "daw-call-response",
  "type": "daw-task",
  "title": "Call and response over the blues",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "epiano", "seq": "[E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [Eb3 F3 A3]:w | [Eb3 F3 A3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [D3 F3 B3]:w | [Eb3 F3 A3]:w | [E3 G3 Bb3]:w | [D3 F3 B3]:w" },
      { "instrument": "bass", "seq": "C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | F2:qt A2:8t C3:qt D3:8t Eb3:qt D3:8t C3:qt A2:8t | F2:qt A2:8t C3:qt D3:8t Eb3:qt D3:8t C3:qt A2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | G2:qt B2:8t D3:qt E3:8t F3:qt E3:8t D3:qt B2:8t | F2:qt A2:8t C3:qt D3:8t Eb3:qt D3:8t C3:qt A2:8t | C2:qt E2:8t G2:qt A2:8t Bb2:qt A2:8t G2:qt E2:8t | G2:qt B2:8t D3:qt E3:8t F3:qt E3:8t D3:qt B2:8t" },
      { "instrument": "drums", "seq": "[kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Write your own 2-bar call with the C blues scale (C Eb F Gb G Bb). Play it in bars 1-2 and again in bars 5-6; leave bars 3-4 and 7-8 mostly empty. Bars 9-11: a different answer phrase that ends on C.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "C", "scale": "blues", "track": 3 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "note-count", "min": 12, "max": 48, "track": 3 }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```
