"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SadovodstvoUchastkiSearchForm } from '@/components/SadovodstvoUchastkiSearchForm';
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
  sadovodstvoUchastkiHeroData,
  sadovodstvoUchastkiBenefitsData,
  sadovodstvoUchastkiComparisonData,
  sadovodstvoUchastkiInfoMain,
  sadovodstvoUchastkiProcessStepsData,
  sadovodstvoUchastkiLeadForm,
  sadovodstvoUchastkiTestimonialsData,
  sadovodstvoUchastkiFaqData,
} from '@/lib/sadovodstvo-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function PodSadovodstvoUchastkiPage() {
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
        <Hero {...sadovodstvoUchastkiHeroData} onCtaClick={openModal} />

        <SadovodstvoUchastkiSearchForm
          title="Найдите участок по вашим критериям"
          description="Настройте фильтры — увидите варианты с качественной почвой и готовые к оформлению."
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки под садоводство с нами?"
          benefits={sadovodstvoUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Причины, по которым клиенты выбирают нас"
          description="Не тратьте время на сомнения — сотни клиентов уже убедились, что с нашей проверкой документов выбор безопасных участков СНТ проходит в 2 раза быстрее!"
          data={sadovodstvoUchastkiComparisonData}
          usLabel="У нас"
          othersLabel="Другие агентства"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Каталог участков — выберите свой вариант!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Смотрите участки под садоводство в продаже и выбирайте участки, где границы и документы уже проверены.
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото</strong></li>
                  <li>• <strong>Площадь</strong></li>
                  <li>• <strong>Рельеф</strong> (ровный / лёгкий уклон / уклон)</li>
                  <li>• <strong>Подъезд</strong> (грунтовка / асфальт / комбинированный)</li>
                  <li>• <strong>Коммуникации</strong> (электричество/ летняя вода / возможность скважины / интернет)</li>
                  <li>• <strong>Состояние участка</strong> (деревья / грядки / ухоженность / забор)</li>
                  <li>• <strong>Кадастровый номер</strong></li>
                  <li>• <strong>Соседи и окружение</strong> (плотность застройки / СНТ / открытая местность)</li>
                  <li>• <strong>Расстояние до трассы или магазина</strong></li>
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
          mainTitle={sadovodstvoUchastkiInfoMain.mainTitle}
          mainDescription={sadovodstvoUchastkiInfoMain.mainDescription}
          cards={sadovodstvoUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Что можно разместить на участке под садоводство?"
          steps={sadovodstvoUchastkiProcessStepsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <ContactForm
          title={sadovodstvoUchastkiLeadForm.title}
          description={sadovodstvoUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={sadovodstvoUchastkiLeadForm.phoneLabel}
          submitButtonText={sadovodstvoUchastkiLeadForm.buttonText}
          whatsappButtonText="Написать в WhatsApp"
          contactInfo={[]}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Читайте всё о садовых участках в нашем блоге!
              </h2>
            </div>
          </div>
        </section>

        <Testimonials
          title="Отзывы"
          testimonials={sadovodstvoUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={sadovodstvoUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сад, огород, дача — всё в одном! Оставьте заявку и мы подберём лучший вариант для вашего отдыха и урожая."
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

