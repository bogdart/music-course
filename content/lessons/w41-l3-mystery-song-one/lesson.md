---
id: w41-l3-mystery-song-one
title: Mystery Song One — All Seven Passes
week: 41
order: 3
phase: p5
duration_min: 50
goals:
  - Run all seven listening passes on an 8-bar mystery song and fill in a form map
  - Use looping and slow-down to hear the melody in detail
  - Rebuild the song in the DAW from your transcription and compare
prerequisites: [w41-l2-finding-key-and-tempo]
tags: [transcription, workflow, daw, ballad]
---

# Mystery Song One — All Seven Passes

Today you do the whole workflow once, start to finish, on a short song. Speed doesn't matter yet — the order does. Keep a [[form map]] open (paper or the reflect box at the end) and fill in one line after each pass.

## The tools you have

- **Loop.** Every example can loop. Loop a section until the question you're asking has an answer — don't restart the whole song.
- **Slow-down.** The app can play your *own* sketches at any tempo, and the lesson gives you a slowed copy of the mystery song below. Slow listening is for melody and rhythm details; key and form are easier at full speed.
- **Your keyboard.** Every guess gets tested by playing along. If it clashes, it's wrong. That's the fastest feedback you have.

## The song

```example
{
  "title": "Mystery Song #1 — full speed",
  "bpm": 76, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:8 snare:8" },
    { "instrument": "bass", "seq": "G2:q. G2:8 G2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | C2:q. C2:8 C2:h | C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | G2:q. G2:8 G2:h | E2:q. E2:8 E2:h" },
    { "instrument": "piano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h" },
    { "instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Mystery Song #1 — slowed to 52 BPM, bass and melody only",
  "bpm": 52, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "bass", "seq": "G2:q. G2:8 G2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | C2:q. C2:8 C2:h | C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | G2:q. G2:8 G2:h | E2:q. E2:8 E2:h" },
    { "instrument": "lead", "seq": "B4:q D5:q B4:8 A4:8 G4:q | A4:q. A4:8 F#4:q A4:q | G4:q B4:q E5:q. D5:8 | C5:h. r:q | E5:q E5:q D5:q C5:q | D5:q. C5:8 B4:q A4:q | B4:q D5:q G5:h | E5:h. r:q" }
  ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

Work through the passes with the exercises below. Hints for when you are stuck: the crash cymbal marks a section change; the drum fill (the tom at the end of bar 4) announces it one beat early. That's how producers signpost form — use it.

When an answer comes back wrong, don't just retry: ask *which pass* failed. A wrong chord with the right bass note is a quality problem (pass 4). A wrong chord with a wrong bass note is a root problem (pass 3) — go back one step. Diagnosing your own mistakes this way is what turns practice into progress.

```exercise
{
  "id": "w41l3-map",
  "type": "listen",
  "title": "Passes 1–2: key, tempo, form",
  "spec": {
    "example": {
      "title": "Mystery Song #1",
      "bpm": 76, "timeSig": "4/4", "key": "G",
      "tracks": [
        { "instrument": "bass", "seq": "G2:q. G2:8 G2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | C2:q. C2:8 C2:h | C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | G2:q. G2:8 G2:h | E2:q. E2:8 E2:h" },
        { "instrument": "piano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [G3 C4 E4]:h [G3 C4 E4]:h | [F#3 A3 D4]:h [F#3 A3 D4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 B3 E4]:h [G3 B3 E4]:h" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "Key?", "choices": ["G major", "E minor", "D major", "C major"], "answer": 0 },
      { "q": "Tempo?", "choices": ["About 52", "About 76", "About 100", "About 152"], "answer": 1 },
      { "q": "How is the 8 bars divided?", "choices": ["2 + 6", "4 + 4 (verse, then chorus)", "8 bars of one section", "3 + 5"], "answer": 1, "explain": "The fill in bar 4 and the crash in bar 5 mark a new section; the melody also jumps up." }
    ]
  }
}
```

```exercise
{
  "id": "w41l3-bass",
  "type": "ear-bass",
  "title": "Pass 3: bass roots in G",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "G", "chords": ["I", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w41l3-prog",
  "type": "ear-progression",
  "title": "Pass 4: roots + qualities",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w41l3-melody",
  "type": "ear-melody",
  "title": "Pass 5: melody fragments",
  "instructions": "Short fragments in the style of the song's melody. Play them back.",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5, 6], "length": 4, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w41l3-rhythm",
  "type": "ear-rhythm",
  "title": "Pass 6: rhythm cells",
  "count": 8,
  "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "w41l3-rebuild",
  "type": "daw-task",
  "title": "Pass 7: rebuild Mystery Song #1",
  "spec": {
    "template": { "bpm": 76, "key": "G", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "From your form map alone, rebuild all 8 bars: drums (snare on 2 and 4), bass roots, piano chords and the melody. Then play the original and your version back to back. Self-check: every bar's bass root matches, and the melody's hook in bar 7 lands on the same note.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "IV", "V", "I", "vi"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 3 },
      { "kind": "custom", "id": "w41-compare-original", "note": "Self-check: A/B your rebuild against the original, bar by bar." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "w41l3-formmap",
  "type": "reflect",
  "title": "Your first complete form map",
  "spec": { "prompt": "Write the full form map for Mystery Song #1: key, tempo, each section with bars and roman numerals, melody notes on the hook, the drum pattern, and which instrument plays which role. Which pass was hardest?", "minWords": 50 }
}
```
