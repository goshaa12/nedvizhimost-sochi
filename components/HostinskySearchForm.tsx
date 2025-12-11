"use client";

import { Search } from 'lucide-react';

export interface SearchOption {
  value: string;
  label: string;
}

export interface HostinskySearchFormProps {
  title?: string;
  description?: string;
  classes?: SearchOption[];
  rooms?: SearchOption[];
  types?: SearchOption[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function HostinskySearchForm({
  title = 'Быстрый фильтр и точный подбор',
  description,
  classes = [
    { value: 'any', label: 'Не важно' },
    { value: 'elite', label: 'Элит' },
    { value: 'biznes', label: 'Бизнес' },
    { value: 'ekonom', label: 'Эконом' },
    { value: 'sredniy', label: 'Средний' },
  ],
  rooms = [
    { value: 'any', label: 'Не важно' },
    { value: 'studio', label: 'Студии' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ],
  types = [
    { value: 'any', label: 'Не важно' },
    { value: 'apartments', label: 'Апартаменты' },
    { value: 'penthouse', label: 'Пентхаус' },
  ],
  buttonText = 'Узнать цену квартиры по вашему бюджету',
  onButtonClick,
}: HostinskySearchFormProps) {
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
                {/* Класс */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                    Класс:
                  </label>
                  <select 
                    name="class" 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    {classes.map((classOption, index) => (
                      <option key={index} value={classOption.value}>{classOption.label}</option>
                    ))}
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
                    {rooms.map((room, index) => (
                      <option key={index} value={room.value}>{room.label}</option>
                    ))}
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
                    {types.map((type, index) => (
                      <option key={index} value={type.value}>{type.label}</option>
                    ))}
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
                        name="bySea"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">У моря</span>
                    </label>
                  </div>
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
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">В ипотеку</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="secondary"
                        className="w-4 h-4 text-emerald-900 border-gray-300 rounded focus:ring-emerald-900/20"
                      />
                      <span className="text-sm md:text-base text-gray-700">Вторичка</span>
                    </label>
                  </div>
                </div>

                {/* Этаж, Площадь, Цена */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                      Этаж:
                    </label>
                    <input
                      name="floor"
                      type="text"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-xs md:text-sm font-medium text-gray-700">
                      Площадь:
                    </label>
                    <input
                      name="area"
                      type="text"
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

