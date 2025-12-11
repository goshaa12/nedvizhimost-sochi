"use client";

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
  onClick?: () => void;
}

export interface GalleryProps {
  title?: string;
  description?: string;
  items: GalleryItem[];
}

export function Gallery({
  title = 'Фото и видеогалерея',
  description,
  items,
}: GalleryProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {description && (
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              {description}
          </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className="relative rounded-lg md:rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
            >
              <div className="absolute inset-0">
              <ImageWithFallback
                src={item.url}
                  alt={item.alt || `Gallery ${index + 1}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
