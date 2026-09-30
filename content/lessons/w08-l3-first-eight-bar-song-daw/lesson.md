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

Here's a complete model. Following one layer in a mix is hard at first — the bass is the trickiest.

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

**Try it — one layer at a time, with your hands:**

1. **Drums:** play it and tap your foot on every kick (beats 1 and 3), your hand on every snare (2 and 4).
2. **Bass:** play it again and, with your left hand, play along with the bass: C, F, C, G, C, F, G, C — one note per bar, at the start of the bar. When your note matches, the low part gets louder and cleaner; when it doesn't, it rubs. That's a keyboard way to *hear* a bass line.
3. **Chords:** right hand, play the chord of each bar along with the recording (any arrangement).
4. **Melody:** listen once more for the ends of the two phrases: bar 4 (the melody stops on D over G — a question) and bar 8 (C over C — the answer).

## I, IV and V by ear

Your song uses three chords, and this lesson opens ear rungs that use them too. The progressions ladder adds **IV** to I and V. IV is the "away" chord of the cadence.

**Try it:**

1. Play I – IV – I – V – I with the right hand (C E G → C F A → C E G → B D G → C E G) and the bass under it (C3, F2, C3, G2, C3).
2. Stop on IV and hold it; then stop on V and hold it. Many people hear IV as "stepped away, but calm" and V as "wants to go home now". If both just sound "not home", that's fine — use the bass.
3. Listen to the bass alone: C → F goes **up** a 4th (or down a 5th); C → G goes up a 5th. You don't need to name the jump — just find where it lands.

**If you can't hear it yet:** after each chord, search its bass note: **C = I, F = IV, G = V**. Three possible keys — at most a few tries each.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: which bass note?",
  "instructions": "Four bars of chords with a bass. Find the bass note of bar 4 on your keyboard.",
  "spec": {
    "example": { "title": "Four bars", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 E4 G4]:w | [B3 D4 G4]:w | [C4 F4 A4]:w" }, { "instrument": "bass", "seq": "C3:w | C3:w | G2:w | F2:w" } ] },
    "questions": [
      { "q": "Bar 3: the bass note (and chord) is…", "choices": ["C (I)", "F (IV)", "G (V)"], "answer": 2, "explain": "G in the bass: V." },
      { "q": "Bar 4: the bass note (and chord) is…", "choices": ["C (I)", "F (IV)", "G (V)"], "answer": 1, "explain": "F in the bass: IV." }
    ]
  }
}
```

### Before the progressions and roots drills

Both drills run at your current rung. Their **How to do it** boxes:

- **Progressions:** rest (I), lift away (IV) or pull home (V)? Follow the bass to check.
- **Roots (bass lines):** listen only to the lowest sound. Play the first bass note, then for each next chord decide *up or down* and search in that direction.

```ladder
{ "skill": "progressions", "unlocks": 2, "intro": "Opens \"I, IV, V\" (after I or V); the drill runs at your current rung." }
```

The roots ladder moves from single chords to **bass lines**: two chords, I and V, and you play their two bass notes in order; then three chords, I, IV and V. It's exactly what you did with your left hand along the model song.

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

One more octave rung opens today, for later: the candidates may be *two* octaves above the first note (C3 and C5). The height gap is huge, and it's hard to hear directly. The bridge is to **walk** it, one octave at a time — the step you already know, twice.

```example
{
  "title": "Two octaves apart: C3 → C5 directly, then walked C3 → C4 → C5",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C3:h C5:h | C3:q C4:q C5:h" } ],
  "show": ["keyboard"]
}
```

**Try it:** play C3, C4, C5 slowly, then C3 straight to C5. Then E3, E4, E5 and E3 → E5. Then a trap: C3 → C4 → B4 — does the last step feel like "the same note again", or like a new note?

**If you can't hear it yet:** after the drill's answer, press **Walk up the octaves** and follow along on your own keys (count 12 keys per step). Before answering, play the first note and the note 24 keys above it, then replay the question.

### Before the octave drill

The drill runs at your current octave rung. Its **How to do it** box has the method; for this rung it's *walk it*: imagine the first note, its octave, then the octave above that — does the candidate sit on the last step?

```ladder
{ "skill": "octave", "unlocks": 9, "intro": "Opens \"Two octaves apart: which one?\"; the drill runs at your current octave rung." }
```

## Work order that avoids getting stuck

1. **Chords first** (piano, whole notes). Loop them until the progression feels familiar.
2. **Bass**: the root of each chord, one or two notes per bar, an octave or two below the chords.
3. **Drums**: the basic beat, all 8 bars.
4. **Melody last**, over the loop. Write a 2-bar idea, repeat it, then shape the endings: bar 4 on 2 or 5 (question), bar 8 on 1 (answer). Chord tones on beats 1 and 3.
5. **Listen top to bottom**, fix anything that clashes, and save.

**Stuck on the melody?** Loop bars 1–2 and noodle on your keyboard over them using only the chord's own notes (C E G over C, F A C over F) — no wrong answers. When two bars feel right, enter them. Then make bar 4 stop on D or G, and bar 8 on C.

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

## Between lessons

- **Finish the song** if it didn't fit today, then listen to it the next day with fresh ears and change one thing.
- **Two Practice sessions of about 10 minutes.** For bass-line items: play along with the replay using your left hand, as you did with the model song.
- **Ready for Phase 2?** Look at the Dashboard's ladder bars. None has to be full. If it says *practise first*, give that skill one or two extra sessions before week 9; otherwise start minor keys — the ladders will keep each skill at your pace.
