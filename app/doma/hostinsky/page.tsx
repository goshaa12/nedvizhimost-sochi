"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HostinskyDomaSearchForm } from '@/components/HostinskyDomaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Certificates } from '@/components/Certificates';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  hostinskyDomaHeroData,
  hostinskyDomaSearchFormData,
  hostinskyDomaBenefitsData,
  hostinskyDomaComparisonData,
  hostinskyDomaInfoMain,
  hostinskyDomaProcessStepsData,
  hostinskyDomaPaymentMethodsData,
  hostinskyDomaLeadForm,
  hostinskyDomaAboutData,
  hostinskyDomaBlogData,
  hostinskyDomaTestimonialsData,
  hostinskyDomaFaqData,
  hostinskyDomaGalleryData,
} from '@/lib/doma-hostinsky-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function HostinskyDomaPage() {
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
        <Hero {...hostinskyDomaHeroData} onCtaClick={openModal} />

        <HostinskyDomaSearchForm
          title={hostinskyDomaSearchFormData.title}
          description={hostinskyDomaSearchFormData.description}
          buttonText={hostinskyDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Преимущества покупки дома в Хосте через экспертное сопровождение"
          benefits={hostinskyDomaBenefitsData}
        />

        <ComparisonTable
          title="Почему работать с нами проще и выгоднее"
          description="Чтобы не терять время и не сталкиваться с неожиданностями, важно понимать, как работает сервис, к которому вы обращаетесь. Сравните и сделайте правильный выбор!"
          data={hostinskyDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Начните поиск дома в Хостинском районе"
          description="Изучите каталог домов в Хостинском районе и сразу оцените реальные предложения по бюджету, площади и локации."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={hostinskyDomaInfoMain.mainTitle}
          mainDescription={hostinskyDomaInfoMain.mainDescription}
          cards={hostinskyDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Всего 3 шага к вашему дому в Хосте"
          steps={hostinskyDomaProcessStepsData}
          ctaText="Начните с короткой консультации — узнайте, какие районы Хосты стоят внимания и где вас ждёт комфортная жизнь."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашего дома в Хосте"
          methods={hostinskyDomaPaymentMethodsData}
          ctaText="Узнайте, какой способ оплаты выгоднее в вашем случае!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={hostinskyDomaLeadForm.title}
          description={hostinskyDomaLeadForm.description}
          buttonText={hostinskyDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фотогалерея"
          description="Оцените реальные примеры домов и поймите, что подходит именно вам. Так проще сформировать вкус и определить бюджет."
          items={hostinskyDomaGalleryData}
        />
{/* 
        <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={hostinskyDomaAboutData.title}
          paragraphs={hostinskyDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={hostinskyDomaBlogData.title}
          description={hostinskyDomaBlogData.description}
          articles={hostinskyDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={hostinskyDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе дома в Хостинском районе"
          items={hostinskyDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сотни покупателей уже упростили себе выбор дома в Хосте. Напишите — получите экспертную поддержку!"
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

