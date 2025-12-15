"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DagomysDomaSearchForm } from '@/components/DagomysDomaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  dagomysDomaHeroData,
  dagomysDomaSearchFormData,
  dagomysDomaBenefitsData,
  dagomysDomaComparisonData,
  dagomysDomaInfoMain,
  dagomysDomaProcessStepsData,
  dagomysDomaPaymentMethodsData,
  dagomysDomaLeadForm,
  dagomysDomaAboutData,
  dagomysDomaBlogData,
  dagomysDomaTestimonialsData,
  dagomysDomaFaqData,
} from '@/lib/doma-dagomys-data';
import { contactInfoData } from '@/lib/page-data';

export default function DagomysDomaPage() {
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
        <Hero {...dagomysDomaHeroData} onCtaClick={openModal} />

        <DagomysDomaSearchForm
          title={dagomysDomaSearchFormData.title}
          description={dagomysDomaSearchFormData.description}
          houseTypes={dagomysDomaSearchFormData.houseTypes}
          floors={dagomysDomaSearchFormData.floors}
          buttonText={dagomysDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Что делает покупку дома в Дагомысе с нами выгодной?"
          benefits={dagomysDomaBenefitsData}
        />

        <ComparisonTable
          title="Разница, которая влияет на выбор дома"
          description="Решение о покупке дома в Дагомысе выносится на анализе местности и земли. У большинства агентств подход к этим пунктам отличается, а мы проверяем их комплексно и детально, благодаря чему ваша покупка и права под гарантией юридической защиты."
          data={dagomysDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите доступные дома в Дагомысе в каталоге"
          description="За 5 секунд вы поймёте, стоит ли рассматривать вариант дальше. Не теряйте время!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={dagomysDomaInfoMain.mainTitle}
          mainDescription={dagomysDomaInfoMain.mainDescription}
          cards={dagomysDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Этапы работы"
          steps={dagomysDomaProcessStepsData}
          ctaText="Когда весь процесс разложен по этапам, выбирать дом проще и спокойнее. Переходите к подборке, чтобы начать поиск и приобрести жильё уже завтра!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={dagomysDomaLeadForm.title}
          description={dagomysDomaLeadForm.description}
          buttonText={dagomysDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <PaymentMethods
          title="Условия покупки домов в Дагомысе"
          methods={dagomysDomaPaymentMethodsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <About
          title={dagomysDomaAboutData.title}
          paragraphs={dagomysDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={dagomysDomaBlogData.title}
          description={dagomysDomaBlogData.description}
          articles={dagomysDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={dagomysDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке дома в Дагомысе"
          items={dagomysDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не откладывайте выбор дома, пока хорошие варианты ещё доступны. Напишите сейчас и получите подборку, которая сэкономит время."
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

