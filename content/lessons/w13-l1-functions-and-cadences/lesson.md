---
id: w13-l1-functions-and-cadences
title: Tonic, Subdominant, Dominant — and Four Cadences
week: 13
order: 1
phase: p2
duration_min: 45
goals:
  - Hear iii and vii° in C major, then sort all seven chords into tonic, subdominant and dominant families
  - Hear and name authentic, plagal, half and deceptive cadences
  - Name the four pop chords and play their bass line in G, then in any key
prerequisites: [w12-l3-ii-v-i-and-ballad-daw]
tags: [harmony, function, cadences, ear]
---

# Tonic, Subdominant, Dominant — and Four Cadences

A major key has seven chords. That sounds like a lot to track, but harmony has only three *jobs*, and last lesson you met them as home, away and tension. The job of a chord is its [[harmonic function]]. Before sorting all seven, let's hear the two you haven't used much: iii and vii°.

## Meet iii and vii°

**iii** in C is **Em** (E G B). It shares E and G with C (I), and G and B with G (V). So it sounds in-between: a soft, slightly sad chord that doesn't push strongly anywhere. It often sits between I and vi or leads to IV.

**vii°** in C is **B°** (B D F), the diminished triad from week 6. Look at its notes: it's G7 without the G. It contains the leading tone B *and* the tritone B–F, so it's tense and pulls to C just like V7 does, only thinner.

```example
{
  "title": "I – iii – vi – IV (C, Em, Am, F), then G7 → C and B° → C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [E3 G3 B3]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [F3 G3 B3 D4]:h [E3 G3 C4]:h | [F3 B3 D4]:h [E3 G3 C4]:h" },
    { "instrument": "bass", "seq": "C2:w | E2:w | A1:w | F1:w | G1:h C2:h | B1:h C2:h" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

## Three families

- **Tonic (T), home:** **I**, and its relatives **vi** and **iii** (each shares two notes with I).
- **Subdominant (S), away:** **IV** and **ii**, the predominants from last lesson.
- **Dominant (D), tension:** **V**, **V7** and **vii°** (all contain the leading tone).

Most phrases tell the story **T → S → D → T**. I – IV – V – I is that story in four chords; I – ii – V7 – I is the jazzier version. iii is the least clear-cut: it's usually counted as tonic family, but it's a weak home. Don't worry if it sounds vague to you: it *is* vague.

```exercise
{
  "id": "e1", "type": "quiz", "title": "Which family?",
  "spec": { "questions": [
    { "q": "vi (Am in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 0, "explain": "Am (A C E) shares C and E with C major: a softer, sadder home." },
    { "q": "ii (Dm in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 1 },
    { "q": "vii° (B° in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 2, "explain": "B D F is G7 without its root: leading tone plus tritone." },
    { "q": "IV (F in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 1 },
    { "q": "The most basic harmonic story is…", "choices": ["D → S → T", "T → S → D → T", "S → T → D", "T → D → S"], "answer": 1 }
  ] }
}
```

## Four cadences

In week 8 you met phrase endings: the **authentic** cadence (V → I, a full stop) and the **half** cadence (ending on V, a comma). Two more:

- [[Plagal cadence]] (IV → I): a soft "amen", like the end of a hymn. It arrives home without any tension first.
- [[Deceptive cadence]] (V → vi): V promises home, and you get vi instead. Because vi is a tonic-family chord (it shares two notes with I), it *almost* satisfies the pull, close enough to make sense, different enough to keep the music going. Songwriters use it to stretch a phrase.

Each ending below comes after the same two chords of setup, C – F:

```example
{
  "title": "Authentic (V7 → I), plagal (IV → I), half (→ V), deceptive (V → vi)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [E3 G3 C4]:h | r:w | [E3 G3 C4]:h [F3 A3 C4]:h | [F3 A3 C4]:h [E3 G3 C4]:h | r:w | [E3 G3 C4]:h [F3 A3 C4]:h | [D3 G3 B3]:w | r:w | [E3 G3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [E3 A3 C4]:h" },
    { "instrument": "bass", "seq": "C2:h F2:h | G2:h C2:h | r:w | C2:h F2:h | F2:h C2:h | r:w | C2:h F2:h | G2:w | r:w | C2:h F2:h | G2:h A2:h" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "Play the four cadences",
  "instructions": "Authentic G7→C, plagal F→C, half C→G, deceptive G→Am. Keep common tones.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["G7", "C", "F", "C", "C", "G", "G", "Am"], "inversion": "any", "sequence": true, "bpm": 60, "key": "C" }
}
```

```exercise
{
  "id": "e3", "type": "listen", "title": "Name the cadence",
  "instructions": "Four phrase endings in C. Loop it, listen to the last two chords of each, then answer.",
  "spec": {
    "example": {
      "title": "Four phrase endings", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true,
      "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:h [D3 G3 B3]:h | [A2 C3 E3]:w | r:w | [C3 F3 A3]:h [C3 E3 G3]:h | [C3 E3 G3]:w | r:w | [D3 F3 A3]:h [D3 G3 B3]:h | [D3 G3 B3]:w | r:w | [D3 F3 G3 B3]:h [C3 E3 G3]:h | [C3 E3 G3]:w" } ]
    },
    "questions": [
      { "q": "Ending 1 is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 3, "explain": "V → vi: G, then Am." },
      { "q": "Ending 2 is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 1, "explain": "IV → I: F, then C." },
      { "q": "Ending 3 is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 2, "explain": "ii → V: Dm, then G, and it stops there." },
      { "q": "Ending 4 is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 0, "explain": "V7 → I: G7, then C." }
    ]
  }
}
```

## The four chords in other keys

So far the chord-naming drill has stayed in C. This lesson opens two progressions rungs that move it: first the four chords in **G major**, then in **any key**. Same roles, different letters: in G, **I = G, IV = C, V = D, vi = Em** (the D chord has the F♯ from G major's key signature). Before you start, play the four chords and their roots once on the keyboard.

```example
{
  "title": "G – C – D – Em in G major (I – IV – V – vi), roots in the bass",
  "bpm": 72, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "piano", "seq": "[B3 D4 G4]:w | [C4 E4 G4]:w | [A3 D4 F#4]:w | [B3 E4 G4]:w" },
    { "instrument": "bass", "seq": "G2:w | C2:w | D2:w | E2:w" }
  ],
  "show": ["keyboard"]
}
```

When the key changes every question, the cadence at the start sets home; then think in jobs, not letters. Is it home (I), a darker home (vi), away (IV) or tension (V)? If you've reached the degree rungs where the key changes every question, you already know this way of listening; if not, expect the new keys to feel strange at first. The drill runs at your current progressions rung, so you'll meet G, and then any key, once the four chords in C are solid.

```ladder
{ "skill": "progressions", "unlocks": 6, "intro": "Opens \"Four chords in G\", then \"Four chords, any key\"; the drill runs at your current rung." }
```

The bass-line drill takes the same two steps: this lesson opens bass lines of I, IV, V and vi in **G** (bass notes G, C, D and E), then in any key. Tip for any key: find the first bass note (usually home) on the keyboard, and hear the rest as degrees from there. You'll meet these once inverted-chord roots are solid.

```ladder
{ "skill": "roots", "unlocks": 9, "intro": "Opens \"Bass line in G\", then \"Bass line, any key\"; the drill runs at your current roots rung." }
```

```exercise
{
  "id": "e4", "type": "roman-analysis", "title": "Analyse a phrase",
  "instructions": "Name the chords, then decide which cadence ends the phrase.",
  "passScore": 0.7,
  "spec": { "key": "C", "chords": ["C", "Am", "Dm", "G7", "C", "F", "G", "Am"], "prompt": "symbols" }
}
```
