import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Мацесты в Сочи | Выберите свою новостройку из 300+ вариантов",
  description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов. Платите напрямую застройщику — 0% переплат.",
  keywords: "новостройки Мацеста Сочи, новостройки в Мацесте, купить квартиру в новостройке Мацеста, новостройки Мацеста, квартиры в новостройках Мацеста, жилые комплексы Мацеста Сочи",
  openGraph: {
    title: "Новостройки в районе Мацесты в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/matsesta",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/matsesta/matsesta-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Мацесты в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Мацесты в Сочи | Выберите свою новостройку из 300+ вариантов",
    description: "Выберите свою новостройку из 300+ вариантов. Получите сопровождение менеджера 24 на 7. Оформите сделку онлайн в пару кликов.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/matsesta/matsesta-1.webp",
        alt: "Новостройки в районе Мацесты в Сочи",
      },
    ],
  },
};

export default function MatsestaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

