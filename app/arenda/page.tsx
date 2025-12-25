"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaSearchForm } from '@/components/ArendaSearchForm';
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
  arendaHeroData,
  arendaBenefitsData,
  arendaComparisonData,
  arendaInfoCardsData,
  arendaProcessStepsData,
  arendaTestimonialsData,
  arendaFaqData,
  arendaGalleryData,
} from '@/lib/arenda-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaPage() {
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
        <Hero {...arendaHeroData} onCtaClick={openModal} />

        <ArendaSearchForm
          title="Подберите аренду по вашим критериям"
          description="Выберите параметры — получите актуальные предложения по аренде без лишнего поиска!"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать с нами?"
          benefits={arendaBenefitsData}
        />

        <ComparisonTable 
          title="Сравните и убедитесь в выгоде!"
          description="Арендуйте жильё и коммерцию быстро: бумаги проверены, оформление онлайн, без лишних проверок и переплат посредникам."
          data={arendaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaInfoCardsData}
        />

        <ProcessSteps
          title="Аренда в Сочи за 3 шага"
          steps={arendaProcessStepsData}
          ctaText="Оставьте заявку и получите список готовых к аренде объектов в Сочи!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Ищите недвижимость в аренду для отдыха или жизни?"
          description="Подготовим готовые предложения для посуточной или помесячной аренды. Напишите и получите подборку, готовую к заселению прямо сейчас!"
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
          items={arendaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём компанию, где клиенты находят объекты для аренды на удобный срок без лишних забот, партнёры получают стабильный доход и долгосрочные связи, а сотрудники развиваются, зарабатывают достойно и становятся лучшей версией себя в команде единомышленников.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде"
          items={arendaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="С нами уже 1200 арендаторов нашли подходящие варианты в Сочи. Напишите и ознакомьтесь с предложениями, которые соответствуют вашим критериям и бюджету!"
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

