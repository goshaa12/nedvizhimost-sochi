"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ChastnyeDomaSearchForm } from '@/components/ChastnyeDomaSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  chastnyeHeroData,
  chastnyeSearchFormData,
  chastnyeBenefitsData,
  chastnyeComparisonData,
  chastnyeInfoMain,
  chastnyeProcessStepsData,
  chastnyePaymentMethodsData,
  chastnyeLeadForm,
  chastnyeAboutData,
  chastnyeBlogData,
  chastnyeTestimonialsData,
  chastnyeFaqData,
} from '@/lib/doma-chastnye-data';
import { galleryData, contactInfoData } from '@/lib/page-data';

export default function ChastnyeDomaPage() {
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
        <Hero {...chastnyeHeroData} onCtaClick={openModal} />

        <ChastnyeDomaSearchForm
          title={chastnyeSearchFormData.title}
          description={chastnyeSearchFormData.description}
          districts={chastnyeSearchFormData.districts}
          plotAreas={chastnyeSearchFormData.plotAreas}
          seaDistances={chastnyeSearchFormData.seaDistances}
          buttonText={chastnyeSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 500 покупателей домов в Сочи уже выбрали нас?"
          benefits={chastnyeBenefitsData}
        />

        <ComparisonTable
          title="Сравните, чтобы не тратить время и деньги впустую"
          description="У других — риск переплатить и купить дом «вслепую». Здесь вы заранее видите правду по району, цене и рискам — и не теряете понравившийся вариант."
          data={chastnyeComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите каталог частных домов в Сочи"
          description="За 5–7 секунд вы поймёте, стоит ли рассматривать дом дальше. Каждый частный дом показывает ваши ключевые параметры сразу — рельеф, подъезд, участок, расстояние до инфраструктуры. Нужны подходящие варианты? Откройте ещё — среди следующих домов может быть ваш будущий частный дом в Сочи."
          buttonText="Стать владельцем частного дома в Сочи"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={chastnyeInfoMain.mainTitle}
          mainDescription={chastnyeInfoMain.mainDescription}
          cards={chastnyeInfoMain.cards}
        />

        <InfoSection
          mainTitle="Узнайте условия покупки частного дома заранее!"
          cards={[
            {
              title: 'Согласуйте удобный график оплаты',
              description: 'Задайте взносы и получите шанс купить частный дом без лишних расходов и давления на бюджет.',
            },
            {
              title: 'Используйте поэтапную оплату',
              description: 'Снижайте разовый расход и делайте возможность купить частные дома недорого реальной уже сейчас.',
            },
            {
              title: 'Подберите выгодную банковскую программу',
              description: 'Уменьшите переплату и купите частный дом дешевле, сохранив деньги для ремонта и участка.',
            },
            {
              title: 'Примените стратегию снижения цены',
              description: 'Увеличьте выгоду и получите шанс купить частный дом дешевле, не теряя качество объекта.',
            },
            {
              title: 'Узнайте статус земли и коммуникаций заранее',
              description: 'Исключите проблемные дома и защитите покупку от штрафов и переделок.',
            },
            {
              title: 'Продайте текущую недвижимость быстрее',
              description: 'Освободите бюджет и купите частный дом недорого без кредитного давления.',
            },
          ]}
        />

        <ProcessSteps
          title="Приобретите собственное жильё в 3 шага!"
          steps={chastnyeProcessStepsData}
          ctaText="Лучшие варианты разбирают быстро — заберите свою подборку сейчас, чтобы не потерять достойный вариант для покупки."
          ctaButtonText="Получить подборку домов Сочи"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Узнайте условия покупки частного дома заранее!"
          methods={chastnyePaymentMethodsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <LeadForm
          title={chastnyeLeadForm.title}
          description={chastnyeLeadForm.description}
          buttonText={chastnyeLeadForm.buttonText}
          onButtonClick={openModal}
        />

        {/* <Gallery
          title="Фото и видеогалерея"
          description=""
          items={galleryData}
        /> */}

        <About
          title={chastnyeAboutData.title}
          paragraphs={chastnyeAboutData.paragraphs}
        />

        {/* <Blog
          title={chastnyeBlogData.title}
          description={chastnyeBlogData.description}
          articles={chastnyeBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={chastnyeTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке частных домов"
          items={chastnyeFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Чем раньше обратитесь, тем больше шансов успеть приобрести понравившийся дом. Один запрос спасёт вас от переплаты в сотни тысяч, сэкономит недели поиска и предоставит выгодные варианты в числе первых."
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

