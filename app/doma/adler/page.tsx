"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AdlerDomaSearchForm } from '@/components/AdlerDomaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  adlerDomaHeroData,
  adlerDomaSearchFormData,
  adlerDomaBenefitsData,
  adlerDomaComparisonData,
  adlerDomaInfoMain,
  adlerDomaProcessStepsData,
  adlerDomaPaymentMethodsData,
  adlerDomaLeadForm,
  adlerDomaAboutData,
  adlerDomaBlogData,
  adlerDomaTestimonialsData,
  adlerDomaFaqData,
} from '@/lib/doma-adler-data';
import { contactInfoData } from '@/lib/page-data';

export default function AdlerDomaPage() {
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
        <Hero {...adlerDomaHeroData} onCtaClick={openModal} />

        <AdlerDomaSearchForm
          title={adlerDomaSearchFormData.title}
          description={adlerDomaSearchFormData.description}
          houseTypes={adlerDomaSearchFormData.houseTypes}
          floors={adlerDomaSearchFormData.floors}
          buttonText={adlerDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему выбирают наше сопровождение для покупки дома в Адлере?"
          benefits={adlerDomaBenefitsData}
        />

        <ComparisonTable
          title="Сравните подходы, чтобы не потерять деньги при поисков домов на продаже в Адлере"
          description="Боитесь переплатить? Мы покажем стоящие внимания объекты в Сочи и Адлере и отсеим с узкими дорогами, шумом и скрытыми юридическими проблемами."
          data={adlerDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Откройте каталог домов с описаниями!"
          description="Смотрите дома с реальными параметрами — участок, подъезд, виды, состояние и цена. Выбирайте варианты без лишних поездок!"
          buttonText="Показать дома с полной информацией"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={adlerDomaInfoMain.mainTitle}
          mainDescription={adlerDomaInfoMain.mainDescription}
          cards={adlerDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите жильё в Адлере в 3 простых шага!"
          steps={adlerDomaProcessStepsData}
          ctaText="Не теряйте подходящие дома — получите подборку сейчас, чтобы забронировать понравившиеся варианты раньше других!"
          ctaButtonText="Получить подборку жилых домов Адлера"
          onCtaClick={openModal}
        />

        <LeadForm
          title={adlerDomaLeadForm.title}
          description={adlerDomaLeadForm.description}
          buttonText={adlerDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <PaymentMethods
          title="Выберите лучшие условия сделки!"
          methods={adlerDomaPaymentMethodsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <About
          title={adlerDomaAboutData.title}
          paragraphs={adlerDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={adlerDomaBlogData.title}
          description={adlerDomaBlogData.description}
          articles={adlerDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={adlerDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке дома"
          items={adlerDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Удачные объекты исчезают первыми. Поторопитесь, пока понравившиеся варианты не распродали!"
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

