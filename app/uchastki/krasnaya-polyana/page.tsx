"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KrasnayaPolyanaUchastkiSearchForm } from '@/components/KrasnayaPolyanaUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  krasnayaPolyanaUchastkiHeroData,
  krasnayaPolyanaUchastkiBenefitsData,
  krasnayaPolyanaUchastkiComparisonData,
  krasnayaPolyanaUchastkiInfoMain,
  krasnayaPolyanaUchastkiProcessStepsData,
  krasnayaPolyanaUchastkiPaymentMethodsData,
  krasnayaPolyanaUchastkiLeadForm,
  krasnayaPolyanaUchastkiAboutData,
  krasnayaPolyanaUchastkiTestimonialsData,
  krasnayaPolyanaUchastkiFaqData,
  krasnayaPolyanaUchastkiGalleryData,
} from '@/lib/krasnaya-polyana-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function KrasnayaPolyanaUchastkiPage() {
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
        <Hero {...krasnayaPolyanaUchastkiHeroData} onCtaClick={openModal} />

        <KrasnayaPolyanaUchastkiSearchForm
          title="Фильтруйте и выбирайте подходящие участки"
          description="Выберите параметры — получите подборку участков, соответствующих бюджету и целям покупки!"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в Красной Поляне с нами?"
          benefits={krasnayaPolyanaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните варианты — с нами покупка проще"
          description="Проверьте сами — убедитесь в гарантии полного контроля и сопровождения при покупке участка."
          data={krasnayaPolyanaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />
{/* 
        <HotDeals
          title="Смотрите каталог объектов в продаже!"
          description="Смотрите участки с проверенными документами без лишних поездок!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={krasnayaPolyanaUchastkiInfoMain.mainTitle}
          mainDescription={krasnayaPolyanaUchastkiInfoMain.mainDescription}
          cards={krasnayaPolyanaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Купите участок за 3 шага!"
          steps={krasnayaPolyanaUchastkiProcessStepsData}
          ctaText="Оформите землю за 3 дня. Оставьте заявку и выберите подходящий объект прямо сейчас!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите любым удобным способом!"
          methods={krasnayaPolyanaUchastkiPaymentMethodsData}
          ctaText="Определитесь со способом оплаты и начните оформление участка уже сегодня!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={krasnayaPolyanaUchastkiLeadForm.title}
          description={krasnayaPolyanaUchastkiLeadForm.description}
          buttonText={krasnayaPolyanaUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Просмотрите подборку фото и видео участков и оцените, как будет выглядеть ваш участок с видом на горы."
          items={krasnayaPolyanaUchastkiGalleryData}
        />

        <About
          title={krasnayaPolyanaUchastkiAboutData.title}
          paragraphs={krasnayaPolyanaUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={krasnayaPolyanaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={krasnayaPolyanaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сотни клиентов уже оформили участки в Красной Поляне. Оставьте заявку и получите подборку с ценами и готовыми к строительству вариантами!"
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

