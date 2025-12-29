"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  investitsiiHeroData,
  investitsiiBenefitsData,
  investitsiiProcessStepsData,
  investitsiiComparisonData,
  investitsiiInfoCardsData,
  investitsiiTestimonialsData,
  investitsiiFaqData,
} from '@/lib/investitsii-data';
import { contactInfoData } from '@/lib/page-data';

export default function InvestitsiiPage() {
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
        <Hero {...investitsiiHeroData} onCtaClick={openModal} />

        <BenefitsGrid
          title="Почему инвестировать с нами выгоднее?"
          benefits={investitsiiBenefitsData}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                Смотрите каталог объектов для инвестиций
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600">
                Ознакомьтесь с объектами для инвестиций и выберите подходящие вашему бюджету и целям.
              </p>
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                Выберите премиальный сервис
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {investitsiiProcessStepsData.map((step, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-all">
                  <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable
          title="Выберите стратегию инвестиций в недвижимость"
          description="Покупка — лишь часть инвестиций. Сравните доход от аренды и перепродажи, чтобы определить лучшую стратегию!"
          data={investitsiiComparisonData}
          usLabel="Сдача в аренду"
          othersLabel="Перепродажа"
        />

        <ContactForm
          title="Хотите начать инвестировать?"
          description="Получите персональную консультацию по недвижимости в Сочи, узнайте актуальные объекты и оптимальные варианты инвестиций под ваш бюджет и цели."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить каталог"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <InfoSection
          mainTitle="Выберите прибыльную инвестицию в Сочи"
          mainDescription="Сочи — курорт с развитой инфраструктурой и мягким климатом. Среднегодовой рост цен на недвижимость здесь составляет 10–12%, а популярность аренды обеспечивает стабильный доход. Инвестиции в жильё гарантируют рост капитала каждый год."
          cards={[
            {
              title: 'Почему нас выбирают 90% инвесторов?',
              description: 'Более 90% наших инвесторов возвращаются и делают повторные вложения. Другие агентства часто завышают цены и не проверяют ликвидность объектов, что приводит к потерям до 100 000₽ бюджета. С нами вы получаете проекты с прогнозируемой доходностью.',
            },
            {
              title: 'Оцените объекты перед инвестицией',
              description: 'При выборе объекта для инвестиций учитывайте площадь, очередь сдачи, инфраструктуру и сезонную динамику района. Неправильная оценка этих факторов может снизить доходность до 30%, а правильный анализ позволит точно рассчитать доход и не переплатить.',
            },
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={investitsiiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об инвестициях"
          items={investitsiiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте телефон — получите подборку проектов с расчётом доходности от инвестиций!"
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

