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
  arendaKvartiryMamaykaHeroData,
  arendaKvartiryMamaykaBenefitsData,
  arendaKvartiryMamaykaComparisonData,
  arendaKvartiryMamaykaInfoCardsData,
  arendaKvartiryMamaykaProcessStepsData,
  arendaKvartiryMamaykaTestimonialsData,
  arendaKvartiryMamaykaFaqData,
  arendaKvartiryMamaykaGalleryData,
} from '@/lib/arenda-kvartiry-mamayka-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryMamaykaPage() {
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
        <Hero {...arendaKvartiryMamaykaHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Подберите квартиру с нужными условиями за пару минут!"
          description="Выберите класс жилья, формат аренды, отметьте важные пункты — и смотрите только релевантные варианты."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры с нами?"
          benefits={arendaKvartiryMamaykaBenefitsData}
        />

        <ComparisonTable 
          title="Убедитесь, что условия аренды работают на вас!"
          description="Одни агентства экономят деньги и время, другие добавляют проблем. Посмотрите на разницу до заключения договора!"
          data={arendaKvartiryMamaykaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle="Выберите удобную аренду квартир на Мамайке"
          mainDescription="Планируйте заселение и смотрите реальные предложения с комфортными условиями проживания. Так проще оценить район, расстояние до моря и удобство для жизни, чтобы выбирать не вслепую."
          cards={arendaKvartiryMamaykaInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде квартиры в Мамайке!"
          steps={arendaKvartiryMamaykaProcessStepsData}
          ctaText="Если хочется нормальные условия и адекватный ценник — действовать нужно вовремя. Успейте оформить квартиру, пока подходящие квартиры не разобрали!"
          ctaButtonText="Выбрать жильё уже сейчас"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Упростите себе поиск уже сейчас!"
          description="Оставьте номер — получите подборку доступных квартир в Мамайке, без посреднических накруток и неприятных сюрпризов при заселении!"
          contactInfo={[]}
          submitButtonText="Получить подборку"
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
          items={arendaKvartiryMamaykaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'С 2016 года мы помогаем с арендой квартир в Мамайке, чтобы вы быстро находили подходящее жильё без переплаты. За это время сотни клиентов уже сняли здесь квартиры — с адекватной ценой и нормальными владельцами.',
            'Контролируем качество и актуальность предложений, чтобы вы не теряли недели на просмотры, не связывались со спорными вариантами и не рисковали деньгами. Мы просчитываем шаги заранее, чтобы вы быстрее заселялись, экономили бюджет и получали комфорт, а не очередную проблему, которой придётся заниматься.',
          ]}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартир"
          items={arendaKvartiryMamaykaFaqData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryMamaykaTestimonialsData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку — за 15 минут получите подборку квартир в Мамайке, доступных к заселению в ближайшие дни!"
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

