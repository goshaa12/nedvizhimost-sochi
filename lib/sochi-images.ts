// Специфичные запросы для фотографий Сочи
export const sochiImageQueries = {
  // Hero секция
  hero: [
    'sochi russia black sea',
    'sochi cityscape mountains',
    'sochi resort aerial view',
    'caucasus mountains sochi'
  ],
  
  // Морские прогулки
  yacht: [
    'yacht black sea',
    'luxury yacht sailing',
    'boat cruise sunset sea',
    'sailing yacht coastline'
  ],
  
  // Горы и природа
  mountains: [
    'rosa khutor sochi',
    'caucasus mountains snow',
    'sochi mountains landscape',
    'krasnaya polyana'
  ],
  
  // Вертолёт
  helicopter: [
    'helicopter mountain view',
    'aerial view mountains',
    'helicopter flight landscape',
    'mountain helicopter tour'
  ],
  
  // Водопады
  waterfall: [
    'waterfall caucasus',
    'mountain waterfall russia',
    'forest waterfall',
    'cascade waterfall'
  ],
  
  // Пляжи
  beach: [
    'black sea beach',
    'sochi beach resort',
    'pebble beach sea',
    'beach sunset palm trees'
  ],
  
  // Приключения
  adventure: [
    'hiking mountains group',
    'mountain trekking',
    'outdoor adventure',
    'extreme sports mountains'
  ],
  
  // Люкс отдых
  luxury: [
    'luxury resort pool',
    'spa wellness',
    'five star hotel',
    'luxury vacation resort'
  ],
  
  // Skypark
  skypark: [
    'suspension bridge mountains',
    'zipline adventure',
    'bungee jumping',
    'extreme park'
  ],
  
  // Красная Поляна
  krasnayaPolyana: [
    'krasnaya polyana ski resort',
    'mountain resort summer',
    'alpine resort',
    'mountain cable car'
  ],
  
  // Дегустации
  wine: [
    'wine tasting vineyard',
    'wine cellar',
    'vineyard landscape',
    'wine glasses sunset'
  ],
  
  // Города и архитектура
  city: [
    'sochi architecture',
    'modern resort architecture',
    'coastal city aerial',
    'city skyline mountains'
  ]
};

// Функция для получения случайного запроса из категории
export function getRandomQuery(category: keyof typeof sochiImageQueries): string {
  const queries = sochiImageQueries[category];
  return queries[Math.floor(Math.random() * queries.length)];
}

// Fallback изображения (если API не работает)
export const sochiImageFallbacks = {
  hero: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070',
  yacht: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1080',
  mountains: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1080',
  helicopter: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1080',
  waterfall: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1080',
  beach: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1080',
  adventure: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1080',
  luxury: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1080',
  skypark: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1080',
  city: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1080',
};

