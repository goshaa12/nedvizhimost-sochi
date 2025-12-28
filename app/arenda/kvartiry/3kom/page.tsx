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
  arendaKvartiry3komHeroData,
  arendaKvartiry3komBenefitsData,
  arendaKvartiry3komComparisonData,
  arendaKvartiry3komInfoCardsData,
  arendaKvartiry3komProcessStepsData,
  arendaKvartiry3komTestimonialsData,
  arendaKvartiry3komFaqData,
  arendaKvartiry3komGalleryData,
} from '@/lib/arenda-kvartiry-3kom-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiry3komPage() {
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
        <Hero {...arendaKvartiry3komHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Снимите трёхкомнатную квартиру без лишнего поиска!"
          description="Отфильтруйте предложения по району, цене и условиям — останутся только подходящие варианты без лишних просмотров и переписки!"
          buttonText="Показать найденные 3-комнатные квартиры"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему клиенты выбирают нас для аренды трёхкомнатных квартир?"
          benefits={arendaKvartiry3komBenefitsData}
        />

        <ComparisonTable 
          title="Почему в аренде трёхкомнатных квартир решают детали?"
          description="Рынок аренды трёхкомнатных квартир отличается по проверке объектов и условиям — разбор этих различий экономит недели поиска и десятки тысяч рублей."
          data={arendaKvartiry3komComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaKvartiry3komInfoCardsData}
        />

        <ProcessSteps
          title="Снимите трёхкомнатную квартиру в Сочи за 3 шага!"
          steps={arendaKvartiry3komProcessStepsData}
          ctaText="Передайте подбор специалистам: исключите пустые показы, лишние поездки и сэкономьте до 3 дней на поисках и проверках. Оставьте заявку на консультацию!"
          ctaButtonText="Подобрать трёхкомнатную квартиру сейчас"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку на подбор и консультацию!"
          description="Подберите варианты под бюджет и сроки без просмотров «впустую» уже сегодня."
          contactInfo={[]}
          submitButtonText="Получить подбор и сэкономить время на поиске"
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
          items={arendaKvartiry3komGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы помогаем клиентам быстро находить подходящее жильё для аренды. Партнёрам даём стабильный доход и сотрудничество. Сотрудникам — рост, достойный заработок и работу в сильной команде с общими ценностями.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiry3komTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде 3-комнатных квартир"
          items={arendaKvartiry3komFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку сейчас, пока подходящие варианты свободны и сэкономьте дни поиска!"
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

