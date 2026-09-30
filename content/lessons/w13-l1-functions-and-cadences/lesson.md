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

### Try it: rest, lift or pull

1. Play C (C E G) and hold it: that's **rest**.
2. Play C, then F (C F A): the sound opens up and moves away. That's **lift** (subdominant).
3. Play C, then G7 (B D F G): it leans, it wants something. Stop there and wait. That's **pull** (dominant). Now play C: the pull is answered.
4. Play C, then Am (C E A): still fairly settled, only darker. Tonic family, a sad home.
5. Mix them: play C, then one of F, G7 or Am with your eyes half closed, and say "rest", "lift" or "pull" before you look.

**If you can't hear it yet:** judge by the bass instead of the whole chord. Play the chord, then its root alone, low (C, F, G or A), then C low. From F the bass feels like a step aside; from G it wants to drop straight onto C; from A it's already nearly home. The bass carries most of the job.

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

Each ending below comes after the same two chords of setup, C – F. Only the **last two chords** matter:

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

### Try it: four endings under your hands

1. Play the authentic cadence G7 → C, then the plagal F → C. Both end home; the first arrives with a push, the second glides in.
2. Play C → G and **stop**. It hangs in the air like a comma: that's a half cadence.
3. Play G7 and then Am instead of C. You get something *almost* like home, but darker. That surprise is the deceptive cadence.

Check: four endings, hidden. Listen to the last two chords of each, answer, then read the explanation.

**If you can't hear it yet:** ask two questions in order. 1) Does it end at rest, or hang? Hanging = half. 2) If at rest: bright home or darker home? Darker = deceptive. Bright: was the chord before it pushing (authentic) or soft (plagal)? Play the last bass notes low on your keyboard to check: G → C, F → C, ending on G, G → A.

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

### Try it: the four chords in G

1. Play G – C – D – Em (the example above), each chord with its root low in the left hand: G, C, D, E.
2. Play just the left-hand roots: G C D E. Notice D is one step above C, and E one step above D.
3. Now play G, then a random one of the other three, and name it by its job: lift (C), pull (D), darker home (Em).

**If you can't hear it yet:** after each chord, search for its bass note: start on G and go up or down key by key until your note blends with the chord's lowest sound. G = I, C = IV, D = V, E = vi. Slow is fine; it's the same method in every key.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): let the cadence finish and hold its last bass note as home. For each chord, first its job (rest, lift, pull, sad), then check with the bass from home: in G that's G (I), C (IV), D (V), E (vi). In any key, find home on the keyboard first, then count from it. Expect new keys to feel strange at first. The drill runs at your current progressions rung, so you'll meet G, and then any key, once the four chords in C are solid.

```ladder
{ "skill": "progressions", "unlocks": 6, "intro": "Opens \"Four chords in G\", then \"Four chords, any key\"; the drill runs at your current rung." }
```

The bass-line drill takes the same two steps: this lesson opens bass lines of I, IV, V and vi in **G** (bass notes G, C, D and E), then in any key.

**Before the drill, rehearse the method:** replay the cadence and find its lowest note on your keyboard first; that's home. Then play the first bass note of the line, and for each next note ask "up or down, step or jump?" and search from the previous one. Try it now on the G example above: play G, then find C, D and E by following the bass. You'll meet these rungs once inverted-chord roots are solid.

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

## Between lessons

- **3 minutes:** C, then F, G7 or Am at random; say rest, lift, pull or darker home before you look.
- **3 minutes:** play the four cadences (G7 → C, F → C, C → G, G7 → Am) and name each out loud as it ends.
- **2 minutes:** G – C – D – Em with roots in the left hand; then only the roots, eyes closed.
- One progressions or roots session on the Practice page.
