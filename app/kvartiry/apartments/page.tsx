"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ApartmentsSearchForm } from '@/components/ApartmentsSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  apartmentsHeroData,
  apartmentsSearchFormData,
  apartmentsBenefitsData,
  apartmentsComparisonData,
  apartmentsInfoMain,
  apartmentsSpecialOffersData,
  apartmentsProcessStepsData,
  apartmentsLeadForm,
  apartmentsBlogData,
  apartmentsTestimonialsData,
  apartmentsFaqData,
} from '@/lib/kvartiry-apartments-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryApartmentsPage() {
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
        <Hero {...apartmentsHeroData} onCtaClick={openModal} />

        <ApartmentsSearchForm
          title={apartmentsSearchFormData.title}
          description={apartmentsSearchFormData.description}
          districts={apartmentsSearchFormData.districts}
          classes={apartmentsSearchFormData.classes}
          rooms={apartmentsSearchFormData.rooms}
          buttonText={apartmentsSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать апартаменты в Сочи с нами?"
          benefits={apartmentsBenefitsData}
        />

        <ComparisonTable
          title="Не упустите апартаменты с доходом и видом на море"
          description="Только у нас проверенные апартаменты с реальными доходами и полной визуализацией. Не теряйте время, не рискуйте выбрать невыгодный объект и упустить лучшие предложения."
          data={apartmentsComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите каталог апартаментов"
          description="Настройте фильтр и найдите апартаменты в Сочи за пару кликов: по цене, площади, этажу и формату. Только действительные варианты."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={apartmentsInfoMain.mainTitle}
          mainDescription={apartmentsInfoMain.mainDescription}
          cards={apartmentsInfoMain.cards}
        />

        <InfoSection
          mainTitle={apartmentsSpecialOffersData.title}
          cards={apartmentsSpecialOffersData.cards}
        />

        <ProcessSteps
          title="Оформите свои апартаменты в 3 шага!"
          steps={apartmentsProcessStepsData}
          ctaText="Не тратьте недели на самостоятельный поиск и согласования — доверьте подбор нам и получите апартаменты точно по вашим критериям и бюджету."
          ctaButtonText="Получить лучшие варианты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={apartmentsLeadForm.title}
          description={apartmentsLeadForm.description}
          buttonText={apartmentsLeadForm.buttonText}
          onButtonClick={openModal}
        />

        {/* <About
          title="О нас"
          paragraphs={[]}
        /> */}
{/* 
        <Blog
          title={apartmentsBlogData.title}
          description={apartmentsBlogData.description}
          articles={apartmentsBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={apartmentsTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об апартаментах"
          items={apartmentsFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Напишите нам, и мы подготовим свежие варианты апартаментов в Сочи. Примите решение быстро — все объекты проверены и доступны сразу."
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

