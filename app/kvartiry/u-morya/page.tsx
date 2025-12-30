"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KvartiryUMoryaSearchForm } from '@/components/KvartiryUMoryaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  kvartiryUMoryaHeroData,
  kvartiryUMoryaBenefitsData,
  kvartiryUMoryaComparisonData,
  kvartiryUMoryaInfoSectionData,
  kvartiryUMoryaProcessStepsData,
  kvartiryUMoryaPaymentMethodsData,
  kvartiryUMoryaTestimonialsData,
  kvartiryUMoryaFaqData,
  kvartiryUMoryaGalleryData,
} from '@/lib/kvartiry-u-morya-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryUMoryaPage() {
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
        <Hero {...kvartiryUMoryaHeroData} onCtaClick={openModal} />

        <KvartiryUMoryaSearchForm
          title="Отбирайте лучшие квартиры за 1 минуту"
          description="Отбирайте квартиры у моря в Сочи по вашим требованиям — каждая проверена и доступна для осмотра прямо сейчас."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать квартиру у моря с нами удобно и безопасно?"
          benefits={kvartiryUMoryaBenefitsData}
        />

        <ComparisonTable
          title="Сравните и выберите лучшее предложение"
          description="Выбирайте агентство, которое экономит ваше время: подробные обзоры, реальные фото и точная информация о каждом объекте."
          data={kvartiryUMoryaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Посмотрите каталог квартир у моря
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Ознакомьтесь с проверенными объектами: фото, планировки, этажи и стоимость. Сравните локации и удобство транспорта для быстрого выбора.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle={kvartiryUMoryaInfoSectionData.mainTitle}
          mainDescription={kvartiryUMoryaInfoSectionData.mainDescription}
          cards={kvartiryUMoryaInfoSectionData.cards}
        />

        <ProcessSteps
          title="Оформите квартиру у моря в 3 шага!"
          steps={kvartiryUMoryaProcessStepsData}
          ctaText="Не тратьте недели на поиск, просмотры и риски — мы контролируем процесс от подбора до получение ключей. Позвоните и оформите квартиру за 3 дня!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Хотите купить квартиру у моря?
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Оставьте номер — мы подберём лучшие квартиры у моря с фото и видео и отправим полную подборку всего за 5–10 минут.
                </p>
              </div>
              
              <button
                onClick={openModal}
                className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
              >
                Получить подборку
              </button>
            </div>
          </div>
        </section>

        <PaymentMethods
          title="Воспользуйтесь рассрочкой и спецпредложениями"
          methods={kvartiryUMoryaPaymentMethodsData}
        />

        <Gallery
          title="Фото и видеогалерея"
          items={kvartiryUMoryaGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kvartiryUMoryaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах у моря"
          items={kvartiryUMoryaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите подборку актуальных квартир через контакт с нами. Не тратьте часы на поиск — все объекты проверены и готовы к просмотру."
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

