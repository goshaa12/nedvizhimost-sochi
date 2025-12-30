"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MessageCircle } from 'lucide-react';
import {
  elitnyeKottedzhiHeroData,
  elitnyeKottedzhiBenefitsData,
  elitnyeKottedzhiComparisonData,
  elitnyeKottedzhiInfoSectionData,
  elitnyeKottedzhiProcessStepsData,
  elitnyeKottedzhiPaymentMethodsData,
  elitnyeKottedzhiTestimonialsData,
  elitnyeKottedzhiFaqData,
  elitnyeKottedzhiGalleryData,
} from '@/lib/elitnye-kottedzhi-data';
import { contactInfoData } from '@/lib/page-data';

export default function ElitnyeKottedzhiPage() {
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
        <Hero {...elitnyeKottedzhiHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Откройте для себя топ‑локации Сочи!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Уточните свои критерии — и система покажет только те коттеджи, которые подходят именно вам.
                </p>
              </div>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <p className="mb-6 text-sm md:text-base text-gray-600">
                  Район Сочи: Адлер / Хоста / Кудепста / Центр / Мамайка / Дагомыс / Красная Поляна / Лазаревское
                </p>
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                >
                  Показать подходящие коттеджи
                </button>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Почему выбирают элитные коттеджи вместе с нами?"
          benefits={elitnyeKottedzhiBenefitsData}
        />

        <ComparisonTable
          title=""
          description=""
          data={elitnyeKottedzhiComparisonData}
          usLabel="У нас"
          othersLabel="Другие агентства"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Смотрите лучшие элитные коттеджи в Сочи и Адлере
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Находите дома мечты, отмечайте понравившиеся варианты и выбирайте быстро, без лишних просмотров и согласований.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle="Купите свой элитный коттедж в Сочи!"
          mainDescription="Смотрите коттеджи с видом на море и горы, экономьте до 15% на сделке и будьте уверены в чистоте документов. Закрытые территории, охрана 24/7, камеры по периметру, освещение — вы будете в безопасности!"
          cards={elitnyeKottedzhiInfoSectionData.cards}
        />

        <ProcessSteps
          title="Начните подбор своего элитного коттеджа в Сочи уже сейчас!"
          steps={elitnyeKottedzhiProcessStepsData}
          ctaText="Не откладывайте решение — доступ к лучшим объектам ограничен, а все этапы сделки проходят прозрачно и под контролем специалистов."
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Покупайте элитные коттеджи в Сочи легко!"
          methods={elitnyeKottedzhiPaymentMethodsData}
          ctaText="Сэкономьте время и деньги при покупке элитного коттеджа. Подберите удобный вариант оплаты прямо сейчас!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Свяжитесь с нами и подберите коттедж у моря!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Получите подборку коттеджей с ценами и условиями прямо в мессенджер. Выберите коттедж до того, как заберут другие!
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  Получить каталог
                </button>
                
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Написать в WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <Gallery
          title="Фото и видеогалерея"
          items={elitnyeKottedzhiGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={elitnyeKottedzhiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о коттеджах"
          items={elitnyeKottedzhiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Планируете приобрести коттедж в Сочи и хотите рассмотреть подходящие варианты до начала сезона? Оставьте свои контакты! Специалисты свяжутся с вами в ближайшее время и предложат актуальные коттеджи."
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

