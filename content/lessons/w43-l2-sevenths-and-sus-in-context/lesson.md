---
id: w43-l2-sevenths-and-sus-in-context
title: Sevenths and Sus Chords in Context
week: 43
order: 2
phase: p5
duration_min: 45
goals:
  - Hear which chords in a progression carry a 7th, and which kind (maj7, m7, dom7)
  - Hear sus4 and sus2 chords and where a suspension resolves
  - Transcribe a four-chord progression with full chord symbols, not just triads
prerequisites: [w43-l1-qualities-within-progressions]
tags: [transcription, sevenths, sus, ear]
---

# Sevenths and Sus Chords in Context

Real songs rarely use plain triads all the way through. A transcription that says "A – F#m – D – E" might be *correct* but still sound thin when you play it back, because the record actually has Amaj7, F#m7, Dmaj7 and E7sus4. Today's pass-4 skill is hearing the colour on top of the triad.

## Where 7ths live

Seventh chords follow the diatonic default too:

- **maj7** sits on I and IV — dreamy, soft, "open window".
- **m7** sits on ii, iii and vi — mellow, warm, a little jazzy.
- **dom7** sits on V — or on any chord acting as a V to something (secondary dominant). It *pulls*.

So once you know the roman numeral, you only have to answer one question: *is there a 7th at all?* Listen for a note a step below the octave of the root. Hum the root, hum up to the octave, then drop a step — if the chord has that note, it's a 7th chord.

## Sus chords

A [[suspension]] chord replaces the 3rd with the 4th (sus4) or the 2nd (sus2). With no 3rd, it's neither major nor minor — it floats. In pop, **sus4 usually resolves to the major chord on the same root**, often within the same bar; sus2 frequently doesn't resolve at all and is simply a colour (you met its cousin, add9, in week 27: add9 keeps the 3rd *and* adds the 2nd on top).

The key test: when the root stays but the chord suddenly "settles", you just heard a sus resolve.

```example
{
  "title": "Amaj7 – F#m7 – Dmaj7 – E7sus4 → E7",
  "bpm": 84, "timeSig": "4/4", "key": "A",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "A2:q. A2:8 A2:h | F#2:q. F#2:8 F#2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h" },
    { "instrument": "epiano", "seq": "[A3 C#4 E4 G#4]:w | [A3 C#4 E4 F#4]:w | [A3 C#4 D4 F#4]:w | [A3 B3 D4 E4]:h [G#3 B3 D4 E4]:h" }
  ],
  "show": ["keyboard", "pianoroll"],
  "loop": true
}
```

```chords
{ "key": "A", "bars": ["Amaj7", "F#m7", "Dmaj7", "E7sus4", "E7"], "roman": true, "play": true, "bpm": 84 }
```

(The chart gives the sus and its resolution a bar each so you can hear them separately; in the loop they share bar 4.) Listen to bar 4: the bass stays on E, the A in the chord slides down to G# — suspension, then resolution. That tiny motion is one of the most common sounds in pop.

```exercise
{
  "id": "w43l2-qual",
  "type": "ear-chord",
  "title": "Seventh and sus qualities",
  "count": 12,
  "passScore": 0.75,
  "spec": { "qualities": ["maj7", "min7", "dom7", "sus2", "sus4"], "inversions": [0], "voicing": "mixed", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w43l2-prog-a",
  "type": "ear-progression",
  "title": "Seventh-chord progressions in A",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "A", "mode": "major", "length": 4, "chords": ["Imaj7", "ii7", "IVmaj7", "V7", "vi7", "Vsus4"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w43l2-prog-f",
  "type": "ear-progression",
  "title": "Seventh-chord progressions in F",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "F", "mode": "major", "length": 4, "chords": ["Imaj7", "ii7", "iii7", "IVmaj7", "V7", "vi7"], "style": "block" }
}
```

```exercise
{
  "id": "w43l2-analysis",
  "type": "roman-analysis",
  "title": "Full symbols, full numerals",
  "spec": { "key": "A", "chords": ["Amaj7", "F#m7", "Dmaj7", "E7", "C#m7", "F#m7", "Bm7", "E7"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w43l2-build",
  "type": "build-chord",
  "title": "Build the colours",
  "count": 8,
  "spec": { "chords": ["Amaj7", "F#m7", "Dmaj7", "E7sus4", "E7", "Bm7", "Dadd9", "Asus2"], "root": "given", "prompt": "symbol", "key": "A" }
}
```

```exercise
{
  "id": "w43l2-play",
  "type": "play-chord",
  "title": "Play the progression with the resolution",
  "spec": { "chords": ["Amaj7", "F#m7", "Dmaj7", "E7sus4", "E7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```
