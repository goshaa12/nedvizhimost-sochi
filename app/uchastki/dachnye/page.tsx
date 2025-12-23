"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DachnyeUchastkiSearchForm } from '@/components/DachnyeUchastkiSearchForm';
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
  dachnyeUchastkiHeroData,
  dachnyeUchastkiBenefitsData,
  dachnyeUchastkiComparisonData,
  dachnyeUchastkiInfoMain,
  dachnyeUchastkiProcessStepsData,
  dachnyeUchastkiLeadForm,
  dachnyeUchastkiTestimonialsData,
  dachnyeUchastkiFaqData,
} from '@/lib/dachnye-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function DachnyeUchastkiPage() {
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
        <Hero {...dachnyeUchastkiHeroData} onCtaClick={openModal} />

        <DachnyeUchastkiSearchForm
          title="Участок под ваш бюджет — подбор за минуту!"
          description="Настройте фильтры и подберите участки для дачи, готовые к использованию без долгих поисков."
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки под дачу с нами?"
          benefits={dachnyeUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Что отличает нас от других?"
          description="Наши услуги по подбору дачных участков обеспечивают точный выбор с готовыми документами и проверенными коммуникациями."
          data={dachnyeUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Выберите участки для дачи в нашем каталоге!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Смотрите каталог и выбирайте варианты с готовыми документами и удобным подъездом.
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото</strong></li>
                  <li>• <strong>Площадь</strong></li>
                  <li>• <strong>Рельеф</strong> (ровный / лёгкий уклон / уклон)</li>
                  <li>• <strong>Подъезд</strong> (грунтовка / щебёнка / асфальт)</li>
                  <li>• <strong>Коммуникации</strong> (электричество рядом / летняя вода / скважина возможна / интернет)</li>
                  <li>• <strong>Состояние</strong> (деревья / газон / хозпостройки / домик / забор)</li>
                  <li>• <strong>Соседние постройки</strong></li>
                  <li>• <strong>Расстояние до моря или реки</strong></li>
                  <li>• <strong>Цена</strong></li>
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
          mainTitle={dachnyeUchastkiInfoMain.mainTitle}
          mainDescription={dachnyeUchastkiInfoMain.mainDescription}
          cards={dachnyeUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="На что обратить внимание при выборе дачного участка?"
          steps={dachnyeUchastkiProcessStepsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <ContactForm
          title={dachnyeUchastkiLeadForm.title}
          description={dachnyeUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={dachnyeUchastkiLeadForm.phoneLabel}
          submitButtonText={dachnyeUchastkiLeadForm.buttonText}
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
                Всё об участках и выборе земли — в нашем блоге
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={dachnyeUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={dachnyeUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку и получите дачные участки в Сочи, подходящие для отдыха и сезонного проживания!"
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