---
id: w28-l2-rootless-voicings
title: Rootless Voicings
week: 28
order: 2
phase: p4
duration_min: 40
goals:
  - Play A-form (3-5-7-9) and B-form (7-9-3-5) rootless voicings in C
  - Connect a ii–V–I by alternating the two forms over a bass line
  - Review spread-out seventh colours and bass lines by ear
prerequisites: [w28-l1-shell-voicings]
tags: [jazz, voicings, rootless, keyboard]
songs:
  - { title: "Waltz for Debby", artist: "Bill Evans", public_domain: false }
---

# Rootless Voicings

When a bass player is on the gig, the pianist's root is redundant: it doubles the bass and thickens the low end. So pianists in the Bill Evans tradition leave it out and use that finger for the 9th. The result is the [[rootless voicing]]: four notes, rich colour. (By reference: in Evans's trio recordings, e.g. "Waltz for Debby", the left hand almost never thumps a root.) You already did this in last week's neo-soul loop; today it gets a system.

## A-form and B-form

A rootless voicing uses the 3rd, 5th, 7th and 9th. Stack them in one of two orders:

- **A-form: 3–5–7–9**, 3rd at the bottom. Dm9 = F A C E.
- **B-form: 7–9–3–5**, 7th at the bottom. Dm9 = C E F A.

| Chord | A-form (3 5 7 9) | B-form (7 9 3 5) |
|-------|------------------|------------------|
| Dm9 | F A C E | C E F A |
| G9 | B D F A | F A B D |
| Cmaj9 | E G B D | B D E G |

As with shells, you **alternate** forms through a ii–V–I, so the hand stays in one place. Only two notes move at each change: C→B and E→D, then F→E and A→G.

```example
{
  "title": "ii–V–I in C: A-form → B-form → A-form, with bass",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 D4]:w | [E3 G3 B3 D4]:w | [E3 G3 B3 D4]:w |" },
    { "instrument": "bass", "seq": "D2:w | G2:w | C2:w | C2:w |" }
  ],
  "show": ["keyboard", "staff"]
}
```

**An honest listening note.** Without a bass these voicings sound vague: F A C E on its own could be Fmaj7 as easily as Dm9. The bass decides what the chord *is*; the piano adds the colour.

### Try it

1. Play F3 A3 C4 E4 alone. Then hold it and add D2 with your left hand. Then swap D2 for F2.
2. Same four notes on top, two different chords underneath: listen to how the mood changes with the bass note.
3. Play the example with the bass track, then play the three right-hand voicings alone.

**Check:** with D below, the chord feels softer and minor-ish (Dm9); with F below, brighter and settled (Fmaj7). Same right hand.

**If you can't hear it yet:** play the bass note first, let it ring, then add the voicing on top. Giving the bass a head start makes it the "floor" your ear hears the rest from.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["F3", "A3", "B3", "D4"], "labels": "names", "colors": { "F3": "seventh", "A3": "other", "B3": "third", "D4": "fifth" } }
```

That is B-form G9: F (7th), A (9th), B (3rd), D (5th). Later you may hear pianists swap the D for an E (the 13th); that is an option for another day.

## Drills

```exercise
{
  "id": "e1-build-ninths",
  "type": "build-chord",
  "title": "Spell the ninth chords",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Dm9", "G9", "Cmaj9", "Fmaj9", "Am9", "C9"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-a-form",
  "type": "play-chord",
  "title": "A-form: 3rd at the bottom",
  "instructions": "No root. Play 3–5–7–9 from the bottom.",
  "passScore": 0.7,
  "spec": { "chords": ["Dm9", "G9", "Cmaj9"], "voicing": "rootless-a", "sequence": true, "key": "C" }
}
```

```exercise
{
  "id": "e3-b-form",
  "type": "play-chord",
  "title": "B-form: 7th at the bottom",
  "instructions": "No root. Play 7–9–3–5 from the bottom.",
  "passScore": 0.7,
  "spec": { "chords": ["Dm9", "G9", "Cmaj9"], "voicing": "rootless-b", "sequence": true, "key": "C" }
}
```

```exercise
{
  "id": "e4-rootless-c",
  "type": "play-melody",
  "title": "Rootless ii–V–I over the bass",
  "instructions": "A-form, B-form, A-form. Move only the notes that have to move.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 D4]:w | [E3 G3 B3 D4]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "D2:w | G2:w | C2:w | r:w |" } }
}
```

```exercise
{
  "id": "e5-rootless-quiz",
  "type": "quiz",
  "title": "Rootless logic",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Why leave the root out?", "choices": ["It is out of key", "The bass already plays it, and the finger is freed for the 9th", "Roots are not allowed in jazz", "To make the chord minor"], "answer": 1 },
    { "q": "A-form Dm9 from the bottom is…", "choices": ["D F A C", "F A C E", "C E F A", "E F A C"], "answer": 1, "explain": "A-form = 3 5 7 9: F A C E." },
    { "q": "B-form G9 from the bottom is F A B D. Which note is the 3rd?", "choices": ["F", "A", "B", "D"], "answer": 2 },
    { "q": "Heard without any bass, F A C E could be…", "choices": ["only Dm9", "Dm9 or Fmaj7", "only G9", "a diminished chord"], "answer": 1, "explain": "Rootless voicings need the bass to say which chord they are." }
  ] }
}
```

## Ear review

Methods (also in each drill's *How to do it* box): for chord colours, bright/dark first, then the finer choice. For the bass drill, ignore everything above the bass: listen to the deepest, thumping sound, tap your foot with it, then find its notes one at a time on the keyboard. The drills run at your current rungs, which may be earlier ones.

```ladder
{ "skill": "chords", "unlocks": 13, "intro": "Seventh colours at your level, including spread-out voicings." }
```

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "Follow the bass: it is the part that tells a rootless chord what it is; the drill runs at your current roots rung." }
```

## Between lessons

Play the rootless ii–V–I (A → B → A) with the bass note in your left hand, once a day. Try it starting from B-form too.
