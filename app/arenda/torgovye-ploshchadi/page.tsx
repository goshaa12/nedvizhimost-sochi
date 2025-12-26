"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaTorgovyePloshchadiSearchForm } from '@/components/ArendaTorgovyePloshchadiSearchForm';
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
  arendaTorgovyePloshchadiHeroData,
  arendaTorgovyePloshchadiBenefitsData,
  arendaTorgovyePloshchadiComparisonData,
  arendaTorgovyePloshchadiInfoCardsData,
  arendaTorgovyePloshchadiProcessStepsData,
  arendaTorgovyePloshchadiTestimonialsData,
  arendaTorgovyePloshchadiFaqData,
  arendaTorgovyePloshchadiGalleryData,
} from '@/lib/arenda-torgovye-ploshchadi-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaTorgovyePloshchadiPage() {
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
        <Hero {...arendaTorgovyePloshchadiHeroData} onCtaClick={openModal} />

        <ArendaTorgovyePloshchadiSearchForm
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 900+ клиентов выбрали нас для аренды площади?"
          benefits={arendaTorgovyePloshchadiBenefitsData}
        />

        <ComparisonTable 
          title="Сравните варианты аренды торговых площадей, чтобы не потерять выгодный вариант"
          description="При аренде торговой площади в Сочи важна не низкая ставка, а итоговая стоимость владения и потенциал точки."
          data={arendaTorgovyePloshchadiComparisonData}
          usLabel="Мы"
          othersLabel="Другие предложения"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaTorgovyePloshchadiInfoCardsData}
        />

        <ProcessSteps
          title="Осталось всего 3 шага до старта бизнеса на новой площади!"
          steps={arendaTorgovyePloshchadiProcessStepsData}
          ctaText="Не теряйте недели на поиски — оставьте заявку и получите персональную подборку проверенных площадей."
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Хотите подобрать торговую площадь?"
          description="Оставьте номер — за 5–10 минут вы узнаете, какие варианты подходят под ваш бюджет, где можно вести ваш бизнес без рисков, а какие площади стоит сразу исключить."
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
          items={arendaTorgovyePloshchadiGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём компанию, где клиенты находят объекты для аренды на удобный срок без лишних забот, партнёры получают стабильный доход и долгосрочные связи, а сотрудники развиваются, зарабатывают достойно и становятся лучшей версией себя в команде единомышленников.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaTorgovyePloshchadiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде торговых площадей"
          items={arendaTorgovyePloshchadiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не знаете, с чего начать поиск площади? Начните с профессиональной консультации — получите сопровождение сделки."
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

