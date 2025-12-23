"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LphUchastkiSearchForm } from '@/components/LphUchastkiSearchForm';
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
  lphUchastkiHeroData,
  lphUchastkiBenefitsData,
  lphUchastkiComparisonData,
  lphUchastkiInfoMain,
  lphUchastkiProcessStepsData,
  lphUchastkiLeadForm,
  lphUchastkiTestimonialsData,
  lphUchastkiFaqData,
} from '@/lib/lph-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function PodLphUchastkiPage() {
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
        <Hero {...lphUchastkiHeroData} onCtaClick={openModal} />

        <LphUchastkiSearchForm
          title="Найдите участок под ваш бюджет за минуту!"
          description="Фильтруйте и выбирайте только проверенные участки под ЛПХ для вашего хозяйства!"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки под ЛПХ с нами?"
          benefits={lphUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Что делает нас выбором №1 для покупателей?"
          description="Каждый участок проверен до сделки: экономите время, деньги и полностью исключаете риски для хозяйства и строительства."
          data={lphUchastkiComparisonData}
          usLabel="Наши преимущества"
          othersLabel="Чем рискуете без нас"
        />
{/* 
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Смотрите участки под ЛПХ в каталоге!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Не берите первый попавшийся вариант — в каталоге есть площадки с выгодным расположением для хозяйственной деятельности.
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото</strong></li>
                  <li>• <strong>Площадь</strong></li>
                  <li>• <strong>Категория земли</strong></li>
                  <li>• <strong>Рельеф</strong> (ровный / лёгкий уклон / уклон)</li>
                  <li>• <strong>Подъезд</strong> (асфальт / грунтовка / комбинированный, доступ для техники)</li>
                  <li>• <strong>Коммуникации</strong> (электричество рядом / возможность трёхфазного подключения / вода или скважина / возможность газа)</li>
                  <li>• <strong>Возможности для хозяйства</strong> (место под теплицы / место под хлев или хозблок / свободная площадь под огород)</li>
                  <li>• <strong>Кадастровый номер</strong></li>
                  <li>• <strong>Инфраструктура рядом</strong> (дорога, населённый пункт, магазин, остановка)</li>
                  <li>• <strong>Расстояние до города / трассы</strong></li>
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
          mainTitle={lphUchastkiInfoMain.mainTitle}
          mainDescription={lphUchastkiInfoMain.mainDescription}
          cards={lphUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Что можно развивать на участке под ЛПХ?"
          steps={lphUchastkiProcessStepsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <ContactForm
          title={lphUchastkiLeadForm.title}
          description={lphUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={lphUchastkiLeadForm.phoneLabel}
          submitButtonText={lphUchastkiLeadForm.buttonText}
          whatsappButtonText="Написать в WhatsApp"
          contactInfo={[]}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />
{/* 
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Узнайте все о участках в нашем блоге
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={lphUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={lphUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите подборку проверенных участков под хозяйство в Сочи за пару минут. Не тратьте время на поиск — все варианты актуальны и готовы к просмотру!"
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

