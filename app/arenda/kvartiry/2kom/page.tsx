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
  arendaKvartiry2komHeroData,
  arendaKvartiry2komBenefitsData,
  arendaKvartiry2komComparisonData,
  arendaKvartiry2komInfoCardsData,
  arendaKvartiry2komProcessStepsData,
  arendaKvartiry2komTestimonialsData,
  arendaKvartiry2komFaqData,
  arendaKvartiry2komGalleryData,
} from '@/lib/arenda-kvartiry-2kom-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiry2komPage() {
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
        <Hero {...arendaKvartiry2komHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title=""
          description="Сэкономьте часы на поиске. Уберите лишние варианты за минуту — фильтр сразу покажет то, что вам подходит по району и цене!"
          buttonText="Посмотреть подходящие квартиры"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать 2-комнатные квартиры с нами?"
          benefits={arendaKvartiry2komBenefitsData}
        />

        <ComparisonTable 
          title="Сравните подходы, чтобы быстрее выбрать квартиру!"
          description="На рынке одна и та же квартира может стоить вам либо пару часов, либо недели и лишние расходы — сравните подходы, чтобы не пожалеть после решения!"
          data={arendaKvartiry2komComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiry2komInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде 2-комнатной квартиры в Сочи!"
          steps={arendaKvartiry2komProcessStepsData}
          ctaText="Передайте подбор специалистам и зафиксируйте условия до заезда — без потери времени и лишних расходов. Оставьте заявку на консультацию уже сейчас!"
          ctaButtonText="Получить подбор квартир"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку и заезжайте"
          description="Подберите в аренду 2-комнатной квартиры в Сочи по бюджету и срокам уже в течение следующих 15 минут всего за одна заявку!"
          contactInfo={[]}
          submitButtonText="Получить подбор и зафиксировать цену"
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
          items={arendaKvartiry2komGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Подбираем квартиры для аренды с подтверждёнными условиями и фиксированной ценой. Клиенты заезжают без срывов и повторных поисков. Партнёры получают стабильные сделки и взаимовыгодное сотрудничество. Сотрудники работают и разносторонне развиваются в рамках единых ценностей и культурного кода компании.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiry2komTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде двухкомнатных квартир"
          items={arendaKvartiry2komFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="500+ людей уже разобрались с арендой с нашими специалистами. Присоединяйтесь — вам не придётся думать, с чего начать и что выбирать."
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

