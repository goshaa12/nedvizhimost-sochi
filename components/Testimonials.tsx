import { Quote } from 'lucide-react';
import React from 'react';

export interface Testimonial {
  name: string;
  city: string;
  text: string;
}

export interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

function buildJsonLd(testimonials: Testimonial[], title: string) {
  // Using Review/Person schema per https://schema.org/Review
  // Aggregate reviews as an array
  const reviews = testimonials.map((testimonial) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": testimonial.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": testimonial.city
      }
    },
    "reviewBody": testimonial.text
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product", // Product since it's about real estate selection, frequently used for testimonials/reviews
    "name": title,
    "review": reviews
  };
}

export function Testimonials({ title = 'Отзывы', testimonials }: TestimonialsProps) {
  const jsonLd = React.useMemo(
    () => buildJsonLd(testimonials, title),
    [testimonials, title]
  );

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-all relative"
            >
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-emerald-900" />
              </div>
              
              <div className="mb-3 md:mb-4">
                <div className="text-sm md:text-base text-gray-900 font-semibold">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-gray-500">{testimonial.city}</div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                «{testimonial.text}»
              </p>
            </div>
          ))}
        </div>
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
}
