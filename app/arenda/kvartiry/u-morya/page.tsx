"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaKvartiryUMoreaSearchForm } from '@/components/ArendaKvartiryUMoreaSearchForm';
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
  arendaKvartiryUMoreaHeroData,
  arendaKvartiryUMoreaBenefitsData,
  arendaKvartiryUMoreaComparisonData,
  arendaKvartiryUMoreaInfoCardsData,
  arendaKvartiryUMoreaProcessStepsData,
  arendaKvartiryUMoreaTestimonialsData,
  arendaKvartiryUMoreaFaqData,
  arendaKvartiryUMoreaGalleryData,
} from '@/lib/arenda-kvartiry-u-morea-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryUMoreaPage() {
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
        <Hero {...arendaKvartiryUMoreaHeroData} onCtaClick={openModal} />

        <ArendaKvartiryUMoreaSearchForm
          title="Найдите квартиру в 3 раза быстрее без лишних поисков!"
          description="Сведите выбор к подходящим квартирам — сэкономьте до 6 часов самостоятельного поиска!"
          buttonText="Показать найденные квартиры у моря в Сочи"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры у моря с нами?"
          benefits={arendaKvartiryUMoreaBenefitsData}
        />

        <ComparisonTable 
          title="Сравните условия аренды до выбора!"
          description="Сравните, как при попытке квартиры рядом с морем снять разница в проверках и поддержке может стоить дней отдыха и десятков тысяч рублей — и сделайте правильный выбор!"
          data={arendaKvartiryUMoreaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryUMoreaInfoCardsData}
        />

        <ProcessSteps
          title="Арендуйте квартиру у моря в 3 шага!"
          steps={arendaKvartiryUMoreaProcessStepsData}
          ctaText="Хорошие квартиры у моря уходят за 1–3 дня — позже остаются либо дороже, либо без вида. Напишите или позвоните сейчас, чтобы в течение 15 минут получить забронировать варианты на ваши даты!"
          ctaButtonText="Оставить заявку и найти квартиру уже сегодня"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку на бесплатную консультацию!"
          description="Получите в течение следующих 15 минут варианты квартир с видом на море на ваши даты и узнайте, за что не стоит переплачивать!"
          contactInfo={[]}
          submitButtonText="Получить квартиры с видом"
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
          items={arendaKvartiryUMoreaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы развиваем компанию, которая делает аренду жилья выгодной. Клиенты находят подходящее жильё, партнёры растут финансово и строят взаимовыгодные отношения, а сотрудники работают в сильной команде с общими ценностями.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryUMoreaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартир у моря"
          items={arendaKvartiryUMoreaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Свяжитесь сейчас — свободные варианты у моря ограничены. При обращении сегодня зафиксируйте цену и даты. Не откладывайте — лучшие предложения уходят первыми!"
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

