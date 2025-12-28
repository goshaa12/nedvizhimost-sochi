"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaPenthouseSearchForm } from '@/components/ArendaPenthouseSearchForm';
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
  arendaPenthouseHeroData,
  arendaPenthouseBenefitsData,
  arendaPenthouseComparisonData,
  arendaPenthouseInfoCardsData,
  arendaPenthouseProcessStepsData,
  arendaPenthouseTestimonialsData,
  arendaPenthouseFaqData,
  arendaPenthouseGalleryData,
} from '@/lib/arenda-penthouse-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaPenthousePage() {
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
        <Hero {...arendaPenthouseHeroData} onCtaClick={openModal} />

        <ArendaPenthouseSearchForm
          title="Найдите пентхаус по критериям!"
          description="Настройте фильтр — подберите пентхаус без лишних поисков."
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать пентхаус с нами?"
          benefits={arendaPenthouseBenefitsData}
        />

        <ComparisonTable 
          title="Арендовать пентхаус легко — убедитесь сами!"
          description="Сравните предложения и работайте с теми, кто гарантирует выгодные условия."
          data={arendaPenthouseComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaPenthouseInfoCardsData}
        />

        <ProcessSteps
          title="Снимите пентхаус за 3 шага!"
          steps={arendaPenthouseProcessStepsData}
          ctaText="Подберите пентхаус в Сочи за минуты. Оставьте заявку и получите актуальные варианты сразу!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Ищете пентхаус в Сочи?"
          description="Заселяйтесь в пентхаусы у моря с террасой. Оставьте заявку и получите подборку свободных вариантов."
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
          items={arendaPenthouseGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём сервис аренды пентхаусов в Сочи, чтобы клиенты быстро находили жильё на нужные даты, экономили время и деньги и наслаждались комфортом с панорамными окнами и террасой. Партнёры получают стабильный доход, а сотрудники развиваются в команде единомышленников.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaPenthouseTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде"
          items={arendaPenthouseFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Ищете пентхаус с видом на море? Оставьте заявку — мы подберём подходящие варианты для вашего отдыха."
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

