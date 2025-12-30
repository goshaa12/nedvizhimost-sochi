"use client";

import { Search } from 'lucide-react';

export interface ApartmentsKrasnayaPolyanaSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function ApartmentsKrasnayaPolyanaSearchForm({
  title = 'Найдите подходящие апартаменты в Красной Поляне за минуту!',
  description,
  buttonText = 'Показать результаты поиска апартаментов',
  onButtonClick,
}: ApartmentsKrasnayaPolyanaSearchFormProps) {
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
                {/* Тип апартаментов */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Тип апартаментов:
                  </label>
                  <select 
                    name="type" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="apart-hotel">Апарт-отель</option>
                    <option value="resort-complex">Курортный комплекс</option>
                    <option value="zhk">Апартаменты в ЖК</option>
                  </select>
                </div>

                {/* Количество комнат */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Количество комнат:
                  </label>
                  <select 
                    name="rooms" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="1">1-комнатные</option>
                    <option value="2">2-комнатные</option>
                    <option value="3">3-комнатные</option>
                    <option value="4+">4+ комнаты</option>
                  </select>
                </div>

                {/* Близость к подъёмникам */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Близость к подъёмникам:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="distance300"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 300 м</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="distance700"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 700 м</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="distance1000"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 1 км</span>
                    </label>
                  </div>
                </div>

                {/* Сервис и инфраструктура */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Сервис и инфраструктура:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="management"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Управляющая компания</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rentalServices"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Услуги сдачи в аренду</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="spaPool"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">SPA / бассейн</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="parking"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Парковка</span>
                    </label>
                  </div>
                </div>

                {/* Статус */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Статус:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="done"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Сдан</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="building"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Строится</span>
                    </label>
                  </div>
                </div>

                {/* Отделка */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Отделка:
                  </label>
                  <select 
                    name="finishing" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="withRepair">С ремонтом</option>
                    <option value="preFinishing">Предчистовая</option>
                  </select>
                </div>

                {/* Площадь и Цена */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

