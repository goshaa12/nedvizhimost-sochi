"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LazarevskoeUchastkiSearchForm } from '@/components/LazarevskoeUchastkiSearchForm';
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
  lazarevskoeUchastkiHeroData,
  lazarevskoeUchastkiBenefitsData,
  lazarevskoeUchastkiComparisonData,
  lazarevskoeUchastkiInfoMain,
  lazarevskoeUchastkiProcessStepsData,
  lazarevskoeUchastkiPaymentMethodsData,
  lazarevskoeUchastkiLeadForm,
  lazarevskoeUchastkiAboutData,
  lazarevskoeUchastkiTestimonialsData,
  lazarevskoeUchastkiFaqData,
  lazarevskoeUchastkiGalleryData,
} from '@/lib/lazarevskoe-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function LazarevskoeUchastkiPage() {
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
        <Hero {...lazarevskoeUchastkiHeroData} onCtaClick={openModal} />

        <LazarevskoeUchastkiSearchForm
          title="Сузьте поиск до участков, которые подходят вам"
          description="Получите результаты по цене, назначению и локации за минуты — без лишних просмотров. Сэкономьте до 6 часов на поиске вручную!"
          buttonText="Увидеть подходящие участки"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать участки в Лазаревском районе с нами выгоднее?"
          benefits={lazarevskoeUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните — детали решают исход сделки!"
          description="Одна ошибка в выборе подхода — и участок в Лазаревском превращается в месяцы ожиданий, переплату и риски, тогда как правильный формат даёт экономию до 15% и понимание всех деталей ещё до просмотра."
          data={lazarevskoeUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Выбирайте участок по ключевым параметрам сразу"
          description="Сравните цену, статус земли, рельеф и расстояние до моря в одном каталоге — без догадок и лишних переходов."
          buttonText="Хочу увидеть больше подходящих участков"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={lazarevskoeUchastkiInfoMain.mainTitle}
          mainDescription={lazarevskoeUchastkiInfoMain.mainDescription}
          cards={lazarevskoeUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к вашему участку в Лазаревском районе!"
          steps={lazarevskoeUchastkiProcessStepsData}
          ctaText="Пока ликвидные участки не ушли, получите список тех, что готовы к покупке прямо сейчас!"
          ctaButtonText="Оставить заявку и получить подборку сегодня"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты участка в Лазаревском районе!"
          methods={lazarevskoeUchastkiPaymentMethodsData}
          ctaText="Выберите способ оплаты и сразу узнайте итоговую сумму участка, график платежей и доступные варианты без переплат!"
          ctaButtonText="Рассчитать условия покупки участка сейчас"
          onCtaClick={openModal}
        />

        <LeadForm
          title={lazarevskoeUchastkiLeadForm.title}
          description={lazarevskoeUchastkiLeadForm.description}
          buttonText={lazarevskoeUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите участки, которые разбирают первыми! Реальные виды и подъезды до поездки — без кота в мешке и пустых просмотров."
          items={lazarevskoeUchastkiGalleryData}
        />

        <About
          title={lazarevskoeUchastkiAboutData.title}
          paragraphs={lazarevskoeUchastkiAboutData.paragraphs}
        />

        <Testimonials
          title="Отзывы"
          testimonials={lazarevskoeUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об участках в Лазаревском"
          items={lazarevskoeUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сотни покупателей уже выбрали подходящую землю. Присоединяйтесь и станьте следующим покупателем!"
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

