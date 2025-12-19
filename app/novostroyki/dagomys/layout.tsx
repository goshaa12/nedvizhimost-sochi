import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Дагомыса в Сочи | Выберите свою новостройку из 300+ вариантов",
  description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов. Платите напрямую застройщику — 0% переплат.",
  keywords: "новостройки Дагомыс Сочи, новостройки в Дагомысе, купить квартиру в новостройке Дагомыс, новостройки Дагомыс, квартиры в новостройках Дагомыс, жилые комплексы Дагомыс Сочи",
  openGraph: {
    title: "Новостройки в районе Дагомыса в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/dagomys",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/dagomys/dagomys-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Дагомыса в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Дагомыса в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/dagomys/dagomys-1.webp",
        alt: "Новостройки в районе Дагомыса в Сочи",
      },
    ],
  },
};

export default function DagomysNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

