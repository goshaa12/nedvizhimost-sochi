"use client";

import { Search } from 'lucide-react';

export interface SearchOption {
  value: string;
  label: string;
}

export interface SearchFormProps {
  title?: string;
  description?: string;
  objectTypeLabel?: string;
  objectTypes?: SearchOption[];
  areaLabel?: string;
  areaPlaceholder?: string;
  districtLabel?: string;
  districts?: SearchOption[];
  priceLabel?: string;
  pricePlaceholder?: string;
  additionalLabel?: string;
  additionalPlaceholder?: string;
  buttonText?: string;
  onSubmit?: (data: {
    objectType?: string;
    area?: string;
    district?: string;
    price?: string;
    additional?: string;
  }) => void;
  onButtonClick?: () => void;
}

export function SearchForm({
  title = 'Поиск по объектам недвижимости',
  description,
  objectTypeLabel = 'Объект',
  objectTypes = [
    { value: 'apartments', label: 'Квартиры' },
    { value: 'houses', label: 'Дома' },
    { value: 'newbuildings', label: 'Новостройки' },
    { value: 'plots', label: 'Участки' },
    { value: 'commercial', label: 'Коммерция' },
  ],
  areaLabel = 'Площадь, м²',
  areaPlaceholder = 'Например, 50-100',
  districtLabel = 'Район города',
  districts = [
    { value: '', label: 'Выберите район' },
    { value: 'central', label: 'Центральный' },
    { value: 'hostinsky', label: 'Хостинский' },
    { value: 'mamayka', label: 'Мамайка' },
    { value: 'adler', label: 'Адлер' },
    { value: 'krasnaya-polyana', label: 'Красная Поляна' },
    { value: 'matsesta', label: 'Мацеста' },
    { value: 'dagomys', label: 'Дагомыс' },
    { value: 'bytkha', label: 'Бытха' },
  ],
  priceLabel = 'Цена, ₽',
  pricePlaceholder = 'Например, 5 000 000 - 10 000 000',
  additionalLabel = 'Дополнительные требования',
  additionalPlaceholder = 'Опишите ваши пожелания...',
  buttonText = 'Показать результаты',
  onSubmit,
  onButtonClick,
}: SearchFormProps) {
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
                const formData = new FormData(e.currentTarget);
                onSubmit?.({
                  objectType: formData.get('objectType') as string,
                  area: formData.get('area') as string,
                  district: formData.get('district') as string,
                  price: formData.get('price') as string,
                  additional: formData.get('additional') as string,
                });
                onButtonClick?.();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{objectTypeLabel}</label>
                  <select name="objectType" className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20">
                    {objectTypes.map((type, index) => (
                      <option key={index} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{areaLabel}</label>
                  <input
                    name="area"
                    type="text"
                    placeholder={areaPlaceholder}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{districtLabel}</label>
                  <select name="district" className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20">
                    {districts.map((district, index) => (
                      <option key={index} value={district.value}>{district.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{priceLabel}</label>
                  <input
                    name="price"
                    type="text"
                    placeholder={pricePlaceholder}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block mb-2 text-xs md:text-sm text-gray-600">{additionalLabel}</label>
                  <textarea
                    name="additional"
                    rows={3}
                    placeholder={additionalPlaceholder}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 resize-none"
                  />
                </div>
              </div>
              
              <button type="submit" className="w-full mt-4 md:mt-6 bg-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 text-sm md:text-base">
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
