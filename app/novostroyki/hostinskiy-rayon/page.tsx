"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HostinskiyRayonNovostroykiSearchForm } from '@/components/HostinskiyRayonNovostroykiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
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
  hostinskiyRayonNovostroykiHeroData,
  hostinskiyRayonNovostroykiSearchFormData,
  hostinskiyRayonNovostroykiBenefitsData,
  hostinskiyRayonNovostroykiComparisonData,
  hostinskiyRayonNovostroykiInfoMain,
  hostinskiyRayonNovostroykiProcessStepsData,
  hostinskiyRayonNovostroykiPaymentMethodsData,
  hostinskiyRayonNovostroykiLeadForm,
  hostinskiyRayonNovostroykiAboutData,
  hostinskiyRayonNovostroykiTestimonialsData,
  hostinskiyRayonNovostroykiFaqData,
  hostinskiyRayonNovostroykiGalleryData,
} from '@/lib/novostroyki-hostinskiy-rayon-data';
import { contactInfoData } from '@/lib/page-data';

export default function HostinskiyRayonNovostroykiPage() {
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
        <Hero {...hostinskiyRayonNovostroykiHeroData} onCtaClick={openModal} />

        <HostinskiyRayonNovostroykiSearchForm
          title={hostinskiyRayonNovostroykiSearchFormData.title}
          description={hostinskiyRayonNovostroykiSearchFormData.description}
          buttonText={hostinskiyRayonNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать новостройки в Хостинском районе с нами?"
          benefits={hostinskiyRayonNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сделайте выбор, опираясь на факты, а не слова"
          description="Сопоставьте параметры новостроек по цене, срокам и документам, чтобы сразу исключить переплаты, скрытые комиссии и навязанные условия от отдельных застройщиков."
          data={hostinskiyRayonNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={hostinskiyRayonNovostroykiInfoMain.mainTitle}
          mainDescription={hostinskiyRayonNovostroykiInfoMain.mainDescription}
          cards={hostinskiyRayonNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к вашей квартире в новостройке"
          steps={hostinskiyRayonNovostroykiProcessStepsData}
          ctaText="Уже десятки покупателей сэкономили время на выборе новостройки. Начните сейчас, чтобы не упустить варианты, которые подходят под ваш бюджет и сроки."
          ctaButtonText="Получить персональный план покупки"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты квартиры в новостройке"
          methods={hostinskiyRayonNovostroykiPaymentMethodsData}
          ctaText="Получите персональный финансовый план и выберите удобный формат покупки вашей квартиры в новостройке."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={hostinskiyRayonNovostroykiLeadForm.title}
          description={hostinskiyRayonNovostroykiLeadForm.description}
          buttonText={hostinskiyRayonNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="призыв сюда"
          items={hostinskiyRayonNovostroykiGalleryData}
        />

        <About
          title={hostinskiyRayonNovostroykiAboutData.title}
          paragraphs={hostinskiyRayonNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={hostinskiyRayonNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о покупке квартиры в новостройке Хосты"
          items={hostinskiyRayonNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте сообщение — получите ориентиры по ценам и не попадёте на завышенные предложения."
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

