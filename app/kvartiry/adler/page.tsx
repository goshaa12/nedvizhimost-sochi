"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AdlerSearchForm } from '@/components/AdlerSearchForm';
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
  adlerHeroData,
  adlerSearchFormData,
  adlerBenefitsData,
  adlerComparisonData,
  adlerInfoMain,
  adlerProcessStepsData,
  adlerPaymentMethodsData,
  adlerLeadForm,
  adlerGallery,
  adlerCertificates,
  adlerAboutParagraphs,
  adlerTestimonialsData,
  adlerFaqData,
} from '@/lib/kvartiry-adler-data';
import { adlerGalleryData } from '@/lib/kvartiry-adler-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryAdlerPage() {
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
        <Hero {...adlerHeroData} onCtaClick={openModal} />

        <AdlerSearchForm
          title={adlerSearchFormData.title}
          description={adlerSearchFormData.description}
          classes={adlerSearchFormData.classes}
          rooms={adlerSearchFormData.rooms}
          types={adlerSearchFormData.types}
          buttonText={adlerSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему квартиры в Адлере выгоднее покупать через нас?"
          benefits={adlerBenefitsData}
        />

        <ComparisonTable
          title="Купить квартиру в Адлере можно спокойно — или попасть в историю, которую потом стыдно рассказывать"
          description="С нами вы выбираете квартиру без сюрпризов. Надёжный объект, понятный район и реальная цена — всё это подбираем для вас. Без нашей помощи легко переплатить или выбрать вариант, который не радует. С нами вы точно попадёте в комфортное место, где приятно жить."
          data={adlerComparisonData}
          usLabel="Если покупаете с нами"
          othersLabel="Если пытаетесь разобраться сами"
        />

        {/* <HotDeals
          title="Каталог квартир"
          description="Откройте каталог квартир: там собраны объекты разных классов и бюджетов, от уютных студий до просторных семейных планировок. Каждая карточка — честная информация без «красивых обещаний». Просто выберите, сравните и найдите свой вариант в Сочи."
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={adlerInfoMain.mainTitle}
          mainDescription={adlerInfoMain.mainDescription}
          cards={adlerInfoMain.cards}
        />

        <ProcessSteps
          title="3 шага к вашей квартире в Адлере"
          steps={adlerProcessStepsData}
          ctaText="Не откладывайте выбор квартиры в Адлере — рынок меняется ежедневно, и лучшие варианты уходят первыми. Начните подбор сейчас, чтобы закрепить цену и получить актуальные предложения без спешки и переплат."
          ctaButtonText="Начать подбор квартиры сейчас"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Любой удобный способ оплаты вашей квартиры"
          methods={adlerPaymentMethodsData}
          ctaText="Хотите понять, какой способ оплаты будет для вас самым выгодным? Мы подскажем оптимальный вариант и рассчитаем условия за пару минут."
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={adlerLeadForm.title}
          description={adlerLeadForm.description}
          buttonText={adlerLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title={adlerGallery.title}
          description={adlerGallery.description}
          items={adlerGalleryData}
        />

        {/* <Certificates
          title={adlerCertificates.title}
          description={adlerCertificates.description}
          certificates={certificatesData}
        /> */}

        <About
          title="О нас"
          paragraphs={adlerAboutParagraphs}
        />

        {/* <Blog
          title="Блог и статьи"
          description=""
          articles={[]}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={adlerTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по квартирам в Сочи"
          items={adlerFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами"
          description="Сотни клиентов уже нашли квартиру в Адлере без лишних рисков. Присоединяйтесь и получите выгодные варианты + прозрачные условия. Станьте следующим!"
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

