import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки у моря в Сочи | Выберите свою новостройку из 300+ вариантов",
  description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов. Платите напрямую застройщику без наценок.",
  keywords: "новостройки у моря Сочи, новостройки с видом на море, купить квартиру у моря Сочи, новостройки у моря, квартиры у моря Сочи, жилые комплексы у моря Сочи",
  openGraph: {
    title: "Новостройки у моря в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/u-morya",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/u-morya/u-morya-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки у моря в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки у моря в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/u-morya/u-morya-1.webp",
        alt: "Новостройки у моря в Сочи",
      },
    ],
  },
};

export default function UMoryaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

