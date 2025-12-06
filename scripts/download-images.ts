import fs from 'fs';
import path from 'path';
import https from 'https';

const UNSPLASH_ACCESS_KEY = 'kf7I53aGw05VfxpPIip46l5cbmbV02a0Q9hSoeDvkes';

// Определяем какие картинки нам нужны
const imageRequests = [
  // Hero section
  { name: 'hero-main', query: 'sochi russia black sea mountains', width: 2070 },
  { name: 'hero-thumb-1', query: 'rosa khutor mountains', width: 400 },
  { name: 'hero-thumb-2', query: 'yacht black sea', width: 400 },
  { name: 'hero-thumb-3', query: 'sochi beach resort', width: 400 },
  { name: 'hero-thumb-4', query: 'mountain waterfall caucasus', width: 400 },
  
  // Tour Cost
  { name: 'tour-mountains', query: 'rosa khutor mountains resort sochi', width: 1080 },
  { name: 'tour-luxury', query: 'luxury resort pool spa mountain view', width: 1080 },
  { name: 'tour-corporate', query: 'team building outdoor adventure group', width: 1080 },
  
  // Author Tours
  { name: 'tour-yacht', query: 'yacht sailing black sea sunset', width: 1080 },
  { name: 'tour-helicopter', query: 'helicopter mountain lake aerial view', width: 1080 },
  { name: 'tour-cabrio', query: 'mountain road convertible car scenic', width: 1080 },
  { name: 'tour-waterfall', query: 'waterfall forest caucasus mountains', width: 1080 },
  { name: 'tour-skypark', query: 'suspension bridge mountains adventure', width: 1080 },
  { name: 'tour-elbrus', query: 'elbrus mountain peak snow aerial', width: 1080 },
  
  // About Us
  { name: 'about-main', query: 'sochi beach coastline aerial view', width: 1080 },
  { name: 'about-yacht', query: 'yacht black sea', width: 600 },
  { name: 'about-mountains', query: 'mountains hiking adventure', width: 600 },
];

// Создаём папку для картинок если её нет
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Функция для скачивания файла
function downloadImage(url: string, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Скачано: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Функция для получения URL картинки с Unsplash
async function getUnsplashImageUrl(query: string, width: number): Promise<string> {
  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&w=${width}&client_id=${UNSPLASH_ACCESS_KEY}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.urls.regular || data.urls.full;
}

// Основная функция
async function downloadAllImages() {
  console.log('🚀 Начинаем скачивание картинок с Unsplash...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const req of imageRequests) {
    try {
      console.log(`⏳ Получаем: ${req.name} (${req.query})...`);
      
      // Получаем URL с Unsplash
      const imageUrl = await getUnsplashImageUrl(req.query, req.width);
      
      // Скачиваем картинку
      const filename = `${req.name}.webp`;
      await downloadImage(imageUrl, filename);
      
      successCount++;
      
      // Задержка между запросами (чтобы не превысить rate limit)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Ошибка для ${req.name}:`, error);
      errorCount++;
    }
  }
  
  console.log(`\n✨ Готово! Успешно: ${successCount}, Ошибок: ${errorCount}`);
  console.log(`📁 Картинки сохранены в: ${imagesDir}`);
}

// Запускаем
downloadAllImages().catch(console.error);

