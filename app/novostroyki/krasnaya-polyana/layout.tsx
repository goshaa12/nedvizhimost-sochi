import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Красной Поляны в Сочи | Выберите свою новостройку из 300+ вариантов",
  description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов. Платите напрямую застройщику — 0% переплат.",
  keywords: "новостройки Красная Поляна Сочи, новостройки в Красной Поляне, купить квартиру в новостройке Красная Поляна, новостройки Красная Поляна, квартиры в новостройках Красная Поляна, жилые комплексы Красная Поляна Сочи",
  openGraph: {
    title: "Новостройки в районе Красной Поляны в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/krasnaya-polyana",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/krasnaya-polyana/krasnaya-polyana-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Красной Поляны в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Красной Поляны в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/krasnaya-polyana/krasnaya-polyana-1.webp",
        alt: "Новостройки в районе Красной Поляны в Сочи",
      },
    ],
  },
};

export default function KrasnayaPolyanaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

