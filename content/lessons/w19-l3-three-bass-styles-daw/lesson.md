---
id: w19-l3-three-bass-styles-daw
title: Three Bass Styles on One Progression
week: 19
order: 3
phase: p3
duration_min: 50
goals:
  - Write a driving eighth-note pop bass, a syncopated funk bass and a walking bass on the same chords
  - Match each bass style with a drum pattern that locks to it
  - Hear bass roots in a new key and play a walking line
prerequisites: [w19-l2-bass-dictation]
tags: [bass, groove, daw, arrangement, ear]
songs: []
---

# Three Bass Styles on One Progression

The same four chords can sound like a rock anthem, a funk jam or a jazz club — mostly because of the bass and drums. Today you write all three over **I–vi–ii–V**.

## The three styles

| Style | Rhythm | Notes | Drums |
|---|---|---|---|
| **Pop pulse** | Straight eighths | Roots only, maybe an octave jump | Eighth hats, backbeat |
| **Funk** | 16th syncopation, rests | Root, octave, fifth; short notes | 16th hats, kick locked to bass |
| **Walking** | Steady quarters | Root on 1, then chord tones, passing and [[approach note]]s | Ride cymbal quarters |

Listen to all three in D major (D–Bm–Em–A), four bars each:

```example
{
  "title": "Pop pulse, funk, walking - D Bm Em A",
  "bpm": 100, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "bass", "seq": "D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 | B1:8 B1:8 B1:8 B1:8 B1:8 B1:8 B1:8 B1:8 | E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 | A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 | D2:8. D3:16 r:8 D2:8 r:8 D2:16 D2:16 D3:8 A2:8 | B1:8. B2:16 r:8 B1:8 r:8 B1:16 B1:16 B2:8 F#2:8 | E2:8. E3:16 r:8 E2:8 r:8 E2:16 E2:16 E3:8 B2:8 | A1:8. A2:16 r:8 A1:8 r:8 A1:16 A1:16 A2:8 C#2:8 | D2:q E2:q F#2:q A#1:q | B1:q C#2:q D2:q D#2:q | E2:q G2:q B2:q G#2:q | A2:q G2:q E2:q C#2:q" },
    { "instrument": "epiano", "seq": "[D3 F#3 A3]:w | [D3 F#3 B3]:w | [E3 G3 B3]:w | [C#3 E3 A3]:w | [D3 F#3 A3]:w | [D3 F#3 B3]:w | [E3 G3 B3]:w | [C#3 E3 A3]:w | [D3 F#3 A3]:w | [D3 F#3 B3]:w | [E3 G3 B3]:w | [C#3 E3 A3]:w" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Notice in the walking section: every bar starts on the root, and every beat 4 is a half step or step away from the next root (A#→B, D#→E, G#→A, C#→D).

## Choosing a style

Each style carries a different amount of energy and takes up a different amount of space:

- **Pop pulse** feels unstoppable because nothing changes. Its power comes from repetition, so resist adding fills — let the drums and melody provide variety.
- **Funk** lives in the gaps. The rests are as important as the notes: a short root on beat 1, silence, then a syncopated octave pop. If every 16th is filled, it stops being funky.
- **Walking** constantly moves forward, so it suits jazz, swing and bridges. Under a busy pop vocal it can feel restless.

A practical rule: the busier the melody, the simpler the bass. In a verse with lots of melodic notes, play long roots; in an instrumental section, let the bass move.

## Your turn — progression in A major

All three tasks use **A – F#m – Bm – E** (I–vi–ii–V), 4 bars. Keep the bass between E1 and E3.

```exercise
{
  "id": "daw-pop-pulse",
  "type": "daw-task",
  "title": "Style 1: pop pulse",
  "spec": {
    "template": { "bpm": 110, "key": "A", "tracks": [
      { "instrument": "epiano", "seq": "[C#3 E3 A3]:w | [C#3 F#3 A3]:w | [D3 F#3 B3]:w | [B2 E3 G#3]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "task": "Eighth-note roots (you may jump an octave once per bar). Add eighth hi-hats, kick on 1 and 3, snare on 2 and 4.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "chord-tones-on-beats", "beats": [1, 2, 3, 4], "progression": ["I", "vi", "ii", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 1 },
      { "kind": "note-count", "min": 28, "max": 32, "track": 1 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-funk",
  "type": "daw-task",
  "title": "Style 2: funk",
  "spec": {
    "template": { "bpm": 100, "key": "A", "tracks": [
      { "instrument": "epiano", "seq": "[C#3 E3 A3]:w | [C#3 F#3 A3]:w | [D3 F#3 B3]:w | [B2 E3 G#3]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "task": "Use short notes, rests and at least one 16th note per bar. Root on beat 1, octaves and fifths elsewhere. Then program 16th hi-hats and put a kick under every bass note that starts on a 16th off-beat.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "ii", "V"], "barsPerChord": 1, "minRatio": 1.0, "track": 1 },
      { "kind": "uses-rhythm", "values": ["16", "8", "8."], "minDistinct": 2, "track": 1 },
      { "kind": "in-key", "key": "A", "scale": "major", "allowPassing": true, "track": 1 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-walking",
  "type": "daw-task",
  "title": "Style 3: walking",
  "spec": {
    "template": { "bpm": 120, "key": "A", "tracks": [
      { "instrument": "epiano", "seq": "[C#3 E3 A3]:w | [C#3 F#3 A3]:w | [D3 F#3 B3]:w | [B2 E3 G#3]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "[kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q | [kick ride]:q [ride hihat]:q [kick ride]:q [ride hihat]:q" }
    ] },
    "task": "Four quarter notes per bar. Beat 1 = root. Beats 2-3 = chord tones or scale steps. Beat 4 = approach note (step or half step) to the next root; bar 4 leads back to A.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "note-count", "min": 16, "max": 16, "track": 1 },
      { "kind": "uses-rhythm", "values": ["q"], "minDistinct": 1, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "ii", "V"], "barsPerChord": 1, "minRatio": 1.0, "track": 1 },
      { "kind": "in-key", "key": "A", "scale": "major", "allowPassing": true, "track": 1 },
      { "kind": "max-leap", "semitones": 7, "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "play-walking-line",
  "type": "play-melody",
  "title": "Play the walking line (an octave up)",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "D", "seq": "D3:q E3:q F#3:q A#2:q | B2:q C#3:q D3:q D#3:q | E3:q G3:q B3:q G#3:q | A3:q G3:q E3:q C#3:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "epiano", "seq": "[D4 F#4 A4]:w | [D4 F#4 B4]:w | [E4 G4 B4]:w | [C#4 E4 A4]:w" } }
}
```

```exercise
{
  "id": "ear-bass-a",
  "type": "ear-bass",
  "title": "Bass roots in A major",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "A", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "reflect-bass-styles",
  "type": "reflect",
  "spec": { "prompt": "Play your three versions back to back. Describe the mood of each in one sentence. Which one would you choose for a verse, and which for a chorus? Why?", "minWords": 30 }
}
```
