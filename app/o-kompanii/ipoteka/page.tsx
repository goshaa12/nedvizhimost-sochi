"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  ipotekaHeroData,
  ipotekaBenefitsData,
  ipotekaTestimonialsData,
  ipotekaFaqData,
} from '@/lib/ipoteka-data';
import { contactInfoData } from '@/lib/page-data';

export default function IpotekaPage() {
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
        <Hero {...ipotekaHeroData} onCtaClick={openModal} />

        <SearchForm
          title="Подберите жильё в ипотеку за пару кликов"
          description="Фильтруйте недвижимость по району, площади и цене — и сразу смотрите подходящие варианты."
          objectTypeLabel="Объект"
          objectTypes={[
            { value: 'kvartiry', label: 'Квартиры' },
            { value: 'doma', label: 'Дома' },
            { value: 'novostroyki', label: 'Новостройки' },
            { value: 'uchastki', label: 'Участки' },
            { value: 'kommerciya', label: 'Коммерция' },
          ]}
          areaLabel="Площадь"
          areaPlaceholder=""
          districtLabel="Район города"
          districts={[
            { value: '', label: 'Центральный' },
            { value: 'hostinsky', label: 'Хостинский' },
            { value: 'mamayka', label: 'Мамайка' },
            { value: 'adler', label: 'Адлер' },
            { value: 'krasnaya-polyana', label: 'Красная Поляна' },
            { value: 'matsesta', label: 'Мацеста' },
            { value: 'dagomys', label: 'Дагомыс' },
            { value: 'bytkha', label: 'Бытха' },
          ]}
          priceLabel="Цена"
          pricePlaceholder=""
          additionalLabel="Запрос"
          additionalPlaceholder=""
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему выгодно брать ипотеку с нами?"
          benefits={ipotekaBenefitsData}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                Смотрите каталог объектов под ипотеку
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600">
                Оцените все предложения под ипотеку и решите, что подходит вам.
              </p>
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать результаты
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Рассчитайте ипотеку за пару минут!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Узнайте точную стоимость вашей недвижимости в ипотеку и подберите оптимальные условия.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <form 
                  className="space-y-4 md:space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                        Стоимость недвижимости, ₽
                      </label>
                      <input
                        name="propertyPrice"
                        type="text"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                        Первоначальный взнос, ₽
                      </label>
                      <input
                        name="downPayment"
                        type="text"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                        Срок кредитования, лет
                      </label>
                      <input
                        name="loanTerm"
                        type="text"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                        Процентная ставка, %
                      </label>
                      <input
                        name="interestRate"
                        type="text"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                        Выбор банка:
                      </label>
                      <select
                        name="bank"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      >
                        <option value="">Выберите банк</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 md:p-6 rounded-xl border border-emerald-100">
                    <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">Результат:</h3>
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-sm md:text-base text-gray-600"><strong>Сумма кредита, ₽</strong></p>
                      <p className="text-sm md:text-base text-gray-600"><strong>Ежемесячный платёж, ₽</strong></p>
                    </div>
                    <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-600">
                      Оставьте заявку и получите подбор банка с оптимальными условиями.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                  >
                    Подать заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Оставьте заявку на ипотеку!"
          description="Оставьте заявку и получите подбор банка с подходящей ставкой, расчёт ежемесячного платежа и пошаговую помощь в оформлении документов."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить консультацию по ипотеке"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Наши банки-партнёры
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Сравните ставки, ежемесячный платёж и максимальный кредит — выберите банк для себя.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 mb-6 md:mb-8">
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Логотип банка</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Минимальная ставка, %</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Ежемесячный платёж, ₽ от</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Максимальный размер кредита, ₽ до</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600">
                  Оставьте заявку прямо сейчас и оформите ипотеку за пару шагов!
                </p>
                <button
                  onClick={openModal}
                  className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                >
                  Подать заявку
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                Читайте наш блог об ипотеке!
              </h2>
            </div>
          </div>
        </section>

        <Testimonials
          title="Отзывы"
          testimonials={ipotekaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об ипотеке"
          items={ipotekaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите купить квартиру или дом в Сочи в ипотеку? Оставьте заявку — менеджер подберёт подходящие объекты и рассчитает ежемесячный платёж."
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

