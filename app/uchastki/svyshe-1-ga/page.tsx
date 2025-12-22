"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Svyshe1GaUchastkiSearchForm } from '@/components/Svyshe1GaUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  svyshe1GaUchastkiHeroData,
  svyshe1GaUchastkiBenefitsData,
  svyshe1GaUchastkiComparisonData,
  svyshe1GaUchastkiInfoMain,
  svyshe1GaUchastkiProcessStepsData,
  svyshe1GaUchastkiLeadForm,
  svyshe1GaUchastkiTestimonialsData,
  svyshe1GaUchastkiFaqData,
} from '@/lib/svyshe-1-ga-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function Svyshe1GaUchastkiPage() {
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
        <Hero {...svyshe1GaUchastkiHeroData} onCtaClick={openModal} />

        <Svyshe1GaUchastkiSearchForm
          title="Подберите участок по вашим параметрам!"
          description="Укажите площадь, бюджет и назначение — получите конкретные варианты без лишних предложений."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему выбирают нас?"
          benefits={svyshe1GaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните условия покупки, чтобы не потерять деньги и время"
          description="У других поверхностная проверка приводит к переплатам и разочарованию, здесь вы сразу понимаете, что покупаете и зачем."
          data={svyshe1GaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle={svyshe1GaUchastkiInfoMain.mainTitle}
          mainDescription={svyshe1GaUchastkiInfoMain.mainDescription}
          cards={svyshe1GaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Как проходит проверка объекта?"
          steps={svyshe1GaUchastkiProcessStepsData}
          ctaText="Зафиксируйте подходящие участки до того, как они уйдут другим!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={svyshe1GaUchastkiLeadForm.title}
          description={svyshe1GaUchastkiLeadForm.description}
          buttonText={svyshe1GaUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Testimonials
          title="Отзывы"
          testimonials={svyshe1GaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе крупного участка в Сочи"
          items={svyshe1GaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Одна консультация сейчас избавит от месяцев сомнений и лишних трат. Напишите, чтобы выбрать участок и сохраните до 500 000 бюджета!"
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

