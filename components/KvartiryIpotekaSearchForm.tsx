"use client";

import { Search } from 'lucide-react';

export interface KvartiryIpotekaSearchFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function KvartiryIpotekaSearchForm({
  title = 'Найдите квартиру по вашим параметрам',
  description,
  buttonText = 'Показать результаты',
  onButtonClick,
}: KvartiryIpotekaSearchFormProps) {
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
                    <option value="kvartira">Квартира</option>
                    <option value="apartments">Апартаменты</option>
                    <option value="studio">Студия</option>
                    <option value="1-3kom">1–3 комнаты</option>
                  </select>
                </div>

                {/* Класс дома */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Класс дома:
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

                {/* Виды ипотеки */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Виды ипотеки:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="familyMortgage"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Семейная ипотека</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="subsidizedRate"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Субсидированная ставка</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="gosSupport"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Господдержка</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="fromDeveloper"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Ипотека от застройщика</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="noDownPayment"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Ипотека без первоначального взноса</span>
                    </label>
                  </div>
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
                        name="bySea"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">У моря</span>
                    </label>
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
                        name="secondary"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Вторичка</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newBuilding"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Новостройка</span>
                    </label>
                  </div>
                </div>

                {/* Бюджет */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Бюджет:
                  </label>
                  <input
                    name="budget"
                    type="text"
                    placeholder="Введите бюджет"
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
                    placeholder="Введите площадь"
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

