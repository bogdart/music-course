---
id: w50-l3-speed-song-from-chords
title: "Speed Song 3: From Chords"
week: 50
order: 3
phase: p5
duration_min: 50
goals:
  - Turn a 4-chord progression with a borrowed chord into a finished 2-minute song in one session
  - Write a melody from the chords' guide tones, then give it rhythm
  - Create a chorus by varying the progression (rhythm, voicing, one reharmonised chord)
prerequisites: [w50-l2-speed-song-from-a-beat]
tags: [songwriting, speed, chords, borrowed-chords, daw]
---

# Speed Song 3: From Chords

The third starting point is the one most self-taught writers use: noodle on the keyboard until a progression grabs you. It's also the one that most often stalls — pretty chords looping forever, no song. Today's workflow is designed to get you *out* of the loop and into a form.

## The seed

Four chords in F with a borrowed iv: **Fmaj7 – Am7 – Bb – Bbm** (Imaj7 – iii7 – IV – iv). That last chord is the one from week 43: the same root as IV, the 3rd sinks from D to Db, and the whole loop turns bittersweet.

```example
{
  "title": "Seed progression (F major, 88 BPM)",
  "bpm": 88, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "bass", "seq": "F2:w | A2:w | Bb2:w | Bb2:w" },
    { "instrument": "piano", "seq": "[F3 A3 C4 E4]:w | [E3 A3 C4 G4]:w | [F3 Bb3 D4]:w | [F3 Bb3 Db4]:w" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

## Melody from guide tones

Don't improvise from nothing. Find the notes that *move* in the voicing — the [[guide tones]] — and sing them: E (bar 1) → E (bar 2) → D (bar 3) → Db (bar 4). That falling line is already a melody skeleton. Now give it rhythm: repeat the note, add a neighbour, anticipate the next bar by an eighth. You did exactly this in reverse when you dictated melodies with skeleton-first.

## Verse vs chorus from one loop

Two chord sections from one progression, fast:

- **Rhythm** — verse holds whole notes; chorus pushes eighths or an offbeat pattern.
- **Voicing** — chorus voicings sit higher and wider.
- **One reharm** — swap one chord in the chorus: Am7 → Dm7, or Bb → Gm7. Change one, not four.

## The timebox

| Minutes | Stage |
|--------|-------|
| 0–5 | Play the loop; choose a groove style (ballad, dance, R&B or rock — you've transcribed all four) |
| 5–15 | Verse melody from guide tones, 8 bars |
| 15–25 | Chorus: vary rhythm/voicing/one chord; chorus hook, 8 bars |
| 25–35 | Form (44 bars ≈ 2 min at 88 BPM): intro 4, V 8, C 8, V 8, C 8, outro 8 |
| 35–45 | Drums, bass, one extra layer; final cadence on F |
| 45–50 | Listen once; three fixes noted |

```exercise
{
  "id": "w50l3-warm",
  "type": "ear-progression",
  "title": "Warm-up: IV or iv? (5 min)",
  "count": 6,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["Imaj7", "iii7", "IV", "iv", "ii7", "vi7"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w50l3-analysis",
  "type": "roman-analysis",
  "title": "Seed and reharm options",
  "spec": { "key": "F", "chords": ["Fmaj7", "Am7", "Bb", "Bbm", "Fmaj7", "Dm7", "Gm7", "Bbm"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w50l3-play",
  "type": "play-chord",
  "title": "Play the seed",
  "spec": { "chords": ["Fmaj7", "Am7", "Bb", "Bbm"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

```exercise
{
  "id": "w50l3-guide",
  "type": "play-melody",
  "title": "Sing and play the guide-tone line",
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "F", "seq": "E4:w | E4:h G4:h | D4:w | Db4:w", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[F3 A3 C4 E4]:w | [E3 A3 C4 G4]:w | [F3 Bb3 D4]:w | [F3 Bb3 Db4]:w" } }
}
```

```exercise
{
  "id": "w50l3-song",
  "type": "daw-task",
  "title": "The 45-minute song",
  "spec": {
    "template": { "bpm": 88, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4 E4]:w | [E3 A3 C4 G4]:w | [F3 Bb3 D4]:w | [F3 Bb3 Db4]:w" },
      { "instrument": "bass", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "drums", "seq": "" } ] },
    "task": "Follow the timebox. Keep the seed as the verse (repeat it), build the chorus by changing rhythm, voicing and exactly one chord, write a melody from guide tones, and finish with a cadence on F. 44 bars minimum.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead", "drums"] },
      { "kind": "bars", "min": 44, "max": 52 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "max-leap", "semitones": 9, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "custom", "id": "w50-timebox", "note": "Self-check: finished within the 45-minute timebox." }
    ],
    "minBars": 44, "maxBars": 52
  }
}
```

```exercise
{
  "id": "w50l3-retro",
  "type": "reflect",
  "title": "Your fastest starting point",
  "spec": { "prompt": "Rank the three starting points (hook, beat, chords) from fastest to slowest for you. Which one will you use to start your final project next week, and why?", "minWords": 40 }
}
```
