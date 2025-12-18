import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Бытха в Сочи | 300+ новостроек — выберите свою уже сегодня",
  description: "300+ новостроек — выберите свою уже сегодня. Получите поддержку 24/7 и сопровождение. Оформите сделку онлайн в пару кликов. 0% переплат — платите напрямую застройщику.",
  keywords: "новостройки Бытха Сочи, новостройки в Бытхе, купить квартиру в новостройке Бытха, новостройки Бытха, квартиры в новостройках Бытха, жилые комплексы Бытха Сочи",
  openGraph: {
    title: "Новостройки в районе Бытха в Сочи | 300+ новостроек — выберите свою уже сегодня",
    description: "300+ новостроек — выберите свою уже сегодня. Получите поддержку 24/7 и сопровождение. Оформите сделку онлайн в пару кликов.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/bytkha",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/bytkha/bytkha-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Бытха в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Бытха в Сочи | 300+ новостроек — выберите свою уже сегодня",
    description: "300+ новостроек — выберите свою уже сегодня. Получите поддержку 24/7 и сопровождение. Оформите сделку онлайн в пару кликов.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/bytkha/bytkha-1.webp",
        alt: "Новостройки в районе Бытха в Сочи",
      },
    ],
  },
};

export default function BytkhaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

