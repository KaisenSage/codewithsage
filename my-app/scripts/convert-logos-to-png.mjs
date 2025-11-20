import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public/logos');
const sizes = [32, 64, 128, 256, 512];

async function listSvgs() {
  const entries = await fs.readdir(publicDir, { withFileTypes: true });
  return entries.filter(e => e.isFile() && e.name.endsWith('.svg')).map(e => path.join(publicDir, e.name));
}

async function convert(svgPath) {
  const base = path.basename(svgPath, '.svg');
  const svgBuffer = await fs.readFile(svgPath);
  for (const s of sizes) {
    const out = path.join(publicDir, `${base}-${s}x${s}.png`);
    try {
      await sharp(svgBuffer)
        .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: 90 })
        .toFile(out);
      console.log('Wrote', out);
    } catch (err) {
      console.error('Failed to write', out, err.message);
    }
  }
}

async function main(){
  try{
    const svgs = await listSvgs();
    if(!svgs.length){
      console.error('No SVGs found in', publicDir);
      process.exit(1);
    }
    for(const s of svgs) await convert(s);
    console.log('All done.');
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}

main();
