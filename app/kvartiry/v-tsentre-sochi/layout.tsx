import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Квартиры в центре Сочи | 2000+ квартир — найдите свою уже сегодня",
  description: "Квартиры в центре Сочи ⭐ 2 000+ квартир — найдите свою уже сегодня ⭐ Получите поддержку 24/7 и сопровождение ⭐ Оформите сделку онлайн в пару кликов ⭐ 0% переплат — платите напрямую застройщику",
  keywords: "квартиры в центре сочи, купить квартиру центр сочи, квартиры центр сочи, квартиры центральный район сочи, новостройки центр сочи",
  openGraph: {
    title: "Квартиры в центре Сочи | 2000+ квартир — найдите свою уже сегодня",
    description: "Квартиры в центре Сочи ⭐ 2 000+ квартир — найдите свою уже сегодня ⭐ Получите поддержку 24/7 и сопровождение ⭐ Оформите сделку онлайн в пару кликов",
    url: "https://nedvizhimost-sochi.ru/kvartiry/v-tsentre-sochi",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/v-tsentre-sochi/v-tsentre-sochi-1.webp",
        width: 1200,
        height: 630,
        alt: "Квартиры в центре Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Квартиры в центре Сочи | 2000+ квартир — найдите свою уже сегодня",
    description: "Квартиры в центре Сочи ⭐ 2 000+ квартир — найдите свою уже сегодня ⭐ Получите поддержку 24/7 и сопровождение",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/v-tsentre-sochi/v-tsentre-sochi-1.webp",
        alt: "Квартиры в центре Сочи",
      },
    ],
  },
};

export default function KvartiryTsentrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

