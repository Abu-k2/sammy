const fs = require('fs');
const path = require('path');

// Function to get file size in KB
function getFileSizeKB(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024).toFixed(2);
  } catch (error) {
    return 'N/A';
  }
}

// Define image pairs to compare (original vs optimized)
const imagePairs = [
  { original: 'public/images/hero1.jpg', optimized: 'public/images/hero1-optimized.jpg' },
  { original: 'public/images/hero2.jpg', optimized: 'public/images/hero2-optimized.jpg' },
  { original: 'public/images/hero3.jpg', optimized: 'public/images/hero3-optimized.jpg' },
  { original: 'public/images/OBANGE.jpg', optimized: 'public/images/OBANGE-optimized.jpg' },
  { original: 'public/images/lakeside.jpg', optimized: 'public/images/lakeside-optimized.jpg' },
  { original: 'public/images/city.jpg', optimized: 'public/images/city-optimized.jpg' },
  { original: 'public/images/renovating.jpg', optimized: 'public/images/renovating-optimized.jpg' },
  { original: 'public/images/about.jpg', optimized: 'public/images/about-optimized.jpg' },
  { original: 'public/images/IMG-20251024-WA0018.jpg', optimized: 'public/images/IMG-20251024-WA0018-optimized.jpg' },
  { original: 'public/images/complex-aerial-view-city.jpg', optimized: 'public/images/complex-aerial-view-city-optimized.jpg' },
  { original: 'public/images/unsplash_a8K-puaPyVk.jpg', optimized: 'public/images/unsplash_a8K-puaPyVk-optimized.jpg' }
];

console.log('Image Optimization Results:');
console.log('========================');
console.log('Original File -> Optimized File (Size Reduction)');
console.log('');

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

imagePairs.forEach(pair => {
  const originalPath = path.join(__dirname, pair.original);
  const optimizedPath = path.join(__dirname, pair.optimized);
  
  const originalSize = getFileSizeKB(originalPath);
  const optimizedSize = getFileSizeKB(optimizedPath);
  
  if (originalSize !== 'N/A' && optimizedSize !== 'N/A') {
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    console.log(`${pair.original} -> ${pair.optimized}`);
    console.log(`  ${originalSize} KB -> ${optimizedSize} KB (${reduction}% reduction)`);
    console.log('');
    
    totalOriginalSize += parseFloat(originalSize);
    totalOptimizedSize += parseFloat(optimizedSize);
  } else {
    console.log(`${pair.original} -> ${pair.optimized} (File not found)`);
    console.log('');
  }
});

if (totalOriginalSize > 0 && totalOptimizedSize > 0) {
  const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`Total Size Reduction: ${totalOriginalSize.toFixed(2)} KB -> ${totalOptimizedSize.toFixed(2)} KB (${totalReduction}% reduction)`);
}