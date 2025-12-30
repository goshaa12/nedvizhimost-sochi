"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { MessageCircle } from 'lucide-react';
import {
  faqHeroData,
  faqItemsData,
  faqChecklistData,
  faqProcessStepsData,
} from '@/lib/faq-data';
import { contactInfoData } from '@/lib/page-data';

export default function FAQPage() {
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
        <Hero {...faqHeroData} onCtaClick={openModal} />

        <FAQ
          title="Часто задаваемые вопросы агентству недвижимости"
          items={faqItemsData}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Не нашли ответа на свой вопрос? Спросите нас напрямую!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Напишите нам: составим для вас пошаговый план покупки и ответим на все вопросы за 5 минут!
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  Задать вопрос
                </button>
                
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Написать в WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle={faqChecklistData.mainTitle}
          mainDescription={faqChecklistData.mainDescription}
          cards={faqChecklistData.cards}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашей недвижимости в Сочи!"
          steps={faqProcessStepsData}
          ctaText="Получите список проверенных объектов, доступных к сделке сегодня!"
          ctaButtonText="Получить подборку"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Подберём ликвидный вариант и подготовим договор за 24 часа. Нужно срочно купить или продать недвижимость? Напишите — мы на связи!"
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

