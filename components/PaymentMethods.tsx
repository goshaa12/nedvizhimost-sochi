"use client";

import { Banknote, Building2, TrendingUp, Baby, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Banknote,
  Building2,
  TrendingUp,
  Baby,
};

export interface PaymentMethod {
  icon: string;
  title: string;
  description: string;
}

export interface PaymentMethodsProps {
  title?: string;
  methods: PaymentMethod[];
  ctaText?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

export function PaymentMethods({
  title = 'Используйте любые виды оплаты',
  methods,
  ctaText,
  ctaButtonText,
  onCtaClick,
}: PaymentMethodsProps) {
  const methodsCount = methods.length;
  const gridCols = methodsCount === 3 
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
  
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <div className={`grid ${gridCols} gap-4 md:gap-6 mb-8 md:mb-12`}>
          {methods.map((method, index) => {
            const Icon = iconMap[method.icon] || Banknote;
            return (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 hover:border-emerald-900/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-900" />
                </div>
                <h4 className="mb-2 md:mb-3 text-sm md:text-base font-semibold text-gray-900">{method.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            );
          })}
        </div>
        
        {ctaText && ctaButtonText && (
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 shadow-lg text-center">
            <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-700">
              {ctaText}
          </p>
            <button 
              onClick={onCtaClick}
              className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors text-sm md:text-base"
            >
              {ctaButtonText}
          </button>
        </div>
        )}
      </div>
    </section>
  );
}
