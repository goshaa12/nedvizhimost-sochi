"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KottedzhiSearchForm } from '@/components/KottedzhiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
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
  kottedzhiHeroData,
  kottedzhiSearchFormData,
  kottedzhiBenefitsData,
  kottedzhiComparisonData,
  kottedzhiInfoMain,
  kottedzhiProcessStepsData,
  kottedzhiLeadForm,
  kottedzhiAboutData,
  kottedzhiBlogData,
  kottedzhiTestimonialsData,
  kottedzhiFaqData,
  kottedzhiGalleryData,
} from '@/lib/doma-kottedzhi-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KottedzhiPage() {
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
        <Hero {...kottedzhiHeroData} onCtaClick={openModal} />

        <KottedzhiSearchForm
          title={kottedzhiSearchFormData.title}
          description={kottedzhiSearchFormData.description}
          districts={kottedzhiSearchFormData.districts}
          types={kottedzhiSearchFormData.types}
          buttonText={kottedzhiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему более 2000 семей уже нашли свой дом в коттеджном посёлке с нами?"
          benefits={kottedzhiBenefitsData}
        />

        <ComparisonTable
          title="Сравните, что получите при покупке дома в коттеджном посёлке"
          description="У других вы рискуете переплатить и потерять неделю на пустых просмотрах, а с нами сразу видите дома и посёлки, которые реально можно купить сразу."
          data={kottedzhiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <HotDeals
          title="Посмотрите каталог коттеджных домов в Сочи"
          description="За 5–7 секунд вы поймёте, стоит ли рассматривать коттеджный дом дальше. Каждый коттеджный вариант сразу показывает ключевые параметры — площадь участка, статус земли, расстояние до моря и цену. Нашли подходящий коттеджный посёлок? Откройте ещё — среди следующих домов может быть ваш лучший вариант для покупки."
          buttonText="Показать больше коттеджных домов"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={kottedzhiInfoMain.mainTitle}
          mainDescription={kottedzhiInfoMain.mainDescription}
          cards={kottedzhiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите коттеджный дом в Сочи в 3 шага!"
          steps={kottedzhiProcessStepsData}
          ctaText="Коттеджные дома с документами и участком 4–6 соток разбирают за сутки. Узнайте, какие варианты ещё свободны, чтобы зафиксировать цену вовремя и не потерять понравившийся коттеджный участок."
          ctaButtonText="Получить доступ к каталогу коттеджных домов"
          onCtaClick={openModal}
        />

        <LeadForm
          title={kottedzhiLeadForm.title}
          description={kottedzhiLeadForm.description}
          buttonText={kottedzhiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите в галерее коттеджные дома, участки и подъездные пути — вы сразу видите состояние объекта и понимаете, стоит ли ехать на просмотр."
          items={kottedzhiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description="Сертификаты подтверждают, что объекты проверены, документы в порядке и сделки оформляются без возвратов и задержек. Вы видите доказательства компетентности, а не обещания."
          certificates={certificatesData}
        /> */}

        <About
          title={kottedzhiAboutData.title}
          paragraphs={kottedzhiAboutData.paragraphs}
        />

        {/* <Blog
          title={kottedzhiBlogData.title}
          description={kottedzhiBlogData.description}
          articles={kottedzhiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={kottedzhiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о коттеджных посёлках"
          items={kottedzhiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Лучшие лоты в коттеджных городках разбирают за сутки. Оставьте заявку сейчас, чтобы получить подборку вариантов и приобрести понравившийся дом в коттеджном посёлке."
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

