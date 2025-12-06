import { ArrowRight, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface BlogArticle {
  title: string;
  date: string;
  image: string;
  href?: string;
}

export interface BlogProps {
  title?: string;
  description?: string;
  articles: BlogArticle[];
  readMoreText?: string;
}

export function Blog({ title = 'Читайте свежие статьи и новости', description, articles, readMoreText = 'Читать далее' }: BlogProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {description && (
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 md:mt-4">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-900/30 hover:shadow-lg transition-all group"
            >
              <div className="relative overflow-hidden h-40 md:h-48">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  <span>{article.date}</span>
                </div>
                <h4 className="mb-3 md:mb-4 line-clamp-3 text-sm md:text-base font-semibold text-gray-900">{article.title}</h4>
                <a 
                  href={article.href || '#'}
                  className="text-emerald-900 hover:text-emerald-800 transition-colors inline-flex items-center gap-2 text-xs md:text-sm font-medium"
                >
                  {readMoreText}
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
