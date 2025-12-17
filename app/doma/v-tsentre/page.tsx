"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { VTsentreDomaSearchForm } from '@/components/VTsentreDomaSearchForm';
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
  vTsentreDomaHeroData,
  vTsentreDomaSearchFormData,
  vTsentreDomaBenefitsData,
  vTsentreDomaComparisonData,
  vTsentreDomaInfoMain,
  vTsentreDomaProcessStepsData,
  vTsentreDomaPaymentMethodsData,
  vTsentreDomaLeadForm,
  vTsentreDomaAboutData,
  vTsentreDomaBlogData,
  vTsentreDomaTestimonialsData,
  vTsentreDomaFaqData,
  vTsentreDomaGalleryData,
} from '@/lib/doma-v-tsentre-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function VTsentreDomaPage() {
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
        <Hero {...vTsentreDomaHeroData} onCtaClick={openModal} />

        <VTsentreDomaSearchForm
          title={vTsentreDomaSearchFormData.title}
          description={vTsentreDomaSearchFormData.description}
          buttonText={vTsentreDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему выбирают нас для покупки домов?"
          benefits={vTsentreDomaBenefitsData}
        />

        <ComparisonTable
          title="Сравните подходы к покупке дома в центре Сочи, чтобы не переплатить зря"
          description="У других — риск купить «красивую картинку» с проблемами, а с нами вы сразу увидите реальное состояние жильяи сэкономите до 20% на сделке."
          data={vTsentreDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        {/* <HotDeals
          title="Выберите дом в центре Сочи из каталога!"
          description="Через 5 секунд вы поймёте, подходит ли вам вариант— каждый объект показывает ключевые параметры сразу. Хотите увидеть больше? Откройте следующие варианты — среди них может быть ваш будущий дом в Сочи."
          buttonText="Стать владельцем дома в центре Сочи"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={vTsentreDomaInfoMain.mainTitle}
          mainDescription={vTsentreDomaInfoMain.mainDescription}
          cards={vTsentreDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите дом в центре Сочи в 3 шага!"
          steps={vTsentreDomaProcessStepsData}
          ctaText="Не упустите понравившиеся дома в центре — зафиксируйте выбор сейчас, пока варианты ещё доступны на рынке!"
          ctaButtonText="Забронировать подбор"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте удобные способы оплаты!"
          methods={vTsentreDomaPaymentMethodsData}
          ctaText="Закройте вопрос с оплатой за один разговор — узнайте выгодную стратегию перед покупкой дома!"
          ctaButtonText="Узнать лучший способ оплаты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={vTsentreDomaLeadForm.title}
          description={vTsentreDomaLeadForm.description}
          buttonText={vTsentreDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите реальные фасады, подъезды, парковку, шум по часам и видовые точки до просмотра — сэкономьте до 5 часов на поездках и сразу поймите, подходит ли дом под ваш образ жизни."
          items={vTsentreDomaGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={vTsentreDomaAboutData.title}
          paragraphs={vTsentreDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={vTsentreDomaBlogData.title}
          description={vTsentreDomaBlogData.description}
          articles={vTsentreDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={vTsentreDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке дома в центре Сочи"
          items={vTsentreDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку — получите доступ к лучшим домам в центре Сочи раньше других, избежите переплаты и сразу увидите варианты, которые стоят покупки."
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

