"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaDomaSearchForm } from '@/components/ArendaDomaSearchForm';
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
  arendaDomaHeroData,
  arendaDomaBenefitsData,
  arendaDomaComparisonData,
  arendaDomaInfoCardsData,
  arendaDomaProcessStepsData,
  arendaDomaTestimonialsData,
  arendaDomaFaqData,
  arendaDomaGalleryData,
} from '@/lib/arenda-doma-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaDomaPage() {
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
        <Hero {...arendaDomaHeroData} onCtaClick={openModal} />

        <ArendaDomaSearchForm
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 950+ клиентов сняли дом в Сочи через нас?"
          benefits={arendaDomaBenefitsData}
        />

        <ComparisonTable 
          title="Сравните аренду дома в Сочи через нас и «напрямую»"
          description="Посуточная или длительная аренда жилья — это не только цена. Это ваш комфорт, время и безопасность депозита."
          data={arendaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Самостоятельный поиск"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaDomaInfoCardsData}
        />

        <ProcessSteps
          title="Осталось 3 шага до заселения в ваш дом!"
          steps={arendaDomaProcessStepsData}
          ctaText="Не теряйте дни на переписку с десятком хозяев — получите готовую подборку с подтверждённой доступностью уже сегодня!"
          ctaButtonText="Получить подборку домов"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Хотите подобрать дом в Сочи?"
          description="Оставьте номер — за 5-10 минут узнаете, какие дома свободны на ваши даты, в каком районе лучше снять дом в аренду под ваш бюджет и какие варианты сразу исключить из-за скрытых недостатков."
          contactInfo={[]}
          submitButtonText="Получить подборку и сопровождение"
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
          items={arendaDomaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём компанию, где клиенты находят объекты для аренды на удобный срок без лишних забот, партнёры получают стабильный доход и долгосрочные связи, а сотрудники развиваются, зарабатывают достойно и становятся лучшей версией себя в команде единомышленников.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде дома в Сочи"
          items={arendaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Думаете, какой район выбрать или как проверить дом? Получите профессиональную консультацию и подборку проверенных вариантов уже сегодня. Арендуйте дом в Сочи без рисков и лишней траты времени!"
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

