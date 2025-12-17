"use client";

import { Search } from 'lucide-react';

export interface OtSobstvennikaDomaSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function OtSobstvennikaDomaSearchForm({
  title = 'Найдите идеальный дом с помощью фильтра!',
  description,
  buttonText = 'Показать результаты',
  onButtonClick,
}: OtSobstvennikaDomaSearchFormProps) {
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
                {/* Район */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Район:
                  </label>
                  <select 
                    name="district" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="any">Не важно</option>
                    <option value="central">Центральный</option>
                    <option value="adler">Адлер</option>
                    <option value="hostinsky">Хостинский</option>
                    <option value="dagomys">Дагомыс</option>
                    <option value="mamayka">Мамайка</option>
                    <option value="matsesta">Мацеста</option>
                    <option value="bytkha">Бытха</option>
                    <option value="krasnaya-polyana">Красная Поляна</option>
                    <option value="lazarevskoe">Лазаревское</option>
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
                    <option value="any">Не важно</option>
                    <option value="elite">Элит</option>
                    <option value="business">Бизнес</option>
                    <option value="middle">Средний</option>
                    <option value="economy">Эконом</option>
                  </select>
                </div>

                {/* Тип объекта */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Тип объекта:
                  </label>
                  <select 
                    name="type" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="any">Не важно</option>
                    <option value="private">Частный дом</option>
                    <option value="cottage">Коттедж</option>
                    <option value="townhouse">Таунхаус</option>
                    <option value="villa">Вилла</option>
                    <option value="boathouse">Эллинг</option>
                  </select>
                </div>

                {/* Площадь (м²) */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Площадь (м²):
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="areaMin"
                      type="text"
                      placeholder="Мин"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                    <input
                      name="areaMax"
                      type="text"
                      placeholder="Макс"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                  </div>
                </div>

                {/* Этажность */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Этажность:
                  </label>
                  <select 
                    name="floors" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="any">Не важно</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>

                {/* Цена */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Цена:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="priceMin"
                      type="text"
                      placeholder="Мин"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                    <input
                      name="priceMax"
                      type="text"
                      placeholder="Макс"
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

