"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AdlerUchastkiSearchForm } from '@/components/AdlerUchastkiSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { PaymentMethods } from '@/components/PaymentMethods';
import { ContactForm } from '@/components/ContactForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  adlerUchastkiHeroData,
  adlerUchastkiBenefitsData,
  adlerUchastkiComparisonData,
  adlerUchastkiInfoMain,
  adlerUchastkiProcessStepsData,
  adlerUchastkiPaymentMethodsData,
  adlerUchastkiLeadForm,
  adlerUchastkiTestimonialsData,
  adlerUchastkiFaqData,
  adlerUchastkiGalleryData,
} from '@/lib/adler-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function AdlerUchastkiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleFormSubmit = (data: { name: string; phone: string }) => {
    console.log('Form submitted:', data);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header ctaButton={{ text: 'Связаться', onClick: openModal }} />
      <main>
        <Hero {...adlerUchastkiHeroData} onCtaClick={openModal} />

        <AdlerUchastkiSearchForm
          title="Найдите подходящую землю быстрее!"
          description="Отметьте нужные параметры, чтобы сразу исключить неподходящие участки и сэкономить время на поиске."
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в Адлере с нами?"
          benefits={adlerUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Оцените разницу до покупки"
          description="Проверьте, где теряют деньги при покупке земли в Адлере, и найдите участок с чистыми документами и реальной ценой."
          data={adlerUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Смотрите актуальные участки в Адлере
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 text-center">
                Изучите предложения, которые готовы к просмотру и оформлению уже сегодня.
              </p>
              <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li>• <strong>Фото</strong></li>
                  <li>• <strong>Название или обозначение</strong></li>
                  <li>• <strong>Площадь (сотки)</strong></li>
                  <li>• <strong>Статус категории земли / ВРИ</strong> (ИЖС, ЛПХ, СНТ)</li>
                  <li>• <strong>Рельеф</strong> (ровный / уклон)</li>
                  <li>• <strong>Коммуникации</strong> (свет, вода, канализация — иконками)</li>
                  <li>• <strong>Дата добавления / актуальности</strong></li>
                  <li>• <strong>Цена</strong></li>
                  <li>• <strong>Иконка расстояния до моря</strong> (метры или км)</li>
                  <li>• Иконки <strong>[Избранное]</strong> и <strong>[Сравнить]</strong></li>
                </ul>
                <div className="mt-6 md:mt-8 text-center">
                  <button
                    onClick={openModal}
                    className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
                  >
                    Показать больше
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <InfoSection
          mainTitle={adlerUchastkiInfoMain.mainTitle}
          mainDescription={adlerUchastkiInfoMain.mainDescription}
          cards={adlerUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашему участку в Адлере"
          steps={adlerUchastkiProcessStepsData}
          ctaText="Найдите свое место у моря и начните стройку без юридических хлопот!"
          ctaButtonText="Посмотреть свободные участки"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты участка"
          methods={adlerUchastkiPaymentMethodsData}
          ctaText="Узнайте, какой вариант оплаты подойдёт именно вам!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <ContactForm
          title={adlerUchastkiLeadForm.title}
          description={adlerUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={adlerUchastkiLeadForm.phoneLabel}
          submitButtonText={adlerUchastkiLeadForm.buttonText}
          whatsappButtonText="Написать в WhatsApp"
          contactInfo={[]}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={adlerUchastkiGalleryData}
        />

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Сертификаты, дипломы и награды
              </h2>
            </div>
          </div>
        </section> */}

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                О нас
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                С 2016 года мы помогаем находить лучшую землю в Адлере, становясь вашим надежным партнером на рынке недвижимости. Наша команда берет на себя все заботы, чтобы ваша покупка прошла легко и оставила только приятные впечатления.
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                Мы заранее готовим документы и проверяем каждый метр участка на соответствие вашим планам по строительству дома. Вы получите полную информацию о соседях и сетях, что позволит принять верное решение и наслаждаться будущим жильем.
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                Убедитесь в нашей надёжности — посмотрите, с какими партнёрами мы работаем.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Нам доверяют
              </h2>
            </div>
          </div>
        </section> */}

        {/* <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                Блог о покупке участка в Адлере
              </h2>
            </div>
          </div>
        </section> */}

        <Testimonials
          title="Отзывы"
          testimonials={adlerUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы по участкам в Адлере"
          items={adlerUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Пока вы сравниваете варианты, лучшие участки в Адлере уже находят своих владельцев. Напишите нам — вы получите список мест для дома вашей мечты и сэкономите недели на самостоятельных поисках!"
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

