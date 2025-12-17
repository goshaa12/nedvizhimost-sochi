"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MamaykaSearchForm } from '@/components/MamaykaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
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
  mamaykaHeroData,
  mamaykaSearchFormData,
  mamaykaBenefitsData,
  mamaykaComparisonData,
  mamaykaInfoMain,
  mamaykaProcessStepsData,
  mamaykaPaymentMethodsData,
  mamaykaLeadForm,
  mamaykaGallery,
  mamaykaAboutParagraphs,
  mamaykaTestimonialsData,
  mamaykaFaqData,
} from '@/lib/kvartiry-mamayka-data';
import { mamaykaGalleryData } from '@/lib/kvartiry-mamayka-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryMamaykaPage() {
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
        <Hero {...mamaykaHeroData} onCtaClick={openModal} />

        <MamaykaSearchForm
          title={mamaykaSearchFormData.title}
          description={mamaykaSearchFormData.description}
          classes={mamaykaSearchFormData.classes}
          rooms={mamaykaSearchFormData.rooms}
          types={mamaykaSearchFormData.types}
          buttonText={mamaykaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупают квартиру в Мамайке с нами?"
          benefits={mamaykaBenefitsData}
        />

        <ComparisonTable
          title="Не рискуйте деньгами и временем — выбирайте безопасное жильё в Мамайке"
          description="Без нас можно столкнуться с переплатой, потерей времени на проверки и лишним стрессом."
          data={mamaykaComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        {/* <HotDeals
          title="Каталог квартир"
          description="Просмотрите наш каталог и найдите идеальную квартиру для жизни или отдыха! Каждая квартира сопровождается подробной информацией, фото и актуальными ценами — выбирайте с комфортом и уверенностью."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={mamaykaInfoMain.mainTitle}
          mainDescription={mamaykaInfoMain.mainDescription}
          cards={mamaykaInfoMain.cards}
        />

        <ProcessSteps
          title="3 шага к вашей квартире в Мамайке"
          steps={mamaykaProcessStepsData}
          ctaText="Мы ведём сделку под контролем, чтобы вы получили квартиру в Мамайке без переплат и стресса. Свяжитесь с нами — сделаем покупку выгодной и спокойной."
          ctaButtonText="Получить консультацию и подбор квартир прямо сейчас"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Удобные способы оплаты"
          methods={mamaykaPaymentMethodsData}
          ctaText="Не откладывайте покупку — зафиксируйте выгодные условия и гарантируйте себе спокойствие при покупке квартиры."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={mamaykaLeadForm.title}
          description={mamaykaLeadForm.description}
          buttonText={mamaykaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={mamaykaGallery.title}
          description={mamaykaGallery.description}
          items={mamaykaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={mamaykaAboutParagraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={mamaykaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по квартирам в районе Мамайка"
          items={mamaykaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами"
          description="Выберите свою квартиру без риска — только 5 консультаций сегодня! Оставьте заявку и получите подбор вариантов и проверку документов. Не откладывайте, пока другие займут лучшие объекты!"
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

