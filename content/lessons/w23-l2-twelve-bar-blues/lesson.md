---
id: w23-l2-twelve-bar-blues
title: The Twelve-Bar Blues
week: 23
order: 2
phase: p3
duration_min: 50
goals:
  - Play the 12-bar blues form with dominant 7th chords on I, IV and V
  - Tap and program the shuffle feel with triplets
  - Meet the blue notes (b3, b5, b7) and the blues scale, and start hearing the b3 as a degree
prerequisites: [w23-l1-pentatonic-scales]
tags: [blues, form, shuffle, blues-scale, ear]
songs:
  - { title: "Hound Dog", composer: "Jerry Leiber, Mike Stoller (Elvis Presley recording, 1956)", public_domain: false }
---

# The Twelve-Bar Blues

Rock and roll, R&B, jazz and funk all grew out of one 12-bar form. Three new things today: the form, the shuffle feel, and the blue notes.

## 1. The form

The [[twelve-bar blues]] uses three chords — I, IV and V — usually all as **dominant 7ths** (C7, F7, G7 in C). In week 12 a dominant 7th was a tension chord that wanted to resolve. In the blues, even the home chord is a dom7: it's simply the colour of the style, and nobody expects it to resolve.

```chords
{ "key": "C", "bars": ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "C7", "G7", "F7", "C7", "G7"], "roman": true, "play": true, "bpm": 100 }
```

Three 4-bar lines: home (I), a move to IV and back, then V – IV – I. The last bar's G7 is the [[turnaround]]: it sends you back to bar 1 for the next round ("chorus").

```exercise
{
  "id": "play-blues-changes",
  "type": "play-chord",
  "title": "Play the 12-bar changes",
  "instructions": "Play each dominant 7th with whatever inversion is closest to the last one.",
  "count": 12,
  "spec": { "chords": ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "C7", "G7", "F7", "C7", "G7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

## 2. The shuffle

A [[shuffle]] is the swing feel of week 14 applied to a whole band: every beat is split long-short, a quarter-note triplet plus an eighth-note triplet. The drummer usually plays it on the ride cymbal.

```exercise
{
  "id": "tap-shuffle",
  "type": "rhythm-tap",
  "title": "Tap the shuffle",
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:qt x:8t x:qt x:8t x:qt x:8t x:qt x:8t", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

## 3. Blue notes

Over C7 a blues melody often uses E♭ — although the chord itself has E. That minor 3rd over a major chord is a [[blue note]]. Singers often slide it up into E. Listen:

```example
{
  "title": "Over C7: the 3rd (E), then the blue 3rd (Eb) sliding to E",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[C3 E3 G3 Bb3]:w | [C3 E3 G3 Bb3]:w | [C3 E3 G3 Bb3]:w" },
    { "instrument": "lead", "seq": "E4:w | Eb4:h. E4:q | Eb4:w" }
  ],
  "show": ["keyboard"]
}
```

Be honest about what you hear: at first E♭ over C7 will probably just sound "wrong" or "minor". That is accurate — it *is* a minor 3rd against a major chord, used on purpose. This lesson opens the degree rung that trains you to name it as ♭3 after a major cadence; the drill runs at your current degree rung. The other blue notes are the ♭7 (you know it from Mixolydian) and the ♭5.

The [[blues scale]] is minor pentatonic plus that ♭5: in C, **C E♭ F G♭ G B♭**.

```ladder
{ "skill": "degrees", "unlocks": 20, "intro": "Opens: major key, but the blue b3 may appear next to b7. The drill runs at your current degree rung." }
```

```ladder
{ "skill": "scales", "unlocks": 10, "intro": "Opens: minor pentatonic, or the blues scale with its extra b5? The drill runs at your current scales rung." }
```

## All three together

Chords, shuffle and blue notes in one chorus. (The example uses the app's swing setting; in the DAW you write the shuffle with triplets.) The melody plays a 2-bar phrase, then leaves 2 bars of space — more about that next lesson.

```example
{
  "title": "12-bar blues in C with a shuffle and blue notes",
  "bpm": 100, "timeSig": "4/4", "key": "C", "swing": 1,
  "tracks": [
    { "instrument": "lead", "seq": "r:8 G4:8 Bb4:8 C5:8 Eb5:q C5:q | Bb4:q G4:q C5:h | r:w | r:w | r:8 G4:8 Bb4:8 C5:8 Eb5:q C5:q | Bb4:q G4:q F4:h | r:w | r:w | C5:q. Bb4:8 G4:q Bb4:q | F4:q Gb4:8 F4:8 Eb4:q C4:q | C4:h. r:q | r:w" },
    { "instrument": "epiano", "seq": "[E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [Eb3 F3 A3]:w | [Eb3 F3 A3]:w | [E3 G3 Bb3]:w | [E3 G3 Bb3]:w | [D3 F3 B3]:w | [Eb3 F3 A3]:w | [E3 G3 Bb3]:w | [D3 F3 B3]:w" },
    { "instrument": "bass", "seq": "C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | F1:8 F1:8 C2:8 C2:8 F2:8 F2:8 C2:8 C2:8 | F1:8 F1:8 C2:8 C2:8 F2:8 F2:8 C2:8 C2:8 | C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | G1:8 G1:8 D2:8 D2:8 G2:8 G2:8 D2:8 D2:8 | F1:8 F1:8 C2:8 C2:8 F2:8 F2:8 C2:8 C2:8 | C2:8 C2:8 G2:8 G2:8 C3:8 C3:8 G2:8 G2:8 | G1:8 G1:8 D2:8 D2:8 G2:8 G2:8 D2:8 D2:8" },
    { "instrument": "drums", "seq": "[kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "blues-form-v2",
  "type": "quiz-input",
  "title": "Know the form",
  "spec": { "questions": [
    { "q": "In a 12-bar blues in C, which chord is in bar 5?", "answer": ["F7", "F"], "kind": "text" },
    { "q": "In a 12-bar blues in C, which chord is in bar 9?", "answer": ["G7", "G"], "kind": "text" },
    { "q": "In a 12-bar blues in G, which chord is in bar 10? (IV)", "answer": ["C7", "C"], "kind": "text" },
    { "q": "Which note turns C minor pentatonic into the C blues scale?", "answer": ["Gb", "F#"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "hound-dog-verdict",
  "type": "quiz",
  "title": "Hound Dog (Elvis Presley) - your verdict first",
  "instructions": "Play the recording. Count bars from the first sung word (4 beats each), answer, then read.",
  "spec": { "questions": [
    { "q": "In which bar does the chord first change?", "choices": ["Bar 3", "Bar 5", "Bar 9"], "answer": 1, "explain": "Bar 5: the move to IV. The song is a 12-bar blues in C; the V chord arrives in bar 9." }
  ] }
}
```

```exercise
{
  "id": "daw-blues-backing-v2",
  "type": "daw-task",
  "title": "A 12-bar blues backing in G",
  "spec": {
    "template": { "bpm": 96, "key": "G", "tracks": [
      { "instrument": "drums", "seq": "[kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t | [kick ride]:qt ride:8t [snare ride]:qt ride:8t [kick ride]:qt ride:8t [snare ride]:qt ride:8t" },
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "12-bar blues in G: G7 G7 G7 G7 | C7 C7 G7 G7 | D7 C7 G7 D7 (G7 = G B D F, C7 = C E G Bb, D7 = D F# A C). Epiano: one whole-note 7th chord per bar (all four notes). Bass: the chord root on beat 1 of every bar; for a shuffle, add the fifth on the triplet grid (quarter-triplet + eighth-triplet) - or keep it simple with roots. Stamp one bar, then Ctrl+D to duplicate and the arrow keys to transpose.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "has-tracks", "instruments": ["drums", "epiano", "bass"] },
      { "kind": "plays-progression", "progression": ["I7", "I7", "I7", "I7", "IV7", "IV7", "I7", "I7", "V7", "IV7", "I7", "V7"], "barsPerChord": 1, "mode": "chords", "track": 1 },
      { "kind": "plays-progression", "progression": ["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "V"], "barsPerChord": 1, "mode": "roots", "track": 2 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 2 }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```
