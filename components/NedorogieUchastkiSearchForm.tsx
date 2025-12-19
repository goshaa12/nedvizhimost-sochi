"use client";

import { Search } from 'lucide-react';
import { useState } from 'react';

export interface NedorogieUchastkiSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function NedorogieUchastkiSearchForm({
  title = 'Подберите участок под бюджет за минуту!',
  description,
  buttonText = 'Показать недорогие участки',
  onButtonClick,
}: NedorogieUchastkiSearchFormProps) {
  const [areaFrom, setAreaFrom] = useState('');
  const [areaTo, setAreaTo] = useState('');

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
                {/* Бюджет */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Бюджет:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value="0-2"
                        className="w-4 h-4 text-emerald-900 border-gray-300 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">До 2 млн</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value="2-4"
                        className="w-4 h-4 text-emerald-900 border-gray-300 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">2–4 млн</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value="4-6"
                        className="w-4 h-4 text-emerald-900 border-gray-300 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">4–6 млн</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value="6-10"
                        className="w-4 h-4 text-emerald-900 border-gray-300 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">6–10 млн</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value="custom"
                        className="w-4 h-4 text-emerald-900 border-gray-300 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Свой диапазон</span>
                    </label>
                  </div>
                </div>

                {/* Площадь участка */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Площадь участка:
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        value={areaFrom}
                        onChange={(e) => setAreaFrom(e.target.value)}
                        placeholder="от"
                        className="w-20 px-3 py-2 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">до</span>
                      <input
                        type="text"
                        value={areaTo}
                        onChange={(e) => setAreaTo(e.target.value)}
                        placeholder="до"
                        className="w-20 px-3 py-2 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">соток</span>
                    </div>
                    <p className="text-xs text-gray-500">(оптимальный максимум для недорогих участков)</p>
                  </div>
                </div>

                {/* Категория земли */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Категория земли:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="category"
                        value="izhs"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">ИЖС</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="category"
                        value="snt-dnp"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">СНТ/ДНП</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="category"
                        value="lph"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">ЛПХ</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="category"
                        value="other"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Другое</span>
                    </label>
                  </div>
                </div>

                {/* Район */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Район:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="district"
                        value="adler"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Адлер</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="district"
                        value="hosta"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Хоста</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="district"
                        value="dagomys"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Дагомыс</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="district"
                        value="lazarevskoe"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Лазаревское</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="district"
                        value="central"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Центральный район</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="district"
                        value="other"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Другие районы</span>
                    </label>
                  </div>
                </div>

                {/* Доступность оформления */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Доступность оформления:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="availability"
                        value="ready-docs"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Готовы документы</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="availability"
                        value="can-build"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Можно строить (ИЖС)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="availability"
                        value="snt-registration"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">СНТ с регистрацией</span>
                    </label>
                  </div>
                </div>

                {/* Тип предложения */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Тип предложения:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="offer-type"
                        value="owner"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Участок от собственника</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="offer-type"
                        value="agency"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Участок от агентства</span>
                    </label>
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

