"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PlotSearchForm } from '@/components/PlotSearchForm';
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
  uchastkiHeroData,
  uchastkiSearchFormData,
  uchastkiBenefitsData,
  uchastkiComparisonData,
  uchastkiInfoMain,
  uchastkiProcessStepsData,
  uchastkiPaymentMethodsData,
  uchastkiLeadForm,
  uchastkiAboutData,
  uchastkiTestimonialsData,
  uchastkiFaqData,
  uchastkiGalleryData,
} from '@/lib/uchastki-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function UchastkiPage() {
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
        <Hero {...uchastkiHeroData} onCtaClick={openModal} />

        <PlotSearchForm
          title={uchastkiSearchFormData.title}
          description={uchastkiSearchFormData.description}
          districts={uchastkiSearchFormData.districts}
          purposes={uchastkiSearchFormData.purposes}
          classes={uchastkiSearchFormData.classes}
          buttonText={uchastkiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки с нами?"
          benefits={uchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните условия покупки участка в Сочи, чтобы не потерять деньги!"
          description="Другие обещают «подбор», но дают устаревшие данные — вы рискуете переплатить 10–15% и потерять время; здесь вы получаете точную картину участка земли и избегаете лишних затрат."
          data={uchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Выберите участок земли из актуальных предложений!"
          description="Каждая карточка включает только ключевую информацию, чтобы вы быстро оценили участок земли и не теряли время на неподходящие варианты!"
          buttonText="Показать больше участков в каталоге"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={uchastkiInfoMain.mainTitle}
          mainDescription={uchastkiInfoMain.mainDescription}
          cards={uchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите участок в Сочи в 3 шага!"
          steps={uchastkiProcessStepsData}
          ctaText="Оставьте заявку — правильный выбор земли часто начинается с одного действия."
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте удобный способ оплаты участка в Сочи"
          methods={uchastkiPaymentMethodsData}
          ctaText="Хотите понять, какой способ оплаты даст максимальную выгоду? Получите расчёт по каждому варианту, чтобы выбрать самый экономный путь к покупке земли!"
          ctaButtonText="Получить расчёт выгодной оплаты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={uchastkiLeadForm.title}
          description={uchastkiLeadForm.description}
          buttonText={uchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={uchastkiGalleryData}
        />
{/* 
        <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={uchastkiAboutData.title}
          paragraphs={uchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={uchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке земельного участка"
          items={uchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Оставьте заявку — получите точные варианты земли под ваш бюджет и сэкономьте время на поисках!"
          contactInfo={contactInfoData}
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Contact form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
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

