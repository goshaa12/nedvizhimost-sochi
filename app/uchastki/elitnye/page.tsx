"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PlotSearchForm } from '@/components/PlotSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Certificates } from '@/components/Certificates';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  elitnyeUchastkiHeroData,
  elitnyeUchastkiSearchFormData,
  elitnyeUchastkiBenefitsData,
  elitnyeUchastkiComparisonData,
  elitnyeUchastkiInfoMain,
  elitnyeUchastkiProcessStepsData,
  elitnyeUchastkiPaymentMethodsData,
  elitnyeUchastkiLeadForm,
  elitnyeUchastkiAboutData,
  elitnyeUchastkiTestimonialsData,
  elitnyeUchastkiFaqData,
  elitnyeUchastkiGalleryData,
} from '@/lib/elitnye-uchastki-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function ElitnyeUchastkiPage() {
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
        <Hero {...elitnyeUchastkiHeroData} onCtaClick={openModal} />

        <PlotSearchForm
          title={elitnyeUchastkiSearchFormData.title}
          description={elitnyeUchastkiSearchFormData.description}
          districts={elitnyeUchastkiSearchFormData.districts}
          purposes={elitnyeUchastkiSearchFormData.purposes}
          classes={undefined}
          buttonText={elitnyeUchastkiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать элитные участки с нами?"
          benefits={elitnyeUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните предложения по элитным участкам и не переплачивайте"
          description="Вы рискуете потерять время и переплатить за слабый участок у других. У нас сразу видите земельные участки элитные с проверкой, выгодой и доступом до публикации участка на рынке!"
          data={elitnyeUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Расширьте подборку — откройте каталог!"
          description="Откройте больше элитных участков, чтобы увидеть локации с видом на море, точными границами по кадастру и ценами без надбавок — покупайте выгодно!"
          buttonText="Показать больше вариантов в каталоге"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={elitnyeUchastkiInfoMain.mainTitle}
          mainDescription={elitnyeUchastkiInfoMain.mainDescription}
          cards={elitnyeUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите элитный участок в Сочи в 3 шага!"
          steps={elitnyeUchastkiProcessStepsData}
          ctaText="Оставьте заявку и вложитесь в участок с потенциалом роста стоимости. Поторопитесь — выгода уходит тем, кто действует вовремя!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте выгодный способ оплаты элитного участка в Сочи"
          methods={elitnyeUchastkiPaymentMethodsData}
          ctaText="Хотите понять, какой вариант позволит купить участок элитный с максимальной выгодой? Получите индивидуальный расчёт по каждому способу!"
          ctaButtonText="Получить расчёт выгодной оплаты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={elitnyeUchastkiLeadForm.title}
          description={elitnyeUchastkiLeadForm.description}
          buttonText={elitnyeUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={elitnyeUchastkiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={elitnyeUchastkiAboutData.title}
          paragraphs={elitnyeUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={elitnyeUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке элитных участков"
          items={elitnyeUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите консультацию с подборкой, каталогом и расчётом, где выгода и документы проверены заранее, пока ликвидные районы Сочи не выросли в цене!"
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

