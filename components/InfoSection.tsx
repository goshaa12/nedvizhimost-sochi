export interface InfoCard {
  title: string;
  description: string;
}

export interface InfoSectionProps {
  mainTitle?: string;
  mainDescription?: string;
  cards: InfoCard[];
}

export function InfoSection({
  mainTitle = 'Купите недвижимость Сочи выгодно сегодня',
  mainDescription,
  cards,
}: InfoSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {mainDescription && (
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 shadow-sm">
              <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-gray-900">{mainTitle}</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {mainDescription}
              </p>
            </div>
          )}
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cards.map((card, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
