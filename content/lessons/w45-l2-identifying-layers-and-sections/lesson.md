---
id: w45-l2-identifying-layers-and-sections
title: Identifying Layers and Sections
week: 45
order: 2
phase: p5
duration_min: 45
goals:
  - Build a layer map — which instrument plays which role in each section
  - Hear how sections are signalled by texture, fills, crashes and register
  - Tell verse, pre-chorus and chorus apart by arrangement alone
prerequisites: [w45-l1-drum-pattern-dictation]
tags: [transcription, arrangement, form, layers, ear]
---

# Identifying Layers and Sections

Pass 7 is layers: *who is playing what, when?* It's also secretly a check on pass 2, because arrangers mark section boundaries by changing the layers. Hear the layers and the form becomes obvious.

## The layer map

A [[layer map]] is a grid: sections across the top, instruments down the side, a mark wherever an instrument plays. For each layer, note two things:

- **Register** — low (bass, kick), mid (chords, pads, keys), high (lead, hats, bright arps).
- **Role** — *sustained* (pads, strings, long bass notes) or *rhythmic* (arpeggios, eighth-note bass, comping).

Listen register by register: first the lows, then the mids, then the highs. It's the same one-question-per-pass idea as the drums yesterday.

## How sections announce themselves

Producers want listeners to feel section changes, so they leave clues:

- **Layers enter or drop out.** The chorus is usually the fullest section.
- **Fills and crashes.** A snare roll or fill in the last bar; a crash on the downbeat of the new section.
- **Rhythm density.** Bass goes from long notes to eighths; drums go from hats-only to full kit.
- **Register lift.** The chorus melody often sits higher than the verse.

Here is Mystery Song #4 in three sections. Same chords in verse and chorus — only the arrangement changes.

```example
{
  "title": "Mystery Song #4 — Section 1",
  "bpm": 104, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8" },
    { "instrument": "bass", "seq": "A1:w | F1:w | C2:w | G1:w" },
    { "instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Mystery Song #4 — Section 2",
  "bpm": 104, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | snare:8 snare:8 snare:8 snare:8 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16" },
    { "instrument": "bass", "seq": "F1:q. F1:8 F1:h | G1:q. G1:8 G1:h" },
    { "instrument": "pad", "seq": "[F3 A3 C4]:w | [G3 B3 D4]:w" },
    { "instrument": "pluck", "seq": "F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Mystery Song #4 — Section 3",
  "bpm": 104, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "A1:8 A1:8 A2:8 A1:8 A1:8 A1:8 A2:8 A1:8 | F1:8 F1:8 F2:8 F1:8 F1:8 F1:8 F2:8 F1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | G1:8 G1:8 G2:8 G1:8 G1:8 G1:8 G2:8 G1:8" },
    { "instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8" },
    { "instrument": "lead", "seq": "E5:q. C5:8 D5:q E5:q | F5:q. E5:8 C5:h | E5:q. C5:8 D5:q E5:q | D5:q. B4:8 G4:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "w45l2-chorus",
  "type": "listen",
  "title": "Layers in section 3",
  "spec": {
    "example": {
      "title": "Section 3",
      "bpm": 104, "timeSig": "4/4", "key": "Am",
      "tracks": [
        { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
        { "instrument": "bass", "seq": "A1:8 A1:8 A2:8 A1:8 A1:8 A1:8 A2:8 A1:8 | F1:8 F1:8 F2:8 F1:8 F1:8 F1:8 F2:8 F1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | G1:8 G1:8 G2:8 G1:8 G1:8 G1:8 G2:8 G1:8" },
        { "instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
        { "instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8" },
        { "instrument": "lead", "seq": "E5:q. C5:8 D5:q E5:q | F5:q. E5:8 C5:h | E5:q. C5:8 D5:q E5:q | D5:q. B4:8 G4:h" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "How many distinct layers (counting drums as one)?", "choices": ["3", "4", "5", "6"], "answer": 2 },
      { "q": "Which layer is sustained in the mid register?", "choices": ["Pluck arpeggio", "Strings", "Lead", "Bass"], "answer": 1 },
      { "q": "What changed in the bass compared with section 1?", "choices": ["Nothing", "Long notes became driving eighths", "It stopped", "It moved up two octaves"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w45l2-form",
  "type": "quiz",
  "title": "Name the sections",
  "spec": { "questions": [
    { "q": "Section 1 (hats and kick only, long bass notes, arpeggio) is most likely…", "choices": ["Chorus", "Verse", "Bridge", "Outro"], "answer": 1 },
    { "q": "Section 2 is two bars on F and G with a snare roll at the end. It is…", "choices": ["A pre-chorus / build", "The chorus", "An intro", "A key change"], "answer": 0 },
    { "q": "Which clue marks the start of section 3?", "choices": ["A crash on beat 1 and the lead entering", "A tempo change", "Silence", "A new key"], "answer": 0 },
    { "q": "Verse and chorus share the chords Am–F–C–G. What makes the chorus feel bigger?", "choices": ["More layers, denser rhythm, a high hook", "A faster tempo", "Different chords", "A different key"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "w45l2-prog",
  "type": "ear-progression",
  "title": "Minor-key loops",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "A", "mode": "minor", "length": 4, "chords": ["i", "iv", "v", "VI", "III", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w45l2-scale",
  "type": "ear-scale",
  "title": "Register and colour warm-up",
  "count": 8,
  "passScore": 0.75,
  "spec": { "scales": ["natural-minor", "dorian", "harmonic-minor", "minor-pentatonic"], "play": "melody" }
}
```

```exercise
{
  "id": "w45l2-hook",
  "type": "play-melody",
  "title": "Play the section 3 hook",
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "Am", "seq": "E5:q. C5:8 D5:q E5:q | F5:q. E5:8 C5:h | E5:q. C5:8 D5:q E5:q | D5:q. B4:8 G4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" } }
}
```

```exercise
{
  "id": "w45l2-map",
  "type": "reflect",
  "title": "Write the layer map",
  "spec": { "prompt": "Write a layer map for Mystery Song #4: for each section (verse, pre-chorus, chorus) list every instrument, its register, and whether it is sustained or rhythmic. Then note two clues that told you a new section had started.", "minWords": 40 }
}
```
