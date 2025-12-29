"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { InfoSection } from '@/components/InfoSection';
import { ContactForm } from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { Certificates } from '@/components/Certificates';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  komandaHeroData,
  komandaAboutData,
  komandaSpecialistsData,
  komandaGalleryData,
  komandaCertificatesData,
} from '@/lib/komanda-data';
import { contactInfoData } from '@/lib/page-data';

export default function KomandaPage() {
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
        <Hero {...komandaHeroData} onCtaClick={openModal} />

        <About
          title={komandaAboutData.title}
          paragraphs={komandaAboutData.paragraphs}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Выберите специалиста!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Познакомьтесь с нашей командой и найдите эксперта, который поможет вам на каждом этапе сделки.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="text-sm md:text-base font-medium text-gray-700 mb-2">
                      <strong>Отделы:</strong> Руководство компании/ Отдел продаж/ Юридический отдел/ Ипотечный отдел/ HR отдел
                    </p>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <p className="text-sm md:text-base text-gray-600 mb-1"><strong>ФИО:</strong></p>
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Должность:</strong></p>
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Телефон:</strong></p>
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Электронная почта:</strong></p>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                  >
                    Связаться с экспертом
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle="Доверьтесь экспертам по недвижимости в Сочи"
          mainDescription="В штате более 100 экспертов с подтверждённым опытом, которые помогают безопасно оформлять недвижимость. Каждый специалист:"
          cards={komandaSpecialistsData}
        />

        <ContactForm
          title="Присоединяйтесь к нашей команде!"
          description="Работайте с экспертами по недвижимости и добивайтесь успеха уже сегодня!"
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Хочу в команду"
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
          items={komandaGalleryData}
        />

        <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={komandaCertificatesData}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Истории успеха сотрудников
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Узнайте истории успеха наших сотрудников и их карьерный рост!
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Фото:</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>ФИО:</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Должность:</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>История:</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите работать с экспертной командой по недвижимости в Сочи? Оставьте телефон — получите подборку специалистов и их контакты для быстрой поддержки."
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

