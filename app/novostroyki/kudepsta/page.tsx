"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KudepstaNovostroykiSearchForm } from '@/components/KudepstaNovostroykiSearchForm';
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
  kudepstaNovostroykiHeroData,
  kudepstaNovostroykiSearchFormData,
  kudepstaNovostroykiBenefitsData,
  kudepstaNovostroykiComparisonData,
  kudepstaNovostroykiInfoMain,
  kudepstaNovostroykiProcessStepsData,
  kudepstaNovostroykiPaymentMethodsData,
  kudepstaNovostroykiLeadForm,
  kudepstaNovostroykiAboutData,
  kudepstaNovostroykiTestimonialsData,
  kudepstaNovostroykiFaqData,
  kudepstaNovostroykiGalleryData,
} from '@/lib/novostroyki-kudepsta-data';
import { contactInfoData } from '@/lib/page-data';

export default function KudepstaNovostroykiPage() {
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
        <Hero {...kudepstaNovostroykiHeroData} onCtaClick={openModal} />

        <KudepstaNovostroykiSearchForm
          title={kudepstaNovostroykiSearchFormData.title}
          description={kudepstaNovostroykiSearchFormData.description}
          buttonText={kudepstaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему новостройку в Кудепсте выбирают у нас, а не у риелторов?"
          benefits={kudepstaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Почему покупать новостройку в Кудепсте с нами безопасно и выгодно"
          description="Сравните наш сервис с другими и убедитесь, что экономия времени, отсутствие рисков и реальные финансовые выгоды имеют значение!"
          data={kudepstaNovostroykiComparisonData}
          usLabel="С нами"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={kudepstaNovostroykiInfoMain.mainTitle}
          mainDescription={kudepstaNovostroykiInfoMain.mainDescription}
          cards={kudepstaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Забронируйте свою квартиру в Кудепсте прямо сейчас"
          steps={kudepstaNovostroykiProcessStepsData}
          ctaText="Не упустите шанс — лучшие новостройки в Кудепсте уходят быстро. Забронируйте свой вариант до роста цен!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите новостройку в Кудепсте любым удобным способом!"
          methods={kudepstaNovostroykiPaymentMethodsData}
          ctaText="Получите точный расчёт выгодного способа оплаты прямо сейчас!"
          ctaButtonText="Получить консультацию по новостройкам"
          onCtaClick={openModal}
        />

        <LeadForm
          title={kudepstaNovostroykiLeadForm.title}
          description={kudepstaNovostroykiLeadForm.description}
          buttonText={kudepstaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={kudepstaNovostroykiGalleryData}
        />

        <About
          title={kudepstaNovostroykiAboutData.title}
          paragraphs={kudepstaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kudepstaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={kudepstaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите быстро найти новостройку у моря и не терять время на поиски? Оставьте контакты — менеджер подберёт актуальные новостройки, покажет планировки, рассчитает лучшие условия и расскажет обо всех преимуществах каждого варианта!"
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

