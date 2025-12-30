"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MessageCircle } from 'lucide-react';
import {
  krasnayaPolyanaHeroData,
  krasnayaPolyanaBenefitsData,
  krasnayaPolyanaComparisonData,
  krasnayaPolyanaInfoSectionData,
  krasnayaPolyanaProcessStepsData,
  krasnayaPolyanaPaymentMethodsData,
  krasnayaPolyanaAboutData,
  krasnayaPolyanaTestimonialsData,
  krasnayaPolyanaFaqData,
  krasnayaPolyanaGalleryData,
} from '@/lib/kvartiry-krasnaya-polyana-data';
import { contactInfoData } from '@/lib/page-data';

export default function KrasnayaPolyanaKvartiryPage() {
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
        <Hero {...krasnayaPolyanaHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Найдите будущую квартиру за минуту!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Начните поиск своей идеальной квартиры в Красной Поляне прямо сейчас — найдите лучший вариант за пару кликов!
                </p>
              </div>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <p className="mb-6 text-sm md:text-base text-gray-600">
                  Класс: / Кол-во комнат: / Тип: / Дополнительно: В ипотеку / Вторичка / Этаж: / Площадь: / Цена:
                </p>
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                >
                  Показать результаты
                </button>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Почему купить квартиру в Красной Поляне с нами выгоднее?"
          benefits={krasnayaPolyanaBenefitsData}
        />

        <ComparisonTable
          title="Не рискуйте деньгами и временем — действуйте прямо сейчас!"
          description="С нами вы получите проверенную квартиру за 2–3 дня дистанционно, сэкономите до 15% и избежите проблем. Без нас потеряете недели, переплатите и рискуете попасть на проблемный объект."
          data={krasnayaPolyanaComparisonData}
          usLabel="С нами"
          othersLabel="Конкуренты"
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Посмотрите каталог квартир!
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Откройте каталог и забронируйте подходящий вариант!
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle={krasnayaPolyanaInfoSectionData.mainTitle}
          mainDescription={krasnayaPolyanaInfoSectionData.mainDescription}
          cards={krasnayaPolyanaInfoSectionData.cards}
        />

        <ProcessSteps
          title="Купите квартиру в Красной Поляне в 3 простых шага!"
          steps={krasnayaPolyanaProcessStepsData}
          ctaText="Оставьте заявку на подбор прямо сейчас!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Платите за квартиру в Красной Поляне на выгодных условиях"
          methods={krasnayaPolyanaPaymentMethodsData}
          ctaText="Не откладывайте — каждую неделю без расчёта вы теряете деньги и время. Получите свой вариант квартиры в Красной Поляне с максимальной выгодой уже сегодня!"
          ctaButtonText="Узнать условия и расчёт"
          onCtaClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Найдите свою квартиру с нами уже сегодня!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Выберите надёжный вариант, заполните форму за 30 секунд, получите подробный расчёт стоимости и список подходящих квартир с учётом бюджета и желаемого района!
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  Получите подбор квартир
                </button>
                
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Написать в WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <Gallery
          title="Фото и видеогалерея"
          items={krasnayaPolyanaGalleryData}
        />

        <About
          title={krasnayaPolyanaAboutData.title}
          paragraphs={krasnayaPolyanaAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={krasnayaPolyanaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по квартирам в Красной Поляне"
          items={krasnayaPolyanaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не упустите шанс подобрать проверенные квартиры с лучшими видами и современным ремонтом. Оставьте контакты — менеджеры свяжутся через несколько минут, покажут актуальные варианты и рассчитают точную стоимость."
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

