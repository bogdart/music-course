---
id: w28-l2-rootless-voicings
title: Rootless Voicings
week: 28
order: 2
phase: p4
duration_min: 45
goals:
  - Play A-form (3-5-7-9) and B-form (7-9-3-5) rootless voicings
  - Connect ii–V–I in C and F with rootless voicings over a bass line
  - Hear all four 7th colours in open voicings
prerequisites: [w28-l1-shell-voicings]
tags: [jazz, voicings, rootless, keyboard]
songs:
  - { title: "Waltz for Debby", artist: "Bill Evans", public_domain: false }
---

# Rootless Voicings

When a bassist is playing, the pianist's root is redundant — it doubles the bass and muddies the low end. So pianists in the Bill Evans tradition drop it and use that finger for a 9th or 13th. The result is the [[rootless voicing]]: four notes, rich colour, and a sound you will recognise on hundreds of records. (Listen to Evans's trio recordings, e.g. "Waltz for Debby", by reference: notice the left hand never thumps a root.)

## A-form and B-form

Two standard shapes:

- **A-form: 3–5–7–9** (3rd on the bottom). Dm9 = F A C E.
- **B-form: 7–9–3–5** (7th on the bottom). Dm9 = C E F A.

On a dominant chord, swap the 5th for the **13th** — it sounds more modern and leads better. So G13 in A-form = B E F A (3–13–7–9), and in B-form = F A B E (7–9–3–13).

Like shells, you **alternate** forms through a ii–V–I, so the hand stays in one small area:

```example
{
  "title": "ii–V–I in C: A-form → B-form → A-form, with bass",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | [E3 G3 B3 D4]:w |" },
    { "instrument": "bass", "seq": "D2:w | G2:w | C2:w | C2:w |" }
  ],
  "show": ["keyboard", "staff"]
}
```

Only one or two notes move per chord change: C→B, then F→E, A→G, E→D. Without the bass the chords sound "floating"; with it, they lock in. Try muting the bass track in your head as you listen.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["F3", "A3", "B3", "E4"], "labels": "names", "colors": { "F3": "seventh", "A3": "other", "B3": "third", "E4": "other" } }
```

```example
{
  "title": "ii–V–I in F: B-form → A-form → B-form",
  "bpm": 70, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "piano", "seq": "[F3 A3 Bb3 D4]:w | [E3 A3 Bb3 D4]:w | [E3 G3 A3 C4]:w | [E3 G3 A3 C4]:w |" },
    { "instrument": "bass", "seq": "G2:w | C2:w | F2:w | F2:w |" }
  ],
  "show": ["keyboard"]
}
```

## Drills

```exercise
{
  "id": "e1-build-rich",
  "type": "build-chord",
  "title": "Spell the rich chords",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["Dm9", "G13", "Cmaj9", "Gm9", "C13", "Fmaj9"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e2-rootless-c",
  "type": "play-melody",
  "title": "Rootless ii–V–I in C over bass",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "D2:w | G2:w | C2:w | r:w |" } }
}
```

```exercise
{
  "id": "e3-rootless-f",
  "type": "play-melody",
  "title": "Rootless ii–V–I in F over bass",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "F", "seq": "[F3 A3 Bb3 D4]:w | [E3 A3 Bb3 D4]:w | [E3 G3 A3 C4]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "G2:w | C2:w | F2:w | r:w |" } }
}
```

```exercise
{
  "id": "e4-ear-four-open",
  "type": "ear-chord",
  "title": "Four colours, open voicing",
  "count": 12, "passScore": 0.75,
  "spec": { "qualities": ["maj7", "min7", "dom7", "m7b5"], "inversions": [0], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "e5-rootless-quiz",
  "type": "quiz",
  "title": "Rootless logic",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "Why leave the root out?", "choices": ["It is out of key", "The bass already plays it, and the finger is freed for a colour tone", "Roots are illegal in jazz", "To make the chord minor"], "answer": 1 },
    { "q": "A-form Dm9 from the bottom is…", "choices": ["D F A C", "F A C E", "C E F A", "E F A C"], "answer": 1 },
    { "q": "On a dominant 7th, the 5th is often replaced by…", "choices": ["the 11th", "the 13th", "the root", "the b3"], "answer": 1 },
    { "q": "B-form G13 from the bottom is F A B E. Which note is the 3rd?", "choices": ["F", "A", "B", "E"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "e6-daw-rootless",
  "type": "daw-task",
  "title": "Rootless comping over a walking root",
  "instructions": "The bass is provided. On the piano track, write rootless voicings for Dm9 | G13 | Cmaj9 | Cmaj9, repeated. Try hitting each chord on beat 1 and again on the 'and' of 2.",
  "spec": {
    "template": { "bpm": 100, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "D2:q F2:q A2:q C3:q | G2:q B2:q D3:q F2:q | C2:q E2:q G2:q B2:q | C3:q G2:q E2:q D2:q | D2:q F2:q A2:q C3:q | G2:q B2:q D3:q F2:q | C2:q E2:q G2:q B2:q | C2:w |" } ] },
    "task": "8 bars of rootless voicings (4 notes each) between E3 and E4.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "range", "low": "E3", "high": "E4", "track": 0 },
      { "kind": "note-count", "min": 32, "max": 96, "track": 0 },
      { "kind": "custom", "id": "no-roots-in-piano", "note": "Self-check: the piano never plays D on Dm9, G on G13 or C on Cmaj9.", "track": 0 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
