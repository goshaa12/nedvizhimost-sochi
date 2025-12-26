"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaKvartirySearchForm } from '@/components/ArendaKvartirySearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  arendaKvartiryHeroData,
  arendaKvartiryBenefitsData,
  arendaKvartiryComparisonData,
  arendaKvartiryInfoCardsData,
  arendaKvartiryProcessStepsData,
  arendaKvartiryTestimonialsData,
  arendaKvartiryFaqData,
  arendaKvartiryGalleryData,
} from '@/lib/arenda-kvartiry-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryPage() {
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
        <Hero {...arendaKvartiryHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовывать квартиры с нами?"
          benefits={arendaKvartiryBenefitsData}
        />

        <ComparisonTable 
          title="Чем мы отличаемся от других?"
          description="Аренда квартиры — это не только цена. Сравните процесс подбора, проверки и оформления, чтобы понять, где действительно выгодно."
          data={arendaKvartiryComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Смотрите актуальные квартиры в аренду"
          description="Просмотрите доступные квартиры в каталоге и сразу оцените реальные цены, чтобы выбрать наиболее выгодные варианты без лишних просмотров."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде квартиры в Сочи!"
          steps={arendaKvartiryProcessStepsData}
          ctaText="Снимайте жильё в Сочи без лишних поисков. Оставьте заявку и получите подборку подходящих вариантов за пару минут!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Снимайте квартиры удалённо!"
          description="Заезжайте в квартиру без встреч с хозяином. Получите подборку свободных вариантов на ваши даты и въезжайте прямо сейчас!"
          contactInfo={[]}
          submitButtonText="Получить каталог"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={arendaKvartiryGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы строим компанию в Сочи, которая помогает клиентам быстро находить жильё на нужные даты, экономить время и деньги, получать комфорт и удовольствие от каждой аренды.',
            'Партнёры получают стабильный доход и надёжное сотрудничество, выстраивая совместно современные стандарты ведения бизнеса.',
            'Сотрудники зарабатывают достойно, развиваются и становятся лучшей версией себя в команде единомышленников, разделяющих ценности и корпоративную культуру.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде квартир"
          items={arendaKvartiryFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Уже 2000 арендаторов нашли квартиры в Сочи через нас. Оставьте заявку и получите подборку вариантов под ваши даты и бюджет!"
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

