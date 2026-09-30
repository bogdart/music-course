---
id: w06-l3-diatonic-triads-and-roman-numerals
title: The Chords of C Major and Roman Numerals
week: 6
order: 3
phase: p1
duration_min: 50
goals:
  - Build a triad on every degree of C major and label it I ii iii IV V vi vii°
  - Play I–V–vi–IV with smooth hand positions
  - Hear degree 6 (la) — or find it on the keyboard; write chords + melody over I–V–vi–IV in the DAW
prerequisites: [w06-l2-minor-triads]
tags: [chords, harmony, roman-numerals, progressions, daw]
songs:
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
  - { title: "With or Without You", artist: "U2", public_domain: false }
---

# The chords of C major

Build a triad on each note of the C major scale, using only white keys, and you get the seven [[diatonic]] chords of C major — the family of chords that belong to the key:

| Degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Chord | C | Dm | Em | F | G | Am | B° |
| Quality | major | minor | minor | major | major | minor | diminished |
| [[Roman numeral]] | **I** | ii | iii | **IV** | **V** | vi | vii° |

Upper-case = major, lower-case = minor, ° = diminished (last lesson's B–D–F). The pattern **major, minor, minor, major, major, minor, diminished** is the same in *every* major key — which is why musicians talk in numerals: "I–V–vi–IV" means C–G–Am–F in C, and the same relationships in any key.

```example
{
  "title": "The seven triads of C major, I to vii° and back to I",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [D4 F4 A4]:h | [E4 G4 B4]:h [F4 A4 C5]:h | [G4 B4 D5]:h [A4 C5 E5]:h | [B4 D5 F5]:h [C5 E5 G5]:h" } ],
  "show": ["staff", "keyboard"]
}
```

**Try it:** put fingers 1–3–5 on C E G and walk the same hand shape up the white keys: C, Dm, Em, F, G, Am, B°, C — saying the numeral aloud for each. Your hand shape never changes; the key decides which chords come out major or minor. Listen as you go: can you tell which ones sound darker? If not yet, no problem — the chord ladder trains that. Here you only need the pattern.

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Numerals",
  "spec": { "questions": [
    { "q": "In C major, the V chord is…", "choices": ["G", "F", "Am"], "answer": 0 },
    { "q": "In C major, vi is…", "choices": ["A major", "A minor", "F major"], "answer": 1 },
    { "q": "Lower-case numerals mean…", "choices": ["minor chords", "quiet chords", "major chords"], "answer": 0 },
    { "q": "In any major key, which chords are major?", "choices": ["I, IV, V", "I, ii, iii", "ii, V, vi"], "answer": 0 },
    { "q": "I–V–vi–IV in G major is…", "choices": ["G D Em C", "G C D Em", "C G Am F"], "answer": 0 },
    { "q": "vii° in C major (B–D–F) is…", "choices": ["major", "minor", "diminished"], "answer": 2 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "roman-analysis",
  "title": "Label the chords",
  "count": 7,
  "passScore": 0.75,
  "spec": { "key": "C", "chords": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e3",
  "type": "build-chord",
  "title": "Build from the numeral",
  "count": 8,
  "passScore": 0.75,
  "spec": { "chords": ["C", "Dm", "Em", "F", "G", "Am"], "root": "given", "prompt": "roman", "key": "C" }
}
```

## I–V–vi–IV

Four chords — I, V, vi, IV — power a huge number of pop songs. For example (reference only): "Let It Be" by The Beatles uses **C – G – Am – F**; "With or Without You" by U2 loops **D – A – Bm – G** in D major.

```chords
{ "key": "C", "bars": ["C", "G", "Am", "F"], "roman": true, "play": true, "bpm": 80 }
```

**Fingering:** you don't have to jump your hand. Play C as C–E–G, G as **B–D–G**, Am as **C–E–A**, F as **C–F–A** — shared notes stay put. The app accepts any arrangement of the right notes.

```exercise
{
  "id": "e4",
  "type": "play-chord",
  "title": "Play I–V–vi–IV",
  "instructions": "Use the close positions: C–E–G, B–D–G, C–E–A, C–F–A.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "G", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

## Degree 6 (la)

vi's root is degree **6** — A in C major, just above sol. After the cadence, 6 is not a home-chord note, so it doesn't settle. Some people hear it as soft or wistful. After each answer the app walks it **up** to home, 6 → 7 → 1 (the shortest way).

```example
{
  "title": "Cadence, then 6 (A), then 6 walking up: A B C",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | A4:w | A4:q B4:q C5:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the cadence (C E G → C F A → B D G → C E G), then A4. Hold it, then walk up: A B C.
2. Play the cadence, then G4, and walk down G F E D C. Compare: does G sit still while A leans somewhere?
3. Sort by feel: after the cadence play C, E, G (the home chord's notes) — then D, F, A. Many people hear the first group **at rest** and the second **leaning**. That sorting is the first half of the drill's method for 6.

**If you can't hear it yet:** **find the key** — search between C and A; C D E F G A = 1 2 3 4 5 6. Or **walk**: from the note, walk up to the next C (A B C = two steps up → 6) or down to C, whichever is shorter.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: 3, 5 or 6?",
  "instructions": "Each example plays the cadence, then one note. Sort (at rest or leaning?), then walk or find the key.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h A4:h" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h G4:h" } ] },
      { "title": "Question 3", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h E4:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is degree…", "choices": ["3", "5", "6"], "answer": 2, "explain": "A: la, two steps below the upper C." },
      { "q": "Question 2: the note is degree…", "choices": ["3", "5", "6"], "answer": 1, "explain": "G: sol, at rest, four steps above home." },
      { "q": "Question 3: the note is degree…", "choices": ["3", "5", "6"], "answer": 0, "explain": "E: mi, at rest, two steps above home." }
    ]
  }
}
```

### Before the degree drill

This lesson opens "1, 3, 5 or 6" and "1 to 6"; the drill runs at your current degree rung, so you may meet 6 only later. Whatever the rung, its **How to do it** box has the method; for 6 it's what you just did: **at rest or leaning?** — then walk to home or find the key. Watch the automatic walk home after each answer and follow it with a finger on the keys.

```ladder
{ "skill": "degrees", "unlocks": 8, "intro": "Opens \"1, 3, 5 or 6\" and \"1 to 6\" (after the cadence); the drill runs at your current rung." }
```

## DAW: I–V–vi–IV with a melody

**Work order:** chords first, loop them; then the melody, two bars at a time. Over each chord, start by trying its own notes on beats 1 and 3 (C E G over C, B D G over G, A C E over Am, F A C over F). Loop and listen: if a note sounds like it's fighting the chord, move it one key up or down until it settles.

```exercise
{
  "id": "e7",
  "type": "daw-task",
  "title": "I–V–vi–IV with a melody",
  "spec": {
    "template": { "bpm": 80, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Track 1 (piano): play C – G – Am – F as block chords, one chord per bar, whole notes; repeat once for 8 bars. Track 2 (lead): write a melody in C major. On beats 1 and 3 of each bar, use a note of the chord underneath (e.g. C, E or G over C; B, D or G over G). Between those beats, anything from the scale is fine. End on C. Loop it and adjust any note that sounds like it's fighting the chord.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.75, "track": 1 },
      { "kind": "range", "low": "C4", "high": "C5", "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

- **Finish the DAW piece** if needed, then play I–V–vi–IV on the keyboard once a day with the close positions — two minutes.
- **Two Practice sessions of about 10 minutes.** Degrees: sort first (rest or leaning), then walk or find the key.
- **Ready?** Look at the Dashboard: degrees, roots and chords now all have open rungs. If it says *practise first*, spend the next session on Practice before starting week 7 — new keys are easier on a solid C.
