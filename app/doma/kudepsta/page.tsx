"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KudepstaDomaSearchForm } from '@/components/KudepstaDomaSearchForm';
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
  kudepstaDomaHeroData,
  kudepstaDomaSearchFormData,
  kudepstaDomaBenefitsData,
  kudepstaDomaComparisonData,
  kudepstaDomaInfoMain,
  kudepstaDomaProcessStepsData,
  kudepstaDomaPaymentMethodsData,
  kudepstaDomaLeadForm,
  kudepstaDomaAboutData,
  kudepstaDomaBlogData,
  kudepstaDomaTestimonialsData,
  kudepstaDomaFaqData,
  kudepstaDomaGalleryData,
} from '@/lib/doma-kudepsta-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KudepstaDomaPage() {
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
        <Hero {...kudepstaDomaHeroData} onCtaClick={openModal} />

        <KudepstaDomaSearchForm
          title={kudepstaDomaSearchFormData.title}
          description={kudepstaDomaSearchFormData.description}
          buttonText={kudepstaDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать дом в Кудепсте с нами?"
          benefits={kudepstaDomaBenefitsData}
        />

        <ComparisonTable
          title="Оцените, почему мы лучше других компаний"
          description="Узнайте, какие дома в Кудепсте действительно безопасны для покупки — экономьте время и избегайте переплат с нашей проверкой каждого объекта."
          data={kudepstaDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог домов"
          description="Смотрите дома в Кудепсте с полной информацией о площади, участке и стоимости. Оценивайте подходящие варианты и выбирайте без поездок."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={kudepstaDomaInfoMain.mainTitle}
          mainDescription={kudepstaDomaInfoMain.mainDescription}
          cards={kudepstaDomaInfoMain.cards}
        />

        <ProcessSteps
          title="3 шага к вашему дому в Кудепсте"
          steps={kudepstaDomaProcessStepsData}
          ctaText="Не тратьте недели на самостоятельный поиск — получите варианты с проверенным статусом и готовой схемой покупки."
          ctaButtonText="Запросить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Определите удобный способ оплаты вашего дома"
          methods={kudepstaDomaPaymentMethodsData}
          ctaText="Выберите метод оплаты и сразу увидьте полную стоимость вашего будущего жилья."
          ctaButtonText="Рассчитать оплату"
          onCtaClick={openModal}
        />

        <LeadForm
          title={kudepstaDomaLeadForm.title}
          description={kudepstaDomaLeadForm.description}
          buttonText={kudepstaDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Изучите планировку и реальное состояние домов через качественные фото и видео — сразу видно, какие объекты подходят под ваши требования."
          items={kudepstaDomaGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description="Проверьте лицензии и сертификаты компании, чтобы убедиться в прозрачности сделок и официальном оформлении покупки дома."
          certificates={certificatesData}
        /> */}

        <About
          title={kudepstaDomaAboutData.title}
          paragraphs={kudepstaDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={kudepstaDomaBlogData.title}
          description={kudepstaDomaBlogData.description}
          articles={kudepstaDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={kudepstaDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о домах"
          items={kudepstaDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Будьте среди первых, кто узнаёт о новых домах в Кудепсте. Сразу выбирайте подходящие варианты, не тратя дни на поиски!"
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

