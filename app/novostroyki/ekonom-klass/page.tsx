"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EkonomNovostroykiSearchForm } from '@/components/EkonomNovostroykiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  ekonomNovostroykiHeroData,
  ekonomNovostroykiSearchFormData,
  ekonomNovostroykiBenefitsData,
  ekonomNovostroykiComparisonData,
  ekonomNovostroykiInfoMain,
  ekonomNovostroykiProcessStepsData,
  ekonomNovostroykiPaymentMethodsData,
  ekonomNovostroykiLeadForm,
  ekonomNovostroykiAboutData,
  ekonomNovostroykiTestimonialsData,
  ekonomNovostroykiFaqData,
  ekonomNovostroykiGalleryData,
} from '@/lib/novostroyki-ekonom-data';
import { contactInfoData } from '@/lib/page-data';

export default function EkonomNovostroykiPage() {
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
        <Hero {...ekonomNovostroykiHeroData} onCtaClick={openModal} />

        <EkonomNovostroykiSearchForm
          title={ekonomNovostroykiSearchFormData.title}
          description={ekonomNovostroykiSearchFormData.description}
          buttonText={ekonomNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать новостройки эконом‑класса с нами?"
          benefits={ekonomNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Оцените, где покупка будет максимально выгодной"
          description="Не тратьте время на сомнения — сразу понятно, где покупка новостройки выгодна и безопасна."
          data={ekonomNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={ekonomNovostroykiInfoMain.mainTitle}
          mainDescription={ekonomNovostroykiInfoMain.mainDescription}
          cards={ekonomNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Получите ключи от новостройки в 3 этапа"
          steps={ekonomNovostroykiProcessStepsData}
          ctaText="Ознакомьтесь с актуальными новостройками и выберите, подходящую для жизни или сдачи в аренду!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите, как удобнее оформить новостройку"
          methods={ekonomNovostroykiPaymentMethodsData}
          ctaText="Выберите удобный способ оплаты новостройки в Сочи и узнайте стоимость заранее."
          ctaButtonText="Узнать условия"
          onCtaClick={openModal}
        />

        <LeadForm
          title={ekonomNovostroykiLeadForm.title}
          description={ekonomNovostroykiLeadForm.description}
          buttonText={ekonomNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Смотрите фото и видео каждой новостройки в Сочи, чтобы проверить планировки, оценить район и сделать уверенный выбор без сомнений."
          items={ekonomNovostroykiGalleryData}
        />

        <About
          title={ekonomNovostroykiAboutData.title}
          paragraphs={ekonomNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ekonomNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={ekonomNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите быстро выбрать новостройку? Получите подборку актуальных вариантов и сразу планируйте просмотр!"
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

