"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { Check } from 'lucide-react';
import { KvartiryIpotekaSearchForm } from '@/components/KvartiryIpotekaSearchForm';
import {
  kvartiryIpotekaHeroData,
  kvartiryIpotekaBenefitsData,
  kvartiryIpotekaComparisonData,
  kvartiryIpotekaInfoSectionData,
  kvartiryIpotekaProcessStepsData,
  kvartiryIpotekaBonusesData,
  kvartiryIpotekaTestimonialsData,
  kvartiryIpotekaFaqData,
  kvartiryIpotekaGalleryData,
} from '@/lib/kvartiry-ipoteka-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryIpotekaPage() {
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
        <Hero {...kvartiryIpotekaHeroData} onCtaClick={openModal} />

        <KvartiryIpotekaSearchForm
          title="Найдите квартиру по вашим параметрам"
          description="Укажите ключевые характеристики, и система покажет квартиры, которые подходят под ваш бюджет и условия ипотеки."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему с нами покупка квартиры в ипотеку проходит проще?"
          benefits={kvartiryIpotekaBenefitsData}
        />

        <ComparisonTable
          title="Узнайте, что повлияет на одобрение и покупку"
          description="Посмотрите, что влияет на скорость одобрения и безопасность сделки. Сравнение покажет, почему результаты зависят от подхода, а не только от банка."
          data={kvartiryIpotekaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Подходящие варианты для оформления
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Начните поиск с готовой выборки проверенных квартир. Здесь собраны объекты, которые можно купить без рисков и задержек по одобрению.
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
          mainTitle={kvartiryIpotekaInfoSectionData.mainTitle}
          mainDescription={kvartiryIpotekaInfoSectionData.mainDescription}
          cards={kvartiryIpotekaInfoSectionData.cards}
        />

        <ProcessSteps
          title="Этапы работы"
          steps={kvartiryIpotekaProcessStepsData}
          ctaText="Получите список квартир, которые проходят по вашей ипотеке."
          ctaButtonText="Посмотреть подборку квартир"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Ищете квартиру в ипотеку?
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Укажите номер — подберём квартиры с шансом одобрения <strong>до 90%</strong> и покажем лучшие предложения с экономией до <strong>300 000 ₽</strong> на ставке и условиях.
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

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Воспользуйтесь бонусами от застройщиков
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {kvartiryIpotekaBonusesData.map((bonus, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 hover:border-emerald-900/30 hover:shadow-lg transition-all flex items-start gap-4"
                  >
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-900" />
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{bonus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Gallery
          title="Фото и видеогалерея"
          items={kvartiryIpotekaGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kvartiryIpotekaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке квартиры в ипотеку"
          items={kvartiryIpotekaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите персональную подборку квартир в ипотеку в Сочи — только объекты, которые проходят по вашим параметрам и реально одобряются банками. Уже 4300 покупателей нашли подходящие варианты быстрее и без отказов."
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

