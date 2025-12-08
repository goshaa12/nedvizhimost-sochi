"use client";

import { Database, Award, Headphones, Plane, Video, TrendingDown, ShieldCheck, Car, MonitorPlay, PiggyBank, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Database,
  Award,
  Headphones,
  Plane,
  Video,
  TrendingDown,
  ShieldCheck,
  Car,
  MonitorPlay,
  PiggyBank,
};

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitsGridProps {
  title: string;
  benefits: Benefit[];
  ctaTitle?: string;
  ctaDescription?: string;
  onCtaClick?: () => void;
}

export function BenefitsGrid({
  title,
  benefits,
  ctaTitle,
  ctaDescription,
  onCtaClick,
}: BenefitsGridProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Database;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-emerald-900/30 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-900" />
                </div>
                <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        {ctaTitle && ctaDescription && (
          <div className="mt-8 md:mt-12 bg-emerald-900 text-white p-6 md:p-8 rounded-2xl text-center">
            <h3 className="mb-3 md:mb-4 text-white text-xl md:text-2xl font-bold">{ctaTitle}</h3>
            <p className="text-white/90 mb-4 md:mb-6 max-w-3xl mx-auto text-sm md:text-base">
              {ctaDescription}
            </p>
            {onCtaClick && (
              <button
                onClick={onCtaClick}
                className="bg-white text-emerald-900 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg font-medium text-sm md:text-base"
              >
                Связаться с нами
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
