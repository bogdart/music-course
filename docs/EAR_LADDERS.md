# Ear-Training Ladders

The ear is the spine of the course, and it cannot be rushed by a calendar. So ear training is not a list of fixed
drills in lessons: it is ten **ladders** (one per skill, starting with `pitch`: up/down and finding the exact note), each an ordered list of **rungs**. Lessons *open* rungs;
the learner *masters* them by practice; every ear drill — in a lesson, the lesson warm-up or the Practice page — runs
at the learner's **current rung**: the lowest open rung not yet mastered. Theory, keyboard and DAW work follow the
calendar; the ear goes exactly as fast as it actually goes.

Source of truth for the rungs: `packages/core/src/ladders.ts` (tables below are generated from it).

## Rules the ladders follow

* **One change per rung.** Each rung differs from the one before in exactly one dimension (more choices, a new key,
  another octave, a longer melody, a fuller mix…).
* **Two before many.** A new distinction is first drilled as a two-way contrast (IV vs iv, min7 vs m7♭5, minor vs
  Dorian on the same root) before it joins a wider choice.
* **Easiest perceptual cue first.** Notes together before one after the other; one octave before two; clashing wrong
  notes before the confusable fifth; a drone before no drone; home run (melody) before cadence (chords); one key for
  weeks before random keys; bass alone before a full mix.
* **A method for every rung.** Each rung carries a practical "How to do it" (`packages/core/src/ladder-methods.ts`):
  what to do with ears and keyboard, and what to try when you can't hear it yet. It is shown with every drill.
* **Feedback that teaches.** Degree answers walk home automatically (e.g. 6 → 7 → 1); octave items offer "Listen
  again" comparisons (both together, the real octave, walking the octaves).

## Mastery

Per rung, from the learner's first answer to each item (`attempts` with lesson id `ladder`, exercise id = rung id):

* **mastered** when the last 20 answers are ≥ 85% correct *and* span at least two sessions (a session starts after
  2 h without activity) — or are ≥ 95% correct in one go;
* **lost again** when the last 10 answers drop below 70% (reviews catch forgetting).

`GET /api/ladder` returns, per skill: `unlocked` (highest open rung), `current`, `behind` (open rungs not mastered),
`complete`, and every rung's status. `POST /api/ladder/unlock {skill, unlocks}` opens rungs (never lowers).

## Where drills happen

* **Lessons** — a ```` ```ladder ```` block (below) opens rungs and drills the current rung, explaining the gap when the
  learner is below the lesson's rungs ("This lesson opens up to rung 6; you're on rung 4…").
* **Warm-up** — at the top of each lesson: 5 items of the current rung of the skill furthest behind.
* **Practice page** — a session = the current rung of up to 3 skills (furthest behind first, 10 items each) + 2 short
  reviews (5 items) of mastered rungs; then any remaining SRS review cards of non-ladder lesson exercises.
* **Dashboard** — per-skill ladder bars; when any skill has ≥ 3 open rungs not mastered it says *practise first*
  (the lesson stays open: theory is not blocked, but new material is not assumed).

## The ```ladder block

```ladder
{ "skill": "degrees", "unlocks": 5, "intro": "Degree 5 (sol) joins today." }
```

* `skill` — one of the ten skills below; `unlocks` — rungs 1…N of that skill are open once the block is reached;
  `intro` (optional) — one sentence shown above the drill.
* Authoring: every *graded* ear drill in a lesson is a ladder block. Place it after the prose that teaches what its
  new rungs need. Fixed `ear-*` exercise blocks remain only for (a) transcribing an attached example (a mystery song,
  a lesson piece) and (b) one-off listening tied to a specific piece; `listen` blocks for questions about an example.
* A lesson's prose must never assume the learner already hears a rung: the drill below may be at a lower rung.
* Open at most ~2 new rungs per skill per lesson; the unlock schedule below is the plan. Unlock numbers of a skill
  must not decrease along the curriculum (a lesson may repeat an earlier `unlocks` as review).

## Unlock schedule (generated from the lessons)

Per lesson: the ```ladder blocks in order; **bold** = opens new rungs (the value is the highest rung open
afterwards), plain = review of rungs already open. Regenerate with `npm run docs:ladders`.

| Week | l1 | l2 | l3 | l4 | l5 |
|---|---|---|---|---|---|
| 1 | **pitch 1** | **pitch 3** | **pitch 5** | **pitch 6**, **octave 2** | **pitch 7**, **melody 1**, **octave 3** |
| 2 | **pitch 8**, **melody 2**, **octave 4** | **intervals 1**, **pitch 9**, **octave 5** | **rhythm 1** |  |  |
| 3 | **pitch 10**, **melody 4**, **octave 6** | **degrees 2** | **degrees 3**, **melody 5** |  |  |
| 4 | **rhythm 3**, **degrees 4**, **octave 7** | **rhythm 5**, **melody 6** | **rhythm 6** |  |  |
| 5 | **intervals 3**, **degrees 5** | **intervals 5** | **intervals 7**, **octave 8** |  |  |
| 6 | **roots 1**, **degrees 6** | **chords 2**, **roots 2** | **degrees 8** |  |  |
| 7 | **degrees 10** | **melody 8** | degrees 10, chords 2 |  |  |
| 8 | **progressions 1**, **degrees 12**, **melody 10** | pitch 10, octave 8, degrees 12, intervals 7, chords 2, melody 10, rhythm 6 | **progressions 2**, **roots 4**, **octave 9** |  |  |
| 9 | **scales 2** | **scales 4**, **degrees 14** | **melody 11**, **octave 10** |  |  |
| 10 | **octave 12**, **intervals 9** | **intervals 11** | **octave 13** |  |  |
| 11 | **roots 5** | **roots 7**, **degrees 15** | **progressions 3** |  |  |
| 12 | **chords 4**, **intervals 12** | **progressions 4**, **degrees 16** | **chords 6** |  |  |
| 13 | **progressions 6**, **roots 9** | **progressions 7**, **chords 7** | **progressions 8** |  |  |
| 14 | **rhythm 8** | **rhythm 10** | **rhythm 11** |  |  |
| 15 | **melody 12** | **intervals 14**, **melody 13** | **chords 9**, progressions 8 |  |  |
| 16 | **octave 14**, **degrees 17** | **progressions 10**, **degrees 18** | chords 9, **progressions 11**, roots 9 |  |  |
| 17 | **rhythm 12**, progressions 11 | **roots 10** | rhythm 12, roots 10 |  |  |
| 18 | **melody 14** | **melody 15**, **intervals 16** | **melody 16** |  |  |
| 19 | **roots 11** | **roots 12**, **progressions 13** | **roots 13** |  |  |
| 20 | **rhythm 13** | **rhythm 14** | rhythm 14, roots 13 |  |  |
| 21 | **roots 14** | **progressions 14**, **intervals 18** | **melody 17** |  |  |
| 22 | **degrees 19**, **scales 6** | **scales 8** | degrees 19, scales 8 |  |  |
| 23 | **scales 9** | **degrees 20**, **scales 10** | scales 10, melody 17 |  |  |
| 24 | **degrees 21**, **progressions 16** | **chords 10**, **progressions 17** | progressions 17, degrees 21 |  |  |
| 25 | melody 17, roots 14 | progressions 17, roots 14 |  |  |  |
| 26 | progressions 17, melody 17 | rhythm 14, roots 14 | **scales 11**, **melody 18**, progressions 17, roots 14, rhythm 14, degrees 21 |  |  |
| 27 | **chords 11** | **chords 12** | chords 12, rhythm 14 |  |  |
| 28 | **chords 13** | chords 13, roots 14 | **progressions 18** |  |  |
| 29 | progressions 18, roots 14 | degrees 21, scales 11 | progressions 18 |  |  |
| 30 | **progressions 19** | **chords 14** | **degrees 22** | progressions 19, roots 14 |  |
| 31 | **scales 12** | degrees 22, melody 18 | melody 18 |  |  |
| 32 | **intervals 19** | **intervals 20** | intervals 20, octave 14 | melody 18, roots 14 |  |
| 33 | chords 14, roots 14 | rhythm 14, progressions 19 | rhythm 14, melody 18 |  |  |
| 34 | **rhythm 15** | rhythm 15 | **rhythm 16**, roots 14 |  |  |
| 35 | progressions 19 | progressions 19, rhythm 16 | roots 14 |  |  |
| 36 | rhythm 16, roots 14 | chords 14 | progressions 19 |  |  |
| 37 | **scales 13** | melody 18, scales 13 | scales 13 |  |  |
| 38 | intervals 20, melody 18 | melody 18, progressions 19 | rhythm 16, chords 14 |  |  |
| 39 | rhythm 16, melody 18 | progressions 19, melody 18 | **chords 15** |  |  |
| 40 | progressions 19 | rhythm 16 | roots 14, progressions 19, chords 15, melody 18, scales 13 |  |  |
| 41 | **roots 15**, **progressions 20** | rhythm 16, degrees 22 | — |  |  |
| 42 | roots 15 | roots 15 | roots 15 |  |  |
| 43 | progressions 20 | chords 15 | progressions 20 |  |  |
| 44 | **intervals 21**, **melody 19** | melody 19 | melody 19 |  |  |
| 45 | rhythm 16 | progressions 20 | — |  |  |
| 46 | roots 15 | melody 19 | progressions 20 |  |  |
| 47 | progressions 20 | melody 19 | scales 13 |  |  |
| 48 | **chords 16** | rhythm 16 | progressions 20 |  |  |
| 49 | intervals 21 | degrees 22, progressions 20 | chords 16 |  |  |
| 50 | melody 19 | rhythm 16 | rhythm 16 | progressions 20 |  |
| 51 | progressions 20 | rhythm 16 | melody 19 | roots 15 |  |
| 52 | degrees 22, intervals 21, chords 16, roots 15, progressions 20, melody 19, rhythm 16, scales 13 | roots 15 | octave 14 |  |  |

## Rungs

### `pitch` — Pitch (10 rungs)

Hear whether a note goes up or down, and find a note you heard on the keyboard — the ground everything else stands on.

| # | Rung | What changes |
|---|---|---|
| 1 | Higher or lower: far apart | Two notes far apart: did the second go up or down? |
| 2 | Higher or lower: closer | The notes are a 3rd to a 5th apart. |
| 3 | Higher or lower: neighbours | Only a step or two apart. |
| 4 | Find it: C, D or E | Hear a note, find the exact key among three. |
| 5 | Find it: C to G | Five keys to search. |
| 6 | Same note or not? | Two notes: exactly the same, or different (a 3rd or more apart)? |
| 7 | Same note or not: close | The different note is only a half or whole step away. |
| 8 | Find it: all white keys | Seven keys, C4 to B4. |
| 9 | Find it: black keys too | All twelve keys of the octave. |
| 10 | Find it: two octaves | The note may be in octave 3 or 4. |

### `octave` — Octaves (14 rungs)

Hear the same note name through different heights — the base of hearing bass lines, chords and melodies in any register.

| # | Rung | What changes |
|---|---|---|
| 1 | Together: octave or clash | Two notes at once, one octave vs a tritone. |
| 2 | Together: octave or near-miss | The wrong note is now a half step off the octave. |
| 3 | Which one is the octave? | One after the other: pick the octave out of two candidates. |
| 4 | Which one is the octave? (near-misses) | The wrong candidate can now be a half step off. |
| 5 | Find it on your keyboard | Hear one note, play the same note name in any octave. |
| 6 | Same or different, one after the other | No candidates to compare: judge a single pair. |
| 7 | Same or different: near-misses | The different note may be a half step off the octave. |
| 8 | Find it: black keys too | All twelve notes, from octave 2 up to 5. |
| 9 | Two octaves apart: which one? | Candidates may be two octaves up. |
| 10 | Two octaves apart: same or different | Single pairs, one or two octaves apart. |
| 11 | Octave or fifth? (together) | The wrong note is now a 4th/5th away — the most octave-like sound. |
| 12 | Octave or fifth? (one after the other) | The fifth trap, one note after the other. |
| 13 | Find the bass note | Very low notes (octaves 1–2) on a bass sound. |
| 14 | Everything at once | All registers, one or two octaves, every kind of wrong note. |

### `degrees` — Scale degrees (home) (22 rungs)

Hear where a note sits relative to home — the skill behind playing melodies by ear and finding the key of a song.

| # | Rung | What changes |
|---|---|---|
| 1 | Home or 3? (with drone) | C major, the home note held underneath. |
| 2 | 1, 2 or 3? (with drone) | Degree 2 joins. |
| 3 | 1, 2 or 3? | No drone: hold home in your head. |
| 4 | 1 to 4 | Degree 4 (fa) joins — tense, leans down to 3. |
| 5 | 1 to 5 | Degree 5 (sol) joins. |
| 6 | 1 to 5 after a cadence | The reference becomes the chord cadence. |
| 7 | 1, 3, 5 or 6 | Degree 6 (la) joins, against the home chord tones. |
| 8 | 1 to 6 | All of 1–6. |
| 9 | 1 to 6 in G | Same, in G major. |
| 10 | 1 to 6 in F | Same, in F major. |
| 11 | 1, 2 or 7 | Degree 7 (ti), the leading tone, against its neighbours. |
| 12 | All seven in C | The whole scale. |
| 13 | Minor: 1 to 5 | A minor (natural), with a minor cadence. |
| 14 | Minor: all seven | All seven degrees of A natural minor. |
| 15 | Any key: 1 to 5 | The key changes every question; the cadence tells you home. |
| 16 | Any key: all seven | All seven degrees in random keys. |
| 17 | Any key, any octave | The note may sound an octave below the cadence. |
| 18 | Minor, any key | Minor keys, random. |
| 19 | The flat 7 | b7 (the Mixolydian / blues note) joins 1–7. |
| 20 | The flat 3 | b3 (the blue third) joins. |
| 21 | The sharp 4 | #4 (Lydian, and the note of V/V) joins. |
| 22 | All twelve | Every chromatic degree. |

### `intervals` — Intervals (21 rungs)

Hear the distance between two notes — useful for melodies and for checking what you hear.

| # | Rung | What changes |
|---|---|---|
| 1 | Half step or whole step | m2 vs M2, going up. |
| 2 | Whole step or major 3rd | M2 vs M3. |
| 3 | Minor or major 3rd | m3 vs M3 — dark vs bright. |
| 4 | 4th or 5th | P4 vs P5 (Here Comes the Bride vs Twinkle). |
| 5 | 3rd, 4th or 5th | Three choices. |
| 6 | Seconds and thirds | The four small intervals together. |
| 7 | Seconds to fifths | The 4th and 5th join the small intervals. |
| 8 | 5th or octave | P5 vs P8. |
| 9 | Minor or major 6th | m6 vs M6. |
| 10 | 7ths and the octave | m7, M7, P8. |
| 11 | The tritone | P4 vs TT vs P5. |
| 12 | Big intervals, up | Tritone to octave: TT, 6ths, 7ths, P8. |
| 13 | All intervals, up | Small and big together: all twelve, ascending. |
| 14 | Going down | Descending: M2, M3, P4, P5. |
| 15 | Down: seconds to fifths | Descending, the six small and middle intervals. |
| 16 | All intervals, down | All twelve, descending. |
| 17 | Together: 3rd, 5th, octave | Both notes at once. |
| 18 | Together: 3rds and 6ths | The sweet intervals. |
| 19 | Together: the rough ones | M2, TT, m7, M7. |
| 20 | Together: all | All intervals, both notes at once. |
| 21 | Everything | Up, down or together. |

### `chords` — Chord colours (16 rungs)

Hear a chord’s quality (major, minor, seventh…) — half of knowing any chord in a song.

| # | Rung | What changes |
|---|---|---|
| 1 | Major or minor | Two triads: bright vs dark. |
| 2 | Major, minor or diminished | The tense diminished triad joins. |
| 3 | Triad or seventh? | Major triad vs dominant 7th. |
| 4 | Major 7 or dominant 7 | Two sevenths on a major triad. |
| 5 | Minor 7 or dominant 7 | Minor vs dominant seventh. |
| 6 | The three sevenths | maj7, dom7, min7. |
| 7 | Triads and dominant 7 | maj, min and dom7 mixed. |
| 8 | Major or sus4 | Suspended: the 3rd replaced by the 4th. |
| 9 | Major, sus2 or sus4 | Both suspensions. |
| 10 | Minor 7 or half-diminished | min7 vs m7b5. |
| 11 | Four sevenths | maj7, dom7, min7, m7b5. |
| 12 | Colour chords | add9 and 6 next to plain major. |
| 13 | Four sevenths, spread out | Open voicing across two octaves. |
| 14 | Diminished or augmented | dim vs aug next to maj/min. |
| 15 | Major 7 or major 9 | The ninth added on top of a maj7. |
| 16 | Sevenths or ninths | Dominant chords too: maj7, maj9, dom7, dom9. |

### `roots` — Roots and bass (15 rungs)

Hear the bass note / the root of a chord — the key to naming chords and hearing progressions.

| # | Rung | What changes |
|---|---|---|
| 1 | Root of a major chord | Play the root of a root-position major triad. |
| 2 | Root of major or minor | Minor chords too. |
| 3 | Bass line: I and V | Two chords in C, play their bass notes. |
| 4 | Bass line: I, IV, V | Three chords in C. |
| 5 | Bass line: I, IV, V, vi | Four chords in C, including vi. |
| 6 | Root when the chord is inverted | The root is no longer the lowest note (major chords). |
| 7 | Inverted major and minor | Minor chords too. |
| 8 | Bass line in G | Same four chords in G. |
| 9 | Bass line, any key | The key changes every time. |
| 10 | Bass line with ii and iii | More chords to choose from. |
| 11 | Bass not on the root | Inversions: the bass may be the 3rd or 5th. |
| 12 | Minor-key bass lines | Minor keys. |
| 13 | The borrowed ♭VII in the bass | bVII (a whole step below home) joins the major-key bass lines. |
| 14 | Bass in a band | Full mix: drums, pad and a melody on top. |
| 15 | Band, any chord | Full mix, wider palette. |

### `progressions` — Progressions (20 rungs)

Name the chords of a song by their role in the key (I, IV, V…).

| # | Rung | What changes |
|---|---|---|
| 1 | Home or tension: I or V | Two chords in C. |
| 2 | I, IV, V | IV joins. |
| 3 | I, IV, V, vi | The four pop chords, in C. |
| 4 | V or V7 (in C) | The dominant with its seventh. |
| 5 | Four chords in G | Same, in G. |
| 6 | Four chords, any key | Random keys. |
| 7 | Adding ii | ii joins. |
| 8 | Adding iii | iii joins. |
| 9 | Minor: i, iv, V | A minor, three chords. |
| 10 | IV or iv? | The borrowed minor iv. |
| 11 | V or bVII? | The borrowed bVII. |
| 12 | Minor: the pop minor chords | i, iv, VI, VII in A minor. |
| 13 | Minor, any key | Random minor keys. |
| 14 | In a band | Full mix, four pop chords plus ii. |
| 15 | ii or V/V? | The secondary dominant V/V against ii. |
| 16 | iii or V/vi? | V/vi against iii. |
| 17 | Secondary dominants | Mixed palette. |
| 18 | Sevenths: ii–V–I | Jazz sevenths. |
| 19 | Borrowed chords | bVI joins iv and bVII. |
| 20 | In a band, borrowed too | Full mix, wider palette. |

### `melody` — Melodies (19 rungs)

Play back or write down a melody you hear — the core of playing and transcribing by ear.

| # | Rung | What changes |
|---|---|---|
| 1 | Echo 3 notes (C D E) | Play back 3 notes from C, D, E. |
| 2 | Echo 4 notes (C D E) | Four notes. |
| 3 | Echo 3 notes (C to G) | Five notes to choose from. |
| 4 | Echo 4 notes (C to G) | Four notes from five. |
| 5 | Write 3 notes as degrees | Answer with numbers instead of keys. |
| 6 | Write 4 notes as degrees | Degrees 1–5. |
| 7 | Echo with 6 | Degrees 1–6, after a cadence. |
| 8 | Echo with 6 in G | Same range, now in G major. |
| 9 | Echo the whole scale | All seven degrees. |
| 10 | Five notes | Longer: 5 notes. |
| 11 | Minor tunes in A | A natural minor, five notes. |
| 12 | Any key: 4 notes (1–5) | Random keys, short. |
| 13 | Any key: 5 notes | Random keys, whole scale. |
| 14 | Any key: write degrees | Degrees answer in random keys. |
| 15 | Six notes with rhythm | Longer, with simple rhythm. |
| 16 | Leaps | Melodies that jump up to a 6th. |
| 17 | Over chords | A melody with chords underneath. |
| 18 | Eight notes | Longer phrases, freer rhythm. |
| 19 | Chromatic notes | Chromatic neighbour and passing notes. |

### `rhythm` — Rhythm (16 rungs)

Hear and reproduce rhythms, grooves, meters and tempos.

| # | Rung | What changes |
|---|---|---|
| 1 | Choose the rhythm: quarters and halves | Pick the notation you heard. |
| 2 | Choose: with eighths | Eighth notes, 3 choices. |
| 3 | Tap it back: quarters | Tap the rhythm yourself. |
| 4 | Tap it back: eighths and rests | Eighths and rests. |
| 5 | Meter: 3 or 4? | Hear the time signature. |
| 6 | Tap in 3/4 | Waltz time. |
| 7 | Choose: sixteenths | Sixteenth notes. |
| 8 | Tap: sixteenths | Tap sixteenths. |
| 9 | Choose: triplets | Eighth-note triplets. |
| 10 | Meter: 3/4, 4/4, 6/8 | Compound 6/8 joins. |
| 11 | Two bars | Two bars of sixteenths. |
| 12 | Tempo | Estimate the BPM. |
| 13 | Drums: kick and snare | Two drum voices on a grid. |
| 14 | Drums: kick, snare, hi-hat | Three voices. |
| 15 | Four or five? | 5/4 against 4/4. |
| 16 | Odd meters | 7/8 joins, with all the others. |

### `scales` — Scale colours (13 rungs)

Hear the colour of a scale or mode — major, minor, Dorian, blues…

| # | Rung | What changes |
|---|---|---|
| 1 | Major or minor scale | Two scales on C, played up. |
| 2 | Major or minor tune | As a short melody instead of a scale. |
| 3 | Natural or harmonic minor | The raised 7th. |
| 4 | Three minors | Natural, harmonic, melodic. |
| 5 | Major or Mixolydian | The b7, on the same root. |
| 6 | Minor or Dorian | The raised 6, on the same root. |
| 7 | Major or Lydian | The #4. |
| 8 | Minor or Phrygian | The b2. |
| 9 | Major or pentatonic | Five notes vs seven. |
| 10 | Minor pentatonic or blues | The blue note. |
| 11 | Four scales | Major, minor, Dorian, Mixolydian. |
| 12 | Six scales | Lydian and Phrygian join. |
| 13 | Six modes as tunes | Melodies instead of scale runs. |
