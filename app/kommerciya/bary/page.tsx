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
  baryHeroData,
  baryBenefitsData,
  baryComparisonData,
  baryInfoCardsData,
  baryProcessStepsData,
  baryPaymentMethodsData,
  baryTestimonialsData,
  baryFaqData,
  baryGalleryData,
} from '@/lib/bary-data';
import { contactInfoData } from '@/lib/page-data';

export default function BaryPage() {
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
        <Hero {...baryHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Сформируйте свою подборку!"
          description="Настройте поиск так, чтобы не тратить время на неподходящие варианты."
          objectTypeLabel=""
          objectTypes={[{ value: '', label: '' }]}
          districtLabel="Район города"
          districts={[
            { value: '', label: 'Не важно' },
            { value: 'central', label: 'Центр Сочи' },
            { value: 'adler', label: 'Адлер' },
            { value: 'krasnaya-polyana', label: 'Красная Поляна' },
            { value: 'hostinsky', label: 'Хостинский' },
            { value: 'mamayka', label: 'Мамайка' },
            { value: 'matsesta', label: 'Мацеста' },
            { value: 'dagomys', label: 'Дагомыс' },
            { value: 'bytkha', label: 'Бытха' },
          ]}
          areaLabel="Площадь (кухня + зал)"
          areaPlaceholder="Например, 50-100"
          priceLabel="Цена"
          pricePlaceholder="Например, 5 000 000 - 10 000 000"
          additionalLabel="Этажность и Кол-во посадочных мест/барных зон (укажите в комментарии)"
          additionalPlaceholder="Например: Этажность - 1 этаж, Посадочных мест - 30-60"
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать бары с нами?"
          benefits={baryBenefitsData}
        />

        <ComparisonTable 
          title="Разные подходы — разные цифры"
          description="На практике один и тот же бар может обойтись дороже и запускаться дольше — сравнение помогает держать ситуацию под контролем."
          data={baryComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle="Выбирайте бар в Сочи осознанно"
          mainDescription="Покупка бизнеса требует проверки лимитов электричества (от 30 кВт) и наличия отдельной вытяжки выше конька крыши. Чтобы купить бар в Сочи без риска закрытия, важно заранее исключить конфликты с жильцами из-за шума и запахов кухни. Технические ошибки часто приводят к предписаниям от надзорных органов и невозможности запустить ваш бар."
          cards={baryInfoCardsData}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашему бару в Сочи!"
          steps={baryProcessStepsData}
          ctaText="Ликвидные бары продаются быстро, особенно в сезон. Отложите выбор — заплатите больше. Зафиксируйте цену сейчас!"
          ctaButtonText="Оставить заявку и получить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте удобные способы оплаты бара!"
          methods={baryPaymentMethodsData}
          ctaText="Зафиксируйте удобный способ оплаты и получите расчёт сделки сегодня!"
          ctaButtonText="Выбрать выгодный способ оплаты"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Получите расчёт доходности бара до покупки!"
          description="За 10 минут посчитайте цену объекта, потенциальную выручку и возможные риски — бесплатно!"
          contactInfo={[]}
          submitButtonText="Получить расчёт"
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
          items={baryGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'С 2016 года мы сопровождаем сделки с коммерческой недвижимостью, чтобы вы покупали рабочие объекты и не теряли деньги на ошибках — так более 870 клиентов сократили путь до запуска и сэкономили бюджет.',
            'Мы берём на себя сложные проверки и расчёты, поэтому вместо сомнений вы видите реальную картину по объекту и принимаете решение без нервов.',
            'Мы контролируем ключевые риски сделки, чтобы вы не столкнулись с проблемами по статусу помещения, документам или завышенной цене.',
            'Убедитесь в этом сами — посмотрите, какие компании и проекты нам уже доверяют.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={baryTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке бара"
          items={baryFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хорошие барные помещения уходят быстро. Свяжитесь сейчас — вы сразу поймёте, с чего начать, зафиксируете варианты и не переплатите за ошибочный выбор!"
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

