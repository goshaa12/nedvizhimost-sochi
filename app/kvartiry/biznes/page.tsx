"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
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
  biznesHeroData,
  biznesBenefitsData,
  biznesComparisonData,
  biznesInfoCardsData,
  biznesProcessStepsData,
  biznesPaymentMethodsData,
  biznesAboutParagraphs,
  biznesBlogData,
  biznesTestimonialsData,
  biznesFaqData,
} from '@/lib/kvartiry-biznes-data';
import { biznesGalleryData } from '@/lib/kvartiry-biznes-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryBiznesPage() {
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
        <Hero {...biznesHeroData} onCtaClick={openModal} />

        <BenefitsGrid
          title="Почему стоит покупать квартиры бизнес-класса с нами?"
          benefits={biznesBenefitsData}
        />

        <ComparisonTable 
          title="Сравните перед покупкой и не рискуйте потерять миллионы из-за ошибки"
          description="С нами вы получаете десяток квартир бизнес-класса в Сочи на выбор и экономию до 15% и не рискуете вложиться в объект с завышенной ценой или потерей ликвидности."
          data={biznesComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />

        <InfoSection
          mainTitle="Купите квартиру, не проиграв в ликвидности"
          mainDescription="Оцените квартиры бизнес-класса хорошего качества без риска вложиться в проблемный дом. Купите квартиру бизнес-класса с реальной перспективой роста стоимости — подбор учитывает район, вид, трафик и слабые места ЖК."
          cards={biznesInfoCardsData}
        />

        <ProcessSteps
          title="Приобретите квартиру бизнес-класса в 3 шага"
          steps={biznesProcessStepsData}
          ctaText="Проверьте квартиру до вложения и разберитесь на консультации, что принесёт доход, а что — убытки."
          ctaButtonText="Получить консультацию специалиста"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Сократите расходы правильным способом оплаты квартиры"
          methods={biznesPaymentMethodsData}
          ctaText="Получите консультацию, чтобы знать, какая схема оплаты защитит сделку и как не ошибиться в документах."
          ctaButtonText="Купить квартиру в ЖК бизнес-класса выгодно"
          onCtaClick={openModal}
        />

        <LeadForm
          title="Оставьте заявку на покупку квартиры бизнес-класса"
          description="Получите каталог планировок с актуальными ценами, чтобы не пропустить квартиры, которые разлетаются первыми."
          buttonText="Получить каталог"
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите реальные фото и видео, чтобы заранее понять качество строительства, виды и окружение."
          items={biznesGalleryData}
        />

        <Certificates
          title="Сертификаты, дипломы и награды"
          description="Изучите сертификаты и награды, чтобы убедиться, что покупаете квартиру у компании с подтверждённой репутацией, исключить риск обмана и быть уверенным, что сделка юридически защищена."
          certificates={certificatesData}
        />

        <About
          title="О нас"
          paragraphs={biznesAboutParagraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={biznesTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке квартиры бизнес-класса"
          items={biznesFaqData}
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


