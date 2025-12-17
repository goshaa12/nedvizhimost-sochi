"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HostinskySearchForm } from '@/components/HostinskySearchForm';
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
  hostinskyHeroData,
  hostinskySearchFormData,
  hostinskyBenefitsData,
  hostinskyComparisonData,
  hostinskyInfoMain,
  hostinskyProcessStepsData,
  hostinskyPaymentMethodsData,
  hostinskyLeadForm,
  hostinskyGallery,
  hostinskyCertificates,
  hostinskyAboutParagraphs,
  hostinskyTestimonialsData,
  hostinskyFaqData,
} from '@/lib/kvartiry-hostinsky-data';
import { hostinskyGalleryData } from '@/lib/kvartiry-hostinsky-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryHostinskyPage() {
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
        <Hero {...hostinskyHeroData} onCtaClick={openModal} />

        <HostinskySearchForm
          title={hostinskySearchFormData.title}
          description={hostinskySearchFormData.description}
          classes={hostinskySearchFormData.classes}
          rooms={hostinskySearchFormData.rooms}
          types={hostinskySearchFormData.types}
          buttonText={hostinskySearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему купить квартиру в Хостинском районе с нами выгодно и безопасно?"
          benefits={hostinskyBenefitsData}
        />

        <ComparisonTable
          title="Действуйте сейчас — не рискуйте временем и бюджетом"
          description="Выбирая вслепую, легко наткнуться на объект с необходимым ремонтом, проблемной историей или завышенной стоимостью. С нашей помощью вы получаете проверенную квартиру без лишних расходов и стрессов."
          data={hostinskyComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог квартир"
          description="Хотите приобрести квартиру в Хосте? Мы подберём лучшие квартиры в Хостинском районе — быстро, по бюджету и без переплат. Пока вы сомневаетесь, качественные новостройки уже разбирают. Выбирайте проверенные объекты и экономьте время и деньги."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={hostinskyInfoMain.mainTitle}
          mainDescription={hostinskyInfoMain.mainDescription}
          cards={hostinskyInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к вашей квартире в Хостинском районе"
          steps={hostinskyProcessStepsData}
          ctaText="Не рискуйте временем и деньгами — доверьте процесс экспертам и получите квартиру в Хосте без задержек, ошибок и переплат."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Удобные способы оплаты"
          methods={hostinskyPaymentMethodsData}
          ctaText="Не откладывайте покупку — зафиксируйте выгодные условия и гарантируйте себе спокойствие при покупке квартиры."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={hostinskyLeadForm.title}
          description={hostinskyLeadForm.description}
          buttonText={hostinskyLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={hostinskyGallery.title}
          description={hostinskyGallery.description}
          items={hostinskyGalleryData}
        />
{/* 
        <Certificates
          title={hostinskyCertificates.title}
          description={hostinskyCertificates.description}
          certificates={certificatesData}
        /> */}

        <About
          title="О нас"
          paragraphs={hostinskyAboutParagraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={hostinskyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах в Хосте"
          items={hostinskyFaqData}
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

