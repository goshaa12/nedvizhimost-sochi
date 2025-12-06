import fs from 'fs';
import path from 'path';
import https from 'https';

// Напрямую подобранные URL с Unsplash (без API)
const images = [
  // Hero section
  { name: 'hero-main.webp', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=2070&q=80' },
  { name: 'hero-thumb-1.webp', url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&q=80' },
  { name: 'hero-thumb-2.webp', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
  { name: 'hero-thumb-3.webp', url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&q=80' },
  { name: 'hero-thumb-4.webp', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80' },
  
  // Tour Cost
  { name: 'tour-mountains.webp', url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1080&q=80' },
  { name: 'tour-luxury.webp', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1080&q=80' },
  { name: 'tour-corporate.webp', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1080&q=80' },
  
  // Author Tours
  { name: 'tour-yacht.webp', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1080&q=80' },
  { name: 'tour-helicopter.webp', url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1080&q=80' },
  { name: 'tour-cabrio.webp', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1080&q=80' },
  { name: 'tour-waterfall.webp', url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1080&q=80' },
  { name: 'tour-skypark.webp', url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1080&q=80' },
  { name: 'tour-elbrus.webp', url: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1080&q=80' },
  
  // About Us
  { name: 'about-main.webp', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1080&q=80' },
  { name: 'about-yacht.webp', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80' },
  { name: 'about-mountains.webp', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80' },
];

// Создаём папку
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Функция для скачивания
function downloadImage(url: string, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`❌ ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Основная функция
async function downloadAll() {
  console.log('🚀 Скачиваем картинки...\n');
  
  for (const img of images) {
    try {
      await downloadImage(img.url, img.name);
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      // Продолжаем даже при ошибках
    }
  }
  
  console.log(`\n✨ Готово! Картинки в: ${imagesDir}`);
}

downloadAll().catch(console.error);

