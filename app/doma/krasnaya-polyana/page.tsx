"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KrasnayaPolyanaDomaSearchForm } from '@/components/KrasnayaPolyanaDomaSearchForm';
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
  krasnayaPolyanaDomaHeroData,
  krasnayaPolyanaDomaSearchFormData,
  krasnayaPolyanaDomaBenefitsData,
  krasnayaPolyanaDomaComparisonData,
  krasnayaPolyanaDomaInfoMain,
  krasnayaPolyanaDomaProcessStepsData,
  krasnayaPolyanaDomaPaymentMethodsData,
  krasnayaPolyanaDomaLeadForm,
  krasnayaPolyanaDomaAboutData,
  krasnayaPolyanaDomaBlogData,
  krasnayaPolyanaDomaTestimonialsData,
  krasnayaPolyanaDomaFaqData,
} from '@/lib/doma-krasnaya-polyana-data';
import { contactInfoData } from '@/lib/page-data';

export default function KrasnayaPolyanaDomaPage() {
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
        <Hero {...krasnayaPolyanaDomaHeroData} onCtaClick={openModal} />

        <KrasnayaPolyanaDomaSearchForm
          title={krasnayaPolyanaDomaSearchFormData.title}
          description={krasnayaPolyanaDomaSearchFormData.description}
          houseTypes={krasnayaPolyanaDomaSearchFormData.houseTypes}
          floors={krasnayaPolyanaDomaSearchFormData.floors}
          buttonText={krasnayaPolyanaDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Преимущества работы с нами"
          benefits={krasnayaPolyanaDomaBenefitsData}
        />

        <ComparisonTable
          title="Чем мы отличаемся от обычных агентств?"
          description="От качества проверки и подбора зависит, будете ли вы уверены в покупке или переплатите за скрытые недостатки. Разные команды работают по разным принципам — сделайте правильный выбор!"
          data={krasnayaPolyanaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Все доступные дома в Красной Поляне"
          description="Посмотрите актуальные дома в Красной Поляне, чтобы сразу понять, какие варианты подходят под ваш бюджет и запросы."
          buttonText="Показать больше домов"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={krasnayaPolyanaDomaInfoMain.mainTitle}
          mainDescription={krasnayaPolyanaDomaInfoMain.mainDescription}
          cards={krasnayaPolyanaDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Этапы работы"
          steps={krasnayaPolyanaDomaProcessStepsData}
          ctaText="Подборка домов сэкономит недели поиска. Один клик — и вы уже на шаг ближе к дому своей мечты."
          ctaButtonText="Получить подборку домов"
          onCtaClick={openModal}
        />

        <LeadForm
          title={krasnayaPolyanaDomaLeadForm.title}
          description={krasnayaPolyanaDomaLeadForm.description}
          buttonText={krasnayaPolyanaDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <PaymentMethods
          title="Условия покупки домов в Красной Поляне"
          methods={krasnayaPolyanaDomaPaymentMethodsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <About
          title={krasnayaPolyanaDomaAboutData.title}
          paragraphs={krasnayaPolyanaDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={krasnayaPolyanaDomaBlogData.title}
          description={krasnayaPolyanaDomaBlogData.description}
          articles={krasnayaPolyanaDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={krasnayaPolyanaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке дома в Красной поляне"
          items={krasnayaPolyanaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте номер — получите план поиска дома. Это первый простой шаг к жизни в Красной Поляне."
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

