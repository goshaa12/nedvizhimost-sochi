"use client";

import { Search } from 'lucide-react';

export interface OtZastroyshchikaNovostroykiSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function OtZastroyshchikaNovostroykiSearchForm({
  title = 'Подберите квартиру по вашим параметрам!',
  description,
  buttonText = 'Показать результаты',
  onButtonClick,
}: OtZastroyshchikaNovostroykiSearchFormProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-gray-600">
                {description}
              </p>
            )}
          </div>
          
          <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
            <form 
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                onButtonClick?.();
              }}
            >
              <div className="space-y-4 md:space-y-6">
                {/* Район города */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Район города:
                  </label>
                  <select 
                    name="district" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="central">Центральный</option>
                    <option value="hostinsky">Хостинский</option>
                    <option value="mamayka">Мамайка</option>
                    <option value="adler">Адлер</option>
                    <option value="matsesta">Мацеста</option>
                    <option value="dagomys">Дагомыс</option>
                    <option value="bytkha">Бытха</option>
                  </select>
                </div>

                {/* Класс */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Класс:
                  </label>
                  <select 
                    name="class" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="elite">Элит</option>
                    <option value="business">Бизнес</option>
                    <option value="econom">Эконом</option>
                    <option value="middle">Средний</option>
                  </select>
                </div>

                {/* Готовность */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Готовность:
                  </label>
                  <select 
                    name="readiness" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="done">Сдан</option>
                    <option value="q4-2025">4 квартал 2025</option>
                    <option value="q1-2026">1 квартал 2026</option>
                    <option value="q2-2026">2 квартал 2026</option>
                    <option value="q3-2026">3 квартал 2026</option>
                    <option value="q1-2027">1 квартал 2027 и позже</option>
                  </select>
                </div>

                {/* Кол-во комнат */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Кол-во комнат:
                  </label>
                  <select 
                    name="rooms" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="studio">Студии</option>
                    <option value="1kom">1-комнатные</option>
                    <option value="2kom">2-комнатные</option>
                    <option value="3kom">3-комнатные</option>
                  </select>
                </div>

                {/* Тип */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Тип:
                  </label>
                  <select 
                    name="type" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="apartments">Апартаменты</option>
                    <option value="penthouse">Пентхаус</option>
                  </select>
                </div>

                {/* Дополнительно */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Дополнительно:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="mortgage"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900"
                      />
                      <span className="text-sm text-gray-700">В ипотеку</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="fromDeveloper"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900"
                      />
                      <span className="text-sm text-gray-700">Только от застройщика</span>
                    </label>
                  </div>
                </div>

                {/* Этаж */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Этаж:
                  </label>
                  <input
                    name="floor"
                    type="text"
                    placeholder="Этаж"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>

                {/* Площадь */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Площадь:
                  </label>
                  <input
                    name="area"
                    type="text"
                    placeholder="Площадь"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>

                {/* Цена */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Цена:
                  </label>
                  <input
                    name="price"
                    type="text"
                    placeholder="Цена"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>
              </div>
            
              <button 
                type="submit" 
                className="w-full mt-4 md:mt-6 bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 text-sm md:text-base font-medium"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

