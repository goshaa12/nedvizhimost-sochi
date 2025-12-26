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
  arendaKvartiryMatsestaHeroData,
  arendaKvartiryMatsestaBenefitsData,
  arendaKvartiryMatsestaComparisonData,
  arendaKvartiryMatsestaInfoCardsData,
  arendaKvartiryMatsestaProcessStepsData,
  arendaKvartiryMatsestaTestimonialsData,
  arendaKvartiryMatsestaFaqData,
  arendaKvartiryMatsestaGalleryData,
} from '@/lib/arenda-kvartiry-matsesta-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryMatsestaPage() {
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
        <Hero {...arendaKvartiryMatsestaHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Отберите лучшие квартиры за минуту!"
          description="Укажите формат, район, условия и цену — и сразу увидите квартиры, которые соответствуют вашим требованиям."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры с нами?"
          benefits={arendaKvartiryMatsestaBenefitsData}
        />

        <ComparisonTable 
          title="Условия разные — и результат тоже"
          description="Разница между комфортным заселением и проблемами после сделки — в деталях договора и проверке квартиры. Разберитесь в деталях, прежде чем выбирать!"
          data={arendaKvartiryMatsestaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle="Выбирайте жильё в Мацесте осознанно"
          mainDescription="Сравнивайте районы, оценивайте реальные условия проживания, планируйте бюджет и принимайте решение без спешки — так вы сразу выберете удобный и практичный вариант."
          cards={arendaKvartiryMatsestaInfoCardsData}
        />

        <ProcessSteps
          title="Всего 3 шага к аренде квартиры в Мацесте!"
          steps={arendaKvartiryMatsestaProcessStepsData}
          ctaText="Успейте выбрать жильё — лучшие квартиры уходят за 3–7 дней!"
          ctaButtonText="Оставить заявку и посмотреть подходящие квартиры сегодня"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Не тратьте недели на просмотр объявлений!"
          description="Оставьте контакт — пришлём доступные варианты квартир, где всё понятно по стоимости, срокам въезда и правилам проживания."
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
          items={arendaKvartiryMatsestaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'С 2016 года мы помогаем людям снимать квартиры в Мацесте так, чтобы заселение проходило спокойно и без переплат. Более 1700 клиентов уже нашли жильё быстрее и безопаснее, чем при самостоятельном поиске.',
            'Мы сопровождаем вас от первого запроса до заселения, чтобы вы не переживали из-за «подводных камней», не сталкивались с неожиданными отказами и не теряли время на квартиры, которых по факту нет.',
            'Мы заранее просчитываем финансовые и организационные моменты, чтобы вы экономили деньги, время и силы, получая комфортное жильё, с выгодной ценой и адекватным владельцем.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryMatsestaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартир"
          items={arendaKvartiryMatsestaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте контакты — подберём квартиры в Мацесте с учётом вашего бюджета и сроков проживания. Сэкономьте до 5–7 дней поиска!"
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

