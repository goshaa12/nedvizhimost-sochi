"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SdannyeNovostroykiSearchForm } from '@/components/SdannyeNovostroykiSearchForm';
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
  sdannyeNovostroykiHeroData,
  sdannyeNovostroykiSearchFormData,
  sdannyeNovostroykiBenefitsData,
  sdannyeNovostroykiComparisonData,
  sdannyeNovostroykiInfoMain,
  sdannyeNovostroykiProcessStepsData,
  sdannyeNovostroykiPaymentMethodsData,
  sdannyeNovostroykiLeadForm,
  sdannyeNovostroykiAboutData,
  sdannyeNovostroykiTestimonialsData,
  sdannyeNovostroykiFaqData,
  sdannyeNovostroykiGalleryData,
} from '@/lib/novostroyki-sdannye-data';
import { contactInfoData } from '@/lib/page-data';

export default function SdannyeNovostroykiPage() {
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
        <Hero {...sdannyeNovostroykiHeroData} onCtaClick={openModal} />

        <SdannyeNovostroykiSearchForm
          title={sdannyeNovostroykiSearchFormData.title}
          description={sdannyeNovostroykiSearchFormData.description}
          buttonText={sdannyeNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 870+ клиентов уже купили квартиры в сданных новостройках с нами?"
          benefits={sdannyeNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните условия, чтобы не потерять деньги и время"
          description="Большинство теряют недели на просмотры и переплачивают за непроверенные квартиры в сданных новостройках от недобросовестных застройщиков, а через 3 месяца теряют сотни тысяч из‑за появившейся плесени в квартире! Сохраните деньги и не рискуйте с нами!"
          data={sdannyeNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={sdannyeNovostroykiInfoMain.mainTitle}
          mainDescription={sdannyeNovostroykiInfoMain.mainDescription}
          cards={sdannyeNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага до вашей квартиры в сданной новостройке!"
          steps={sdannyeNovostroykiProcessStepsData}
          ctaText="Позвоните нам — не теряйте понравившуюся квартиру! Получите каталог и оформите заявку на консультацию!"
          ctaButtonText="Смотреть подборку квартир в сданных новостройках"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты квартиры в сданной новостройке"
          methods={sdannyeNovostroykiPaymentMethodsData}
          ctaText="Хотите понять, какой способ оплаты даст вам максимальную выгоду? Получите точный расчёт по каждому варианту, чтобы выбрать самый экономичный и быстрый путь к покупке."
          ctaButtonText="Получить расчёт выгодной оплаты новостройки"
          onCtaClick={openModal}
        />

        <LeadForm
          title={sdannyeNovostroykiLeadForm.title}
          description={sdannyeNovostroykiLeadForm.description}
          buttonText={sdannyeNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите фото и видео сданных новостроек — сразу увидите реальное состояние, виды и окружение, чтобы не ошибиться с выбором."
          items={sdannyeNovostroykiGalleryData}
        />

        <About
          title={sdannyeNovostroykiAboutData.title}
          paragraphs={sdannyeNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={sdannyeNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке квартиры в сданной новостройке"
          items={sdannyeNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Лучшие готовые квартиры уходят первыми. Свяжитесь с нами и получите пул вариантов, экономию недель на поиске подходящей квартиры и заберите свою квартиру в новостройке раньше всех!"
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

