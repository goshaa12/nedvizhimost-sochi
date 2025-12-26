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
  arendaKvartiryDagomysHeroData,
  arendaKvartiryDagomysBenefitsData,
  arendaKvartiryDagomysComparisonData,
  arendaKvartiryDagomysInfoCardsData,
  arendaKvartiryDagomysProcessStepsData,
  arendaKvartiryDagomysTestimonialsData,
  arendaKvartiryDagomysFaqData,
  arendaKvartiryDagomysGalleryData,
} from '@/lib/arenda-kvartiry-dagomys-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryDagomysPage() {
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
        <Hero {...arendaKvartiryDagomysHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Сэкономьте недели поиска — снимите квартиру уже сегодня!"
          description="Исключите неподходящие варианты — получите отбор квартир под длительное проживание или на сутки за минуту!"
          buttonText="Показать найденные квартиры в Дагомысе"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему аренда в Дагомысе с нами экономит недели поиска и нервы?"
          benefits={arendaKvartiryDagomysBenefitsData}
        />

        <ComparisonTable 
          title="Почему при аренде квартиры подход решает больше, чем цена?"
          description="На рынке аренды в Дагомысе разница между подходами — недели времени и десятки тысяч рублей, поэтому сравнение условий даёт контроль до того, как вы дорого заплатите за ошибку."
          data={arendaKvartiryDagomysComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle="Снимайте квартиру в Дагомысе без пересмотров цены"
          mainDescription="В Дагомысе объявления часто меняются уже после заселения: цена растёт, условия пересматриваются. Здесь вы выходите на аренду квартиры Дагомыс длительно с фиксированной стоимостью на весь срок — без поиска замены и потери депозита."
          cards={arendaKvartiryDagomysInfoCardsData}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к аренде квартиры в Дагомысе!"
          steps={arendaKvartiryDagomysProcessStepsData}
          ctaText="Объявления устаревают быстрее, чем отвечают собственники. Напишите или позвоните сейчас — получите подбор свободных квартир, а не «уже сдано»."
          ctaButtonText="Оставить заявку и получить варианты сегодня"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку — заедьте быстрее!"
          description="Актуальные варианты, где можно снять квартиру в Дагомысе без ожиданий. Всего одно действие, и через 5 минут у вас ответы на все вопросы и 20+ квартир на выбор."
          contactInfo={[]}
          submitButtonText="Получить подборку сейчас и не переплатить"
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
          items={arendaKvartiryDagomysGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём сервис аренды, в котором клиент быстро находит жильё под свой срок и бюджет без лишних рисков и переплат. Партнёры получают стабильную загрузку объектов, доход и взаимовыгодное сотрудничество. Команда растёт профессионально и финансово, работая в системе с общими ценностями.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryDagomysTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартир в Дагомысе"
          items={arendaKvartiryDagomysFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Уже 200+ людей в этом сезоне сэкономили до 3 дней поисков. Напишите сейчас и станьте следующим, пока есть выбор!"
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

