"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Blog } from '@/components/Blog';
import { InfoSection } from '@/components/InfoSection';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import {
  blogHeroData,
  blogCategoriesData,
  blogArticlesData,
  blogInfoSectionData,
  blogFaqData,
} from '@/lib/blog-data';
import { contactInfoData } from '@/lib/page-data';

export default function BlogPage() {
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

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    openModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...blogHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Читайте рубрики и оставайтесь в курсе событий!
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {blogCategoriesData.map((category, index) => (
                <div
                  key={index}
                  className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-900/30 transition-all"
                >
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <Blog
          title="Узнайте, как избежать переплаты до 20% на сделках!"
          description="Узнайте больше о рынке недвижимости Сочи и используйте знания в своих сделках!"
          articles={blogArticlesData}
          readMoreText="Читать"
        /> */}

        <section className="py-12 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Посмотреть ещё статьи и сэкономить деньги
              </button>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle={blogInfoSectionData.mainTitle}
          mainDescription={blogInfoSectionData.mainDescription}
          cards={blogInfoSectionData.cards}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Получите подборка от эксперта!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Не понимаете, что реально стоит своих денег? Получите подборку от квартир до объектов под инвестиции уже сегодня!
                </p>
              </div>
              
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const phone = formData.get('phone') as string;
                  console.log('Phone submitted:', phone);
                  openModal();
                }}
              >
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">Телефон</label>
                  <div className="relative">
                    <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  Посмотреть подборку и не переплачивать
                </button>
                
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Написать в WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8 lg:p-12 rounded-2xl border border-emerald-100">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Будьте в курсе изменений рынка Сочи!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Читайте новые статьи о недвижимости и отслеживайте рост цен, падение спроса вовремя и не заходите в сделки вслепую! Оставайтесь на шаг впереди рынка!
                </p>
              </div>
              
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get('email') as string;
                  handleEmailSubmit(email);
                }}
              >
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">Email</label>
                  <div className="relative">
                    <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    </div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Введите ваш email"
                      className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                >
                  Подписаться и растить капитал за счёт рынка
                </button>
              </form>
            </div>
          </div>
        </section>

        <FAQ
          title="Часто задаваемые вопросы о нашем блоге о недвижимости Сочи"
          items={blogFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="3000+ читателей уже принимают решения, применяя знания из нашего блога и экономят на одной сделке до 300 000! Присоединяйтесь — станьте следующим!"
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

