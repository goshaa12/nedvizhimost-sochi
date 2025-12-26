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
  arendaKvartiryKrasnayaPolyanaHeroData,
  arendaKvartiryKrasnayaPolyanaBenefitsData,
  arendaKvartiryKrasnayaPolyanaComparisonData,
  arendaKvartiryKrasnayaPolyanaInfoCardsData,
  arendaKvartiryKrasnayaPolyanaProcessStepsData,
  arendaKvartiryKrasnayaPolyanaTestimonialsData,
  arendaKvartiryKrasnayaPolyanaFaqData,
  arendaKvartiryKrasnayaPolyanaGalleryData,
} from '@/lib/arenda-kvartiry-krasnaya-polyana-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryKrasnayaPolyanaPage() {
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
        <Hero {...arendaKvartiryKrasnayaPolyanaHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Снимите квартиру в Красной Поляне за минуту!"
          description="Отсекайте неподходящие варианты и рассматривайте сразу квартиры в Красной Поляне с зафиксированной ценой и условиями!"
          buttonText="Получить список квартир в Красной Поляне"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры с нами?"
          benefits={arendaKvartiryKrasnayaPolyanaBenefitsData}
        />

        <ComparisonTable 
          title="Снять квартиру в Красной Поляне Сочи можно и за день, и за недели, однако разница в подходе напрямую влияет на деньги, сроки и результат!"
          description=""
          data={arendaKvartiryKrasnayaPolyanaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryKrasnayaPolyanaInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага, чтобы снять квартиру без лишнего круга поиска"
          steps={arendaKvartiryKrasnayaPolyanaProcessStepsData}
          ctaText="Всего одна заявку, и вы сразу исключите неподходящие варианты — без лишних просмотров и пересчёта бюджета. Получите консультацию уже сегодня!"
          ctaButtonText="Оставить заявку и рассмотреть варианты"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку — и снимите выгодно!"
          description="Получите 20–30 актуальных вариантов, чтобы снять квартиру Красная Поляна без фейков и лишних просмотров — всего лишь через 5 минут после заявки!"
          contactInfo={[]}
          submitButtonText="Не переплатить за аренду с правильным подбором"
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
          items={arendaKvartiryKrasnayaPolyanaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы строим компанию, которая делает аренду осознанным выбором. Клиенты находят жильё под свой срок и образ жизни, получая реальную выгоду от каждой аренды. Партнёры растут финансово и выстраивают устойчивые отношения. Сотрудники развиваются и зарабатывают в команде с общими ценностями и культурой.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryKrasnayaPolyanaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартир в Красной Поляне"
          items={arendaKvartiryKrasnayaPolyanaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="870+ клиентов уже сняли квартиру в Красной Поляне без лишних просмотров и переплат. Напишите, и вам не придётся разбираться в рынке и рисковать деньгами!"
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

