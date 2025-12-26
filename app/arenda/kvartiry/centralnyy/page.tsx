"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaKvartirySearchForm } from '@/components/ArendaKvartirySearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  arendaKvartiryCentralHeroData,
  arendaKvartiryCentralBenefitsData,
  arendaKvartiryCentralComparisonData,
  arendaKvartiryCentralInfoCardsData,
  arendaKvartiryCentralProcessStepsData,
  arendaKvartiryCentralTestimonialsData,
  arendaKvartiryCentralFaqData,
  arendaKvartiryCentralGalleryData,
} from '@/lib/arenda-kvartiry-central-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaKvartiryCentralPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...arendaKvartiryCentralHeroData} onCtaClick={openModal} />

        <ArendaKvartirySearchForm
          title="Найдите идеальную квартиру в Сочи!"
          description="Подберите свой вариант быстро и без лишних просмотров — начните экономить время и деньги уже сегодня!"
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать квартиры с нами?"
          benefits={arendaKvartiryCentralBenefitsData}
        />

        <ComparisonTable 
          title="Не теряйте деньги и время на сомнительные квартиры!"
          description="С нами вы арендуете безопасно, быстро и без лишних поездок. Не рискуйте остаться в неопределенности и потерять время!"
          data={arendaKvartiryCentralComparisonData}
          usLabel="У нас"
          othersLabel="Конкуренты"
        />

        <InfoSection
          mainTitle="Выберите квартиру в Центральном районе Сочи"
          mainDescription="Подберите квартиру в 2 раза быстрее — все объекты проверены, с актуальными фото и ценами. Экономьте время и выберите с уверенностью!"
          cards={arendaKvartiryCentralInfoCardsData}
        />

        <ProcessSteps
          title="Снимите квартиру за 3 дня"
          steps={arendaKvartiryCentralProcessStepsData}
          ctaText="Готовы заселиться без лишних просмотров и переплат? Оставьте заявку — подходящие варианты будут у вас уже сегодня!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Оставьте заявку на консультацию!"
          description="Оставьте номер — получите каталог квартир с ценами и удобными условиями уже сегодня."
          contactInfo={[]}
          submitButtonText="Получить подборку квартир"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
        />

        <About
          title="О нас"
          paragraphs={[
            'Вы доверите поиск жилья экспертам, которые развивают рынок аренды в Сочи с 2021 года. В нашей базе вы найдете только проверенные квартиры для любого срока проживания. Каждый объект и его собственник пройдут многоэтапную проверку еще до нашей встречи, поэтому вы получите гарантию честной сделки и прозрачных условий от первого звонка до получения ключей',
          ]}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={arendaKvartiryCentralGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaKvartiryCentralTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при аренде квартиры"
          items={arendaKvartiryCentralFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не откладывайте поиск — лучшие квартиры в Центральном районе быстро разбирают. Оставьте заявку прямо сейчас: подберут варианты под ваш бюджет и сроки, пока актуальные квартиры ещё доступны."
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

