"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
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
  ekonomHeroData,
  ekonomBenefitsData,
  ekonomComparisonData,
  ekonomInfoMain,
  ekonomProcessStepsData,
  ekonomPaymentMethodsData,
  ekonomLeadForm,
  ekonomGallery,
  ekonomCertificates,
  ekonomAboutParagraphs,
  ekonomBlogData,
  ekonomTestimonialsData,
  ekonomFaqData,
} from '@/lib/kvartiry-ekonom-data';
import { ekonomGalleryData } from '@/lib/kvartiry-ekonom-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryEkonomPage() {
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
        <Hero {...ekonomHeroData} onCtaClick={openModal} />

        <BenefitsGrid
          title="Почему стоит покупать квартиры эконом-класса с нами?"
          benefits={ekonomBenefitsData}
        />

        <ComparisonTable
          title="Сравните и избегите ошибки, которая стоит месяцев и сотен тысяч"
          description="С нами вы можете купить квартиру эконом-класса и сразу понять, где выгода и безопасность, а у других легко потерять время, переплатить и выбрать объект, который потом будет тяжело продать."
          data={ekonomComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        <InfoSection
          mainTitle={ekonomInfoMain.mainTitle}
          mainDescription={ekonomInfoMain.mainDescription}
          cards={ekonomInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите квартиру эконом-класса в 3 шага"
          steps={ekonomProcessStepsData}
          ctaText="Узнайте, какие варианты подходят под ваш бюджет. Получите понятный план действий и приобретите квартиру в Сочи уже сегодня!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={ekonomPaymentMethodsData}
          ctaText="Узнайте, какие варианты оплаты помогут избежать переплат и ошибок. Не рискуйте бюджетом из-за неверного расчёта."
          ctaButtonText="Получить консультацию и не переплачивать за квартиру"
          onCtaClick={openModal}
        />

        <LeadForm
          title={ekonomLeadForm.title}
          description={ekonomLeadForm.description}
          buttonText={ekonomLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={ekonomGallery.title}
          description={ekonomGallery.description}
          items={ekonomGalleryData}
        />

        <About
          title="О нас"
          paragraphs={ekonomAboutParagraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ekonomTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке квартиры эконом-класса"
          items={ekonomFaqData}
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


