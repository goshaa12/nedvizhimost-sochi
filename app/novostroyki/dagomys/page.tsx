"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DagomysNovostroykiSearchForm } from '@/components/DagomysNovostroykiSearchForm';
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
  dagomysNovostroykiHeroData,
  dagomysNovostroykiSearchFormData,
  dagomysNovostroykiBenefitsData,
  dagomysNovostroykiComparisonData,
  dagomysNovostroykiInfoMain,
  dagomysNovostroykiProcessStepsData,
  dagomysNovostroykiPaymentMethodsData,
  dagomysNovostroykiLeadForm,
  dagomysNovostroykiAboutData,
  dagomysNovostroykiTestimonialsData,
  dagomysNovostroykiFaqData,
  dagomysNovostroykiGalleryData,
} from '@/lib/novostroyki-dagomys-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function DagomysNovostroykiPage() {
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
        <Hero {...dagomysNovostroykiHeroData} onCtaClick={openModal} />

        <DagomysNovostroykiSearchForm
          title={dagomysNovostroykiSearchFormData.title}
          description={dagomysNovostroykiSearchFormData.description}
          buttonText={dagomysNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать новостройки в Дагомысе с нами?"
          benefits={dagomysNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните и убедитесь сами — с нами безопаснее"
          description="Оцените предложения на рынке Дагомыса и убедитесь: мы предоставляем полный контроль и сопровождение сделки."
          data={dagomysNovostroykiComparisonData}
          usLabel="С нами"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={dagomysNovostroykiInfoMain.mainTitle}
          mainDescription={dagomysNovostroykiInfoMain.mainDescription}
          cards={dagomysNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Получите новостройку в Дагомысе за 3 шага!"
          steps={dagomysNovostroykiProcessStepsData}
          ctaText="Десятки покупателей уже сэкономили время на поиске квартир. Позвоните сейчас, чтобы увидеть варианты, которые соответствуют вашему бюджету и срокам."
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплачивайте новостройку любым удобным способом"
          methods={dagomysNovostroykiPaymentMethodsData}
          ctaText="Подберите способ расчёта и узнайте финальную цену новостройки за пару минут!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={dagomysNovostroykiLeadForm.title}
          description={dagomysNovostroykiLeadForm.description}
          buttonText={dagomysNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Смотрите фото новостроек Дагомыса и убедитесь, что каждая квартира безопасна и готова к покупке."
          items={dagomysNovostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          certificates={certificatesData}
        /> */}

        <About
          title={dagomysNovostroykiAboutData.title}
          paragraphs={dagomysNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={dagomysNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={dagomysNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Откройте подборку новостроек в Дагомысе. Каждый вариант проверен, фото и планировки готовы к просмотру сразу!"
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

