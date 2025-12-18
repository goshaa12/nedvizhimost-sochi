"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AdlerNovostroykiSearchForm } from '@/components/AdlerNovostroykiSearchForm';
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
  adlerNovostroykiHeroData,
  adlerNovostroykiSearchFormData,
  adlerNovostroykiBenefitsData,
  adlerNovostroykiComparisonData,
  adlerNovostroykiInfoMain,
  adlerNovostroykiProcessStepsData,
  adlerNovostroykiPaymentMethodsData,
  adlerNovostroykiLeadForm,
  adlerNovostroykiAboutData,
  adlerNovostroykiTestimonialsData,
  adlerNovostroykiFaqData,
  adlerNovostroykiGalleryData,
} from '@/lib/novostroyki-adler-data';
import { contactInfoData } from '@/lib/page-data';

export default function AdlerNovostroykiPage() {
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
        <Hero {...adlerNovostroykiHeroData} onCtaClick={openModal} />

        <AdlerNovostroykiSearchForm
          title={adlerNovostroykiSearchFormData.title}
          description={adlerNovostroykiSearchFormData.description}
          buttonText={adlerNovostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему сотни клиентов уже купили новостройки в Адлере с нами?"
          benefits={adlerNovostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните новостройки Адлера, чтобы не потерять деньги"
          description="У других — переплата и шанс купить слабый объект, у нас — только проверенные новостройки от застройщика, чтобы не потерять 15% стоимости."
          data={adlerNovostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle={adlerNovostroykiInfoMain.mainTitle}
          mainDescription={adlerNovostroykiInfoMain.mainDescription}
          cards={adlerNovostroykiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага до вашей квартиры в новостройке!"
          steps={adlerNovostroykiProcessStepsData}
          ctaText="Позвоните нам — не упустите подходящую квартиру. Получите каталог и оставьте заявку на консультацию!"
          ctaButtonText="Смотреть подборку квартир в новостройках"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты квартиры!"
          methods={adlerNovostroykiPaymentMethodsData}
          ctaText="Хотите узнать, какой способ оплаты выгоднее лично для вас? Получите точный расчёт и выберите самый экономичный вариант."
          ctaButtonText="Получить расчёт выгодной оплаты новостройки"
          onCtaClick={openModal}
        />

        <LeadForm
          title={adlerNovostroykiLeadForm.title}
          description={adlerNovostroykiLeadForm.description}
          buttonText={adlerNovostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите фото и видео, чтобы за минуту понять, подходит ли вам объект: оцените планировку, вид, окружение и качество дома ещё до личного просмотра."
          items={adlerNovostroykiGalleryData}
        />

        <About
          title={adlerNovostroykiAboutData.title}
          paragraphs={adlerNovostroykiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={adlerNovostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о новостройках Адлера"
          items={adlerNovostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Свяжитесь с нами — вы получите понятный план покупки и увидите, какие новостройки подходят именно под ваш бюджет, чтобы не тратить недели на поиск вслепую."
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

