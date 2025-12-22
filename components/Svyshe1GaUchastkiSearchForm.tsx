"use client";

import { Search } from 'lucide-react';
import { useState } from 'react';

export interface Svyshe1GaUchastkiSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Svyshe1GaUchastkiSearchForm({
  title = 'Подберите участок по вашим параметрам!',
  description,
  buttonText = 'Показать результаты',
  onButtonClick,
}: Svyshe1GaUchastkiSearchFormProps) {
  const [areaFrom, setAreaFrom] = useState('1');
  const [areaTo, setAreaTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

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
                    <option value="izhs">ИЖС</option>
                    <option value="lph">ЛПХ</option>
                    <option value="sx">С/Х</option>
                    <option value="kommercheskiy">Коммерческий</option>
                  </select>
                </div>

                {/* Площадь */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Площадь:
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      value={areaFrom}
                      onChange={(e) => setAreaFrom(e.target.value)}
                      placeholder="от"
                      className="w-20 px-3 py-2 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                    <span className="text-sm md:text-base text-gray-700">—</span>
                    <input
                      type="text"
                      value={areaTo}
                      onChange={(e) => setAreaTo(e.target.value)}
                      placeholder="до"
                      className="w-20 px-3 py-2 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                    <span className="text-sm md:text-base text-gray-700">га</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">(возможность выбора диапазона)</p>
                </div>

                {/* Район */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Район:
                  </label>
                  <select 
                    name="district" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="adler">Адлер</option>
                    <option value="dagomys">Дагомыс</option>
                    <option value="hosta">Хоста</option>
                    <option value="matsesta">Мацеста</option>
                    <option value="lazarevskoe">Лазаревское</option>
                    <option value="mamayka">Мамайка</option>
                    <option value="kudepsta">Кудепста</option>
                    <option value="sochi-okrainy">Сочи (окраины)</option>
                  </select>
                </div>

                {/* Цена */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Цена:
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                      placeholder="минимальная"
                      className="flex-1 px-3 py-2 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                    <span className="text-sm md:text-base text-gray-700">—</span>
                    <input
                      type="text"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                      placeholder="максимальная"
                      className="flex-1 px-3 py-2 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                  </div>
                </div>

                {/* Рельеф */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Рельеф:
                  </label>
                  <select 
                    name="relief" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="">Не важно</option>
                    <option value="rovnyy">Ровный</option>
                    <option value="legkiy-uklon">Лёгкий уклон</option>
                    <option value="uklon">Уклон</option>
                    <option value="gornyy">Горный рельеф</option>
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
                        name="light"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Свет рядом или на территории</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="water"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Вода / возможность бурения</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="car-access"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Подъезд для легкового авто</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="special-access"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Подъезд для спецтехники</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="gas"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Газ рядом (если актуально для района)</span>
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

