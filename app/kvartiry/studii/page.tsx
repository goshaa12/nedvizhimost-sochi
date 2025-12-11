"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StudioSearchForm } from '@/components/StudioSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  studiiHeroData,
  studiiSearchFormData,
  studiiBenefitsData,
  studiiComparisonData,
  studiiInfoMain,
  studiiProcessStepsData,
  studiiBonusesData,
  studiiLeadForm,
  studiiBlogData,
  studiiTestimonialsData,
  studiiFaqData,
} from '@/lib/kvartiry-studii-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryStudiiPage() {
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
        <Hero {...studiiHeroData} onCtaClick={openModal} />

        <StudioSearchForm
          title={studiiSearchFormData.title}
          description={studiiSearchFormData.description}
          districts={studiiSearchFormData.districts}
          rooms={studiiSearchFormData.rooms}
          types={studiiSearchFormData.types}
          buttonText={studiiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать квартиры-студии в Сочи через нас выгоднее?"
          benefits={studiiBenefitsData}
        />

        <ComparisonTable
          title="Сравните перед тем, как купить квартиру-студию"
          description="С нами вы покупаете студию в Сочи с гарантией корректности в документах и экономией до 12% от бюджета и не рискуете попасть на фейковый объект, переплатить сотни тысяч и провести 3–6 месяцев в судах."
          data={studiiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle={studiiInfoMain.mainTitle}
          mainDescription={studiiInfoMain.mainDescription}
          cards={studiiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите студию в Сочи в 3 шага"
          steps={studiiProcessStepsData}
          ctaText="Узнайте доступные варианты заранее, пока востребованные студии в Сочи ещё не раскуплены — так проще выбрать лучший вариант и сэкономить бюджет."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <BenefitsGrid
          title="Получите выгодные бонусы от застройщиков"
          benefits={studiiBonusesData}
        />

        <LeadForm
          title={studiiLeadForm.title}
          description={studiiLeadForm.description}
          buttonText={studiiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        {/* <Blog
          title="Читайте статьи перед покупкой квартиры"
          description="Получите быстрые и понятные разборы цен, районов и рисков — каждая статья помогает избежать переплат и выбрать подходящий вариант, когда планируете купить студию в Сочи."
          articles={studiiBlogData}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={studiiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке студии"
          items={studiiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
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

