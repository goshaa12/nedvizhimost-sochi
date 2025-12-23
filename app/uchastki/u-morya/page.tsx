"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UMoryaUchastkiSearchForm } from '@/components/UMoryaUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { ContactForm } from '@/components/ContactForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  uMoryaUchastkiHeroData,
  uMoryaUchastkiBenefitsData,
  uMoryaUchastkiComparisonData,
  uMoryaUchastkiInfoMain,
  uMoryaUchastkiProcessStepsData,
  uMoryaUchastkiPaymentMethodsData,
  uMoryaUchastkiLeadForm,
  uMoryaUchastkiTestimonialsData,
  uMoryaUchastkiFaqData,
  uMoryaUchastkiGalleryData,
} from '@/lib/u-morya-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function UMoryaUchastkiPage() {
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
        <Hero {...uMoryaUchastkiHeroData} onCtaClick={openModal} />

        <UMoryaUchastkiSearchForm
          title="Отсейте неподходящие варианты по ключевым параметрам!"
          description="Задайте цель, бюджет и условия — фильтр покажет только участки, где можно покупать и строить сейчас!"
          buttonText="Показать подходящие участки у моря"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему купить участок на берегу выгоднее с нами?"
          benefits={uMoryaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Чем отличается выбор земельного участка у моря и почему это важно?"
          description="Один неверный выбор — и вы теряете деньги, время и ликвидность, даже не заметив момента ошибки. Сравните подходы и исключите запреты после сделки!"
          data={uMoryaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Посмотрите только актуальные участки у моря в Сочи в каталоге!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Смотрите актуальные участки у моря в Сочи — с точной ценой и коммуникациями, чтобы выбрать участок с выгодой до +10% прямо сейчас!
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
                    Показать доступные участки у моря
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <InfoSection
          mainTitle={uMoryaUchastkiInfoMain.mainTitle}
          mainDescription={uMoryaUchastkiInfoMain.mainDescription}
          cards={uMoryaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к покупке земельного участка у моря!"
          steps={uMoryaUchastkiProcessStepsData}
          ctaText="Пока решение откладывают, ликвидные предложения уходят. Свяжитесь сейчас, чтобы получить подборку доступных вариантов!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты участка у моря!"
          methods={uMoryaUchastkiPaymentMethodsData}
          ctaText="Выберите удобный способ оплаты и зафиксируйте условия без переплат."
          ctaButtonText="Получить варианты оплаты сейчас"
          onCtaClick={openModal}
        />

        <ContactForm
          title={uMoryaUchastkiLeadForm.title}
          description={uMoryaUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={uMoryaUchastkiLeadForm.phoneLabel}
          submitButtonText={uMoryaUchastkiLeadForm.buttonText}
          whatsappButtonText="Написать в WhatsApp"
          contactInfo={[]}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите фото и видео, чтобы сразу оценить рельеф, окружение и подъезд — без выездов и пустых показов."
          items={uMoryaUchastkiGalleryData}
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Сертификаты, дипломы и награды
              </h2>
            </div>
          </div>
        </section> */}

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                О нас
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                Мы развиваем компанию, где клиенты принимают взвешенные решения и получают реальную выгоду от каждой покупки, партнёры достигают устойчивых финансовых результатов и строят долгосрочное сотрудничество, а сотрудники растут профессионально, зарабатывают достойно и работают в сильной команде с едиными ценностями.
              </p>
            </div>
          </div>
        </section>

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
                Изучайте рынок и покупайте землю без финансовых просчётов!
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={uMoryaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке участка у моря"
          items={uMoryaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите план, сопровождение и подходящие участки уже сегодня — избавьтесь от долгих поисков. Успейте, пока лучшие варианты не ушли другим!"
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

