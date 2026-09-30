# Ear-Training Ladders

The ear is the spine of the course, and it cannot be rushed by a calendar. *When* each rung opens, and why, is set by
`docs/EAR_SKILL_MAP.md` (research-based stages and the binding per-lesson unlock table). So ear training is not a list of fixed
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
* **placed out** when the first 10 answers on a rung are all right — a learner who already has the skill skips it in
  one set. The **Placement** page (`/placement`, linked from the dashboard) runs sets of 10 up one ladder from the
  first rung not yet mastered and stops at the first set with a miss: that rung is the learner's level.
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
| 1 | **pitch 1** | **pitch 3** | **pitch 5** | **pitch 6**, **octave 2** | **pitch 7**, **melody 2** |
| 2 | **pitch 8**, **melody 3** | **pitch 9**, **octave 3** | **rhythm 1**, **melody 4** |  |  |
| 3 | melody 4, octave 3 | **degrees 2** | **degrees 4**, melody 4 |  |  |
| 4 | **rhythm 3**, **degrees 5** | **rhythm 5**, **melody 6**, **octave 4** | **rhythm 6** |  |  |
| 5 | **degrees 7**, **melody 7** | **melody 8** | degrees 7, melody 8 |  |  |
| 6 | **roots 1**, **degrees 8** | **chords 1**, **roots 2**, **octave 5** | degrees 8 |  |  |
| 7 | **degrees 10**, octave 5 | **degrees 11**, **melody 9**, **chords 2** | **pitch 10** |  |  |
| 8 | **degrees 13**, **melody 10**, **chords 3** | **progressions 1**, **degrees 14** | **progressions 2**, **roots 4**, **melody 11** |  |  |
| 9 | **degrees 15**, **melody 12** | **degrees 16**, **melody 13** | **progressions 3**, **roots 5**, **octave 6** |  |  |
| 10 | **degrees 17**, **melody 14**, **progressions 5** | **degrees 18**, **melody 16**, **progressions 6** | pitch 10, **octave 7**, degrees 18, melody 16, chords 3, roots 5, progressions 6, rhythm 6 |  |  |
| 11 | **degrees 19**, **melody 17** | **roots 6** | **roots 7** | **progressions 7**, **roots 9** |  |
| 12 | **intervals 2** | **intervals 4** | **intervals 6** | **intervals 7**, **roots 10** |  |
| 13 | **scales 2**, **degrees 21** | **melody 18** |  |  |  |
| 14 | **scales 4**, **degrees 23** | **degrees 25**, **melody 19** |  |  |  |
| 15 | **chords 5**, **intervals 8** | **chords 7**, degrees 25, **intervals 9** | **progressions 8**, **chords 8** |  |  |
| 16 | **progressions 9**, **roots 11** | progressions 9, **intervals 10**, **octave 8** | **roots 12** |  |  |
| 17 | **rhythm 8**, **octave 10** | **rhythm 10** | **rhythm 11**, **melody 20** |  |  |
| 18 | **chords 10**, **intervals 11** | **intervals 12**, **melody 21** | **melody 22**, chords 10 |  |  |
| 19 | **octave 11**, **intervals 13** | **progressions 11** | intervals 13, degrees 25, melody 22, rhythm 11, octave 11, chords 10, **progressions 12**, roots 12 |  |  |
| 20 | **rhythm 12**, progressions 12 | roots 12, **intervals 14** | rhythm 12, roots 12 |  |  |
| 21 | melody 22, **intervals 15**, **octave 12** | melody 22, **intervals 16** | melody 22 |  |  |
| 22 | **roots 13** | **progressions 14**, **roots 14** | roots 14 |  |  |
| 23 | **rhythm 13**, **octave 13** | **rhythm 14** | rhythm 14, roots 14 |  |  |
| 24 | **roots 15**, **progressions 15** | progressions 15, **intervals 18** | melody 22 |  |  |
| 25 | **scales 5**, **degrees 26** | degrees 26, **scales 6** | scales 6, melody 22, degrees 26 |  |  |
| 26 | **degrees 27**, **scales 8** | **degrees 28**, **scales 10** | degrees 28, scales 10 |  |  |
| 27 | **degrees 29**, **progressions 17** | **chords 11**, **progressions 18** | progressions 18, degrees 29, **octave 14** |  |  |
| 28 | melody 22, roots 15 | progressions 18, roots 15 |  |  |  |
| 29 | progressions 18, melody 22 | rhythm 14, roots 15 | **scales 11**, **melody 23**, progressions 18, roots 15, rhythm 14, degrees 29 |  |  |
| 30 | **chords 12** | **chords 13** | chords 13, rhythm 14 |  |  |
| 31 | **chords 14** | chords 14, roots 15 | **progressions 19** |  |  |
| 32 | progressions 19, roots 15 | degrees 29, scales 11 | progressions 19 |  |  |
| 33 | **progressions 20** | **chords 15** | **degrees 30** | progressions 20, roots 15 |  |
| 34 | **scales 12** | degrees 30, melody 23 | melody 23 |  |  |
| 35 | **intervals 19** | **intervals 20** | **intervals 21**, octave 14 | melody 23, roots 15 |  |
| 36 | chords 15, roots 15 | rhythm 14, progressions 20 | rhythm 14, melody 23 |  |  |
| 37 | **rhythm 15** | rhythm 15 | **rhythm 16**, roots 15 |  |  |
| 38 | progressions 20 | progressions 20, rhythm 16 | roots 15 |  |  |
| 39 | rhythm 16, roots 15 | chords 15 | progressions 20 |  |  |
| 40 | **scales 13** | melody 23, scales 13 | scales 13 |  |  |
| 41 | intervals 21, melody 23 | melody 23, progressions 20 | rhythm 16, chords 15 |  |  |
| 42 | rhythm 16, melody 23 | progressions 20, melody 23 | **chords 16** |  |  |
| 43 | progressions 20 | rhythm 16 | roots 15, progressions 20, chords 16, melody 23, scales 13 |  |  |
| 44 | **roots 16**, **progressions 21** | rhythm 16, degrees 30 | — |  |  |
| 45 | roots 16 | roots 16 | roots 16 |  |  |
| 46 | progressions 21 | chords 16 | progressions 21 |  |  |
| 47 | **intervals 22**, **melody 24** | melody 24 | melody 24 |  |  |
| 48 | rhythm 16 | progressions 21 | — |  |  |
| 49 | roots 16 | melody 24 | rhythm 16, progressions 21 |  |  |
| 50 | rhythm 16, progressions 21 | melody 24 | scales 13 |  |  |
| 51 | **chords 17** | rhythm 16 | progressions 21 |  |  |
| 52 | intervals 22 | degrees 30, progressions 21 | chords 17 |  |  |
| 53 | melody 24 | rhythm 16 | rhythm 16 | progressions 21 |  |
| 54 | progressions 21 | rhythm 16 | melody 24 | roots 16 |  |
| 55 | degrees 30, intervals 22, chords 17, roots 16, progressions 21, melody 24, rhythm 16, scales 13 | roots 16 | octave 14 |  |  |

## Rungs

### `pitch` — Pitch (10 rungs)

Hear whether a note goes up or down, and find a note you heard on the keyboard — the ground everything else stands on.

| # | Rung | What changes |
|---|---|---|
| 1 | Higher or lower: far apart | Two notes far apart (up to almost an octave): did the second go up or down? |
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
| 5 | Same or different, one after the other | No candidates to compare: judge a single pair. |
| 6 | Same or different: near-misses | The different note may be a half step off the octave. |
| 7 | Find it on your keyboard | Hear one note, play the same note name in any octave. |
| 8 | Find it: black keys too | All twelve notes, from octave 2 up to 5. |
| 9 | Octave or fifth? (together) | The wrong note is now a 4th/5th away — the most octave-like sound. |
| 10 | Octave or fifth? (one after the other) | The fifth trap, one note after the other. |
| 11 | Two octaves apart: which one? | Candidates may be two octaves up. |
| 12 | Two octaves apart: same or different | Single pairs, one or two octaves apart. |
| 13 | Find the bass note | Very low notes (octaves 1–2) on a bass sound. |
| 14 | Everything at once | All registers, one or two octaves, every kind of wrong note. |

### `degrees` — Scale degrees (home) (30 rungs)

Hear where a note sits relative to home — the skill behind playing melodies by ear and finding the key of a song.

| # | Rung | What changes |
|---|---|---|
| 1 | Home or 3? (with drone) | C major, do or mi, the home note held underneath. |
| 2 | Do, mi or sol (with drone) | Sol joins: the three notes of the home chord. |
| 3 | Do, mi or sol | No drone: hold home in your head. |
| 4 | Re joins | Degree 2, the step above home. |
| 5 | 1 to 5 | Fa (4) joins. |
| 6 | 1 to 6 | La (6) joins. |
| 7 | All seven in C | Ti (7) joins: the whole octave, do to ti. |
| 8 | All seven after a cadence | Same notes; the reference becomes the chord cadence. |
| 9 | Do and sol, other octaves | Only 1 and 5, but the note may be an octave below or above the cadence. |
| 10 | Do, mi, sol, other octaves | The home chord notes in any of three octaves. |
| 11 | All seven, other octaves | Every degree, octave 3, 4 or 5. |
| 12 | Low sol | The range reaches below home: sol under do. |
| 13 | Low la and ti | All seven from low sol up to do′. |
| 14 | Two octaves around home | Any degree, an octave below to an octave above home. |
| 15 | All seven in G | One new key, one octave. |
| 16 | All seven in F | Another new key. |
| 17 | Near keys | C, G, F, D or B♭ — a new home each question, one octave. |
| 18 | Any major key | Every major key, still one octave. |
| 19 | Any key, two octaves | Any key, the note anywhere within an octave of home. |
| 20 | Minor: 1 to 5 in A | A minor, one octave: the darker home. |
| 21 | Minor: all seven in A | Natural minor, all seven. |
| 22 | Minor: near keys | A, E or D minor. |
| 23 | Minor: any key | Every minor key, one then two octaves. |
| 24 | Minor: the raised 7 | Harmonic minor: #7, the leading tone, joins. |
| 25 | Minor: raised 6 and 7 | Melodic minor: #6 joins too. |
| 26 | The flat 3 | ♭3, the blue third, joins the major scale. |
| 27 | The flat 7 | ♭7 joins. |
| 28 | The flat 6 | ♭6 joins. |
| 29 | The sharp 4 | ♯4 joins. |
| 30 | All twelve | ♭2 joins: every chromatic degree. |

### `intervals` — Intervals (22 rungs)

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
| 8 | Seconds to fifths, any register | The same intervals, now from low to high registers. |
| 9 | 5th or octave | P5 vs P8. |
| 10 | Minor or major 6th | m6 vs M6. |
| 11 | 7ths and the octave | m7, M7, P8. |
| 12 | The tritone | P4 vs TT vs P5. |
| 13 | Big intervals, up | Tritone to octave: TT, 6ths, 7ths, P8. |
| 14 | All intervals, up | Small and big together: all twelve, ascending. |
| 15 | Going down | Descending: M2, M3, P4, P5. |
| 16 | Down: seconds to fifths | Descending, the six small and middle intervals. |
| 17 | All intervals, down | All twelve, descending. |
| 18 | Together: 3rd, 5th, octave | Both notes at once. |
| 19 | Together: 3rds and 6ths | The sweet intervals. |
| 20 | Together: the rough ones | M2, TT, m7, M7. |
| 21 | Together: all | All intervals, both notes at once. |
| 22 | Everything | Up, down or together. |

### `chords` — Chord colours (17 rungs)

Hear a chord’s quality (major, minor, seventh…) — half of knowing any chord in a song.

| # | Rung | What changes |
|---|---|---|
| 1 | Major or minor | Two triads: bright vs dark. |
| 2 | Major or minor, any register | The same two colours, low or high. |
| 3 | Major, minor or diminished | The tense diminished triad joins. |
| 4 | Triad or seventh? | Major triad vs dominant 7th. |
| 5 | Major 7 or dominant 7 | Two sevenths on a major triad. |
| 6 | Minor 7 or dominant 7 | Minor vs dominant seventh. |
| 7 | The three sevenths | maj7, dom7, min7. |
| 8 | Triads and dominant 7 | maj, min and dom7 mixed. |
| 9 | Major or sus4 | Suspended: the 3rd replaced by the 4th. |
| 10 | Major, sus2 or sus4 | Both suspensions. |
| 11 | Minor 7 or half-diminished | min7 vs m7b5. |
| 12 | Four sevenths | maj7, dom7, min7, m7b5. |
| 13 | Colour chords | add9 and 6 next to plain major. |
| 14 | Four sevenths, spread out | Open voicing across two octaves. |
| 15 | Diminished or augmented | dim vs aug next to maj/min. |
| 16 | Major 7 or major 9 | The ninth added on top of a maj7. |
| 17 | Sevenths or ninths | Dominant chords too: maj7, maj9, dom7, dom9. |

### `roots` — Roots and bass (16 rungs)

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
| 9 | Bass line, near keys | C, G, F, D or B♭ — a new home each time. |
| 10 | Bass line, any key | The key changes every time. |
| 11 | Bass line with ii and iii | More chords to choose from. |
| 12 | Bass not on the root | Inversions: the bass may be the 3rd or 5th. |
| 13 | Minor-key bass lines | Minor keys. |
| 14 | The borrowed ♭VII in the bass | bVII (a whole step below home) joins the major-key bass lines. |
| 15 | Bass in a band | Full mix: drums, pad and a melody on top. |
| 16 | Band, any chord | Full mix, wider palette. |

### `progressions` — Progressions (21 rungs)

Name the chords of a song by their role in the key (I, IV, V…).

| # | Rung | What changes |
|---|---|---|
| 1 | Home or tension: I or V | Two chords in C. |
| 2 | I, IV, V | IV joins. |
| 3 | I, IV, V, vi | The four pop chords, in C. |
| 4 | Four chords in G | Same, in G. |
| 5 | Four chords, near keys | C, G, F, D or B♭. |
| 6 | Four chords, any key | Random keys. |
| 7 | Adding ii | ii joins. |
| 8 | Adding iii | iii joins. |
| 9 | V or V7 | The dominant with its seventh. |
| 10 | Minor: i, iv, V | A minor, three chords. |
| 11 | IV or iv? | The borrowed minor iv. |
| 12 | V or bVII? | The borrowed bVII. |
| 13 | Minor: the pop minor chords | i, iv, VI, VII in A minor. |
| 14 | Minor, any key | Random minor keys. |
| 15 | In a band | Full mix, four pop chords plus ii. |
| 16 | ii or V/V? | The secondary dominant V/V against ii. |
| 17 | iii or V/vi? | V/vi against iii. |
| 18 | Secondary dominants | Mixed palette. |
| 19 | Sevenths: ii–V–I | Jazz sevenths. |
| 20 | Borrowed chords | bVI joins iv and bVII. |
| 21 | In a band, borrowed too | Full mix, wider palette. |

### `melody` — Melodies (24 rungs)

Play back or write down a melody you hear — the core of playing and transcribing by ear.

| # | Rung | What changes |
|---|---|---|
| 1 | Echo 3 notes (C D E) | Play back 3 notes from do, re, mi. |
| 2 | Echo 4 notes (C D E) | Four notes. |
| 3 | Echo 3 notes (C to G) | Five notes to choose from, do to sol. |
| 4 | Echo 4 notes (C to G) | Four notes from five. |
| 5 | Write 3 notes as degrees | Answer with numbers instead of keys. |
| 6 | Write 4 notes as degrees | Degrees 1–5. |
| 7 | Echo the whole octave | All seven, do up to do′. |
| 8 | Five notes | Longer: 5 notes, one octave. |
| 9 | The tune in another octave | The same kind of tune, played an octave lower or higher. |
| 10 | Below do | Tunes that dip below home (low sol, la, ti). |
| 11 | Two octaves | Tunes spread over two octaves around home. |
| 12 | Five notes in G | A new key, one octave. |
| 13 | Five notes in F | Another key. |
| 14 | Near keys | C, G, F, D or B♭, one octave. |
| 15 | Any key | Any major key, one octave. |
| 16 | Any key: write degrees | Degrees answer in any key. |
| 17 | Any key, any register | Any key, tunes over two octaves. |
| 18 | Minor tunes in A | A natural minor, one octave. |
| 19 | Minor, any key | Any minor key. |
| 20 | Six notes with rhythm | Longer, with simple rhythm. |
| 21 | Leaps | Melodies that jump up to a 6th. |
| 22 | Over chords | A melody with chords underneath. |
| 23 | Eight notes | Longer phrases, freer rhythm. |
| 24 | Chromatic notes | Chromatic neighbour and passing notes. |

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
| 5 | Major or pentatonic | Five notes vs seven. |
| 6 | Minor pentatonic or blues | The blue note. |
| 7 | Major or Mixolydian | The b7, on the same root. |
| 8 | Minor or Dorian | The raised 6, on the same root. |
| 9 | Major or Lydian | The #4. |
| 10 | Minor or Phrygian | The b2. |
| 11 | Four scales | Major, minor, Dorian, Mixolydian. |
| 12 | Six scales | Lydian and Phrygian join. |
| 13 | Six modes as tunes | Melodies instead of scale runs. |
