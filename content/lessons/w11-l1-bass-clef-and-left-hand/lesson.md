---
id: w11-l1-bass-clef-and-left-hand
title: Bass Clef, the Left Hand and Low Notes
week: 11
order: 1
phase: p2
duration_min: 50
goals:
  - Read notes in the bass clef from C2 to C4 using three landmarks
  - Play a bass line with the left hand under chords, then under a melody
  - Name the degree of a note far below or above home, in any key, by bringing it into home's octave
  - Build a DAW sketch with a root bass line under a melody
prerequisites: [w10-l3-phase-1-review-and-ear-assessment]
tags: [reading, bass-clef, left-hand, bass, degrees, keys, daw]
songs:
  - { title: "Canon in D (ground bass)", composer: "Johann Pachelbel", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Bass Clef, the Left Hand and Low Notes

The treble clef covers your right hand. The low notes (the left hand, the bass guitar, the cello) live in the [[bass clef]]. Today you learn to read it, play a real bass line with your left hand, and take your degree hearing down into that low register, in any key. (Both hands together come at the end of this week.)

## Three landmarks

The bass clef is also called the F clef: its two dots sit around the 4th line, and that line is **F3**, the F just below middle C. From there:

- **Middle C (C4)** sits on one ledger line *above* the bass staff (the same C that sits one ledger line below the treble staff).
- **C3** is in the second space from the bottom.
- **G2** is the bottom line; **C2** is two ledger lines below the staff.

Careful: the lines are *not* the same notes as in the treble clef. Bass-clef lines from the bottom: **G B D F A** ("Good Boys Do Fine Always"); spaces: **A C E G** ("All Cows Eat Grass").

```staff
{ "clef": "bass", "key": "C", "timeSig": "4/4", "seq": "C2:q G2:q C3:q F3:q | A3:q C4:h. |" }
```

```example
{
  "title": "Bass-clef landmarks, low to high: C2, G2, C3, F3, C4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C2:q G2:q C3:q F3:q | C4:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "read-note", "title": "Name bass-clef notes",
  "instructions": "Find the nearest landmark (C3, F3 or C4) and count lines and spaces from it.",
  "count": 12, "passScore": 0.7,
  "spec": { "clef": "bass", "range": ["C3", "C4"], "accidentals": false, "answer": "name", "timed": 0 }
}
```

```exercise
{
  "id": "e2", "type": "read-note", "title": "Play bass-clef notes, wider range",
  "instructions": "Play each note in the right octave. Shift your keyboard down if C2 is out of reach.",
  "count": 12, "passScore": 0.7,
  "spec": { "clef": "bass", "range": ["C2", "C4"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

## A famous bass line

Pachelbel's *Canon* (around 1700) is built on an eight-note bass line repeated again and again, a *ground bass*. Countless pop songs built on a repeating chord loop are its descendants. Pachelbel wrote it in D major; here it's moved to **C major**, so you only need white keys. The bass notes are the roots of the chords: C G Am Em F C F G.

```example
{
  "title": "Pachelbel's Canon, ground bass with chords (moved to C major)",
  "bpm": 60, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "bass", "seq": "C3:h G2:h | A2:h E2:h | F2:h C2:h | F2:h G2:h" },
    { "instrument": "strings", "seq": "[E4 G4 C5]:h [D4 G4 B4]:h | [C4 E4 A4]:h [B3 E4 G4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 C4 F4]:h [B3 D4 G4]:h" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```exercise
{
  "id": "e3", "type": "play-melody", "title": "Canon bass, left hand",
  "instructions": "Left hand only, reading the bass clef. The strings play the chords above you.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "C3:h G2:h | A2:h E2:h | F2:h C2:h | F2:h G2:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "strings", "seq": "[E4 G4 C5]:h [D4 G4 B4]:h | [C4 E4 A4]:h [B3 E4 G4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 C4 F4]:h [B3 D4 G4]:h" } }
}
```

## Low notes, any key

Now the ear side of the bass clef. Here's something honest about the low register: very low notes are hard to name, for everyone at first. A bass note in octave 1 or 2 sounds more like a warm thump with a pitch somewhere inside it than like a clear note. Listen to the same C going down through four octaves on a bass sound:

```example
{
  "title": "C4, C3, C2, C1 on a bass sound, then G1 and C2",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "bass", "seq": "C4:q C3:q C2:q C1:q | G1:h C2:h" } ],
  "show": ["keyboard"]
}
```

You already have the method from weeks 7 and 8: **don't name a far note where it is. Bring it home.** Find it on the keyboard, jump by 12 keys into home's octave, and name it there. What's new today is only the combination: last week the key changed every question but the note stayed near home; now the key changes *and* the note may sit up to an octave below home (the bass-clef octave) or above it.

Listen: a cadence in G, then a low D. Then a cadence in F, then a low A.

```example
{
  "title": "Cadence in G, then D3 (degree 5, below home). Cadence in F, then A2 (degree 3, an octave down)",
  "bpm": 80, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "piano", "seq": "[G3 B3 D4]:q [G3 C4 E4]:q [F#3 A3 D4]:q [G3 B3 D4]:q | r:q D3:h r:q | [F3 A3 C4]:q [F3 Bb3 D4]:q [E3 G3 C4]:q [F3 A3 C4]:q | r:q A2:h r:q" },
    { "instrument": "bass", "seq": "G2:q C3:q D3:q G2:q | r:w | F2:q Bb2:q C3:q F2:q | r:w" }
  ],
  "show": ["keyboard"]
}
```

### Try it: bring the low note home

1. Play the G cadence yourself: G, C, D, G (right hand chords, left hand G2 C3 D3 G2). Stop and hold **G3**: that's home.
2. Left hand: play **D2**, low. Don't judge it by how low it is. Right hand: find the same letter near home (D3 or D4, 12 keys up), then walk to G: D – C – B – A – G is four steps down, or D up to G is sol to do. It's **5**.
3. Now F: play the F cadence (F, B♭, C, F), then **A1** or **A2** with the left hand. Right hand: A3, walk down A – G – F. It's **3**.
4. Once more in D (cadence D, G, A, D): play a low **F♯2**, then find F♯3 or F♯4 and walk to D. Also 3: same degree, a different key and a different octave.

Check: a cadence, then one low note. Bring it home on your keyboard before answering.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: which degree, down low?",
  "instructions": "Find the cadence's last bass note (home), then find the question note and move it by 12 keys next to home.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "F", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[F3 A3 C4]:q [F3 Bb3 D4]:q [E3 G3 C4]:q [F3 A3 C4]:q | r:q C3:h r:q" },
        { "instrument": "bass", "seq": "F2:q Bb2:q C3:q F2:q | r:w" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "G", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[G3 B3 D4]:q [G3 C4 E4]:q [F#3 A3 D4]:q [G3 B3 D4]:q | r:q B2:h r:q" },
        { "instrument": "bass", "seq": "G2:q C3:q D3:q G2:q | r:w" } ] }
    ],
    "questions": [
      { "q": "Question 1: the low note is degree…", "choices": ["1", "3", "5"], "answer": 2, "explain": "5: home is F, and the low note is C3, sol below home. Play C4 after it and walk down C – B♭ – A – G – F." },
      { "q": "Question 2: the low note is degree…", "choices": ["1", "3", "5"], "answer": 1, "explain": "3: home is G, and the question was B2, mi below home. Play B3 right after it and walk down B – A – G: two steps." }
    ]
  }
}
```

**If you can't hear it yet:** go in three small steps. 1) Find home: play the cadence's last bass note on your keyboard. 2) Find the question note by height (higher or lower than my key?), in any octave you like. 3) Jump it by 12 keys until it sits just above home, and count the scale steps from home. The drill accepts the degree; the keyboard is always allowed to get you there.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): set home from the cadence; bring a far note into home's octave (find it, jump by 12), then name it there. The drill runs at your current degree rung, so if "Any major key" isn't solid yet, you'll practise that first.

```ladder
{ "skill": "degrees", "unlocks": 19, "intro": "Opens \"Any key, two octaves\": any key, the note up to an octave below or above home; the drill runs at your current rung." }
```

## Tunes in the low register

The same idea works for melodies. A tune played two octaves down, on a bass sound, is still the same tune: the path (up, down, step, skip) is what you remember, not the height.

### Try it: one tune, three heights

1. Right hand in F: play **F G A G F** around F4. Then the left hand plays it an octave lower (F3), then two octaves lower (F2). Same path, three heights.
2. Now reverse it: play **C2 D2 E2 C2** with your left hand, then find the first note with your right hand around C4 and play the path there. Easier to hear up there?
3. That's the whole method: if a tune sits far from home, find its first note in a comfortable octave, then follow the path.

**If you can't hear it yet:** echo the tune in your own comfortable octave and ignore where it was played. The drill accepts any octave. Get the first note, replay, then add two notes at a time.

**Before the drill, rehearse the method** (in the *How to do it* box): home first; if the tune is far from home, find its first note and play the path there, any octave. The drill runs at your current melody rung.

```ladder
{ "skill": "melody", "unlocks": 17, "intro": "Opens \"Any key, any register\": any key, tunes spread over two octaves; the drill runs at your current rung." }
```

## Make it: roots under a melody

```exercise
{
  "id": "e5", "type": "daw-task", "title": "Bass line on roots + melody",
  "spec": {
    "template": { "bpm": 90, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The piano plays I – vi – IV – V twice (C, Am, F, G). 1) Record a bass line with your left hand: the root of each chord between C2 and C4, at least two notes per bar (try half notes, then quarter notes). 2) Add an 8-bar melody on the lead track in C major. Keep leaps to a fifth or less and end on C. Then look at the bass track in the staff view: can you read it in the bass clef?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "C2", "high": "C4", "track": 1 },
      { "kind": "note-count", "min": 16, "max": 64, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "max-leap", "semitones": 7, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

**If the bass part is hard to record:** play the roots as half notes first (C C | A A | F F | G G), one bar at a time, and record in several takes. Quarter notes can come later.

## Between lessons

- **3 minutes, daily:** the Canon bass with your left hand, reading the bass clef; then say each note name aloud as you play it.
- **2 minutes:** one bass-clef landmark per day (C2, G2, C3, F3, C4): find it on the staff and on the keys.
- **2 minutes:** play a cadence in G, F or D, then a random low key with the left hand; bring it home with the right hand and name its degree.
- One Practice-page session: degrees and melody at your rung.
