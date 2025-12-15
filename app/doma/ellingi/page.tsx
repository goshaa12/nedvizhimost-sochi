"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EllingiSearchForm } from '@/components/EllingiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HotDeals } from '@/components/HotDeals';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { LeadForm } from '@/components/LeadForm';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  ellingiHeroData,
  ellingiSearchFormData,
  ellingiBenefitsData,
  ellingiComparisonData,
  ellingiInfoMain,
  ellingiProcessStepsData,
  ellingiPaymentMethodsData,
  ellingiLeadForm,
  ellingiAboutData,
  ellingiBlogData,
  ellingiTestimonialsData,
  ellingiFaqData,
} from '@/lib/doma-ellingi-data';
import { contactInfoData } from '@/lib/page-data';

export default function EllingiPage() {
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
        <Hero {...ellingiHeroData} onCtaClick={openModal} />

        <EllingiSearchForm
          title={ellingiSearchFormData.title}
          description={ellingiSearchFormData.description}
          locations={ellingiSearchFormData.locations}
          floors={ellingiSearchFormData.floors}
          buttonText={ellingiSearchFormData.buttonText}
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему покупать эллинги с нами выгоднее?"
          benefits={ellingiBenefitsData}
        />

        <ComparisonTable
          title="Сравните, чтобы не потерять возможность купить эллинг у моря"
          description="Покупатели эллингов часто переплачивают и разочаровываются из-за скрытых рисков. Сравните, что даёт наш подход — и что отнимают другие — чтобы купить эллинг в Сочи на берегу моря и сэкономить."
          data={ellingiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Выберите эллинг из каталога"
          description="Уже через 5–7 секунд вы увидите главное: фактическую близость к пляжу, вид из окон, статус земли и планировку каждого эллинга — без долгих переходов и лишней рекламы. Нашли интересный вариант? Посмотрите соседние — эллинги у воды разбирают первыми, и лучший вариант часто появляется среди следующих карточек."
          buttonText="Хочу купить эллинг у воды"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={ellingiInfoMain.mainTitle}
          mainDescription={ellingiInfoMain.mainDescription}
          cards={ellingiInfoMain.cards}
        />

        <ProcessSteps
          title="Приобретите эллинг с видом на море в 3 шага!"
          steps={ellingiProcessStepsData}
          ctaText="Хорошие варианты уходят за 1–3 дня. Не упустите возможность получить персональные рекомендации на основе пожеланий и бюджета!"
          ctaButtonText="Получить подборку проверенных эллингов сегодня"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Узнайте условия покупки частного дома заранее!"
          methods={ellingiPaymentMethodsData}
          ctaText=""
          ctaButtonText=""
          onCtaClick={openModal}
        />

        <LeadForm
          title={ellingiLeadForm.title}
          description={ellingiLeadForm.description}
          buttonText={ellingiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        <InfoSection
          mainTitle="Выберите условия покупки, которые работают в вашу пользу"
          cards={[
            {
              title: 'Определите удобный график оплаты',
              description: 'Распределите сумму на этапы и снизьте разовую нагрузку, чтобы быстрее закрепить за собой выбранный объект.',
            },
            {
              title: 'Разделите стоимость на фиксированные транши',
              description: 'В доступных посёлках, чтобы входить в сделку постепенно и сохранить резерв на сезонные расходы.',
            },
            {
              title: 'Подберите банковскую программу',
              description: 'Под формат недвижимости, чтобы пройти одобрение без отказов и уменьшить конечную переплату.',
            },
            {
              title: 'Закрепите цену и условия',
              description: 'Через поддержку менеджера — так вы снижаете итоговую стоимость и получаете условия, недоступные при самостоятельных переговорах.',
            },
            {
              title: 'Проверьте участок, назначение и коммуникации заранее',
              description: 'Чтобы исключить юридические риски и быть уверенными, что сделка полностью безопасна.',
            },
            {
              title: 'Запустите продажу своей недвижимости',
              description: 'По готовой схеме, чтобы вовремя освободить средства и не потерять сильный вариант из-за задержек.',
            },
          ]}
        />

        <About
          title={ellingiAboutData.title}
          paragraphs={ellingiAboutData.paragraphs}
        />

        {/* <Blog
          title={ellingiBlogData.title}
          description={ellingiBlogData.description}
          articles={ellingiBlogData.articles}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={ellingiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке эллингов"
          items={ellingiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Боитесь взять объект с сыростью или проблемной землёй? Оставьте запрос — получите проверенные варианты и купите без риска влететь в долгие переделки."
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

