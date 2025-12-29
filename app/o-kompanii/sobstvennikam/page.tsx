"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProcessSteps } from '@/components/ProcessSteps';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { InfoSection } from '@/components/InfoSection';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  sobstvennikamHeroData,
  sobstvennikamProcessStepsData,
  sobstvennikamExpertBenefitsData,
  sobstvennikamInvestmentData,
  sobstvennikamAboutData,
  sobstvennikamInfoCardsData,
  sobstvennikamTestimonialsData,
} from '@/lib/sobstvennikam-data';
import { contactInfoData } from '@/lib/page-data';

export default function SobstvennikamPage() {
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
        <Hero {...sobstvennikamHeroData} onCtaClick={openModal} />

        <ProcessSteps
          title="Узнайте, как мы продадим вашу недвижимость"
          steps={sobstvennikamProcessStepsData}
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Выберите персонального эксперта для продажи недвижимости
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                {sobstvennikamExpertBenefitsData.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <p className="text-sm md:text-base text-gray-700">{benefit.title}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 text-center">
                <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-700">
                  Пока другие тратят месяцы на посредников, наши собственники получают сопровождение стратега и выход в деньги. Защитите активы и продайте квартиру дистанционно!
                </p>
                <button
                  onClick={openModal}
                  className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                >
                  Выбрать эксперта
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Используйте наши инвестиционные рекомендации
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {sobstvennikamInvestmentData.map((item, index) => (
                  <div key={index} className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <About
          title={sobstvennikamAboutData.title}
          paragraphs={sobstvennikamAboutData.paragraphs}
        />

        <InfoSection
          mainTitle="Продайте выгодно вашу жилую недвижимость в Сочи"
          mainDescription="Получите объективный расчёт стоимости и найдите надёжного покупателя без лишних затрат на маркетинг. Профессиональные услуги для собственников недвижимости включают подготовку объекта к сделке и запуск рекламы. Сэкономьте время на переговорах."
          cards={sobstvennikamInfoCardsData}
        />

        <ContactForm
          title="Оставьте заявку для выгодной сделки!"
          description="Узнайте, как быстро продать или сдать вашу недвижимость в Сочи, получив доступ к актуальной базе активных покупателей и инвесторов. Наш эксперт проведёт оценку вашего объекта и предложит готовую стратегию продажи с гарантией юридической безопасности!"
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить консультацию для собственников"
          whatsappButtonText="Написать WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Testimonials
          title="Отзывы"
          testimonials={sobstvennikamTestimonialsData}
        />

        <ContactForm
          title="Свяжитесь с нами прямо сейчас!"
          description="Не откладывайте решение — инвесторы ищут объекты уже сегодня. Оставьте заявку, чтобы получить персональную стратегию продвижения и первыми узнать о предложениях, которые подходят под ваши задачи и сроки."
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

