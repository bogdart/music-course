---
id: w35-l1-pop-idioms
title: Pop Idioms
week: 35
order: 1
phase: p4
duration_min: 45
goals:
  - Name the harmonic, melodic and arrangement habits that make a song sound "pop"
  - Hear how a pre-chorus lifts into a chorus
  - Write a "three the same, one different" hook over a four-chord loop
prerequisites: [w34-l3-seven-eight-groove-daw, w18-l3-chorus-hook-daw]
tags: [songwriting, pop, genre, arrangement]
songs:
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
  - { title: "Someone Like You", artist: "Adele", public_domain: false }
  - { title: "Don't Stop Believin'", artist: "Journey", public_domain: false }
  - { title: "Shape of You", artist: "Ed Sheeran", public_domain: false }
---

# Pop Idioms

A [[genre idiom]] is a habit so common in a style that listeners recognise the style from it alone. A genre is not a set of rules — it is a *bundle* of idioms. This week and next you collect those bundles and write a short sketch in each style. Nothing here is new theory: you already know every chord and rhythm involved. What is new is choosing them on purpose.

## The pop bundle

**Harmony:** short loops, usually four chords, often the same loop in verse and chorus. I–V–vi–IV is the champion: "Let It Be" (C–G–Am–F), "Someone Like You" (A–E–F♯m–D), "Don't Stop Believin'" (E–B–C♯m–A). All by reference — no melodies copied.

Minor-key pop loves **i–iv–VI–VII**: "Shape of You" loops C♯m–F♯m–A–B. A reminder of the course convention from week 9: in a minor key the numerals follow natural minor, so VI and VII are simply the major chords on its 6th and 7th notes (in A minor: F and G). You will see ♭VI and ♭VII only for chords *borrowed* into a major key (week 16) — same sound, different home.

**Melody:** a [[hook]] that repeats — very often a 1-bar idea stated three times, with the fourth time changed so the phrase can end. Choruses sit **higher** than verses.

**Form & arrangement:** verse – pre-chorus – chorus. The **pre-chorus** builds tension (a rising melody, chords that avoid I, drums getting busier) so the chorus lands like a release. Many songs pull everything out for a beat just before the chorus — a [[drop-out]] — so the downbeat hits harder.

```example
{
  "title": "Pre-chorus into chorus (original)",
  "bpm": 100, "timeSig": "4/4", "key": "G", "hidden": true,
  "tracks": [
    { "instrument": "lead", "seq": "D5:q D5:q E5:q D5:q | D5:q E5:q F#5:q G5:q | E5:q E5:q F#5:q G5:q | A5:h. r:q | B5:q. A5:8 G5:q D5:q | B5:q. A5:8 G5:q D5:q | B5:q. A5:8 G5:q E5:q | D5:w |" },
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [D4 F#4 A4]:h. r:q | [D4 G4 B4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [C4 E4 G4]:w |" },
    { "instrument": "bass", "seq": "C2:w | D2:w | E2:w | D2:h. r:q | G1:w | D2:w | E2:w | C2:w |" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 r:q | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  ],
  "show": ["pianoroll"]
}
```

The first four bars are a pre-chorus, the last four the start of the chorus. Listen three times, one question per play:

1. **Drums only.** Tap your foot and notice where the drumming gets busier and where it stops. Drums are usually the easiest layer to hear.
2. **Melody only.** Move your hand up or down with the tune: where does it climb, where is its highest note?
3. **The end of bar 4.** Count "1 2 3 4" through bar 4: what do you hear on beat 4?

The chords under the pre-chorus may not feel "tense" to you yet — that's fine. The questions below ask what you heard; the answers come after you choose.

```exercise
{
  "id": "e1-lift-listen",
  "type": "listen",
  "title": "What makes the lift?",
  "spec": {
    "example": {
      "bpm": 100, "timeSig": "4/4", "key": "G",
      "tracks": [
        { "instrument": "lead", "seq": "D5:q D5:q E5:q D5:q | D5:q E5:q F#5:q G5:q | E5:q E5:q F#5:q G5:q | A5:h. r:q | B5:q. A5:8 G5:q D5:q | B5:q. A5:8 G5:q D5:q |" },
        { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 r:q | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
      ]
    },
    "questions": [
      { "q": "Just before the chorus (end of bar 4), what happens?", "choices": ["The drums get louder and keep going", "Everything stops for a beat", "The key changes", "A new instrument enters"], "answer": 1, "explain": "A one-beat drop-out: the silence makes the chorus downbeat hit harder." },
      { "q": "Where is the highest melody note of the pre-chorus?", "choices": ["Bar 1", "Bar 4, the long note", "Bar 2, first note"], "answer": 1, "explain": "The line climbs D–E–F♯–G and peaks on a held A5 in bar 4." },
      { "q": "What do the drums do in bar 3?", "choices": ["They stop", "The kick doubles its speed (8th notes instead of quarters)", "They switch to a half-time feel"], "answer": 1, "explain": "Quarter-note kicks in bars 1–2, 8th-note kicks in bar 3, a snare roll in bar 4: the drums get busier towards the chorus. The chords under it are IV–V–vi–V, avoiding I until the chorus lands on it. After the lift, the hook states a 1-bar idea three times and changes the fourth, landing on a long note." }
    ]
  }
}
```

## Play the loops and the hook

```exercise
{
  "id": "e2-play-loop",
  "type": "play-chord",
  "title": "Play I–V–vi–IV in G, then i–iv–VI–VII in C♯ minor",
  "passScore": 0.7,
  "spec": { "chords": ["G", "D", "Em", "C", "C#m", "F#m", "A", "B"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

```exercise
{
  "id": "e3-play-hook",
  "type": "play-melody",
  "title": "Play the chorus hook (three the same, one different)",
  "passScore": 0.7,
  "spec": {
    "bpm": 90, "timeSig": "4/4", "key": "G",
    "seq": "B4:q. A4:8 G4:q D4:q | B4:q. A4:8 G4:q D4:q | B4:q. A4:8 G4:q E4:q | D4:w |",
    "showStaff": true, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "piano", "seq": "[G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w |" }
  }
}
```

## Ear: pop loops at your level

Method, whatever your rung: follow the lowest sound first and find each bass note on the keyboard (search low keys: higher or lower?), then name the chord by its job — rest (I), lift (IV), pull (V), sad (vi). The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "progressions", "unlocks": 19, "intro": "Pop is built on loops of I, IV, V and vi — this drill runs at whatever progression rung you are on now." }
```

```exercise
{
  "id": "e4-pop-quiz",
  "type": "quiz",
  "title": "Pop conventions",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "What is the pre-chorus mostly for?", "choices": ["Introducing a new key", "Building tension so the chorus feels like a release", "Showing off a solo", "Ending the song"], "answer": 1 },
      { "q": "Relative to the verse, a pop chorus melody usually sits…", "choices": ["lower", "higher", "at exactly the same pitch"], "answer": 1 },
      { "q": "In A minor, which chords are VI and VII?", "choices": ["F and G", "F♯ and G♯", "Fm and Gm", "D and E"], "answer": 0, "explain": "Natural minor A B C D E F G: the triads on F and G are major, so upper-case VI and VII." }
    ]
  }
}
```

## Make it

1. Play the loop in the template a few times and improvise on G, A, B, D and E (the notes of the chords) until one 1-bar rhythm sticks. Try the first one that feels catchy — don't audition twenty.
2. Enter it in bar 1. Copy it to bars 2 and 3; change one note in bar 3 if it sounds stiff.
3. Write bar 4 to land on a long G.
4. **Judge by ear:** loop it four times. If you can play the hook from memory after the fourth, it repeats enough. If bar 4 doesn't sound finished, end on G on beat 1 and hold it.
5. **Stuck?** Borrow the rhythm of the chorus hook above (long–short–short–short) and put new notes on it.

```exercise
{
  "id": "e5-daw-hook",
  "type": "daw-task",
  "title": "A 4-bar pop hook",
  "instructions": "Over the I–V–vi–IV loop in G, write a hook: a 1-bar idea, the same idea again (exact or slightly changed), a third time, and a fourth bar that ends on G.",
  "spec": {
    "template": {
      "bpm": 100, "key": "G", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "[G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w |" }
      ]
    },
    "task": "4-bar repeated-motif pop hook, ending on the tonic (G).",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "range", "low": "D4", "high": "D6", "track": 0 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

Play I–V–vi–IV in G with your hook on top twice a day. Listen to one pop song you like and mark where the pre-chorus starts and whether there is a drop-out before the chorus.
