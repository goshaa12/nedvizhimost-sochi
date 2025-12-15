"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ElitnyeDomaSearchForm } from '@/components/ElitnyeDomaSearchForm';
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
  elitnyeDomaHeroData,
  elitnyeDomaSearchFormData,
  elitnyeDomaBenefitsData,
  elitnyeDomaComparisonData,
  elitnyeDomaInfoMain,
  elitnyeDomaSpecialOffersData,
  elitnyeDomaProcessStepsData,
  elitnyeDomaLeadForm,
  elitnyeDomaBlogData,
  elitnyeDomaTestimonialsData,
  elitnyeDomaFaqData,
} from '@/lib/doma-elitnye-data';
import { contactInfoData } from '@/lib/page-data';

export default function ElitnyeDomaPage() {
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
        <Hero {...elitnyeDomaHeroData} onCtaClick={openModal} />

        <ElitnyeDomaSearchForm
          title={elitnyeDomaSearchFormData.title}
          description={elitnyeDomaSearchFormData.description}
          districts={elitnyeDomaSearchFormData.districts}
          plotSizes={elitnyeDomaSearchFormData.plotSizes}
          seaDistance={elitnyeDomaSearchFormData.seaDistance}
          buttonText={elitnyeDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупают элитные дома в Сочи с нами?"
          benefits={elitnyeDomaBenefitsData}
        />

        <ComparisonTable
          title="Оцените условия и выберите лучшее для себя"
          description="Посмотрите, чем наш подход отличается от других компаний — от подбора объекта до сопровождения сделки."
          data={elitnyeDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите каталог элитных домов"
          description="Смотрите элитные дома с полной информацией — фото, планировка, площадь и участок. Проверяйте качество строительства, приватность и виды только среди проверенных вариантов."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={elitnyeDomaInfoMain.mainTitle}
          mainDescription={elitnyeDomaInfoMain.mainDescription}
          cards={elitnyeDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к вашему элитному дому в Сочи"
          steps={elitnyeDomaProcessStepsData}
          ctaText="Не тратьте дни на просмотры и согласования — выбирайте элитную недвижимость в Сочи и оформляйте за 48 часов!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={elitnyeDomaLeadForm.title}
          description={elitnyeDomaLeadForm.description}
          buttonText={elitnyeDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <InfoSection
          mainTitle={elitnyeDomaSpecialOffersData.title}
          cards={elitnyeDomaSpecialOffersData.cards}
        />
{/* 
        <Blog
          title={elitnyeDomaBlogData.title}
          description={elitnyeDomaBlogData.description}
          articles={elitnyeDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={elitnyeDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о домах"
          items={elitnyeDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получайте информацию об элитных домах в Сочи до выхода в открытые базы. Сразу рассматривайте подходящие резиденции и виллы без долгого и утомительного поиска!"
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

