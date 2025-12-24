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
  ofisyHeroData,
  ofisyBenefitsData,
  ofisyComparisonData,
  ofisyInfoCardsData,
  ofisyProcessStepsData,
  ofisyPaymentMethodsData,
  ofisyTestimonialsData,
  ofisyFaqData,
  ofisyGalleryData,
} from '@/lib/ofisy-i-ofisnye-pomeshcheniya-data';
import { contactInfoData } from '@/lib/page-data';

export default function OfisyPage() {
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
        <Hero {...ofisyHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Используйте фильтр и найдите подходящие офисы и помещения"
          description=""
          objectTypeLabel="Тип"
          objectTypes={[
            { value: '', label: 'Не важно' },
            { value: 'office-building', label: 'Офисное здание' },
            { value: 'private-house', label: 'Частный дом' },
            { value: 'trade-office', label: 'Торг.-офисное' },
            { value: 'office-residential', label: 'Офисно-жилое' },
            { value: 'admin-building', label: 'Админ. здание' },
            { value: 'in-zhk', label: 'Помещение в жк' },
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
          areaLabel="Площадь"
          areaPlaceholder="Например, 50-200"
          priceLabel="Цена"
          pricePlaceholder="Например, 3 000 000 - 15 000 000"
          additionalLabel="Этажность и этаж (укажите в комментарии)"
          additionalPlaceholder="Например: Этажность - 3-5, Этаж - 1-3"
          buttonText="Показать варианты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать офисы с нами?"
          benefits={ofisyBenefitsData}
        />

        <ComparisonTable 
          title="Выберите офис без риска и переплат"
          description="Сэкономьте до 15% при оплате офиса напрямую и не тратьте недели на проверки!"
          data={ofisyComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle="Купите офисное помещение в Сочи"
          mainDescription="Найдите подходящее офисное помещение в Сочи и сэкономьте до 40% времени на поисках. Пройдите проверку документов заранее и получите только безопасные объекты. Используйте возможность купить готовый офис без переплат и долгого согласования с собственниками или застройщиками."
          cards={ofisyInfoCardsData}
        />

        <ProcessSteps
          title="Откройте свой офис в Сочи за 3 шага"
          steps={ofisyProcessStepsData}
          ctaText="Не теряйте время на поиски! Получите подбор проверенных офисов в Сочи уже сегодня!"
          ctaButtonText="Забронировать подбор офиса"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты офиса!"
          methods={ofisyPaymentMethodsData}
          ctaText="Выберите свой способ оплаты и начните оформление офиса прямо сейчас!"
          ctaButtonText="Получить консультацию и расчёт вариантов"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку!"
          description="Оставьте заявку прямо сейчас — получите каталог планировок и актуальные цены за считанные минуты!"
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
          items={ofisyGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы строим компанию, в которой клиенты принимают взвешенные решения и получают выгоду от покупок, партнёры растут финансово и работают на долгую перспективу, а сотрудники стабильно зарабатывают, развиваются в сильной команде.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ofisyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об офисах"
          items={ofisyFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Подберите офис — оставьте контакт, и мы предоставим подходящие объекты с проверенными документами, реальными фото и видео, чтобы вы сделали правильный выбор!"
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

