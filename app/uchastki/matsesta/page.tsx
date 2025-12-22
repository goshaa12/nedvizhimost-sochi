"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MatsestaUchastkiSearchForm } from '@/components/MatsestaUchastkiSearchForm';
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
  matsestaUchastkiHeroData,
  matsestaUchastkiBenefitsData,
  matsestaUchastkiComparisonData,
  matsestaUchastkiInfoMain,
  matsestaUchastkiProcessStepsData,
  matsestaUchastkiPaymentMethodsData,
  matsestaUchastkiLeadForm,
  matsestaUchastkiAboutData,
  matsestaUchastkiTestimonialsData,
  matsestaUchastkiFaqData,
  matsestaUchastkiGalleryData,
} from '@/lib/matsesta-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function MatsestaUchastkiPage() {
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
        <Hero {...matsestaUchastkiHeroData} onCtaClick={openModal} />

        <MatsestaUchastkiSearchForm
          title="Используйте фильтр и найдите свой участок быстро!"
          description="Получите подборку участков, готовых к сделке, и выйдете на оформление без дополнительных проверок и переделок."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Получите участок в Мацесте за пару дней"
          benefits={matsestaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сохраняйте деньги и время при покупке участка в Мацесте!"
          description="С нами вы получаете полностью проверенный объект, безопасную сделку и экономию времени, без нас — рискуете потерять деньги и столкнуться со скрытыми проблемами из-за поверхностной проверки бумаг."
          data={matsestaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Откройте лучшие участки в Мацесте!"
          description="Просмотрите каталог проверенных участков и найдите идеальный вариант без лишних поездок!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={matsestaUchastkiInfoMain.mainTitle}
          mainDescription={matsestaUchastkiInfoMain.mainDescription}
          cards={matsestaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к участку в Мацесте!"
          steps={matsestaUchastkiProcessStepsData}
          ctaText="Оставьте заявку, чтобы получить подходящие участки и понять реальную стоимость покупки уже сейчас!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите участок в Мацесте любым удобным способом!"
          methods={matsestaUchastkiPaymentMethodsData}
          ctaText="Узнайте прямо сейчас, какой способ оплаты будет самым выгодным для вас!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={matsestaUchastkiLeadForm.title}
          description={matsestaUchastkiLeadForm.description}
          buttonText={matsestaUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={matsestaUchastkiGalleryData}
        />

        <About
          title={matsestaUchastkiAboutData.title}
          paragraphs={matsestaUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={matsestaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках в Мацесте"
          items={matsestaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Думаете о покупке участка в Мацесте и не знаете, с чего начать? Напишите нам! Подскажем, какие варианты сейчас есть, и на что стоит обратить внимание в первую очередь!"
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

