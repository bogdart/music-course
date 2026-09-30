---
id: w41-l2-through-composed-forms
title: Through-Composed Forms
week: 41
order: 2
phase: p4
duration_min: 45
goals:
  - Tell sectional (repeat-based) forms from through-composed forms
  - Plan a piece as a tension arc instead of a sequence of sections
  - Follow one motif through a 16-bar through-composed miniature
prerequisites: [w41-l1-motif-development-techniques]
tags: [composition, form, development]
songs:
  - { title: "Erlkönig", composer: "Franz Schubert", public_domain: true }
  - { title: "Bohemian Rhapsody", artist: "Queen", public_domain: false }
---

# Through-Composed Forms

Pop forms are **sectional**: verse, chorus, verse, chorus — sections come back. A [[through-composed]] piece keeps moving forward with little or no literal repetition: A B C D… Its unity comes not from repeated sections but from **developed motifs** — the techniques of last lesson.

Schubert's song "Erlkönig" (1815, public domain) is the classic: a father rides through the night with his dying son, and the music never goes back — it follows the story, held together by a galloping piano ostinato. "Bohemian Rhapsody" (by reference) is a pop example: ballad → guitar solo → operatic section → hard rock → coda, with no chorus at all. Your film cue last week was through-composed too.

## Planning with an arc

Without choruses to lean on, you need a **tension arc** — where the piece starts, where it peaks, how it settles:

1. **Statement** — present the motif clearly.
2. **Development** — sequence it, fragment it, move it to new registers. Tension rises.
3. **Climax** — the highest, loudest, busiest point, about two-thirds of the way through.
4. **Resolution** — the motif returns *transformed* (augmented, reharmonised), not repeated literally.

Here is a 16-bar through-composed miniature in A minor (original), built on one four-note motif. Listen in three passes, one question each:

1. **Where is the peak?** Listen once without counting. Raise your hand at the moment it feels highest and most intense; note whether that was early, a bit past the middle, or at the very end.
2. **Where does the opening come back?** Play the first four notes (A–B–C–E) on the keyboard before the pass so they are in your ear, then listen for that shape near the end. Is it faster, slower or the same?
3. **Does anything repeat exactly?** Count bars in fours (tap 4 beats per bar) and ask at each new block: have I heard exactly this before?

Answer, then read the explanations and reveal the notation to follow along.

```exercise
{
  "id": "e1-listen-arc",
  "type": "listen",
  "title": "Find the climax",
  "spec": {
    "example": {
      "bpm": 84, "timeSig": "4/4", "key": "Am", "hidden": true,
      "tracks": [
        { "instrument": "strings", "seq": "A4:8 B4:8 C5:q E5:h | D5:8 C5:8 B4:q A4:h | C5:8 D5:8 E5:q G5:h | F5:8 E5:8 D5:q C5:h | E5:8 D5:8 C5:q A4:h | E5:8 D5:8 C5:q A4:h | C5:8 D5:8 E5:8 C5:8 D5:8 E5:8 F5:8 D5:8 | E5:8 F5:8 G5:8 E5:8 F5:8 G5:8 A5:8 B5:8 | C6:w | B5:h G#5:h | A5:q G5:q F5:q E5:q | D5:h. C5:q | A4:q B4:q C5:h | E5:w | D5:8 C5:8 B4:q G#4:h | A4:w |" },
        { "instrument": "pad", "seq": "[A2 E3]:w | [F2 C3]:w | [C3 G3]:w | [D3 A3]:w | [A2 E3]:w | [F2 C3]:w | [C3 G3]:w | [E3 B3]:w | [A2 E3]:w | [E2 B2]:w | [D3 A3]:w | [G2 D3]:w | [A2 E3]:w | [C3 G3]:w | [E2 B2]:w | [A2 E3]:w |" }
      ]
    },
    "questions": [
      { "q": "Where is the climax — the highest, most intense moment?", "choices": ["near the start", "a bit past the middle", "the very last bar"], "answer": 1, "explain": "Bar 9 of 16: the long C6 after two bars of climbing 8ths." },
      { "q": "Near the end, the opening motif returns. How has it changed?", "choices": ["It is slower: longer notes", "It is faster: shorter notes", "It is exactly the same"], "answer": 0, "explain": "Bars 13–14 play A–B–C–E in quarters, a half and a whole note instead of 8ths, a quarter and a half: augmentation, the motif at half speed." },
      { "q": "Does any 4-bar block come back exactly as before?", "choices": ["yes", "no"], "answer": 1, "explain": "Nothing repeats literally. The motif A–B–C–E is stated in bar 1, sequenced up in bar 3, inverted in bars 5–6 (E–D–C–A goes down where the motif went up), fragmented and climbing in 8ths in bars 7–8, peaks on C6 in bar 9, and comes back in augmentation (twice as slow) in bars 13–14 before the ending." }
    ]
  }
}
```

```exercise
{
  "id": "e2-play-return",
  "type": "play-melody",
  "title": "Play the statement and the augmented return",
  "passScore": 0.7,
  "spec": {
    "bpm": 80, "timeSig": "4/4", "key": "Am",
    "seq": "A4:8 B4:8 C5:q E5:h | D5:8 C5:8 B4:q A4:h | A4:q B4:q C5:h | E5:w | D5:8 C5:8 B4:q G#4:h | A4:w |",
    "showStaff": true, "showKeyboard": true, "countIn": 1
  }
}
```

```exercise
{
  "id": "e3-form-quiz",
  "type": "quiz",
  "title": "Sectional or through-composed?",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "Verse–chorus–verse–chorus–bridge–chorus is…", "choices": ["sectional", "through-composed"], "answer": 0 },
      { "q": "A 60-second film cue following a scene from calm to chase to crash is usually…", "choices": ["sectional", "through-composed"], "answer": 1 },
      { "q": "Without repeated sections, what gives a through-composed piece unity?", "choices": ["a constant tempo", "developed motifs", "many different melodies"], "answer": 1 },
      { "q": "In a typical arc, the climax falls about…", "choices": ["at the start", "halfway", "two-thirds of the way through", "in the last bar"], "answer": 2 }
    ]
  }
}
```

## Ear

Melody play-back: replay, say the directions to yourself, find the first note by searching, then follow the path; chunk long ones. Progressions: find home first, then follow the bass and name each chord by its role and colour. The *How to do it* box under each drill shows the exact method for your current rung.

```ladder
{ "skill": "melody", "unlocks": 23, "intro": "Following a motif through a piece starts with remembering it — play-back at your current rung." }
```

```ladder
{ "skill": "progressions", "unlocks": 20, "intro": "Progressions at your current rung (minor-key chords are on this ladder too)." }
```

## Make it

1. Write a new 2-bar motif first and nothing else. Play it five times: if you can't remember it after that, simplify it.
2. Before writing further, jot the highest note you plan for each 2-bar block — rising to bar 8, falling after.
3. Bars 3–7: sequence it up, then fragment it (its first 2–3 notes, climbing). Bar 8: the highest, longest note.
4. Bars 9–12: the motif again, but changed in one way only — slower (augmentation) is the easiest to hear.
5. **Check by ear:** play the whole thing. Raise your hand at the peak — is it around bar 8? Then play bars 1–2 and 9–10 back to back: can you hear they're related? If not, keep the original pitches and change only the rhythm.

```exercise
{
  "id": "e4-daw-arc",
  "type": "daw-task",
  "title": "Plan and write an arc",
  "instructions": "A 12-bar through-composed miniature from a new motif: statement (bars 1–2), development (3–7), climax around bar 8 (your highest note), transformed return (9–12). No 2-bar block may repeat literally. Pad chords are optional.",
  "spec": {
    "template": {
      "bpm": 84, "key": "C", "timeSig": "4/4",
      "tracks": [ { "instrument": "strings", "seq": "" }, { "instrument": "pad", "seq": "" } ]
    },
    "task": "12-bar through-composed miniature with a clear arc.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "contour", "shape": "arch", "track": 0 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 0 },
      { "kind": "note-count", "min": 24, "track": 0 },
      { "kind": "custom", "id": "no-literal-repeat", "note": "Self-check: no 2-bar block is copied unchanged." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

## Between lessons

Listen to any film trailer or long instrumental track and raise your hand at its peak — roughly where is it? Ten minutes of ladder drills on the Practice page.
