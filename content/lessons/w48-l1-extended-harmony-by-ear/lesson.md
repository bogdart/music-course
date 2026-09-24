---
id: w48-l1-extended-harmony-by-ear
title: "Transcribe 3: R&B — Extended Harmony by Ear"
week: 48
order: 1
phase: p5
duration_min: 45
goals:
  - Transcribe extended chords family-first — root, then maj/min/dom family, then the extensions
  - Hear rootless voicings as complete chords by combining them with the bass
  - Label a ii9–V13–Imaj9–vi9 neo-soul loop by ear
prerequisites: [w47-l3-dance-reference-analysis]
tags: [transcription, rnb, neo-soul, extended-chords, ear]
---

# Transcribe 3: R&B — Extended Harmony by Ear

R&B and neo-soul are where pass 4 gets rich. Almost nothing is a plain triad: minor 9ths, dominant 13ths, major 9ths. The good news is that the seven-pass method doesn't change. You just add one more question at the end of pass 4.

## Family first, then colour

Extended chords overwhelm you if you try to name them in one go. Do it in three steps:

1. **Root** — from the bass, as always (pass 3).
2. **Family** — does it sound *major* (bright, restful), *minor* (soft, dark) or *dominant* (bright but restless, wants to move)? This is the maj7 / m7 / dom7 decision you already make well.
3. **Colour** — is there extra shimmer on top? In R&B the default answer is "yes, a 9th". On dominants, a very bright, open top often means a 13th.

Then use the [[chord-family default]] for the style: in neo-soul, ii is usually m9, V is usually 13 (or 9, or sus), I is usually maj9, vi is m9. As with diatonic defaults, you're confirming a prediction, not guessing from scratch.

## Rootless voicings

Keyboard players in this style leave the root to the bass — you practised these in week 28. The keys alone can sound ambiguous: the Gm9 below, without its G, looks exactly like a Bbmaj7. Always combine layers: **bass root + keyboard colour = chord symbol**.

```example
{
  "title": "Mystery Track \"Velvet\" — full groove",
  "bpm": 84, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" },
    { "instrument": "drums", "seq": "hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16" },
    { "instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q" },
    { "instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8" },
    { "instrument": "lead", "seq": "r:8 A4:8 Bb4:8 A4:8 F4:q D4:q | E4:8 F4:8 G4:8 A4:8~ A4:h | r:8 G4:8 A4:8 C5:8 E5:q. D5:8 | C5:q A4:8 F4:8 E4:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "\"Velvet\" — keys and bass only, slowed",
  "bpm": 64, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q" }, { "instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8" } ],
  "show": ["keyboard"],
  "loop": true
}
```

```chords
{ "key": "F", "bars": ["Gm9", "C13", "Fmaj9", "Dm9"], "roman": true, "play": true, "bpm": 84 }
```

```exercise
{
  "id": "w48l1-listen",
  "type": "listen",
  "title": "Family first",
  "spec": {
    "example": {
      "title": "Velvet — keys and bass",
      "bpm": 64, "timeSig": "4/4", "key": "F",
      "tracks": [ { "instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q" }, { "instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8" } ],
      "loop": true
    },
    "questions": [
      { "q": "Bar 1: bass G, keys Bb–D–F–A. Family and chord?", "choices": ["Minor: Gm9", "Major: Bbmaj7", "Dominant: G9", "Minor: Gm6"], "answer": 0 },
      { "q": "Bar 2 sounds bright but restless. Family?", "choices": ["Major", "Minor", "Dominant", "Diminished"], "answer": 2 },
      { "q": "Which bar sounds most like 'home'?", "choices": ["1", "2", "3", "4"], "answer": 2 },
      { "q": "The whole loop in numerals?", "choices": ["ii9–V13–Imaj9–vi9", "vi9–ii9–V13–I", "I–IV–V–vi", "ii–V–I–IV"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w48l1-family",
  "type": "ear-chord",
  "title": "Seventh-chord families",
  "count": 12,
  "passScore": 0.8,
  "spec": { "qualities": ["maj7", "min7", "dom7", "m7b5"], "inversions": [0], "voicing": "open", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w48l1-prog-f",
  "type": "ear-progression",
  "title": "Jazz-pop loops in F",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "F", "mode": "major", "length": 4, "chords": ["Imaj7", "ii7", "iii7", "IVmaj7", "V7", "vi7"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w48l1-prog-eb",
  "type": "ear-progression",
  "title": "Jazz-pop loops in Eb",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "Eb", "mode": "major", "length": 4, "chords": ["Imaj7", "ii7", "IVmaj7", "V7", "vi7"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "w48l1-build",
  "type": "build-chord",
  "title": "Build the Velvet chords",
  "count": 8,
  "spec": { "chords": ["Gm9", "C13", "Fmaj9", "Dm9", "Bbmaj9", "A7", "Em7b5", "C9"], "root": "given", "prompt": "symbol", "key": "F" }
}
```

```exercise
{
  "id": "w48l1-play",
  "type": "play-chord",
  "title": "Play the loop with rootless voicings",
  "instructions": "Left hand plays the root, right hand the rootless voicing from the example — together they make the full chord.",
  "spec": { "chords": ["Gm9", "C13", "Fmaj9", "Dm9"], "inversion": "any", "sequence": true, "bpm": 64 }
}
```
