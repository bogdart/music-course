# Ear Skill Map

The ear curriculum as stages. It decides **when** each ear skill opens (the unlock table below is binding for lesson
authors) and **why** in that order. Mechanics (ladders, mastery, known rungs) are in `docs/EAR_LADDERS.md`; the rungs
themselves in `packages/core/src/ladders.ts`.

Assumed practice: ~30 min/day, 5–6 days/week (the owner's choice). The ladders gate by mastery, so week numbers are
the *earliest* a rung opens, not a deadline.

## Where the pacing comes from

Established programs (research summary, September 2026):

* **One variable at a time**: note set, *or* register, *or* key, *or* mode. Register before a new mode; new keys only
  once the degree set is stable; the cadence is removed last. (Karpinski *Manual for Ear Training and Sight Singing*,
  Ottman/Rogers *Music for Sight Singing*, the Functional Ear Trainer's "half a scale → full octave → multiple octaves
  → different scales".)
* **Register grows slowly**: Kodály keeps melodies inside do–do' for a long time; low la and low sol come a school year
  after do-re-mi (Wichita State Kodály sequence). Russian music-school solfège keeps early work in C4–E5.
* **Octave equivalence is hard and improves slowly** even with training (Hoeschele et al. 2012; Schmidt 2025) — a
  year-long strand, never a unit.
* **Keys**: one key, then near keys (G, F, then D, B♭), always with a cadence; random keys in a narrow register before
  random keys across two octaves. (Music-school year 1: C, G, F; Karpinski: degrees without keys first, all keys
  mid-semester.) Pitch distance matters more to non-musicians than key distance (Bartlett & Dowling 1980).
* **Minor** in one familiar key after major is solid (Berklee: ET1 major only, minor in ET2); harmonic/melodic minor
  and modes later. **Chromatic degrees** in the order ♭3, ♭7, ♭6, ♯4, ♭2 (Functional Ear Trainer).
* **Intervals come after scale degrees**, as names for what is already heard (Karpinski ch. 13; Cleland & Dobrea).
* Typical span from "degrees in one octave of one key" to "any octave, any major key": **2–4 months**.

The learner started able to tell higher/lower and to find notes within one octave of C major; other octaves and other keys broke their hearing. Those skills (pitch rungs 1–8, melody rungs 1–2) are recorded as known in their profile, so lessons and practice start beyond them.

## Stages of the tonal spine (degrees + melody)

| Stage | What changes | Rungs | Weeks |
|---|---|---|---|
| 1 C major, one octave | note set grows: do/mi → do-mi-sol → re → fa → la → ti; home run, then cadence | degrees 1–8, melody 1–8 | 3–6 |
| 2 Register | the same notes in other octaves (do and sol first) | degrees 9–11, melody 9 | 7 |
| 3 Below do | low sol, then low la/ti, then two octaves | degrees 12–14, melody 10–11 | 8 |
| 4 Keys | G → F → near keys (C G F D B♭) → any key, narrow → any key, two octaves | degrees 15–19, melody 12–17 | 9–11 |
| 5 Minor | A minor → near minor keys → any minor → raised 7, raised 6 | degrees 20–25, melody 18–19 | 13–14 |
| 6 Chromatic | ♭3 (blues) → ♭7 → ♭6 (modes) → ♯4 (V/V) → all twelve | degrees 26–30 | 25–33 |

Parallel strands: **pitch** (weeks 1–7; rungs 1–8 are recorded as the learner's already), **octave** (weeks 1–27, one rung every ~2 weeks),
**harmony** (roots/bass and progressions follow the same key stages: C → G → near → any), **intervals** (from week 12,
as naming; narrow register first), **chords** (qualities, narrow register first), **rhythm** and **scales**.

## Unlock table

Generated from the lessons (`npm run docs:ladders`): the ```ladder blocks that OPEN rungs in each lesson (`skill N` =
`"unlocks": N`). Lessons not listed only review. To move an unlock, edit the lessons and regenerate. Rules, checked by
`python3 scripts/check-ladder-pacing.py`: never more than 2 new rungs per skill per lesson, never a value lower than one
already opened, and a rung only after the prose that teaches it and not before its stage above.

| Lesson | Opens |
|---|---|
| w01-l1 | pitch 2 |
| w01-l2 | pitch 4, octave 2 |
| w01-l3 | pitch 6, melody 2 |
| w02-l1 | pitch 8, melody 3 |
| w02-l2 | pitch 9, octave 3 |
| w02-l3 | rhythm 1, melody 4 |
| w03-l2 | degrees 2 |
| w03-l3 | degrees 4 |
| w04-l1 | rhythm 3, degrees 5 |
| w04-l2 | rhythm 5, melody 6, octave 4 |
| w04-l3 | rhythm 6 |
| w05-l1 | degrees 7, melody 7 |
| w05-l2 | melody 8 |
| w06-l1 | roots 1, degrees 8 |
| w06-l2 | chords 1, roots 2, octave 5 |
| w07-l1 | degrees 10 |
| w07-l2 | degrees 11, melody 9, chords 2 |
| w07-l3 | pitch 10 |
| w08-l1 | degrees 13, melody 10, chords 3 |
| w08-l2 | progressions 1, degrees 14 |
| w08-l3 | progressions 2, roots 4, melody 11 |
| w09-l1 | degrees 15, melody 12 |
| w09-l2 | degrees 16, melody 13 |
| w09-l3 | progressions 3, roots 5, octave 6 |
| w10-l1 | degrees 17, melody 14, progressions 5 |
| w10-l2 | degrees 18, melody 16, progressions 6 |
| w10-l3 | octave 7 |
| w11-l1 | degrees 19, melody 17 |
| w11-l2 | roots 6 |
| w11-l3 | roots 7 |
| w11-l4 | progressions 7, roots 9 |
| w12-l1 | intervals 2 |
| w12-l2 | intervals 4 |
| w12-l3 | intervals 6 |
| w12-l4 | intervals 7, roots 10 |
| w13-l1 | scales 2, degrees 21 |
| w13-l2 | melody 18 |
| w14-l1 | scales 4, degrees 23 |
| w14-l2 | degrees 25, melody 19 |
| w15-l1 | chords 5, intervals 8 |
| w15-l2 | chords 7, intervals 9 |
| w15-l3 | progressions 8, chords 8 |
| w16-l1 | progressions 9, roots 11 |
| w16-l2 | intervals 10, octave 8 |
| w16-l3 | roots 12 |
| w17-l1 | rhythm 8, octave 10 |
| w17-l2 | rhythm 10 |
| w17-l3 | rhythm 11, melody 20 |
| w18-l1 | chords 10, intervals 11 |
| w18-l2 | intervals 12, melody 21 |
| w18-l3 | melody 22 |
| w19-l1 | octave 11, intervals 13 |
| w19-l2 | progressions 11 |
| w19-l3 | progressions 12 |
| w20-l1 | rhythm 12 |
| w20-l2 | intervals 14 |
| w21-l1 | intervals 15, octave 12 |
| w21-l2 | intervals 16 |
| w22-l1 | roots 13 |
| w22-l2 | progressions 14, roots 14 |
| w23-l1 | rhythm 13, octave 13 |
| w23-l2 | rhythm 14 |
| w24-l1 | roots 15, progressions 15 |
| w24-l2 | intervals 18 |
| w25-l1 | scales 5, degrees 26 |
| w25-l2 | scales 6 |
| w26-l1 | degrees 27, scales 8 |
| w26-l2 | degrees 28, scales 10 |
| w27-l1 | degrees 29, progressions 17 |
| w27-l2 | chords 11, progressions 18 |
| w27-l3 | octave 14 |
| w29-l3 | scales 11, melody 23 |
| w30-l1 | chords 12 |
| w30-l2 | chords 13 |
| w31-l1 | chords 14 |
| w31-l3 | progressions 19 |
| w33-l1 | progressions 20 |
| w33-l2 | chords 15 |
| w33-l3 | degrees 30 |
| w34-l1 | scales 12 |
| w35-l1 | intervals 19 |
| w35-l2 | intervals 20 |
| w35-l3 | intervals 21 |
| w37-l1 | rhythm 15 |
| w37-l3 | rhythm 16 |
| w40-l1 | scales 13 |
| w42-l3 | chords 16 |
| w44-l1 | roots 16, progressions 21 |
| w47-l1 | intervals 22, melody 24 |
| w51-l1 | chords 17 |

## Old → new weeks (September 2026 re-sequencing)

Weeks 1–4 unchanged. New: w05-l1/l2 (la, ti, the whole octave), all of week 7 (other octaves), w08-l1 (below do),
w10-l1/l2 (near keys, any key), w14-l2 (minor in other keys). Moved: old w05-l3 → w05-l3 (now a drone melody DAW
lesson), old w08-l1 → w08-l2, old w08-l2 (review) → w10-l3, old w07 → w09, old w10-l3 → w11-l1, old w11 → w11-l2..l4,
old w05-l1/l2 → w12-l1/l2, old w10-l1/l2 → w12-l3/l4, old w09-l1/l3 → w13-l1/l2, old w09-l2 → w14-l1,
old w12–w21 → w15–w24, old w23 (pentatonic/blues) → w25, old w22 (modes) → w26, old w24–w52 → w27–w55.
