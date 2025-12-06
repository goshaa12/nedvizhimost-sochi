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
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  elitnyeHeroData,
  elitnyeBenefitsData,
  elitnyeComparisonData,
  elitnyeProcessStepsData,
  elitnyePaymentMethodsData,
  elitnyeInfoCardsData,
  elitnyeTestimonialsData,
  elitnyeFaqData,
} from '@/lib/elitnye-kvartiry-data';
import { galleryData, contactInfoData } from '@/lib/page-data';

export default function ElitnyeKvartiryPage() {
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
        <Hero {...elitnyeHeroData} onCtaClick={openModal} />
        <SearchForm 
          title="Фильтр по рынку элитных квартир"
          description="Подберите параметры, чтобы купить элитную квартиру в Сочи, которая полностью соответствует вашим требованиям и уровню комфорта. Посмотрите подходящие варианты!"
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
          buttonText="Показать подборку квартир элитного класса"
          onButtonClick={openModal}
        />
        <BenefitsGrid
          title="Почему стоит покупать элитные квартиры с нами?"
          benefits={elitnyeBenefitsData}
        />
        <ComparisonTable 
          title="Не рискуйте покупкой — ошибки в элитной недвижимости обходятся в миллионы"
          description="Получите проверенную роскошную элитную квартиру — без переплат, скрытых рисков и неприятных «сюрпризов», которые часто встречаются у других. Получите проверенную роскошную элитную квартиру с экономией до 15% и гарантией юридической безопасности."
          data={elitnyeComparisonData}
          usLabel="Мы"
          othersLabel="Другие компании"
        />
        <HotDeals 
          title="Посмотрите каталог элитных квартир"
          description="Найдите роскошную элитную квартиру в нужном районе — с актуальными ценами, расстоянием до моря и полностью проверенными характеристиками. Все объекты доступны для сравнения и добавления в избранное."
          buttonText="Показать больше элитной недвижимости"
          onCtaClick={openModal}
        />
        <InfoSection
          mainTitle="Подберите элитную недвижимость Сочи грамотно"
          mainDescription="Подберите квартиру элитного класса в Сочи, ориентируясь на реальные параметры: уровень шума, видовые характеристики, транспорт и инвестиционный потенциал. Учет этих факторов увеличивает итоговую выгоду и обеспечивает стабильность стоимости элитной недвижимости."
          cards={elitnyeInfoCardsData}
        />
        <ProcessSteps
          title="Приобретите элитную квартиру в Сочи за 3 шага"
          steps={elitnyeProcessStepsData}
          ctaText="Думаете о покупке с долгосрочной выгодой? Получите подборку объектов с подтверждённой ликвидностью уже сегодня."
          ctaButtonText="Получить персональное предложение"
          onCtaClick={openModal}
        />
        <PaymentMethods
          title="Выберите любой способ оплаты"
          methods={elitnyePaymentMethodsData}
          ctaText="Боитесь ошибиться с объектом и потерять миллионы на неудачной покупке? Получите проверенный список вариантов, где риски сведены к минимуму."
          ctaButtonText="Получить VIP-консультацию"
          onCtaClick={openModal}
        />
        <LeadForm
          title="Оставьте заявку на приобретение элитной квартиры"
          description="Боитесь выбрать неверный объект и переплатить за квадратуру, которая не стоит своих денег? Получите каталог планировок и актуальные цены, чтобы сразу отсечь слабые варианты и оставить только надёжные."
          buttonText="Получить каталог"
          onButtonClick={openModal}
        />
        <Gallery
          title="Фото и видеогалерея"
          description="Сложно представить объект только по описанию? Посмотрите фото- и видеообзоры, чтобы не тратить время на неподходящие варианты."
          items={galleryData}
        />
        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description="Ознакомьтесь с официальными сертификатами и наградами с подтверждением нашей квалификации."
          certificates={certificatesData}
        /> */}
        <About
          title="О нас"
          paragraphs={[
            'Мы создаём компанию, которая делает рынок элитной недвижимости прозрачным и выгодным для всех, кто с ним работает.',
            'Клиентам — даём возможность повышать качество жизни: выбирать жильё, которое приносит комфорт, статус и финансовую выгоду.',
            'Партнёрам — обеспечиваем стабильный доход и долгосрочное сотрудничество, где каждая сделка строится на доверии, честных условиях и общем стремлении повышать стандарты рынка.',
            'Сотрудникам — предлагаем достойный доход, развитие и среду, в которой можно расти профессионально и личностно, оставаясь частью команды с едиными ценностями и амбициями.',
          ]}
        />
        {/* <Blog
          title="Читайте новости о рынке элитной недвижимости"
          description="Хотите разбираться в рынке и принимать решения без риска для бюджета? Мы собрали материалы, которые помогают понимать динамику цен и находить сильные стратегии."
          articles={elitnyeBlogData}
        /> */}
        <Testimonials
          title="Отзывы"
          testimonials={elitnyeTestimonialsData}
        />
        <FAQ
          title="Часто задаваемые вопросы при покупке элитных квартир"
          items={elitnyeFaqData}
        />
        <ContactForm
          title="Свяжитесь с нами!"
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

