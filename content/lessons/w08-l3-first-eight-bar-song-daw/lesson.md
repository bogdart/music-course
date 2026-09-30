---
id: w08-l3-first-eight-bar-song-daw
title: Your First 8-Bar Song
week: 8
order: 3
phase: p1
duration_min: 50
goals:
  - Understand the four basic layers of a song (drums, bass, chords, melody)
  - Plan an 8-bar A A' song with a half cadence and an authentic cadence
  - Build and finish the song in the DAW
prerequisites: [w08-l2-phase-1-review-and-ear-assessment]
tags: [songwriting, arrangement, form, daw, capstone]
---

# Your first song

Everything from Phase 1 comes together today. You'll make a complete 8-bar piece with four [[layer]]s — the same four that sit at the core of most pop records:

| Layer | Job | Your tools |
|---|---|---|
| **Drums** | the pulse and energy | kick 1 & 3, snare 2 & 4, hi-hat eighths |
| **Bass** | the foundation — tells the ear which chord it is | the chord **root**, low |
| **Chords** | the colour and harmony | triads from the key |
| **Melody** | the part people remember | degrees, steps, phrases, cadences |

## The plan: A A'

Two 4-bar phrases that start the same way and end differently — a question, then its answer. Musicians call this **A A'** ("A prime": A with a changed ending):

- **A** (bars 1–4): **C – F – C – G** → ends on V, a half cadence (question).
- **A'** (bars 5–8): **C – F – G – C** → ends V → I, an authentic cadence (answer).

The melody of A' starts like A, then changes its last bars to land on degree 1.

```chords
{ "key": "C", "bars": ["C", "F", "C", "G", "C", "F", "G", "C"], "roman": true, "play": true, "bpm": 90 }
```

Here's a complete model. Listen once for the whole, then listen again following just one layer: drums, then bass, then chords, then melody. Following one layer in a mix is hard at first — the bass is the trickiest; try the kick-and-bass at the very start of each bar.

```example
{
  "title": "Model song: 8 bars, A A', four layers",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q G4:q C5:q G4:q | A4:q G4:q F4:h | E4:q G4:q E4:q C4:q | D4:w | E4:q G4:q C5:q G4:q | A4:q G4:q F4:h | D4:q F4:q B3:q D4:q | C4:w" },
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | F2:h F2:h | C2:h C2:h | G2:h G2:h | C2:h C2:h | F2:h F2:h | G2:h G2:h | C2:w" },
    { "instrument": "drums", "seq": "[kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8 | [kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8" }
  ],
  "show": ["pianoroll"]
}
```

## I, IV and V by ear

Your song uses three chords, and this lesson opens ear rungs that use them too. The progressions ladder adds **IV** to I and V. IV is the "away" chord of the cadence — it sounds like leaving home, without the strong pull back that V has. The drill runs at your current progressions rung, so you'll meet IV once I vs V is solid.

```ladder
{ "skill": "progressions", "unlocks": 2, "intro": "Opens \"I, IV, V\" (after I or V); the drill runs at your current rung." }
```

The roots ladder moves from single chords to **bass lines**: you hear two chords, I and V, and play their two bass notes (C and G) in order; then three chords, I, IV and V (C, F, G). Listen to the model song's bass for exactly this: one low note per chord.

```example
{
  "title": "I and V with their bass notes: I – V – V – I",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w" },
    { "instrument": "bass", "seq": "C3:w | G2:w | G2:w | C3:w" }
  ],
  "show": ["keyboard"]
}
```

```ladder
{ "skill": "roots", "unlocks": 4, "intro": "Opens bass lines: I and V, then I, IV and V; the drill runs at your current roots rung." }
```

## Octaves: two apart

One more octave rung opens today, for later: the candidates may be *two* octaves above the first note (C3 and C5). The height gap is huge and, played together, two octaves melt less obviously than one. The bridge is the **Walk up the octaves** button after each answer: it plays C3 → C4 → C5, one octave at a time — the step you already know, twice. You'll meet this rung only once the earlier octave rungs are solid.

```example
{
  "title": "Two octaves apart: C3 → C5 directly, then walked C3 → C4 → C5",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C3:h C5:h | C3:q C4:q C5:h" } ],
  "show": ["keyboard"]
}
```

```ladder
{ "skill": "octave", "unlocks": 9, "intro": "Opens \"Two octaves apart: which one?\"; the drill runs at your current octave rung." }
```

## Work order that avoids getting stuck

1. **Chords first** (piano, whole notes). Loop them until the progression feels familiar.
2. **Bass**: the root of each chord, one or two notes per bar, an octave or two below the chords.
3. **Drums**: the basic beat, all 8 bars.
4. **Melody last**, over the loop. Write a 2-bar idea, repeat it, then shape the endings: bar 4 on 2 or 5 (question), bar 8 on 1 (answer). Chord tones on beats 1 and 3.
5. **Listen top to bottom**, fix anything that clashes, and save.

It doesn't need to be brilliant. It needs to be *finished*. Finishing is a skill, and you're starting to train it today. If it doesn't fit in one session, save and finish it next time.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Layers and plan",
  "spec": { "questions": [
    { "q": "Which layer usually plays the chord roots?", "choices": ["melody", "bass", "hi-hat"], "answer": 1 },
    { "q": "Bar 4 of the plan (G chord) creates…", "choices": ["a half cadence", "an authentic cadence"], "answer": 0 },
    { "q": "The best note to end the melody on in bar 8:", "choices": ["degree 1", "degree 2", "degree 7"], "answer": 0 },
    { "q": "The snare in a basic beat hits on…", "choices": ["1 and 3", "2 and 4", "every eighth"], "answer": 1 },
    { "q": "A' means…", "choices": ["a new, unrelated phrase", "A again with a changed ending"], "answer": 1 },
    { "q": "Recommended order to build:", "choices": ["melody, drums, bass, chords", "chords, bass, drums, melody"], "answer": 1 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "play-chord",
  "title": "Play the song's chords",
  "passScore": 0.75,
  "spec": { "chords": ["C", "F", "C", "G", "C", "F", "G", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Play the model melody over the band",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q G4:q C5:q G4:q | A4:q G4:q F4:h | E4:q G4:q E4:q C4:q | D4:w | E4:q G4:q C5:q G4:q | A4:q G4:q F4:h | D4:q F4:q B3:q D4:q | C4:w", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w" } }
}
```

```exercise
{
  "id": "e8",
  "type": "daw-task",
  "title": "Finish your first 8-bar song",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "drums", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Build an 8-bar song in C major, A A' form, over C–F–C–G | C–F–G–C (one chord per bar). Track 1 piano: block triads. Track 2 bass: the root of each bar's chord. Track 3 drums: kick on 1 and 3, snare on 2 and 4, hi-hat eighths. Track 4 lead: your melody — bars 5–6 repeat bars 1–2, bar 4 ends on a question (degree 2 or 5), bar 8 ends on degree 1. Chord tones on beats 1 and 3. Save the project with a title — it's your first song.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "drums", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "plays-progression", "progression": ["I", "IV", "I", "V", "I", "IV", "V", "I"], "barsPerChord": 1, "mode": "chords", "track": 0 },
      { "kind": "plays-progression", "progression": ["I", "IV", "I", "V", "I", "IV", "V", "I"], "barsPerChord": 1, "mode": "roots", "track": 1 },
      { "kind": "range", "low": "C2", "high": "C4", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "IV", "I", "V", "I", "IV", "V", "I"], "barsPerChord": 1, "minRatio": 0.75, "track": 3 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "range", "low": "C4", "high": "C5", "track": 3 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e7",
  "type": "reflect",
  "title": "Phase 1 in your words",
  "spec": { "prompt": "Listen to your finished song twice. What do you like about it? What would you change if you had another hour? Then compare: how do octaves, degrees and major vs minor sound to you now compared with week 1?", "minWords": 40 }
}
```
