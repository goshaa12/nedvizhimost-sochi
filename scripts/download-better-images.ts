import fs from 'fs';
import path from 'path';
import https from 'https';

// Подобранные конкретные ID фотографий с Unsplash
const images = [
  // Hero section - Сочи, море и горы
  { name: 'hero-main.webp', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=2070&q=80' }, // Сочи вид
  { name: 'hero-thumb-1.webp', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' }, // Горы
  { name: 'hero-thumb-2.webp', url: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&q=80' }, // Яхта
  { name: 'hero-thumb-3.webp', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' }, // Пляж
  { name: 'hero-thumb-4.webp', url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80' }, // Водопад
  
  // Tour Cost - Тарифы
  { name: 'tour-mountains.webp', url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1080&q=80' }, // Горнолыжный курорт
  { name: 'tour-luxury.webp', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080&q=80' }, // Роскошный отель/бассейн
  { name: 'tour-corporate.webp', url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1080&q=80' }, // Команда на природе
  
  // Author Tours - Авторские туры
  { name: 'tour-yacht.webp', url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1080&q=80' }, // Яхта на закате
  { name: 'tour-helicopter.webp', url: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1080&q=80' }, // Вертолёт/горы с высоты
  { name: 'tour-cabrio.webp', url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1080&q=80' }, // Кабриолет на дороге
  { name: 'tour-waterfall.webp', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1080&q=80' }, // Водопад в горах
  { name: 'tour-skypark.webp', url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1080&q=80' }, // Подвесной мост
  { name: 'tour-elbrus.webp', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80' }, // Заснеженные горы
  
  // About Us
  { name: 'about-main.webp', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80' }, // Панорама гор
  { name: 'about-yacht.webp', url: 'https://images.unsplash.com/photo-1535024966711-d5cd5c1f1641?w=600&q=80' }, // Яхта крупным планом
  { name: 'about-mountains.webp', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' }, // Горный поход
];

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

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

async function downloadAll() {
  console.log('🚀 Скачиваем УЛУЧШЕННЫЕ картинки с Unsplash...\n');
  
  let count = 0;
  for (const img of images) {
    try {
      await downloadImage(img.url, img.name);
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      // Продолжаем
    }
  }
  
  console.log(`\n✨ Готово! Скачано: ${count}/${images.length}`);
  console.log(`📁 Картинки в: ${imagesDir}`);
}

downloadAll().catch(console.error);




