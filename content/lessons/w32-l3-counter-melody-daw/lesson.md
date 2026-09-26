---
id: w32-l3-counter-melody-daw
title: A Counter-Melody for a Chorus
week: 32
order: 3
phase: p4
duration_min: 50
goals:
  - Write a counter-melody that moves when the main melody holds
  - Use contrary motion and imperfect consonances against the hook
  - Arrange lead, pad and strings so each line is audible
prerequisites: [w32-l2-contrary-motion-and-parallels, w21-l1-frequency-roles-and-doubling]
tags: [counterpoint, arrangement, daw, counter-melody]
---

# A Counter-Melody for a Chorus

Species rules are the gym; this is the match. A [[counter-melody]] is a second melodic line — strings behind a vocal, a synth answering the hook — that makes a chorus feel bigger without adding more chords.

Three principles from counterpoint do most of the work:

1. **Rhythmic complement.** Move when the melody holds; hold when it moves. The ear follows whichever line is active, so the two lines take turns.
2. **Contrary motion** at important moments, especially into the downbeats.
3. **Stay out of the way.** A different register (here, below the hook), mostly 3rds and 6ths against it, and no parallel 5ths or octaves.

## The chorus

An original 8-bar hook over C | G | Am | F | C | G | F | C, with a string counter-melody. Solo each line and then play them together.

```example
{
  "title": "Hook (lead), counter-melody (strings), chords (pad)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |" },
    { "instrument": "strings", "seq": "C4:h G4:q F4:q | G4:h F4:q D4:q | E4:h C4:q B3:q | C4:h A3:h | C4:w | B3:h D4:q F4:q | F4:h A4:h | E4:w |" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [B2 G3]:w | [A2 E3]:w | [A2 F3]:w | [C3 G3]:w | [B2 G3]:w | [A2 F3]:w | [C3 G3]:w |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Look at bars 1–2 in the piano roll: the hook climbs and then *sits* on E5 and B4; the strings wake up exactly there. In bar 5 the hook runs in quarters, so the strings hold one long C. That's rhythmic complement.

Notice also the pad: only two notes, low. With a lead and a counter-line, you don't need thick chords — the lines *are* the harmony.

## Drills

```exercise
{
  "id": "e1-play-counter",
  "type": "play-melody",
  "title": "Play the counter-melody against the hook",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:h G4:q F4:q | G4:h F4:q D4:q | E4:h C4:q B3:q | C4:h A3:h | C4:w | B3:h D4:q F4:q | F4:h A4:h | E4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |" } }
}
```

```exercise
{
  "id": "e2-play-hook",
  "type": "play-melody",
  "title": "Now play the hook against the counter-melody",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "strings", "seq": "C4:h G4:q F4:q | G4:h F4:q D4:q | E4:h C4:q B3:q | C4:h A3:h | C4:w | B3:h D4:q F4:q | F4:h A4:h | E4:w |" } }
}
```

```exercise
{
  "id": "e3-ear-bass-under",
  "type": "ear-bass",
  "title": "Hear the lowest line",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "random", "chords": ["I", "IV", "V", "vi", "iii"], "answer": "play" }
}
```

```exercise
{
  "id": "e4-ear-prog",
  "type": "ear-progression",
  "title": "Progressions with borrowed colours",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi", "iv", "bVII"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "e5-daw-counter",
  "type": "daw-task",
  "title": "Write your own counter-melody",
  "instructions": "The hook and pad are provided (same chorus as above, strings track empty). Write a new counter-melody on strings below the hook, between C3 and C5. Move when the hook holds, hold when it moves, and avoid parallel 5ths and octaves with the hook.",
  "spec": {
    "template": { "bpm": 96, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |" },
      { "instrument": "pad", "seq": "[C3 G3]:w | [B2 G3]:w | [A2 E3]:w | [A2 F3]:w | [C3 G3]:w | [B2 G3]:w | [A2 F3]:w | [C3 G3]:w |" },
      { "instrument": "strings", "seq": "" } ] },
    "task": "8-bar counter-melody on strings against the given hook.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "C3", "high": "C5", "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "no-parallel-fifths", "tracks": [0, 2] },
      { "kind": "note-count", "min": 10, "max": 32, "track": 2 },
      { "kind": "max-leap", "semitones": 9, "track": 2 },
      { "kind": "custom", "id": "complement", "note": "Self-check: in bars where the hook holds a half note or longer, the strings move — and vice versa." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Does it lift the chorus?",
  "spec": { "prompt": "Mute and unmute your strings track while the chorus loops. Describe what the counter-melody adds. Where does it compete with the hook, and how could you fix that?", "minWords": 25 }
}
```
