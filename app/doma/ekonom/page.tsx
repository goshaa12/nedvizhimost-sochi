"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EkonomDomaSearchForm } from '@/components/EkonomDomaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
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
  ekonomDomaHeroData,
  ekonomDomaSearchFormData,
  ekonomDomaBenefitsData,
  ekonomDomaComparisonData,
  ekonomDomaInfoMain,
  ekonomDomaSpecialOffersData,
  ekonomDomaProcessStepsData,
  ekonomDomaLeadForm,
  ekonomDomaAboutData,
  ekonomDomaBlogData,
  ekonomDomaTestimonialsData,
  ekonomDomaFaqData,
} from '@/lib/doma-ekonom-data';
import { galleryData, certificatesData, contactInfoData } from '@/lib/page-data';

export default function EkonomDomaPage() {
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
        <Hero {...ekonomDomaHeroData} onCtaClick={openModal} />

        <EkonomDomaSearchForm
          title={ekonomDomaSearchFormData.title}
          description={ekonomDomaSearchFormData.description}
          districts={ekonomDomaSearchFormData.districts}
          rooms={ekonomDomaSearchFormData.rooms}
          buttonText={ekonomDomaSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 800 клиентов уже купили дома эконом-класса с нами?"
          benefits={ekonomDomaBenefitsData}
        />

        <ComparisonTable
          title="Сравните условия покупки дома и избегайте переплат"
          description="Выбор у других часто заканчивается переплатой и потерей времени, а дома от застройщика эконом-класса уходят быстрее. Посмотрите разницу и сохраните деньги!"
          data={ekonomDomaComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог домов эконом-класса в Сочи"
          description="За 5–7 секунд вы поймёте, стоит ли рассматривать дом дальше. Каждый объект показывает ключевые параметры сразу — без лишних кликов и долгого поиска. Увидели подходящий вариант? Откройте ещё — следующий дом может оказаться самым точным под ваш бюджет."
          buttonText="Показать больше домов эконом-класса"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={ekonomDomaInfoMain.mainTitle}
          mainDescription={ekonomDomaInfoMain.mainDescription}
          cards={ekonomDomaInfoMain.cards}
        />

        <ProcessSteps
          title="Купите дом эконом-класса в 3 простых шага!"
          steps={ekonomDomaProcessStepsData}
          ctaText="Уже 300+ покупателей прошли эти шаги и избежали переплат и ошибочных районов. Каждый день решения откладывает покупку и поднимает цены. Не откладывайте покупку!"
          ctaButtonText="Начать подбор дома"
          onCtaClick={openModal}
        />

        <InfoSection
          mainTitle={ekonomDomaSpecialOffersData.title}
          cards={ekonomDomaSpecialOffersData.cards}
        />

        <LeadForm
          title={ekonomDomaLeadForm.title}
          description={ekonomDomaLeadForm.description}
          buttonText={ekonomDomaLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Фото и видео показывают дом, участок и подъезды без искажений, позволяя оценить состояние и локацию заранее, сокращая время на просмотры."
          items={galleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description="Сертификаты и награды подтверждают опыт команды, помогая понять, что объект проходит экспертную проверку и исключаются дома с юридическими и техническими рисками."
          certificates={certificatesData}
        /> */}

        <About
          title={ekonomDomaAboutData.title}
          paragraphs={ekonomDomaAboutData.paragraphs}
        />

        {/* <Blog
          title={ekonomDomaBlogData.title}
          description={ekonomDomaBlogData.description}
          articles={ekonomDomaBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={ekonomDomaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке дома"
          items={ekonomDomaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Уже 300 покупателей нашли подходящее жильё без переплат. Свяжитесь с нами — получите варианты под свой бюджет. Избежите ошибок, которые задерживают покупку на месяцы."
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

