"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UMoryaNovostroykiSearchForm } from '@/components/UMoryaNovostroykiSearchForm';
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
  uMoryaNovostroykiHeroData,
  uMoryaNovostroykiSearchFormData,
  uMoryaNovostroykiBenefitsData,
  uMoryaNovostroykiComparisonData,
  uMoryaNovostroykiInfoMain,
  uMoryaNovostroykiProcessStepsData,
  uMoryaNovostroykiPaymentMethodsData,
  uMoryaNovostroykiLeadForm,
  uMoryaNovostroykiAboutData,
  uMoryaNovostroykiTestimonialsData,
  uMoryaNovostroykiFaqData,
  uMoryaNovostroykiGalleryData,
} from '@/lib/novostroyki-u-morya-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function UMoryaNovostroykiPage() {
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
        <Hero {...uMoryaNovostroykiHeroData} onCtaClick={openModal} />

        <UMoryaNovostroykiSearchForm
          title={uMoryaNovostroykiSearchFormData.title}
          description={uMoryaNovostroykiSearchFormData.description}
          buttonText={uMoryaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Как мы делаем покупку новостройки в Дагомысе выгодной?"
          benefits={uMoryaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Почему с нами выгоднее и надежнее — сравните сами"
          description="Сравните наш сервис с остальными и убедитесь, что экономия времени, безопасность сделки и прозрачные условия имеют значение."
          data={uMoryaNovostroykiComparisonData}
          usLabel="С нами"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={uMoryaNovostroykiInfoMain.mainTitle}
          mainDescription={uMoryaNovostroykiInfoMain.mainDescription}
          cards={uMoryaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага до вашей новостройки"
          steps={uMoryaNovostroykiProcessStepsData}
          ctaText="Не упустите новые квартиры у моря! Подберите вариант под ваш бюджет и забронируйте, пока цены не выросли."
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплачивайте новостройки у моря легко!"
          methods={uMoryaNovostroykiPaymentMethodsData}
          ctaText="Сэкономьте время и деньги при покупке новостройки. Подберите выгодный вариант оплаты прямо сейчас!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={uMoryaNovostroykiLeadForm.title}
          description={uMoryaNovostroykiLeadForm.description}
          buttonText={uMoryaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Смотрите фото новостроек у моря и насладитесь видами на побережье прямо с балкона. Оцените квартиры до визита и выберите лучший вариант."
          items={uMoryaNovostroykiGalleryData}
        />

        <Certificates
          title="Сертификаты, дипломы и награды"
          certificates={certificatesData}
        />

        <About
          title={uMoryaNovostroykiAboutData.title}
          paragraphs={uMoryaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={uMoryaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={uMoryaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите узнать о новостройках у моря и успеть выбрать лучшие варианты до сезона? Оставьте контакты — наши менеджеры свяжутся в течение нескольких минут, помогут с подбором и ответят на все вопросы."
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

