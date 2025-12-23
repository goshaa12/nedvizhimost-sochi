"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { GoryUchastkiSearchForm } from '@/components/GoryUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { ContactForm } from '@/components/ContactForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  goryUchastkiHeroData,
  goryUchastkiBenefitsData,
  goryUchastkiComparisonData,
  goryUchastkiInfoMain,
  goryUchastkiProcessStepsData,
  goryUchastkiPaymentMethodsData,
  goryUchastkiLeadForm,
  goryUchastkiTestimonialsData,
  goryUchastkiFaqData,
} from '@/lib/gory-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function GoryUchastkiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...goryUchastkiHeroData} onCtaClick={openModal} />

        <GoryUchastkiSearchForm
          title="Найдите участок в горах за минуту!"
          description="Хватит разбираться в сомнительных вариантах и пустых показах. Оставьте в выдаче только участки, которые подходят под покупку и использование!"
          buttonText="Показать результаты по моим параметрам"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему купить участок в горах выгоднее с нами?"
          benefits={goryUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Участок в горах: где теряют деньги, а где экономят?"
          description="При выборе участка ИЖС в горах многие теряют 10–15% и недели времени! Мы покажем выгодные условия с расчётом и способы сэкономить на сделке!"
          data={goryUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Изучите актуальный каталог участков в горах Сочи!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Смотрите актуальные карточки с ценой, статусом и коммуникациями, чтобы сразу сравнить участки и принять решение без лишних вопросов!
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото участка</strong> (1 главное фото)</li>
                  <li>• <strong>Название или обозначение участка</strong> (например, «Участок в Адлере», «ИЖС 6 соток»)</li>
                  <li>• <strong>Площадь участка (сотки)</strong></li>
                  <li>• <strong>Статус категории земли / ВРИ</strong> (ИЖС, ЛПХ, СНТ)</li>
                  <li>• <strong>Рельеф</strong> (ровный / уклон — важно для участков)</li>
                  <li>• <strong>Коммуникации</strong> (свет, вода, канализация — иконками)</li>
                  <li>• <strong>Дата добавления / актуальности</strong></li>
                  <li>• <strong>Цена</strong> (крупно, выделено)</li>
                  <li>• <strong>Иконка расстояния до моря</strong> (метры или км)</li>
                  <li>• Иконки <strong>[Избранное]</strong> и <strong>[Сравнить]</strong></li>
                </ul>
                <div className="mt-6 md:mt-8 text-center">
                  <button
                    onClick={openModal}
                    className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                  >
                    Показать больше подходящих участков
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <InfoSection
          mainTitle={goryUchastkiInfoMain.mainTitle}
          mainDescription={goryUchastkiInfoMain.mainDescription}
          cards={goryUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Всего 3 шага до вашего участка в горах!"
          steps={goryUchastkiProcessStepsData}
          ctaText="Не откладывайте выбор — посмотрите участки в горах, которые можно покупать и оформлять уже сейчас!"
          ctaButtonText="Получить подборку сейчас"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выбирайте удобный способ оплаты участка в горах"
          methods={goryUchastkiPaymentMethodsData}
          ctaText="Выберите формат оплаты и сразу узнайте итоговую цену участка, график платежей и доступные варианты!"
          ctaButtonText="Рассчитать условия покупки"
          onCtaClick={openModal}
        />

        <ContactForm
          title={goryUchastkiLeadForm.title}
          description={goryUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={goryUchastkiLeadForm.phoneLabel}
          submitButtonText={goryUchastkiLeadForm.buttonText}
          whatsappButtonText="Написать в WhatsApp"
          contactInfo={[]}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Фото и видеогалерея
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Оцените рельеф, подъезд, окружение и виды, чтобы понять, подходит ли локация ещё до поездки!
              </p>
            </div>
          </div>
        </section> */}

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Сертификаты, дипломы и награды
              </h2>
            </div>
          </div>
        </section> */}

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                О нас
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                Мы развиваем компанию, ориентированную на результат и ценность для людей. Клиенты получают взвешенные и выгодные решения, партнёры — устойчивый рост и долгосрочное сотрудничество, сотрудники — достойный доход, развитие и сильную команду с едиными ценностями.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Нам доверяют
              </h2>
            </div>
          </div>
        </section> */}

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Разберитесь в рынке до покупки!
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={goryUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке участка в горах"
          items={goryUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Пока лучшие варианты не ушли, зафиксируйте для себя доступные предложения в горах Сочи. Вам проще выбрать сейчас, чем жалеть о потерянной возможности."
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

