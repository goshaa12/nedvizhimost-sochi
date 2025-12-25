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
  kafeHeroData,
  kafeBenefitsData,
  kafeComparisonData,
  kafeInfoCardsData,
  kafeProcessStepsData,
  kafePaymentMethodsData,
  kafeTestimonialsData,
  kafeFaqData,
  kafeGalleryData,
} from '@/lib/kafe-data';
import { contactInfoData } from '@/lib/page-data';

export default function KafePage() {
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
        <Hero {...kafeHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Подберите кафе по вашим критериям!"
          description="Задайте свои требования — и подберём помещения для кафе, готовые к запуску бизнеса."
          objectTypeLabel="Формат размещения"
          objectTypes={[
            { value: '', label: 'Не важно' },
            { value: 'standalone', label: 'Отдельностоящее' },
            { value: 'first-line', label: '1 линия' },
            { value: 'shopping-center', label: 'В ТЦ' },
            { value: 'residential', label: 'В жилом доме' },
          ]}
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
          areaLabel="Площадь (м²)"
          areaPlaceholder="Например, 50-100"
          priceLabel="Цена аренды, ₽"
          pricePlaceholder="Например, 100 000 - 300 000"
          additionalLabel="Этаж и дополнительные требования (укажите в комментарии: 1 этаж / Цоколь / Мансарда, Летняя веранда, У моря)"
          additionalPlaceholder="Например: Этаж - 1 этаж, Летняя веранда, У моря"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать кафе с нами?"
          benefits={kafeBenefitsData}
        />

        <ComparisonTable 
          title="Убедитесь, что наши сделки надёжнее!"
          description="С нами каждое помещение готово к открытию: площадь, планировка и коммуникации полностью соответствуют требованиям кафе."
          data={kafeComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={kafeInfoCardsData}
        />

        <ProcessSteps
          title="Оформите кафе в Сочи за 3 простых шага!"
          steps={kafeProcessStepsData}
          ctaText="В Сочи объекты для кафе с юридически чистой историей разбирают за дни — оставьте заявку и получите подборку!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите помещения под кафе любым удобным способом!"
          methods={kafePaymentMethodsData}
          ctaText="Выберите способ оплаты и сразу получите расчёт по покупке помещения под кафе!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Ищете помещение под кафе в Сочи?"
          description="Свободные объекты исчезают за дни. Оставьте заявку и получите проверенный список кафе с юридической чистотой."
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
          description="Смотрите фото помещений под кафе в Сочи и оцените планировку перед визитом."
          items={kafeGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы помогаем инвесторам и предпринимателям выбирать помещения под кафе.',
            'С 2016 года наши клиенты получают доступ только к проверенным вариантам, экономят время на проверках документов и коммуникаций, а оформление сделки проходит быстро и комфортно. Каждый объект мы проверяем лично, чтобы вы могли принимать решение с полной уверенностью.',
            'Наша цель — чтобы покупка помещения под кафе была удобной и понятной. Вы выбираете локацию для бизнеса, а мы заботимся о том, чтобы каждая сделка прошла гладко и без неожиданных проблем.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kafeTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о кафе"
          items={kafeFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не теряйте время на поиск кафе в Сочи! Напишите и сразу получите подборку для покупки."
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

