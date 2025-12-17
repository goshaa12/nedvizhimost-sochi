"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DagomysSearchForm } from '@/components/DagomysSearchForm';
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
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  dagomysHeroData,
  dagomysSearchFormData,
  dagomysBenefitsData,
  dagomysComparisonData,
  dagomysInfoMain,
  dagomysProcessStepsData,
  dagomysPaymentMethodsData,
  dagomysLeadForm,
  dagomysGallery,
  dagomysCertificates,
  dagomysAboutParagraphs,
  dagomysTestimonialsData,
  dagomysFaqData,
  dagomysGalleryData
} from '@/lib/kvartiry-dagomys-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryDagomysPage() {
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
        <Hero {...dagomysHeroData} onCtaClick={openModal} />

        <DagomysSearchForm
          title={dagomysSearchFormData.title}
          description={dagomysSearchFormData.description}
          rooms={dagomysSearchFormData.rooms}
          types={dagomysSearchFormData.types}
          buttonText={dagomysSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать квартиры в Дагомысе с нами?"
          benefits={dagomysBenefitsData}
        />

        <ComparisonTable
          title="Проверьте, где квартира стоит своих денег"
          description="Смотрите проверенные квартиры, быстрые сделки и прозрачные цены — выбирайте жильё в Дагомысе с максимальной экономией и без риска переплат."
          data={dagomysComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        {/* <HotDeals
          title="Посмотрите каталог квартир"
          description="Посмотрите актуальные объекты с фотографиями, площадью, этажом и ценой. Оцените расположение и доступность транспорта, чтобы сразу выбрать подходящий вариант."
          buttonText="Показать больше вариантов"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={dagomysInfoMain.mainTitle}
          mainDescription={dagomysInfoMain.mainDescription}
          cards={dagomysInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите квартиру в Дагомысе в 3 шага"
          steps={dagomysProcessStepsData}
          ctaText="Не тратьте недели на поиски и оформление — доверьте процесс нам и получите жильё в Дагомысе с гарантией полной безопасности."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите удобный способ оплаты вашей квартиры"
          methods={dagomysPaymentMethodsData}
          ctaText="Не откладывайте решение — выберите оптимальный способ оплаты и закрепите выгодные условия."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={dagomysLeadForm.title}
          description={dagomysLeadForm.description}
          buttonText={dagomysLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={dagomysGallery.title}
          description={dagomysGallery.description}
          items={dagomysGalleryData}
        />

        <About
          title="О нас"
          paragraphs={dagomysAboutParagraphs}
        />

        {/* <Blog
          title="Блог и советы по квартирам"
          description="Знания о квартирах в Дагомысе дают уверенность в выборе и экономию времени. Уже более 500 покупателей применили наши советы и нашли надёжное жильё без лишних просмотров. Читайте статьи и используйте инсайды, чтобы обезопасить себя юридически при выгодной покупке."
          articles={[]}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={dagomysTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о квартирах в Дагомысе"
          items={dagomysFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Свяжитесь с нами, и мы подготовим для вас подборку актуальных квартир. Вам не придётся тратить время на поиск — все объекты проверены и готовы к просмотру."
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

