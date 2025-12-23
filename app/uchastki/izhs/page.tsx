"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { IzhsUchastkiSearchForm } from '@/components/IzhsUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ContactForm } from '@/components/ContactForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  izhsUchastkiHeroData,
  izhsUchastkiBenefitsData,
  izhsUchastkiComparisonData,
  izhsUchastkiInfoMain,
  izhsUchastkiProcessStepsData,
  izhsUchastkiLeadForm,
  izhsUchastkiTestimonialsData,
  izhsUchastkiFaqData,
} from '@/lib/izhs-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function PodIzhsUchastkiPage() {
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
        <Hero {...izhsUchastkiHeroData} onCtaClick={openModal} />

        <IzhsUchastkiSearchForm
          title="Найдите подходящий участок за пару кликов"
          description="Задайте фильтры — получите список подходящих участков под ИЖС."
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки под ИЖС с нами?"
          benefits={izhsUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Почему нас уже выбрали 800+ покупателей?"
          description="Мы делаем процесс покупки участка простым: от выбора подходящей земли до полной юридической безопасности сделки."
          data={izhsUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Посмотрите все участки в одном каталоге
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Смотрите каталог участков с подтверждёнными документами и сразу планируйте строительство!
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото</strong></li>
                  <li>• <strong>Площадь</strong></li>
                  <li>• <strong>ВРИ</strong> ( подтверждён / возможен перевод)</li>
                  <li>• <strong>Рельеф</strong></li>
                  <li>• <strong>Подъезд</strong> (асфальт / грунт / комбинированный)</li>
                  <li>• <strong>Коммуникации</strong> (электричество рядом / вода или скважина / газ)</li>
                  <li>• <strong>Кадастровый номер</strong> (если разрешено публиковать)</li>
                  <li>• <strong>Инфраструктура</strong> (школа / садик / магазин / остановка)</li>
                  <li>• <strong>Расстояние до моря</strong> (в минутах или метрах)</li>
                  <li>• <strong>Цена</strong> (крупно)</li>
                  <li>• Иконки <strong>[Избранное]</strong> и <strong>[Сравнить]</strong></li>
                </ul>
                <div className="mt-6 md:mt-8 text-center">
                  <button
                    onClick={openModal}
                    className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                  >
                    Показать больше
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <InfoSection
          mainTitle={izhsUchastkiInfoMain.mainTitle}
          mainDescription={izhsUchastkiInfoMain.mainDescription}
          cards={izhsUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Что важно учесть при выборе участка под ИЖС?"
          steps={izhsUchastkiProcessStepsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <ContactForm
          title={izhsUchastkiLeadForm.title}
          description={izhsUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={izhsUchastkiLeadForm.phoneLabel}
          submitButtonText={izhsUchastkiLeadForm.buttonText}
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
                Читайте наш блог!
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={izhsUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={izhsUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сотни домовладельцев уже оформили землю под ИЖС. Подберите вариант с готовым ВРИ — оставьте заявку!"
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

