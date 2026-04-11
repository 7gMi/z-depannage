import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'F:/ProjetClaude/site_web_et_appli_depannage_dragos/photos/HD/webp';
const DST = 'F:/ProjetClaude/site_web_et_appli_depannage_dragos/site/public/hero';

// Final hero order — combining both UI/UX agents' recommendations
const SLIDES = [
  { id: '1', src: 'photo_2026_04_11_15_13_22_12_.webp', note: 'AMG GT 4-door nuit lumineuse (LCP)' },
  { id: '2', src: 'photo_2026_04_11_15_13_22_13_.webp', note: 'GHU PARIS Psychiatrie (preuve sociale)' },
  { id: '3', src: 'IMG_2361.webp',                    note: 'Audi RS3 nuit HD (24/7)' },
  { id: '4', src: 'photo_2026_04_11_15_13_22_5_.webp',  note: 'Sprinter + fourgons (flotte)' },
  { id: '5', src: 'IMG_2274.webp',                    note: 'Renault Megane E-Tech (électrique)' },
];

// Hero target: fit within 1920x1280 while respecting aspect ratio (object-cover handles the rest)
const MAX_W = 1920;
const MAX_H = 1280;

if (!fs.existsSync(DST)) fs.mkdirSync(DST, { recursive: true });

// Backup previous files
const backup = path.join(DST, '_backup_pre_dragos');
if (!fs.existsSync(backup)) fs.mkdirSync(backup);
for (const f of fs.readdirSync(DST)) {
  if (/^\d\.(webp|avif)$/.test(f)) {
    fs.copyFileSync(path.join(DST, f), path.join(backup, f));
  }
}

for (const { id, src, note } of SLIDES) {
  const input = path.join(SRC, src);
  if (!fs.existsSync(input)) {
    console.error(`MISSING ${src}`);
    continue;
  }
  const buf = await sharp(input).rotate().toBuffer();
  const meta = await sharp(buf).metadata();

  const pipeline = (q, format) =>
    sharp(buf)
      .rotate()
      .resize({
        width: MAX_W,
        height: MAX_H,
        fit: 'inside',
        withoutEnlargement: true,
      })
      [format](q);

  const webpOut = path.join(DST, `${id}.webp`);
  const avifOut = path.join(DST, `${id}.avif`);
  await pipeline({ quality: 82 }, 'webp').toFile(webpOut);
  await pipeline({ quality: 48, effort: 6 }, 'avif').toFile(avifOut);

  const ws = fs.statSync(webpOut).size;
  const as = fs.statSync(avifOut).size;
  console.log(
    `OK slot ${id}: ${src} (${meta.width}x${meta.height}) -> webp ${(ws / 1024).toFixed(0)}KB | avif ${(as / 1024).toFixed(0)}KB  — ${note}`
  );
}

console.log('Done. Backups in public/hero/_backup_pre_dragos/');
