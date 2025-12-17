"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
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
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  sredniyHeroData,
  sredniySearchFormData,
  sredniyBenefitsData,
  sredniyComparisonData,
  sredniyInfoMain,
  sredniyProcessStepsData,
  sredniyPaymentMethodsData,
  sredniyLeadForm,
  sredniyGallery,
  sredniyCertificates,
  sredniyAboutParagraphs,
  sredniyBlogData,
  sredniyTestimonialsData,
  sredniyFaqData,
  sredniyGalleryData,
} from '@/lib/kvartiry-sredniy-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartirySredniyPage() {
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
        <Hero {...sredniyHeroData} onCtaClick={openModal} />

        <SearchForm
          title={sredniySearchFormData.title}
          description={sredniySearchFormData.description}
          districts={sredniySearchFormData.districts}
          buttonText={sredniySearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры среднего класса с нами?"
          benefits={sredniyBenefitsData}
        />

        <ComparisonTable
          title="Сравните перед покупкой и не рискуйте потерять сотни тысяч"
          description="Пока у других — заморозки, просрочки и скрытые доплаты, у нас комфорт-квартиры проверены по документам и готовности, а стоимость фиксируется заранее."
          data={sredniyComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        <InfoSection
          mainTitle={sredniyInfoMain.mainTitle}
          mainDescription={sredniyInfoMain.mainDescription}
          cards={sredniyInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите квартиру комфорт-класса в 3 шага"
          steps={sredniyProcessStepsData}
          ctaText="Хотите подобрать квартиру в Сочи без риска и переплат? Узнайте доступные варианты заранее, пока лучшие предложения не разобрали."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={sredniyPaymentMethodsData}
          ctaText="Хотите узнать, какой способ оплаты даст наибольшую выгоду в вашей ситуации? Откройте доступ к расчётам и получите персональную консультацию по квартире."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={sredniyLeadForm.title}
          description={sredniyLeadForm.description}
          buttonText={sredniyLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={sredniyGallery.title}
          description={sredniyGallery.description}
          items={sredniyGalleryData}
        />

        <Certificates
          title={sredniyCertificates.title}
          description={sredniyCertificates.description}
          certificates={certificatesData}
        />

        <About
          title="О нас"
          paragraphs={sredniyAboutParagraphs}
        />

        <Blog
          title="Узнайте главное перед выбором квартиры"
          description="Откройте полезные материалы, чтобы разбираться в рынке Сочи и купить жильё, не переплатив за район и ошибки застройщика."
          articles={sredniyBlogData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={sredniyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке квартиры среднего класса"
          items={sredniyFaqData}
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

