"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BytkhaSearchForm } from '@/components/BytkhaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  bytkhaHeroData,
  bytkhaSearchFormData,
  bytkhaBenefitsData,
  bytkhaComparisonData,
  bytkhaInfoMain,
  bytkhaSpecialOffersData,
  bytkhaProcessStepsData,
  bytkhaLeadForm,
  bytkhaGallery,
  bytkhaBlogData,
  bytkhaTestimonialsData,
  bytkhaFaqData,
} from '@/lib/kvartiry-bytkha-data';
import { bytkhaGalleryData } from '@/lib/kvartiry-bytkha-data';
import { contactInfoData } from '@/lib/page-data';

export default function KvartiryBytkhaPage() {
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
        <Hero {...bytkhaHeroData} onCtaClick={openModal} />

        <BytkhaSearchForm
          title={bytkhaSearchFormData.title}
          description={bytkhaSearchFormData.description}
          classes={bytkhaSearchFormData.classes}
          rooms={bytkhaSearchFormData.rooms}
          types={bytkhaSearchFormData.types}
          buttonText={bytkhaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры в Бытхе с нами?"
          benefits={bytkhaBenefitsData}
        />

        <ComparisonTable
          title="Проверьте, где квартира стоит своих денег"
          description="Смотрите проверенные квартиры, быстрые сделки и прозрачные цены — выбирайте жильё в Бытхе с максимальной экономией и без риска переплат."
          data={bytkhaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог квартир"
          description="Изучите квартиры с фото, площадью, этажом и ценой. Сразу оцените район и доступность транспорта и не ошибитесь с выбором."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={bytkhaInfoMain.mainTitle}
          mainDescription={bytkhaInfoMain.mainDescription}
          cards={bytkhaInfoMain.cards}
        />

        <InfoSection
          mainTitle={bytkhaSpecialOffersData.title}
          cards={bytkhaSpecialOffersData.cards}
        />

        <ProcessSteps
          title="Оформите квартиру в 3 этапа"
          steps={bytkhaProcessStepsData}
          ctaText="Не теряйте дни на поиск и проверки — получите подборку с фото, видео и проверенными документами, чтобы выбрать вариант за 24 часа."
          ctaButtonText="Получить лучшие варианты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={bytkhaLeadForm.title}
          description={bytkhaLeadForm.description}
          buttonText={bytkhaLeadForm.buttonText}
          onButtonClick={openModal}
        />


        {/* <About
          title="О нас"
          paragraphs={[]}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={bytkhaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах в Бытхе"
          items={bytkhaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Свяжитесь с нами, и мы подберём подходящие квартиры. Рассматривайте только чистые и проверенные объекты для быстрого выбора."
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

