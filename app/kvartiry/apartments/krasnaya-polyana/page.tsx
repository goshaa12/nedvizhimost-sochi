"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { ApartmentsKrasnayaPolyanaSearchForm } from '@/components/ApartmentsKrasnayaPolyanaSearchForm';
import {
  apartmentsKrasnayaPolyanaHeroData,
  apartmentsKrasnayaPolyanaSearchFormData,
  apartmentsKrasnayaPolyanaBenefitsData,
  apartmentsKrasnayaPolyanaComparisonData,
  apartmentsKrasnayaPolyanaInfoSectionData,
  apartmentsKrasnayaPolyanaProcessStepsData,
  apartmentsKrasnayaPolyanaLeadFormData,
  apartmentsKrasnayaPolyanaSpecialOffersData,
  apartmentsKrasnayaPolyanaBlogData,
  apartmentsKrasnayaPolyanaTestimonialsData,
  apartmentsKrasnayaPolyanaFaqData,
  apartmentsKrasnayaPolyanaGalleryData,
} from '@/lib/apartments-krasnaya-polyana-data';
import { contactInfoData } from '@/lib/page-data';

export default function ApartmentsKrasnayaPolyanaPage() {
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
        <Hero {...apartmentsKrasnayaPolyanaHeroData} onCtaClick={openModal} />

        <ApartmentsKrasnayaPolyanaSearchForm
          title={apartmentsKrasnayaPolyanaSearchFormData.title}
          description={apartmentsKrasnayaPolyanaSearchFormData.description}
          buttonText={apartmentsKrasnayaPolyanaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему апартаменты в Красной Поляне выгодно покупать с нами?"
          benefits={apartmentsKrasnayaPolyanaBenefitsData}
        />

        <ComparisonTable
          title="Сравните, как купить апартаменты Поляна, чтобы не потерять доход и нервы"
          description="Многие решают купить апартаменты Поляна по буклету и теряют доход; сравните подходы, чтобы объект приносил деньги, а не повод для паники."
          data={apartmentsKrasnayaPolyanaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Посмотрите апартаменты Поляны в каталоге
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Посмотрите апартаменты Поляны с актуальными ценами, фото и расстоянием до подъёмников, чтобы выбрать подходящий вариант быстрее без лишних просмотров и не упустить лучшие варианты.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше вариантов апартаментов
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle={apartmentsKrasnayaPolyanaInfoSectionData.mainTitle}
          mainDescription={apartmentsKrasnayaPolyanaInfoSectionData.mainDescription}
          cards={apartmentsKrasnayaPolyanaInfoSectionData.cards}
        />

        <ProcessSteps
          title="Приобретите апартаменты за 4 шага!"
          steps={apartmentsKrasnayaPolyanaProcessStepsData}
          ctaText="Не откладывайте решение — лучшие варианты в Поляне уходят быстрее всего, особенно перед сезоном. Зафиксируйте подборку именно под ваш бюджет и цель, чтобы не упустить выгодные объекты."
          ctaButtonText="Получить подборку апартаментов с расчётами"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  {apartmentsKrasnayaPolyanaLeadFormData.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  {apartmentsKrasnayaPolyanaLeadFormData.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                >
                  {apartmentsKrasnayaPolyanaLeadFormData.buttonText}
                </button>
                <button
                  onClick={openModal}
                  className="w-full bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 text-sm md:text-base font-medium"
                >
                  {apartmentsKrasnayaPolyanaLeadFormData.whatsappButtonText}
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
                  Не пропустите спецпредложения от застройщиков Красной Поляны
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {apartmentsKrasnayaPolyanaSpecialOffersData.map((offer, index) => (
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

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Узнайте ключевые ошибки перед покупкой апартаментов
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Знания об апартаментах курорта Красная Поляна = ваша защита от переплаты, ошибок в локации и неверной доходности. Уже 300+ покупателей применили эти материалы перед тем, как апартаменты Красная Поляна купить выгодно. Прочитайте и используйте инсайды, чтобы подготовиться к покупке.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {apartmentsKrasnayaPolyanaBlogData.map((article, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-colors">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {article}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Gallery
          title="Фото и видеогалерея"
          items={apartmentsKrasnayaPolyanaGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={apartmentsKrasnayaPolyanaTestimonialsData.map(({ name, text }) => {
            let person = name;
            let city = "";
            if (name.includes(",")) {
              [person, city] = name.split(",").map(str => str.trim());
            }
            return { name: person, text, city };
          })}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке апартаментов в Красной Поляне"
          items={apartmentsKrasnayaPolyanaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Уже 200 покупателей приобрели недвижимость. Оставьте заявку — получите подборку под цели и сэкономьте время. Станьте следующим!"
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

