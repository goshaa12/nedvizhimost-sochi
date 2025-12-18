"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KrasnayaPolyanaNovostroykiSearchForm } from '@/components/KrasnayaPolyanaNovostroykiSearchForm';
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
  krasnayaPolyanaNovostroykiHeroData,
  krasnayaPolyanaNovostroykiSearchFormData,
  krasnayaPolyanaNovostroykiBenefitsData,
  krasnayaPolyanaNovostroykiComparisonData,
  krasnayaPolyanaNovostroykiInfoMain,
  krasnayaPolyanaNovostroykiProcessStepsData,
  krasnayaPolyanaNovostroykiPaymentMethodsData,
  krasnayaPolyanaNovostroykiLeadForm,
  krasnayaPolyanaNovostroykiAboutData,
  krasnayaPolyanaNovostroykiTestimonialsData,
  krasnayaPolyanaNovostroykiFaqData,
  krasnayaPolyanaNovostroykiGalleryData,
} from '@/lib/novostroyki-krasnaya-polyana-data';
import { contactInfoData } from '@/lib/page-data';

export default function KrasnayaPolyanaNovostroykiPage() {
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
        <Hero {...krasnayaPolyanaNovostroykiHeroData} onCtaClick={openModal} />

        <KrasnayaPolyanaNovostroykiSearchForm
          title={krasnayaPolyanaNovostroykiSearchFormData.title}
          description={krasnayaPolyanaNovostroykiSearchFormData.description}
          buttonText={krasnayaPolyanaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать новостройки в районе Красной Поляны с нами?"
          benefits={krasnayaPolyanaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Оцените преимущества и работайте с экспертами"
          description="Сравните разницу и выберите компанию, которая сэкономит ваше время и гарантирует безопасность сделки."
          data={krasnayaPolyanaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={krasnayaPolyanaNovostroykiInfoMain.mainTitle}
          mainDescription={krasnayaPolyanaNovostroykiInfoMain.mainDescription}
          cards={krasnayaPolyanaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Получите ключи от новостройки в Бытхе за 3 простых шага"
          steps={krasnayaPolyanaNovostroykiProcessStepsData}
          ctaText="Оставьте заявку и посмотрите новостройки в Красной Поляне прямо сейчас. Не упустите шанс купить квартиру с растущей ценой!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты и узнайте стоимость сразу!"
          methods={krasnayaPolyanaNovostroykiPaymentMethodsData}
          ctaText="Определите подходящий способ оплаты и мгновенно получите прозрачный расчёт стоимости жилья!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={krasnayaPolyanaNovostroykiLeadForm.title}
          description={krasnayaPolyanaNovostroykiLeadForm.description}
          buttonText={krasnayaPolyanaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Оцените реальные планировки и виды из окон, чтобы сразу понять, какая новостройка подходит именно вам."
          items={krasnayaPolyanaNovostroykiGalleryData}
        />

        <About
          title={krasnayaPolyanaNovostroykiAboutData.title}
          paragraphs={krasnayaPolyanaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={krasnayaPolyanaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={krasnayaPolyanaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Более 1 400 клиентов уже приобрели квартиры в Красной Поляне. Оставьте заявку и получите подборку новостроек под ваш запрос!"
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

