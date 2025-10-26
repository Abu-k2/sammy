const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Define the image optimization targets
const imagesToOptimize = [
  { 
    src: 'public/images/hero3.jpg', 
    dest: 'public/images/hero3-optimized.jpg',
    width: 1920,
    quality: 80
  },
  { 
    src: 'public/images/complex-aerial-view-city.jpg', 
    dest: 'public/images/complex-aerial-view-city-optimized.jpg',
    width: 1920,
    quality: 80
  },
  { 
    src: 'public/images/hero2.jpg', 
    dest: 'public/images/hero2-optimized.jpg',
    width: 1920,
    quality: 80
  }
];

async function optimizeImages() {
  console.log('Optimizing images...');
  
  for (const image of imagesToOptimize) {
    try {
      const srcPath = path.join(__dirname, image.src);
      const destPath = path.join(__dirname, image.dest);
      
      // Check if source file exists
      await fs.access(srcPath);
      
      // Optimize the image
      await sharp(srcPath)
        .resize({ width: image.width, withoutEnlargement: true })
        .jpeg({ quality: image.quality, progressive: true })
        .toFile(destPath);
      
      console.log(`Optimized: ${image.src} -> ${image.dest}`);
    } catch (error) {
      console.error(`Error optimizing ${image.src}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages();