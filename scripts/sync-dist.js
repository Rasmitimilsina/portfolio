import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distHtml = path.join(rootDir, 'dist', 'index.html');
const rootHtml = path.join(rootDir, 'index.html');
const distAssets = path.join(rootDir, 'dist', 'assets');
const rootAssets = path.join(rootDir, 'assets');

if (fs.existsSync(distHtml)) {
  fs.copyFileSync(distHtml, rootHtml);
  console.log('✓ Copied dist/index.html -> root index.html');
}

if (fs.existsSync(distAssets)) {
  if (fs.existsSync(rootAssets)) {
    fs.rmSync(rootAssets, { recursive: true, force: true });
  }
  fs.cpSync(distAssets, rootAssets, { recursive: true });
  console.log('✓ Copied dist/assets -> root assets/');
}
