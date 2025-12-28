"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { InfoSection } from '@/components/InfoSection';
import { About } from '@/components/About';
import { LeadForm } from '@/components/LeadForm';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  oKompaniiHeroData,
  oKompaniiAboutData,
  oKompaniiBenefitsData,
  oKompaniiInfoCardsData,
  oKompaniiHistoryData,
  oKompaniiSpecialistsData,
  oKompaniiLeadFormData,
  oKompaniiTestimonialsData,
  oKompaniiFaqData,
  oKompaniiGalleryData,
} from '@/lib/o-kompanii-data';
import { contactInfoData } from '@/lib/page-data';

export default function OKompaniiPage() {
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
        <Hero {...oKompaniiHeroData} onCtaClick={openModal} />

        <About
          title={oKompaniiAboutData.title}
          paragraphs={oKompaniiAboutData.paragraphs}
        />

        <BenefitsGrid
          title="Почему выбирают именно нас?"
          benefits={oKompaniiBenefitsData}
        />

        <InfoSection
          mainTitle="Купите недвижимость в Сочи выгодно"
          mainDescription="Сочи привлекает мягким климатом и морским воздухом круглый год, что делает инвестиции в недвижимость особенно привлекательными. Цены на жильё растут в среднем на 12 % в год, а объекты с проверенной ликвидностью позволяют получить доход или комфортное проживание."
          cards={[
            {
              title: 'Почему 5000+ клиентов доверяют нам?',
              description: 'Каждый месяц помогаем более 120 клиентам подобрать недвижимость в Сочи без ошибок. 93 % сделок проходят без скрытых комиссий, а точная проверка документов и ликвидности исключает риски потери денег. С нами вы экономите недели и уверенно принимаете решение.',
            },
            {
              title: 'Как избежать ошибок при выборе недвижимости?',
              description: 'Большинство ошибок при покупке жилья — около 78 % — происходят из-за неправильной оценки района и целей сделки. На консультации эксперт проверит документы, учтёт сезонные колебания цен и подскажет проекты, чтобы вы не переплачивали и оформили покупку выгодно.',
            },
          ]}
        />

        <InfoSection
          mainTitle="Познакомьтесь с нашей историей"
          mainDescription=""
          cards={oKompaniiHistoryData}
        />

        <InfoSection
          mainTitle="Доверьтесь экспертам по недвижимости в Сочи"
          mainDescription="В штате более 100 специалистов с подтверждённым опытом, которые помогают безопасно оформлять недвижимость. Каждый специалист:"
          cards={oKompaniiSpecialistsData}
        />

        <ContactForm
          title={oKompaniiLeadFormData.title}
          description={oKompaniiLeadFormData.description}
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText={oKompaniiLeadFormData.buttonText}
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={oKompaniiGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={oKompaniiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о недвижимости"
          items={oKompaniiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Ищете выгодную недвижимость в Сочи? Оставьте телефон — получите подборку актуальных вариантов и консультацию по каждому объекту."
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

