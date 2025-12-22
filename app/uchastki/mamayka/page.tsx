"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MamaykaUchastkiSearchForm } from '@/components/MamaykaUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  mamaykaUchastkiHeroData,
  mamaykaUchastkiBenefitsData,
  mamaykaUchastkiComparisonData,
  mamaykaUchastkiInfoMain,
  mamaykaUchastkiProcessStepsData,
  mamaykaUchastkiPaymentMethodsData,
  mamaykaUchastkiLeadForm,
  mamaykaUchastkiAboutData,
  mamaykaUchastkiTestimonialsData,
  mamaykaUchastkiFaqData,
  mamaykaUchastkiGalleryData,
} from '@/lib/mamayka-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function MamaykaUchastkiPage() {
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
        <Hero {...mamaykaUchastkiHeroData} onCtaClick={openModal} />

        <MamaykaUchastkiSearchForm
          title="Подберите участок по вашим критериям"
          description="Укажите площадь, цену и тип участка — мы подберём варианты с проверенными документами!"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в Мамайке с нами?"
          benefits={mamaykaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните и убедитесь сами — с нами безопаснее!"
          description="Сравните с другими и убедитесь в качестве сопровождения сделки в Мамайке."
          data={mamaykaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог актуальных участков"
          description="Выбирайте только проверенные участки для строительства. Сократите время на проверки и согласования в 3 раза!"
          buttonText="Показать больше"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={mamaykaUchastkiInfoMain.mainTitle}
          mainDescription={mamaykaUchastkiInfoMain.mainDescription}
          cards={mamaykaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Всего 3 шага к вашему участку в Мамайке!"
          steps={mamaykaUchastkiProcessStepsData}
          ctaText="Оставьте заявку и получите доступ к подходящим для строительства участкам Мамайки!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты участка!"
          methods={mamaykaUchastkiPaymentMethodsData}
          ctaText="Выберите способ оплаты и начните оформление прямо сейчас!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <LeadForm
          title={mamaykaUchastkiLeadForm.title}
          description={mamaykaUchastkiLeadForm.description}
          buttonText={mamaykaUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Вдохновляйтесь реальными объектами — просмотрите фото и видео и оцените, как может выглядеть ваш будущий участок."
          items={mamaykaUchastkiGalleryData}
        />

        <About
          title={mamaykaUchastkiAboutData.title}
          paragraphs={mamaykaUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={mamaykaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках"
          items={mamaykaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Тысячи покупателей уже купили участки в Мамайке. Оставьте номер и получите подборку с полной информацией о вариантах для строительства!"
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

