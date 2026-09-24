---
id: w28-l1-shell-voicings
title: Shell Voicings
week: 28
order: 1
phase: p4
duration_min: 40
goals:
  - Play any 7th chord as a three-note shell (root + 3rd + 7th)
  - Alternate 1-3-7 and 1-7-3 shapes so ii–V–I moves by half steps
  - Comp a ii–V–I in C, F and Bb with the left hand
prerequisites: [w27-l3-neo-soul-progression-daw, w12-l3-ii-v-i-and-ballad-daw]
tags: [jazz, voicings, ii-v-i, keyboard]
---

# Shell Voicings

Jazz pianists do not play every note of every chord. The first thing they learn is the [[shell voicing]]: **root, 3rd and 7th** — nothing else. Three notes, one hand, and the chord quality is 100% clear. The 3rd says major or minor; the 7th says maj7, dom7 or min7. The 5th? The ear fills it in.

## Two shapes, one idea

A shell comes in two flavours:

- **1-3-7** — root, 3rd on top of it, 7th above (a compact, "closed" shape).
- **1-7-3** — root, 7th, then the 3rd an octave higher (a wider, "open" shape).

The magic happens when you **alternate** them. In a ii–V–I the 7th of one chord slides down a half step into the 3rd of the next. Alternate shapes and your fingers barely move:

```example
{
  "title": "ii–V–I in C with shells: 1-3-7 → 1-7-3 → 1-3-7",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" } ],
  "show": ["keyboard", "staff"]
}
```

Follow the two upper notes only: F→F→E and C→B→B. Two tiny lines moving by half steps — that is what makes jazz harmony sound "connected".

```keyboard
{ "range": ["C2", "C4"], "highlight": ["G2", "F3", "B3"], "labels": "names", "colors": { "G2": "root", "F3": "seventh", "B3": "third" } }
```

## Comping

Playing chords rhythmically behind a melody or soloist is called [[comping]] (from "accompanying" — or "complementing"). Shells are perfect for it: light, clear, and they leave room. For now, play each chord on beat 1 and hold. Next week we add rhythm.

```example
{
  "title": "Same idea in F and Bb (start with 1-7-3 in F, 1-3-7 in Bb)",
  "bpm": 72, "timeSig": "4/4",
  "tracks": [ { "instrument": "piano", "seq": "[G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | r:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w | r:w |" } ],
  "show": ["keyboard"]
}
```

## Drills

```exercise
{
  "id": "e1-build-sevenths",
  "type": "build-chord",
  "title": "Spell the full chords first",
  "count": 9, "passScore": 0.8,
  "spec": { "chords": ["Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e2-shells-c",
  "type": "play-melody",
  "title": "Shells in C",
  "instructions": "Left hand. Let the two top notes move by half step only.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | r:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-shells-f-bb",
  "type": "play-melody",
  "title": "Shells in F, then Bb",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "F", "seq": "[G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | r:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-ear-shell-qualities",
  "type": "ear-chord",
  "title": "Hear the quality in open voicings",
  "instructions": "Shells are open and thin. Focus on the 3rd and 7th.",
  "count": 10, "passScore": 0.8,
  "spec": { "qualities": ["maj7", "min7", "dom7"], "inversions": [0], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "e5-ear-ii-v-i",
  "type": "ear-progression",
  "title": "Spot the ii–V–I",
  "instructions": "Some of these contain ii–V7–I; some don't.",
  "count": 6, "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V7", "vi"], "style": "block" }
}
```

```exercise
{
  "id": "e6-daw-shells-bb",
  "type": "daw-task",
  "title": "Comp a ii–V–I in Bb",
  "instructions": "Track 1 (piano): shells, one per bar: Cm7 | F7 | Bbmaj7 | Bbmaj7. Track 2 (bass): roots on beat 1, anything tasteful after.",
  "spec": {
    "template": { "bpm": 90, "key": "Bb", "timeSig": "4/4", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "4 bars: shell-voiced ii–V–I in Bb with a bass line.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "Bb", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "note-count", "min": 12, "max": 48, "track": 0 },
      { "kind": "range", "low": "E2", "high": "C4", "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["ii7", "V7", "Imaj7", "Imaj7"], "barsPerChord": 1, "minRatio": 0.75, "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
