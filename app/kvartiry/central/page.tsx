"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StudioSearchForm } from '@/components/StudioSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Certificates } from '@/components/Certificates';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  centralHeroData,
  centralSearchFormData,
  centralBenefitsData,
  centralComparisonData,
  centralInfoMain,
  centralProcessStepsData,
  centralPaymentMethodsData,
  centralLeadForm,
  centralGallery,
  centralCertificates,
  centralAboutParagraphs,
  centralTestimonialsData,
  centralFaqData,
} from '@/lib/kvartiry-central-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryCentralPage() {
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
        <Hero {...centralHeroData} onCtaClick={openModal} />

        <StudioSearchForm
          title={centralSearchFormData.title}
          description={centralSearchFormData.description}
          districts={centralSearchFormData.districts}
          rooms={centralSearchFormData.rooms}
          types={centralSearchFormData.types}
          buttonText={centralSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры в Центральном районе с нами?"
          benefits={centralBenefitsData}
        />

        <ComparisonTable
          title="Сравните и не переплатите за квартиру"
          description="У других — риски, задержки и скрытые доплаты, у нас квартиры в Центральном районе полностью проверены и с заранее зафиксированной ценой."
          data={centralComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        {/* <HotDeals
          title="Посмотрите каталог квартир"
          description="Посмотрите все квартиры в одном месте — фотографии, цены и площади сразу на виду. Выберите вариант, который реально стоит вашего внимания."
          buttonText="Показать больше вариантов"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={centralInfoMain.mainTitle}
          mainDescription={centralInfoMain.mainDescription}
          cards={centralInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите квартиру в Центральном районе в 3 шага"
          steps={centralProcessStepsData}
          ctaText="Найдите подходящую квартиру в Сочи. Изучите актуальные предложения до того, как лучшие варианты будут проданы."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={centralPaymentMethodsData}
          ctaText="Подскажем, какой формат оплаты подойдёт именно вам, рассчитаем условия и покажем реальные варианты под выбранный способ."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={centralLeadForm.title}
          description={centralLeadForm.description}
          buttonText={centralLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={centralGallery.title}
          description={centralGallery.description}
          items={galleryData}
        />

        <Certificates
          title={centralCertificates.title}
          description={centralCertificates.description}
          certificates={certificatesData}
        />

        <About
          title="О нас"
          paragraphs={centralAboutParagraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={centralTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах в Центральном"
          items={centralFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
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

