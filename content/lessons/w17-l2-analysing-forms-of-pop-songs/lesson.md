---
id: w17-l2-analysing-forms-of-pop-songs
title: Analysing the Forms of Pop Songs
week: 17
order: 2
phase: p3
duration_min: 45
goals:
  - Map the form of three well-known songs by listening, with bar counts
  - Explain how each song creates contrast between its sections
  - Rebuild a verse-chorus form from blocks in the DAW
prerequisites: [w17-l1-sections-and-forms]
tags: [form, analysis, listening, ear]
songs:
  - { title: "Yesterday", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Let It Be", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Someone Like You", composer: "Adele Adkins, Dan Wilson", public_domain: false }
---

# Analysing the Forms of Pop Songs

Analysing form is the first step of every transcription you will do this year. The method is always the same:

1. Tap the beat and count bars (groups of four beats).
2. Every time something *changes* — melody, chords, drums, number of instruments — write a new letter.
3. When a block comes back, reuse its letter. Label the letters V, PC, C, B at the end.

Before listening to real songs, practise on an original [[AABA]] miniature with 4-bar sections instead of 8.

```example
{
  "title": "Lantern - A A B A in F (4-bar sections)",
  "bpm": 84, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q C5:q | A4:h. r:q | A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q C5:q | A4:h. r:q | D5:h. C5:q | Bb4:q A4:q G4:h | G4:q A4:q Bb4:q D5:q | C5:w | A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q E4:q | F4:h. r:q" },
    { "instrument": "piano", "seq": "[F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w | [F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w | [D3 F3 Bb3]:w | [D3 F3 Bb3]:w | [D3 G3 Bb3]:w | [C3 E3 G3 Bb3]:w | [F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w" },
    { "instrument": "bass", "seq": "F2:h F2:h | D2:h D2:h | Bb2:h C3:h | F2:h F2:h | F2:h F2:h | D2:h D2:h | Bb2:h C3:h | F2:h F2:h | Bb2:h Bb2:h | Bb2:h Bb2:h | G2:h G2:h | C3:h C3:h | F2:h F2:h | D2:h D2:h | Bb2:h C3:h | F2:h F2:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Notice: the B section starts on IV (Bb) and ends on C7 — a half cadence that makes the return of A feel like coming home. The last A ends on F (degree 1) instead of A (degree 3), closing the song.

## Three songs, by reference

Listen to each song on your own player with this lesson open. Count bars; don't read ahead.

| Song | Key / tempo | Form | What to listen for |
|---|---|---|---|
| "Yesterday" — The Beatles | F major, ~97 BPM | A A B A B A + short tag | The A section is only **7 bars** — unusual and still natural. B ("why she had to go...") starts on a minor chord and has a different rhythm. Strings join from the second A: texture change without a new section. |
| "Let It Be" — The Beatles | C major, ~72 BPM | Intro, verses and choruses alternating, instrumental break (guitar solo over verse chords), final choruses, outro | Verse: I–V–vi–IV \| I–V–IV–I (C G Am F \| C G F C). Chorus starts on vi: vi–V–IV–I (Am G F C). The drums enter late — energy grows across the song, not just per section. |
| "Someone Like You" — Adele | A major, ~68 BPM | V – PC – C – V – PC – C – B – C | Piano only, no drums: all the contrast comes from **register**. The verse sits low; the chorus melody leaps up; the chorus progression is I–V–vi–IV (A E F#m D). The pre-chorus climbs to prepare the leap. |

```exercise
{
  "id": "songs-quiz",
  "type": "quiz",
  "title": "Check your listening",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "How many bars long is the A section of \"Yesterday\"?", "choices": ["4", "7", "8", "12"], "answer": 1, "explain": "Seven bars - proof that phrase lengths can bend if the melody feels complete." },
    { "q": "\"Someone Like You\" has no drums. What creates the chorus lift?", "choices": ["A key change", "A faster tempo", "The melody jumping to a higher register", "A new time signature"], "answer": 2 },
    { "q": "The \"Let It Be\" chorus starts on which chord?", "choices": ["I", "IV", "V", "vi"], "answer": 3, "explain": "Am, the vi chord - the same trick as our Paper Boats verse, used in the chorus." },
    { "q": "In \"Yesterday\" the strings enter in the second A. That is a change of...", "choices": ["form", "texture", "key", "tempo"], "answer": 1 },
    { "q": "In our Lantern miniature, why does the B section end on C7?", "choices": ["To modulate to C", "To make a half cadence that pulls back to A in F", "Because C7 is the tonic", "To end the song"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "ear-pop-progressions-a",
  "type": "ear-progression",
  "title": "Pop progressions in A major",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "A", "mode": "major", "length": 4, "chords": ["I", "iii", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "play-a-major-four",
  "type": "play-chord",
  "title": "The chorus progression in A",
  "instructions": "A - E - F#m - D. Find inversions that keep your hand still.",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["A", "E", "F#m", "D"], "inversion": "any", "sequence": true, "bpm": 68 }
}
```

```exercise
{
  "id": "daw-rebuild-form",
  "type": "daw-task",
  "title": "Rebuild a form from blocks",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E4:q E4:8 D4:8 C4:q E4:q | F4:q E4:8 D4:8 C4:h | E4:q G4:8 E4:8 D4:q C4:q | D4:h. r:q | G4:q C5:q C5:q. B4:8 | B4:q D5:q B4:h | A4:q C5:q E5:q. D5:8 | C5:h. r:q" },
      { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" }
    ] },
    "task": "This is Paper Boats: verse (bars 1-4) + chorus (bars 5-8). Duplicate and move blocks on BOTH tracks so the song reads Verse - Chorus - Verse - Chorus - Chorus (20 bars). Play it through and notice how the double chorus at the end feels like an ending.",
    "checks": [
      { "kind": "bars", "min": 20, "max": 20 },
      { "kind": "repetition", "motifBars": 4, "minRepeats": 3, "allowTransposed": false, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 0 },
      { "kind": "has-tracks", "instruments": ["lead", "piano"] }
    ],
    "minBars": 20, "maxBars": 20
  }
}
```

```exercise
{
  "id": "ear-melody-f",
  "type": "ear-melody",
  "title": "Echo the A phrase",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5, 6], "length": 4, "rhythm": "quarters", "answer": "play" }
}
```

```exercise
{
  "id": "reflect-own-analysis",
  "type": "reflect",
  "spec": { "prompt": "Analyse one more song of your choice with the 3-step method. Write: title, key if you can find it, tempo, the form as letters with bar counts (e.g. I4 V8 PC4 C8 ...), and one sentence on what changes at the first chorus.", "minWords": 40 }
}
```
