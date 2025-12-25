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
  skladskiePomeshcheniyaHeroData,
  skladskiePomeshcheniyaBenefitsData,
  skladskiePomeshcheniyaComparisonData,
  skladskiePomeshcheniyaInfoCardsData,
  skladskiePomeshcheniyaProcessStepsData,
  skladskiePomeshcheniyaPaymentMethodsData,
  skladskiePomeshcheniyaTestimonialsData,
  skladskiePomeshcheniyaFaqData,
  skladskiePomeshcheniyaGalleryData,
} from '@/lib/skladskie-pomeshcheniya-data';
import { contactInfoData } from '@/lib/page-data';

export default function SkladskiePomeshcheniyaPage() {
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
        <Hero {...skladskiePomeshcheniyaHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Отфильтруйте склады по критериям"
          description="Задайте условия — получите список складов с удобной логистикой и готовностью к работе."
          objectTypeLabel="Тип"
          objectTypes={[
            { value: '', label: 'Не важно' },
            { value: 'warehouse', label: 'Складское' },
            { value: 'logistics', label: 'Логистическое' },
            { value: 'production-warehouse', label: 'Производственно-складское' },
            { value: 'cold-storage', label: 'С холодным хранением' },
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
          areaPlaceholder="Например, 100-500"
          priceLabel="Цена аренды, ₽"
          pricePlaceholder="Например, 200 000 - 500 000"
          additionalLabel="Формат размещения, Этаж и дополнительные требования (укажите в комментарии: Отдельностоящее / В промышленной зоне / В бизнес-парке, 1 этаж / Цоколь, Погрузочные рампы, Охрана и видеонаблюдение)"
          additionalPlaceholder="Например: Формат - В промышленной зоне, Этаж - 1 этаж, Погрузочные рампы, Охрана и видеонаблюдение"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать склад с нами?"
          benefits={skladskiePomeshcheniyaBenefitsData}
        />

        <ComparisonTable 
          title="Убедитесь в безопасности сделки!"
          description="С нами каждый склад готов к работе: площадь, высота потолков и коммуникации подходят под хранение и логистику."
          data={skladskiePomeshcheniyaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={skladskiePomeshcheniyaInfoCardsData}
        />

        <ProcessSteps
          title="Купите кафе в Сочи за 3 простых шага"
          steps={skladskiePomeshcheniyaProcessStepsData}
          ctaText="Готовые к работе склады в Сочи уходят за дни — оставьте заявку и получите актуальный список объектов!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выбирайте выгодный способ оплаты склада"
          methods={skladskiePomeshcheniyaPaymentMethodsData}
          ctaText="Выберите удобный вариант оплаты и получите точный расчёт!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Нужен склад в Сочи?"
          description="Только актуальные объекты с чистой юридикой. Оставьте заявку и получите список свободных складов."
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
          description="Ознакомьтесь с фото складских помещений в Сочи и планировкой до просмотра."
          items={skladskiePomeshcheniyaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы помогаем инвесторам и предпринимателям выбирать складские помещения в Сочи. С нами покупка склада становится простой, прозрачной и безопасной.',
            'С 2016 года наши клиенты получают доступ только к проверенным объектам, экономят время на проверке документов и коммуникаций, а оформление сделки проходит быстро и без лишних сложностей. Каждый склад мы проверяем лично, чтобы вы могли принимать решение с полной уверенностью.',
            'Наша цель — сделать покупку склада удобной и понятной. Вы выбираете локацию и параметры помещения для бизнеса, а мы заботимся о том, чтобы каждая сделка прошла гладко и без неожиданных проблем.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={skladskiePomeshcheniyaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о складах"
          items={skladskiePomeshcheniyaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хватит тратить время на поиск! Оставьте заявку и получите список складов, готовых к использованию."
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

