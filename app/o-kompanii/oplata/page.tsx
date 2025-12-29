"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProcessSteps } from '@/components/ProcessSteps';
import { InfoSection } from '@/components/InfoSection';
import { About } from '@/components/About';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  oplataHeroData,
  oplataProcessStepsData,
  oplataPaymentMethodsData,
  oplataBenefitsData,
  oplataAboutData,
} from '@/lib/oplata-data';
import { contactInfoData } from '@/lib/page-data';

export default function OplataPage() {
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
        <Hero {...oplataHeroData} onCtaClick={openModal} />

        <ProcessSteps
          title="Забронируйте жильё за 5 минут!"
          steps={oplataProcessStepsData}
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Проходите сделку легко и без нервов
                </h2>
                <h3 className="mb-6 md:mb-8 text-lg md:text-xl font-semibold text-gray-800">
                  Платите так, как удобно вам
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {oplataPaymentMethodsData.map((method, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <h4 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{method.title}</h4>
                    <p className="text-sm md:text-base text-gray-600">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Получите ключи без лишних хлопот
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {oplataBenefitsData.map((benefit, index) => (
                  <div key={index} className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <h4 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <About
          title={oplataAboutData.title}
          paragraphs={oplataAboutData.paragraphs}
        />

        <ContactForm
          title="Оставьте заявку!"
          description="Не откладывайте решение — ликвидные объекты Центрального района уходят за часы. Оставьте заявку сейчас и получите расчёт и подборку квартир под ваш бюджет по старой цене."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить консультацию по оплате"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Сэкономьте время и бюджет, начните поиск с экспертами. Просто отправьте сообщение и получите расчёт уже в течение 15 минут!"
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

