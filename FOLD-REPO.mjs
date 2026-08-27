#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const here = process.cwd();
const map = JSON.parse(fs.readFileSync(path.join(here, '00-FOLD-MAP.json'), 'utf8'));
const target = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(here, 'folded-the-moving-invariant');
fs.mkdirSync(target, { recursive: true });
for (const item of map.files) {
  const src = path.join(here, item.flat);
  const dest = path.join(target, item.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  const hash = crypto.createHash('sha256').update(fs.readFileSync(dest)).digest('hex');
  if (hash !== item.sha256) throw new Error(`Hash mismatch: ${item.path}`);
}
console.log(`Folded ${map.files.length} files into ${target}`);
