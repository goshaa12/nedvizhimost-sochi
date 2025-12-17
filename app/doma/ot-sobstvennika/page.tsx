"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OtSobstvennikaDomaSearchForm } from '@/components/OtSobstvennikaDomaSearchForm';
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
  otSobstvennikaDomaHeroData,
  otSobstvennikaDomaSearchFormData,
  otSobstvennikaDomaBenefitsData,
  otSobstvennikaDomaComparisonData,
  otSobstvennikaDomaInfoMain,
  otSobstvennikaDomaProcessStepsData,
  otSobstvennikaDomaPaymentMethodsData,
  otSobstvennikaDomaLeadForm,
  otSobstvennikaDomaAboutData,
  otSobstvennikaDomaBlogData,
  otSobstvennikaDomaTestimonialsData,
  otSobstvennikaDomaFaqData,
  otSobstvennikaDomaGalleryData,
} from '@/lib/doma-ot-sobstvennika-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function OtSobstvennikaDomaPage() {
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
        <Hero {...otSobstvennikaDomaHeroData} onCtaClick={openModal} />

        <OtSobstvennikaDomaSearchForm
          title={otSobstvennikaDomaSearchFormData.title}
          description={otSobstvennikaDomaSearchFormData.description}
          buttonText={otSobstvennikaDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Выбирайте безопасные дома на вторичном рынке Сочи"
          benefits={otSobstvennikaDomaBenefitsData}
        />

        <ComparisonTable
          title="Подберите дом с нами — иначе рискуете потерять сотни тысяч и время"
          description="Каждый третий дом скрывает долги и незарегистрированные перепланировки, что обойдётся в десятки тысяч на штрафах и ремонте. Проверьте с нами проверяете жильё за 1 день, получите всю историю и сэкономьте до 200 000 на рисках."
          data={otSobstvennikaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />
{/* 
        <HotDeals
          title="Выбирайте жильё в нашем каталоге!"
          description="Найдите дом своей мечты среди сотен проверенных вариантов!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={otSobstvennikaDomaInfoMain.mainTitle}
          mainDescription={otSobstvennikaDomaInfoMain.mainDescription}
          cards={otSobstvennikaDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Получите свой дом всего за 3 шага"
          steps={otSobstvennikaDomaProcessStepsData}
          ctaText="Заключите выгодную сделку и станьте владельцем дома уже сегодня!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты!"
          methods={otSobstvennikaDomaPaymentMethodsData}
          ctaText="Выберите способ оплаты и начните покупку своего дома уже сегодня!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={otSobstvennikaDomaLeadForm.title}
          description={otSobstvennikaDomaLeadForm.description}
          buttonText={otSobstvennikaDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={otSobstvennikaDomaGalleryData}
        />
{/* 
        <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={otSobstvennikaDomaAboutData.title}
          paragraphs={otSobstvennikaDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={otSobstvennikaDomaBlogData.title}
          description={otSobstvennikaDomaBlogData.description}
          articles={otSobstvennikaDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={otSobstvennikaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о домах от собственника"
          items={otSobstvennikaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами"
          description="Уже 300+ клиентов нашли дома вторички в Сочи без лишних рисков. Напишите сейчас и сделайте первый шаг к собственному дому!"
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

