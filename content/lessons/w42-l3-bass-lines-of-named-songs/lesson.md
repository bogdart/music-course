---
id: w42-l3-bass-lines-of-named-songs
title: Bass Lines of Named Songs
week: 42
order: 3
phase: p5
duration_min: 50
goals:
  - "Recognise three bass archetypes: the outlining ostinato, the running figure, the riff as the hook"
  - Listen to three famous bass-driven records and commit to answers before reading the facts
  - Transcribe an original riff and write two contrasting bass lines for one progression
prerequisites: [w42-l2-root-vs-inversion-in-context]
tags: [transcription, bass, reference-songs, daw]
songs:
  - { title: "Stand By Me", artist: "Ben E. King", year: 1961, public_domain: false }
  - { title: "Billie Jean", artist: "Michael Jackson", year: 1982, public_domain: false }
  - { title: "Another One Bites the Dust", artist: "Queen", year: 1980, public_domain: false }
---

# Bass Lines of Named Songs

Some songs are *built* on their bass line: hum the bass and people recognise the song. Today you study three of them as
[[reference track]]s, [[verdict first]]. The app never plays them — open your own copy (streaming is fine), listen with one question at a
time, and **answer the quiz before you read anything about the song**. The facts are in the explanations, revealed after
you commit. We don't reproduce these bass lines; each archetype gets an original line so you can hear and play the idea.

## Archetype 1 — the outlining ostinato

A repeating figure that spells out each chord (root, 5th, octave) and moves with the harmony.

```example
{
  "title": "Original: outlining ostinato",
  "bpm": 112,
  "timeSig": "4/4",
  "key": "D",
  "tracks": [
    {"instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q"},
    {"instrument": "bass", "seq": "D2:q A2:q D3:q A2:q | B1:q F#2:q B2:q F#2:q | G1:q D2:q G2:q D2:q | A1:q E2:q A2:q E2:q"}
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Archetype 2 — the running figure

Steady eighth notes circling the root of the moment, bar after bar: a busy, driving figure that keeps the pulse going.
In some songs the figure stays on the *same* root while the chords above it change — then it works like a pedal point
with a pulse. In this original one it follows the roots.

```example
{
  "title": "Original: running eighth-note bass",
  "bpm": 116,
  "timeSig": "4/4",
  "key": "Gm",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | Eb2:8 Eb2:8 Bb2:8 Eb2:8 D2:8 Eb2:8 G2:8 Eb2:8 | D2:8 D2:8 A2:8 D2:8 C2:8 D2:8 F#2:8 D2:8"}
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Archetype 3 — the riff as the hook

A syncopated line with rests, often from the minor pentatonic, that *is* the song's hook. This one is hidden: you'll
transcribe it below.

```example
{
  "title": "Original: riff-as-hook",
  "bpm": 104,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q"},
    {"instrument": "bass", "seq": "A1:8 r:8 A1:8 C2:8 r:8 D2:8 E2:8 r:8 | G2:8 r:8 E2:8 r:8 D2:8 C2:8 A1:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w42l3-riff",
  "type": "ear-bass",
  "title": "Transcribe the riff",
  "instructions": "Two bars, ten notes, slowed down. Rests are part of the riff but you only play the notes.",
  "srs": false,
  "spec": {
    "key": "Am",
    "chords": ["i", "iv", "v"],
    "answer": "play",
    "example": {
      "title": "Riff-as-hook, slowed",
      "bpm": 80,
      "timeSig": "4/4",
      "tracks": [{"instrument": "bass", "seq": "A1:8 r:8 A1:8 C2:8 r:8 D2:8 E2:8 r:8 | G2:8 r:8 E2:8 r:8 D2:8 C2:8 A1:q"}]
    }
  }
}
```

## Three records, verdict first

Listen to each song at least twice before answering. First time: just enjoy it. Second time: bass only.

```exercise
{
  "id": "w42l3-standbyme",
  "type": "quiz",
  "title": "\"Stand By Me\" — Ben E. King (1961)",
  "spec": {
    "questions": [
      {"q": "Where is home?", "choices": ["A", "E", "F#", "D"], "answer": 0, "explain": "A: the song keeps coming to rest there."},
      {"q": "Hum the bass note at the start of each bar through the intro. How many different notes before the pattern starts again?", "choices": ["2", "3", "4", "6"], "answer": 2, "explain": "Four: A – F# – D – E, then back to A. The song cycles I – vi – IV – V – I in A major."},
      {"q": "Which archetype is it?", "choices": ["Outlining ostinato", "Running figure", "Riff as hook"], "answer": 0, "explain": "An outlining ostinato: one repeating figure spelling each chord, carrying the whole form while voices and strings are added on top."},
      {"q": "Tap along. Roughly how fast?", "choices": ["About 80", "About 118", "About 150", "About 170"], "answer": 1, "explain": "About 118 BPM."}
    ]
  }
}
```

```exercise
{
  "id": "w42l3-billiejean",
  "type": "quiz",
  "title": "\"Billie Jean\" — Michael Jackson (1982)",
  "spec": {
    "questions": [
      {"q": "During a verse, what does the bass do when the keyboard chords change?", "choices": ["It follows each new chord root", "It keeps repeating the same one-bar figure"], "answer": 1, "explain": "It keeps repeating: a one-bar eighth-note figure around F#, so some chords sit over a non-root bass — a running figure that works like a pedal."},
      {"q": "Major or minor home?", "choices": ["Major", "Minor"], "answer": 1, "explain": "Minor: F# minor, about 117 BPM."},
      {"q": "Where does the bass first leave its home figure for new roots?", "choices": ["In the very first bar", "At the pre-chorus", "Only in the outro", "Never"], "answer": 1, "explain": "At the pre-chorus the bass moves to new roots (starting on D, the VI chord) — feel how much lift that single change gives."}
    ]
  }
}
```

```exercise
{
  "id": "w42l3-anotherone",
  "type": "quiz",
  "title": "\"Another One Bites the Dust\" — Queen (1980)",
  "spec": {
    "questions": [
      {"q": "When the bass line first appears, how many other instruments play with it?", "choices": ["Almost none — the arrangement leaves room", "A full band and strings"], "answer": 0},
      {"q": "How many different chords sit under the riff in a verse?", "choices": ["One (a vamp)", "Two", "Four", "Eight"], "answer": 0, "explain": "Essentially one minor chord: a single-chord vamp, in E minor, about 110 BPM."},
      {"q": "Which archetype?", "choices": ["Outlining ostinato", "Running figure", "Riff as hook"], "answer": 2, "explain": "The riff is the hook — and its rests matter as much as its notes."}
    ]
  }
}
```

```ladder
{"skill": "roots", "unlocks": 15, "intro": "One more round of bass hearing at your own rung."}
```

```exercise
{
  "id": "w42l3-run",
  "type": "play-melody",
  "title": "Play the running figure",
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "key": "Gm",
    "seq": "G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | Eb2:8 Eb2:8 Bb2:8 Eb2:8 D2:8 Eb2:8 G2:8 Eb2:8 | D2:8 D2:8 A2:8 D2:8 C2:8 D2:8 F#2:8 D2:8",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "w42l3-daw",
  "type": "daw-task",
  "title": "One progression, two bass lines",
  "spec": {
    "template": {
      "bpm": 104,
      "key": "D",
      "tracks": [
        {"instrument": "piano", "seq": "[F#3 A3 D4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w"},
        {"instrument": "bass", "seq": ""},
        {"instrument": "bass", "seq": ""}
      ]
    },
    "task": "Over D – Bm – G – A write two 4-bar bass lines, one per bass track: (1) an outlining ostinato (root, 5th, octave in quarter notes), (2) a syncopated riff with rests. Solo each with the piano and decide which one suits a ballad and which a rock song.",
    "checks": [
      {
        "kind": "chord-tones-on-beats",
        "beats": [1],
        "progression": ["I", "vi", "IV", "V"],
        "barsPerChord": 1,
        "minRatio": 1,
        "track": 1
      },
      {
        "kind": "chord-tones-on-beats",
        "beats": [1],
        "progression": ["I", "vi", "IV", "V"],
        "barsPerChord": 1,
        "minRatio": 0.75,
        "track": 2
      },
      {"kind": "has-rest", "minDuration": "8", "min": 2, "track": 2},
      {"kind": "in-key", "key": "D", "scale": "major", "allowPassing": true, "track": 2},
      {"kind": "bars", "min": 4, "max": 4}
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```
