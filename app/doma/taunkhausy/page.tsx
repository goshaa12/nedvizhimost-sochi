"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TagilSearchForm } from '@/components/TagilSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  tagilHeroData,
  tagilSearchFormData,
  tagilBenefitsData,
  tagilComparisonData,
  tagilInfoMain,
  tagilProcessStepsData,
  tagilPaymentMethodsData,
  tagilLeadForm,
  tagilAboutData,
  tagilBlogData,
  tagilTestimonialsData,
  tagilFaqData,
  tagilGalleryData,
} from '@/lib/doma-tagil-data';
import { contactInfoData } from '@/lib/page-data';

export default function TagilPage() {
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
        <Hero {...tagilHeroData} onCtaClick={openModal} />

        <TagilSearchForm
          title={tagilSearchFormData.title}
          description={tagilSearchFormData.description}
          districts={tagilSearchFormData.districts}
          buttonText={tagilSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупка танхауса через нас — лучший выбор в Сочи?"
          benefits={tagilBenefitsData}
        />

        <ComparisonTable
          title="Выберите сейчас, чтобы не упустить лучший объект и сохранить миллионы"
          description="Без опыта легко потерять 500 000–2 000 000 рублей на скрытых проблемах или ремонтах. С нами вы получите проверенный дом, который не потребует вложений."
          data={tagilComparisonData}
          usLabel="Наш подход"
          othersLabel="Обычные варианты"
        />
{/* 
        <HotDeals
          title="Найдите свой идеальный танхаус в Сочи"
          description="Выберите танхаус в Сочи уже сегодня и сэкономьте время и деньги на проверке каждого объекта."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={tagilInfoMain.mainTitle}
          mainDescription={tagilInfoMain.mainDescription}
          cards={tagilInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите таунхаус мечты в 3 простых шага"
          steps={tagilProcessStepsData}
          ctaText="Не теряйте время — оформляйте танхаус безопасно,фиксируйте цену сейчас и экономьте до полумиллиона рублей."
          ctaButtonText="Узнать условия и расчёт танхаусов"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Оплатите танхаус на выгодных условиях!"
          methods={tagilPaymentMethodsData}
          ctaText="Не теряйте время — оформляйте танхаус безопасно,фиксируйте цену сейчас и экономьте до полумиллиона рублей."
          ctaButtonText="Узнать условия и расчёт танхаусов"
          onCtaClick={openModal}
        />

        <LeadForm
          title={tagilLeadForm.title}
          description={tagilLeadForm.description}
          buttonText={tagilLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Оцените лучшие танхаусы и выберите свой идеальный танхаус без лишних просмотров. Получите проверенные объекты и экономьте время."
          items={tagilGalleryData}
        />

        <About
          title={tagilAboutData.title}
          paragraphs={tagilAboutData.paragraphs}
        />

        {/* <Blog
          title={tagilBlogData.title}
          description={tagilBlogData.description}
          articles={tagilBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы наших клиентов"
          testimonials={tagilTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о таунхаусах"
          items={tagilFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами"
          description="Выберите свой танхаус в Сочи — первые 10 заявок получат лучшие варианты и расчёт стоимости с ликвидностью. Действуйте, чтобы не терять время и деньги!"
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

