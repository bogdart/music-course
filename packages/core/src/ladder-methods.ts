/**
 * Practical methods for every ladder rung: what to DO — with ears and the keyboard — to answer it, including what to
 * try when you can't hear it yet. Shown next to every ladder drill. Keyed by skill, then rung title (ladders.ts).
 * Keyboard only: humming is at most an optional aid, never required.
 */
const M: Record<string, Record<string, string>> = {
  pitch: {
    'Higher or lower: far apart':
      "Forget note names. After the second note ask one question: did it go UP or DOWN? Move your hand up or down in the air with each note as you replay it — let the hand decide. Still unsure? Play both notes yourself: the key further right is the higher one.",
    'Higher or lower: closer':
      "Same question, smaller jump. Replay and follow the two notes with your hand. If the jump feels tiny, listen to the second note only: does it feel like a step up (brighter) or a step down (duller)?",
    'Higher or lower: neighbours':
      "Close notes are easy to miss. Replay with 'Slowly, with a pause' and hold the first note in your head during the pause, then compare. A small step up feels like lifting; down feels like sinking.",
    'Find it: C, D or E':
      "Play D, the middle key, first. Compare it with the note you heard: the same, higher or lower? The answer tells you which way to go. Replay the question as often as you want — searching is the skill, and a find within the tries shown counts as right.",
    'Find it: C to G':
      "Start in the middle (E). Ask: is the heard note higher or lower than my key? Move one key that way and compare again. When your key and the note seem to merge into one, you've found it.",
    'Same note or not?':
      "Listen to the second note against your memory of the first: does it land exactly on it, or somewhere else? If unsure, press 'Only the first note, twice' — that's what 'the same' sounds like — and compare.",
    'Same note or not: close':
      "A near note sounds 'almost right but bent'. Compare with 'Only the first note, twice'. Then play both keys together on the keyboard: the same note is one clean sound; two neighbours rub.",
    'Find it: all white keys':
      "Start at F or G (the middle), decide higher/lower, then move in bigger jumps first (two or three keys) and smaller ones as you get close. The tried keys stay marked, so you never try the same one twice.",
    'Find it: black keys too':
      "Search the white keys first. If the note sits between two white keys you've tried — one too low, one too high — it's the black key between them.",
    'Find it: two octaves':
      "First decide the register: does it sound low (octave 3) or middle (octave 4)? Try a C in that octave, then search up from there as before.",
  },
  octave: {
    'Together: octave or clash':
      "Listen for smoothness, not height. An octave sounds like ONE fuller note; a clash sounds like two notes fighting — rough, wobbly. Unsure? Press 'One after the other', then play the pair together yourself: hold the low key and add the upper one.",
    'Together: octave or near-miss':
      "A near-miss is almost as high as the octave, so height can't help. Listen for the fast wobble (beating) a near-miss makes; the octave is still and smooth. Compare with 'The real octave' after each answer.",
    'Which one is the octave?':
      "Hold the first note in your head. For A and B ask: which one feels like the first note again, just higher? The other one feels like a new note. Use 'together' after answering: the octave melts, the other clashes.",
    'Which one is the octave? (near-misses)':
      "The wrong one is now right next to the octave. Listen for the one that feels 'settled' against the first note; the near-miss feels slightly off, pulling. After answering, play the three notes on the keyboard to check.",
    'Find it on your keyboard':
      "The note may be outside your keys. First find it roughly by height, then try keys: when one blends with the note (same 'colour', just higher or lower), jump by 12 keys to check the octave. Press Check when it matches.",
    'Same or different, one after the other':
      "Imagine the first note played again, higher: does the second note match that imagined echo? If you can't tell, play the first note yourself, then the note 12 keys above it, and compare with the replay.",
    'Same or different: near-misses':
      "Use the echo test: play the first note and its octave on the keyboard, then replay the question. A near-miss sounds like the echo 'bent' up or down.",
    'Find it: black keys too':
      "Find the rough region by height, then search white keys; if the note sits between two white keys you tried, it's the black key between them. Check any octave by jumping 12 keys.",
    'Two octaves apart: which one?':
      "Two octaves are hard to hear directly — walk them: after answering press 'Walk up the octaves' and follow the note step by step (C3 → C4 → C5). Before answering, imagine that walk.",
    'Two octaves apart: same or different':
      "Walk it in your head: first note, its octave, then the octave above that. Does the second note sit on that last step? Check with 'Walk up the octaves'.",
    'Octave or fifth? (together)':
      "A fifth also sounds smooth — the trap. An octave is ONE note; a fifth is an open, hollow PAIR (two notes that get along). Ask: one note or two?",
    'Octave or fifth? (one after the other)':
      "A fifth is the most 'octave-like' jump. Play both candidates yourself — first note to its octave, first note to its fifth — then replay the question and pick the closer match.",
    'Find the bass note':
      "Low notes are blurry: listen to the 'thump' and the hum under it. Find the region by trying low keys (or any key and jump down by 12), then match the colour an octave or two higher, where it's clearer.",
    'Everything at once':
      "Take it step by step: 1) Is it smooth like an echo? 2) If far apart, walk the octaves. 3) If smooth but hollow, suspect a fifth. Replay as often as you like.",
  },
  degrees: {
    'Do, mi or sol (with drone)':
      "These three are the home chord. 1 blends into the drone and feels finished; 3 sits bright on top; 5 is open and stable, like a second home above. After each answer the note walks home — listen to how far it travels.",
    'Do, mi or sol':
      "Keep the end of the home run (C) in your head. Walk down from the note to it: 1 = no steps, 3 = mi-re-do, 5 = sol-fa-mi-re-do. Or find the key on the keyboard (C, E or G).",
    'Re joins':
      "2 (re) sits one step above home and feels unfinished — it wants to fall to 1. If the note sounds 'almost home but hanging', it's 2. Check by walking down, or find the key: D = 2.",
    'All seven after a cadence':
      "Same notes; chords set home now. The last chord is home: its low bass note (C3) and its top C4 are both 1 — the question note sits in the upper octave. Sort first: at rest (1 3 5) or leaning (2 4 6 7)? Then walk home, or find the key and count from C.",
    'Do and sol, other octaves':
      "The note may be an octave lower or higher than the cadence. Don't judge by height — ask: does it feel finished (1) or open and waiting (5)? If unsure, find the note on the keyboard (any octave) and play it next to C: C = 1, G = 5.",
    'Do, mi, sol, other octaves':
      "Ignore how high or low it is. Play the note on your keyboard in the cadence's octave (search, then jump by 12 keys) and name it there: C, E or G.",
    'All seven, other octaves':
      "First move the note home in your head — or on the keyboard: find it, then jump by 12 keys into the cadence's octave. There, use your usual method: at rest or leaning, then walk home.",
    'Low sol':
      "Sol can now sit BELOW home. From low sol, home is a step-and-a-bit up (sol-la-ti-do). If the note sounds low and leads up into home, suspect low sol; compare with the cadence's lowest note.",
    'Low la and ti':
      "Low ti leans hard up into do; low la is soft and sad just under it. Walk up to home from them: ti-do (one step) or la-ti-do (two).",
    'Two octaves around home':
      "The note may be far from home. Bring it close first: find it on the keyboard and jump by octaves toward the cadence's register, then name it there.",
    'All seven in G':
      "Home is G. Hold the cadence's last bass note as 1 and count steps from it — or find the key and count up from G (G A B C D E F♯).",
    'All seven in F':
      "Home is F. Same method: the cadence gives home; count from F (F G A B♭ C D E).",
    'Near keys':
      "A new home each question. Let the cadence finish and hum or hold its last note in your head as 1 before the question plays. Then use your one-key method; press Reference whenever home slips away.",
    'Any major key':
      "Same as near keys, with every key. The degree feels the same in every key — only home moves. Rely on the cadence, not on note names.",
    'Any key, two octaves':
      "Two steps: 1) set home from the cadence; 2) bring a far note into home's octave (keyboard: find it, jump by 12), then name it.",
    'Minor: 1 to 5 in A':
      "Home is A, the key is minor — darker. The method is the same: hold the cadence's home note, walk from the question note down to it, count the steps. 3 is the dark third.",
    'Minor: all seven in A':
      "In A minor, 6 and 7 sit only a whole step apart and 7 doesn't pull as hard. Sort at rest vs leaning, then walk home; find the key and count from A if unsure.",
    'Minor: near keys':
      "A, E or D minor. Take home from the minor cadence (its last chord's lowest note), then use the A-minor method.",
    'Minor: any key':
      "Any minor key, and the note may be in another octave. Home from the cadence first; bring the note near home; then walk.",
    'Minor: the raised 7':
      "In harmonic minor, 7 is raised a half step and pulls hard up into home, like in major. If a note just under home leans up urgently, it's ♯7; the plain (natural) 7 sits lower and relaxed.",
    'Minor: raised 6 and 7':
      "Melodic minor raises 6 too: ♯6 sounds brighter, 'hopeful' in a minor key. Compare with the plain 6 by playing both from home.",
    'The flat 6':
      "♭6 is a dark, sighing note just above 5 that wants to fall onto 5. If a note leans down onto sol, suspect ♭6.",
    'Home or 3? (with drone)':
      "After the home run, the low C keeps sounding. If the new note blends into it and feels finished, it's 1. If it's brighter and sits on top, it's 3. After answering, listen to the note walk home.",
    '1 to 5':
      "5 (sol) is stable and open, like a second home above. Walk down from it: sol-fa-mi-re-do (four steps). Finding the key works too: C to G = 1 to 5.",
    '1 to 6':
      "Sort first: at rest (1 3 5) or leaning (2 4 6)? Then walk to home, or find the key on the keyboard and count from C.",
    'All seven in C':
      "Two-step method: 1) at rest (1 3 5) or leaning (2 4 6 7)? 2) which way does it lean — down (2 4 6) or up (7)? Then walk home to confirm. Or find the key and count from C.",
    'The flat 7':
      "♭7 sounds like 7 that has 'slumped' — it doesn't pull up into home, it sits a whole step below, bluesy. If a note near the top neither rests nor pulls up, suspect ♭7.",
    'The flat 3':
      "♭3 is the blue, minor third: darker than 3 and a half step lower. Compare with the home chord's 3 in your head: brighter = 3, darker = ♭3.",
    'The sharp 4':
      "♯4 sits between 4 and 5 and pulls strongly UP to 5 (4 falls to 3). If a note leans upward toward 5, suspect ♯4.",
    'All twelve':
      "First decide: in the key or outside it (a sour 'wrong-colour' note)? For outside notes, find the nearest in-key neighbour it leans to, then name it as that degree raised or lowered.",
  },
  intervals: {
    'Seconds to fifths, any register':
      "Same intervals as before, but low or high. Low intervals sound muddier — listen to the size, not the sound. Play the two notes yourself in the middle of the keyboard to check.",
    'Half step or whole step':
      "A half step is squeezed — the two notes almost touch. A whole step has a little air between them. Check on the keyboard: neighbours with no key between = half step.",
    'Whole step or major 3rd':
      "Whole step = walking (a step); major 3rd = a small skip. Think of 'Hot Cross Buns' going down by steps versus the first two notes of 'Oh When the Saints' (a skip).",
    'Minor or major 3rd':
      "Both are skips; the colour differs: major 3rd bright and happy, minor 3rd darker. Play both from the first note (4 vs 3 keys up) and compare with the replay.",
    '4th or 5th':
      "Anchor tunes: a 4th opens 'Here Comes the Bride'; a 5th opens 'Twinkle Twinkle' (twin-kle → twin-kle). Sing the tune in your head from the first note — which one fits?",
    '3rd, 4th or 5th':
      "Size first: small skip (3rd), medium (4th), wide and open (5th). Then check with the anchor tunes, or count keys on the keyboard (4, 5, 7 half steps).",
    'Seconds and thirds':
      "Step or skip? Steps: squeezed (half) or airy (whole). Skips: dark (minor 3rd) or bright (major 3rd). Two small questions instead of one big one.",
    'Seconds to fifths':
      "Sort by size first — step, skip or leap — then use the anchor for leaps (Bride = 4th, Twinkle = 5th) and colour for skips.",
    '5th or octave':
      "An octave lands on 'the same note again'; a 5th lands on a new note that fits well. Echo test: imagine the first note an octave up — does the second match it?",
    'Minor or major 6th':
      "Both are big leaps. Major 6th: 'My Bonnie lies over the ocean' (My-Bon-); minor 6th: darker, more yearning. Play both from the first note (8 vs 9 keys) to compare.",
    '7ths and the octave':
      "A 7th is 'almost an octave' and feels unfinished — it wants to go one more step. Major 7th is sharp and tense, minor 7th softer. The octave rests.",
    'The tritone':
      "The tritone sits exactly between 4th and 5th and sounds unstable, like a siren or a question that won't settle. 4th and 5th both sound stable.",
    'Big intervals, up':
      "Start from the octave you can already hear: the jump is octave, a bit less than it (7ths), clearly less (6ths) or the unstable middle (tritone). Then pick between the two candidates.",
    'All intervals, up':
      "Two-step method: 1) size class — step, skip, leap, big leap; 2) the anchor or colour within that class. Count keys on the keyboard to check your answer.",
    'Going down':
      "Going down, the same sizes feel different. Anchors: a falling 5th opens the Flintstones theme ('Flint-stones'); falling steps are 'Three Blind Mice'. Play it back on the keyboard downward to check.",
    'Down: seconds to fifths':
      "Size first (step, skip, leap), then colour/anchor. Replay and play the two notes yourself downward, counting keys.",
    'All intervals, down':
      "Use the ascending intervals you know: play the second note first and the first note after it — the same interval, now going up — and name that.",
    'Together: 3rd, 5th, octave':
      "Together, an octave is one note; a 5th is an open, hollow pair; a 3rd is a sweet, full pair. One, hollow or sweet?",
    'Together: 3rds and 6ths':
      "Both are sweet. 3rds are close and warm; 6ths wider and more open. Then colour: major brighter, minor darker.",
    'Together: the rough ones':
      "All rub. 2nd: the notes crowd each other; 7th: almost an octave but grating; tritone: restless, 'siren'. Ask how close the notes sound.",
    'Together: all':
      "Sort by feel first: one note (octave), open (4th/5th), sweet (3rds/6ths), rough (2nds/7ths/tritone). Then choose within the group.",
    'Everything':
      "Direction first (up, down, together), then size class, then colour or anchor. Play it back on the keyboard to confirm.",
  },
  chords: {
    'Major or minor, any register':
      "Low chords blur. Listen to the overall mood, not the notes: bright (major) or dark (minor)? Play the chord's root in the middle and build major and minor on it to compare.",
    'Major or minor':
      "Major is bright and settled; minor is darker, more serious. Play C major and C minor on the keyboard (C E G, then C E♭ G) right after the chord and ask which it matched.",
    'Major, minor or diminished':
      "Diminished is tense and squeezed, like something about to break. Sort: bright (major), dark (minor), tense (diminished).",
    'Major or sus4':
      "Sus4 sounds open and unresolved, as if waiting to move to major. If the chord 'wants' to resolve, it's sus4.",
    'Major, sus2 or sus4':
      "Sus2 is airy and open (no third); sus4 is open but leaning, wanting to fall into major. Plain major is settled.",
    'Triad or seventh?':
      "A dominant 7th adds a bluesy edge and a pull to move on; the plain triad is at rest. Ask: does it want to go somewhere?",
    'Major 7 or dominant 7':
      "Major 7: dreamy, soft, jazzy-sweet (a gentle rub at the top). Dominant 7: bluesy, restless, pulling forward.",
    'Minor 7 or dominant 7':
      "Minor 7: mellow, relaxed, darker. Dominant 7: bright but restless. Dark-and-calm vs bright-and-pulling.",
    'The three sevenths':
      "First bright or dark? Dark = minor 7. If bright: dreamy (major 7) or bluesy/pulling (dominant 7)?",
    'Triads and dominant 7':
      "Dark = minor. Bright and at rest = major. Bright and pulling = dominant 7.",
    'Minor 7 or half-diminished':
      "Both dark. Half-diminished has a tense, 'unstable' top (the ♭5); minor 7 is mellow and stable.",
    'Four sevenths':
      "Sort: bright or dark? Bright → dreamy (maj7) or bluesy (dom7). Dark → mellow (min7) or tense (m7♭5).",
    'Colour chords':
      "add9 adds sparkle high up; 6 adds a sweet, vintage warmth; plain major has neither. Listen to the top of the chord.",
    'Four sevenths, spread out':
      "Spread chords blur the colour. Listen to the whole sound, not the notes: same sorting as before — bright/dark, then dreamy/bluesy or mellow/tense.",
    'Diminished or augmented':
      "Diminished: squeezed, tense. Augmented: stretched, dreamy, floating — like a question mark. Major and minor are the stable ones.",
    'Major 7 or major 9':
      "Both dreamy. The 9th adds an extra shimmer on top, lusher and more open.",
    'Sevenths or ninths':
      "Decide the family first (dreamy major or bluesy dominant), then listen for the extra shimmer on top (the 9th).",
  },
  roots: {
    'Bass line, near keys':
      "Find home first: play the cadence's lowest note on the keyboard. Then follow the bass up/down from there, as in C.",
    'Root of a major chord':
      "In a plain major chord the root is the lowest note. Try low keys until one blends like the chord's floor, then press Check.",
    'Root of major or minor':
      "Same: listen to the bottom of the chord. The note that feels like the chord's foundation is the root — try keys until one fits.",
    'Bass line: I and V':
      "Listen only to the lowest sound. Two bass notes: C (home) and G (five keys up, or four down). Play the first, then decide if the second went up or down and search.",
    'Bass line: I, IV, V':
      "Bass notes C, F or G. Follow the lowest part: after each chord ask whether it moved up or down, and find it on the keyboard.",
    'Bass line: I, IV, V, vi':
      "Adds A (vi). Home C feels rested, A feels like a sadder home. Follow the bass up/down and search as before.",
    'Root when the chord is inverted':
      "The lowest note may not be the root now. Try keys until one sounds like the chord's real foundation — the chord 'sits' on it best. Test by playing it low under the chord.",
    'Inverted major and minor':
      "Same method: the root is the note that makes the chord sound most settled when played in the bass. Try the lowest note and the others until one fits best.",
    'Bass line in G':
      "Home is G now. Play the first bass note, then follow up/down movement. Remember which notes G major uses (F♯).",
    'Bass line, any key':
      "The cadence tells you home: find its lowest note on the keyboard first. Then follow the bass line up/down from there.",
    'Bass line with ii and iii':
      "More possible bass notes. Find home first, then each bass note by stepping: is it next to the previous one, or a jump?",
    'Bass not on the root':
      "Play what the bass actually plays, even if it's not the chord's root. Listen to the very lowest line and follow it step by step.",
    'Minor-key bass lines':
      "Find home (the minor cadence's lowest note), then follow the bass. Minor lines often move by steps: i, VII, VI going down.",
    'The borrowed ♭VII in the bass':
      "♭VII is a whole step below home (B♭ in C). If the bass drops just below home but doesn't pull back up like the leading tone, it's ♭VII.",
    'Bass in a band':
      "Ignore drums and melody: focus on the deepest, thumping sound. Replay and tap your foot with the bass; then find its notes one by one.",
    'Band, any chord':
      "Same focus on the bass. Find home from the cadence first, then follow each bass move.",
  },
  progressions: {
    'Four chords, near keys':
      "Find home from the cadence (its bass note). Then name each chord by its role — rest (I), lift (IV), pull (V), sad (vi) — checking the bass.",
    'Home or tension: I or V':
      "I sounds at rest; V sounds like it needs to move on. Follow the bass too: C = I, G = V.",
    'I, IV, V':
      "I rests, IV opens up (lifts away), V pulls back home. Follow the bass: C, F, G.",
    'I, IV, V, vi':
      "vi is the sad, minor 'second home' (bass A). Sort each chord: rest (I), lift (IV), pull (V), sad (vi).",
    'V or V7':
      "V7 adds a sharper, bluesy pull on top of V. If the dominant sounds extra hungry to go home, it's V7.",
    'Four chords in G':
      "Same four roles, home is G. Follow the bass from home: G (I), C (IV), D (V), E (vi).",
    'Four chords, any key':
      "Find home from the cadence first. Then name each chord by its role (rest, lift, pull, sad), using the bass to check.",
    'Adding ii':
      "ii is minor and often leads to V — it feels like a gentle step away before the pull. Bass on degree 2.",
    'Adding iii':
      "iii is minor and soft, often between I and vi or IV. Bass on degree 3. Use the bass to decide when unsure.",
    'Minor: i, iv, V':
      "i is the dark home, iv a darker step away, V (major, with the raised 7th) pulls hard back to i.",
    'IV or iv?':
      "Same bass note. Major IV sounds bright and open; borrowed iv sounds suddenly sad and warm. Listen to the colour change.",
    'V or bVII?':
      "V pulls strongly home; ♭VII is a relaxed, rock-style step (bass a whole step below home) that doesn't demand resolution.",
    'Minor: the pop minor chords':
      "In A minor: i (dark home), iv, VI (warm, bright), VII (a step below home). Follow the bass: A, D, F, G.",
    'Minor, any key':
      "Find the minor home from the cadence, then name roles by bass and colour.",
    'In a band':
      "Focus on the bass under the band. Find home, then name each chord by its bass note and colour.",
    'ii or V/V?':
      "Same bass (degree 2). ii is minor and gentle; V/V is major and pushes hard toward V.",
    'iii or V/vi?':
      "Same bass (degree 3). iii is minor and soft; V/vi is major and pushes toward vi.",
    'Secondary dominants':
      "When a chord sounds unexpectedly major and pushing, ask where it pushes: into V (it's V/V) or into vi (V/vi).",
    'Sevenths: ii–V–I':
      "Follow the bass: 2 → 5 → 1 is the classic path. Imaj7 dreamy, ii7 mellow, V7 bluesy-pulling, vi7 mellow and sad.",
    'Borrowed chords':
      "Expect surprises: a sudden darker iv, a bright ♭VI (bass a major third below home), a relaxed ♭VII. Bass first, colour second.",
    'In a band, borrowed too':
      "Bass first through the band, then colour for major/minor. Replay and listen to one layer at a time.",
  },
  melody: {
    'Echo the whole octave':
      "Seven notes to choose from now, still within C4–C5. Find the first note by searching from C, then follow the path: up/down, step or jump.",
    'The tune in another octave':
      "The tune plays an octave away from your hand. Don't chase the height: find its first note in the octave you like (search, then jump by 12), and play the same path there.",
    'Below do':
      "Some notes dip below home (low sol, la, ti). Put your thumb on G3 instead of C4 so both sides are under your hand; find the first note, then follow the path.",
    'Two octaves':
      "Wide tunes: find each big jump's size first (octave? fifth?) using your anchors, then check on the keyboard.",
    'Five notes in G':
      "Home is G: start with your hand around G. Find the first note relative to home, then follow the path.",
    'Five notes in F':
      "Home is F: hand around F; remember B♭. Find the first note, follow the path.",
    'Near keys':
      "Find home from the cadence on the keyboard first, then the first melody note relative to home, then follow the path.",
    'Any key':
      "Any key: home first, then the first note, then the path. Break the tune into 3 + 2.",
    'Any key, any register':
      "Home first. If the tune is far from home, find its first note and play the path there, any octave.",
    'Minor, any key':
      "Minor home from the cadence; minor tunes often fall back to home. Find the first note, then follow the path.",
    'Echo 3 notes (C D E)':
      "Before touching keys, replay and ask of each move: up, down or same? Put your thumb on C, then let your fingers follow that up/down path. A wrong note is information: too high → one key left.",
    'Echo 4 notes (C D E)':
      "Same method, one more note. Replay as often as you like; say the directions to yourself ('down, down, up') before playing.",
    'Echo 3 notes (C to G)':
      "Now some moves skip a key. Ask for each move: up or down, step or jump? Start on the first note you find by searching, then follow.",
    'Echo 4 notes (C to G)':
      "Find the first note by searching from C, then follow the up/down, step/jump path. Replay between tries.",
    'Write 3 notes as degrees':
      "Play it back on the keyboard first (C = 1, D = 2, E = 3), then write the numbers of the keys you pressed.",
    'Write 4 notes as degrees':
      "Same: find the notes on the keyboard, then translate: C D E F G = 1 2 3 4 5.",
    'Five notes':
      "Break it into 3 + 2: play the first three, replay, then add the last two.",
    'Minor tunes in A':
      "Home is A. Put your thumb on A; minor melodies often fall back to A. Find the first note, then follow the path.",
    'Any key: write degrees':
      "Play it back first, then count each note's steps up from home.",
    'Six notes with rhythm':
      "Ignore the rhythm at first: get the pitches in order. Chunk it: 3 + 3.",
    'Leaps':
      "For a leap, guess the size first (a 4th? a 5th? an octave?) using your interval anchors, then check on the keyboard.",
    'Over chords':
      "The chords can distract: focus on the highest, singing line. Melody notes often land on chord tones on strong beats.",
    'Eight notes':
      "Chunk it into two phrases of four. Get the first phrase right, then the second.",
    'Chromatic notes':
      "An out-of-key note usually steps into its neighbour. If a note sounds 'bent', try the black key next to your guess.",
  },
  rhythm: {
    'Choose the rhythm: quarters and halves':
      "Tap your foot to the beat while it plays. Count 1 2 3 4: a half note lasts two taps, a quarter one tap. Match the counts to the options.",
    'Choose: with eighths':
      "Keep the foot tapping the beat. Eighths are two notes per tap ('1 and'). Count out loud with the replay.",
    'Tap it back: quarters':
      "Listen once while counting 1 2 3 4, then tap along with the count-in exactly where the notes fell.",
    'Tap it back: eighths and rests':
      "Count '1 and 2 and…'. Say the rhythm with syllables (ta, ti-ti) and rest in silence, then tap it.",
    'Meter: 3 or 4?':
      "Find the strongest beat (the loud 'ONE'), then count until it comes back: 1 2 3 or 1 2 3 4?",
    'Tap in 3/4':
      "Count '1 2 3, 1 2 3' with a strong 1. Tap on the notes, keep counting through rests.",
    'Choose: sixteenths':
      "Sixteenths are four notes per beat ('1 e and a'). Keep the foot on the beat and count the fast notes in groups of four.",
    'Tap: sixteenths':
      "Slow is fine: count '1 e & a' out loud and tap only where the notes are.",
    'Choose: triplets':
      "Triplets are three even notes in one beat ('tri-pl-et'). If a beat splits in three instead of two or four, it's a triplet.",
    'Meter: 3/4, 4/4, 6/8':
      "6/8 has two big swaying beats, each split in three (1-2-3 4-5-6); 3/4 has three even beats. Count what feels natural.",
    'Two bars':
      "Chunk it: master bar 1, then bar 2. Keep counting through both.",
    'Tempo':
      "Tap along with the beat for a few seconds — the tapper measures it. Compare with a known tempo: 60 = one per second.",
    'Drums: kick and snare':
      "Listen to one drum at a time: first only the low kick (boom), then the snare (crack). Mark each on the grid.",
    'Drums: kick, snare, hi-hat':
      "Three passes: kick, snare, then the ticking hi-hat. Replay for each.",
    'Four or five?':
      "Find the ONE and count to the next ONE. Five feels like four with an extra beat stuck on.",
    'Odd meters':
      "Count the beats from ONE to ONE. 7/8 feels like groups of 2+2+3 short beats that limp; 5/4 has five steady beats.",
  },
  scales: {
    'Major or minor scale':
      "Major is bright; minor is darker, especially at the third note. Listen to the third step of the run.",
    'Major or minor tune':
      "Where does the tune rest? Bright and happy → major; darker, sadder → minor.",
    'Natural or harmonic minor':
      "Harmonic minor has an exotic, big jump near the top (between 6 and 7). Natural minor flows smoothly.",
    'Three minors':
      "Melodic minor sounds like major at the top going up. Harmonic has the exotic jump. Natural is plain minor.",
    'Major or Mixolydian':
      "Mixolydian is major with a flatter 7th — listen near the top of the run: does the second-to-last note pull up to home (major) or sit lower, bluesy (Mixolydian)?",
    'Minor or Dorian':
      "Dorian is minor with a brighter 6th — a hopeful spot in a minor scale. Listen to the 6th note.",
    'Major or Lydian':
      "Lydian is major with a raised 4th that floats, dreamy. Listen to the fourth note.",
    'Minor or Phrygian':
      "Phrygian is minor with a dark, Spanish-sounding second note right above home.",
    'Major or pentatonic':
      "Pentatonic has only five notes, with gaps — no half steps, smooth and folky. Listen for jumps inside the run.",
    'Minor pentatonic or blues':
      "Blues adds one 'crunchy' blue note between 4 and 5.",
    'Four scales':
      "First bright or dark. Bright: plain (major) or bluesy 7 (Mixolydian). Dark: plain (minor) or hopeful 6 (Dorian).",
    'Six scales':
      "Bright group: major, Mixolydian (♭7), Lydian (♯4). Dark group: minor, Dorian (♮6), Phrygian (♭2). Sort, then find the one special note.",
    'Six modes as tunes':
      "Find home (where the tune rests), decide bright/dark, then listen for the special note: ♭7, ♯4, ♮6 or ♭2.",
  },
};

export function methodOf(skill: string, title: string): string {
  return M[skill]?.[title] ?? '';
}

/** For tests: every (skill, title) pair that has a method. */
export const METHOD_KEYS: [string, string][] = Object.entries(M).flatMap(([s, r]) => Object.keys(r).map((t) => [s, t] as [string, string]));
