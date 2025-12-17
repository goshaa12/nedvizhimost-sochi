"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UMoryaDomaSearchForm } from '@/components/UMoryaDomaSearchForm';
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
  uMoryaDomaHeroData,
  uMoryaDomaSearchFormData,
  uMoryaDomaBenefitsData,
  uMoryaDomaComparisonData,
  uMoryaDomaInfoMain,
  uMoryaDomaProcessStepsData,
  uMoryaDomaPaymentMethodsData,
  uMoryaDomaLeadForm,
  uMoryaDomaAboutData,
  uMoryaDomaBlogData,
  uMoryaDomaTestimonialsData,
  uMoryaDomaFaqData,
  uMoryaDomaGalleryData,
} from '@/lib/doma-u-morya-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function UMoryaDomaPage() {
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
        <Hero {...uMoryaDomaHeroData} onCtaClick={openModal} />

        <UMoryaDomaSearchForm
          title={uMoryaDomaSearchFormData.title}
          description={uMoryaDomaSearchFormData.description}
          buttonText={uMoryaDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему выбирают наше агентство недвижимости?"
          benefits={uMoryaDomaBenefitsData}
        />

        <ComparisonTable
          title="Сравните условия перед покупкой, чтобы не потерять подходящий дом у моря"
          description="Покупатели у других агентов теряют недели и переплачивают за дом без проверки. Сравните условия и получите дом у моря с проверенными документами и экономией до нескольких сотен тысяч рублей."
          data={uMoryaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        {/* <HotDeals
          title="Посмотрите каталог домов у моря в Сочи"
          description="За 3–5 секунд вы поймёте, стоит ли продолжать рассматривать конкретный дом. Каждый дом у моря подробно расписан по параметрам. Хотите точное совпадение? Откройте ещё — среди следующих домов может быть тот, что станет вашим уже завтра!"
          buttonText="Открыть каталог домов у моря"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={uMoryaDomaInfoMain.mainTitle}
          mainDescription={uMoryaDomaInfoMain.mainDescription}
          cards={uMoryaDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага до вашего дома у моря!"
          steps={uMoryaDomaProcessStepsData}
          ctaText="Убедитесь, что подходящие варианты не уйдут в чужие руки! Хотите купить дом у моря до 2 млн? Найдём варианты для любого бюджета — поспешите, пока цены не поднялись!"
          ctaButtonText="Получить подборку и бесплатную консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты"
          methods={uMoryaDomaPaymentMethodsData}
          ctaText="Не хотите переплатить за покупку? Выберите удобный способ оплаты, чтобы снизить стоимость и ускорить сделку на 3 дня!"
          ctaButtonText="Подобрать выгодный формат оплаты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={uMoryaDomaLeadForm.title}
          description={uMoryaDomaLeadForm.description}
          buttonText={uMoryaDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Сравните дома у моря в живую и без фильтров — убедитесь в качестве за 10 секунд!"
          items={uMoryaDomaGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={uMoryaDomaAboutData.title}
          paragraphs={uMoryaDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={uMoryaDomaBlogData.title}
          description={uMoryaDomaBlogData.description}
          articles={uMoryaDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={uMoryaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке дома возле моря"
          items={uMoryaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку и получите варианты, где цена и состояние подтверждены фактами!"
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

