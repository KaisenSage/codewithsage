import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

const publicDir = path.resolve(process.cwd(), 'public');
const srcIcon = path.join(publicDir, '_icon-source.svg');
const outputIco = path.join(publicDir, 'favicon.ico');

async function generateFaviconIco() {
  try {
    console.log('Reading source icon:', srcIcon);
    const svgBuffer = await fs.readFile(srcIcon);
    
    // Generate PNG buffers at different sizes
    // Standard favicon.ico should contain 16x16, 32x32, and 48x48
    console.log('Generating PNG images at different sizes...');
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map(size =>
        sharp(svgBuffer)
          .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer()
      )
    );
    
    console.log('Converting PNGs to ICO format...');
    const icoBuffer = await toIco(pngBuffers);
    
    console.log('Writing favicon.ico to:', outputIco);
    await fs.writeFile(outputIco, icoBuffer);
    
    console.log('✓ Successfully generated favicon.ico with sizes:', sizes.join('x, ') + 'x');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
    process.exit(1);
  }
}

generateFaviconIco();
