"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BiznesKlassNovostroykiSearchForm } from '@/components/BiznesKlassNovostroykiSearchForm';
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
  biznesKlassNovostroykiHeroData,
  biznesKlassNovostroykiSearchFormData,
  biznesKlassNovostroykiBenefitsData,
  biznesKlassNovostroykiComparisonData,
  biznesKlassNovostroykiInfoMain,
  biznesKlassNovostroykiProcessStepsData,
  biznesKlassNovostroykiPaymentMethodsData,
  biznesKlassNovostroykiLeadForm,
  biznesKlassNovostroykiAboutData,
  biznesKlassNovostroykiTestimonialsData,
  biznesKlassNovostroykiFaqData,
  biznesKlassNovostroykiGalleryData,
} from '@/lib/novostroyki-biznes-klass-data';
import { contactInfoData } from '@/lib/page-data';

export default function BiznesKlassNovostroykiPage() {
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
        <Hero {...biznesKlassNovostroykiHeroData} onCtaClick={openModal} />

        <BiznesKlassNovostroykiSearchForm
          title={biznesKlassNovostroykiSearchFormData.title}
          description={biznesKlassNovostroykiSearchFormData.description}
          buttonText={biznesKlassNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит выбирать новостройки бизнес‑класса с нами?"
          benefits={biznesKlassNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните нас с другими и убедитесь сами!"
          description="С нами процесс покупки проще и надёжнее: вы видите реальные варианты, получаете сопровождение и защищены от ошибок, а не просто обещания."
          data={biznesKlassNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={biznesKlassNovostroykiInfoMain.mainTitle}
          mainDescription={biznesKlassNovostroykiInfoMain.mainDescription}
          cards={biznesKlassNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Выберите и купите новостройку за 3 шага"
          steps={biznesKlassNovostroykiProcessStepsData}
          ctaText="Начните подбор бизнес-квартир в Сочи и забронируйте подходящий вариант до того, как он уйдёт другим!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оформления новостройки"
          methods={biznesKlassNovostroykiPaymentMethodsData}
          ctaText="Определите подходящий способ оплаты и рассчитайте окончательную стоимость новостройки бизнес‑класса!"
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={biznesKlassNovostroykiLeadForm.title}
          description={biznesKlassNovostroykiLeadForm.description}
          buttonText={biznesKlassNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Просматривайте детальные планировки и видеообзоры новостроек бизнес‑класса в Сочи, чтобы убедиться в качестве квартир и оценить инфраструктуру и вид."
          items={biznesKlassNovostroykiGalleryData}
        />

        <About
          title={biznesKlassNovostroykiAboutData.title}
          paragraphs={biznesKlassNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={biznesKlassNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках"
          items={biznesKlassNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Подберите новостройки бизнес‑класса в Сочи за пару минут — все актуальные и проверенные варианты уже готовы к просмотру!"
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

