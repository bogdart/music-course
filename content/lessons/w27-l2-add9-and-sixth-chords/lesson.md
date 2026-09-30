---
id: w27-l2-add9-and-sixth-chords
title: Add9 and Sixth Chords
week: 27
order: 2
phase: p4
duration_min: 40
goals:
  - Tell an add9 chord from a 9th chord (add9 has no 7th)
  - Use 6 and m6 chords as calm tonic colours instead of maj7
  - Hear add9 and 6 chords next to a plain major chord
prerequisites: [w27-l1-ninths-elevenths-thirteenths]
tags: [harmony, extended-chords, ear, keyboard]
---

# Add9 and Sixth Chords

Not every colourful chord needs a 7th. Two families add sparkle to a plain triad without changing its job in the key: [[add9 chord]]s and [[sixth chord]]s.

## Add9: colour without a 7th

{{chord:Cadd9}} is C–E–G plus D. There is **no** B. A {{chord:C9}}, by contrast, has the 7th (B♭) as well. The add9 is the singer-songwriter and pop-ballad chord: bright, a little shimmery, and completely stable. When the D sits right next to the E, you hear a gentle rub, like a ringing guitar string.

## Sixth chords: a tonic that does not lean

A maj7 has its 7th (B) a half step under the root. If your melody ends on C, that B can rub against it. The {{chord:C6}} (C–E–G–A) keeps the ending calm, which is why swing-era endings love it. The minor version works the same way: {{chord:Am6}} is A–C–E–F♯ (the raised 6th you know from Dorian).

Put both colours together and you get the **6/9 chord** (C–E–G–A–D), the classic final chord of a jazz tune.

```example
{
  "title": "C · Cadd9 · C6 · C6/9",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3]:h [C3 E3 G3 D4]:h | [C3 E3 G3 A3]:h [C3 G3 A3 D4 E4]:h |" } ],
  "show": ["keyboard"]
}
```

Now the reason for sixth chords, in sound: the same melody ends on C twice, first over Cmaj7, then over C6.

```example
{
  "title": "Melody ending on C: over Cmaj7, then over C6",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q D5:q C5:h | r:w | E5:q D5:q C5:h | r:w |" },
    { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:w | r:w | [C3 E3 G3 A3]:w | r:w |" }
  ],
  "show": ["staff"]
}
```

### Try it

1. Play the first example again. Honestly, next to plain C both Cadd9 and C6 will first sound like "the same chord with something extra". That's the normal starting point.
2. On your keyboard play C3 E3 G3, then add **D4** (Cadd9). Now play C3 E3 G3 and add **A3** (C6). Alternate a few times.
3. Now move the D *down* next to the E (C3 D3 E3 G3): the rub gets obvious. Move it back up: the rub softens into shimmer.
4. Play the second example: the melody's final C over Cmaj7, then over C6.

**Check:** add9 = a little sparkle or ring high up; 6 = sweeter, older-sounding warmth; over Cmaj7 the melody's last C has a faint edge that disappears over C6.

**If you can't hear it yet:** listen to the top note only. Play the chord, then its highest note alone: a D on top (a step above C's octave-ish top) points to add9, an A points to the 6. Name the top note first; the colour name follows.

## Drills

```exercise
{
  "id": "e1-build-add-six",
  "type": "build-chord",
  "title": "Build add9, 6 and m6",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["Cadd9", "Fadd9", "Gadd9", "C6", "F6", "G6", "Am6", "Dm6"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-pop-colours",
  "type": "play-chord",
  "title": "A pop progression with colour",
  "instructions": "I–vi–IV–V with add9 on C and F. Keep your hand close; use inversions freely.",
  "passScore": 0.7,
  "spec": { "chords": ["Cadd9", "Am7", "Fadd9", "G"], "inversion": "any", "sequence": true, "bpm": 56, "key": "C" }
}
```

```exercise
{
  "id": "e3-six-nine",
  "type": "play-notes",
  "title": "The 6/9 ending voicing",
  "instructions": "C6/9 (C G A D E) and F6/9 (F C D G A), spread over both hands. Hold each one and let it ring.",
  "spec": { "prompt": "names", "notes": [["C3", "G3", "A3", "D4", "E4"], ["F2", "C3", "D3", "G3", "A3"]], "ordered": false }
}
```

```exercise
{
  "id": "e4-add-six-quiz",
  "type": "quiz",
  "title": "Which chord, and why?",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Cadd9 contains which notes?", "choices": ["C E G B D", "C E G D", "C D G", "C E G A"], "answer": 1, "explain": "Add9 = triad + 9th, no 7th." },
    { "q": "Your melody ends on C. Which tonic chord avoids a half-step rub under it?", "choices": ["Cmaj7", "C6", "C7", "Cmaj9"], "answer": 1, "explain": "C6 has no B, so nothing sits a half step under the melody's C." },
    { "q": "C9 and Cadd9 differ by one note. Which?", "choices": ["D", "Bb", "A", "G"], "answer": 1, "explain": "C9 includes the 7th (B♭); Cadd9 does not." },
    { "q": "Am6 is…", "choices": ["A C E F#", "A C E F", "A C E G", "A C# E F#"], "answer": 0, "explain": "The 6th of A is F♯ (major 6th), the Dorian note." }
  ] }
}
```

## Ear: colour chords

**The drill's method** (also in its *How to do it* box): listen to the top of the chord. Sparkle up high → add9; sweet, vintage warmth → 6; neither → plain major. Replay freely; if the drill is on an earlier chord rung, follow that rung's box.

```ladder
{ "skill": "chords", "unlocks": 12, "intro": "Opens the colour-chord rung (plain major, add9 or 6?); the drill runs at your current chord rung." }
```

## Between lessons

Play C, Cadd9, C6 in a random order with eyes closed and name each (2 minutes a day). End one practice piece of the week on a 6/9 chord.
