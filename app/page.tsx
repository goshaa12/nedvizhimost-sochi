"use client";

import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SearchForm } from '../components/SearchForm';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { InfoSection } from '../components/InfoSection';
import { HotDeals } from '../components/HotDeals';
import { ProcessSteps } from '../components/ProcessSteps';
import { PaymentMethods } from '../components/PaymentMethods';
import { MortgageSection } from '../components/MortgageSection';
import { InvestmentStats } from '../components/InvestmentStats';
import { LeadForm } from '../components/LeadForm';
import { Gallery } from '../components/Gallery';
import { Certificates } from '../components/Certificates';
import { About } from '../components/About';
import { Blog } from '../components/Blog';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import {
  heroData,
  benefitsData,
  comparisonData,
  faqData,
  testimonialsData,
  blogData,
  processStepsData,
  paymentMethodsData,
  investmentStatsData,
  galleryData,
  certificatesData,
  infoCardsData,
  contactInfoData,
} from '@/lib/page-data';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    // Здесь можно добавить отправку данных на сервер
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...heroData} onCtaClick={openModal} />
        <SearchForm 
          description="Получите быстрый расчёт по объекту — подходящие варианты соберутся в одну подборку, а вам не придётся тратить часы на фильтры и сравнение площадок."
          onButtonClick={openModal}
        />
        <BenefitsGrid
          title="Почему недвижимость в Сочи покупать выгоднее с нами?"
          benefits={benefitsData}
          ctaTitle="Не рискуйте потерять миллионы и нервы"
          ctaDescription="Получите проверенную недвижимость и экономию до 15% — без риска попасть на долгострой, арест объекта или переплату, которую потом невозможно вернуть."
        />
        <ComparisonTable data={comparisonData} />
        <InfoSection
          mainTitle="Купите недвижимость Сочи выгодно сегодня"
          mainDescription="Покупка недвижимости в Сочи становится проще, когда доступ к объектам открывается раньше публикуемых предложений. Затрудняет выбор разнообразие районов? Точная оценка стоимости недвижимости избавляет от лишних просмотров и заметно экономит время. А проверенная база снижает риск заведомых ошибок."
          cards={infoCardsData}
        />
        <HotDeals onCtaClick={openModal} />
        <ProcessSteps
          steps={processStepsData}
          ctaText="Закрепите за собой лучшие варианты, пока их не забрали другие покупатели."
          ctaButtonText="Оставить заявку на покупку недвижимости"
          onCtaClick={openModal}
        />
        <PaymentMethods
          methods={paymentMethodsData}
          ctaText="Получите подбор вариантов оплаты под ваш бюджет и узнайте, какой способ даст максимальную выгоду."
          ctaButtonText="Получить консультацию по поиску недвижимости"
          onCtaClick={openModal}
        />
        <MortgageSection
          description="Опытные ипотечные специалисты помогают подобрать банк, снизить ставку и получить одобрение на выгодных условиях — без переплат и лишней бюрократии."
          features={[
            '95% одобрений ипотечных заявок',
            'Решаем вопросы любой сложности без задержек',
            'Снижаем ставку за счёт точного подбора программ',
          ]}
          ctaText="Получите расчёт по ипотеке или рассрочке с точной суммой платежей и прогнозом одобрения."
          ctaButtonText="Получить лучшую ставку на недвижимость сегодня"
          onCtaClick={openModal}
        />
        <InvestmentStats
          stats={investmentStatsData}
          ctaTitle="Топ-10 лучших инвестиционных объектов недвижимости"
          ctaButtonText="Посмотреть подборку"
          onCtaClick={openModal}
        />
        <LeadForm
          description="Сэкономьте до 80% времени и получите лучшие объекты Сочи, которые не публикуют на сайтах недвижимости — только актуальные варианты с проверенными документами."
          onSubmit={(phone) => {
            console.log('Lead form submitted:', phone);
            openModal();
          }}
        />
        <Gallery
          description="Посмотрите планировки, виды из окон, отделку подъездов, качество фасадов и реальные окружения объектов — всё, что влияет на комфорт и будущую стоимость."
          items={galleryData}
        />
        <Certificates
          description="Ознакомьтесь с аккредитациями, лицензиями и подтверждёнными наградами — документами, которые гарантируют юридическую чистоту сделки и безопасность покупки недвижимости в Сочи."
          certificates={certificatesData}
          footerText="Цель — показать надёжность и опыт работы с известными клиентами"
        />
        <About
          paragraphs={[
            'Агентство недвижимости создавалось с одной простой идеей — сделать покупку недвижимости в Сочи честной, понятной и действительно выгодной для клиента. У нас важен не поток сделок, а то, чтобы каждый получал объект, который принесёт комфорт и устойчивый рост в будущем.',
            'Подход основан на проверке каждого застройщика, документов и истории объекта недвижимости.',
            'Культура компании строится на ответственности, внимательности и реальной пользе для людей.',
          ]}
          partners={['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5', 'Partner 6']}
          partnersFooterText="Цель — показать надёжность и опыт работы с известными клиентами"
        />
        <Blog articles={blogData} />
        <Testimonials testimonials={testimonialsData} />
        <FAQ
          title="Часто задаваемые вопросы при покупке недвижимости"
          items={faqData}
        />
        <ContactForm
          description="Получите подборку лучших объектов Сочи без риска ошибиться персонально под ваш бюджет. Уже 4300 клиентов нашли жильё быстрее — станьте следующим!"
          contactInfo={contactInfoData}
        />
      </main>
      <Footer
        description="Честная, понятная и выгодная покупка недвижимости в Сочи с 2016 года."
        copyright="© 2025 Недвижимость Сочи. Все права защищены."
      />
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
