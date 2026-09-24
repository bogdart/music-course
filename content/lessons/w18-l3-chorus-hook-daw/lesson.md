---
id: w18-l3-chorus-hook-daw
title: "From a 2-Bar Motif to a Chorus Hook"
week: 18
order: 3
phase: p3
duration_min: 50
goals:
  - Capture a 2-bar motif by improvising over a looping progression
  - Build an 8-bar chorus from it (A A' A B) that fits the chords and has one climax
  - Finish the chorus with a bass line and drums that lock together
prerequisites: [w18-l2-range-climax-hook]
tags: [melody, hook, daw, songwriting, ear]
songs: []
---

# From a 2-Bar Motif to a Chorus Hook

Today you write a real chorus. The method below is the one you will use for the rest of the year, so follow the steps even if an idea arrives early.

## The hook workflow

1. **Loop the chords.** Put the chorus progression on a 2-bar loop and let it play.
2. **Improvise badly, a lot.** Record 6–8 passes of anything — hum first, then find it on the keyboard. Don't judge yet.
3. **Pick the best 2 bars.** Listen back and keep the passage you remember afterwards. That is your [[motif]].
4. **Shape it A A' A B.** Copy, change the ending, copy, write a payoff with the [[climax]].
5. **Check it against the chords.** Strong beats (1 and 3) should mostly land on chord tones.
6. **Lock the groove.** Bass rhythm follows the kick; the melody sits on top.

Here is the result of that workflow in F major (I–V–vi–IV). The motif is bars 1–2; bar 7 sequences it up to reach the climax F5.

```example
{
  "title": "Finished chorus in F - motif, repeat, payoff",
  "bpm": 98, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "r:q A4:8 C5:8 D5:q C5:8 A4:8 | G4:h. r:q | r:q A4:8 C5:8 D5:q C5:8 A4:8 | Bb4:h. r:q | r:q A4:8 C5:8 D5:q C5:8 A4:8 | G4:h. r:q | r:q D5:8 E5:8 F5:q E5:8 D5:8 | D5:w" },
    { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
    { "instrument": "bass", "seq": "F2:h F2:8 F2:8 r:q | C2:h C2:8 C2:8 r:q | D2:h D2:8 D2:8 r:q | Bb1:h Bb1:8 Bb1:8 r:q | F2:h F2:8 F2:8 r:q | C2:h C2:8 C2:8 r:q | D2:h D2:8 D2:8 r:q | Bb1:h Bb1:8 Bb1:8 r:q" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Look at the kick (beats 1, 3 and 3-and) and the bass: same rhythm. That lock is what makes a groove feel solid.

```chords
{ "key": "F", "bars": ["F", "C", "Dm", "Bb"], "roman": true, "play": true, "bpm": 98 }
```

## Warm up the hands

```exercise
{
  "id": "play-f-progression",
  "type": "play-chord",
  "title": "I-V-vi-IV in F",
  "instructions": "F - C - Dm - Bb, smooth inversions around F3-D4.",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["F", "C", "Dm", "Bb"], "inversion": "any", "sequence": true, "bpm": 80 }
}
```

## Write it

```exercise
{
  "id": "daw-capture-motif",
  "type": "daw-task",
  "title": "Step 1-3: capture a 2-bar motif",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Loop these 2 bars (F - C). Record at least six improvised passes on the lead track in a scratch project, then keep only your favourite 2 bars here. Use at least two note lengths and leave some space.",
    "checks": [
      { "kind": "bars", "min": 2, "max": 2 },
      { "kind": "in-key", "key": "F", "scale": "major", "track": 1 },
      { "kind": "note-count", "min": 4, "max": 12, "track": 1 },
      { "kind": "uses-rhythm", "values": ["8", "q", "h"], "minDistinct": 2, "track": 1 }
    ],
    "minBars": 2, "maxBars": 2
  }
}
```

```exercise
{
  "id": "daw-build-chorus",
  "type": "daw-task",
  "title": "Step 4-5: build the 8-bar chorus",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Paste your motif into bars 1-2. Bars 3-4: repeat with a new ending that fits Dm-Bb. Bars 5-6: exact repeat. Bars 7-8: payoff containing your highest note. Keep it between C4 and F5.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "F", "scale": "major", "track": 1 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.7, "track": 1 },
      { "kind": "range", "low": "C4", "high": "F5", "track": 1 },
      { "kind": "max-leap", "semitones": 9, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-lock-groove",
  "type": "daw-task",
  "title": "Step 6: bass and drums",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
      { "instrument": "lead", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "task": "Paste your chorus melody onto the lead track. Program a drum beat with backbeat snare, then write a root bass line whose notes start where the kick hits.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "lead", "bass", "drums"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 3 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.9, "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Ear

```exercise
{
  "id": "ear-dictation-g",
  "type": "ear-melody",
  "title": "One-octave dictation in G (degrees)",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "G", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 6, "rhythm": "simple", "answer": "degrees" }
}
```

```exercise
{
  "id": "reflect-chorus",
  "type": "reflect",
  "spec": { "prompt": "Play your chorus three times in a row. Which bar is the strongest? Which would you rewrite tomorrow? Save the project - you will reuse this chorus in week 24.", "minWords": 25 }
}
```
