"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StudioSearchForm } from '@/components/StudioSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  odnokomHeroData,
  odnokomSearchFormData,
  odnokomBenefitsData,
  odnokomComparisonData,
  odnokomInfoMain,
  odnokomProcessStepsData,
  odnokomBonusesData,
  odnokomLeadForm,
  odnokomBlogData,
  odnokomTestimonialsData,
  odnokomFaqData,
} from '@/lib/kvartiry-1kom-data';
import { contactInfoData } from '@/lib/page-data';

export default function Kvartiry1KomPage() {
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
        <Hero {...odnokomHeroData} onCtaClick={openModal} />

        <StudioSearchForm
          title={odnokomSearchFormData.title}
          description={odnokomSearchFormData.description}
          districts={odnokomSearchFormData.districts}
          rooms={odnokomSearchFormData.rooms}
          types={odnokomSearchFormData.types}
          buttonText={odnokomSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать квартиры-студии в Сочи через нас надёжнее?"
          benefits={odnokomBenefitsData}
        />

        <ComparisonTable
          title="Сравните и выберите безопасную покупку 1-комнатной квартиры с гарантиями"
          description="С нами вы найдёте квартиру без скрытых проблем и переплат и не рискуете купить однокомнатную квартиру в Сочи с сюрпризами, которые обойдутся в ремонт, суды и месяцы."
          data={odnokomComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите каталог 1-комнатных квартир"
          description="За 5–7 секунд вы поймёте, стоит ли рассматривать квартиру дальше. Каждый вариант показывает ваши ключевые параметры сразу — без лишних кликов и поиска по вкладкам. Нашли подходящие варианты? Откройте ещё — среди следующих квартир может быть ваш лучший вариант."
          buttonText="Показать больше однокомнатных квартир в ЖК"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={odnokomInfoMain.mainTitle}
          mainDescription={odnokomInfoMain.mainDescription}
          cards={odnokomInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите 1-комнатную квартиру в Сочи в 3 шага"
          steps={odnokomProcessStepsData}
          ctaText="Узнайте доступные варианты заранее, пока лучшие 1-комнатные квартиры в Сочи ещё в продаже."
          ctaButtonText="Получить консультацию менеджера"
          onCtaClick={openModal}
        />

        <LeadForm
          title={odnokomLeadForm.title}
          description={odnokomLeadForm.description}
          buttonText={odnokomLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Получите выгодные условия на однокомнатные квартиры в Сочи"
          benefits={odnokomBonusesData}
        />

        {/* <Blog
          title="Прочитайте полезные материалы перед покупкой квартиры"
          description="Ознакомьтесь с разборами, которые помогут выбрать будущее жильё без переплат и ошибок."
          articles={odnokomBlogData}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={odnokomTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке однокомнатной квартиры"
          items={odnokomFaqData}
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

