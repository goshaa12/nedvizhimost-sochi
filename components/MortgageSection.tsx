"use client";

import { CheckCircle2 } from 'lucide-react';

export interface MortgageSectionProps {
  title?: string;
  description?: string;
  features: string[];
  ctaText?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

export function MortgageSection({
  title = 'Получите лучшие программы ипотеки уже сейчас',
  description,
  features,
  ctaText,
  ctaButtonText,
  onCtaClick,
}: MortgageSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                {description}
            </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-emerald-50 p-5 md:p-6 rounded-xl border border-emerald-100"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-900 flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          
          {ctaText && ctaButtonText && (
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
              <div className="text-center mb-4 md:mb-6">
                <p className="text-base md:text-lg text-gray-700">
                  {ctaText}
              </p>
            </div>
              <button 
                onClick={onCtaClick}
                className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
              >
                {ctaButtonText}
            </button>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
