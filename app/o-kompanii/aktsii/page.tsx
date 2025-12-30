"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProcessSteps } from '@/components/ProcessSteps';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import {
  aktsiiHeroData,
  aktsiiDealsData,
  aktsiiComparisonData,
  aktsiiProcessStepsData,
  aktsiiAboutData,
  aktsiiTestimonialsData,
  aktsiiFaqData,
} from '@/lib/aktsii-data';
import { contactInfoData } from '@/lib/page-data';

export default function AktsiiPage() {
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
        <Hero {...aktsiiHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Акции и специальные предложения
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {aktsiiDealsData.map((deal, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative w-full h-48 md:h-64">
                    <ImageWithFallback
                      src={deal.imageUrl}
                      alt={deal.imageAlt}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="mb-4 text-lg md:text-xl font-semibold text-gray-900">
                      {deal.title}
                    </h3>
                    <div className="space-y-2 mb-6 text-sm md:text-base text-gray-600">
                      <p>
                        <span className="font-medium">Срок действия:</span> {deal.validUntil}
                      </p>
                      <p>
                        <span className="font-medium">Формат объекта:</span> {deal.format}
                      </p>
                      <p className="text-emerald-900 font-medium">{deal.limited}</p>
                    </div>
                    <button
                      onClick={openModal}
                      className="w-full bg-emerald-900 text-white px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                    >
                      Участвовать в акции
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                Оставьте заявку до конца месяца и получите до 65 000 ₽
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Получите компенсацию до 65 000 ₽ на расходы по сделке, оставьте заявку до конца месяца. Не тратьте личные средства на оформление документов или переезд — эти затраты закроет агентство. Заберите свой бонус и начните жизнь у моря с приятной экономии прямо сейчас!
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg min-w-[800px]">
                <div className="grid grid-cols-5 bg-emerald-50">
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                      Условия покупки недвижимости
                    </h3>
                  </div>
                  <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50">
                    <h3 className="text-sm md:text-base text-emerald-900 font-semibold">
                      До 8 млн ₽
                    </h3>
                  </div>
                  <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50">
                    <h3 className="text-sm md:text-base text-emerald-900 font-semibold">
                      8–12 млн ₽
                    </h3>
                  </div>
                  <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50">
                    <h3 className="text-sm md:text-base text-emerald-900 font-semibold">
                      12–20 млн ₽
                    </h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-sm md:text-base text-emerald-900 font-semibold">
                      От 20 млн ₽
                    </h3>
                  </div>
                </div>
                {aktsiiComparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors"
                  >
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">
                        {row.parameter}
                      </div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <div className="text-xs md:text-sm text-gray-700">{row.us}</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <div className="text-xs md:text-sm text-gray-700">{row.others}</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <div className="text-xs md:text-sm text-gray-700">{row.third}</div>
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="text-xs md:text-sm text-gray-700">{row.fourth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 md:mb-8 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Ознакомьтесь с условиями получения подарков
              </h2>
              <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-600">
                <p>
                  Получите средства сразу после завершения сделки и полного расчёта за объект при сопровождении агентства. Соблюдайте простые условия, чтобы ваша покупка стала еще приятнее.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>Завершите сделку:</strong> получите выплату после внесения всей суммы за выбранную недвижимость.
                  </li>
                  <li>
                    <strong>Согласуйте детали:</strong> при покупке объекта со скидкой укажем размер бонуса в индивидуальном порядке.
                  </li>
                  <li>
                    <strong>Выберите формат оплаты:</strong> воспользуйтесь акцией при наличном расчете или ипотеке (акция не действует при оформлении рассрочки).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps
          title="Заберите до 50 000 ₽ за 5 простых шагов"
          steps={aktsiiProcessStepsData}
          ctaText="Пройдите путь от заявки до сделки и получите денежный бонус на личные расходы!"
          ctaButtonText="Получить до 50 000 ₽"
          onCtaClick={openModal}
        />

        <About
          title={aktsiiAboutData.title}
          paragraphs={aktsiiAboutData.paragraphs}
        />

        <ContactForm
          title="Оставьте заявку на участие в акции!"
          description="Узнайте актуальные условия каждой акции на недвижимость в Сочи. Не упустите акции на недвижимость — наши акции ограничены по времени."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Принять участие в акции"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Testimonials
          title="Отзывы"
          testimonials={aktsiiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об акциях"
          items={aktsiiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами прямо сейчас!"
          description="Не откладывайте мечту на потом, ведь акции по недвижимости обновляются ежедневно. Мы на связи и готовы сделать ваш путь к новой квартире лёгким и приятным!"
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

