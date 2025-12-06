/**
 * Утилиты для генерации JSON-LD микроразметки schema.org
 * В соответствии с рекомендациями Next.js
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ServiceOffer {
  name: string;
  description: string;
  price?: string;
  image?: string;
}

/**
 * Генерирует JSON-LD разметку для FAQ страницы
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Генерирует JSON-LD разметку для списка отзывов
 */
export function generateReviewsSchema(testimonials: TestimonialItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "position": index + 1,
      "author": {
        "@type": "Person",
        "name": testimonial.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": testimonial.location
        }
      },
      "reviewBody": testimonial.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };
}

/**
 * Генерирует JSON-LD разметку для хлебных крошек
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string = 'https://sochi-tur24.ru') {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": `${baseUrl}/`
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href && { item: `${baseUrl}${item.href}` })
      }))
    ]
  };
}

/**
 * Генерирует JSON-LD разметку для услуги недвижимости
 */
export function generateTourServiceSchema(service: ServiceOffer) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": service.name,
    "description": service.description,
    ...(service.price && {
      "offers": {
        "@type": "Offer",
        "price": service.price,
        "priceCurrency": "RUB"
      }
    }),
    ...(service.image && { "image": service.image }),
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Недвижимость Сочи"
    }
  };
}

/**
 * Генерирует JSON-LD разметку для организации
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Недвижимость Сочи",
    "url": "https://sochi-tur24.ru",
    "description": "Проверенная недвижимость в Сочи: квартиры, дома, новостройки. Более 50 000 объектов, юридическая проверка, экономия до 15%",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Сочи",
      "addressCountry": "RU"
    },
    "telephone": "+7 (900) 123-45-67",
    "priceRange": "₽₽₽",
    "areaServed": {
      "@type": "City",
      "name": "Сочи"
    }
  };
}

/**
 * Безопасно конвертирует JSON-LD объект в строку для использования в dangerouslySetInnerHTML
 * Экранирует символы < для предотвращения XSS-атак
 */
export function stringifyJsonLd(jsonLd: object): string {
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c');
}

