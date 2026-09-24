---
id: w30-l1-borrowed-chords
title: Borrowed Chords (Modal Interchange)
week: 30
order: 1
phase: p4
duration_min: 40
goals:
  - List the chords C major can borrow from C minor (iv, bIII, bVI, bVII, iiø7)
  - Play and hear the IV–iv–I and bVI–bVII–I cadences
  - Identify borrowed chords by ear inside 4-chord progressions
prerequisites: [w29-l3-comping-a-standard-daw, w16-l2-relative-parallel-and-borrowed]
tags: [harmony, borrowed-chords, modal-interchange, ear]
songs:
  - { title: "In My Life", artist: "The Beatles", public_domain: false }
  - { title: "Creep", artist: "Radiohead", public_domain: false }
---

# Borrowed Chords (Modal Interchange)

In Phase 2 you met the borrowed iv and bVII. Now we open the whole cupboard. [[modal interchange]] means taking chords from the **parallel** key — same tonic, different mode — and using them in your home key. The most common lender is the parallel minor: C major borrows from C minor.

## The palette

C minor's chords that C major does not have:

| Borrowed | Chord | Feeling |
|----------|-------|---------|
| iv | Fm | bittersweet, nostalgic |
| bIII | Eb | bold, rock |
| bVI | Ab | wide, cinematic |
| bVII | Bb | open, anthemic |
| iiø7 | Dm7b5 | dark pre-dominant |

All of them contain one of the minor-scale notes Eb, Ab or Bb. That single "wrong" note is what gives the colour.

## Two famous cadences

**IV–iv–I.** The major IV turns minor for a moment: F → Fm → C. The note A slides down to Ab and then to G. By reference: The Beatles' "In My Life" (key of A) slips a minor iv into its verse; Radiohead's "Creep" (G) cycles I–III–IV–iv, and that final minor chord is the ache in the song.

**bVI–bVII–I.** Two major chords borrowed from minor march up to the tonic: Ab → Bb → C. Rock anthems and video-game "level complete" fanfares love it — it sounds triumphant precisely because it skips V.

```example
{
  "title": "IV–iv–I, then bVI–bVII–I (C major)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[F3 A3 C4]:w | [F3 Ab3 C4]:w | [E3 G3 C4]:w | r:w | [Ab3 C4 Eb4]:w | [Bb3 D4 F4]:w | [C4 E4 G4]:w | r:w |" },
    { "instrument": "bass", "seq": "F2:w | F2:w | C2:w | r:w | Ab1:w | Bb1:w | C2:w | r:w |" }
  ],
  "show": ["keyboard", "staff"]
}
```

## Drills

```exercise
{
  "id": "e1-build-borrowed",
  "type": "build-chord",
  "title": "Build the borrowed chords from their roman numerals",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["Fm", "Eb", "Ab", "Bb", "Dm7b5", "Fm6", "Abmaj7", "Bb7"], "root": "given", "prompt": "roman", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-borrowed-loop",
  "type": "play-chord",
  "title": "Play both cadences",
  "instructions": "Right hand, nearest inversion each time.",
  "count": 8, "passScore": 0.75,
  "spec": { "chords": ["F", "Fm", "C", "Ab", "Bb", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3-play-c-minor",
  "type": "play-scale",
  "title": "The lender: C natural minor",
  "count": 6, "passScore": 0.75,
  "spec": { "root": "C", "scale": "natural-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

```exercise
{
  "id": "e4-ear-borrowed",
  "type": "ear-progression",
  "title": "Find the borrowed chord",
  "instructions": "Each progression starts on I. Listen for the moment the light changes.",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "iv", "V7", "bVI", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e5-ear-quality",
  "type": "ear-chord",
  "title": "Major, minor or m7b5?",
  "count": 10, "passScore": 0.8,
  "spec": { "qualities": ["maj", "min", "m7b5", "maj7"], "inversions": [0, 1], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6-borrowed-quiz",
  "type": "quiz",
  "title": "Which note gives it away?",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "In C major, which note makes Fm sound borrowed?", "choices": ["F", "Ab", "C", "Eb"], "answer": 1 },
    { "q": "bVI in G major is…", "choices": ["Eb", "E", "Em", "C"], "answer": 0 },
    { "q": "Borrowing from the parallel minor means, for C major, borrowing from…", "choices": ["A minor", "C minor", "G minor", "E minor"], "answer": 1 },
    { "q": "The bVI–bVII–I cadence avoids which chord?", "choices": ["I", "IV", "V", "vi"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "e7-daw-borrowed",
  "type": "daw-task",
  "title": "Eight bars, two borrowed colours",
  "instructions": "Pad track: an 8-bar progression in C major that uses at least two different borrowed chords and ends on I. Bass track: roots. Put your favourite borrowed chord just before the last bar.",
  "spec": {
    "template": { "bpm": 84, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "pad", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "8 bars in C major with ≥2 borrowed chords (iv, bIII, bVI, bVII or iiø7), ending on C.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pad", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "note-count", "min": 16, "track": 0 },
      { "kind": "custom", "id": "two-borrowed", "note": "Self-check: at least two chords contain Eb, Ab or Bb." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
