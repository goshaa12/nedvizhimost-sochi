"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PenthouseSearchForm } from '@/components/PenthouseSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  penthouseHeroData,
  penthouseSearchFormData,
  penthouseBenefitsData,
  penthouseComparisonData,
  penthouseInfoMain,
  penthouseSpecialOffersData,
  penthouseProcessStepsData,
  penthouseLeadForm,
  penthouseBlogData,
  penthouseTestimonialsData,
  penthouseFaqData,
} from '@/lib/kvartiry-penthouse-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryPenthousePage() {
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
        <Hero {...penthouseHeroData} onCtaClick={openModal} />

        <PenthouseSearchForm
          title={penthouseSearchFormData.title}
          description={penthouseSearchFormData.description}
          classes={penthouseSearchFormData.classes}
          locations={penthouseSearchFormData.locations}
          buttonText={penthouseSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Главные преимущества при покупке пентхауса с нами"
          benefits={penthouseBenefitsData}
        />

        <ComparisonTable
          title="Чем мы отличаемся от обычных агентств?"
          description="Посмотрите, как экспертная проверка помогает избежать переплат и выбрать пентхаус, который стоит своих денег."
          data={penthouseComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите пентхаусы в каталоге"
          description="Изучайте пентхаусы с полностью проверенными параметрами: от этажа до расстояния до моря. Каталог показывает только актуальные и надёжные предложения."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={penthouseInfoMain.mainTitle}
          mainDescription={penthouseInfoMain.mainDescription}
          cards={penthouseInfoMain.cards}
        />

        <ProcessSteps
          title="Этапы работы"
          steps={penthouseProcessStepsData}
          ctaText="Узнайте, какие пентхаусы подходят под ваш бюджет и цели."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={penthouseLeadForm.title}
          description={penthouseLeadForm.description}
          buttonText={penthouseLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <InfoSection
          mainTitle={penthouseSpecialOffersData.title}
          cards={penthouseSpecialOffersData.cards}
        />

        <Blog
          title={penthouseBlogData.title}
          description={penthouseBlogData.description}
          articles={penthouseBlogData.articles}
        />

        <Testimonials
          title="Отзывы"
          testimonials={penthouseTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе пентхауса в Сочи"
          items={penthouseFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите персональную подборку пентхаусов в Сочи — с точными параметрами и без риска ошибиться. Уже 4300 клиентов нашли идеальные варианты быстрее. Станьте следующим!"
          contactInfo={contactInfoData}
          whatsappButtonText="Написать в WhatsApp"
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

