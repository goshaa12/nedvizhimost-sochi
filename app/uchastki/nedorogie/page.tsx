"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { NedorogieUchastkiSearchForm } from '@/components/NedorogieUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { HotDeals } from '@/components/HotDeals';
import { ProcessSteps } from '@/components/ProcessSteps';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  nedorogieUchastkiHeroData,
  nedorogieUchastkiBenefitsData,
  nedorogieUchastkiComparisonData,
  nedorogieUchastkiInfoMain,
  nedorogieUchastkiAttentionData,
  nedorogieUchastkiProcessStepsData,
  nedorogieUchastkiLeadForm,
  nedorogieUchastkiAboutData,
  nedorogieUchastkiTestimonialsData,
  nedorogieUchastkiFaqData,
  nedorogieUchastkiGalleryData,
} from '@/lib/nedorogie-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function NedorogieUchastkiPage() {
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
        <Hero {...nedorogieUchastkiHeroData} onCtaClick={openModal} />

        <NedorogieUchastkiSearchForm
          title="Подберите участок под бюджет за минуту!"
          description="Не тратьте время время на неподходящие варианты. Отфильтруйте участок по параметрам, чтобы сразу увидеть участки, которые можно оформлять сразу!"
          buttonText="Показать недорогие участки"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему 800+ клиентов выбрали нас для покупки участка?"
          benefits={nedorogieUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните сочи недорогие земельные участки, чтобы не потерять выгодный вариант"
          description="При покупке участка в Сочи недорого важна не цена, а последствия выбора для ваших денег и спокойствия."
          data={nedorogieUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие агентства"
        />

        {/* <HotDeals
          title="Посмотрите недорогие участки в Сочи в каталоге!"
          description="Не ограничивайтесь первыми вариантами — среди недорогих участков часто встречаются более удачные по локации и статусу."
          buttonText="Смотреть каталог по продаже дешёвых земельных участков"
          onCtaClick={openModal}
        /> */}

        <InfoSection
          mainTitle={nedorogieUchastkiInfoMain.mainTitle}
          mainDescription={nedorogieUchastkiInfoMain.mainDescription}
          cards={nedorogieUchastkiInfoMain.cards}
        />

        <BenefitsGrid
          title={nedorogieUchastkiAttentionData.title}
          benefits={nedorogieUchastkiAttentionData.items.map((item) => ({
            icon: 'AlertCircle',
            title: item.title,
            description: item.description,
          }))}
        />

        <ProcessSteps
          title="Осталось всего 3 шага до покупки участка!"
          steps={nedorogieUchastkiProcessStepsData}
          ctaText="Не теряйте недели на просмотры — получите отбор с подтверждённым статусом и проверенными документами уже сегодня."
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <LeadForm
          title={nedorogieUchastkiLeadForm.title}
          description={nedorogieUchastkiLeadForm.description}
          buttonText={nedorogieUchastkiLeadForm.buttonText}
          onButtonClick={openModal}
        />

        {/* <Gallery
          title="Фото и видеогалерея"
          description=""
          items={nedorogieUchastkiGalleryData}
        /> */}

        <Testimonials
          title="Отзывы"
          testimonials={nedorogieUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о недорогих участках"
          items={nedorogieUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Не знаете, с чего начать выбор земли? Вы получите сопровождение сделки и подборку подходящих вариантов, чтобы не ошибиться и не откладывать покупку до роста цен!"
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

