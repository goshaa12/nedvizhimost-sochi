"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { NovostroykiSearchForm } from '@/components/NovostroykiSearchForm';
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
  novostroykiHeroData,
  novostroykiSearchFormData,
  novostroykiBenefitsData,
  novostroykiComparisonData,
  novostroykiInfoMain,
  novostroykiProcessStepsData,
  novostroykiPaymentMethodsData,
  novostroykiLeadForm,
  novostroykiAboutData,
  novostroykiBlogData,
  novostroykiTestimonialsData,
  novostroykiFaqData,
  novostroykiGalleryData,
} from '@/lib/novostroyki-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function NovostroykiPage() {
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
        <Hero {...novostroykiHeroData} onCtaClick={openModal} />

        <NovostroykiSearchForm
          title={novostroykiSearchFormData.title}
          description={novostroykiSearchFormData.description}
          buttonText={novostroykiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему новостройки в Сочи с нами покупать выгоднее?"
          benefits={novostroykiBenefitsData}
        />

        <ComparisonTable
          title="Сравните новостройки сейчас, чтобы не потерять лучшие варианты"
          description="Сохраните время и деньги — не переплачивайте у других за «свежую» новостройку и шумный район."
          data={novostroykiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={novostroykiInfoMain.mainTitle}
          mainDescription={novostroykiInfoMain.mainDescription}
          cards={novostroykiInfoMain.cards}
        />

        {/* <HotDeals
          title="Не пропустите горячие предложения!"
          description="Горячие предложения уходят быстрее других: самые удачные планировки и цены появляются здесь первыми. Откройте больше вариантов, чтобы увидеть квартиры в новостройках и забрать удачный вариант раньше остальных!"
          buttonText="Показать больше новостроек"
          onCtaClick={openModal}
        /> */}

        <ProcessSteps
          title="Как мы работаем?"
          steps={novostroykiProcessStepsData}
          ctaText="Лучшие новостройки города Сочи уходят первыми. А одна ошибка при выборе новостройки стоит сотен тысяч. Получите экспертное сопровождение и купите новостройку, которая вырастет в цене!"
          ctaButtonText="Получить доступ к каталогу новостроек"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Выберите выгодный способ оплаты квартиры в новостройке!"
          methods={novostroykiPaymentMethodsData}
          ctaText="Выберите удобный способ оплаты и снизьте расходы уже на старте покупки!"
          ctaButtonText="Узнать выгодный вариант оплаты"
          onCtaClick={openModal}
        />

        <LeadForm
          title={novostroykiLeadForm.title}
          description={novostroykiLeadForm.description}
          buttonText={novostroykiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видео новостроек"
          description="Смотрите фото и видео, чтобы заранее увидеть планировки, видовые параметры и условия сделок — и сразу поймите, стоит ли объект своих денег."
          items={novostroykiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты и награды"
          description=""
          certificates={certificatesData}
        /> */}

        <About
          title={novostroykiAboutData.title}
          paragraphs={novostroykiAboutData.paragraphs}
        />

        {/* <Blog
          title={novostroykiBlogData.title}
          description={novostroykiBlogData.description}
          articles={novostroykiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={novostroykiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке квартир в новостройках"
          items={novostroykiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="6 200 человек уже купили новостройку в этом месяце. Напишите нам или оставьте заявку на сайте — получите каталог и подборку под ваш бюджет и избежите ошибки, которая будет стоить сотен тысяч!"
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

