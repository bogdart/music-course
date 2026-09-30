---
id: w15-l2-dominant-function-v7-to-i
title: V7 to I — Tension and Resolution
week: 15
order: 2
phase: p2
duration_min: 45
goals:
  - Explain tension and resolution, and why V7 pulls to I (the tritone between its 3rd and 7th)
  - Resolve V7 → I smoothly in C, G and F major and in A minor
  - Hear V against V7 by hand, and minor 7 against dominant 7 by ear
  - Tell a 5th from an octave, one note after the other
prerequisites: [w15-l1-maj7-dom7-min7]
tags: [harmony, dominant, sevenths, ear]
---

# V7 to I — Tension and Resolution

Music breathes in and out. Two words for that ([[tension and resolution]]):

- **Tension** is a sound that feels unfinished: it makes you expect something to come next.
- **Resolution** is the move that answers it, the "ahh" of arriving.

Listen: the first chord below is held for two bars. Most people feel it leaning forward, waiting. Then it resolves.

```example
{
  "title": "G7 held (tension), then C (resolution)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[G3 B3 D4 F4]:w | [G3 B3 D4 F4]:w | [G3 C4 E4]:w" },
    { "instrument": "bass", "seq": "G2:w | G2:w | C2:w" }
  ],
  "show": ["keyboard"]
}
```

The strongest tension chord in a key is the dominant 7 on degree 5, **V7**. Its job, making you *need* the tonic, is called [[dominant function]].

## Why G7 wants C

G7 is G B D F. Two notes inside it do the work:

- **B** is degree 7 of C major, the leading tone: a half step below C.
- **F** is degree 4: a half step above E.

B and F form the tritone you heard squeeze inward in week 12. When G7 moves to C, **B rises to C and F falls to E**, each by a half step, to the nearest notes of the C chord. That squeeze is the "click" of coming home. A plain G chord (no F) has only the B, so it pulls, but less.

```example
{
  "title": "G → C, then G7 → C. Watch B→C and F→E",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[G3 B3 D4]:h [G3 C4 E4]:h | r:w | [G3 B3 F4]:h [G3 C4 E4]:h | r:w" },
    { "instrument": "bass", "seq": "G2:h C2:h | r:w | G2:h C2:h | r:w" }
  ],
  "show": ["keyboard", "staff"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Resolve the tritone",
  "instructions": "Right hand: G3–B3–F4, then G3–C4–E4. Feel B and F squeeze inward to C and E. Then the same in two other positions.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[G3 B3 F4]:h [G3 C4 E4]:h | [G3 B3 F4]:h [G3 C4 E4]:h | [B3 F4 G4]:h [C4 E4 G4]:h | [F4 G4 B4]:h [E4 G4 C5]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

Can you hear whether the dominant is plain **V** or **V7**? Its drill rung opens next week; today, learn it by hand.

### Try it: V or V7 under your hands

1. Play C (C E G), then G (G B D), then C. Then C, **G7** (G B D F), C. The only difference is the F.
2. Stop on each dominant and hold it for four slow counts. With the F, most people feel a sharper, more impatient lean; without it the G can almost rest by itself.
3. Eyes closed: play C, then G or G7 at random, and say which before you look.

Check: two short phrases in C, each I – dominant – I.

```exercise
{
  "id": "e4", "type": "listen", "title": "Check: V or V7?",
  "instructions": "Listen to the middle chord. Play G and G7 yourself after each phrase and compare.",
  "spec": {
    "examples": [
      { "title": "Phrase 1", "bpm": 66, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [D3 G3 B3]:h | [E3 G3 C4]:w" }, { "instrument": "bass", "seq": "C2:h G1:h | C2:w" } ] },
      { "title": "Phrase 2", "bpm": 66, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [D3 F3 B3]:h | [E3 G3 C4]:w" }, { "instrument": "bass", "seq": "C2:h G1:h | C2:w" } ] }
    ],
    "questions": [
      { "q": "Phrase 1: the middle chord is…", "choices": ["V (G)", "V7 (G7)"], "answer": 0, "explain": "Plain V: G B D, no F." },
      { "q": "Phrase 2: the middle chord is…", "choices": ["V (G)", "V7 (G7)"], "answer": 1, "explain": "V7: the F (with B) makes the tritone, the extra-hungry pull home." }
    ]
  }
}
```

**If you can't hear it yet:** replay, and while the dominant sounds, play **F** (above middle C) on top of it yourself. If F just blends in, the chord already had it: V7. If your F adds a new, sharper edge, the chord was plain V.

The method to keep: V7 adds a sharper, bluesy pull on top of V; if the dominant sounds extra hungry to go home, it's V7.

## Your ear: minor 7 joins

Last lesson opened triad-or-seventh and maj7-or-7. Today the third seventh joins: **minor 7 or dominant 7**, then all three mixed.

### Try it: one note apart

1. Play C7 (C E G B♭), then Cm7 (C E♭ G B♭). Only the 3rd moved, E down to E♭. Swap several times.
2. C7 sounds bright but restless (major 3rd plus the tritone); Cm7 sounds darker and softer, with nothing pulling.
3. Now all three: Cmaj7 (dreamy), C7 (restless), Cm7 (soft and dark). Eyes closed, random order, say the word before you look.

**If you can't hear it yet:** find the lowest note, build C7 and Cm7 on it yourself, and play each after the replay. For three-way questions, first ask "dark or bright?" (m7 is the only dark one), then, if bright, "dreamy or restless?".

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): dark or bright first, then dreamy or restless. The drill runs at your current chord rung, so it may still be on last lesson's pairs.

```ladder
{ "skill": "chords", "unlocks": 7, "intro": "Opens \"Minor 7 or dominant 7\" and \"The three sevenths\"; the drill runs at your current rung." }
```

## V7 → I in other keys, and in minor

The recipe works in every key: find V (a fifth above the tonic), make it a dominant 7, resolve. In G major that's **D7 → G**; in F major, **C7 → F**. In A minor, use the major V from harmonic minor: **E7 → Am** (G♯ rises to A, D falls to C).

```example
{
  "title": "D7 → G, C7 → F, E7 → Am",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F#3 A3 C4]:h [D3 G3 B3]:h | [C3 E3 G3 Bb3]:h [C3 F3 A3]:h | [E3 G#3 B3 D4]:h [E3 A3 C4]:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "V7 → I pairs",
  "instructions": "Play each pair. Move to the nearest notes of the resolution chord; any inversion is fine.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["G7", "C", "D7", "G", "C7", "F", "E7", "Am"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "quiz-input", "title": "Find the V7",
  "spec": { "questions": [
    { "q": "V7 in C major (chord symbol)?", "answer": ["G7"], "kind": "text" },
    { "q": "V7 in G major?", "answer": ["D7"], "kind": "text" },
    { "q": "V7 in F major?", "answer": ["C7"], "kind": "text" },
    { "q": "V7 in A minor?", "answer": ["E7"], "kind": "text" },
    { "q": "In D7 → G, which note of D7 rises by a half step to G?", "answer": ["F#"], "kind": "note" },
    { "q": "In D7 → G, which note of D7 falls by a half step to B?", "answer": ["C"], "kind": "note" }
  ] }
}
```

## Tendency tones, in any key

The two notes that make V7 pull are also the "leaning" degrees of the scale: **7 leans up to 1**, **4 leans down to 3**. You already name all seven degrees in any key; now listen for *why* some notes want to move.

### Try it: rest or lean

1. Play the C cadence (C – F – G – C), then B and hold it: it strains upward. Let it go up to C.
2. Cadence again, then F: it sags down toward E. Let it fall.
3. Cadence again, then E, then G: nothing pulls; they rest inside the home chord.
4. In A minor (Am – Dm – E – Am), G♯ leans up to A just like B did in C: it's the raised 7 from week 14.

The degree drill today is a review at your current rung; use the lean as an extra clue: at rest (1 3 5) or leaning (2 4 6 7), then walk home to confirm.

```ladder
{ "skill": "degrees", "unlocks": 25, "intro": "Review: degrees at your current rung; sort each note into resting or leaning first." }
```

## Ear corner: 5th or octave

V sits a **fifth** above the tonic, and the bass of G7 → C drops a fifth. In week 12 you met the fifth trap: a fifth is the most octave-like interval there is. Today's interval rung asks exactly that, one note after the other: **5th or octave?**

### Try it: which landing?

1. Play C3 then G3 (a 5th), then C3 then C4 (an octave). The octave lands on "the same note, higher"; the fifth lands on a different, open-sounding note.
2. Honestly: at first they may sound alike. Play both from the same first note, back to back, several times.
3. From G2: up to D3, up to G3. Then from a random low note.

**If you can't hear it yet:** after the question, play its first note, then both candidates (7 half steps and 12 half steps up) and pick the closer match. If the second note blends with the first when you hold them together, it's the octave.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): play both candidates from the first note, replay, choose. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 9, "intro": "Opens \"5th or octave\"; the drill runs at your current rung." }
```

## Between lessons

- **2 minutes:** G7 → C with B→C and F→E, in the three hand positions of the "Resolve the tritone" exercise.
- **2 minutes:** D7 → G, C7 → F and E7 → Am, any inversions, nearest notes.
- **2 minutes:** C7 vs Cm7 vs Cmaj7 on C, F and G, eyes closed.
- **1 minute:** from three low notes, play the 5th then the octave.
- One chords session and one intervals session on the Practice page.
