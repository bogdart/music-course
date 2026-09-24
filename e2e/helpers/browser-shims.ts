/**
 * Init scripts injected into every page (see fixtures.ts):
 *
 *  1. `window.__MC_E2E__ = { audio: [], items: {} }` — turns on the app's opt-in test hooks
 *     (apps/web/src/testHooks.ts): an audio log of every note the AudioEngine triggers and the current item
 *     of every <ExerciseShell>.
 *  2. A fake Web MIDI implementation replacing `navigator.requestMIDIAccess`, driven from tests through
 *     `window.__fakeMidi` (addInput/removeInput/noteOn/noteOff/cc). Disconnected ports stay in
 *     `access.inputs` with `state: 'disconnected'` (as Chromium does) until re-added.
 */
export interface FakeMidiInputInit {
  id: string;
  name: string;
}

export function installShims(initialInputs: FakeMidiInputInit[]): void {
  (window as unknown as { __MC_E2E__: unknown }).__MC_E2E__ = { audio: [], items: {} };

  type Port = {
    id: string; name: string; manufacturer: string; type: 'input'; version: string;
    state: 'connected' | 'disconnected'; connection: 'open' | 'closed' | 'pending';
    onmidimessage: ((e: { data: Uint8Array; timeStamp: number }) => void) | null;
    onstatechange: ((e: unknown) => void) | null;
    addEventListener(): void; removeEventListener(): void; open(): Promise<Port>; close(): Promise<Port>;
  };
  const inputs = new Map<string, Port>();
  const accesses: { onstatechange: ((e: { port: Port }) => void) | null; inputs: Map<string, Port> }[] = [];
  const makePort = (id: string, name: string): Port => {
    const p: Port = {
      id, name, manufacturer: 'E2E', type: 'input', version: '1', state: 'connected', connection: 'open',
      onmidimessage: null, onstatechange: null,
      addEventListener() {}, removeEventListener() {},
      open: async () => p, close: async () => p,
    };
    return p;
  };
  const fire = (port: Port) => accesses.forEach((a) => a.onstatechange?.({ port }));
  for (const i of initialInputs) inputs.set(i.id, makePort(i.id, i.name));

  const fake = {
    requests: 0,
    addInput(id: string, name = id) {
      const existing = inputs.get(id);
      const p = existing ?? makePort(id, name);
      p.state = 'connected';
      inputs.set(id, p);
      fire(p);
    },
    removeInput(id: string) {
      const p = inputs.get(id);
      if (!p) return;
      p.state = 'disconnected';
      p.connection = 'closed';
      fire(p);
    },
    send(bytes: number[], id?: string) {
      let delivered = 0;
      for (const p of inputs.values()) {
        if (p.state !== 'connected' || (id && p.id !== id)) continue;
        if (p.onmidimessage) {
          p.onmidimessage({ data: new Uint8Array(bytes), timeStamp: performance.now() });
          delivered++;
        }
      }
      return delivered;
    },
    noteOn(midi: number, velocity = 100, id?: string) {
      return fake.send([0x90, midi, velocity], id);
    },
    noteOff(midi: number, id?: string) {
      return fake.send([0x80, midi, 0], id);
    },
    cc(controller: number, value: number, id?: string) {
      return fake.send([0xb0, controller, value], id);
    },
    /** ids of inputs that currently have a message handler attached by the app */
    listening() {
      return [...inputs.values()].filter((p) => p.onmidimessage).map((p) => p.id);
    },
  };
  (window as unknown as { __fakeMidi: typeof fake }).__fakeMidi = fake;
  Object.defineProperty(Navigator.prototype, 'requestMIDIAccess', {
    configurable: true,
    writable: true,
    value: async () => {
      fake.requests++;
      const access = { inputs, outputs: new Map(), sysexEnabled: false, onstatechange: null, addEventListener() {}, removeEventListener() {} };
      accesses.push(access);
      return access;
    },
  });
}
