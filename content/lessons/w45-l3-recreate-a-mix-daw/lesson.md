---
id: w45-l3-recreate-a-mix-daw
title: Recreate a 32-Bar Mix
week: 45
order: 3
phase: p5
duration_min: 50
goals:
  - Transcribe a 32-bar, five-layer mystery song with all seven passes
  - Rebuild it in the DAW, layer by layer, from your form map and layer map
  - A/B your rebuild against the original and fix the differences
prerequisites: [w45-l2-identifying-layers-and-sections]
tags: [transcription, daw, arrangement, workflow]
---

# Recreate a 32-Bar Mix

This is the week's real test: a complete 32-bar song, five layers, two section types. You'll transcribe it and rebuild it. Recreating a mix is the most honest check of a transcription there is — when you A/B the two versions, every mistake is audible.

## The song's shape

Mystery Song #5 has the form **Verse – Chorus – Verse – Chorus**, 8 bars each. Each section is a 4-bar pattern played twice, so the two examples below contain everything you need. (Confirm that yourself during pass 2 — never trust a description you haven't heard!)

```example
{
  "title": "Mystery Song #5 — verse (4-bar pattern, played twice)",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "F2:h. F2:q | C2:h. C2:q | D2:h. D2:q | Bb1:h. Bb1:q" },
    { "instrument": "epiano", "seq": "[F3 A3 C4]:h [F3 A3 C4]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 D4]:h [F3 A3 D4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h" },
    { "instrument": "lead", "seq": "A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Mystery Song #5 — chorus (4-bar pattern, played twice)",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8" },
    { "instrument": "bass", "seq": "Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8" },
    { "instrument": "epiano", "seq": "[F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q" },
    { "instrument": "strings", "seq": "[Bb3 D4 F4]:w | [C4 E4 G4]:w | [A3 D4 F4]:w | [A3 C4 F4]:w" },
    { "instrument": "lead", "seq": "F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Rebuild order

Build in the order you transcribed, and listen back after each layer:

1. Set the tempo and key. Place markers every 8 bars.
2. **Bass** first — it locks the harmony in place.
3. **Chords** (epiano), then the **strings** pad in the chorus only.
4. **Drums**: verse groove, chorus groove, fill into each new section.
5. **Lead** last.

Then A/B: play four bars of the original, four bars of yours. Differences you can hear are worth fixing; differences you can't hear aren't. That's a producer's rule, and it's the right one.

Budget your time: about fifteen minutes for the transcription passes, twenty-five for the rebuild, ten for A/B and fixes. If you run out of time, finish the bass, chords and drums for all 32 bars before touching the lead — a complete skeleton beats a perfect first verse.

```exercise
{
  "id": "w45l3-listen",
  "type": "listen",
  "title": "Passes 1, 2 and 7",
  "spec": {
    "example": {
      "title": "Chorus",
      "bpm": 110, "timeSig": "4/4", "key": "F",
      "tracks": [
        { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8" },
        { "instrument": "bass", "seq": "Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8" },
        { "instrument": "epiano", "seq": "[F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q" },
        { "instrument": "strings", "seq": "[Bb3 D4 F4]:w | [C4 E4 G4]:w | [A3 D4 F4]:w | [A3 C4 F4]:w" },
        { "instrument": "lead", "seq": "F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "Key?", "choices": ["F major", "D minor", "Bb major", "C major"], "answer": 0 },
      { "q": "Which layer is in the chorus but not the verse?", "choices": ["Bass", "Strings", "Epiano", "Lead"], "answer": 1 },
      { "q": "The chorus progression is…", "choices": ["I–V–vi–IV", "IV–V–vi–I", "vi–IV–I–V", "I–IV–V–I"], "answer": 1 },
      { "q": "What happens at the end of chorus bar 4?", "choices": ["A tom fill", "A key change", "Silence", "A tempo change"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w45l3-bass",
  "type": "ear-bass",
  "title": "Bass roots in F",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "F", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w45l3-prog",
  "type": "ear-progression",
  "title": "Progressions in F",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "F", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w45l3-melody",
  "type": "ear-melody",
  "title": "Hook-style fragments in F",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "F", "degrees": [1, 2, 3, 5, 6], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w45l3-chords",
  "type": "play-chord",
  "title": "Verse and chorus chords",
  "spec": { "chords": ["F", "C", "Dm", "Bb", "Bb", "C", "Dm", "F"], "inversion": "any", "sequence": true, "bpm": 72 }
}
```

```exercise
{
  "id": "w45l3-daw",
  "type": "daw-task",
  "title": "Recreate Mystery Song #5 (32 bars)",
  "spec": {
    "template": { "bpm": 110, "key": "F", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "strings", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Rebuild all 32 bars (Verse–Chorus–Verse–Chorus) from your own transcription: five tracks, strings only in the choruses, a fill into each new section. Then A/B against the examples and fix anything you can hear.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "strings", "lead"] },
      { "kind": "bars", "min": 32, "max": 32 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV", "IV", "V", "vi", "I", "IV", "V", "vi", "I", "I", "V", "vi", "IV", "I", "V", "vi", "IV", "IV", "V", "vi", "I", "IV", "V", "vi", "I"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": false, "track": 4 },
      { "kind": "custom", "id": "w45-ab-compare", "note": "Self-check: A/B each section against the original examples." }
    ],
    "minBars": 32, "maxBars": 32
  }
}
```

```exercise
{
  "id": "w45l3-reflect",
  "type": "reflect",
  "title": "What did the A/B reveal?",
  "spec": { "prompt": "List the differences you heard between your rebuild and the original, and which pass each one belonged to (key, form, bass, qualities, melody, groove, layers). Which pass is your weakest right now?", "minWords": 40 }
}
```
