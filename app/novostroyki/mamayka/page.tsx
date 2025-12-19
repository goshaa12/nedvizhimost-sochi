"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MamaykaNovostroykiSearchForm } from '@/components/MamaykaNovostroykiSearchForm';
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
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  mamaykaNovostroykiHeroData,
  mamaykaNovostroykiSearchFormData,
  mamaykaNovostroykiBenefitsData,
  mamaykaNovostroykiComparisonData,
  mamaykaNovostroykiInfoMain,
  mamaykaNovostroykiProcessStepsData,
  mamaykaNovostroykiPaymentMethodsData,
  mamaykaNovostroykiLeadForm,
  mamaykaNovostroykiAboutData,
  mamaykaNovostroykiBlogData,
  mamaykaNovostroykiTestimonialsData,
  mamaykaNovostroykiFaqData,
  mamaykaNovostroykiGalleryData,
} from '@/lib/novostroyki-mamayka-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function MamaykaNovostroykiPage() {
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
        <Hero {...mamaykaNovostroykiHeroData} onCtaClick={openModal} />

        <MamaykaNovostroykiSearchForm
          title={mamaykaNovostroykiSearchFormData.title}
          description={mamaykaNovostroykiSearchFormData.description}
          buttonText={mamaykaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Выберите проверенные новостройки в Мамайке с нами"
          benefits={mamaykaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сохраните свои деньги и время — выбирайте надёжные новостройки!"
          description="С нами вы будете уверены в каждой покупке: все новостройки проверены и безопасны. Без нас или у других вы рискуете долгостроем, штрафами и потерей времени."
          data={mamaykaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        {/* <HotDeals
          title="Оцените актуальные варианты новостроек в Сочи!"
          description="Просмотрите каталог сейчас и выберите новостройку своей мечты!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={mamaykaNovostroykiInfoMain.mainTitle}
          mainDescription={mamaykaNovostroykiInfoMain.mainDescription}
          cards={mamaykaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Получите новостройку в новостройке Мамайки за 3 шага!"
          steps={mamaykaNovostroykiProcessStepsData}
          ctaText="Начните путь к своей новостройке уже сегодня и забронируйте персональную консультацию!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплачивайте новостройку любым удобным способом!"
          methods={mamaykaNovostroykiPaymentMethodsData}
          ctaText="Узнайте, как быстро и выгодно купить новостройку — получите полную консультацию!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={mamaykaNovostroykiLeadForm.title}
          description={mamaykaNovostroykiLeadForm.description}
          buttonText={mamaykaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={mamaykaNovostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={mamaykaNovostroykiAboutData.title}
          paragraphs={mamaykaNovostroykiAboutData.paragraphs}
        />

        {/* <Blog
          title={mamaykaNovostroykiBlogData.title}
          description={mamaykaNovostroykiBlogData.description}
          articles={mamaykaNovostroykiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={mamaykaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по новостройке в Мамайке"
          items={mamaykaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Мы поможем подобрать подходящий участок в Сочи и разобраться во всех деталях покупки. Свяжитесь удобным для вас способом!"
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

