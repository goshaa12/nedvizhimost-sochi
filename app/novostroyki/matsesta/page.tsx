"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MatsestaNovostroykiSearchForm } from '@/components/MatsestaNovostroykiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
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
  matsestaNovostroykiHeroData,
  matsestaNovostroykiSearchFormData,
  matsestaNovostroykiBenefitsData,
  matsestaNovostroykiComparisonData,
  matsestaNovostroykiInfoMain,
  matsestaNovostroykiProcessStepsData,
  matsestaNovostroykiPaymentMethodsData,
  matsestaNovostroykiLeadForm,
  matsestaNovostroykiAboutData,
  matsestaNovostroykiTestimonialsData,
  matsestaNovostroykiFaqData,
  matsestaNovostroykiGalleryData,
} from '@/lib/novostroyki-matsesta-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function MatsestaNovostroykiPage() {
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
        <Hero {...matsestaNovostroykiHeroData} onCtaClick={openModal} />

        <MatsestaNovostroykiSearchForm
          title={matsestaNovostroykiSearchFormData.title}
          description={matsestaNovostroykiSearchFormData.description}
          buttonText={matsestaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему новостройки в Мацесте выгоднее покупать с нами?"
          benefits={matsestaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Оцените разницу и забудьте о рисках с другими агентствами"
          description="Смотрите предложения агентств в Мацесте и выберите партнёров с надёжной репутацией и честными условиями."
          data={matsestaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={matsestaNovostroykiInfoMain.mainTitle}
          mainDescription={matsestaNovostroykiInfoMain.mainDescription}
          cards={matsestaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Купите новостройку в Мацесте за 3 шага!"
          steps={matsestaNovostroykiProcessStepsData}
          ctaText="Доверьте поиск нам и получите проверенную новостройку — оставьте заявку на подбор прямо сейчас!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты новостройки"
          methods={matsestaNovostroykiPaymentMethodsData}
          ctaText="Доверьте процесс нам, и получите новостройку без лишних расходов!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={matsestaNovostroykiLeadForm.title}
          description={matsestaNovostroykiLeadForm.description}
          buttonText={matsestaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Смотрите фото объектов, чтобы вы заранее понимали уровень строительства и перспективы района."
          items={matsestaNovostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          certificates={certificatesData}
        /> */}

        <About
          title={matsestaNovostroykiAboutData.title}
          paragraphs={matsestaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={matsestaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={matsestaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Тысячи покупателей уже оформили новостройки в Мацесте. Оставьте заявку и получите предложения с полной информацией по стоимости и планировкам!"
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

