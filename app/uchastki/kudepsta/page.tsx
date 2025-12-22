"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KudepstaUchastkiSearchForm } from '@/components/KudepstaUchastkiSearchForm';
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
  kudepstaUchastkiHeroData,
  kudepstaUchastkiBenefitsData,
  kudepstaUchastkiComparisonData,
  kudepstaUchastkiInfoMain,
  kudepstaUchastkiProcessStepsData,
  kudepstaUchastkiPaymentMethodsData,
  kudepstaUchastkiLeadForm,
  kudepstaUchastkiAboutData,
  kudepstaUchastkiTestimonialsData,
  kudepstaUchastkiFaqData,
  kudepstaUchastkiGalleryData,
} from '@/lib/kudepsta-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function KudepstaUchastkiPage() {
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
        <Hero {...kudepstaUchastkiHeroData} onCtaClick={openModal} />

        <KudepstaUchastkiSearchForm
          title="Настройте поиск участка под себя!"
          description="Используйте фильтр, чтобы сразу видеть только те участки, которые подходят по назначению, цене и формату."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в Кудепсте с нами?"
          benefits={kudepstaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Покупка участка в Кудепсте: где переплачивают, а где экономят?"
          description="При выборе земли без проверки легко потерять до 10–15% бюджета и несколько недель времени. Разные подходы дают разный результат — сравните их до решения."
          data={kudepstaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Смотрите актуальные участки!"
          description="В каталоге собраны реальные предложения с фото, параметрами и ценами — всё, что нужно, чтобы оценить участок с первого взгляда."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={kudepstaUchastkiInfoMain.mainTitle}
          mainDescription={kudepstaUchastkiInfoMain.mainDescription}
          cards={kudepstaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашему участку в Кудепсте"
          steps={kudepstaUchastkiProcessStepsData}
          ctaText="Не откладывайте — лучшие предложения разбирают за 5-7 дней!"
          ctaButtonText="Получить персональную подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте удобный способ оплаты участка в Кудепсте!"
          methods={kudepstaUchastkiPaymentMethodsData}
          ctaText="Уточните, какой способ оплаты подойдёт именно вам!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={kudepstaUchastkiLeadForm.title}
          description={kudepstaUchastkiLeadForm.description}
          buttonText={kudepstaUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={kudepstaUchastkiGalleryData}
        />

        <About
          title={kudepstaUchastkiAboutData.title}
          paragraphs={kudepstaUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kudepstaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе участка"
          items={kudepstaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Куда проще принять решение, когда все данные перед глазами. Получите список проверенных участков в Кудепсте и не откладывайте покупку!"
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

