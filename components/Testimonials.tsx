import { Quote } from 'lucide-react';

export interface Testimonial {
  name: string;
  city: string;
  text: string;
}

export interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

export function Testimonials({ title = 'Отзывы', testimonials }: TestimonialsProps) {
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
      </div>
    </section>
  );
}
