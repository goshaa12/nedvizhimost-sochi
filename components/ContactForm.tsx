"use client";

import { Phone, MessageCircle, Mail, MapPin, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
};

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface ContactFormProps {
  title?: string;
  description?: string;
  contactInfo: ContactInfo[];
  formTitle?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  whatsappButtonText?: string;
  onSubmit?: (data: { name: string; phone: string; message?: string }) => void;
  onWhatsAppClick?: () => void;
}

export function ContactForm({
  title = 'Свяжитесь с нами!',
  description,
  contactInfo,
  formTitle = 'Оставьте заявку',
  nameLabel = 'Ваше имя',
  namePlaceholder = 'Введите имя',
  phoneLabel = 'Телефон',
  phonePlaceholder = '+7 (___) ___-__-__',
  messageLabel = 'Сообщение (опционально)',
  messagePlaceholder = 'Расскажите о своих пожеланиях...',
  submitButtonText = 'Получить лучшие предложения Сочи',
  whatsappButtonText = 'Написать в WhatsApp',
  onSubmit,
  onWhatsAppClick,
}: ContactFormProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                {description}
            </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 p-6 md:p-8 rounded-2xl text-white order-2 md:order-1">
              <h3 className="mb-4 md:mb-6 text-white text-lg md:text-xl font-semibold">Контактная информация</h3>
              
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = iconMap[info.icon] || MapPin;
                  return (
                    <div key={index} className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                        <div className="text-xs md:text-sm text-white/80 mb-1">{info.label}</div>
                        <div className="text-sm md:text-base text-white">{info.value}</div>
                  </div>
                </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 order-1 md:order-2">
              <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-gray-900">{formTitle}</h3>
              
              <form 
                className="space-y-3 md:space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  onSubmit?.({
                    name: formData.get('name') as string,
                    phone: formData.get('phone') as string,
                    message: formData.get('message') as string | undefined,
                  });
                }}
              >
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{nameLabel}</label>
                  <input
                    name="name"
                    type="text"
                    placeholder={namePlaceholder}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{phoneLabel}</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder={phonePlaceholder}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{messageLabel}</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={messagePlaceholder}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  {submitButtonText}
                </button>
                
                <button
                  type="button"
                  onClick={onWhatsAppClick}
                  className="w-full bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  {whatsappButtonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
