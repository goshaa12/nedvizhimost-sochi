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
  arendaKvartiryStudiiHeroData,
  arendaKvartiryStudiiBenefitsData,
  arendaKvartiryStudiiComparisonData,
  arendaKvartiryStudiiInfoCardsData,
  arendaKvartiryStudiiProcessStepsData,
  arendaKvartiryStudiiTestimonialsData,
  arendaKvartiryStudiiFaqData,
  arendaKvartiryStudiiGalleryData,
} from '@/lib/arenda-kvartiry-studii-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryStudiiPage() {
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
        <Hero {...arendaKvartiryStudiiHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Отберите квартиры под свои параметры!"
          description="Сэкономьте до 6 часов поиска и 80% неподходящий вариантов — выбирайте студии, проверенные по цене, району и условиям аренды!"
          buttonText="Показать найденные студии"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры студии с нами?"
          benefits={arendaKvartiryStudiiBenefitsData}
        />

        <ComparisonTable 
          title="Как отличаются условия аренды студий?"
          description="Сравните условия аренды студии, чтобы не тратить недели на поиск и потерять десятки тысяч на ошибке!"
          data={arendaKvartiryStudiiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryStudiiInfoCardsData}
        />

        <ProcessSteps
          title="Арендуйте студию в Сочи в 3 шага!"
          steps={arendaKvartiryStudiiProcessStepsData}
          ctaText="Оставьте заявку — передайте поиск специалистам, и исключите пустые показы и поездки, сократите поиск до 1–2 дней и заезжайте в студию без повторного подбора!"
          ctaButtonText="Оставить заявку на подбор студии"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку на подбор!"
          description="Получите подбор под ваш бюджет и район за 1 день бесплатно. Поймите, какие варианты доступны для аренды уже сейчас!"
          contactInfo={[]}
          submitButtonText="Получить подбор и сэкономить время"
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
          items={arendaKvartiryStudiiGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы строим компанию, которая делает аренду жилья понятной и выгодной. Клиенты находят жильё под свой срок и задачи без лишних рисков. Партнёры растут финансово и выстраивают долгие отношения. Сотрудники развиваются, зарабатывают и работают в сильной команде с общими ценностями.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryStudiiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде студий"
          items={arendaKvartiryStudiiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите доступ к актуальным квартирам уже сегодня — хорошие варианты быстро уходят. Оставьте заявку сейчас: зафиксируйте цену и условия, пока подходящие предложения не разобрали!"
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

