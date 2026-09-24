import { Keyboard } from '../components/Keyboard/Keyboard';

/** Placeholder — the micro-DAW (milestone M3) mounts here. */
export function Daw() {
  return (
    <div className="page">
      <h1>DAW</h1>
      <div className="card">
        <p>The micro-DAW is under construction (tracks, piano roll, recording, mixer, MIDI export).</p>
        <p className="muted small">Meanwhile, jam on the keyboard below — MIDI and computer keys work too.</p>
      </div>
      <Keyboard showQwerty />
    </div>
  );
}
export default Daw;
