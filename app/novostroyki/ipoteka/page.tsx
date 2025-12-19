"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { IPotekaNovostroykiSearchForm } from '@/components/IPotekaNovostroykiSearchForm';
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
  ipotekaNovostroykiHeroData,
  ipotekaNovostroykiSearchFormData,
  ipotekaNovostroykiBenefitsData,
  ipotekaNovostroykiComparisonData,
  ipotekaNovostroykiInfoMain,
  ipotekaNovostroykiProcessStepsData,
  ipotekaNovostroykiPaymentMethodsData,
  ipotekaNovostroykiLeadForm,
  ipotekaNovostroykiAboutData,
  ipotekaNovostroykiTestimonialsData,
  ipotekaNovostroykiFaqData,
  ipotekaNovostroykiGalleryData,
} from '@/lib/novostroyki-ipoteka-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function IPotekaNovostroykiPage() {
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
        <Hero {...ipotekaNovostroykiHeroData} onCtaClick={openModal} />

        <IPotekaNovostroykiSearchForm
          title={ipotekaNovostroykiSearchFormData.title}
          description={ipotekaNovostroykiSearchFormData.description}
          buttonText={ipotekaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит оформлять ипотеку с нами?"
          benefits={ipotekaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните подходы и забудьте о проблемах с ипотекой"
          description="Сравните наши условия с другими агентствами и убедитесь, где оформляют проще, а сделки проходят без рисков."
          data={ipotekaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={ipotekaNovostroykiInfoMain.mainTitle}
          mainDescription={ipotekaNovostroykiInfoMain.mainDescription}
          cards={ipotekaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Получите одобрение по ипотеке за 3 шага!"
          steps={ipotekaNovostroykiProcessStepsData}
          ctaText="Не теряйте время на поиск и проверку — доверьте подбор экспертам и оформите ипотеку за 3 дня!"
          ctaButtonText="Оставить заявку на ипотеку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплачивайте новостройки в ипотеку легко!"
          methods={ipotekaNovostroykiPaymentMethodsData}
          ctaText="Сэкономьте время и деньги при покупке новостройки. Подберите выгодный вариант оплаты прямо сейчас!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={ipotekaNovostroykiLeadForm.title}
          description={ipotekaNovostroykiLeadForm.description}
          buttonText={ipotekaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Оцените фото квартир, фасадов и планировок. Сравните и выберите варианты, которые подходят под ваши требования по ипотеке."
          items={ipotekaNovostroykiGalleryData}
        />

        <Certificates
          title="Сертификаты, дипломы и награды"
          certificates={certificatesData}
        />

        <About
          title={ipotekaNovostroykiAboutData.title}
          paragraphs={ipotekaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ipotekaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об ипотеках"
          items={ipotekaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите выбрать новостройку в ипотеку с высокой вероятностью одобрения? Оставьте контакт — менеджер свяжется за несколько минут, подберёт варианты и расскажет про условия."
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

