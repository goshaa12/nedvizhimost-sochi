"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BytkhaNovostroykiSearchForm } from '@/components/BytkhaNovostroykiSearchForm';
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
  bytkhaNovostroykiHeroData,
  bytkhaNovostroykiSearchFormData,
  bytkhaNovostroykiBenefitsData,
  bytkhaNovostroykiComparisonData,
  bytkhaNovostroykiInfoMain,
  bytkhaNovostroykiProcessStepsData,
  bytkhaNovostroykiPaymentMethodsData,
  bytkhaNovostroykiLeadForm,
  bytkhaNovostroykiAboutData,
  bytkhaNovostroykiTestimonialsData,
  bytkhaNovostroykiFaqData,
  bytkhaNovostroykiGalleryData,
} from '@/lib/novostroyki-bytkha-data';
import { contactInfoData } from '@/lib/page-data';

export default function BytkhaNovostroykiPage() {
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
        <Hero {...bytkhaNovostroykiHeroData} onCtaClick={openModal} />

        <BytkhaNovostroykiSearchForm
          title={bytkhaNovostroykiSearchFormData.title}
          description={bytkhaNovostroykiSearchFormData.description}
          buttonText={bytkhaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Преимущества покупки новостроек в Бытхе с нашей поддержкой"
          benefits={bytkhaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Почему выбирают нас, а не других?"
          description="Заключайте сделки только с проверенными документами и избегайте ошибок, которые стоят денег другим покупателям."
          data={bytkhaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={bytkhaNovostroykiInfoMain.mainTitle}
          mainDescription={bytkhaNovostroykiInfoMain.mainDescription}
          cards={bytkhaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Получите ключи от новостройки за 3 простых шага"
          steps={bytkhaNovostroykiProcessStepsData}
          ctaText="Оставьте заявку и посмотрите квартиры в Бытхе первыми. Не упустите шанс выбрать лучшие новостройки до того, как их заберут другие!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите способ оплаты и получите расчёт за минуту!"
          methods={bytkhaNovostroykiPaymentMethodsData}
          ctaText="Подберите выгодный вариант оплаты и сразу узнайте финальную стоимость новостройки."
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={bytkhaNovostroykiLeadForm.title}
          description={bytkhaNovostroykiLeadForm.description}
          buttonText={bytkhaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите планировки и видеообзоры новостроек, чтобы выбрать квартиру с лучшим видом и инфраструктурой."
          items={bytkhaNovostroykiGalleryData}
        />

        <About
          title={bytkhaNovostroykiAboutData.title}
          paragraphs={bytkhaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={bytkhaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={bytkhaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку на подборку новостроек в Бытхе и сразу планируйте переезд!"
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

