"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { InfoSection } from '@/components/InfoSection';
import { ContactForm } from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { Certificates } from '@/components/Certificates';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  vakansiiHeroData,
  vakansiiBenefitsData,
  vakansiiBenefitsListData,
  vakansiiGalleryData,
  vakansiiCertificatesData,
} from '@/lib/vakansii-data';
import { contactInfoData } from '@/lib/page-data';

export default function VakansiiPage() {
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
        <Hero {...vakansiiHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Смотрите доступные вакансии
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Выбирайте вакансию без долгого поиска — все условия и зарплата указаны.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 mb-6 md:mb-8">
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Специальность</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Зарплата</strong></p>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-1"><strong>Условия</strong></p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={openModal}
                className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Откликнуться на вакансию
              </button>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Почему стоит работать у нас?"
          benefits={vakansiiBenefitsData}
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Что вы получаете, работая у нас?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {vakansiiBenefitsListData.map((item, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Оставьте заявку на вакансию!"
          description="Начните зарабатывать сразу на готовых объектах с клиентами в нашей команде — вакансия ждёт вас!"
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Откликнуться на вакансии"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description="Посмотрите, как мы проводим тимбилдинги и корпоративы — оцените атмосферу команды перед откликом на вакансию!"
          items={vakansiiGalleryData}
        />

        {/* <Certificates
          title="Сертификаты, дипломы и награды"
          description=""
          certificates={vakansiiCertificatesData}
        /> */}

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите присоединиться к команде профессионалов по недвижимости в Сочи? Оставьте телефон — получите список открытых вакансий и контакт HR для быстрого отклика."
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

