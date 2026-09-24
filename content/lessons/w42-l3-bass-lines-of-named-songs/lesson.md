---
id: w42-l3-bass-lines-of-named-songs
title: Bass Lines of Named Songs
week: 42
order: 3
phase: p5
duration_min: 50
goals:
  - Recognise three bass archetypes — the outlining ostinato, the running pedal, the riff-as-hook
  - Follow a listening guide for three famous bass-driven songs using your own copy
  - Write three different bass lines for one progression in the DAW
prerequisites: [w42-l2-root-vs-inversion-in-context]
tags: [transcription, bass, reference-songs, daw]
songs:
  - { title: "Stand By Me", artist: "Ben E. King", year: 1961, public_domain: false }
  - { title: "Billie Jean", artist: "Michael Jackson", year: 1982, public_domain: false }
  - { title: "Another One Bites the Dust", artist: "Queen", year: 1980, public_domain: false }
---

# Bass Lines of Named Songs

Some songs are *built* on their bass line — hum the bass and everyone recognises the song. Today you study three of them by reference: open your own copy of each song (streaming is fine), follow the listening guide, and answer the questions. We don't reproduce these bass lines here; instead, each has an original line in the same archetype so you can hear and play the idea.

Treat each song as a [[reference track]]: a finished record you study with a specific question in mind.

## Archetype 1 — the outlining ostinato

A repeating figure that spells out each chord (root, 5th, octave), moving with the harmony.

```example
{
  "title": "Original: outlining ostinato (I–vi–IV–V in D)",
  "bpm": 112, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:8 kick:8 snare:q" },
    { "instrument": "bass", "seq": "D2:q A2:q D3:q A2:q | B1:q F#2:q B2:q F#2:q | G1:q D2:q G2:q D2:q | A1:q E2:q A2:q E2:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**"Stand By Me" — Ben E. King (1961).** A major, about 118 BPM. The whole song cycles I–vi–IV–V–I (A – F#m – D – E – A). Listening guide: (1) start the song and count how many bars pass before the voice enters; (2) hum the bass's first note in each bar — you'll hear A, F#, D, E; (3) notice the line never stops — strings and voices are added on top while the bass repeats unchanged. That's an ostinato carrying the entire form.

## Archetype 2 — the running pedal

Steady eighth notes that circle one root while the chords above shift — a pedal point with a pulse.

```example
{
  "title": "Original: running eighth-note bass in G minor",
  "bpm": 116, "timeSig": "4/4", "key": "Gm",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | Eb2:8 Eb2:8 Bb2:8 Eb2:8 D2:8 Eb2:8 G2:8 Eb2:8 | D2:8 D2:8 A2:8 D2:8 C2:8 D2:8 F#2:8 D2:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**"Billie Jean" — Michael Jackson (1982).** F# minor, about 117 BPM. Listening guide: (1) the bass enters early and repeats a one-bar eighth-note figure that never leaves the home area during the verse; (2) listen to the keyboard chords in the verse — they change, but the bass figure stays, so some chords sit over a non-root bass; (3) at the pre-chorus the bass finally moves (to the VI chord, D) — feel how much lift that single change creates.

## Archetype 3 — the riff as the hook

A syncopated line with rests, often from the minor pentatonic, that *is* the song's hook.

```example
{
  "title": "Original: riff-as-hook in A minor",
  "bpm": 104, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" },
    { "instrument": "bass", "seq": "A1:8 r:8 A1:8 C2:8 r:8 D2:8 E2:8 r:8 | G2:8 r:8 E2:8 r:8 D2:8 C2:8 A1:q | A1:8 r:8 A1:8 C2:8 r:8 D2:8 E2:8 r:8 | G2:8 r:8 E2:8 r:8 D2:8 C2:8 A1:q" }
  ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

**"Another One Bites the Dust" — Queen (1980).** E minor, about 110 BPM. Listening guide: (1) notice how few other instruments play when the riff first appears — the arrangement leaves room; (2) count the rests in the riff: the silence is as important as the notes; (3) the harmony mostly stays on one minor chord — this song's "progression" is really a riff over a vamp.

```exercise
{
  "id": "w42l3-riff",
  "type": "listen",
  "title": "Hear the archetype",
  "spec": {
    "example": {
      "title": "Riff-as-hook",
      "bpm": 104, "timeSig": "4/4", "key": "Am",
      "tracks": [ { "instrument": "bass", "seq": "A1:8 r:8 A1:8 C2:8 r:8 D2:8 E2:8 r:8 | G2:8 r:8 E2:8 r:8 D2:8 C2:8 A1:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Which scale is this riff built from?", "choices": ["A major", "A minor pentatonic", "A harmonic minor", "Whole tone"], "answer": 1 },
      { "q": "How many chord roots does the riff imply?", "choices": ["One (a vamp on A minor)", "Two", "Four", "Eight"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w42l3-songs",
  "type": "quiz",
  "title": "Reference check (use your own copies)",
  "spec": { "questions": [
    { "q": "\"Stand By Me\": which progression cycles under the whole song?", "choices": ["I–IV–V–IV", "I–vi–IV–V", "i–bVII–bVI–V", "ii–V–I"], "answer": 1 },
    { "q": "\"Billie Jean\": what happens in the bass at the pre-chorus?", "choices": ["It stops", "It moves to a new root for the first time (VI)", "It doubles the melody", "It modulates up a tone"], "answer": 1 },
    { "q": "\"Another One Bites the Dust\": what is the harmonic foundation?", "choices": ["A 12-bar blues", "A riff over a single minor-chord vamp", "A ii–V–I cycle", "A descending slash-chord line"], "answer": 1 },
    { "q": "Which archetype is built on a pedal-like figure while chords change above?", "choices": ["Outlining ostinato", "Running pedal", "Riff-as-hook"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "w42l3-bass-a",
  "type": "ear-bass",
  "title": "Bass roots in A major",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "A", "chords": ["I", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w42l3-bass-d",
  "type": "ear-bass",
  "title": "Bass roots in D major",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "D", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w42l3-run",
  "type": "play-melody",
  "title": "Play the running pedal",
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "Gm", "seq": "G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | G2:8 G2:8 D3:8 G2:8 F2:8 G2:8 Bb2:8 G2:8 | Eb2:8 Eb2:8 Bb2:8 Eb2:8 D2:8 Eb2:8 G2:8 Eb2:8 | D2:8 D2:8 A2:8 D2:8 C2:8 D2:8 F#2:8 D2:8", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "w42l3-daw",
  "type": "daw-task",
  "title": "One progression, three bass lines",
  "spec": {
    "template": { "bpm": 104, "key": "D", "tracks": [
      { "instrument": "piano", "seq": "[F#3 A3 D4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w" },
      { "instrument": "bass", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "Over D–Bm–G–A write three 4-bar bass lines, one per bass track: (1) an outlining ostinato, (2) a running eighth-note line, (3) a syncopated riff with rests. Solo each one with the piano and decide which suits a ballad, a dance track and a rock song.",
    "checks": [
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 1, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 1, "track": 2 },
      { "kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 2 },
      { "kind": "note-count", "min": 24, "max": 64, "track": 2 },
      { "kind": "uses-rhythm", "values": ["8", "q"], "minDistinct": 2, "track": 3 },
      { "kind": "in-key", "key": "D", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "bars", "min": 4, "max": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
