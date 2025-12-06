"use client";

import { Phone } from 'lucide-react';

export interface LeadFormProps {
  title?: string;
  description?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  buttonText?: string;
  onSubmit?: (phone: string) => void;
  onButtonClick?: () => void;
}

export function LeadForm({
  title = 'Оставьте заявку на экспертный разбор рынка Сочи',
  description,
  phoneLabel = 'Телефон',
  phonePlaceholder = '+7 (___) ___-__-__',
  buttonText = 'Получить лучшие предложения Сочи',
  onSubmit,
  onButtonClick,
}: LeadFormProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-gray-600">
                {description}
            </p>
            )}
          </div>
          
          <form 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const phone = formData.get('phone') as string;
              onSubmit?.(phone);
              onButtonClick?.();
            }}
          >
            <div>
              <label className="block mb-2 text-xs md:text-sm text-gray-600">{phoneLabel}</label>
              <div className="relative">
                <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder={phonePlaceholder}
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
