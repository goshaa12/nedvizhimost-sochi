"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KudepstaDomaSearchForm } from '@/components/KudepstaDomaSearchForm';
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
  mamaykaDomaHeroData,
  mamaykaDomaSearchFormData,
  mamaykaDomaBenefitsData,
  mamaykaDomaComparisonData,
  mamaykaDomaInfoMain,
  mamaykaDomaProcessStepsData,
  mamaykaDomaPaymentMethodsData,
  mamaykaDomaLeadForm,
  mamaykaDomaAboutData,
  mamaykaDomaBlogData,
  mamaykaDomaTestimonialsData,
  mamaykaDomaFaqData,
  mamaykaDomaGalleryData,
} from '@/lib/doma-mamayka-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function MamaykaDomaPage() {
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
        <Hero {...mamaykaDomaHeroData} onCtaClick={openModal} />

        <KudepstaDomaSearchForm
          title={mamaykaDomaSearchFormData.title}
          description={mamaykaDomaSearchFormData.description}
          buttonText={mamaykaDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать дом в Мамайке с нами?"
          benefits={mamaykaDomaBenefitsData}
        />

        <ComparisonTable
          title="Сравните наши преимущества над конкурентами"
          description="Пока другие показывают стандартные объекты с рисками и скрытыми расходами, мы предлагаем только проверенные дома в Мамайке с подробным разбором по ценообразованию и оформлением за 3 дня."
          data={mamaykaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог домов"
          description="Смотрите дома в Мамайке с точными характеристиками и ценой. Определяйте подходящий вариант без лишних поездок."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={mamaykaDomaInfoMain.mainTitle}
          mainDescription={mamaykaDomaInfoMain.mainDescription}
          cards={mamaykaDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к вашему дому в Мамайке"
          steps={mamaykaDomaProcessStepsData}
          ctaText="Начните подбор прямо сегодня и получите доступ к домам в Мамайке, чтобы не терять время и не упустить выгодные варианты."
          ctaButtonText="Запросить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите дом удобным способом"
          methods={mamaykaDomaPaymentMethodsData}
          ctaText="Выберите вариант расчёта и сразу получите расчёт стоимости будущего дома."
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={mamaykaDomaLeadForm.title}
          description={mamaykaDomaLeadForm.description}
          buttonText={mamaykaDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Оцените планировки и фактическое состояние домов с помощью качественных фото и видео. Сразу определите, какие объекты полностью соответствуют вашим требованиям."
          items={mamaykaDomaGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={mamaykaDomaAboutData.title}
          paragraphs={mamaykaDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={mamaykaDomaBlogData.title}
          description={mamaykaDomaBlogData.description}
          articles={mamaykaDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={mamaykaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о домах"
          items={mamaykaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не упустите новые дома в Мамайке — смотрите актуальные варианты и выбирайте подходящие, пока не раскупили!"
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

