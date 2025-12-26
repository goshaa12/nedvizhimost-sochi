"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaKottedzhiSearchForm } from '@/components/ArendaKottedzhiSearchForm';
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
  arendaKottedzhiHeroData,
  arendaKottedzhiBenefitsData,
  arendaKottedzhiComparisonData,
  arendaKottedzhiInfoCardsData,
  arendaKottedzhiProcessStepsData,
  arendaKottedzhiTestimonialsData,
  arendaKottedzhiFaqData,
  arendaKottedzhiGalleryData,
} from '@/lib/arenda-kottedzhi-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKottedzhiPage() {
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
        <Hero {...arendaKottedzhiHeroData} onCtaClick={openModal} />

        <ArendaKottedzhiSearchForm
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 1000+ гостей ежегодно арендуют коттеджи через нас?"
          benefits={arendaKottedzhiBenefitsData}
        />

        <ComparisonTable 
          title="Сравните условия аренды, чтобы не переплатить"
          description="При аренде коттеджа в Сочи низкая цена в объявлении часто оборачивается дополнительными расходами и стрессом."
          data={arendaKottedzhiComparisonData}
          usLabel="Мы"
          othersLabel="Частные объявления"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKottedzhiInfoCardsData}
        />

        <ProcessSteps
          title="Осталось 3 шага до заселения!"
          steps={arendaKottedzhiProcessStepsData}
          ctaText="Не тратьте дни на поиски — получите проверенные варианты с финальной ценой уже сегодня."
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Хотите подобрать коттедж?"
          description="Оставьте телефон — за 10 минут вы узнаете, какие дома свободны на ваши даты, сколько это стоит на самом деле и как забронировать жильё без риска."
          contactInfo={[]}
          submitButtonText="Получить подборку"
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
          items={arendaKottedzhiGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём компанию, где клиенты находят объекты для аренды на удобный срок без лишних забот, партнёры получают стабильный доход и долгосрочные связи, а сотрудники развиваются, зарабатывают достойно и становятся лучшей версией себя в команде единомышленников.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKottedzhiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде коттеджей"
          items={arendaKottedzhiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не знаете, с чего начать выбор коттеджа? Получите консультацию и подборку под ваши даты — отдохните с комфортом и без переплат!"
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

