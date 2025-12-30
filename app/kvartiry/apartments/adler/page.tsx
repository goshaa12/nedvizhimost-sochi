"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { ApartmentsKrasnayaPolyanaSearchForm } from '@/components/ApartmentsKrasnayaPolyanaSearchForm';
import {
  apartmentsAdlerHeroData,
  apartmentsAdlerSearchFormData,
  apartmentsAdlerBenefitsData,
  apartmentsAdlerComparisonData,
  apartmentsAdlerInfoSectionData,
  apartmentsAdlerProcessStepsData,
  apartmentsAdlerLeadFormData,
  apartmentsAdlerSpecialOffersData,
  apartmentsAdlerBlogData,
  apartmentsAdlerTestimonialsData,
  apartmentsAdlerFaqData,
  apartmentsAdlerGalleryData,
} from '@/lib/apartments-adler-data';
import { contactInfoData } from '@/lib/page-data';

export default function ApartmentsAdlerPage() {
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
        <Hero {...apartmentsAdlerHeroData} onCtaClick={openModal} />

        <ApartmentsKrasnayaPolyanaSearchForm
          title={apartmentsAdlerSearchFormData.title}
          description={apartmentsAdlerSearchFormData.description}
          buttonText={apartmentsAdlerSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему здесь находят апартаменты в Адлере с загрузкой от 70%?"
          benefits={apartmentsAdlerBenefitsData}
        />

        <ComparisonTable
          title="Сравните апартаменты в Адлере, чтобы не потерять доход и безопасную сделку"
          description="При продаже апартаментов в Адлере легко переплатить и ошибиться с комплексом. Сравните, чтобы избежать рисков и получить прибыльный и ликвидный объект."
          data={apartmentsAdlerComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Выберите апартаменты в Адлере за 5–7 секунд
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                За несколько секунд вы понимаете, подходят ли апартаменты под ваш бюджет, локацию и доходность. Каждый объект показывает важные параметры сразу, и вы не переходите по вкладам и избавляетесь от лишнего поиска. Среди следующих апартаментов может удачный вариант.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше апартаментов в Адлере
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle={apartmentsAdlerInfoSectionData.mainTitle}
          mainDescription={apartmentsAdlerInfoSectionData.mainDescription}
          cards={apartmentsAdlerInfoSectionData.cards}
        />

        <ProcessSteps
          title="Приобретите апартаменты в Адлере в 4 шага!"
          steps={apartmentsAdlerProcessStepsData}
          ctaText="Чем позже сравните районы, этажи и статус земли, тем выше риск купить вариант без дохода. Найдите апартаменты в Адлере с окупаемостью от 7 лет!"
          ctaButtonText="Получить подборку апартаментов с расчётами"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  {apartmentsAdlerLeadFormData.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  {apartmentsAdlerLeadFormData.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                >
                  {apartmentsAdlerLeadFormData.buttonText}
                </button>
                <button
                  onClick={openModal}
                  className="w-full bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 text-sm md:text-base font-medium"
                >
                  {apartmentsAdlerLeadFormData.whatsappButtonText}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Не пропустите выгодные условия для покупки апартаментов
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {apartmentsAdlerSpecialOffersData.map((offer, index) => (
                  <div key={index} className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {offer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Изучите рынок Адлера и избегайте ошибок
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Знание рынка = экономия сотен тысяч при покупке апартаментов в Адлере и уверенность, что объект не потеряет доход в первый же сезон. Уже 500+ людей использовали эти инсайды перед покупкой — изучите и примените их заранее, чтобы выбрать объект с прогнозируемой окупаемостью.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {apartmentsAdlerBlogData.map((article, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-colors">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {article}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <Gallery
          title="Фото и видеогалерея"
          items={apartmentsAdlerGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={apartmentsAdlerTestimonialsData.map(({ name, text }) => {
            let person = name;
            let city = "";
            if (name.includes(",")) {
              [person, city] = name.split(",").map(str => str.trim());
            }
            return { name: person, text, city };
          })}
        />

        <FAQ
          title="Часто задаваемые вопросы об апартаментах в Адлере"
          items={apartmentsAdlerFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Пока лучшие апартаменты разбирают быстрее суток, вы получите подборку без рисков и переплат. Оставьте заявку сейчас, чтобы успеть забронировать объект, пока его не забрали другие."
          contactInfo={contactInfoData}
          whatsappButtonText="Написать в WhatsApp"
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

