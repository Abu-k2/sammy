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
  },
  // Additional images that need optimization
  { 
    src: 'public/images/hero1.jpg', 
    dest: 'public/images/hero1-optimized.jpg',
    width: 1920,
    quality: 80
  },
  { 
    src: 'public/images/OBANGE.jpg', 
    dest: 'public/images/OBANGE-optimized.jpg',
    width: 1200,
    quality: 85
  },
  { 
    src: 'public/images/lakeside.jpg', 
    dest: 'public/images/lakeside-optimized.jpg',
    width: 1200,
    quality: 85
  },
  { 
    src: 'public/images/city.jpg', 
    dest: 'public/images/city-optimized.jpg',
    width: 1200,
    quality: 85
  },
  { 
    src: 'public/images/renovating.jpg', 
    dest: 'public/images/renovating-optimized.jpg',
    width: 1200,
    quality: 85
  },
  { 
    src: 'public/images/about.jpg', 
    dest: 'public/images/about-optimized.jpg',
    width: 800,
    quality: 80
  },
  { 
    src: 'public/images/IMG-20251024-WA0018.jpg', 
    dest: 'public/images/IMG-20251024-WA0018-optimized.jpg',
    width: 800,
    quality: 80
  },
  { 
    src: 'public/images/unsplash_a8K-puaPyVk.jpg', 
    dest: 'public/images/unsplash_a8K-puaPyVk-optimized.jpg',
    width: 1200,
    quality: 85
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