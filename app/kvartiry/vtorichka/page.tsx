"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KvartiryVtorichkaSearchForm } from '@/components/KvartiryVtorichkaSearchForm';
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
  kvartiryVtorichkaHeroData,
  kvartiryVtorichkaBenefitsData,
  kvartiryVtorichkaComparisonData,
  kvartiryVtorichkaInfoSectionData,
  kvartiryVtorichkaProcessStepsData,
  kvartiryVtorichkaPaymentMethodsData,
  kvartiryVtorichkaAboutData,
  kvartiryVtorichkaTestimonialsData,
  kvartiryVtorichkaFaqData,
  kvartiryVtorichkaGalleryData,
} from '@/lib/kvartiry-vtorichka-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryVtorichkaPage() {
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
        <Hero {...kvartiryVtorichkaHeroData} onCtaClick={openModal} />

        <KvartiryVtorichkaSearchForm
          title="Отберите подходящие варианты за минуту"
          description="Зафиксируйте параметры и смотрите только те квартиры, по которым заранее проверены документы и история собственников!"
          buttonText="Показать квартиры"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать вторичное жильё с нами?"
          benefits={kvartiryVtorichkaBenefitsData}
        />

        <ComparisonTable
          title="Сравните и не рискуйте потерять деньги и время"
          description="Посмотрите проверенные квартиры на вторичном рынке, готовые к сделке, и узнайте, какие объекты лучше исключать, чтобы не столкнуться с лишними расходами."
          data={kvartiryVtorichkaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Посмотрите каталог вторичных квартир
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Выбирайте квартиры в центре Сочи с подробными данными — этаж, площадь, стоимость. Узнайте все детали до просмотра.
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
          mainTitle={kvartiryVtorichkaInfoSectionData.mainTitle}
          mainDescription={kvartiryVtorichkaInfoSectionData.mainDescription}
          cards={kvartiryVtorichkaInfoSectionData.cards}
        />

        <ProcessSteps
          title="Приобретите вторичку в 3 шага"
          steps={kvartiryVtorichkaProcessStepsData}
          ctaText="Забудьте о долгих самостоятельных поисках — получите проверенные квартиры вторички в Сочи с точной ценой."
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Сэкономьте на сделке с выгодным способом оплаты"
          methods={kvartiryVtorichkaPaymentMethodsData}
          ctaText="Выберите удобный способ оплаты и получите точный расчёт по выбранной квартире вторичного рынка в Сочи."
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Выберите проверенную вторичку в Сочи!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Скачайте каталог с актуальными предложениями: каждая квартира проверена, указаны реальные цены и свободные варианты. Сразу планируйте просмотры без лишних звонков.
                </p>
              </div>
              
              <button
                onClick={openModal}
                className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
              >
                Получить каталог
              </button>
            </div>
          </div>
        </section>

        <Gallery
          title="Фото и видеогалерея"
          description="Смотрите реальные фото и видео квартир от собственника — оценивайте состояние, планировку и расположение без лишних просмотров и потери времени."
          items={kvartiryVtorichkaGalleryData}
        />

        <About
          title={kvartiryVtorichkaAboutData.title}
          paragraphs={kvartiryVtorichkaAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kvartiryVtorichkaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах"
          items={kvartiryVtorichkaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите актуальные квартиры вторички в Сочи через контакт с нами. Экономьте время и выбирайте только проверенные объекты."
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

