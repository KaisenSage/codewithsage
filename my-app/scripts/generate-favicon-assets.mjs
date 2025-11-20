import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const srcIcon = path.join(publicDir, '_icon-source.svg');
const ogSvg = path.join(publicDir, 'og-image.svg');

async function exist(p){ try{ await fs.access(p); return true }catch(e){ return false } }

async function gen(){
  if(!(await exist(srcIcon))){ console.error('Missing source icon:', srcIcon); process.exit(1); }
  if(!(await exist(ogSvg))){ console.error('Missing OG svg:', ogSvg); process.exit(1); }

  const svgBuf = await fs.readFile(srcIcon);
  // favicon sizes
  await sharp(svgBuf).resize(16,16,{fit:'cover'}).png().toFile(path.join(publicDir,'favicon-16x16.png'));
  await sharp(svgBuf).resize(32,32,{fit:'cover'}).png().toFile(path.join(publicDir,'favicon-32x32.png'));
  await sharp(svgBuf).resize(150,150,{fit:'cover'}).png().toFile(path.join(publicDir,'mstile-150x150.png'));
  console.log('Generated favicons and mstile');

  // OG image
  const ogBuf = await fs.readFile(ogSvg);
  await sharp(ogBuf).resize(1200,630,{fit:'cover'}).png().toFile(path.join(publicDir,'og-image.png'));
  console.log('Generated og-image.png');
}

gen().catch(err=>{ console.error(err); process.exit(1);} );
