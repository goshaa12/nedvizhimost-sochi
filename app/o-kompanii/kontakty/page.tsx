"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import {
  kontaktyHeroData,
  kontaktyOfficesData,
  kontaktyRequisitesData,
} from '@/lib/kontakty-data';
import { contactInfoData } from '@/lib/page-data';

export default function KontaktyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...kontaktyHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Контакты офисов
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {kontaktyOfficesData.map((office, index) => (
                <div
                  key={index}
                  className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-all"
                >
                  <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-gray-900">
                    {office.title}
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-emerald-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs md:text-sm text-gray-600 mb-1">Адрес:</div>
                        <div className="text-sm md:text-base text-gray-900">{office.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-emerald-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs md:text-sm text-gray-600 mb-1">Телефон:</div>
                        <div className="text-sm md:text-base text-gray-900">{office.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-emerald-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs md:text-sm text-gray-600 mb-1">E-mail:</div>
                        <div className="text-sm md:text-base text-gray-900">{office.email}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-emerald-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs md:text-sm text-gray-600 mb-1">Режим работы:</div>
                        <div className="text-sm md:text-base text-gray-900">{office.workingHours}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Запишитесь на экспресс-тур сегодня!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Покажем 5 лучших объектов недвижимости в вашем бюджете за 3 часа. Организуем трансфер из аэропорта или отеля за наш счет.
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  Забронировать просмотр
                </button>
                
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Написать в WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Реквизиты агентства
                </h2>
              </div>
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg min-w-[600px]">
                  <div className="grid grid-cols-2 bg-emerald-50">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Параметр</h3>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Значение</h3>
                    </div>
                  </div>
                  {kontaktyRequisitesData.map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors"
                    >
                      <div className="p-4 md:p-6 border-r border-gray-200">
                        <div className="text-xs md:text-sm text-gray-700 font-medium">
                          {row.parameter}
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <div className="text-xs md:text-sm text-gray-700">{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите подборку лучших объектов недвижимости в Сочи без риска ошибиться персонально под ваш бюджет. Уже 4300 клиентов нашли жильё быстрее — станьте следующим!"
          contactInfo={contactInfoData}
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Contact form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />
      </main>
      <Footer
        description="Честная, понятная и выгодная покупка недвижимости в Сочи с 2016 года."
        copyright="© 2025 Недвижимость Сочи. Все права защищены."
        navLinks={[
          { label: 'Главная', href: '/' },
          { label: 'Квартиры', href: '/kvartiry' },
          { label: 'Дома', href: '/doma' },
          { label: 'Новостройки', href: '/novostroyki' },
          { label: 'Участки', href: '/uchastki' },
          { label: 'Коммерция', href: '/kommerciya' },
          { label: 'Аренда', href: '/arenda' },
          { label: 'О компании', href: '/o-kompanii' },
        ]}
        servicesLinks={[
          { label: 'Квартиры', href: '/kvartiry' },
          { label: 'Дома', href: '/doma' },
          { label: 'Новостройки', href: '/novostroyki' },
          { label: 'Участки', href: '/uchastki' },
          { label: 'Коммерция', href: '/kommerciya' },
        ]}
      />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
    </div>
  );
}

