"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OtZastroyshchikaNovostroykiSearchForm } from '@/components/OtZastroyshchikaNovostroykiSearchForm';
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
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  otZastroyshchikaNovostroykiHeroData,
  otZastroyshchikaNovostroykiSearchFormData,
  otZastroyshchikaNovostroykiBenefitsData,
  otZastroyshchikaNovostroykiComparisonData,
  otZastroyshchikaNovostroykiInfoMain,
  otZastroyshchikaNovostroykiProcessStepsData,
  otZastroyshchikaNovostroykiPaymentMethodsData,
  otZastroyshchikaNovostroykiLeadForm,
  otZastroyshchikaNovostroykiAboutData,
  otZastroyshchikaNovostroykiBlogData,
  otZastroyshchikaNovostroykiTestimonialsData,
  otZastroyshchikaNovostroykiFaqData,
  otZastroyshchikaNovostroykiGalleryData,
} from '@/lib/novostroyki-ot-zastroyshchika-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function OtZastroyshchikaNovostroykiPage() {
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
        <Hero {...otZastroyshchikaNovostroykiHeroData} onCtaClick={openModal} />

        <OtZastroyshchikaNovostroykiSearchForm
          title={otZastroyshchikaNovostroykiSearchFormData.title}
          description={otZastroyshchikaNovostroykiSearchFormData.description}
          buttonText={otZastroyshchikaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать новостройки от застройщика с нами?"
          benefits={otZastroyshchikaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните предложения и не теряйте выгоду при покупке у застройщика!"
          description="У других — комиссии и потери времени, с нами — фиксированная стоимость новостройки от застройщика и контроль сделки с первого дня."
          data={otZastroyshchikaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={otZastroyshchikaNovostroykiInfoMain.mainTitle}
          mainDescription={otZastroyshchikaNovostroykiInfoMain.mainDescription}
          cards={otZastroyshchikaNovostroykiInfoMain.cards}
        />

        {/* <HotDeals
          title="Найдите подходящую квартиру от застройщика в каталоге"
          description="Начните с просмотра, чтобы сразу понять диапазон цен и доступные варианты."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <ProcessSteps
          title="Осталось 3 шага к вашей квартире в новостройке от застройщика"
          steps={otZastroyshchikaNovostroykiProcessStepsData}
          ctaText="Примите решение быстрее, пока выбранный вариант доступен. Получите пошаговый план сделки и оформите покупку без затягивания сроков!"
          ctaButtonText="Получить персональный план покупки"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты квартиры от застройщика"
          methods={otZastroyshchikaNovostroykiPaymentMethodsData}
          ctaText="Узнайте, какой способ оплаты выгоднее именно для вашей ситуации!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={otZastroyshchikaNovostroykiLeadForm.title}
          description={otZastroyshchikaNovostroykiLeadForm.description}
          buttonText={otZastroyshchikaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={otZastroyshchikaNovostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={otZastroyshchikaNovostroykiAboutData.title}
          paragraphs={otZastroyshchikaNovostroykiAboutData.paragraphs}
        />

        {/* <Blog
          title={otZastroyshchikaNovostroykiBlogData.title}
          description={otZastroyshchikaNovostroykiBlogData.description}
          articles={otZastroyshchikaNovostroykiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={otZastroyshchikaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе квартиры от застройщика"
          items={otZastroyshchikaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не знаете, с чего начать приобретение жилья у застройщика? Напишите — за 5 минут подберём квартиры под ваш бюджет и задачу!"
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

