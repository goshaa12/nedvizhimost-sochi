"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArendaApartmentsSearchForm } from '@/components/ArendaApartmentsSearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  arendaApartmentsHeroData,
  arendaApartmentsBenefitsData,
  arendaApartmentsComparisonData,
  arendaApartmentsInfoCardsData,
  arendaApartmentsProcessStepsData,
  arendaApartmentsTestimonialsData,
  arendaApartmentsFaqData,
  arendaApartmentsGalleryData,
} from '@/lib/arenda-apartments-data';
import { contactInfoData } from '@/lib/page-data';

export default function ArendaApartmentsPage() {
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
        <Hero {...arendaApartmentsHeroData} onCtaClick={openModal} />

        <ArendaApartmentsSearchForm
          title="Смотрите подходящие апартаменты"
          description="Выберите параметры — получите список доступных апартаментов в Сочи!"
          buttonText="Показать результат"
          onButtonClick={openModal}
        />

        <BenefitsGrid
          title="Почему стоит арендовать апартаменты с нами?"
          benefits={arendaApartmentsBenefitsData}
        />

        <ComparisonTable 
          title="С нами аренда проще — проверьте сами!"
          description="Сравните подходы и работайте только с теми, кто обеспечивает надёжность и выгодные условия."
          data={arendaApartmentsComparisonData}
          usLabel="Мы"
          othersLabel="Другие"
        />

        <InfoSection
          mainTitle=""
          mainDescription=""
          cards={arendaApartmentsInfoCardsData}
        />

        <ProcessSteps
          title="Арендуйте апартаменты за 3 шага!"
          steps={arendaApartmentsProcessStepsData}
          ctaText="Найдите апартаменты в Сочи за минуты. Отправьте заявку и получите актуальные варианты сразу!"
          ctaButtonText="Получить каталог"
          onCtaClick={openModal}
        />

        <ContactForm
          title="Ищете апартаменты в Сочи у моря?"
          description="Заселяйтесь в апартаменты у побережья Сочи. Оставьте заявку и получите подборку лучших вариантов!"
          contactInfo={[]}
          submitButtonText="Получить каталог"
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
          items={arendaApartmentsGalleryData}
        />

        <About
          title="О нас"
          paragraphs={[
            'Мы создаём сервис по аренде апартаментов в Сочи, чтобы клиенты быстро находили жильё на нужные даты, экономили время и деньги и наслаждались комфортом — будь то краткосрочная поездка или длительное проживание. Партнёры получают надёжный доход, а сотрудники развиваются и работают в команде единомышленников с общими ценностями.',
          ]}
        />

        <Testimonials
          title="Отзывы"
          testimonials={arendaApartmentsTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы об аренде"
          items={arendaApartmentsFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="Хотите снять апартаменты в Сочи? Оставьте заявку — покажем варианты с готовыми ключами для заезда сегодня."
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

