"use client";

import { Search } from 'lucide-react';

export interface KvartiryUMoryaSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function KvartiryUMoryaSearchForm({
  title = 'Отбирайте лучшие квартиры за 1 минуту',
  description,
  buttonText = 'Показать результаты',
  onButtonClick,
}: KvartiryUMoryaSearchFormProps) {
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
                {/* Тип жилья */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Тип жилья:
                  </label>
                  <select 
                    name="type" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="kvartira">Квартира</option>
                    <option value="apartments">Апартаменты</option>
                    <option value="studio">Студия</option>
                    <option value="1-3kom">1–3 комнаты</option>
                  </select>
                </div>

                {/* Близость к морю */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Близость к морю:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="firstLine"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Первая береговая</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="upTo300m"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 300 м</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="upTo500m"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 500 м</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="upTo1km"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 1 км</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="notImportant"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Не важно</span>
                    </label>
                  </div>
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
                    <option value="comfort">Комфорт</option>
                    <option value="business">Бизнес</option>
                    <option value="premium">Премиум</option>
                  </select>
                </div>

                {/* Статус дома */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Статус дома:
                  </label>
                  <select 
                    name="status" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="done">Сдан</option>
                    <option value="building">Строится</option>
                  </select>
                </div>

                {/* Параметры */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Параметры:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="withRepair"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">С ремонтом</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="parking"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Парковка</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="largeTerrace"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Большая терраса</span>
                    </label>
                  </div>
                </div>

                {/* Площадь */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Площадь:
                  </label>
                  <input
                    name="area"
                    type="text"
                    placeholder="Введите площадь"
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
                    placeholder="Введите цену"
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

