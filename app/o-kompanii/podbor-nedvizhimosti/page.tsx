"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SearchForm } from '@/components/SearchForm';
import { BenefitsGrid } from '@/components/BenefitsGrid';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ComparisonTable } from '@/components/ComparisonTable';
import { InfoSection } from '@/components/InfoSection';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import {
  podborNedvizhimostiHeroData,
  podborNedvizhimostiBenefitsData,
  podborNedvizhimostiComparisonData,
  podborNedvizhimostiProcessStepsData,
  podborNedvizhimostiReasonsData,
  podborNedvizhimostiSpecialistsData,
  podborNedvizhimostiAboutData,
  podborNedvizhimostiTestimonialsData,
  podborNedvizhimostiFaqData,
  podborNedvizhimostiGalleryData,
} from '@/lib/podbor-nedvizhimosti-data';
import { contactInfoData } from '@/lib/page-data';

export default function PodborNedvizhimostiPage() {
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
        <Hero {...podborNedvizhimostiHeroData} onCtaClick={openModal} />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                Найдите свою недвижимость в Сочи!
              </h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600">
                Настройте параметры и получите только подходящие вам объекты.
              </p>
              <button
                onClick={openModal}
                className="bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                Показать больше
              </button>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Что вы получаете, работая с нами?"
          benefits={podborNedvizhimostiBenefitsData}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  Сравните условия до начала поиска!
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                  Можно потратить 40 часов на обзвоны фейковых объявлений, а можно сразу получить список чистых объектов. Проверьте уровень сервиса, чтобы не терять время и контролировать сделку.
                </p>
              </div>
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg min-w-[800px]">
                  <div className="grid grid-cols-4 bg-emerald-50">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Параметр</h3>
                    </div>
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Самостоятельно</h3>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50">
                      <h3 className="text-sm md:text-base text-emerald-900 font-semibold">С нами</h3>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Обычное агентство</h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Безопасность</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <p className="text-xs md:text-sm text-gray-500">70% объявлений в Сочи — проблемные объекты.</p>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <p className="text-xs md:text-sm text-gray-700">Подбор недвижимости с фильтром по 29 пунктам. Риск — 0%.</p>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-500">Риск скрытых проблем ради быстрой комиссии.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Сервис</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <p className="text-xs md:text-sm text-gray-500">Поиск юристов и логистики своими силами.</p>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <p className="text-xs md:text-sm text-gray-700">Полный цикл: от трансфера до сделки. Экономия — 14 дней.</p>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-500">Фокус на продаже. Сопровождение часто формальное.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Цена</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <p className="text-xs md:text-sm text-gray-500">Риск переплатить 1–2 млн ₽ из-за наценок.</p>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <p className="text-xs md:text-sm text-gray-700">Недвижимость по прямым ценам и переуступкам ниже рынка на 15%.</p>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-500">Скрытые наценки в 3–5% уже заложены в стоимость.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Время</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <p className="text-xs md:text-sm text-gray-500">Сотни пустых звонков и фейков. Выгорание.</p>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <p className="text-xs md:text-sm text-gray-700">5–10 минут: готовые варианты, если решили выбрать недвижимость.</p>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-500">Долго, так как часто предлагают лоты с высокой комиссией.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">База</div>
                    </div>
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <p className="text-xs md:text-sm text-gray-500">Устаревшие данные на сайтах-агрегаторах.</p>
                    </div>
                    <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                      <p className="text-xs md:text-sm text-gray-700">30 000+ объектов. Доступна недвижимость, которой нет в рекламе.</p>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-500">Только узкий список объектов от партнёров агентства.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InfoSection
          mainTitle="Смотрите только проверенные объекты недвижимости"
          mainDescription="Забудьте о фейковых звонках и страхе купить жильё под снос. Наш профессиональный подбор недвижимости отсекает несуществующие объекты и лоты с проблемными документами. Выолучите ключи от проверенной квартиры без судов, нервов и внезапных арестов имущества."
          cards={[
            {
              title: 'Проверяйте риэлторов через реальный опыт сделок',
              description: 'В Сочи 8 из 10 агентов скрывают проблемы с землёй ради быстрой комиссии. Наша услуга подбора недвижимости опирается на 9 лет практики: юристы проверяют застройщика ещё до задатка. Вы покупаете недвижимость по прямой цене собственника и экономите до 25% на срочных продажах.',
            },
            {
              title: 'Фильтруйте мусорные сайты при поиске жилья',
              description: 'Агрегаторы завалены «фонарями» для привлечения звонков. Наш сайт подбора недвижимости даёт доступ к закрытой базе с обновлением каждый час и реальными ценами. Вы видите всюкартину рынка Сочи и не тратите время на бесполезные выезды по фейковым адресам.',
            },
            {
              title: 'Узнайте правду о рынке через разбор цен',
              description: 'Как правильно выбрать недвижимость, чтобы она приносила доход, а не требовала вложений? Личная консультация вскроет всё: от плесени в низинах до проблем с парковкой. Вы получите расчёт окупаемости и не совершите ошибок, которые стоят владельцам по 2–3 миллиона рублей.',
            },
          ]}
        />

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Заезжайте в свою квартиру, даже если не хватает всей суммы!
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Используйте наши партнёрские отношения с банками и застройщиками Сочи, чтобы получить одобрение там, где другим отказывают!
                </p>
              </div>
              
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg min-w-[600px]">
                  <div className="grid grid-cols-2 bg-emerald-50">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Программа</h3>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">Ваши выгоды и результат</h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Ипотека</div>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-700">Одобрение в 95% случаев от 7,4%. Дисконт –0,4% к ставке, так как ваша недвижимость оформляется через нас.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Рассрочка</div>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-700">0% до 12 месяцев. Согласуем личный график выплат напрямую у застройщика.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors">
                    <div className="p-4 md:p-6 border-r border-gray-200">
                      <div className="text-xs md:text-sm text-gray-700 font-medium">Господдержка</div>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-xs md:text-sm text-gray-700">Объединим маткапитал и субсидии в одной сделке.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps
          title="Осталось 3 шага к вашей квартире в Сочи!"
          steps={podborNedvizhimostiProcessStepsData}
          ctaText="Попытка дождаться «лучшего момента» в Сочи часто заканчивается покупкой недвижимости хуже и дороже. Оцените текущие предложения, чтобы не жалеть об упущенной выгоде!"
          ctaButtonText="Оставить заявку и получить подборку квартир сейчас"
          onCtaClick={openModal}
        />

        <InfoSection
          mainTitle="Доверьте сделку специалисту по подбору недвижимости"
          mainDescription=""
          cards={[
            {
              title: 'Экономьте время на анализе рынка',
              description: 'Лично проверили 500+ строек и знаю их «подноготную». Вы получите честный отчет по скрытым минусам, чтобы ваша недвижимость была безопасной и не пришлось ездить по фейковым адресам.',
            },
            {
              title: 'Инвестируйте в ликвидные объекты',
              description: 'Поможем отличить переоцененный объект от ликвидного. Вы защищены от наценок «для туристов» и понимаете, какая недвижимость принесет прибыль, а в какую лучше не вкладываться.',
            },
            {
              title: 'Доверяйте только практике и фактам',
              description: 'За плечами эксперта 100+ сделок в Сочи. Каждая недвижимость проходит через мой аудит документов, чтобы после покупки вы не получили иски от администрации или претензии третьих лиц.',
            },
          ]}
        />

        <InfoSection
          mainTitle="Покупайте недвижимость без визита в Сочи"
          mainDescription=""
          cards={[
            {
              title: 'Для жителей регионов России',
              description: 'Подбирайте недвижимость по видеосвязи и подписывайте договор онлайн. Получите документы из Росреестра в своем городе без затрат на перелеты.',
            },
            {
              title: 'Для граждан стран СНГ',
              description: 'Оплачивайте недвижимость через проверенные каналы без блокировок. Мы берем на себя валютный контроль и оформление прав собственности в РФ.',
            },
            {
              title: 'Для иностранных граждан',
              description: 'Ваша недвижимость оформляется «под ключ» с переводом документов. Откроем счета и подтвердим легальность средств без вашего участия.',
            },
          ]}
        />

        <InfoSection
          mainTitle="Обеспечьте доходность ваших вложений"
          mainDescription=""
          cards={[
            {
              title: 'Проверяйте потенциал прибыли',
              description: 'Готовим отчет с точными цифрами окупаемости. Вы видите чистую доходность до сделки, чтобы выбранная недвижимость стала активом.',
            },
            {
              title: 'Проводите аудит действующих активов',
              description: 'Проводим аудит ваших текущих объектов в Сочи. Подскажем, когда недвижимость достигла пика цены и ее пора выгодно продать.',
            },
            {
              title: 'Получите полное сопровождение сделки',
              description: 'Ведем сделку от проверки застройщика до защиты перевода. Любая купленная недвижимость будет юридически чистой и ликвидной.',
            },
          ]}
        />

        <BenefitsGrid
          title="4 причины начать поиск до приезда в Сочи"
          benefits={podborNedvizhimostiReasonsData}
        />

        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
                  Доверьте подбор профильным специалистам
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Посмотрите на тех, кто берёт на себя ваш подбор недвижимости. Эти эксперты лично объездили все стройки, чтобы отобрать для вас лучшее!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {podborNedvizhimostiSpecialistsData.map((specialist, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100">
                    <h3 className="mb-2 md:mb-3 text-base md:text-lg font-semibold text-gray-900">{specialist.name}</h3>
                    <p className="mb-1 md:mb-2 text-sm md:text-base text-gray-700 font-medium">{specialist.position}</p>
                    <p className="mb-3 md:mb-4 text-xs md:text-sm text-gray-600">{specialist.department}</p>
                    <p className="text-sm md:text-base text-gray-600">{specialist.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          title="Оставьте заявку на подбор жилья!"
          description="Получите персональный каталог из 5 проверенных объектов под ваш бюджет за 15 минут. Это бесплатно и защитит вас от покупки неликвида или проблемных долгостроев."
          contactInfo={[]}
          formTitle=""
          nameLabel=""
          namePlaceholder=""
          phoneLabel="Телефон"
          phonePlaceholder="+7 (___) ___-__-__"
          messageLabel=""
          messagePlaceholder=""
          submitButtonText="Получить каталог и сэкономить время"
          whatsappButtonText="Написать в WhatsApp"
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            openModal();
          }}
          onWhatsAppClick={openModal}
        />

        <About
          title={podborNedvizhimostiAboutData.title}
          paragraphs={podborNedvizhimostiAboutData.paragraphs}
        />

        <Gallery
          title="Фото и видеогалерея"
          description=""
          items={podborNedvizhimostiGalleryData}
        />

        <Testimonials
          title="Отзывы"
          testimonials={podborNedvizhimostiTestimonialsData}
        />

        <FAQ
          title="Часто задаваемые вопросы о подборе недвижимости в Сочи"
          items={podborNedvizhimostiFaqData}
        />

        <ContactForm
          title="Свяжитесь с нами!"
          description="800+ успешных сделок — наш результат за 9 лет. Оставьте заявку, чтобы получить доступ к базе объектов, которых нет на агрегаторах и стать счастливым обладателем недвижимости в Сочи!"
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

