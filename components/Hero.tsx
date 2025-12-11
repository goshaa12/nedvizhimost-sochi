"use client";

import { Shield, Clock, FileCheck, Percent, type LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Clock,
  FileCheck,
  Percent,
};

export interface HeroFeature {
  icon: string;
  title: string;
  description: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  features: HeroFeature[];
  ctaText: string;
  ctaButtonText: string;
  imageUrl: string;
  imageAlt: string;
  onCtaClick?: () => void;
}

export function Hero({
  title,
  subtitle,
  features,
  ctaText,
  ctaButtonText,
  imageUrl,
  imageAlt,
  onCtaClick,
}: HeroProps) {
  const featuresGridCols =
    features.length <= 3 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2';

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                {subtitle}
              </p>
            </div>
            
            <div className={`grid ${featuresGridCols} gap-3 md:gap-4`}>
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Shield;
                return (
                  <div key={index} className="flex items-start gap-3 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-emerald-900" />
                </div>
                <div>
                      <div className="mb-1 text-sm md:text-base font-medium text-gray-900">{feature.title}</div>
                      <p className="text-xs md:text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
                );
              })}
            </div>
            
            <div className="space-y-4 bg-white p-4 md:p-6 rounded-2xl shadow-md border border-emerald-100">
              <p className="text-sm md:text-base text-gray-700">
                {ctaText}
              </p>
              <button 
                onClick={onCtaClick}
                className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
              >
                {ctaButtonText}
              </button>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
