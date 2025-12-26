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
  arendaKvartiryAdlerHeroData,
  arendaKvartiryAdlerBenefitsData,
  arendaKvartiryAdlerComparisonData,
  arendaKvartiryAdlerInfoCardsData,
  arendaKvartiryAdlerProcessStepsData,
  arendaKvartiryAdlerTestimonialsData,
  arendaKvartiryAdlerFaqData,
  arendaKvartiryAdlerGalleryData,
} from '@/lib/arenda-kvartiry-adler-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryAdlerPage() {
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
        <Hero {...arendaKvartiryAdlerHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Сузьте выбор квартир и найдите подходящую за минуту!"
          description="Отсекайте лишнее и получайте только подходящие варианты — без обзвонов и переплат!"
          buttonText="Получить список квартир"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 800+ клиентов уже выбрали нас для аренды?"
          benefits={arendaKvartiryAdlerBenefitsData}
        />

        <ComparisonTable 
          title="Почему важно смотреть на разницу в аренде до заселения?"
          description="Рынок аренды в Адлере часто превращает поиск квартиры в бесконечный круг просмотров — сравните условия и сэкономьте время и деньги!"
          data={arendaKvartiryAdlerComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiryAdlerInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде квартиры в Адлере!"
          steps={arendaKvartiryAdlerProcessStepsData}
          ctaText="Каждый день промедления — это рост цен и потеря подходящих вариантов. Забронируйте в Адлере квартиру на длительный срок без повторного круга поиска уже сейчас!"
          ctaButtonText="Оставить заявку и получить варианты сегодня"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку и сэкономьте!"
          description="Получите актуальные варианты, чтобы снять квартиру в Адлере недорого — один звонок, 5 минут и фиксирование цены без последующих пересмотров."
          contactInfo={[]}
          submitButtonText="Получить подборку и не переплатить"
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
          items={arendaKvartiryAdlerGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём сильную компанию в сфере недвижимости, выстраивая устойчивые процессы. Работаем на результат для клиентов и партнёров, формируя долгосрочные отношения, а команде даём стабильность, рост и общее ценностное развитие.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryAdlerTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартир в Адлере"
          items={arendaKvartiryAdlerFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Более 1 000 клиентов уже нашли жильё в Адлере без лишних просмотров. Получите экспертную поддержку с первого запроса и не ошибитесь с квартирой!"
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

