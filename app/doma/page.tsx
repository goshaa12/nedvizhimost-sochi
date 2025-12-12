"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HouseSearchForm } from '@/components/HouseSearchForm';
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
import { PriceTable } from '@/components/PriceTable';
import { ContactModal } from '@/components/ContactModal';
import {
  domaHeroData,
  domaSearchFormData,
  domaBenefitsData,
  domaComparisonData,
  domaPriceTableData,
  domaInfoMain,
  domaSpecialOffersData,
  domaProcessStepsData,
  domaLeadForm,
  domaAboutData,
  domaBlogData,
  domaTestimonialsData,
  domaFaqData,
} from '@/lib/doma-data';
import { contactInfoData } from '@/lib/page-data';

export default function DomaPage() {
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
        <Hero {...domaHeroData} onCtaClick={openModal} />

        <HouseSearchForm
          title={domaSearchFormData.title}
          description={domaSearchFormData.description}
          types={domaSearchFormData.types}
          classes={domaSearchFormData.classes}
          districts={domaSearchFormData.districts}
          plotSizes={domaSearchFormData.plotSizes}
          statuses={domaSearchFormData.statuses}
          buttonText={domaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать дома в Сочи с нами?"
          benefits={domaBenefitsData}
        />

        <ComparisonTable
          title="Сравните условия и получите максимум выгоды уже сегодня"
          description="Узнайте, в каких районах Сочи стоит покупать дом, а какие предложения лучше обходить — сэкономьте деньги и время."
          data={domaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог домов"
          description="Смотрите дома с полной информацией о площади, участке, состоянии и цене. Оценивайте подходящие варианты без лишних поездок по Сочи."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <PriceTable
          title="Посмотрите цены и выберите дом в Сочи"
          description="Цены на недвижимость в Сочи растут каждый месяц. Купив готовый объект сегодня с подключёнными коммуникациями, вы сэкономите до 35% от рыночной стоимости и избежите переплат завтра."
          data={domaPriceTableData}
        />

        <InfoSection
          mainTitle={domaInfoMain.mainTitle}
          mainDescription={domaInfoMain.mainDescription}
          cards={domaInfoMain.cards}
        />

        <ProcessSteps
          title="Купите дом в Сочи за 3 лёгких шага"
          steps={domaProcessStepsData}
          ctaText="Не тратьте недели на просмотр объектов и оформление документов — доверьте подборку и проверку домов нам. Получите готовое к заселению жильё и сбейте цену с нашим сопровождением!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={domaLeadForm.title}
          description={domaLeadForm.description}
          buttonText={domaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <InfoSection
          mainTitle={domaSpecialOffersData.title}
          cards={domaSpecialOffersData.cards}
        />

        <About
          title={domaAboutData.title}
          paragraphs={domaAboutData.paragraphs}
        />

        {/* <Blog
          title={domaBlogData.title}
          description={domaBlogData.description}
          articles={domaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={domaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о домах"
          items={domaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Узнайте о доступных домах в Сочи первыми. Получите проверенные варианты и сэкономьте недели на самостоятельном поиске."
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

