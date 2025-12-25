"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
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
  restoranyHeroData,
  restoranyBenefitsData,
  restoranyComparisonData,
  restoranyInfoCardsData,
  restoranyProcessStepsData,
  restoranyTestimonialsData,
  restoranyFaqData,
  restoranyGalleryData,
} from '@/lib/restorany-data';
import { contactInfoData } from '@/lib/page-data';

export default function RestoranyPage() {
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
        <Hero {...restoranyHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Используйте фильтр и отберите прибыльные варианты"
          description="Отфильтруйте рестораны по району, этажности, площади и цене, чтобы увидеть только те варианты, которые реально подходят под ваш бюджет и цели."
          objectTypeLabel=""
          objectTypes={[{ value: '', label: '' }]}
          districtLabel="Район города"
          districts={[
            { value: '', label: 'Не важно' },
            { value: 'central', label: 'Центральный' },
            { value: 'hostinsky', label: 'Хостинский' },
            { value: 'mamayka', label: 'Мамайка' },
            { value: 'adler', label: 'Адлер' },
            { value: 'matsesta', label: 'Мацеста' },
            { value: 'dagomys', label: 'Дагомыс' },
            { value: 'bytkha', label: 'Бытха' },
          ]}
          areaLabel="Площадь (м²)"
          areaPlaceholder="Мин — Макс"
          priceLabel="Цена (₽)"
          pricePlaceholder="Мин — Макс"
          additionalLabel="Этажность/уровень входа и посадочных мест (укажите в комментарии)"
          additionalPlaceholder="Например: Этажность - 1 этаж, Посадочных мест - 30-60"
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать ресторан с нами?"
          benefits={restoranyBenefitsData}
        />

        <ComparisonTable 
          title="Не рискуйте миллионами — купите ресторан правильно"
          description="Профессиональный подбор снижает риски и позволяет сэкономить до 1,2 млн ₽. Самостоятельный поиск часто обходится дороже — сравните сами!"
          data={restoranyComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle="Найдите ресторан для покупки в Сочи"
          mainDescription="Выберите формат, который начнёт зарабатывать сразу после сделки. Получите доступ к объектам, где уже просчитана посадка, трафик и кухня. Так проще купить готовый ресторан или кафе в Сочи, понять реальную цену и подобрать недвижимость под ресторан без лишних рисков."
          cards={restoranyInfoCardsData}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к ресторану в Сочи!"
          steps={restoranyProcessStepsData}
          ctaText="Начните с консультации — получите план покупки ресторана в Сочи."
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку!"
          description="Получите подборку помещений с актуальными ценами, фото и видео. Вы быстро найдёте ресторан под свои цели и оформите сделку без лишних рисков. Действуйте прямо сейчас, пока лучшие рестораны Сочи не разобрали!"
          contactInfo={[]}
          submitButtonText="Получить каталог сейчас"
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
          items={restoranyGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'С 2016 года при нашем участии в Сочи было приобретено более 120 ресторанов и кафе. За счёт точного подбора помещений и глубокой проверки документов клиенты избегали переплат до 2 млн ₽ и затяжных согласований.',
            'Каждый объект проходит оценку локации, инженерных коммуникаций и фактического состояния, что позволяет закрывать сделки спокойно и без неожиданных последствий.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={restoranyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о ресторанах Сочи"
          items={restoranyFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не откладывайте решение — подходящие рестораны в Сочи быстро уходят. Оставьте заявку сейчас: вам подберут варианты под бюджет и формат, пока лучшие рестораны ещё доступны."
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

