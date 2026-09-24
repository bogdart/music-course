import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// The audio engine (Tone.js) needs Web Audio, which jsdom lacks: replace the lazy facade with a no-op fake.
vi.mock('../audio/engine', async () => await import('./fakeEngine'));

afterEach(() => {
  cleanup();
});

// jsdom lacks these
if (!('PointerEvent' in window)) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).PointerEvent = MouseEvent;
}
if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
  Element.prototype.releasePointerCapture = () => {};
}
// jsdom has no canvas; VexFlow only uses it for optional text measurement
HTMLCanvasElement.prototype.getContext = (() => null) as unknown as HTMLCanvasElement['getContext'];
