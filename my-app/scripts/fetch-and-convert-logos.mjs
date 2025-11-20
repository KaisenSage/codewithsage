import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public/logos');
await fs.mkdir(publicDir, { recursive: true });

const icons = [
  { slugs: ['react'], name: 'react' },
  { slugs: ['nextdotjs','next.js','next'], name: 'nextjs' },
  { slugs: ['nodedotjs','node.js','node'], name: 'nodejs' },
  { slugs: ['tailwindcss','tailwind'], name: 'tailwind' },
  { slugs: ['typescript'], name: 'typescript' },
  { slugs: ['vercel'], name: 'vercel' },
  { slugs: ['aws','amazon','amazonaws'], name: 'aws' }
];

async function fetchSvg(slug){
  const url = `https://cdn.simpleicons.org/${slug}`;
  const res = await fetch(url);
  if(!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

for(const ic of icons){
  let succeeded = false;
  for(const slug of ic.slugs){
    try{
      const svg = await fetchSvg(slug);
      const svgPath = path.join(publicDir, `${ic.name}.svg`);
      await fs.writeFile(svgPath, svg, 'utf8');
      // convert to 96x96 PNG
      const pngPath = path.join(publicDir, `${ic.name}.png`);
      await sharp(Buffer.from(svg)).resize(96,96,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toFile(pngPath);
      console.log('Wrote', svgPath, '->', pngPath);
      succeeded = true;
      break;
    }catch(err){
      // try next slug
    }
  }
  if(!succeeded) console.error('All slugs failed for', ic.name);
}
