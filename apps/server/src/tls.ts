import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Self-signed certificate for LAN HTTPS (browsers expose Web MIDI only on secure pages).
 * Generated once with openssl into <dataDir>/tls and regenerated when the LAN IPs change.
 */
export function ensureCert(dataDir: string, ips: string[]): { key: Buffer; cert: Buffer } {
  const dir = join(dataDir, 'tls');
  const keyFile = join(dir, 'key.pem');
  const certFile = join(dir, 'cert.pem');
  const sansFile = join(dir, 'sans.txt');
  const sans = ['DNS:localhost', 'IP:127.0.0.1', ...ips.map((ip) => `IP:${ip}`)].join(',');
  const fresh = existsSync(keyFile) && existsSync(certFile) && existsSync(sansFile) && readFileSync(sansFile, 'utf8') === sans;
  if (!fresh) {
    mkdirSync(dir, { recursive: true });
    try {
      execFileSync('openssl', [
        'req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-sha256', '-days', '3650',
        '-keyout', keyFile, '-out', certFile, '-subj', '/CN=music-course', '-addext', `subjectAltName=${sans}`,
      ], { stdio: 'ignore' });
    } catch (e) {
      throw new Error(`HTTPS needs openssl to create a self-signed certificate: ${(e as Error).message}`);
    }
    writeFileSync(sansFile, sans);
    console.log(`[server] created self-signed certificate in ${dir} for ${sans}`);
  }
  return { key: readFileSync(keyFile), cert: readFileSync(certFile) };
}
