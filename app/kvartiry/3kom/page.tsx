"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SimpleSearchForm } from '@/components/SimpleSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
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
  trehkomHeroData,
  trehkomSearchFormData,
  trehkomBenefitsData,
  trehkomComparisonData,
  trehkomInfoMain,
  trehkomProcessStepsData,
  trehkomPaymentMethodsData,
  trehkomLeadForm,
  trehkomGallery,
  trehkomCertificates,
  trehkomAboutParagraphs,
  trehkomBlogData,
  trehkomTestimonialsData,
  trehkomFaqData,
} from '@/lib/kvartiry-3kom-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function Kvartiry3KomPage() {
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
        <Hero {...trehkomHeroData} onCtaClick={openModal} />

        <SimpleSearchForm
          title={trehkomSearchFormData.title}
          description={trehkomSearchFormData.description}
          districts={trehkomSearchFormData.districts}
          buttonText={trehkomSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать 3-комнатные квартиры с нами?"
          benefits={trehkomBenefitsData}
        />

        <ComparisonTable
          title="Купите проверенную 3-комнатную квартиру — не рискуйте потерять деньги и время"
          description="С нами вы сразу получите только надёжные объекты, пройдёте все проверки быстро и сможете заселиться без проблем. Вы не потратите недели на поиск, рискуя переплатить и столкнуться с неопубликованными условиями."
          data={trehkomComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        {/* <HotDeals
          title="Посмотрите каталог 3-комнатных квартир"
          description="За пару минут откройте все доступные квартиры. Просмотрите подборку целиком, чтобы выбрать подходящий объект в Центре, Адлере или Кудепсте и оформить покупку безопасно."
          buttonText="Показать больше вариантов"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={trehkomInfoMain.mainTitle}
          mainDescription={trehkomInfoMain.mainDescription}
          cards={trehkomInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите трёхкомнатную квартиру в 3 шага"
          steps={trehkomProcessStepsData}
          ctaText="Узнайте доступные варианты заранее, пока лучшие 3-комнатные квартиры в Сочи ещё в продаже."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={trehkomPaymentMethodsData}
          ctaText="Выберите оптимальный способ оплаты и получите персональную консультацию с точным расчётом выгод и условий."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={trehkomLeadForm.title}
          description={trehkomLeadForm.description}
          buttonText={trehkomLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={trehkomGallery.title}
          description={trehkomGallery.description}
          items={galleryData}
        />

        {/* <Certificates
          title={trehkomCertificates.title}
          description={trehkomCertificates.description}
          certificates={certificatesData}
        /> */}

        <About
          title="О нас"
          paragraphs={trehkomAboutParagraphs}
        />

        {/* <Blog
          title="Прочитайте полезные материалы перед покупкой квартиры"
          description="Ознакомьтесь с разборами, которые помогут выбрать будущее жильё без переплат и ошибок."
          articles={trehkomBlogData}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={trehkomTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о трёхкомнатных квартирах"
          items={trehkomFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
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

