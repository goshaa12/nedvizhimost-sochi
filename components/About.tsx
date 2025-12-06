export interface AboutProps {
  title?: string;
  paragraphs: string[];
  partnersTitle?: string;
  partners?: string[];
  partnersFooterText?: string;
}

export function About({
  title = 'О нас',
  paragraphs,
  partnersTitle = 'Нам доверяют',
  partners,
  partnersFooterText,
}: AboutProps) {
  const showPartnersSection =
    (Array.isArray(partners) && partners.length > 0) ||
    !!partnersFooterText;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {showPartnersSection && (
            <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
              {!!partnersTitle && (
                <h3 className="mb-4 md:mb-6 text-center text-lg md:text-xl font-semibold text-gray-900">{partnersTitle}</h3>
              )}
              {Array.isArray(partners) && partners.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-white h-16 md:h-20 rounded-xl border border-gray-200 flex items-center justify-center hover:border-emerald-900/30 transition-colors"
                    >
                      <span className="text-gray-400 text-xs md:text-sm px-2 text-center">{partner}</span>
                    </div>
                  ))}
                </div>
              )}
              {partnersFooterText && (
                <p className="text-center text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
                  {partnersFooterText}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
