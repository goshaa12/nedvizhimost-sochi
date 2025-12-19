"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Fz214NovostroykiSearchForm } from '@/components/Fz214NovostroykiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
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
  fz214NovostroykiHeroData,
  fz214NovostroykiSearchFormData,
  fz214NovostroykiBenefitsData,
  fz214NovostroykiComparisonData,
  fz214NovostroykiInfoMain,
  fz214NovostroykiProcessStepsData,
  fz214NovostroykiLeadForm,
  fz214NovostroykiAboutData,
  fz214NovostroykiBlogData,
  fz214NovostroykiTestimonialsData,
  fz214NovostroykiFaqData,
  fz214NovostroykiGalleryData,
} from '@/lib/novostroyki-fz-214-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function Fz214NovostroykiPage() {
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
        <Hero {...fz214NovostroykiHeroData} onCtaClick={openModal} />

        <Fz214NovostroykiSearchForm
          title={fz214NovostroykiSearchFormData.title}
          description={fz214NovostroykiSearchFormData.description}
          buttonText={fz214NovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Что даёт покупка по ФЗ-214 с нами?"
          benefits={fz214NovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Выберите сопровождение сейчас — или рискуйте деньгами позже"
          description="С нами вы закрываете риски по ФЗ-214 до аванса и экономите до 3–7% бюджета, у других — теряете время, деньги и остаётесь с проблемами один на один."
          data={fz214NovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={fz214NovostroykiInfoMain.mainTitle}
          mainDescription={fz214NovostroykiInfoMain.mainDescription}
          cards={fz214NovostroykiInfoMain.cards}
        />

        {/* <HotDeals
          title="Начните выбор квартиры по ФЗ-214"
          description="Изучите каталог квартир в новостройках и выберите подходящий вариант!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <ProcessSteps
          title="Этапы работы"
          steps={fz214NovostroykiProcessStepsData}
          ctaText="Подходящие варианты по ФЗ-214 быстро разбирают. Начните с подбора сейчас, чтобы зафиксировать условия."
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={fz214NovostroykiLeadForm.title}
          description={fz214NovostroykiLeadForm.description}
          buttonText={fz214NovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={fz214NovostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={fz214NovostroykiAboutData.title}
          paragraphs={fz214NovostroykiAboutData.paragraphs}
        />
{/* 
        <Blog
          title={fz214NovostroykiBlogData.title}
          description={fz214NovostroykiBlogData.description}
          articles={fz214NovostroykiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={fz214NovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе новостройки по ФЗ-214"
          items={fz214NovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не хотите разбираться в ФЗ-214? Напишите! Получите понятные варианты с проверенными застройщиками и фиксированной ценой."
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

