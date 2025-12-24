"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  gostinitsyHeroData,
  gostinitsyBenefitsData,
  gostinitsyComparisonData,
  gostinitsyInfoCardsData,
  gostinitsyProcessStepsData,
  gostinitsyPaymentMethodsData,
  gostinitsyTestimonialsData,
  gostinitsyFaqData,
  gostinitsyGalleryData,
} from '@/lib/gostinitsy-data';
import { contactInfoData } from '@/lib/page-data';

export default function GostinitsyPage() {
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
        <Hero {...gostinitsyHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Найдите гостиницу за пару кликов!"
          description="Подберите подходящую гостиницу быстро и удобно — проверенные объекты с актуальными ценами."
          objectTypeLabel=""
          objectTypes={[{ value: '', label: '' }]}
          districtLabel="Район города"
          districts={[
            { value: '', label: 'Не важно' },
            { value: 'central', label: 'Центральный' },
            { value: 'hostinsky', label: 'Хостинский' },
            { value: 'mamayka', label: 'Мамайка' },
            { value: 'adler', label: 'Адлер' },
            { value: 'krasnaya-polyana', label: 'Красная Поляна' },
            { value: 'matsesta', label: 'Мацеста' },
            { value: 'dagomys', label: 'Дагомыс' },
            { value: 'bytkha', label: 'Бытха' },
          ]}
          areaLabel="Площадь"
          areaPlaceholder="Например, 500-1000"
          priceLabel="Цена"
          pricePlaceholder="Например, 25 000 000 - 200 000 000"
          additionalLabel="Этажность и кол-во номеров (укажите в комментарии)"
          additionalPlaceholder="Например: Этажность - 3-5, Кол-во номеров - 10-20"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать гостиницы с нами?"
          benefits={gostinitsyBenefitsData}
        />

        <ComparisonTable 
          title="Сравните варианты — с нами покупка проще!"
          description="Наш подбор работает иначе: мы учитываем доходность, популярность локации и ваши цели, чтобы каждая гостиница была выгодной."
          data={gostinitsyComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle="Купите гостиницу в Сочи с высоким доходом"
          mainDescription="Выбирайте гостиницы с высокой загрузкой, проверенной репутацией и полностью чистыми документами. Сделку можно закрыть за 1–2 дня, а доход будет стабильным до 15% годовых. Сэкономьте недели на проверках и оформлении, и начинайте зарабатывать сразу после покупки."
          cards={gostinitsyInfoCardsData}
        />

        <ProcessSteps
          title="Купите гостиницу в Сочи за 3 простых шага!"
          steps={gostinitsyProcessStepsData}
          ctaText="В Сочи свободные гостиницы исчезают за дни — оставьте заявку и получите подборку объектов для покупки!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты гостиницы!"
          methods={gostinitsyPaymentMethodsData}
          ctaText="Выберите удобный способ оплаты и начните инвестировать в гостиницу уже сегодня!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Не теряйте время на поиск объектов!"
          description="В Сочи востребованные гостиницы разбирают быстро. Оставьте заявку и получите актуальный список гостиниц с гарантией чистых документов."
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
          description="Посмотрите, как выглядят гостиницы в Сочи, их номера и территория, чтобы заранее оценить объекты."
          items={gostinitsyGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы помогаем инвесторам и предпринимателям выбирать гостиницы в Сочи.',
            'С 2016 года наши клиенты получают доступ только к проверенным гостиницам, экономят время на проверках документов и лицензий, а оформление сделки проходит быстро и комфортно. Каждый объект мы проверяем лично, чтобы вы могли принимать решение с полной уверенностью.',
            'Наша цель — чтобы покупка гостиницы была удобной и понятной. Вы выбираете объект для инвестиций или бизнеса, а мы заботимся о том, чтобы каждая сделка прошла гладко и без неожиданных проблем.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={gostinitsyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о гостиницах"
          items={gostinitsyFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не упустите свой объект в Сочи! Оставьте заявку и сразу получите список гостиниц готовых к покупке."
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

