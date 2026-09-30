---
id: w19-l1-circle-of-fifths
title: The Full Circle of Fifths
week: 19
order: 1
phase: p2
duration_min: 45
goals:
  - Build D, A and E major (and B♭, E♭, A♭) step by step round the circle of fifths
  - Name any major key from its key signature and vice versa
  - Listen for yourself whether roots falling by fifths sound "directed"
  - Hear the big intervals (tritone to octave) going up, and octaves two apart
prerequisites: [w18-l3-harmonising-melodies-daw]
tags: [keys, circle-of-fifths, key-signatures, ear]
---

# The Full Circle of Fifths

In weeks 9 and 10 you built G, F, D and B♭ major and saw a first glimpse of the [[circle of fifths]]; your ear already finds home in any key from the cadence. Today we build the rest of the major keys properly on paper, and you'll see that the order of sharps and flats isn't something to memorise blindly: it falls out of the major-scale pattern.

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

### Try it: walk the circle with your hands

1. Play C major up. Start the same notes on G and change one key: F → **F♯**. That's G major.
2. Start G major's notes on D and change one more: C → **C♯**. D major. Then from A, raise G → **G♯**.
3. Going the other way: C major from F, lower B → **B♭**; from B♭, lower E → **E♭**.

Each time only one finger moves to a new key, and your ear hears it: without the change, the top of the scale (or the 4th) sounds wrong. **If you're unsure a scale is right**, play it slowly and listen for the last step into the top note: it must be a tiny half step that pulls in. If it's a wide whole step, the 7th needs raising.

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

Same chords, same voicings, same first and last chord: only the order in the middle differs. Before you judge, **play just the bass lines yourself**, low and slowly: A D G C, then A G D C. In the first each note falls into the next like a step down a staircase of fifths; in the second the bass wanders. Then listen to A and B again, listening only to the bass.

```exercise
{
  "id": "e5", "type": "reflect", "title": "Which order sounds more directed?",
  "spec": { "prompt": "Listen to A and B a few times. Which one sounds more like it's heading somewhere, and where did you feel that? If you can't tell a difference yet, say so: that's a real answer.", "minWords": 15 }
}
```

## Ear corner: two octaves apart, and the big intervals

The octave drill's next rung spreads the candidates wider: the octave may now be **two octaves** up, next to a wrong note such as a fifth plus an octave. The drill runs at your current rung, which may still be an earlier one.

### Try it: octave, two octaves, or a fifth in disguise

1. Play **C3 and C4** together: one fuller note. Then **C3 and G3** together: an open, hollow *pair*. That's the difference to listen for.
2. Play **C3, then C5**: hard to judge in one jump. Now walk it: C3 → C4 → C5. The walk makes the match audible.
3. Play **C3, then G4**: wide, and smooth, and *not* the same note. This is the trap: a fifth plus an octave. Walk it: C3 → C4 → C5 — G4 isn't on the path.

Check: two pairs, one note after the other.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: same note name?",
  "instructions": "Play each pair. Walk the octaves on your keyboard before you answer.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D3:h A4:h" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E3:h E5:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1: the same note name?", "choices": ["same", "different"], "answer": 1, "explain": "Different: D3 then A4, a fifth plus an octave. Smooth, but D3 → D4 → D5 never passes A." },
      { "q": "Pair 2: the same note name?", "choices": ["same", "different"], "answer": 0, "explain": "Same: E3 then E5, two octaves apart. Walk E3 → E4 → E5 to hear the match." }
    ]
  }
}
```

**If you can't hear it yet:** go to the keyboard. Find the first note (search low keys with higher/lower), then play it and every key 12 above it, one after the other, up to the height of the second note. Replay the question: does the second note land on your walk? Slow is fine; this is how the ear learns the path.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for your rung): 1) smooth like an echo? 2) far apart — walk the octaves; 3) smooth but hollow — suspect a fifth. Replay as often as you like.

```ladder
{ "skill": "octave", "unlocks": 11, "intro": "Opens \"Two octaves apart: which one?\"; the drill runs at your current octave rung." }
```

The interval drill takes the matching step: one rung for all the **big intervals going up**: tritone, minor and major 6th, minor and major 7th, and the octave. You've met each pair on its own since week 15; now they're mixed.

### Try it: measure against the octave

1. Play C4 then C5: the octave. Then C4 to B4 (major 7th) and C4 to B♭4 (minor 7th): both land just short.
2. C4 to A4 and C4 to A♭4: the 6ths, clearly short of the octave, sweet (A) or bittersweet (A♭).
3. C4 to F♯4: the tritone, the restless middle.

**If you can't hear it yet:** after the question, play its first note and then its octave yourself. Was the question's jump the same, a little shorter, clearly shorter, or much shorter? Then play the two candidates in that size class from the same first note and pick the match.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): start from the octave you can already hear. The octave, a bit less (7ths), clearly less (6ths) or the restless middle (tritone); then pick between the two candidates.

```ladder
{ "skill": "intervals", "unlocks": 13, "intro": "Opens \"Big intervals, up\" (TT, 6ths, 7ths, P8); the drill runs at your current rung." }
```

## Between lessons

- **3 minutes:** walk the circle on the keyboard: C, G, D, A major scales up, then F, B♭, E♭ — one changed key each time.
- **3 minutes:** octave walks. Pick a low note, play it and every octave above; then test a fifth (C3–G4) against the walk.
- **2 minutes:** from random notes, play the octave, then the 7ths, 6ths and tritone below it.
- One octave-ladder and one intervals-ladder session on the Practice page.
