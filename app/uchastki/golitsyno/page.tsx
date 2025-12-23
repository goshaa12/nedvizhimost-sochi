"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { GolytsinoUchastkiSearchForm } from '@/components/GolytsinoUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  golytsinoUchastkiHeroData,
  golytsinoUchastkiBenefitsData,
  golytsinoUchastkiComparisonData,
  golytsinoUchastkiInfoMain,
  golytsinoUchastkiProcessStepsData,
  golytsinoUchastkiLeadForm,
  golytsinoUchastkiTestimonialsData,
  golytsinoUchastkiFaqData,
} from '@/lib/golytsino-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function GolytsinoUchastkiPage() {
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
        <Hero {...golytsinoUchastkiHeroData} onCtaClick={openModal} />

        <GolytsinoUchastkiSearchForm
          title="Настройте фильтр и найдите участок"
          description="Не теряйте время на лишние объезды — настройте фильтр и увидьте все подходящие участки сразу."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Оцените все преимущества участков в Голицыно"
          benefits={golytsinoUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Выберите участок грамотно — иначе потеряете деньги и время"
          description="С нами увидите всё своими глазами, экономите до 300 000 ₽ и начнёте стройку без ограничений."
          data={golytsinoUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Откройте каталог и выберите участок в Голицыно
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Просмотрите все участки и решите, какой подходит именно вам уже сегодня!
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото объекта</strong> (реальное, с видимым рельефом)</li>
                  <li>• <strong>Площадь</strong> (в сотках)</li>
                  <li>• <strong>Категория земли</strong> (ИЖС / ЛПХ / СНТ)</li>
                  <li>• <strong>Рельеф</strong> (ровный / уклон / сильный уклон / горный рельеф)</li>
                  <li>• <strong>Подъезд</strong> (грунтовка / асфальт / комбинированный)</li>
                  <li>• <strong>Коммуникации</strong> — свет рядом / возможность подключения воды / возможность газа</li>
                  <li>• <strong>Кадастровый номер</strong> (если разрешено публиковать)</li>
                  <li>• <strong>Расстояние до трассы</strong> (важно для Голицыно)</li>
                  <li>• <strong>Расстояние до моря</strong> (в метрах или минутах)</li>
                  <li>• <strong>Окружение</strong> (соседи, лес, склон)</li>
                  <li>• <strong>Цена</strong> (крупным шрифтом)</li>
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
          mainTitle={golytsinoUchastkiInfoMain.mainTitle}
          mainDescription={golytsinoUchastkiInfoMain.mainDescription}
          cards={golytsinoUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Проверьте участок с нами и защитите свои инвестиции"
          steps={golytsinoUchastkiProcessStepsData}
          ctaText="Получите подборку участков в Голицыно с полной проверкой рисков и сэкономьте себе недели нервов и лишних расходов."
          ctaButtonText="Начать подбор прямо сейчас"
          onCtaClick={openModal}
        />

        <ContactForm
          title={golytsinoUchastkiLeadForm.title}
          description={golytsinoUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={golytsinoUchastkiLeadForm.phoneLabel}
          submitButtonText={golytsinoUchastkiLeadForm.buttonText}
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
                Узнайте, как не ошибиться при покупке!
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={golytsinoUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об объектах в Голицыно"
          items={golytsinoUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Подберите участок с нами — напишите или позвоните. Поможем разобраться в деталях и покажем подходящие варианты!"
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

