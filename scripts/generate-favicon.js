const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon.ico': 32,
  'icon.png': 32,
  'apple-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicon() {
  // Create a base SVG with the logo design
  const svg = `
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="128" fill="url(#gradient)" />
      <path d="M256 128L384 256L256 384L128 256L256 128Z" fill="white" />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
      </defs>
    </svg>
  `;

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Generate each size
  for (const [filename, size] of Object.entries(sizes)) {
    const outputPath = path.join(publicDir, filename);
    
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .toFile(outputPath);
    
    console.log(`Generated ${filename}`);
  }
}

generateFavicon().catch(console.error); 