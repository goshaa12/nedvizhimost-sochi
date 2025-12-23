"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LooUchastkiSearchForm } from '@/components/LooUchastkiSearchForm';
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
import {
  looUchastkiHeroData,
  looUchastkiBenefitsData,
  looUchastkiComparisonData,
  looUchastkiInfoMain,
  looUchastkiProcessStepsData,
  looUchastkiLeadForm,
  looUchastkiTestimonialsData,
  looUchastkiFaqData,
  looUchastkiGalleryData,
} from '@/lib/loo-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function LooUchastkiPage() {
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
        <Hero {...looUchastkiHeroData} onCtaClick={openModal} />

        <LooUchastkiSearchForm
          title="Используйте фильтр и найдите участок в Лоо!"
          description="Подберите свой вариант за пару кликов и получите полную проверку документов!"
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 800+ клиентов уже выбрали нас?"
          benefits={looUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Избегайте потери денег и нервов при покупке участка"
          description=""
          data={looUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Выберите участок через наш каталог
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Посмотрите актуальные варианты с фото, параметрами и ценами, найдите подходящий вариант и не упустите выгодные предложения. Переходите к просмотру и сравните варианты прямо сейчас!
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото участка</strong> (актуальное, без ретуши)</li>
                  <li>• <strong>Площадь участка (сотки)</strong></li>
                  <li>• <strong>Категория земли</strong> (ИЖС / ЛПХ / СНТ)</li>
                  <li>• <strong>Рельеф</strong> (ровный / уклон / выраженный уклон)</li>
                  <li>• <strong>Подъезд</strong> (асфальт / грунт / щебёнка)</li>
                  <li>• <strong>Коммуникации</strong> (свет, вода, газ — наличие или возможность подключения)</li>
                  <li>• <strong>Кадастровый номер</strong> (если доступен к публикации)</li>
                  <li>• <strong>Расстояние до моря</strong> (в метрах или минутах)</li>
                  <li>• <strong>Цена</strong> (крупно выделена)</li>
                  <li>• <strong>Иконки [Избранное] и [Сравнить]</strong></li>
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
          mainTitle="Подберите участок рядом с пляжем без рисков"
          mainDescription="Ознакомьтесь с лучшими участками с фото, информацией о подъездах, рельефе и документах. Сэкономьте до 20% времени и денег на проверках и найдите участок для строительства или инвестиций."
          cards={looUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Как мы проверяем участок?"
          steps={looUchastkiProcessStepsData}
          ctaText="Заберите подборку актуальных участков прямо сейчас. Сделайте первый шаг в вашей цели!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title="Узнайте, какие варианты доступны в Лоо"
          description="Оставьте номер телефона — получите подходящие варианты с фото и документами всего за 5–10 минут и сможете сразу выбрать лучший вариант!"
          phoneLabel="Телефон:"
          buttonText="Забрать подборку участков"
          onButtonClick={openModal}
        />
{/* 
        <Gallery
          title=""
          description=""
          items={looUchastkiGalleryData}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={looUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках в Лоо"
          items={looUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите подобрать объект спокойно и без ошибок? Свяжитесь с нами любым удобным способом и мы поможем осуществить вашу мечту."
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

