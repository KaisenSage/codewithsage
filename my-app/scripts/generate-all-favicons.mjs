import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

const publicDir = path.resolve(process.cwd(), 'public');
const srcIcon = path.join(publicDir, '_icon-source.svg');

async function exist(p){ 
  try{ 
    await fs.access(p); 
    return true 
  } catch(e) { 
    return false 
  } 
}

async function gen(){
  if(!(await exist(srcIcon))){ 
    console.error('Missing source icon:', srcIcon); 
    process.exit(1); 
  }

  const svgBuf = await fs.readFile(srcIcon);
  
  // Generate all favicon sizes
  console.log('Generating favicon PNGs...');
  await sharp(svgBuf).resize(16, 16, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'favicon-16x16.png'));
  await sharp(svgBuf).resize(16, 16, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'favicon-16x16-v3.png'));
  
  await sharp(svgBuf).resize(32, 32, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'favicon-32x32.png'));
  await sharp(svgBuf).resize(32, 32, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'favicon-32x32-v3.png'));
  
  await sharp(svgBuf).resize(96, 96, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'favicon-96x96.png'));
  
  await sharp(svgBuf).resize(150, 150, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'mstile-150x150.png'));
  
  // Apple touch icons
  console.log('Generating Apple touch icons...');
  await sharp(svgBuf).resize(180, 180, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'apple-touch-icon.png'));
  await sharp(svgBuf).resize(180, 180, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'apple-touch-icon-v3.png'));
  await sharp(svgBuf).resize(180, 180, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'apple-icon.png'));
  
  // Web app manifest icons
  console.log('Generating web app manifest icons...');
  await sharp(svgBuf).resize(192, 192, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'web-app-manifest-192x192.png'));
  await sharp(svgBuf).resize(192, 192, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'web-app-manifest-192x192-v3.png'));
  
  await sharp(svgBuf).resize(512, 512, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'web-app-manifest-512x512.png'));
  await sharp(svgBuf).resize(512, 512, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toFile(path.join(publicDir,'web-app-manifest-512x512-v3.png'));
  
  // Generate .ico files (multi-resolution ICO with 16x16, 32x32, 48x48)
  console.log('Generating .ico files...');
  const ico16 = await sharp(svgBuf).resize(16, 16, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toBuffer();
  const ico32 = await sharp(svgBuf).resize(32, 32, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toBuffer();
  const ico48 = await sharp(svgBuf).resize(48, 48, {fit:'contain', background: {r: 0, g: 0, b: 0, alpha: 0}}).png().toBuffer();
  
  const icoBuffer = await toIco([ico16, ico32, ico48]);
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
  await fs.writeFile(path.join(publicDir, 'favicon-v3.ico'), icoBuffer);
  
  // Copy SVG as favicon SVGs
  console.log('Copying SVG favicons...');
  await fs.copyFile(srcIcon, path.join(publicDir, 'favicon.svg'));
  await fs.copyFile(srcIcon, path.join(publicDir, 'favicon-v3.svg'));
  
  // Copy to src/app for Next.js app directory
  await fs.copyFile(path.join(publicDir, 'favicon.ico'), path.join(process.cwd(), 'src', 'app', 'favicon.ico'));
  
  console.log('✅ All favicon assets generated successfully!');
}

gen().catch(err=>{ 
  console.error(err); 
  process.exit(1);
});
