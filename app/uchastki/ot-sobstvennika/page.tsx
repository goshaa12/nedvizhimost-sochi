"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OtSobstvennikaUchastkiSearchForm } from '@/components/OtSobstvennikaUchastkiSearchForm';
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
  otSobstvennikaUchastkiHeroData,
  otSobstvennikaUchastkiBenefitsData,
  otSobstvennikaUchastkiComparisonData,
  otSobstvennikaUchastkiInfoMain,
  otSobstvennikaUchastkiProcessStepsData,
  otSobstvennikaUchastkiPaymentMethodsData,
  otSobstvennikaUchastkiLeadForm,
  otSobstvennikaUchastkiTestimonialsData,
  otSobstvennikaUchastkiFaqData,
  otSobstvennikaUchastkiGalleryData,
} from '@/lib/ot-sobstvennika-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function OtSobstvennikaUchastkiPage() {
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
        <Hero {...otSobstvennikaUchastkiHeroData} onCtaClick={openModal} />

        <OtSobstvennikaUchastkiSearchForm
          title="Отберите участки под ваши цели за минуту!"
          description="Смотрите только подходящие варианты — по назначению, классу, локации и цене, без лишних показов и скрытых ограничений."
          buttonText="Показать проверенные участки"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему купить земельный участок от собственника выгоднее с нами?"
          benefits={otSobstvennikaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Почему 7 из 10 покупателей теряют деньги при выборе участка и как этого избежать?"
          description="Выбирая земельный участок от собственника, у других теряют до 15% и месяцы времени; с нами — сразу увидите реальные условия и сэкономите ещё до сделки!"
          data={otSobstvennikaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Выбирайте участки в каталоге!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Смотрите только актуальные варианты с фото, ценой и параметрами — без скрытых условий и устаревших объявлений.
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото участка</strong> (1 главное фото)</li>
                  <li>• <strong>Название или обозначение участка</strong> (например, «Участок в Адлере», «ИЖС 6 соток»)</li>
                  <li>• <strong>Площадь участка (сотки)</strong></li>
                  <li>• <strong>Статус категории земли / ВРИ</strong> (ИЖС, ЛПХ, СНТ)</li>
                  <li>• <strong>Коммуникации</strong> (свет, вода, канализация — иконками)</li>
                  <li>• <strong>Дата добавления / актуальности</strong></li>
                  <li>• <strong>Цена</strong> (крупно, выделено)</li>
                  <li>• <strong>Иконка расстояния до моря</strong> (метры)</li>
                  <li>• Иконки <strong>[Избранное]</strong> и <strong>[Сравнить]</strong></li>
                </ul>
                <div className="mt-6 md:mt-8 text-center">
                  <button
                    onClick={openModal}
                    className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                  >
                    Показать ещё участки, доступные к покупке сейчас
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <InfoSection
          mainTitle={otSobstvennikaUchastkiInfoMain.mainTitle}
          mainDescription={otSobstvennikaUchastkiInfoMain.mainDescription}
          cards={otSobstvennikaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашему участку напрямую от собственника!"
          steps={otSobstvennikaUchastkiProcessStepsData}
          ctaText="Откладывание приводит к росту цен и уходу подходящих вариантов. Зафиксируйте цену на подходящий вариант сейчас и избегите дополнительных трат!"
          ctaButtonText="Оставить заявку и забронировать доступные варианты сейчас"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выбирайте удобный способ оплаты!"
          methods={otSobstvennikaUchastkiPaymentMethodsData}
          ctaText="Выберите формат оплаты и сразу узнайте итоговую цену участка, график платежей и доступные варианты."
          ctaButtonText="Рассчитать цену и условия"
          onCtaClick={openModal}
        />

        <ContactForm
          title={otSobstvennikaUchastkiLeadForm.title}
          description={otSobstvennikaUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={otSobstvennikaUchastkiLeadForm.phoneLabel}
          submitButtonText={otSobstvennikaUchastkiLeadForm.buttonText}
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
          description="Изучите по видео реальное состояние, а не обещания из объявления!"
          items={otSobstvennikaUchastkiGalleryData}
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
                Мы развиваем компанию как устойчивый бизнес на рынке недвижимости. Для клиентов это означает взвешенные решения и реальную выгоду от каждой сделки, для партнёров — надёжное сотрудничество и долгосрочный рост, для сотрудников — стабильность, профессиональное развитие и работу в единой корпоративной среде.
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
                Разбирайтесь в рынке земли и покупайте выгодно!
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={otSobstvennikaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке земли от собственника"
          items={otSobstvennikaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите проверенные варианты и зафиксируйте цену сейчас — без долгих поисков. При обращении сегодня — актуальный список и быстрый расчёт для выбора выгодного способа оплаты. Не откладывайте!"
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

