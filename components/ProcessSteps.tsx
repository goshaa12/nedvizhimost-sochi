"use client";

import { MessageSquare, ClipboardCheck, Key, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  ClipboardCheck,
  Key,
};

export interface ProcessStep {
  icon: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  title?: string;
  steps: ProcessStep[];
  ctaText?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

export function ProcessSteps({
  title = 'Приобретите недвижимость в Сочи всего в 3 шага',
  steps,
  ctaText,
  ctaButtonText,
  onCtaClick,
}: ProcessStepsProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || MessageSquare;
            return (
              <div key={index} className="relative">
                <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-all h-full">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="text-4xl md:text-6xl text-emerald-900/10 font-bold">{step.number}</div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-900/20 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
        
        {ctaText && ctaButtonText && (
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-900 to-emerald-800 text-white p-6 md:p-8 rounded-2xl text-center shadow-xl">
            <p className="mb-4 md:mb-6 text-sm md:text-base text-white/95">
              {ctaText}
          </p>
            <button 
              onClick={onCtaClick}
              className="bg-white text-emerald-900 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg font-medium text-sm md:text-base"
            >
              {ctaButtonText}
          </button>
        </div>
        )}
      </div>
    </section>
  );
}
