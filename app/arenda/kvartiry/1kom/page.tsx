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
  arendaKvartiry1komHeroData,
  arendaKvartiry1komBenefitsData,
  arendaKvartiry1komComparisonData,
  arendaKvartiry1komInfoCardsData,
  arendaKvartiry1komProcessStepsData,
  arendaKvartiry1komTestimonialsData,
  arendaKvartiry1komFaqData,
  arendaKvartiry1komGalleryData,
} from '@/lib/arenda-kvartiry-1kom-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiry1komPage() {
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
        <Hero {...arendaKvartiry1komHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Сократите поиск квартиры до минуты!"
          description="Отфильтруйте варианты по району, цене и условиям — останутся только подходящие без лишних просмотров и вкладок!"
          buttonText="Показать найденные однокомнатные квартиры"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему снять 1-комнатную квартиру с нами проще?"
          benefits={arendaKvartiry1komBenefitsData}
        />

        <ComparisonTable 
          title="Как в аренде квартиры одна деталь меняет всё?"
          description="На рынке аренды разница в проверке и сопровождении стоит недель поиска и лишних расходов — сравните подходы и сохраните контроль."
          data={arendaKvartiry1komComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiry1komInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде 1-комнатной квартиры в Сочи!"
          steps={arendaKvartiry1komProcessStepsData}
          ctaText="Передайте подбор специалистам и держите процесс под контролем. Не теряйте дни поиска и деньги на дорогу. Оставьте заявку и не тратьте время на пустые показы!"
          ctaButtonText="Оставить заявку на подбор"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку на подбор квартиры!"
          description="Оставьте заявку и получите 3–5 доступных однокомнатных квартир в Сочи с подтверждённой ценой и датой заезда под ваш бюджет."
          contactInfo={[]}
          submitButtonText="Зафиксировать подбор и цену"
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
          items={arendaKvartiry1komGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы подбираем квартиры для аренды с подтверждённой ценой и реальной доступностью. Клиенты заселяются без срывов и повторных поисков. Партнёры получают стабильные сделки без простоев. Сотрудники работают с понятными задачами, фиксированным доходом и результатом.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiry1komTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы про аренду однокомнатных квартир"
          items={arendaKvartiry1komFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите варианты — вам не придётся разбираться вслепую и откладывать. Свяжитесь сейчас, пока подходящие однушки свободны!"
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

