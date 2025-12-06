"use client";

import { Users, TrendingUp, Wallet, Award, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  Wallet,
  Award,
};

export interface InvestmentStat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

export interface InvestmentStatsProps {
  title?: string;
  stats: InvestmentStat[];
  ctaTitle?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
  backgroundPattern?: string;
}

export function InvestmentStats({
  title = 'Почему тысячи инвесторов заходят в рынок Сочи?',
  stats,
  ctaTitle,
  ctaButtonText,
  onCtaClick,
  backgroundPattern,
}: InvestmentStatsProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white relative overflow-hidden">
      {backgroundPattern && (
        <div 
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: `url('data:image/svg+xml;base64,${backgroundPattern}')` }}
        ></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-white text-2xl sm:text-3xl font-bold">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl mb-2 text-white font-bold">{stat.value}</div>
                <div className="mb-2 md:mb-3 text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
        
        {ctaTitle && ctaButtonText && (
        <div className="text-center">
            <h3 className="mb-4 md:mb-6 text-white text-xl md:text-2xl font-semibold">{ctaTitle}</h3>
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
