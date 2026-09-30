---
id: w16-l1-circle-of-fifths
title: The Full Circle of Fifths
week: 16
order: 1
phase: p2
duration_min: 45
goals:
  - Build D, A and E major (and B♭, E♭, A♭) step by step round the circle of fifths
  - Name any major key from its key signature and vice versa
  - Listen for yourself whether roots falling by fifths sound "directed"
prerequisites: [w15-l3-harmonising-melodies-daw]
tags: [keys, circle-of-fifths, key-signatures, ear]
---

# The Full Circle of Fifths

In week 7 you built G major (one sharp) and F major (one flat) and saw a first glimpse of the [[circle of fifths]]. Today we build the rest of the major keys, and you'll see that the order of sharps and flats isn't something to memorise blindly: it falls out of the major-scale pattern.

## Going up in fifths: one new sharp each time

Start from G major: **G A B C D E F♯**. Go up a fifth from G and you reach **D**. Play the G major notes starting on D: D E F♯ G A B C. Check the pattern W-W-H-W-W-W-H: everything fits except the end. From B to C is a half step, but a major scale needs a *whole* step there, and then a half step up into D. So C becomes **C♯**, the new leading tone.

**D major = D E F♯ G A B C♯**, two sharps.

```example
{
  "title": "G major, then D major: the same notes except C becomes C♯",
  "bpm": 100, "timeSig": "4/4", "key": "D",
  "tracks": [ { "instrument": "piano", "seq": "G3:8 A3:8 B3:8 C4:8 D4:8 E4:8 F#4:8 G4:8 | D4:8 E4:8 F#4:8 G4:8 A4:8 B4:8 C#5:8 D5:8 | D5:w" } ],
  "show": ["keyboard", "staff"]
}
```

The same thing happens at every step: **the new key keeps the old sharps and raises its own 7th degree.**

| key | sharps | new sharp (its 7th) |
|---|---|---|
| G | 1 | F♯ |
| D | 2 | C♯ |
| A | 3 | G♯ |
| E | 4 | D♯ |
| B | 5 | A♯ |
| F♯ | 6 | E♯ (the white key F, spelled E♯ so every letter appears once) |

So the sharps always arrive in the same order, **F C G D A E B**, and there's a shortcut: the last sharp is the 7th degree, so the key is a half step above it.

## Going down in fifths: one new flat each time

Going down a fifth from C gives F major, which needs B♭: the 4th of a major scale must sit a half step above the 3rd (A to B♭). Down another fifth, B♭ major keeps B♭ and needs its own 4th lowered: **E♭**. **The new flat key keeps the old flats and lowers its own 4th.** Flats arrive as **B E A D G C F**, the sharp order backwards. Shortcut: with two or more flats, the second-to-last flat names the key (B♭, E♭ → E♭ major). F major (one flat) you just remember.

Round the circle: C → G → D → A → E → B → F♯ going up in fifths, C → F → B♭ → E♭ → A♭ → D♭ → G♭ going down. F♯ and G♭ are the same keys spelled two ways, so the circle closes. Neighbours on the circle differ by just one note and share most chords: they're [[closely related keys]].

```exercise
{
  "id": "e1", "type": "build-scale", "title": "Build new major scales",
  "instructions": "Start from the neighbouring key and add its new sharp (raise the 7th) or new flat (lower the 4th).",
  "count": 6, "passScore": 0.7,
  "spec": { "roots": ["D", "A", "E", "Bb", "Eb", "Ab"], "scale": "major", "prompt": "name" }
}
```

```exercise
{
  "id": "e2", "type": "play-scale", "title": "Major scales in new keys",
  "instructions": "The app picks a key. Think of its sharps or flats before you start.",
  "count": 1, "passScore": 0.7,
  "spec": { "root": "random", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e3", "type": "key-signature", "title": "Name the key from the signature",
  "count": 12, "passScore": 0.7,
  "spec": { "keys": ["C", "G", "D", "A", "E", "B", "F", "Bb", "Eb", "Ab", "Db", "F#"], "prompt": "staff", "answer": "name" }
}
```

```exercise
{
  "id": "e4", "type": "key-signature", "title": "How many sharps or flats?",
  "count": 8, "passScore": 0.7,
  "spec": { "keys": ["D", "A", "E", "Bb", "Eb", "Ab", "B", "Db"], "prompt": "name", "answer": "count" }
}
```

## Roots falling by fifths: judge for yourself

The circle also shows up inside progressions. ii – V – I is two falls of a fifth (D → G → C): counter-clockwise round the circle. Musicians often say root movement by fifths sounds especially "directed", as if each chord points to the next. Don't take that on trust: listen to the same four chords in two orders.

```example
{
  "title": "A: roots falling by fifths (Am – Dm – G – C)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 A3 C4]:w | [F3 A3 D4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w" },
    { "instrument": "bass", "seq": "A1:w | D2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

```example
{
  "title": "B: the same four chords, the middle two swapped (Am – G – Dm – C)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 A3 C4]:w | [D3 G3 B3]:w | [F3 A3 D4]:w | [E3 G3 C4]:w" },
    { "instrument": "bass", "seq": "A1:w | G1:w | D2:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

Same chords, same voicings, same first and last chord: only the order in the middle differs.

```exercise
{
  "id": "e5", "type": "reflect", "title": "Which order sounds more directed?",
  "spec": { "prompt": "Listen to A and B a few times. Which one sounds more like it's heading somewhere, and where did you feel that? If you can't tell a difference yet, say so: that's a real answer.", "minWords": 15 }
}
```

## Ear corner: the last octave rung, and degrees in any octave

This lesson opens the octave ladder's final rung, which mixes everything: any register, one or two octaves apart, and every kind of wrong note, from a half step off to the fifth trap. It also opens the next degree rung, where the note may sound an octave below the cadence: same degree, lower register, so it leans on your octave work. Both drills run at your current rung, which may still be an earlier one; take them slowly and use the "Listen again" aids.

```ladder
{ "skill": "octave", "unlocks": 14, "intro": "Opens the last rung: any register, any gap, any kind of wrong note. The drill runs at your current octave rung." }
```

```ladder
{ "skill": "degrees", "unlocks": 17, "intro": "Opens: any key, and the note may sound an octave below the cadence. The drill runs at your current degree rung." }
```
