import { PropertyCard } from './PropertyCard';
import { ArrowRight } from 'lucide-react';

const hotProperties = [
  {
    image: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ3MDAwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'ЖК "Морской бриз"',
    district: 'Центр',
    area: 65,
    floor: 8,
    price: '12 500 000 ₽',
    distanceToSea: 300,
    date: 'Сегодня'
  },
  {
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2NDY2MjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'ЖК "Адлер Сити"',
    district: 'Адлер',
    area: 52,
    floor: 12,
    price: '9 800 000 ₽',
    distanceToSea: 500,
    date: 'Вчера'
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NDczMDExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Таунхаус "Красная Поляна"',
    district: 'Красная Поляна',
    area: 120,
    floor: 2,
    price: '28 000 000 ₽',
    distanceToSea: 15000,
    date: 'Сегодня'
  },
  {
    image: 'https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NjQ2Njc1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'ЖК "Хоста Парк"',
    district: 'Хостинский',
    area: 78,
    floor: 5,
    price: '15 300 000 ₽',
    distanceToSea: 200,
    date: 'Сегодня'
  },
  {
    image: 'https://images.unsplash.com/photo-1666088542073-118bfbf56aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NoaSUyMHNlYSUyMHZpZXd8ZW58MXx8fHwxNzY0NzY2NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Пентхаус "Морская панорама"',
    district: 'Мамайка',
    area: 95,
    floor: 15,
    price: '22 700 000 ₽',
    distanceToSea: 150,
    date: 'Сегодня'
  },
  {
    image: 'https://images.unsplash.com/photo-1721058647318-59ab69ae7a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBzb2NoaXxlbnwxfHx8fDE3NjQ3NjY2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'ЖК "Дагомыс Плаза"',
    district: 'Дагомыс',
    area: 58,
    floor: 6,
    price: '11 200 000 ₽',
    distanceToSea: 400,
    date: 'Вчера'
  }
];

export interface HotDealsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onCtaClick?: () => void;
}

export function HotDeals({ 
  title = 'Горячие предложения дня',
  description = 'Не упускайте лучшие варианты — горячие объекты обновляются каждый день, и самые выгодные улетают первыми.',
  buttonText = 'Посмотреть больше предложений по недвижимости',
  onCtaClick
}: HotDealsProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {description && (
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              {description}
          </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {hotProperties.map((property, index) => (
            <PropertyCard key={index} {...property} onButtonClick={onCtaClick} />
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={onCtaClick}
            className="bg-white text-emerald-900 border-2 border-emerald-900 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-900 hover:text-white transition-colors inline-flex items-center gap-2 text-sm md:text-base"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
