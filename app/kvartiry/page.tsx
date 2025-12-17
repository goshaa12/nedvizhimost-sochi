"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
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
import { PriceTable } from '@/components/PriceTable';
import { ContactModal } from '@/components/ContactModal';
import {
  kvartiryHeroData,
  kvartiryBenefitsData,
  kvartiryComparisonData,
  kvartiryProcessStepsData,
  kvartiryPaymentMethodsData,
  kvartiryInfoCardsData,
  kvartiryTestimonialsData,
  kvartiryFaqData,
  kvartiryBlogData,
  priceTableData,
} from '@/lib/kvartiry-data';
import { kvartiryGalleryData } from '@/lib/kvartiry-data';
import { certificatesData, contactInfoData } from '@/lib/page-data';

export default function KvartiryPage() {
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
        <Hero {...kvartiryHeroData} onCtaClick={openModal} />
        <SearchForm 
          title="Фильтр поиска квартир"
          description="Заполните фильтр — получите подборку доступных квартир, которые подходят под ваш бюджет."
          objectTypeLabel="Кол-во комнат"
          objectTypes={[
            { value: '', label: 'Не важно' },
            { value: 'studio', label: 'Студии' },
            { value: '1', label: '1-комнатные' },
            { value: '2', label: '2-комнатные' },
            { value: '3', label: '3-комнатные' },
          ]}
          districtLabel="Район города"
          districts={[
            { value: '', label: 'Не важно' },
            { value: 'central', label: 'Центральный' },
            { value: 'hostinsky', label: 'Хостинский' },
            { value: 'mamayka', label: 'Мамайка' },
            { value: 'adler', label: 'Адлер' },
            { value: 'krasnaya-polyana', label: 'Красная Поляна' },
            { value: 'matsesta', label: 'Мацеста' },
            { value: 'dagomys', label: 'Дагомыс' },
            { value: 'bytkha', label: 'Бытха' },
          ]}
          priceLabel="Цена"
          buttonText="Показать результаты и купить квартиру"
          onButtonClick={openModal}
        />
        <BenefitsGrid
          title="Почему вам выгоднее купить квартиру с нами?"
          benefits={kvartiryBenefitsData}
          onCtaClick={openModal}
        />
        <ComparisonTable 
          title="Избегайте ошибок — они стоят дороже самой квартиры"
          description="Получите проверенные квартиры в Сочи и снизьте риск финансовых потерь на 40% с нами уже на этапе подбора."
          data={kvartiryComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />
        <HotDeals 
          title="Каталог квартир"
          description="Откройте больше вариантов — подходящие квартиры могут появиться уже сегодня."
          buttonText="Показать больше вариантов квартир"
          onCtaClick={openModal}
        />
        <PriceTable
          title="Сравните стоимость квартиры в Сочи"
          description="Рынок Сочи меняется быстро, и стоимость квартиры в Сочи зависит от класса жилья, метража и планировки. Посмотрите на ориентиры по рыночным диапазонам и выберите варианты, которые вписываются в бюджет."
          data={priceTableData}
        />
        <InfoSection
          mainTitle="Успейте купить квартиру в Сочи с доходностью"
          mainDescription="Подбор от застройщика снимает страх купить жильё с проблемной историей, слабой шумоизоляцией, отсутствующим паркингом. Если переживаете, что вложитесь и не будет перспектив, проверенные квартиры заранее показывают будущие траты, ликвидность и финансовый выигрыш."
          cards={kvartiryInfoCardsData}
        />
        <ProcessSteps
          title="Купите квартиру в Сочи за 3 шага!"
          steps={kvartiryProcessStepsData}
          ctaText="Получите персональный подбор квартир Сочи и узнаете, какие варианты принесут вам выгоду уже в первый год владения."
          ctaButtonText="Вложиться в квартиру и недвижимость"
          onCtaClick={openModal}
        />
        <PaymentMethods
          title="Используйте любые способы оплаты"
          methods={kvartiryPaymentMethodsData}
          ctaText="Узнайте за 2 минуты, где сэкономите на квартире больше всего."
          ctaButtonText="Подобрать способ оплаты"
          onCtaClick={openModal}
        />
        <LeadForm
          title="Оставьте заявку и получите лучшие планировки Сочи"
          description="Узнайте актуальные цены и получите доступ к подборке вариантов, которые реально подходят под ваш бюджет и цели."
          buttonText="Скачать каталог и выбрать квартиру в Сочи"
          onButtonClick={openModal}
        />
        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите, как выглядят дома, подъезды и виды с разных этажей на самом деле — без ретуши и красивых обещаний. Убедитесь в уровне строительства, оцените район вокруг будущей квартиры."
          items={kvartiryGalleryData}
        />
        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description="Посмотрите официальные документы: лицензии, аккредитации и профильные награды подтверждают правомерность действий. Мы защищаем ваши деньги и исключаем риск проблем с регистрацией."
          certificates={certificatesData}
        /> */}
        <About
          title="О нас"
          paragraphs={[
            'Агентство создавалось как команда, которая ставит на первое место качество объектов и безопасность клиентов. Каждый предложенный вариант проходит проверку документов, истории, репутации застройщика и фактической готовности дома.',
            'В основе работы — уважение к людям и ответственность за каждый объект, который мы предлагаем. Наша цель — заключение честных сделок, каждая из которой будет долгосрочно выгодной для человека, который нам доверился.',
          ]}
          partners={['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5', 'Partner 6']}
          partnersFooterText="Цель — показать надёжность и опыт работы с известными клиентами"
        />
        {/* <Blog
          title="Откройте инсайты рынка недвижимости"
          articles={kvartiryBlogData}
        /> */}
        <Testimonials
          title="Отзывы"
          testimonials={kvartiryTestimonialsData}
        />
        <FAQ
          title="Часто задаваемые вопросы при покупке квартиры"
          items={kvartiryFaqData}
        />
        <ContactForm
          title="Свяжитесь с нами!"
          description="Сделайте первый шаг сейчас и получите точный план покупки квартиры и подборку под бюджет. Откладывать рискованно — хорошие варианты уходят быстрее всего!"
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

