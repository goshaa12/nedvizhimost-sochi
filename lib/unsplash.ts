import { createApi } from 'unsplash-js';

// Создаём клиент Unsplash API
export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

// Типы для наших изображений
export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    name: string;
    username: string;
  };
}

// Поисковые запросы для разных секций сайта
export const searchQueries = {
  hero: 'sochi russia mountains sea',
  yacht: 'luxury yacht sochi',
  mountains: 'sochi rosa khutor mountains',
  helicopter: 'helicopter mountain view',
  waterfall: 'waterfall caucasus',
  beach: 'black sea sochi beach',
  nature: 'caucasus nature landscape',
  cityview: 'sochi aerial view',
  adventure: 'adventure hiking mountains',
  luxury: 'luxury resort spa',
} as const;

// Функция для получения изображений по запросу
export async function getUnsplashImages(
  query: string,
  count: number = 10
): Promise<UnsplashImage[]> {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: count,
      orientation: 'landscape',
    });

    if (result.errors) {
      console.error('Unsplash API errors:', result.errors);
      return [];
    }

    return result.response?.results || [];
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return [];
  }
}

// Функция для получения случайных изображений
export async function getRandomUnsplashImages(
  query: string,
  count: number = 1
): Promise<UnsplashImage[]> {
  try {
    const result = await unsplash.photos.getRandom({
      query,
      count,
      orientation: 'landscape',
    });

    if (result.errors) {
      console.error('Unsplash API errors:', result.errors);
      return [];
    }

    if (Array.isArray(result.response)) {
      return result.response as UnsplashImage[];
    } else if (result.response) {
      return [result.response as UnsplashImage];
    }

    return [];
  } catch (error) {
    console.error('Error fetching random Unsplash images:', error);
    return [];
  }
}

// Предзагруженные URL для статического контента (fallback)
export const fallbackImages = {
  hero: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070',
  yacht: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1080',
  mountains: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1080',
  helicopter: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1080',
  waterfall: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1080',
  beach: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1080',
} as const;

