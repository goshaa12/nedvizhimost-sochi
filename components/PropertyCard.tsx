import { MapPin, Maximize, Layers, Heart, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';

interface PropertyCardProps {
  image: string;
  title: string;
  district: string;
  area: number;
  floor: number;
  price: string;
  distanceToSea: number;
  date?: string;
  href?: string;
  onButtonClick?: () => void;
}

export function PropertyCard({
  image,
  title,
  district,
  area,
  floor,
  price,
  distanceToSea,
  date = 'Сегодня',
  href = '#',
  onButtonClick,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-900/30 hover:shadow-xl transition-all group">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-1.5 md:gap-2">
          <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
          </button>
          <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
          <span className="bg-emerald-900/90 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm backdrop-blur-sm">
            {date}
          </span>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="mb-2 text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-900 transition-colors">{title}</h3>
        
        <div className="flex items-center gap-2 text-gray-500 mb-3 md:mb-4">
          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm">{district}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4 py-3 md:py-4 border-t border-b border-gray-200">
          <div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-500 mb-1">
              <Maximize className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs">Площадь</span>
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-900">{area} м²</div>
          </div>
          <div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-500 mb-1">
              <Layers className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs">Этаж</span>
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-900">{floor}</div>
          </div>
          <div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-500 mb-1">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs">До моря</span>
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-900">{distanceToSea} м</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs text-gray-500 mb-1">Цена</div>
            <div className="text-xl md:text-2xl font-bold text-emerald-900">{price}</div>
          </div>
          {onButtonClick ? (
            <button 
              onClick={onButtonClick}
              className="w-full sm:w-auto bg-emerald-900 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-emerald-800 transition-colors text-sm md:text-base"
            >
            Подробнее
          </button>
          ) : (
            <Link 
              href={href}
              className="w-full sm:w-auto bg-emerald-900 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-emerald-800 transition-colors text-sm md:text-base text-center inline-block"
            >
              Подробнее
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
