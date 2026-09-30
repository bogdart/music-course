---
id: w43-l2-sevenths-and-sus-in-context
title: Sevenths and Sus Chords in Context
week: 43
order: 2
phase: p5
duration_min: 45
goals:
  - Predict which seventh each chord would carry (maj7, m7, dom7) from its numeral
  - Decide chord by chord whether a 7th is present — triad or seventh?
  - Hear a sus4 chord resolve on the same bass note
prerequisites: [w43-l1-qualities-within-progressions]
tags: [transcription, sevenths, sus, ear]
---

# Sevenths and Sus Chords in Context

A transcription that says "A – F#m – D – E" can be right and still sound thin on playback, because the record has
Amaj7, F#m7, Dmaj7 and E7sus4. Today's pass-4 skill is the colour on top of the triad.

## Where sevenths live

Sevenths follow the diatonic default too:

- **maj7** on I and IV — soft, dreamy.
- **m7** on ii, iii and vi — mellow, warm.
- **dom7** on V (or on any chord acting as a V) — it *pulls*.

So once you know the numeral, you only answer one yes/no question: *is there a 7th at all?* Two tests:

1. **Add the 7th yourself.** Loop the bar. Play the triad along with it, then the triad plus its predicted 7th (a whole
   step below the root's octave for m7 and dom7, a half step below for maj7).
   *Check:* if the version with the 7th sounds like the record, the 7th is there. If it adds a new rub, it isn't.
2. **Overall colour.** Picking one inner note out of a chord is hard, and test 1 may not work for you yet. Then judge
   the whole sound: a seventh chord sounds fuller and softer-edged than the bare triad.

**Stuck?** Answer anyway, reveal, then play both versions along with the loop while looking. That is how the
difference becomes clear.

## Sus chords

A [[suspension]] replaces the 3rd with the 4th (sus4) or the 2nd (sus2). With no 3rd it is neither major nor minor; it
floats. In pop a sus4 usually **resolves to the major chord on the same bass note**: the 4th slides down to the 3rd and
the chord settles. A sus2 is often left unresolved, just a colour.

```example
{
  "title": "Amaj7 – F#m7 – Dmaj7 – E7sus4 → E7",
  "bpm": 84,
  "timeSig": "4/4",
  "key": "A",
  "tracks": [
    {"instrument": "bass", "seq": "A2:q. A2:8 A2:h | F#2:q. F#2:8 F#2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h"},
    {"instrument": "epiano", "seq": "[A3 C#4 E4 G#4]:w | [A3 C#4 E4 F#4]:w | [A3 C#4 D4 F#4]:w | [A3 B3 D4 E4]:h [G#3 B3 D4 E4]:h"}
  ],
  "show": ["keyboard", "pianoroll"],
  "loop": true
}
```

```chords
{"key": "A", "bars": ["Amaj7", "F#m7", "Dmaj7", "E7sus4", "E7"], "roman": true, "play": true, "bpm": 84}
```

(The chart gives the sus and its resolution a bar each so you can hear them apart; in the loop they share bar 4.) In bar
4 the bass stays on E while the A in the chord slides down to G# — suspension, then resolution.

## A hidden loop: triad or seventh?

The loop below is in D major. For each chord the palette offers two answers: the triad or the seventh chord.

1. Find each bar's bass note (search from D) and write its numeral.
2. For each bar, run test 1: triad along, then triad plus 7th along. Keep whichever sounds like the loop.

```exercise
{
  "id": "w43l2-sevenths",
  "type": "ear-progression",
  "title": "Triad or seventh, chord by chord",
  "srs": false,
  "spec": {
    "key": "D",
    "mode": "major",
    "chords": ["I", "Imaj7", "vi", "vi7", "IV", "IVmaj7", "V", "V7"],
    "example": {
      "title": "Hidden loop",
      "bpm": 84,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "D2:h. r:q | B1:h. r:q | G1:h. r:q | A1:h. r:q"},
        {"instrument": "epiano", "seq": "[F#3 A3 D4]:w | [A3 B3 D4 F#4]:w | [F#3 B3 D4 G4]:w | [G3 A3 C#4 E4]:w"},
        {"instrument": "lead", "seq": "F#4:q A4:q D5:h | D5:q. C#5:8 B4:h | B4:q D5:8 B4:8 F#4:h | E4:q G4:q A4:h"}
      ]
    },
    "progression": ["I", "vi7", "IVmaj7", "V7"]
  }
}
```

```exercise
{
  "id": "w43l2-sus",
  "type": "listen",
  "title": "Hear the suspension",
  "spec": {
    "example": {
      "title": "Mystery loop",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "D2:w | G1:w | A1:w | A1:w"},
        {"instrument": "pad", "seq": "[F#3 A3 D4]:w | [G3 B3 D4]:w | [A3 D4 E4]:w | [A3 C#4 E4]:w"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Which bar sounds most unfinished, as if it is waiting for something?", "choices": ["Bar 1", "Bar 2", "Bar 3", "Bar 4"], "answer": 2, "explain": "Bar 3."},
      {"q": "Bars 3 and 4 have the same bass note. What changes in the chord above between them?", "choices": ["Nothing", "One note slides down a step and the chord settles", "The chord turns minor", "A 7th is added"], "answer": 1, "explain": "Bar 3 is Asus4 (A–D–E), bar 4 is A (A–C#–E): the D (the 4th) slides down to C# (the 3rd). With no 3rd, bar 3 is neither major nor minor — that is why it floats."}
    ]
  }
}
```

In the drill, sort first (bright or dark? at rest or pulling?) and only then pick a name. If unsure, play the
candidate chords on the keyboard right after the drill's chord. The *How to do it* box under the drill shows the exact
method for your current rung.

```ladder
{
  "skill": "chords",
  "unlocks": 15,
  "intro": "Chord colours (sevenths, sus chords and more) at your own rung."
}
```

```exercise
{
  "id": "w43l2-analysis",
  "type": "roman-analysis",
  "title": "Full symbols, full numerals",
  "spec": {"key": "A", "chords": ["Amaj7", "F#m7", "Dmaj7", "E7", "C#m7", "F#m7", "Bm7", "E7"], "prompt": "symbols", "palette": "chromatic"}
}
```

```exercise
{
  "id": "w43l2-build",
  "type": "build-chord",
  "title": "Build the colours",
  "count": 8,
  "spec": {
    "chords": ["Amaj7", "F#m7", "Dmaj7", "E7sus4", "E7", "Bm7", "Dadd9", "Asus2"],
    "root": "given",
    "prompt": "symbol",
    "key": "A"
  }
}
```

```exercise
{
  "id": "w43l2-play",
  "type": "play-chord",
  "title": "Play the loop with the resolution",
  "spec": {"chords": ["Amaj7", "F#m7", "Dmaj7", "E7sus4", "E7"], "inversion": "any", "sequence": true, "bpm": 60}
}
```

## Between lessons

Play the Amaj7 – F#m7 – Dmaj7 – E7sus4 – E7 loop once a day, then the same loop as plain triads, and compare.
