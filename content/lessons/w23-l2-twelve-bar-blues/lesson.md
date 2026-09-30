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

Be honest about what you hear: at first E♭ over C7 will probably just sound "wrong" or "minor". That is accurate — it *is* a minor 3rd against a major chord, used on purpose. The other blue notes are the ♭7 (you know it from Mixolydian) and the ♭5.

### Try it

1. Hold C7 in your left hand (C E G B♭). With the right hand play E, then E♭, one after the other, two beats each.
2. Now play E♭ and slide up into E (press E♭, then E while E♭ is still sounding, then let E♭ go). That little "bend upward" is the blues gesture.
3. Replay the example above and listen only for the moment the melody rises from E♭ to E.

**Check:** in bar 2 of the example you can point to the exact moment the dark note turns bright.

**If you can't hear it yet:** play them *together* with the C7: E sits inside the chord and blends; E♭ against the E of the chord makes a gritty rub. The rub is the blue note. Then go back to one after the other.

**Before the degree drill** — the method (also in the *How to do it* box): after the cadence, hear the major home chord in your head; its 3 is bright. If the note is the same height but darker, it's ♭3. If it's darker and higher, a whole step under home, it's ♭7. If the drill is on an earlier degree rung, follow that rung's own box.

```ladder
{ "skill": "degrees", "unlocks": 20, "intro": "Opens: major key, but the blue b3 may appear next to b7. The drill runs at your current degree rung." }
```

The [[blues scale]] is minor pentatonic plus that ♭5: in C, **C E♭ F G♭ G B♭**. Listen to the two runs — the only difference is the extra note squeezed between F and G:

```example
{
  "title": "C minor pentatonic, then the C blues scale",
  "bpm": 76, "timeSig": "4/4", "key": "Cm",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Eb4:q F4:q G4:q | Bb4:q C5:h. | r:w | C4:q Eb4:q F4:q Gb4:q | G4:q Bb4:q C5:h" } ],
  "show": ["keyboard"]
}
```

**Before the scales drill** — the method (in the *How to do it* box): listen to the middle of the run. Minor pentatonic walks F → G in one clean step; the blues scale goes F → G♭ → G, a crunchy chromatic creep of three notes in a row. Try playing both on your keyboard first. If you can't hear it, play just F G♭ G against F G — the creep is obvious in isolation.

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

## Make it: a 12-bar backing in G

1. Epiano first: stamp G7 in bar 1, duplicate it to bars 2–4, 7–8 and 11. Then C7 (bars 5, 6, 10) and D7 (bars 9, 12).
2. Bass: one root per bar on beat 1 (G, C or D, in octave 2). Play it back — it should already sound like a blues.
3. Only then, if you like, add the fifth on the triplet "and" for a shuffle.
4. **Judge it by ear:** loop the whole 12 bars. At bar 5 you should feel a lift (IV), at bar 9 the strongest push (V), and bar 12 should throw you back to bar 1. If a bar feels "off", check its root against the chart.
5. **If you're stuck:** play the chord chart at the top of the lesson in C, then transpose each chord up a fifth (C→G, F→C, G→D).

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

## Between lessons

Loop your backing and play E♭→E-style slides in G (B♭ sliding to B) over it for a few minutes. Do one Practice session.
