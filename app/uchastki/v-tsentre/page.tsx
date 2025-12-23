"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { VTsentreUchastkiSearchForm } from '@/components/VTsentreUchastkiSearchForm';
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
  vTsentreUchastkiHeroData,
  vTsentreUchastkiBenefitsData,
  vTsentreUchastkiComparisonData,
  vTsentreUchastkiInfoMain,
  vTsentreUchastkiProcessStepsData,
  vTsentreUchastkiPaymentMethodsData,
  vTsentreUchastkiLeadForm,
  vTsentreUchastkiTestimonialsData,
  vTsentreUchastkiFaqData,
  vTsentreUchastkiGalleryData,
} from '@/lib/v-tsentre-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function VTsentreUchastkiPage() {
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
        <Hero {...vTsentreUchastkiHeroData} onCtaClick={openModal} />

        <VTsentreUchastkiSearchForm
          title="Найдите подходящий участок за минуту!"
          description="Отфильтруйте по параметрам — вы сразу увидите только нужные проверенные участки — по назначению, цене и локации."
          buttonText="Показать участки под мои условия"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в центре Сочи с нами?"
          benefits={vTsentreUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Почему 870+ покупателей выбирают этот подход при покупке участка?"
          description="Продажа участков в центре Сочи выглядит одинаково только на словах — на практике разница в подходе решает, получите вы ликвидную землю или потеряете деньги и время."
          data={vTsentreUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Сравните участки в центре Сочи в каталоге!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Выбирайте только актуальные варианты с ценой, статусом земли и расстоянием до моря — без устаревших объявлений и скрытых ограничений!
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
                    Показать подходящие участки
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <InfoSection
          mainTitle={vTsentreUchastkiInfoMain.mainTitle}
          mainDescription={vTsentreUchastkiInfoMain.mainDescription}
          cards={vTsentreUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите землю в центре в 3 шага!"
          steps={vTsentreUchastkiProcessStepsData}
          ctaText="Откладывая выбор, вы теряете ликвидные варианты и платите дороже за те же метры. Оставьте заявку на бесплатную консультацию!"
          ctaButtonText="Начать подбор участка сейчас"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты!"
          methods={vTsentreUchastkiPaymentMethodsData}
          ctaText="Ограниченные способы оплаты быстро закрывают доступ к лучшим участкам. Купите выгоднее уже сегодня!"
          ctaButtonText="Получить консультацию по оплате"
          onCtaClick={openModal}
        />

        <ContactForm
          title={vTsentreUchastkiLeadForm.title}
          description={vTsentreUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={vTsentreUchastkiLeadForm.phoneLabel}
          submitButtonText={vTsentreUchastkiLeadForm.buttonText}
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
          description="Посмотрите фото и видео и оцените подъезды, уклон, окружение и плотность застройки!"
          items={vTsentreUchastkiGalleryData}
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
                Компания формирует экосистему, где клиенты повышают качество жизни и получают реальную выгоду от покупки, партнёры растут финансово и выстраивают долгосрочные отношения, а сотрудники стабильно зарабатывают, развиваются и работают в сильной команде с едиными ценностями и культурным кодом.
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
                Взвесьте плюсы и минусы до покупки!
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={vTsentreUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке участка в центральном районе"
          items={vTsentreUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Ликвидные участки в Сочи разбирают быстро — не откладывайте. При обращении сегодня вы получите персональный разбор и фиксацию цены. Упустите момент — заплатите дороже и потеряете варианты."
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

