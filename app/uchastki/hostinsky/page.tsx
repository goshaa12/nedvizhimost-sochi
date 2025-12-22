"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HostinskyUchastkiSearchForm } from '@/components/HostinskyUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
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
  hostinskyUchastkiHeroData,
  hostinskyUchastkiBenefitsData,
  hostinskyUchastkiComparisonData,
  hostinskyUchastkiInfoMain,
  hostinskyUchastkiProcessStepsData,
  hostinskyUchastkiPaymentMethodsData,
  hostinskyUchastkiLeadForm,
  hostinskyUchastkiAboutData,
  hostinskyUchastkiTestimonialsData,
  hostinskyUchastkiFaqData,
  hostinskyUchastkiGalleryData,
} from '@/lib/hostinsky-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function HostinskyUchastkiPage() {
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
        <Hero {...hostinskyUchastkiHeroData} onCtaClick={openModal} />

        <HostinskyUchastkiSearchForm
          title="Настройте поиск под себя!"
          description="Используйте фильтр, чтобы сразу видеть только те участки, которые подходят по назначению, цене и формату."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в Кудепсте с нами?"
          benefits={hostinskyUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Подходите к выбору участка в Хосте без спешки"
          description="Без проверки земли легко переплатить 10–15% и потерять несколько недель. Подходы к покупке отличаются — лучше увидеть разницу до принятия решения."
          data={hostinskyUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />
{/* 
        <HotDeals
          title="Смотрите актуальные участки!"
          description="В каталоге собраны реальные предложения с фото, параметрами и ценами — всё, что нужно, чтобы оценить участок с первого взгляда."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={hostinskyUchastkiInfoMain.mainTitle}
          mainDescription={hostinskyUchastkiInfoMain.mainDescription}
          cards={hostinskyUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашему участку в Хостинском районе!"
          steps={hostinskyUchastkiProcessStepsData}
          ctaText="Не тяните с решением — ликвидные участки в Хосте уходят за 5–7 дней!"
          ctaButtonText="Получить персональную подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты участка в Хосте!"
          methods={hostinskyUchastkiPaymentMethodsData}
          ctaText="Узнайте, какой формат оплаты подойдёт именно под вашу ситуацию."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={hostinskyUchastkiLeadForm.title}
          description={hostinskyUchastkiLeadForm.description}
          buttonText={hostinskyUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={hostinskyUchastkiGalleryData}
        />

        <About
          title={hostinskyUchastkiAboutData.title}
          paragraphs={hostinskyUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={hostinskyUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе участка"
          items={hostinskyUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Куда проще принять решение, когда все данные перед глазами. Получите список проверенных участок в Хосте и не откладывайте покупку!"
          contactInfo={contactInfoData}
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Contact form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
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

