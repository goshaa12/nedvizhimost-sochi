"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SimpleSearchForm } from '@/components/SimpleSearchForm';
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
  dvuhkomHeroData,
  dvuhkomSearchFormData,
  dvuhkomBenefitsData,
  dvuhkomComparisonData,
  dvuhkomInfoMain,
  dvuhkomProcessStepsData,
  dvuhkomPaymentMethodsData,
  dvuhkomLeadForm,
  dvuhkomGallery,
  dvuhkomCertificates,
  dvuhkomAboutParagraphs,
  dvuhkomBlogData,
  dvuhkomTestimonialsData,
  dvuhkomFaqData,
} from '@/lib/kvartiry-2kom-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function Kvartiry2KomPage() {
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
        <Hero {...dvuhkomHeroData} onCtaClick={openModal} />

        <SimpleSearchForm
          title={dvuhkomSearchFormData.title}
          description={dvuhkomSearchFormData.description}
          districts={dvuhkomSearchFormData.districts}
          buttonText={dvuhkomSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать 2-комнатные квартиры с нами выгоднее?"
          benefits={dvuhkomBenefitsData}
        />

        <ComparisonTable
          title="Сравните перед выбором, чтобы купить квартиру без лишних рисков"
          description="С нами квартира проходит полную юридическую проверку и выходит на сделку уверенно, а без такой проверки выше шанс столкнуться с обременениями и потерять время и деньги на исправление ошибок."
          data={dvuhkomComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        {/* <HotDeals
          title="Посмотрите 2-комнатные квартиры в каталоге"
          description="Подберите подходящую 2-комнатную по району, бюджету и планировке — каждый объект с актуальной ценой, расстоянием до моря и полной информацией для быстрого решения."
          buttonText="Показать больше вариантов квартир"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={dvuhkomInfoMain.mainTitle}
          mainDescription={dvuhkomInfoMain.mainDescription}
          cards={dvuhkomInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите 2-комнатную квартиру в Сочи в 3 шага"
          steps={dvuhkomProcessStepsData}
          ctaText="Готовы получить подбор под ваши параметры? Получите подбор, который подходит под ваши параметры уже сейчас."
          ctaButtonText="Получить персональное предложение"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите выгодный способ оплаты"
          methods={dvuhkomPaymentMethodsData}
          ctaText="Оформите подбор и узнайте, какой способ оплаты будет выгоднее именно для вас."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={dvuhkomLeadForm.title}
          description={dvuhkomLeadForm.description}
          buttonText={dvuhkomLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={dvuhkomGallery.title}
          description={dvuhkomGallery.description}
          items={galleryData}
        />

        <Certificates
          title={dvuhkomCertificates.title}
          description={dvuhkomCertificates.description}
          certificates={certificatesData}
        />

        <About
          title="О нас"
          paragraphs={dvuhkomAboutParagraphs}
        />

        <Blog
          title="Читайте полезные материалы и экономьте"
          description="Инсайдерские знания рынка = ваша реальная выгода при выборе жилья. Уже 870 покупателей использовали эти материалы, чтобы купить двушку осознанно и без переплат. Прочитайте, примените и быстрее находите недорогие 2-комнатные квартиры и варианты жилья — выходите на сделку уверенно."
          articles={dvuhkomBlogData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={dvuhkomTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при купле квартиры"
          items={dvuhkomFaqData}
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

