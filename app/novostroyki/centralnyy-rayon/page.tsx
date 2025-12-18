"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TsentralnyRayonNovostroykiSearchForm } from '@/components/TsentralnyRayonNovostroykiSearchForm';
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
  tsentralnyRayonNovostroykiHeroData,
  tsentralnyRayonNovostroykiSearchFormData,
  tsentralnyRayonNovostroykiBenefitsData,
  tsentralnyRayonNovostroykiComparisonData,
  tsentralnyRayonNovostroykiInfoMain,
  tsentralnyRayonNovostroykiProcessStepsData,
  tsentralnyRayonNovostroykiPaymentMethodsData,
  tsentralnyRayonNovostroykiLeadForm,
  tsentralnyRayonNovostroykiAboutData,
  tsentralnyRayonNovostroykiTestimonialsData,
  tsentralnyRayonNovostroykiFaqData,
  tsentralnyRayonNovostroykiGalleryData,
} from '@/lib/novostroyki-tsentralny-rayon-data';
import { contactInfoData } from '@/lib/page-data';

export default function TsentralnyRayonNovostroykiPage() {
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
        <Hero {...tsentralnyRayonNovostroykiHeroData} onCtaClick={openModal} />

        <TsentralnyRayonNovostroykiSearchForm
          title={tsentralnyRayonNovostroykiSearchFormData.title}
          description={tsentralnyRayonNovostroykiSearchFormData.description}
          buttonText={tsentralnyRayonNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Преимущества работы с нами"
          benefits={tsentralnyRayonNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Чем мы отличаемся от других агентств?"
          description="Агентства предлагают похожие услуги, но результат для клиента бывает разным. Сравните ключевые параметры — они определяют комфорт выбора и отсутствие рисков."
          data={tsentralnyRayonNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={tsentralnyRayonNovostroykiInfoMain.mainTitle}
          mainDescription={tsentralnyRayonNovostroykiInfoMain.mainDescription}
          cards={tsentralnyRayonNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="3 шага к вашей квартире в новостройке Центрального района"
          steps={tsentralnyRayonNovostroykiProcessStepsData}
          ctaText="Не откладывайте выбор: цены и ставки не стоят на месте. Свяжитесь с нами сейчас — подскажем, с чего начать и что реально доступно."
          ctaButtonText="Получить персональный план покупки"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты квартиры в новостройке Центрального района"
          methods={tsentralnyRayonNovostroykiPaymentMethodsData}
          ctaText="Получите расчёт подходящих способов оплаты и узнайте, где условия будут наиболее выгодными именно для вас."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={tsentralnyRayonNovostroykiLeadForm.title}
          description={tsentralnyRayonNovostroykiLeadForm.description}
          buttonText={tsentralnyRayonNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={tsentralnyRayonNovostroykiGalleryData}
        />

        <About
          title={tsentralnyRayonNovostroykiAboutData.title}
          paragraphs={tsentralnyRayonNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={tsentralnyRayonNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках в Центральном районе"
          items={tsentralnyRayonNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Если нет времени разбираться в десятках новостроек, просто напишите. Вы получите готовые предложения под ваш бюджет без долгих поисков."
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

