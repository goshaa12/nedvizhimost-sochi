"use client";

import { Award, FileCheck, Shield, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Award,
  FileCheck,
  Shield,
};

export interface Certificate {
  icon: string;
  title: string;
  onClick?: () => void;
}

export interface CertificatesProps {
  title?: string;
  description?: string;
  certificates: Certificate[];
  footerText?: string;
}

export function Certificates({
  title = 'Сертификаты, дипломы и награды',
  description,
  certificates,
  footerText,
}: CertificatesProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-gray-600">
                {description}
            </p>
            )}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {certificates.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              return (
                <div
                  key={index}
                  onClick={cert.onClick}
                  className="bg-emerald-50 p-5 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-emerald-900" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{cert.title}</div>
                </div>
              );
            })}
          </div>
          {footerText && (
            <p className="text-center text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
              {footerText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
