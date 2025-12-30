import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Апартаменты в Красной Поляне | Купить апартаменты у подъёмников",
  description: "Апартаменты в Красной Поляне ⭐ Апартаменты у подъёмников и курортных зон ⭐ Онлайн-показы и дистанционная сделка ⭐ Проверяем документы и управляющую компанию ⭐ Варианты для отдыха и доходной аренды",
  keywords: "апартаменты красная поляна, апартаменты в красной поляне, купить апартаменты красная поляна, апартаменты сочи красная поляна, апартаменты у подъемников",
  openGraph: {
    title: "Апартаменты в Красной Поляне | Купить апартаменты у подъёмников",
    description: "Апартаменты в Красной Поляне ⭐ Апартаменты у подъёмников и курортных зон ⭐ Онлайн-показы и дистанционная сделка ⭐ Проверяем документы и управляющую компанию",
    url: "https://nedvizhimost-sochi.ru/kvartiry/apartments/krasnaya-polyana",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/apartments/krasnaya-polyana/krasnaya-polyana-1.webp",
        width: 1200,
        height: 630,
        alt: "Апартаменты в Красной Поляне",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Апартаменты в Красной Поляне | Купить апартаменты у подъёмников",
    description: "Апартаменты в Красной Поляне ⭐ Апартаменты у подъёмников и курортных зон ⭐ Онлайн-показы и дистанционная сделка",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/apartments/krasnaya-polyana/krasnaya-polyana-1.webp",
        alt: "Апартаменты в Красной Поляне",
      },
    ],
  },
};

export default function ApartmentsKrasnayaPolyanaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

