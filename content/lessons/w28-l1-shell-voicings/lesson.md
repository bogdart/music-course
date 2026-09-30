---
id: w28-l1-shell-voicings
title: Shell Voicings
week: 28
order: 1
phase: p4
duration_min: 45
goals:
  - Play any seventh chord as a three-note shell (root, 3rd, 7th)
  - Alternate 1-3-7 and 1-7-3 shapes so a ii–V–I moves by half steps
  - Hear the four seventh colours spread out over two octaves
prerequisites: [w27-l3-neo-soul-progression-daw, w12-l3-ii-v-i-and-ballad-daw]
tags: [jazz, voicings, ii-v-i, keyboard, ear]
---

# Shell Voicings

Jazz pianists do not play every note of every chord. The first thing they learn is the [[shell voicing]]: **root, 3rd and 7th**, nothing else. Three notes, one hand, and the chord colour is clear: the 3rd says major or minor, the 7th says maj7, dom7 or min7. The 5th is left out, exactly as in last week's rules.

## Two shapes, one idea

A shell comes in two shapes:

- **1-3-7**: root, 3rd just above it, 7th on top (compact).
- **1-7-3**: root, 7th, then the 3rd above that (wider).

The point is to **alternate** them. In a ii–V–I, the 7th of one chord slides down a half step into the 3rd of the next, and the fingers barely move:

```example
{
  "title": "ii–V–I in C with shells: 1-3-7 → 1-7-3 → 1-3-7",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" } ],
  "show": ["keyboard", "staff"]
}
```

Follow the two upper notes only: F→F→E and C→B→B. Two tiny lines moving by half steps: that is what makes jazz harmony sound connected.

```keyboard
{ "range": ["C2", "C4"], "highlight": ["G2", "F3", "B3"], "labels": "names", "colors": { "G2": "root", "F3": "seventh", "B3": "third" } }
```

## Comping with shells

You met [[comping]] in Phase 3: playing chords behind a melody or a soloist. Shells are the ideal comping sound: light, clear, and low enough to leave room for the tune. For today, play each chord on beat 1 and hold it. The same ii–V–I shape moves to F and B♭ below; in F you start with 1-7-3, in B♭ with 1-3-7, so the hand stays in the same area.

```example
{
  "title": "The same ii–V–I in F, then in Bb",
  "bpm": 72, "timeSig": "4/4",
  "tracks": [ { "instrument": "piano", "seq": "[G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | r:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w | r:w |" } ],
  "show": ["keyboard"]
}
```

**About the ear drill below.** Today's new rung plays the four seventh colours spread over two octaves, the way shells and open piano voicings sound. Spread chords are harder to judge than close ones at first, because the 3rd and 7th are far apart. Listen to the top of the chord: a major 7th sounds bright and bittersweet, a dominant 7th restless, a minor 7th soft, and a m7♭5 dark.

## Drills

```exercise
{
  "id": "e1-build-sevenths",
  "type": "build-chord",
  "title": "Spell the full chords first",
  "count": 9, "passScore": 0.7,
  "spec": { "chords": ["Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e2-shells-c",
  "type": "play-melody",
  "title": "Shells in C",
  "instructions": "Left hand. Let the two top notes move by half step only.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | r:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-shells-f-bb",
  "type": "play-melody",
  "title": "Shells in F, then Bb",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "F", "seq": "[G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | r:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-play-shell-chords",
  "type": "play-chord",
  "title": "Shells from the chord symbol",
  "instructions": "Root, 3rd and 7th only, in either shape.",
  "passScore": 0.7,
  "spec": { "chords": ["Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7"], "voicing": "shell", "inversion": "root", "sequence": false }
}
```

## Ear: sevenths, spread out

```ladder
{ "skill": "chords", "unlocks": 13, "intro": "Opens the four sevenths spread over two octaves, like shells and open piano voicings; the drill runs at your current chord rung." }
```

## Make it

```exercise
{
  "id": "e5-daw-shells-bb",
  "type": "daw-task",
  "title": "Comp a ii–V–I in Bb",
  "instructions": "Track 1 (piano): shells, one per bar: Cm7 | F7 | Bbmaj7 | Bbmaj7. Track 2 (bass): the root on beat 1, anything tasteful after. About 15 minutes.",
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
