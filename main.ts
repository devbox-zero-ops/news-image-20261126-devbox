import { chmodSync, copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const MAX_DIMENSION = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const sourceUrl = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destPath = join(outputDir, 'entry.png');

const bytes = readFileSync(sourceUrl);
if (bytes.length === 0 || bytes.length > MAX_BYTES) {
  throw new Error(`entry.png size out of range: ${bytes.length}`);
}

if (!bytes.subarray(0, 8).equals(PNG_MAGIC) || bytes.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png missing valid PNG IHDR signature');
}

const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width < 1 || width > MAX_DIMENSION || height < 1 || height > MAX_DIMENSION) {
  throw new Error(`entry.png dimensions exceed limit: ${width}x${height}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceUrl, destPath);
chmodSync(destPath, 0o644);

