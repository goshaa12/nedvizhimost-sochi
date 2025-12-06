import { Check, X } from 'lucide-react';

export interface ComparisonRow {
  parameter: string;
  us: string;
  others: string;
}

export interface ComparisonTableProps {
  title?: string;
  description?: string;
  data: ComparisonRow[];
  usLabel?: string;
  othersLabel?: string;
}

export function ComparisonTable({
  title,
  description,
  data,
  usLabel = 'Мы',
  othersLabel = 'Другие',
}: ComparisonTableProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {(title || description) && (
            <div className="text-center mb-8 md:mb-12">
              {title && (
                <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
              )}
              {description && (
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg min-w-[600px]">
              <div className="grid grid-cols-3 bg-emerald-50">
                <div className="p-4 md:p-6 border-r border-gray-200">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">Параметр</h3>
                </div>
                <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50">
                  <h3 className="text-sm md:text-base text-emerald-900 font-semibold">{usLabel}</h3>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-base text-gray-500 font-semibold">{othersLabel}</h3>
                </div>
              </div>
              
              {data.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-t border-gray-200 hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <div className="text-xs md:text-sm text-gray-700 font-medium">{row.parameter}</div>
                  </div>
                  <div className="p-4 md:p-6 border-r border-emerald-900/20 bg-emerald-50/30">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-900" />
                      </div>
                      <p className="text-xs md:text-sm text-gray-700">{row.us}</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                      </div>
                      <p className="text-xs md:text-sm text-gray-500">{row.others}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
