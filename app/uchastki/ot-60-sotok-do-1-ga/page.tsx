"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Ot60SotokDo1GaUchastkiSearchForm } from '@/components/Ot60SotokDo1GaUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  ot60SotokDo1GaUchastkiHeroData,
  ot60SotokDo1GaUchastkiBenefitsData,
  ot60SotokDo1GaUchastkiComparisonData,
  ot60SotokDo1GaUchastkiInfoMain,
  ot60SotokDo1GaUchastkiProcessStepsData,
  ot60SotokDo1GaUchastkiLeadForm,
  ot60SotokDo1GaUchastkiTestimonialsData,
  ot60SotokDo1GaUchastkiFaqData,
} from '@/lib/ot-60-sotok-do-1-ga-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function Ot60SotokDo1GaUchastkiPage() {
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
        <Hero {...ot60SotokDo1GaUchastkiHeroData} onCtaClick={openModal} />

        <Ot60SotokDo1GaUchastkiSearchForm
          title="Подберите участок от 60 соток до 1 га за минуту!"
          description="Не тратьте время на мелкие или неподходящие земли. Отфильтруйте параметры и сразу увидите крупные участки, которые можно использовать под застройку или проект без блокировок."
          buttonText="Показать участки от 60 соток"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Преимущества работы с нами"
          benefits={ot60SotokDo1GaUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Как выбирают крупную землю — и чем это заканчивается?"
          description="Ошибки в выборе участка стоят 2–5 млн ₽ и до года простоя: у других — потери и переделки, мы же обеспечим сопровождение сделки без блокировок и потерь по срокам."
          data={ot60SotokDo1GaUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        <InfoSection
          mainTitle={ot60SotokDo1GaUchastkiInfoMain.mainTitle}
          mainDescription={ot60SotokDo1GaUchastkiInfoMain.mainDescription}
          cards={ot60SotokDo1GaUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Как проходит проверка участка?"
          steps={ot60SotokDo1GaUchastkiProcessStepsData}
          ctaText="Посмотрите землю, где можно строить и зарабатывать — без запретов, потерь и затяжных проверок."
          ctaButtonText="Получить проверенные варианты сейчас"
          onCtaClick={openModal}
        />

        <LeadForm
          title={ot60SotokDo1GaUchastkiLeadForm.title}
          description={ot60SotokDo1GaUchastkiLeadForm.description}
          buttonText={ot60SotokDo1GaUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Testimonials
          title="Отзывы"
          testimonials={ot60SotokDo1GaUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о больших участках в Сочи"
          items={ot60SotokDo1GaUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сэкономьте месяцы поисков и не допустите ошибок на миллионы — получите проверенные варианты крупных участков сейчас, пока подходящие варианты не ушли в сделку!"
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

