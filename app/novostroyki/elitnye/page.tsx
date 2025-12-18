"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ElitnyeNovostroykiSearchForm } from '@/components/ElitnyeNovostroykiSearchForm';
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
  elitnyeNovostroykiHeroData,
  elitnyeNovostroykiSearchFormData,
  elitnyeNovostroykiBenefitsData,
  elitnyeNovostroykiComparisonData,
  elitnyeNovostroykiInfoMain,
  elitnyeNovostroykiProcessStepsData,
  elitnyeNovostroykiPaymentMethodsData,
  elitnyeNovostroykiLeadForm,
  elitnyeNovostroykiAboutData,
  elitnyeNovostroykiBlogData,
  elitnyeNovostroykiTestimonialsData,
  elitnyeNovostroykiFaqData,
  elitnyeNovostroykiGalleryData,
} from '@/lib/novostroyki-elitnye-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function ElitnyeNovostroykiPage() {
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
        <Hero {...elitnyeNovostroykiHeroData} onCtaClick={openModal} />

        <ElitnyeNovostroykiSearchForm
          title={elitnyeNovostroykiSearchFormData.title}
          description={elitnyeNovostroykiSearchFormData.description}
          buttonText={elitnyeNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит выбирать элитные новостройки с нами?"
          benefits={elitnyeNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Оцените разницу и выберите премиум качество"
          description="Сравните нас с другими и убедитесь: только мы предоставляем полный пакет сопровождения сделки по элитным новостройкам в Сочи."
          data={elitnyeNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите горячие предложения!"
          description="Оцените все элитные квартиры с фото, планировками и точной площадью, чтобы выбрать подходящий объект для комфортной жизни!"
          buttonText="Показать больше новостроек"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={elitnyeNovostroykiInfoMain.mainTitle}
          mainDescription={elitnyeNovostroykiInfoMain.mainDescription}
          cards={elitnyeNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к жизни в новостройке мечты!"
          steps={elitnyeNovostroykiProcessStepsData}
          ctaText="Начните подбор новостроек Сочи и забронируйте лучшие квартиры до их продажи!"
          ctaButtonText="Запросить подборку новостроек"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ покупки элитной новостройки"
          methods={elitnyeNovostroykiPaymentMethodsData}
          ctaText="Выберите подходящую схему оплаты и узнайте окончательную цену элитной новостройки!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={elitnyeNovostroykiLeadForm.title}
          description={elitnyeNovostroykiLeadForm.description}
          buttonText={elitnyeNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Убедитесь в качестве новостроек Сочи по фото и видео каждого объекта — смотрите только лучшие варианты."
          items={elitnyeNovostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={elitnyeNovostroykiAboutData.title}
          paragraphs={elitnyeNovostroykiAboutData.paragraphs}
        />

        {/* <Blog
          title={elitnyeNovostroykiBlogData.title}
          description={elitnyeNovostroykiBlogData.description}
          articles={elitnyeNovostroykiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={elitnyeNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={elitnyeNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Посмотрите доступные новостройки в Сочи, выберите подходящий вариант и оформляйте документы. Не откладывайте выбор элитной недвижимости!"
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

