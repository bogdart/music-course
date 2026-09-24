import { HTTPException } from 'hono/http-exception';

export function badRequest(message: string): never {
  throw new HTTPException(400, { message });
}

export function notFound(message = 'Not found'): never {
  throw new HTTPException(404, { message });
}

export async function jsonBody(req: { json(): Promise<unknown> }): Promise<Record<string, unknown>> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    badRequest('Body must be JSON');
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) badRequest('Body must be a JSON object');
  return body as Record<string, unknown>;
}

export function str(b: Record<string, unknown>, k: string, opts: { optional?: boolean; max?: number } = {}): string {
  const v = b[k];
  if (v === undefined && opts.optional) return '';
  if (typeof v !== 'string' || v.length === 0) badRequest(`"${k}" must be a non-empty string`);
  if (opts.max && v.length > opts.max) badRequest(`"${k}" is too long`);
  return v;
}

export function num(b: Record<string, unknown>, k: string, opts: { optional?: boolean; min?: number; max?: number } = {}): number | undefined {
  const v = b[k];
  if (v === undefined && opts.optional) return undefined;
  if (typeof v !== 'number' || !Number.isFinite(v)) badRequest(`"${k}" must be a number`);
  if (opts.min !== undefined && v < opts.min) badRequest(`"${k}" must be ≥ ${opts.min}`);
  if (opts.max !== undefined && v > opts.max) badRequest(`"${k}" must be ≤ ${opts.max}`);
  return v;
}

export function bool(b: Record<string, unknown>, k: string): boolean {
  const v = b[k];
  if (typeof v !== 'boolean') badRequest(`"${k}" must be a boolean`);
  return v;
}
