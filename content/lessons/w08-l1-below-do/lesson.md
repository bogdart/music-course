---
id: w08-l1-below-do
title: "Below Do: Low Sol, La and Ti"
week: 8
order: 1
phase: p1
duration_min: 45
goals:
  - Hear low sol, low la and low ti as notes of the key sitting just under home, leading up into it
  - Play and echo tunes that dip below do, with your hand placed from G3
  - Add the diminished triad to the chord colours you tell apart
prerequisites: [w07-l3-octave-layers-daw]
tags: [ear, degrees, melody, register, chords, keyboard]
songs:
  - { title: "Happy Birthday to You", composer: "Mildred J. Hill and Patty Hill (melody 'Good Morning to All', 1893)", public_domain: true }
---

# Below do

Last week a note in octave 3 had its own do, C3, and walked home down to it. Today is different: the notes **just under** home — B3, A3, G3 — heard as neighbours of C4, the do at the bottom of the cadence's top chord. (The cadence's bass ends on C3, do an octave lower — today's notes sit between the two, just under C4.) In solfège they're **low ti, low la and low sol** (written ti₁, la₁, sol₁, or 7, 6, 5 with a line under). They're the same degrees you know, but they sit *below* home and **lean up into it**.

This matters because melodies live there. A huge number of tunes start below do and climb into it.

```example
{
  "title": "Happy Birthday (first two lines): it starts on low sol",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:h G3:8. G3:16 | A3:q G3:q C4:q | B3:h G3:8. G3:16 | A3:q G3:q D4:q | C4:h r:q" } ],
  "show": ["staff", "keyboard"]
}
```

"Hap-py birth-day to you": sol sol la sol **do** ti. The first line never touches home until the fourth note, and it stops on low ti — the most leaning note there is. The second line answers: it goes up to re and falls back to do.

## Low sol, low la, low ti

```example
{
  "title": "Cadence, then low ti (B3) → C4; low la (A3) → B3 → C4; low sol (G3) → C4",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | B3:h C4:h | A3:q B3:q C4:h | G3:h C4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Put your **thumb on G3**, fingers over A3, B3, C4, D4. Now home (C4) is under your fourth finger, with notes on both sides. This is the hand position for today.
2. Play the cadence (or press play on the example), then B3 and hold it. Many people hear it *straining* upward. Let it go to C4.
3. Cadence, then A3: softer, a little sad, just under home. Walk up: A B C (two steps).
4. Cadence, then G3: open and stable, like sol always is — but low, like a springboard into home. Jump G3 → C4. That's the opening of countless tunes (and of Happy Birthday's first "do").
5. Compare with last week: G3 **walks down** to C3 (home in octave 3) or **jumps up** to C4 (home right above). Both are right — same degree. Today, think of home as the C just above.

**If you can't hear it yet:** find the key (search from C4 downward), then count *down* from C: C B A G = 1, 7, 6, 5. Or walk *up* from the note to C4, counting steps: ti-do is one, la-ti-do two, sol-la-ti-do three.

```exercise
{
  "id": "k1",
  "type": "play-notes",
  "title": "Around home, both sides",
  "instructions": "Thumb on G3. Play each set in order: the notes under home, then home.",
  "passScore": 0.75,
  "spec": { "prompt": "names", "notes": [["G3", "A3", "B3", "C4"], ["B3", "C4"], ["A3", "B3", "C4"], ["G3", "C4"], ["C4", "B3", "A3", "G3"]], "ordered": true, "octave": "exact" }
}
```

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: which note under home?",
  "instructions": "Each example plays the cadence, then one note just below C4. Walk up to home on your keyboard, counting steps.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | r:h B3:h" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | r:h G3:h" } ] },
      { "title": "Question 3", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | r:h A3:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is…", "choices": ["low sol (5)", "low la (6)", "low ti (7)"], "answer": 2, "explain": "B3: low ti, one half step under home." },
      { "q": "Question 2: the note is…", "choices": ["low sol (5)", "low la (6)", "low ti (7)"], "answer": 0, "explain": "G3: low sol, three scale steps under home." },
      { "q": "Question 3: the note is…", "choices": ["low sol (5)", "low la (6)", "low ti (7)"], "answer": 1, "explain": "A3: low la, two scale steps under home." }
    ]
  }
}
```

```exercise
{
  "id": "k2",
  "type": "play-melody",
  "title": "Happy Birthday, first two lines",
  "instructions": "Thumb on G3. The first line ends on low ti — don't resolve it early.",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "3/4", "key": "C", "seq": "r:h G3:8. G3:16 | A3:q G3:q C4:q | B3:h G3:8. G3:16 | A3:q G3:q D4:q | C4:h r:q", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

### Before the degree drill

This lesson opens "Low sol" (1 to 5, with sol possibly under home) and "Low la and ti" (all seven, from low sol up to do′). The **How to do it** box: if the note sounds low and leads *up* into home, suspect low sol, la or ti; walk up to home — ti-do (one step), la-ti-do (two), sol…do (three) — or find the key and count down from C.

```ladder
{ "skill": "degrees", "unlocks": 13, "intro": "Opens low sol, then low la and ti: notes just under home; the drill runs at your current rung." }
```

## Tunes that dip below home

The melody ladder's next rung plays five-note tunes that may dip under home to low sol, la or ti. The routine from the **How to do it** box: **thumb on G3** so both sides of home are under your hand; find the first note; follow the path (up/down, step/skip). If the tune seems to "fall off" the bottom of your hand, it went below G3 — not possible on this rung, so recheck the first note.

```example
{
  "title": "Echo me: a tune that dips below do",
  "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true,
  "tracks": [ { "instrument": "piano", "seq": "C4:q B3:q A3:q B3:q | C4:w" } ],
  "show": ["keyboard"]
}
```

**Try it:** echo the hidden tune above — say the path first, then play from home. Reveal to check.

```ladder
{ "skill": "melody", "unlocks": 10, "intro": "Opens \"Below do\": five-note tunes that may dip to low sol, la or ti." }
```

## Chord colours: diminished joins

In week 6 you built the diminished triad (B–D–F, vii° in C: two minor 3rds). Now it joins the chord drill as a third choice, once major vs minor in any register is solid. The **How to do it** box sorts by feel: **bright** (major), **dark** (minor), **tense and squeezed** (diminished).

**Try it:** play C E G, C E♭ G, C E♭ G♭ in a row, then B D F. Say the three words as you play.

**If you can't hear it yet:** compare on your keyboard, as with major and minor. Find the chord's root (its floor, the lowest note — the search you know from the roots drill). On that root play three chords yourself: major, minor, and diminished (the minor chord with its top note lowered one key). Replay the question and pick the one that matches. Picking the separate notes out of a chord by ear isn't needed — comparing whole chords is enough.

```ladder
{ "skill": "chords", "unlocks": 3, "intro": "Opens \"Major, minor or diminished\"; the drill runs at your current chord rung." }
```

## Between lessons

- **Two Practice sessions of about 10 minutes.** Below-do questions: thumb on G3 before you press Play.
- **Keyboard, 2 minutes a day:** Happy Birthday's first two lines from G3. Then the cadence and G3 → C4, A3 → B3 → C4, B3 → C4.
- **Ready?** Next lesson spreads degrees over two octaves around home and gives phrases their endings. The ladders keep each rung at your pace; if the Dashboard says *practise first*, give degrees an extra session.
