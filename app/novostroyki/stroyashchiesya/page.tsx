"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StroyashchiesyaNovostroykiSearchForm } from '@/components/StroyashchiesyaNovostroykiSearchForm';
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
  stroyashchiesyaNovostroykiHeroData,
  stroyashchiesyaNovostroykiSearchFormData,
  stroyashchiesyaNovostroykiBenefitsData,
  stroyashchiesyaNovostroykiComparisonData,
  stroyashchiesyaNovostroykiInfoMain,
  stroyashchiesyaNovostroykiProcessStepsData,
  stroyashchiesyaNovostroykiPaymentMethodsData,
  stroyashchiesyaNovostroykiLeadForm,
  stroyashchiesyaNovostroykiAboutData,
  stroyashchiesyaNovostroykiTestimonialsData,
  stroyashchiesyaNovostroykiFaqData,
  stroyashchiesyaNovostroykiGalleryData,
} from '@/lib/novostroyki-stroyashchiesya-data';
import { contactInfoData } from '@/lib/page-data';

export default function StroyashchiesyaNovostroykiPage() {
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
        <Hero {...stroyashchiesyaNovostroykiHeroData} onCtaClick={openModal} />

        <StroyashchiesyaNovostroykiSearchForm
          title={stroyashchiesyaNovostroykiSearchFormData.title}
          description={stroyashchiesyaNovostroykiSearchFormData.description}
          buttonText={stroyashchiesyaNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры в строящихся новостройках с нами?"
          benefits={stroyashchiesyaNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните перед покупкой в новостройке, чтобы не пожалеть через неделю"
          description="Каждый третий покупатель переплачивает или выбирает неудачную локацию. Сравнение помогает сохранить деньги, время и закрепить за собой квартиру в новостройке, пока её не забрали быстрее вас."
          data={stroyashchiesyaNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={stroyashchiesyaNovostroykiInfoMain.mainTitle}
          mainDescription={stroyashchiesyaNovostroykiInfoMain.mainDescription}
          cards={stroyashchiesyaNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите квартиру в новостройке в 3 шага!"
          steps={stroyashchiesyaNovostroykiProcessStepsData}
          ctaText="Свяжитесь с нами — проверим понравившиеся новостройки и дадим точный прогноз по росту."
          ctaButtonText="Оставить заявку и получить расчёт по новостройке"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте самые выгодные способы оплаты квартиры в сданной новостройке"
          methods={stroyashchiesyaNovostroykiPaymentMethodsData}
          ctaText="Хотите понять, какой способ оплаты даст максимальную выгоду при вашем бюджете? Получите расчёт и сэкономьте сотни тысяч при покупке в новостройке уже сегодня!"
          ctaButtonText="Узнать выгодный способ оплаты жилья в новостройке"
          onCtaClick={openModal}
        />

        <LeadForm
          title={stroyashchiesyaNovostroykiLeadForm.title}
          description={stroyashchiesyaNovostroykiLeadForm.description}
          buttonText={stroyashchiesyaNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите реальные фото и видео стройки, чтобы оценить темпы работ, видовые точки и окружение до покупки. Посмотрите заранее, что получите после сдачи!"
          items={stroyashchiesyaNovostroykiGalleryData}
        />

        <About
          title={stroyashchiesyaNovostroykiAboutData.title}
          paragraphs={stroyashchiesyaNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={stroyashchiesyaNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о строящихся новостройках"
          items={stroyashchiesyaNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="870 покупателей уже нашли квартиру в новостройке! Присоединяйтесь — получите точный расчёт и проверку застройщика. Не упустите понравившиеся варианты новостроек!"
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

