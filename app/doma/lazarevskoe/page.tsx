"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LazarevskoeDomaSearchForm } from '@/components/LazarevskoeDomaSearchForm';
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
  lazarevskoeDomaHeroData,
  lazarevskoeDomaSearchFormData,
  lazarevskoeDomaBenefitsData,
  lazarevskoeDomaComparisonData,
  lazarevskoeDomaInfoMain,
  lazarevskoeDomaProcessStepsData,
  lazarevskoeDomaPaymentMethodsData,
  lazarevskoeDomaLeadForm,
  lazarevskoeDomaAboutData,
  lazarevskoeDomaBlogData,
  lazarevskoeDomaTestimonialsData,
  lazarevskoeDomaFaqData,
  lazarevskoeDomaGalleryData,
} from '@/lib/doma-lazarevskoe-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function LazarevskoeDomaPage() {
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
        <Hero {...lazarevskoeDomaHeroData} onCtaClick={openModal} />

        <LazarevskoeDomaSearchForm
          title={lazarevskoeDomaSearchFormData.title}
          description={lazarevskoeDomaSearchFormData.description}
          buttonText={lazarevskoeDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему работать с нами выгодно и безопасно?"
          benefits={lazarevskoeDomaBenefitsData}
        />

        <ComparisonTable
          title="Не рискуйте выбрать проблемный дом и переплатить!"
          description="С нами вы быстро находите подходящий дом, экономите время и средства, избегаете юридических и финансовых проблем."
          data={lazarevskoeDomaComparisonData}
          usLabel="Мы"
          othersLabel="Конкуренты"
        />

        {/* <HotDeals
          title="Каталог домов в Лазаревском"
          description="Найдите свой дом мечты у моря уже сегодня. Каждая карточка даёт всю информацию, чтобы вы могли выбрать подходящий вариант без лишних поездок. Выберите дом сейчас и спланируйте переезд к морю без стресса и лишних расходов!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={lazarevskoeDomaInfoMain.mainTitle}
          mainDescription={lazarevskoeDomaInfoMain.mainDescription}
          cards={lazarevskoeDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Три простых шага к вашему дому мечты в Лазаревском районе"
          steps={lazarevskoeDomaProcessStepsData}
          ctaText="Не рискуйте с недобросовестными продавцами — с нами вы возьмёте проверенный дом в Лазаревском районе, сэкономите время и деньги, и переезд пройдёт спокойно. Закажите консультацию прямо сейчас!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите дом в Лазаревском без дополнительных трат"
          methods={lazarevskoeDomaPaymentMethodsData}
          ctaText="Выберите удобный способ оплаты для безопасной сделки без скрытых комиссий от посредников!"
          ctaButtonText="Оплатить и забронировать дом"
          onCtaClick={openModal}
        />

        <LeadForm
          title={lazarevskoeDomaLeadForm.title}
          description={lazarevskoeDomaLeadForm.description}
          buttonText={lazarevskoeDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Хиты продаж домов в Лазаревском"
          description="Откройте подборку лучших домов в Лазаревском и найдите идеальный дом за минуты."
          items={lazarevskoeDomaGalleryData}
        />

        {/* <Certificates
          title="Сертификаты"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={lazarevskoeDomaAboutData.title}
          paragraphs={lazarevskoeDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={lazarevskoeDomaBlogData.title}
          description={lazarevskoeDomaBlogData.description}
          articles={lazarevskoeDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={lazarevskoeDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по дому в Лазаревском районе"
          items={lazarevskoeDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку — подберём дома с надёжными документами и сразу покажем, где вы сэкономите время и деньги."
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

