import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import process from "process";
import sharp from "sharp";
import pngToIco from "png-to-ico";

function usageAndExit(msg) {
  if (msg) console.error(msg);
  console.error("\nUsage: node scripts/generate-favicon-assets.mjs --source <path-or-url>\n");
  process.exit(msg ? 1 : 0);
}

// Simple arg parse
const argv = process.argv.slice(2);
let source;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--source" && argv[i + 1]) {
    source = argv[i + 1];
    i++;
  } else if (argv[i] === "--help" || argv[i] === "-h") {
    usageAndExit();
  }
}
if (!source) usageAndExit("Error: --source is required");

const outDir = path.resolve(process.cwd(), "public");
await fs.mkdir(outDir, { recursive: true });

async function loadSourceBuffer(src) {
  if (/^https?:\/\//i.test(src)) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`Failed to fetch ${src}: ${res.status}`);
    const ab = await res.arrayBuffer();
    return Buffer.from(ab);
  } else {
    const p = path.resolve(process.cwd(), src);
    if (!existsSync(p)) throw new Error(`Local file not found: ${p}`);
    return await fs.readFile(p);
  }
}

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "favicon-57x57.png", size: 57 },
  { name: "favicon-72x72.png", size: 72 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "favicon-120x120.png", size: 120 },
  { name: "favicon-144x144.png", size: 144 },
  { name: "favicon-152x152.png", size: 152 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-256x256.png", size: 256 },
  { name: "android-chrome-384x384.png", size: 384 },
  { name: "android-chrome-512x512.png", size: 512 }
];

try {
  console.log("Loading source...", source);
  const srcBuf = await loadSourceBuffer(source);

  for (const s of sizes) {
    const outPath = path.join(outDir, s.name);
    // Use contain so aspect ratio preserved; transparent background
    await sharp(srcBuf)
      .resize(s.size, s.size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outPath);
    console.log("Wrote", outPath);
  }

  // Create favicon.ico from 16/32/48 PNGs
  const icoSources = [
    path.join(outDir, "favicon-16x16.png"),
    path.join(outDir, "favicon-32x32.png"),
    path.join(outDir, "favicon-48x48.png")
  ];
  console.log("Generating favicon.ico...");
  const icoBuffer = await pngToIco(icoSources);
  await fs.writeFile(path.join(outDir, "favicon.ico"), icoBuffer);
  console.log("Wrote", path.join(outDir, "favicon.ico"));
// Write a minimal site.webmanifest
  const manifest = {
    name: "App",
    short_name: "App",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff"
  };
  await fs.writeFile(path.join(outDir, "site.webmanifest"), JSON.stringify(manifest, null, 2));
  console.log("Wrote", path.join(outDir, "site.webmanifest"));

  console.log("\nDone. Add this snippet into your <head> (Next.js app/head or _document):\n");
  console.log(`
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#000000" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  `);

} catch (err) {
  console.error("Error:", err);
  process.exit(1);
}