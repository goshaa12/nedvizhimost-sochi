"use client";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export function FAQ({ title = 'Часто задаваемые вопросы', items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {items.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-emerald-900/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-emerald-50 transition-colors"
                >
                  <span className="pr-4 text-sm md:text-base font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 text-emerald-900 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5 pt-2">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
