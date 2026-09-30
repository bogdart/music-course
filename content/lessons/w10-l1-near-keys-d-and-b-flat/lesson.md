---
id: w10-l1-near-keys-d-and-b-flat
title: "Near Keys: D and B♭"
week: 10
order: 1
phase: p1
duration_min: 45
goals:
  - "Use the circle of fifths to find the next keys: D major (two sharps) and B♭ major (two flats), and build both"
  - Play D and B♭ major and their cadences
  - "Name degrees and echo tunes when home changes every question among C, G, F, D and B♭, by setting home from the cadence"
prerequisites: [w09-l3-same-melody-three-keys-daw]
tags: [keys, circle-of-fifths, key-signature, scales, ear, keyboard]
---

# Near keys: D and B♭

Last week you took home from C to G, and from C to F — one key at a time, each drilled on its own. Today two things change, in order: first two more keys on paper and under your fingers, then the ear's next step: **a new home every question**, among the five keys closest to C.

## One more step round the circle

In week 9 you took a first look at the [[circle of fifths]]: up a 5th from C is G (one sharp), down a 5th is F (one flat). Take one more step each way:

| Direction | Key | Sharps / flats | The new one is… |
|---|---|---|---|
| up a 5th from G | **D major** | F♯, **C♯** | degree 7 of D |
| down a 5th from F | **B♭ major** | B♭, **E♭** | degree 4 of B♭ |

Each step keeps the old sharps or flats and adds one. You can always rebuild a key from scratch with the step pattern W-W-H-W-W-W-H and the rule *every letter once*:

- **D:** D →W→ E →W→ **F♯** →H→ G →W→ A →W→ B →W→ **C♯** →H→ D
- **B♭:** **B♭** →W→ C →W→ D →H→ **E♭** →W→ F →W→ G →W→ A →H→ B♭

```example
{
  "title": "D major, then B♭ major, up and down",
  "bpm": 90, "timeSig": "4/4", "key": "D",
  "tracks": [ { "instrument": "piano", "seq": "D4:q E4:q F#4:q G4:q | A4:q B4:q C#5:q D5:q | D5:q C#5:q B4:q A4:q | G4:q F#4:q E4:q D4:q | r:w | Bb3:q C4:q D4:q Eb4:q | F4:q G4:q A4:q Bb4:q | Bb4:q A4:q G4:q F4:q | Eb4:q D4:q C4:q Bb3:q" } ],
  "show": ["staff", "keyboard"]
}
```

**Try it:**

1. Play D major with C natural instead of C♯ near the top, then with C♯. Where does the scale "lose its way"? (Same test as G major and F♯ last week.)
2. D major fingering: like C and G — 1 2 3, thumb under, 1 2 3 4 5.
3. B♭ major starts on a black key: fingers **4 1 2 3** (B♭ C D E♭), then **1 2 3 4** (F G A B♭) — finger 4 always lands on B♭. Slowly; this one takes a few days.

```exercise
{
  "id": "k1",
  "type": "play-scale",
  "title": "D major, one octave",
  "instructions": "Same fingering as C and G. Two black keys: F♯ and C♯.",
  "passScore": 0.75,
  "spec": { "root": "D", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "k2",
  "type": "play-scale",
  "title": "B♭ major, one octave",
  "instructions": "Right hand 4 1 2 3 (B♭ C D E♭), then 1 2 3 4 (F G A B♭): finger 4 on B♭ both times. Slow tempo, no hurry.",
  "passScore": 0.7,
  "spec": { "root": "Bb", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 50, "metronome": true }
}
```

```exercise
{
  "id": "e1",
  "type": "key-signature",
  "title": "Name the key: five near keys",
  "count": 10,
  "passScore": 0.75,
  "spec": { "keys": ["C", "G", "F", "D", "Bb"], "prompt": "staff", "answer": "name" }
}
```

```exercise
{
  "id": "e2",
  "type": "build-scale",
  "title": "Build D and B♭ major",
  "count": 6,
  "passScore": 0.75,
  "spec": { "roots": ["D", "Bb", "G", "F"], "scale": "major", "prompt": "name" }
}
```

## A new home every question

Up to now each drill kept one home for a whole session: C, then G, then F. The next degree rung picks the key **per question** from C, G, F, D and B♭. Nothing about the degrees changes — 3 still feels at rest and bright, 7 still leans up. What changes is that you must let go of the last home and take the new one, every time.

```example
{
  "title": "Cadence in D, then 3 (F♯); cadence in B♭, then 3 (D)",
  "bpm": 80, "timeSig": "4/4", "key": "D",
  "tracks": [ { "instrument": "piano", "seq": "[D3 D4 F#4 A4]:q [G3 D4 G4 B4]:q [A3 C#4 E4 A4]:q [D3 D4 F#4 A4]:q | D4:h F#4:h | r:w | [Bb2 Bb3 D4 F4]:q [Eb3 Bb3 Eb4 G4]:q [F3 A3 C4 F4]:q [Bb2 Bb3 D4 F4]:q | Bb3:h D4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the D cadence: D F♯ A → D G B → C♯ E A → D F♯ A. Play D4 alone after it: home. Then F♯4: mi, bright, at rest.
2. Play the B♭ cadence: B♭ D F → B♭ E♭ G → A C F → B♭ D F. Then B♭3, then D4. D4 was *home* a minute ago; now it's mi. The note didn't change — its job did.
3. Alternate: C cadence → E4; D cadence → F♯4; B♭ cadence → D4. Three different notes, the same feeling: 3.

**The practical routine** (the drill's **How to do it**):

1. **Let the cadence finish.** Don't answer anything yet. Hold its last bass note in your head — or play it — as **1**.
2. Then the question note: your one-key method (at rest or leaning, which way, walk home).
3. **Press Reference whenever home slips** — for example, when the previous key is still ringing in your head. That's not cheating; it's what the button is for.

**If you can't hear it yet:** find home on the keyboard first (search the cadence's last bass note), then find the question note and count scale steps up from home — with this key's sharps or flats.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: home moves",
  "instructions": "Each example plays a cadence in some key, then one note. Find home first, then the note.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "D", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[D3 D4 F#4 A4]:q [G3 D4 G4 B4]:q [A3 C#4 E4 A4]:q [D3 D4 F#4 A4]:q | r:h A4:h" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "Bb", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[Bb2 Bb3 D4 F4]:q [Eb3 Bb3 Eb4 G4]:q [F3 A3 C4 F4]:q [Bb2 Bb3 D4 F4]:q | r:h A4:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is degree…", "choices": ["1", "5", "7"], "answer": 1, "explain": "Home is D; A is D E F♯ G A — degree 5, open and stable." },
      { "q": "Question 2: the note is degree…", "choices": ["1", "5", "7"], "answer": 2, "explain": "Home is B♭; A is the leading tone, a half step under the upper B♭. The same A was 5 in the question before." }
    ]
  }
}
```

### Before the degree and melody drills

Honest expectation: a new home each question is hard at first. Most people's accuracy drops for a few sessions, mostly on the first question after a key change. It recovers as "take the new home" becomes a habit. The melody rung does the same for echoes: find home from the cadence on the keyboard, then the first note relative to home, then the path.

```ladder
{ "skill": "degrees", "unlocks": 17, "intro": "Opens \"Near keys\": C, G, F, D or B♭, a new home each question, one octave." }
```

```ladder
{ "skill": "melody", "unlocks": 14, "intro": "Opens \"Near keys\" echoes: five notes in C, G, F, D or B♭." }
```

## The four chords in other keys

The progressions ladder moves the four pop chords — I, IV, V, vi — first to G, then to all five near keys. The roles don't change: rest, lift, pull, sad. Only the bass notes do: in G they're **G, C, D, E**.

```chords
{ "key": "G", "bars": ["G", "Em", "C", "D"], "roman": true, "play": true, "bpm": 72 }
```

**Try it:** play I – vi – IV – V in G with your left hand on the bass (G2, E2, C3, D3) and your right on the chords. Name each chord's role aloud as you play it.

**If you can't hear it yet:** set home from the cadence's bass, then find each chord's bass note and count up from home: 1 = I, 4 = IV, 5 = V, 6 = vi.

```ladder
{ "skill": "progressions", "unlocks": 5, "intro": "Opens the four chords in G, then in all five near keys; the drill runs at your current rung." }
```

## Between lessons

- **Keyboard, 3 minutes a day:** D major and B♭ major up and down; then the D and B♭ cadences.
- **Two Practice sessions of about 10 minutes.** Before each near-key degree question, wait for the cadence to end and play its last bass note yourself.
- **Ready?** If the degrees bar is still on G or F, that's fine — the near-key rung waits. Next lesson opens every major key.
