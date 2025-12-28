"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaKvartirySearchForm } from '@/components/ArendaKvartirySearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  arendaKvartiryHostinskyHeroData,
  arendaKvartiryHostinskyBenefitsData,
  arendaKvartiryHostinskyComparisonData,
  arendaKvartiryHostinskyInfoCardsData,
  arendaKvartiryHostinskyProcessStepsData,
  arendaKvartiryHostinskyTestimonialsData,
  arendaKvartiryHostinskyFaqData,
  arendaKvartiryHostinskyGalleryData,
} from '@/lib/arenda-kvartiry-hostinsky-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryHostinskyPage() {
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
        <Hero {...arendaKvartiryHostinskyHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Подберите квартиру для аренды"
          description="Выберите класс, количество комнат и дополнительные параметры, чтобы сразу найти подходящие квартиры в Хостинском районе."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры с нами?"
          benefits={arendaKvartiryHostinskyBenefitsData}
        />

        <ComparisonTable 
          title="Выберите проверенные квартиры без стресса"
          description="С нами вы снимете квартиру в Хосте быстро, с проверенными документами и без лишних поездок. Не тратьте недели на поиски и не рискуйте ошибкой при выборе!"
          data={arendaKvartiryHostinskyComparisonData}
          usLabel="У нас"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryHostinskyInfoCardsData}
        />

        <ProcessSteps
          title="Арендуйте квартиру в Хосте всего за 3 шага"
          steps={arendaKvartiryHostinskyProcessStepsData}
          ctaText="Начните поиск квартиры с нами прямо сейчас — получите проверенную квартиру без лишних забот!"
          ctaButtonText="Забронировать сейчас"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку"
          description="Получите лучшие варианты квартир — быстро и без лишних звонков!"
          contactInfo={[]}
          submitButtonText="Получить подборку"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={arendaKvartiryHostinskyGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Выбирая квартиру в Хосте через нашу компанию, вы получите проверенные варианты из базы более 870 объектов, проверенных с 2016 года. Мы зафиксируем условия заранее и сопроводим сделку от подбора до безопасного заселения, чтобы ваш отдых и жизнь стали комфортными с первых минут.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryHostinskyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде квартир в Хостинском районе"
          items={arendaKvartiryHostinskyFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами"
          description="Хватит тратить время на поиски! Свяжитесь с нами прямо сейчас, и мы предложим лучшие варианты."
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

