"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { InfoSection } from '@/components/InfoSection';
import { About } from '@/components/About';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  politikaKonfidencialnostiHeroData,
  politikaKonfidencialnostiInfoCardsData,
  politikaKonfidencialnostiAboutData,
} from '@/lib/politika-konfidencialnosti-data';
import { contactInfoData } from '@/lib/page-data';

export default function PolitikaKonfidencialnostiPage() {
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
        <Hero {...politikaKonfidencialnostiHeroData} onCtaClick={openModal} />

        <InfoSection
          mainTitle="Доверьте конфиденциальность агентству недвижимости Сочи"
          mainDescription=""
          cards={politikaKonfidencialnostiInfoCardsData}
        />

        <About
          title={politikaKonfidencialnostiAboutData.title}
          paragraphs={politikaKonfidencialnostiAboutData.paragraphs}
        />

        <ContactForm
          title="Оставьте заявку!"
          description="Узнайте всё о компании, услугах и актуальных объектах. Мы обеспечим конфиденциальность и безопасность. Получите проверенный каталог и юридические гарантии защиты персональной информации за 1 минуту."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить информацию о компании"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Вам больше не придётся сомневаться в выборе или рисковать деньгами. Получите бесплатный аудит любого объекта, план оплаты и экспертный разбор прямо сейчас!"
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

