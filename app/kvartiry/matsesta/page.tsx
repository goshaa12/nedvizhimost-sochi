"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MatsestaSearchForm } from '@/components/MatsestaSearchForm';
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
  matsestaHeroData,
  matsestaSearchFormData,
  matsestaBenefitsData,
  matsestaComparisonData,
  matsestaInfoMain,
  matsestaProcessStepsData,
  matsestaPaymentMethodsData,
  matsestaLeadForm,
  matsestaGallery,
  matsestaCertificates,
  matsestaAboutParagraphs,
  matsestaTestimonialsData,
  matsestaFaqData,
} from '@/lib/kvartiry-matsesta-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryMatsestaPage() {
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
        <Hero {...matsestaHeroData} onCtaClick={openModal} />

        <MatsestaSearchForm
          title={matsestaSearchFormData.title}
          description={matsestaSearchFormData.description}
          rooms={matsestaSearchFormData.rooms}
          types={matsestaSearchFormData.types}
          buttonText={matsestaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры в Мацесте с нами?"
          benefits={matsestaBenefitsData}
        />

        <ComparisonTable
          title="Сравните и убедитесь в выгоде"
          description="Сравните безопасные объекты, быстрые сделки и экономию, чтобы точно понять, где выгодно купить квартиру в Мацесте."
          data={matsestaComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        {/* <HotDeals
          title="Посмотрите каталог квартир"
          description="Просмотрите все доступные квартиры в одном месте — сразу увидите фото, цены и площади. Найдите вариант, который полностью соответствует вашим требованиям."
          buttonText="Показать больше вариантов"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={matsestaInfoMain.mainTitle}
          mainDescription={matsestaInfoMain.mainDescription}
          cards={matsestaInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите квартиру в Мацесте в 3 шага"
          steps={matsestaProcessStepsData}
          ctaText="Не тратьте недели на поиск и согласования — оставьте заявку и получите готовый подбор квартир за минуту с выгодными условиями."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={matsestaPaymentMethodsData}
          ctaText="Закрепите квартиру за собой — выберите удобный способ оплаты и получите все преимущества без лишних сложностей."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={matsestaLeadForm.title}
          description={matsestaLeadForm.description}
          buttonText={matsestaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={matsestaGallery.title}
          description={matsestaGallery.description}
          items={galleryData}
        />

        {/* <Certificates
          title={matsestaCertificates.title}
          description={matsestaCertificates.description}
          certificates={certificatesData}
        /> */}

        <About
          title="О нас"
          paragraphs={matsestaAboutParagraphs}
        />

        {/* <Blog
          title="Блог и советы по квартирам"
          description="Читайте статьи и принимайте решения без риска ошибиться при покупке квартиры. Уже 87% покупателей использовали эти советы, чтобы выбрать лучшие объекты. Подготовьтесь заранее и подберите жильё с выгодой для себя."
          articles={[]}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={matsestaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах в Мацесте"
          items={matsestaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Напишите нам и получите подборку актуальных вариантов. Не придётся долго искать — каждый объект проверен и готов к просмотру."
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

