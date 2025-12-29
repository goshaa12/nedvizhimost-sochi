"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  sertifikatyHeroData,
} from '@/lib/sertifikaty-data';
import { contactInfoData } from '@/lib/page-data';

export default function SertifikatyPage() {
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
        <Hero {...sertifikatyHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Наши сертификаты и лицензии
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Проверяйте документы и работайте с экспертами, которым можно доверять.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-1">
                {/* Сертификат 1 */}
                <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-lg flex flex-col md:flex-row items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-full md:w-36">
                    <img
                      src="/images/o-kompanii/sertifikaty/sertifikaty-1.webp"
                      alt="Сертификат агента"
                      className="rounded-lg w-full object-contain shadow-md border"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Сертификат эксперта по недвижимости</h3>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Кем выдан:</span> Ассоциация Специалистов рынка Недвижимости России</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Сфера действия:</span> Продажи, юридическое сопровождение</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Срок действия:</span> до 31.12.2027</p>
                  </div>
                </div>
                {/* Сертификат 2 */}
                <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-lg flex flex-col md:flex-row items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-full md:w-36">
                    <img
                      src="/images/o-kompanii/sertifikaty/sertifikaty-2.webp"
                      alt="Лицензия риэлт"
                      className="rounded-lg w-full object-contain shadow-md border"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Лицензия на проведение сделок с недвижимостью</h3>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Кем выдан:</span> Росреестр РФ</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Сфера действия:</span> Аренда, купля-продажа</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Год выдачи:</span> 2022</p>
                  </div>
                </div>
                {/* Сертификат 3 */}
                <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-lg flex flex-col md:flex-row items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-full md:w-36">
                    <img
                      src="/images/o-kompanii/sertifikaty/sertifikaty-3.webp"
                      alt="Член Ассоциации"
                      className="rounded-lg w-full object-contain shadow-md border"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Членство в Гильдии риэлторов Сочи</h3>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Кем выдан:</span> Гильдия риэлторов г. Сочи</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Сфера действия:</span> Продажи, консалтинг</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Срок действия:</span> до 24.08.2026</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <button
                  onClick={openModal}
                  className="inline-block bg-emerald-900 text-white px-8 py-3 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-base font-medium"
                >
                  Смотреть ещё сертификаты
                </button>
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Оставьте заявку на консультацию!"
          description="Оставьте номер — получите персональную консультацию по недвижимости в Сочи и подбор объектов, подходящих именно вам."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить консультацию"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите оформить сделку с недвижимостью в Сочи безопасно? Оставьте заявку — получите подборку объектов от специалистов."
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

