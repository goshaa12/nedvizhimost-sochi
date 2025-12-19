"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Do10SotokUchastkiSearchForm } from '@/components/Do10SotokUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  do10SotokUchastkiHeroData,
  do10SotokUchastkiBenefitsData,
  do10SotokUchastkiComparisonData,
  do10SotokUchastkiInfoMain,
  do10SotokUchastkiProcessStepsData,
  do10SotokUchastkiLeadForm,
  do10SotokUchastkiTestimonialsData,
  do10SotokUchastkiFaqData,
  do10SotokUchastkiGalleryData,
} from '@/lib/do-10-sotok-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function Do10SotokUchastkiPage() {
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
        <Hero {...do10SotokUchastkiHeroData} onCtaClick={openModal} />

        <Do10SotokUchastkiSearchForm
          title="Подберите участок до 10 соток под бюджет за минуту!"
          description="Не теряйте время на лишние просмотры. Отфильтруйте параметры и сразу смотрите землю до 10 соток, где можно строить или оформлять без рисков."
          buttonText="Показать землю до 10 соток без проблем с документами"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Преимущества работы с нами"
          benefits={do10SotokUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Разберите подходы к продаже участков до 10 соток и сэкономьте до 300 000 ₽"
          description="Участок 10 соток купить можно у многих, но цена и результат отличаются: без понимания нюансов легко переплатить!"
          data={do10SotokUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите участки до 10 соток в каталоге!"
          description="Не останавливайтесь на первых вариантах — среди недорогих предложений часто есть участок 10 соток с лучшей локацией."
          buttonText="Смотреть участки до 10 соток в Сочи"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={do10SotokUchastkiInfoMain.mainTitle}
          mainDescription={do10SotokUchastkiInfoMain.mainDescription}
          cards={do10SotokUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Как проходит проверка участка?"
          steps={do10SotokUchastkiProcessStepsData}
          ctaText="Посмотрите проверенные варианты. Получите каталог — оставьте заявку!"
          ctaButtonText="Получить проверенные варианты сейчас"
          onCtaClick={openModal}
        />

        <LeadForm
          title={do10SotokUchastkiLeadForm.title}
          description={do10SotokUchastkiLeadForm.description}
          buttonText={do10SotokUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">Покупайте участок с пониманием последствий!</h2>
              </div>
            </div>
          </div>
        </section>

        {/* <Gallery
          title="Фото и видеогалерея"
          description=""
          items={do10SotokUchastkiGalleryData}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={do10SotokUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке участков до 10 соток"
          items={do10SotokUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте запрос сейчас, чтобы не упустить подходящие варианты до роста цен!"
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

