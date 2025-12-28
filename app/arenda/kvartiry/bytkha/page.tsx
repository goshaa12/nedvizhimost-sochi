"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaKvartirySearchForm } from '@/components/ArendaKvartirySearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  arendaKvartiryBytkhaHeroData,
  arendaKvartiryBytkhaBenefitsData,
  arendaKvartiryBytkhaComparisonData,
  arendaKvartiryBytkhaInfoCardsData,
  arendaKvartiryBytkhaProcessStepsData,
  arendaKvartiryBytkhaTestimonialsData,
  arendaKvartiryBytkhaFaqData,
  arendaKvartiryBytkhaGalleryData,
} from '@/lib/arenda-kvartiry-bytkha-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryBytkhaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...arendaKvartiryBytkhaHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Подберите квартиру для аренды"
          description="Укажите параметры — найдите квартиры для заселения сегодня!"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиру с нами?"
          benefits={arendaKvartiryBytkhaBenefitsData}
        />

        <ComparisonTable 
          title="Узнайте, почему с нами вы не потеряете деньги"
          description="Цена — не единственный фактор при аренде. Сравните, как проходят подбор, проверка и оформление, чтобы сделать правильный выбор."
          data={arendaKvartiryBytkhaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryBytkhaInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде квартиры в Сочи!"
          steps={arendaKvartiryBytkhaProcessStepsData}
          ctaText="Снимайте жильё в Бытхе легко. Отправьте заявку и получите готовый список доступных квартир за пару минут!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Снимите жильё в Бытхе онлайн!"
          description="Получите подборку доступных квартир на ваши даты и въезжайте в выбранное жильё в тот же день."
          contactInfo={[]}
          submitButtonText="Получить каталог"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={arendaKvartiryBytkhaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём компанию по аренде квартир в Сочи, которая помогает клиентам быстро находить жильё на нужные даты, экономить время и деньги, получать комфорт и удобство при каждой аренде — будь то месяц или долгосрочное проживание.',
            'Партнёры получают стабильный доход и надёжное сотрудничество, участвуют в формировании современных стандартов ведения бизнеса. Сотрудники зарабатывают достойно, развиваются каждый день и становятся лучшей версией себя в команде единомышленников, разделяющих ценности и корпоративную культуру.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryBytkhaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде"
          items={arendaKvartiryBytkhaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Уже 500 арендаторов нашли квартиры в Бытхе. Оставьте заявку и получите подборку вариантов под ваши даты и бюджет!"
          contactInfo={contactInfoData}
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Contact form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
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

