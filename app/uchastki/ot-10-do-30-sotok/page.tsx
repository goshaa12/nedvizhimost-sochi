"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Ot10Do30SotokUchastkiSearchForm } from '@/components/Ot10Do30SotokUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  ot10Do30SotokUchastkiHeroData,
  ot10Do30SotokUchastkiBenefitsData,
  ot10Do30SotokUchastkiComparisonData,
  ot10Do30SotokUchastkiInfoMain,
  ot10Do30SotokUchastkiProcessStepsData,
  ot10Do30SotokUchastkiLeadForm,
  ot10Do30SotokUchastkiTestimonialsData,
  ot10Do30SotokUchastkiFaqData,
  ot10Do30SotokUchastkiGalleryData,
} from '@/lib/ot-10-do-30-sotok-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function Ot10Do30SotokUchastkiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...ot10Do30SotokUchastkiHeroData} onCtaClick={openModal} />

        <Ot10Do30SotokUchastkiSearchForm
          title="Подберите участок с учётом всех ваших требований"
          description="Укажите критерии — оставим только участки с проверенным статусом и готовностью к сделке."
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать участки с нами выгодно?"
          benefits={ot10Do30SotokUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Оцените, как мы экономим ваше время и бюджет"
          description="Сравните нас с другими агентствами и убедитесь, где сделки проходят безопасно."
          data={ot10Do30SotokUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle={ot10Do30SotokUchastkiInfoMain.mainTitle}
          mainDescription={ot10Do30SotokUchastkiInfoMain.mainDescription}
          cards={ot10Do30SotokUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Как проходит проверка участка?"
          steps={ot10Do30SotokUchastkiProcessStepsData}
          ctaText="Не тратьте месяцы на самостоятельную проверку — закажите подборку проверенных участков прямо сейчас!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={ot10Do30SotokUchastkiLeadForm.title}
          description={ot10Do30SotokUchastkiLeadForm.description}
          buttonText={ot10Do30SotokUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={ot10Do30SotokUchastkiGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ot10Do30SotokUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={ot10Do30SotokUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Ищете подходящий участок для строительства или инвестиций? Оставьте номер — менеджер свяжется за несколько минут и предложит варианты, где документы и статус земли полностью проверены."
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

