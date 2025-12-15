"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KottedzhiSimpleSearchForm } from '@/components/KottedzhiSimpleSearchForm';
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
  kottedzhiSimpleHeroData,
  kottedzhiSimpleSearchFormData,
  kottedzhiSimpleBenefitsData,
  kottedzhiSimpleComparisonData,
  kottedzhiSimpleInfoMain,
  kottedzhiSimpleProcessStepsData,
  kottedzhiSimplePaymentMethodsData,
  kottedzhiSimpleLeadForm,
  kottedzhiSimpleAboutData,
  kottedzhiSimpleBlogData,
  kottedzhiSimpleTestimonialsData,
  kottedzhiSimpleFaqData,
} from '@/lib/doma-kottedzhi-simple-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function KottedzhiPage() {
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
        <Hero {...kottedzhiSimpleHeroData} onCtaClick={openModal} />

        <KottedzhiSimpleSearchForm
          title={kottedzhiSimpleSearchFormData.title}
          description={kottedzhiSimpleSearchFormData.description}
          districts={kottedzhiSimpleSearchFormData.districts}
          buttonText={kottedzhiSimpleSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать коттедж с нами?"
          benefits={kottedzhiSimpleBenefitsData}
        />

        <ComparisonTable
          title="Не рискуйте потерять миллионы на сомнительном коттедже!"
          description="Выберите с нами среди 30+ проверенных участков в Сочи, экономите до 1 500 000 рублей на скрытых комиссиях и оформите онлайн. Не переплачивайте 10–15% и не рискуйте замороженной стройкой!"
          data={kottedzhiSimpleComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите коттеджи в каталоге"
          description="Выберите свой идеальный коттедж в Сочи уже сегодня и сэкономьте время и деньги на проверке каждого варианта."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={kottedzhiSimpleInfoMain.mainTitle}
          mainDescription={kottedzhiSimpleInfoMain.mainDescription}
          cards={kottedzhiSimpleInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите коттедж в 3 простых шага!"
          steps={kottedzhiSimpleProcessStepsData}
          ctaText="Более 870 семей уже купили коттедж без рисков и переплат. Упустите шанс — рискнёте деньгами и временем."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Платите за коттедж на выгодных условиях"
          methods={kottedzhiSimplePaymentMethodsData}
          ctaText="Не откладывайте — каждую неделю без правильного расчёта вы теряете деньги и время. Купите коттедж выгодно уже сегодня!."
          ctaButtonText="Узнать условия и расчёт"
          onCtaClick={openModal}
        />

        <LeadForm
          title={kottedzhiSimpleLeadForm.title}
          description={kottedzhiSimpleLeadForm.description}
          buttonText={kottedzhiSimpleLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Приобретите коттедж, который точно подойдёт вашей семье и бюджету."
          items={galleryData}
        />

        {/* <Certificates
          title="Сертификаты"
          description="Надёжность каждого коттеджа подтверждена официальными сертификатами и проверенными документами. Выбирайте только безопасные объекты с прозрачной историей."
          certificates={certificatesData}
        /> */}

        <About
          title={kottedzhiSimpleAboutData.title}
          paragraphs={kottedzhiSimpleAboutData.paragraphs}
        />

        {/* <Blog
          title={kottedzhiSimpleBlogData.title}
          description={kottedzhiSimpleBlogData.description}
          articles={kottedzhiSimpleBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={kottedzhiSimpleTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по коттеджам в Сочи"
          items={kottedzhiSimpleFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Начните выбор дома за городом спокойно: получите проверенные предложения и понятный план действий."
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

