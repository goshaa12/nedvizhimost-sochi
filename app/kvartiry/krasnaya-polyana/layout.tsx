import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Квартиры в Красной Поляне в Сочи | 2000+ проверенных вариантов",
  description: "Квартиры в Красной Поляне в Сочи ⭐ Выберите подходящую квартиру из 2000+ проверенных вариантов ⭐ Получите сопровождение личного менеджера 24/7 ⭐ Оформите сделку онлайн за пару минут",
  keywords: "квартиры красная поляна, квартиры в красной поляне сочи, купить квартиру красная поляна, квартиры сочи красная поляна, новостройки красная поляна",
  openGraph: {
    title: "Квартиры в Красной Поляне в Сочи | 2000+ проверенных вариантов",
    description: "Квартиры в Красной Поляне в Сочи ⭐ Выберите подходящую квартиру из 2000+ проверенных вариантов ⭐ Получите сопровождение личного менеджера 24/7",
    url: "https://nedvizhimost-sochi.ru/kvartiry/krasnaya-polyana",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/krasnaya-polyana/krasnaya-polyana-1.webp",
        width: 1200,
        height: 630,
        alt: "Квартиры в Красной Поляне в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Квартиры в Красной Поляне в Сочи | 2000+ проверенных вариантов",
    description: "Квартиры в Красной Поляне в Сочи ⭐ Выберите подходящую квартиру из 2000+ проверенных вариантов",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/krasnaya-polyana/krasnaya-polyana-1.webp",
        alt: "Квартиры в Красной Поляне в Сочи",
      },
    ],
  },
};

export default function KrasnayaPolyanaKvartiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

