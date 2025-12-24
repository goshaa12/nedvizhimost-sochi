"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { Search } from 'lucide-react';
import {
  kommerciyaHeroData,
  kommerciyaBenefitsData,
  kommerciyaComparisonData,
  kommerciyaInfoCardsData,
  kommerciyaProcessStepsData,
  kommerciyaPaymentMethodsData,
  kommerciyaTestimonialsData,
  kommerciyaFaqData,
  kommerciyaGalleryData,
} from '@/lib/kommerciya-data';
import { contactInfoData } from '@/lib/page-data';

export default function KommerciyaPage() {
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
        <Hero {...kommerciyaHeroData} onCtaClick={openModal} />

        {/* Search Form */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Отберите только подходящие объекты!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Фильтр сразу убирает неликвид, завышенные цены и случайные предложения — вы увидите только коммерцию, которую покупают и сдают.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <form 
                  className="space-y-4 md:space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block mb-2 text-xs md:text-sm text-gray-600">Район города:</label>
                      <select name="district" className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20">
                        <option value="">Не важно</option>
                        <option value="central">Центральный</option>
                        <option value="hostinsky">Хостинский</option>
                        <option value="mamayka">Мамайка</option>
                        <option value="adler">Адлер</option>
                        <option value="krasnaya-polyana">Красная Поляна</option>
                        <option value="matsesta">Мацеста</option>
                        <option value="dagomys">Дагомыс</option>
                        <option value="bytkha">Бытха</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-xs md:text-sm text-gray-600">Кол-во комнат:</label>
                      <select name="rooms" className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20">
                        <option value="">Не важно</option>
                        <option value="1">1-комнатные</option>
                        <option value="2">2-комнатные</option>
                        <option value="3">3-комнатные</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-xs md:text-sm text-gray-600">Тип:</label>
                      <select name="type" className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20">
                        <option value="">Не важно</option>
                        <option value="torgovye">Торговые площади</option>
                        <option value="gostinitsy">Гостиницы</option>
                        <option value="ofisy">Офисы и офисные помещения</option>
                        <option value="bary">Бары и рестораны</option>
                        <option value="sklady">Складские помещения</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-xs md:text-sm text-gray-600">Площадь:</label>
                      <input
                        name="area"
                        type="text"
                        placeholder="Например, 50-100"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-xs md:text-sm text-gray-600">Цена:</label>
                      <input
                        name="price"
                        type="text"
                        placeholder="Например, 5 000 000 - 10 000 000"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                      Параметры:
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="by-sea"
                          className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                        />
                        <span className="text-sm md:text-base text-gray-700">У моря</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="in-center"
                          className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                        />
                        <span className="text-sm md:text-base text-gray-700">В Центре Сочи</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                      Дополнительно:
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="mortgage"
                          className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                        />
                        <span className="text-sm md:text-base text-gray-700">В ипотеку</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full mt-4 md:mt-6 bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 text-sm md:text-base"
                  >
                    <Search className="w-4 h-4 md:w-5 md:h-5" />
                    Показать ликвидную коммерческую недвижимость
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Почему стоит покупать коммерческую недвижимость с нами?"
          benefits={kommerciyaBenefitsData}
        />

        <ComparisonTable 
          title="Чем отличается наш подход к сделке?"
          description="Когда пытаются купить коммерческую недвижимость в сочи «подешевле», теряют месяцы и деньги; здесь вы сразу получите анализ с проверки, цену и контроль с сопровождением. Сравните, чем отличаются подходы и как это повлияет на бизнес!"
          data={kommerciyaComparisonData}
          usLabel="Мы"
          othersLabel="Другие агенты"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={kommerciyaInfoCardsData}
        />

        <ProcessSteps
          title="Осталось всего 3 шага к покупке коммерческой недвижимости в Сочи"
          steps={kommerciyaProcessStepsData}
          ctaText="Если отложить выбор, ликвидные объекты уйдут первыми, а цена вырастёт. Зафиксируйте условия сделки сейчас и не переплачивайте!"
          ctaButtonText="Оставить заявку на подбор недвижимости"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте удобные способы оплаты коммерческой недвижимости!"
          methods={kommerciyaPaymentMethodsData}
          ctaText="Зафиксируйте удобный способ оплаты и получите расчёт сделки уже сегодня!"
          ctaButtonText="Выбрать выгодный способ оплаты"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Получите расчёт доходности до покупки на бесплатной консультации!"
          description="Рассчитайте покупку коммерческой недвижимости за 10 минут, и узнайте цену, доходность и риски бесплатно!"
          contactInfo={[]}
          submitButtonText="Получить расчёт и не переплатить"
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
          items={kommerciyaGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы развиваем компанию федерального уровня, создавая ценность для клиентов, партнёров и команды. Клиенты получают продуманные решения и выгоду от каждой покупки. Партнёры — стабильные результаты и прозрачное сотрудничество. Сотрудники — рост, доход и развитие в сильной профессиональной среде.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={kommerciyaTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при покупке коммерческой недвижимости"
          items={kommerciyaFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Пока вы откладываете, ликвидные объекты уходят. Свяжитесь сейчас — вы сразу поймёте, с чего начать, зафиксируете варианты и не переплатите за ошибочный выбор!"
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

