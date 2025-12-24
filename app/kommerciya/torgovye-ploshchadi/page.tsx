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
  torgovyePloshchadiHeroData,
  torgovyePloshchadiBenefitsData,
  torgovyePloshchadiComparisonData,
  torgovyePloshchadiInfoCardsData,
  torgovyePloshchadiProcessStepsData,
  torgovyePloshchadiPaymentMethodsData,
  torgovyePloshchadiTestimonialsData,
  torgovyePloshchadiFaqData,
  torgovyePloshchadiGalleryData,
} from '@/lib/torgovye-ploshchadi-data';
import { contactInfoData } from '@/lib/page-data';

export default function TorgovyePloshchadiPage() {
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
        <Hero {...torgovyePloshchadiHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Найдите площадь за минуту!"
          description="Сэкономьте дни на самостоятельных поисках — фильтр сразу исключит неподходящие варианты и завышенные цены!"
          objectTypeLabel="Тип"
          objectTypes={[
            { value: '', label: 'Не важно' },
            { value: 'otdelnoe-zdanie', label: 'Отдельное здание' },
            { value: 'pavilon', label: 'Павильон' },
            { value: 'pomeshchenie-v-tc', label: 'Помещение в ТЦ' },
            { value: 'pomeshchenie-v-zhd', label: 'Помещение в ЖД' },
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
          areaPlaceholder="Например, 50-100"
          priceLabel="Цена"
          pricePlaceholder="Например, 5 000 000 - 10 000 000"
          additionalLabel="Ремонт и этаж (укажите в комментарии)"
          additionalPlaceholder="Например: Ремонт - Эконом, Этаж - 1-3"
          buttonText="Показать торговые площади"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать торговые площади с нами?"
          benefits={torgovyePloshchadiBenefitsData}
        />

        <ComparisonTable 
          title="Как подход к выбору торговой площади определяет доход и риски?"
          description="На рынке торговых площадей в Сочи одинаково выглядящие объекты могут отличаться по доходности на 10–15% — сравните условия, чтобы понимать, что именно вы выбираете."
          data={torgovyePloshchadiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
              >
                Открыть полный каталог площадей
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle="Торговая площадь в Сочи — не метры, а доход"
          mainDescription="При выборе торговой площади в Сочи цена и метраж не дают полной картины. Доход формируют локация, сезонный трафик, фасад и назначение помещения. Одинаковые объекты могут отличаться по выручке до 20%, если не учитывать поток и бизнес."
          cards={torgovyePloshchadiInfoCardsData}
        />

        <ProcessSteps
          title="Купите торговую площадь в Сочи всего в 3 шага!"
          steps={torgovyePloshchadiProcessStepsData}
          ctaText="Ошибка с выбором стоит месяцев простоя и ежедневных расходов. Закажите быстрый разбор сейчас и заработайте в сезон!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте удобный способ оплаты!"
          methods={torgovyePloshchadiPaymentMethodsData}
          ctaText="Формат расчёта определяет, какие объекты можно закрепить сразу. Узнайте подходящий способ оплаты и снизьте стоимость уже на старте!"
          ctaButtonText="Посмотреть доступные варианты"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Получите экспертное сопровождение сделки!"
          description="Запрос используется для первичной ориентации по объектам и форматам оплаты. Сопровождение сделки и юридическое подключение согласуются отдельно. Действуйте, пока подходящие объекты не ушли другим!"
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
          items={torgovyePloshchadiGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём и развиваем компанию на взаимовыгодном сотрудничестве. Клиентам — предоставляем качество жизни и выгоду от покупок, партнёрам — стабильный рост и надёжное сотрудничество, сотрудникам — достойный доход, развитие и работу в команде с общими ценностями.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={torgovyePloshchadiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о торговых площадях"
          items={torgovyePloshchadiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Снизьте риск ошибки и сэкономьте время — получите подбор коммерческой площади и план покупки уже при первом обращении!"
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
