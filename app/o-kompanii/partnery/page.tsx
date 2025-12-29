"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ProcessSteps } from '@/components/ProcessSteps';
import { InfoSection } from '@/components/InfoSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  partneryHeroData,
  partneryBenefitsData,
  partneryProcessStepsData,
  partneryInfoCardsData,
} from '@/lib/partnery-data';
import { contactInfoData } from '@/lib/page-data';

export default function PartneryPage() {
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
        <Hero {...partneryHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Наши ключевые партнёры
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Мы сотрудничаем с лидерами рынка, чтобы обеспечить вам привилегированный сервис и безопасность на каждом этапе владения недвижимостью.
                </p>
              </div>
              
              <div className="space-y-8 md:space-y-12">
                <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                  <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-gray-900">
                    Спорт и активный отдых
                  </h3>
                  <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-700">
                    Sochi Top Team — ведущие партнёры агентства, представляющие профессиональный зал единоборств и ММА.
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 list-disc list-inside">
                    <li>Интенсивные тренировки по боксу и джиу-джитсу для детей и взрослых под руководством чемпионов.</li>
                    <li>Специальные условия на клубные абонементы и персональный тренинг, которые предоставляют наши партнёры.</li>
                    <li>Организация закрытых спортивных мероприятий и уникальные бонусы для всех активных клиентов агентства.</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                  <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-gray-900">
                    Туризм и гостеприимство
                  </h3>
                  <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-700">
                    Отдых в Сочи — надёжные партнеры, отвечающие за ваш комфорт, качественный досуг и сервис вне дома.
                  </p>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 list-disc list-inside">
                    <li>Специальные условия на бронирование премиальных отелей и апартаментов в лучших локациях побережья.</li>
                    <li>Индивидуальные экскурсионные программы и VIP-туры, которые разрабатывают для вас наши партнёры.</li>
                    <li>Круглосуточная поддержка по вопросам отдыха и помощь в оперативном бронировании объектов любого уровня.</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                  <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold text-gray-900">
                    Финансы и строительство
                  </h3>
                  <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-700">
                    Для юридической и финансовой защиты мы привлекли крупнейших партнёров отрасли:
                  </p>
                  
                  <div className="overflow-x-auto -mx-4 px-4">
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm min-w-[500px]">
                      <div className="grid grid-cols-2 bg-emerald-50">
                        <div className="p-4 md:p-6 border-r border-gray-200">
                          <h4 className="text-sm md:text-base font-semibold text-gray-900">Направление</h4>
                        </div>
                        <div className="p-4 md:p-6">
                          <h4 className="text-sm md:text-base font-semibold text-gray-900">Компании</h4>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 border-t border-gray-200">
                        <div className="p-4 md:p-6 border-r border-gray-200">
                          <div className="text-xs md:text-sm text-gray-700 font-medium">Банки</div>
                        </div>
                        <div className="p-4 md:p-6">
                          <p className="text-xs md:text-sm text-gray-700">Альфа-Банк, ВТБ, Россельхозбанк (ипотечные преференции).</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 border-t border-gray-200">
                        <div className="p-4 md:p-6 border-r border-gray-200">
                          <div className="text-xs md:text-sm text-gray-700 font-medium">Застройщики</div>
                        </div>
                        <div className="p-4 md:p-6">
                          <p className="text-xs md:text-sm text-gray-700">AVA Group, Karat Apartments, RKS Development (ценообразование без посредников).</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 border-t border-gray-200">
                        <div className="p-4 md:p-6 border-r border-gray-200">
                          <div className="text-xs md:text-sm text-gray-700 font-medium">Медиа</div>
                        </div>
                        <div className="p-4 md:p-6">
                          <p className="text-xs md:text-sm text-gray-700">Scapp, РА «Слон» (маркетинговая поддержка объектов).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Почему быть нашим партнёром выгодно?"
          benefits={partneryBenefitsData}
        />

        <ProcessSteps
          title="Осталось 4 шага к статусу партнёра и росту вашего дохода"
          steps={partneryProcessStepsData}
          ctaText="Отказ от партнёрства сегодня — это передача ваших клиентов и прибыли конкурентам. Начните работу сейчас на готовом трафике!"
          ctaButtonText="Стать партнёром и получить первые заказы"
          onCtaClick={openModal}
        />

        <InfoSection
          mainTitle="Надежные партнеры Сочи: масштабируйте доход вместе с нами"
          mainDescription="Используйте наши ресурсы, чтобы закрывать сделки в Сочи, не покидая свой регион. Мы обеспечим вашим клиентам сервис на местах, а вам — гарантированную выплату комиссии. Работайте с реальной базой объектов через надёжных партнёров, исключая риски и юридические ошибки."
          cards={partneryInfoCardsData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="1200+ сделок уже закрыты в партнёрстве. Вам не придётся возить клиентов на показы — наши брокеры сделают это за вас!"
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

