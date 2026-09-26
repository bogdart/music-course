---
id: w19-l2-bass-dictation
title: Bass Dictation and the Kick Lock
week: 19
order: 2
phase: p3
duration_min: 45
goals:
  - Follow the bass line in a full arrangement and write it down
  - Check that bass rhythm and kick drum lock together
  - Play back bass roots of pop progressions in major and hear minor progressions
prerequisites: [w19-l1-roots-fifths-octaves]
tags: [bass, ear, transcription, groove]
songs:
  - { title: "Billie Jean", composer: "Michael Jackson", public_domain: false }
  - { title: "Stand By Me", composer: "Ben E. King, Jerry Leiber, Mike Stoller", public_domain: false }
  - { title: "Another One Bites the Dust", composer: "John Deacon (Queen)", public_domain: false }
---

# Bass Dictation and the Kick Lock

Hearing the bass is the key to decomposing any song: find the bass, and you have the chord roots. The bass is often *felt* more than heard, so we train a method.

## How to take down a bass line

1. **Sing the lowest thing you hear**, quietly, an octave up. Your voice filters out the rest of the band.
2. **Find the first note against the tonic.** Is it 1? 6? Use degree hearing, not note names.
3. **Rhythm first, pitch second.** Tap the bass rhythm — it is usually the kick rhythm.
4. **Track the motion.** Same note, step, or leap? Big leaps in pop bass are usually root to root.
5. **Loop and fill gaps.** One bar at a time.

## The kick lock

In almost every groove the bass notes start where the kick hits. When they do, the two merge into one fat low-end sound; when they don't, the groove feels messy. This [[kick lock]] also helps dictation: *watch the kick, and you know where the bass notes are.*

Here is an original 4-bar groove in A minor (i–VI–III–VII: Am F C G). Bass and kick both hit on 1, the "and" of 2 and the "and" of 3 — then the bass adds two pickups on beat 4 that lead to the next chord.

```example
{
  "title": "Minor groove - bass locked to kick",
  "bpm": 100, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "bass", "seq": "A1:q. A1:8 r:8 A1:8 C2:8 D2:8 | F1:q. F1:8 r:8 F1:8 A1:8 B1:8 | C2:q. C2:8 r:8 C2:8 B1:8 A1:8 | G1:q. G1:8 r:8 G1:8 B1:8 G#1:8" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## By reference

Listen for the bass in these songs (on your own player):

- **"Billie Jean"** — Michael Jackson, F# minor, ~117 BPM. A one-bar eighth-note bass ostinato that outlines the minor chord and runs almost unchanged through the song — the bass *is* the hook.
- **"Stand By Me"** — Ben E. King, A major, ~118 BPM. The bass riff over I–vi–IV–V (A F#m D E) opens the song alone; everything else is built on it.
- **"Another One Bites the Dust"** — Queen, E minor, ~110 BPM. A riff with rests that leaves room for the kick and handclaps — space is part of the line.

```exercise
{
  "id": "listen-groove",
  "type": "listen",
  "title": "Listen for the lock",
  "spec": {
    "example": { "bpm": 100, "timeSig": "4/4", "key": "Am", "tracks": [
      { "instrument": "bass", "seq": "A1:q. A1:8 r:8 A1:8 C2:8 D2:8 | F1:q. F1:8 r:8 F1:8 A1:8 B1:8 | C2:q. C2:8 r:8 C2:8 B1:8 A1:8 | G1:q. G1:8 r:8 G1:8 B1:8 G#1:8" },
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
    ] },
    "questions": [
      { "q": "On which beats does the kick play in each bar?", "choices": ["1 and 3 only", "1, the and-of-2 and the and-of-3", "All four beats", "2 and 4"], "answer": 1 },
      { "q": "The bass note in bar 4, beat 4-and leads up by a half step into bar 1. Which note is it?", "choices": ["G", "G#", "B", "A"], "answer": 1 },
      { "q": "In bar 3 (C chord), the last two bass notes walk down to G. They are...", "choices": ["B, A", "D, E", "C, C", "E, F"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "ear-bass-g",
  "type": "ear-bass",
  "title": "Bass roots in G major",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "G", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "ear-bass-f",
  "type": "ear-bass",
  "title": "Bass roots in F major",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "F", "chords": ["I", "iii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "ear-minor-prog",
  "type": "ear-progression",
  "title": "Minor progressions",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "mode": "minor", "length": 4, "chords": ["i", "iv", "VI", "III", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "daw-dictate-groove",
  "type": "daw-task",
  "title": "Dictate the groove bass",
  "spec": {
    "template": { "bpm": 100, "key": "Am", "tracks": [
      { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Play the example above on loop (don't look at the piano roll). Then write its bass line from memory here: rhythm from the kick first, then roots, then the pickup notes. Compare afterwards and fix any bar you missed.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": true, "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "minRatio": 0.9, "track": 2 },
      { "kind": "note-count", "min": 20, "max": 20, "track": 2 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 4, "allowTransposed": true, "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-kick-to-bass",
  "type": "daw-task",
  "title": "Lock the kick to a bass line",
  "spec": {
    "template": { "bpm": 94, "key": "C", "tracks": [
      { "instrument": "bass", "seq": "C2:q. C2:8 r:q C2:8 C2:8 | A1:q. A1:8 r:q A1:8 A1:8 | F1:q. F1:8 r:q F1:8 F1:8 | G1:q. G1:8 r:q G1:8 G1:8" },
      { "instrument": "drums", "seq": "" }
    ] },
    "task": "Program a drum pattern where the kick plays exactly where each bass note starts, the snare is on 2 and 4, and hi-hats run in eighths. Solo the bass and kick together to check the lock.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [2, 4], "track": 1 },
      { "kind": "custom", "id": "kick-matches-bass", "note": "Self-check: every bass note start has a kick; no kick without a bass note." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
