import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'F:/ProjetClaude/site_web_et_appli_depannage_dragos/photos/HD/webp';
const DST = 'F:/ProjetClaude/site_web_et_appli_depannage_dragos/site/public/content';

// Content images for home trust bandeau, about atelier, B2B page
const ASSETS = [
  { src: 'photo_2026_04_11_15_13_22_13_.webp', name: 'trust-public',   width: 1200, note: 'GHU Paris camion (preuve sociale hôpital public)' },
  { src: 'photo_2026_04_11_15_13_22_11_.webp', name: 'trust-dealer',   width: 1200, note: 'Devant concessionnaire Mercedes Paris' },
  { src: 'photo_2026_04_11_15_13_22.webp',     name: 'trust-rental',   width: 1200, note: 'FranceCars contrejour' },
  { src: 'IMG_2371.webp',                      name: 'atelier',        width: 1600, note: 'Mercedes Classe B + Classe A atelier Grigny' },
  { src: 'photo_2026_04_11_15_13_22_5_.webp',  name: 'b2b-hero',       width: 1920, note: 'Sprinter + 2 fourgons (capacité flotte)' },
  { src: 'photo_2026_04_11_15_13_22_2_.webp',  name: 'service-premium',width: 1200, note: 'Audi RS-Q8 vert olive (premium)' },
  { src: 'photo_2026_04_11_15_13_22_8_.webp',  name: 'service-long',   width: 1200, note: 'Mercedes GLS route campagne (longue distance)' },
];

if (!fs.existsSync(DST)) fs.mkdirSync(DST, { recursive: true });

for (const { src, name, width, note } of ASSETS) {
  const input = path.join(SRC, src);
  if (!fs.existsSync(input)) {
    console.error(`MISSING ${src}`);
    continue;
  }

  const webpOut = path.join(DST, `${name}.webp`);
  const avifOut = path.join(DST, `${name}.avif`);

  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(webpOut);

  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 50, effort: 6 })
    .toFile(avifOut);

  const ws = fs.statSync(webpOut).size;
  const as = fs.statSync(avifOut).size;
  console.log(`OK ${name}: webp ${(ws / 1024).toFixed(0)}KB | avif ${(as / 1024).toFixed(0)}KB — ${note}`);
}
