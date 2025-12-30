"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KvartiryTsentrSearchForm } from '@/components/KvartiryTsentrSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  kvartiryTsentrHeroData,
  kvartiryTsentrBenefitsData,
  kvartiryTsentrComparisonData,
  kvartiryTsentrInfoSectionData,
  kvartiryTsentrProcessStepsData,
  kvartiryTsentrPaymentMethodsData,
  kvartiryTsentrAboutData,
  kvartiryTsentrTestimonialsData,
  kvartiryTsentrFaqData,
  kvartiryTsentrGalleryData,
} from '@/lib/kvartiry-tsentr-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryTsentrPage() {
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
        <Hero {...kvartiryTsentrHeroData} onCtaClick={openModal} />

        <KvartiryTsentrSearchForm
          title="Найдите квартиру, которая вам подходит"
          description="Отберите квартиры в центре Сочи по своим параметрам — комнаты, тип, этаж, площадь и цена. Смотрите только актуальные варианты и выбирайте лучший сразу."
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры в центре Сочи с нами?"
          benefits={kvartiryTsentrBenefitsData}
        />

        <ComparisonTable
          title="Убедитесь, где покупка действительно выгодна"
          description="Проверьте, где реально безопасно и удобно покупать квартиру. С нашей помощью вы экономите время, деньги и избегаете ошибок при выборе."
          data={kvartiryTsentrComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Посмотрите каталог квартир
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Просматривайте актуальные варианты с фото и характеристиками. Оцените транспорт и расположение, чтобы выбрать лучшее жильё сразу.
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
          mainTitle={kvartiryTsentrInfoSectionData.mainTitle}
          mainDescription={kvartiryTsentrInfoSectionData.mainDescription}
          cards={kvartiryTsentrInfoSectionData.cards}
        />

        <ProcessSteps
          title="3 шага к вашей квартире в центре Сочи"
          steps={kvartiryTsentrProcessStepsData}
          ctaText="Не тратьте недели на самостоятельные просмотры — позвоните и получите квартиру с проверенной историей и прозрачной схемой оформления!"
          ctaButtonText="Запросить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={kvartiryTsentrPaymentMethodsData}
          ctaText="Выберите подходящий способ оплаты и получите персональный расчёт выгод с точными цифрами."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Начните поиск квартиры — оставьте заявку сейчас!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Получите каталог планировок, актуальные цены на однокомнатные, двух- и трёхкомнатные квартиры именно в центральных районах Сочи.
                </p>
              </div>
              
              <button
                onClick={openModal}
                className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
              >
                Посмотреть каталог
              </button>
            </div>
          </div>
        </section>

        <Gallery
          title="Фото и видеогалерея"
          description="Оцените планировку и состояние квартир заранее через реальные фото и видео объектов, чтобы выбрать подходящий вариант без лишних просмотров."
          items={kvartiryTsentrGalleryData}
        />

        <About
          title={kvartiryTsentrAboutData.title}
          paragraphs={kvartiryTsentrAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kvartiryTsentrTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах"
          items={kvartiryTsentrFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку на подборку квартир в центре Сочи и экономьте часы на самостоятельных поисках. Все объекты актуальны и готовы к просмотру!"
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

