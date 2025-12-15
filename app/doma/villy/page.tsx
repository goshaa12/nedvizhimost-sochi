"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { VillySearchForm } from '@/components/VillySearchForm';
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
  villyHeroData,
  villySearchFormData,
  villyBenefitsData,
  villyComparisonData,
  villyInfoMain,
  villyProcessStepsData,
  villyPaymentMethodsData,
  villyLeadForm,
  villyAboutData,
  villyBlogData,
  villyTestimonialsData,
  villyFaqData,
} from '@/lib/doma-villy-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function VillyPage() {
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
        <Hero {...villyHeroData} onCtaClick={openModal} />

        <VillySearchForm
          title={villySearchFormData.title}
          description={villySearchFormData.description}
          districts={villySearchFormData.districts}
          buttonText={villySearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему выбирать виллу через нашу команду — выгоднее?"
          benefits={villyBenefitsData}
        />

        <ComparisonTable
          title="Сравните разницу в подходе и сэкономьте!"
          description="С нами вы быстро получите полный обзор актуальных предложений и экономите время на самостоятельном поиске и тысячи на поездках!"
          data={villyComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите виллы в каталоге"
          description="Выберите подходящий дом у побережья и запланируйте просмотр в удобное для вас время."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={villyInfoMain.mainTitle}
          mainDescription={villyInfoMain.mainDescription}
          cards={villyInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите виллу в Сочи в 3 шага"
          steps={villyProcessStepsData}
          ctaText="Не тратьте недели на поиски — доверьте процесс экспертам и купите виллу в Сочи быстро и с выгодой."
          ctaButtonText="Получить подбор виллы"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Удобные способы оплаты виллы"
          methods={villyPaymentMethodsData}
          ctaText="Лучшие виллы уходят за дни — зафиксируйте условия сейчас, чтобы получить объект без долгов и переплат. Успейте, пока цену не подняли."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={villyLeadForm.title}
          description={villyLeadForm.description}
          buttonText={villyLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея вилл"
          description="Посмотрите реальные объекты в Сочи и выберите свою идеальную виллу. Сэкономьте время и оценивайте документы и планировку онлайн."
          items={galleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={villyAboutData.title}
          paragraphs={villyAboutData.paragraphs}
        />

        {/* <Blog
          title={villyBlogData.title}
          description={villyBlogData.description}
          articles={villyBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={villyTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о виллах Сочи"
          items={villyFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не откладывайте покупку виллы — оставьте заявку сегодня и получите персональный подбор и расчёт стоимости. Успейте, пока лучшие объекты не распродали!"
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

