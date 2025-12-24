"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DagomysUchastkiSearchForm } from '@/components/DagomysUchastkiSearchForm';
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
  dagomysUchastkiHeroData,
  dagomysUchastkiBenefitsData,
  dagomysUchastkiComparisonData,
  dagomysUchastkiInfoMain,
  dagomysUchastkiProcessStepsData,
  dagomysUchastkiPaymentMethodsData,
  dagomysUchastkiLeadForm,
  dagomysUchastkiTestimonialsData,
  dagomysUchastkiFaqData,
  dagomysUchastkiGalleryData,
} from '@/lib/dagomys-uchastki-data';
import { contactInfoData } from '@/lib/page-data';

export default function DagomysUchastkiPage() {
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
        <Hero {...dagomysUchastkiHeroData} onCtaClick={openModal} />

        <DagomysUchastkiSearchForm
          title="Выберите участок под себя!"
          description="Воспользуйтесь фильтром, чтобы сразу увидеть нужные варианты!"
          buttonText="Показать результаты"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит покупать участки в Дагомысе с нами?"
          benefits={dagomysUchastkiBenefitsData}
        />

        <ComparisonTable
          title="Сравните подходы и сохраните до 20% бюджета ещё до сделки!"
          description="Компании работают по-разному — если не заметить разницу, переплата или отказ в регистрации становятся реальностью."
          data={dagomysUchastkiComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle={dagomysUchastkiInfoMain.mainTitle}
          mainDescription={dagomysUchastkiInfoMain.mainDescription}
          cards={dagomysUchastkiInfoMain.cards}
        />

        <ProcessSteps
          title="Осталось 3 шага к вашему участку в Дагомысе!"
          steps={dagomysUchastkiProcessStepsData}
          ctaText="Подходящие участки уходят быстро, особенно в Дагомысе. Один запрос сейчас сэкономит недели самостоятельного поиска!"
          ctaButtonText="Оставить заявку"
          onCtaClick={openModal}
        />

        <PaymentMethods
          title="Используйте любые способы оплаты участка в Дагомысе!"
          methods={dagomysUchastkiPaymentMethodsData}
          ctaText="Узнайте, какой способ оплаты подойдёт именно вам!"
          ctaButtonText="Получить консультацию"
          onCtaClick={openModal}
        />

        <ContactForm
          title={dagomysUchastkiLeadForm.title}
          description={dagomysUchastkiLeadForm.description}
          formTitle=""
          phoneLabel={dagomysUchastkiLeadForm.phoneLabel}
          submitButtonText={dagomysUchastkiLeadForm.buttonText}
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
          items={dagomysUchastkiGalleryData}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                О нас
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                Мы на протяжении 9 лет работаем с земельными участками и понимаем, с какими вопросами и сомнениями сталкиваются люди, когда хотят купить участок в Дагомысе.  
                Поэтому в работе мы фокусируемся не на количестве показов, а на том, чтобы выбранная земля действительно подходила под задачу и не создавала проблем позже.  
                Мы берём на себя сложные моменты — документы, ограничения, детали по участку — чтобы вам не приходилось разбираться в этом самостоятельно и возвращаться к выбору заново.
              </p>
            </div>
          </div>
        </section>

        <Testimonials
          title="Отзывы"
          testimonials={dagomysUchastkiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы при выборе участка в Дагомысе"
          items={dagomysUchastkiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Получите подборку участков в Дагомысе под ваш бюджет и задачу без риска ошибиться. Уже 250+ клиентов нашли подходящую землю быстрее — станьте следующим!"
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

