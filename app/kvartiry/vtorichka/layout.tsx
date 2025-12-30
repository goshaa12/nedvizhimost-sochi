import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Квартиры вторичка в Сочи | 2000+ квартир — найдите свою уже сегодня",
  description: "Квартиры вторичка в Сочи ⭐ 2 000+ квартир — найдите свою уже сегодня ⭐ Получите поддержку 24/7 и сопровождение ⭐ Оформите сделку онлайн в пару кликов ⭐ 0% переплат — платите напрямую застройщику",
  keywords: "квартиры вторичка сочи, купить квартиру вторичка сочи, вторичное жилье сочи, квартиры вторичный рынок сочи, готовые квартиры сочи",
  openGraph: {
    title: "Квартиры вторичка в Сочи | 2000+ квартир — найдите свою уже сегодня",
    description: "Квартиры вторичка в Сочи ⭐ 2 000+ квартир — найдите свою уже сегодня ⭐ Получите поддержку 24/7 и сопровождение ⭐ Оформите сделку онлайн в пару кликов",
    url: "https://nedvizhimost-sochi.ru/kvartiry/vtorichka",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/vtorichka/vtorichka-1.webp",
        width: 1200,
        height: 630,
        alt: "Квартиры вторичка в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Квартиры вторичка в Сочи | 2000+ квартир — найдите свою уже сегодня",
    description: "Квартиры вторичка в Сочи ⭐ 2 000+ квартир — найдите свою уже сегодня ⭐ Получите поддержку 24/7 и сопровождение",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/vtorichka/vtorichka-1.webp",
        alt: "Квартиры вторичка в Сочи",
      },
    ],
  },
};

export default function KvartiryVtorichkaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

