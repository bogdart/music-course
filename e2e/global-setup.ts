/** Clears per-run artifacts that global-teardown.ts aggregates. */
import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export default function globalSetup(): void {
  rmSync(join(fileURLToPath(new URL('.', import.meta.url)), 'artifacts', 'render-stats'), { recursive: true, force: true });
}
