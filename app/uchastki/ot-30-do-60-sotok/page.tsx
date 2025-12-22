"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Ot30Do60SotokUchastkiSearchForm } from '@/components/Ot30Do60SotokUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  ot30Do60SotokUchastkiHeroData,
  ot30Do60SotokUchastkiBenefitsData,
  ot30Do60SotokUchastkiComparisonData,
  ot30Do60SotokUchastkiInfoMain,
  ot30Do60SotokUchastkiProcessStepsData,
  ot30Do60SotokUchastkiLeadForm,
  ot30Do60SotokUchastkiTestimonialsData,
  ot30Do60SotokUchastkiFaqData,
  ot30Do60SotokUchastkiGalleryData,
} from '@/lib/ot-30-do-60-sotok-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function Ot30Do60SotokUchastkiPage() {
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
        <Hero {...ot30Do60SotokUchastkiHeroData} onCtaClick={openModal} />

        <Ot30Do60SotokUchastkiSearchForm
          title="Выберите участок, который полностью подходит вам"
          description="Выберите параметры — получите подборку участков, соответствующих бюджету и целям покупки."
          buttonText="Смотреть результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит выбирать участки в Сочи с нами?"
          benefits={ot30Do60SotokUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Оцените, почему с нами вы не теряете деньги"
          description="С нами участок готов к строительству и оформлен под ключ. Без нас вы тратите время на согласования и рискуете упустить лучшие варианты."
          data={ot30Do60SotokUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle={ot30Do60SotokUchastkiInfoMain.mainTitle}
          mainDescription={ot30Do60SotokUchastkiInfoMain.mainDescription}
          cards={ot30Do60SotokUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Как проходит проверка участка?"
          steps={ot30Do60SotokUchastkiProcessStepsData}
          ctaText="Хватит тратить время — оставьте заявку на подборку проверенных объектов для строительства!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={ot30Do60SotokUchastkiLeadForm.title}
          description={ot30Do60SotokUchastkiLeadForm.description}
          buttonText={ot30Do60SotokUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ot30Do60SotokUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={ot30Do60SotokUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте номер, и мы подберём участок, где все документы уже готовы к сделке!"
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

