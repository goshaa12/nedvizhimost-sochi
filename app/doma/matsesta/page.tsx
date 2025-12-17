"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MatsestaDomaSearchForm } from '@/components/MatsestaDomaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
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
  matsestaDomaHeroData,
  matsestaDomaSearchFormData,
  matsestaDomaBenefitsData,
  matsestaDomaComparisonData,
  matsestaDomaInfoMain,
  matsestaDomaProcessStepsData,
  matsestaDomaPaymentMethodsData,
  matsestaDomaLeadForm,
  matsestaDomaAboutData,
  matsestaDomaBlogData,
  matsestaDomaTestimonialsData,
  matsestaDomaFaqData,
  matsestaDomaGalleryData,
} from '@/lib/doma-matsesta-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function MatsestaDomaPage() {
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
        <Hero {...matsestaDomaHeroData} onCtaClick={openModal} />

        <MatsestaDomaSearchForm
          title={matsestaDomaSearchFormData.title}
          description={matsestaDomaSearchFormData.description}
          buttonText={matsestaDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать дом в Мацесте с нами?"
          benefits={matsestaDomaBenefitsData}
        />

        <ComparisonTable
          title="Узнайте, где выгоднее покупать дома"
          description="Разберитесь, где в Мацесте безопасно купить дом и сразу выберите надёжный вариант без лишних рисков и переплат."
          data={matsestaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог домов"
          description="Смотрите проверенные дома в Мацесте с фото, планировками и точной ценой. Сразу оцените состояние участка!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={matsestaDomaInfoMain.mainTitle}
          mainDescription={matsestaDomaInfoMain.mainDescription}
          cards={matsestaDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите дом в Мацесте в 3 шага!"
          steps={matsestaDomaProcessStepsData}
          ctaText="Начните подбор прямо сейчас и посмотрите лучшие дома в Мацесте, пока они ещё доступны."
          ctaButtonText="Запросить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ покупки дома!"
          methods={matsestaDomaPaymentMethodsData}
          ctaText="Выберите способ оплаты и сразу узнайте полную стоимость вашего дома в Мацесте."
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={matsestaDomaLeadForm.title}
          description={matsestaDomaLeadForm.description}
          buttonText={matsestaDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите фото и видео каждого объекта, чтобы сразу понять, какие варианты подходят, и не тратить время на лишние просмотры."
          items={matsestaDomaGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={matsestaDomaAboutData.title}
          paragraphs={matsestaDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={matsestaDomaBlogData.title}
          description={matsestaDomaBlogData.description}
          articles={matsestaDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={matsestaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о домах"
          items={matsestaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Лучшие предложения в Мацесте уже на рынке — не откладывайте выбор!"
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

