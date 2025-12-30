import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Купите квартиру рядом с морем в Сочи | Квартиры от 3 до 25 млн ₽",
  description: "Купите квартиру рядом с морем в Сочи ⭐ Квартиры от 3 до 25 млн ₽ — для отдыха, инвестиций или жизни ⭐ Сделка полностью онлайн ⭐ Проверка документов — 100% защита от юридических рисков",
  keywords: "квартиры у моря сочи, купить квартиру у моря сочи, квартиры рядом с морем сочи, квартиры с видом на море сочи, квартиры у пляжа сочи",
  openGraph: {
    title: "Купите квартиру рядом с морем в Сочи | Квартиры от 3 до 25 млн ₽",
    description: "Купите квартиру рядом с морем в Сочи ⭐ Квартиры от 3 до 25 млн ₽ — для отдыха, инвестиций или жизни ⭐ Сделка полностью онлайн",
    url: "https://nedvizhimost-sochi.ru/kvartiry/u-morya",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/u-morya/u-morya-1.webp",
        width: 1200,
        height: 630,
        alt: "Купите квартиру рядом с морем в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Купите квартиру рядом с морем в Сочи | Квартиры от 3 до 25 млн ₽",
    description: "Купите квартиру рядом с морем в Сочи ⭐ Квартиры от 3 до 25 млн ₽ — для отдыха, инвестиций или жизни",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/u-morya/u-morya-1.webp",
        alt: "Купите квартиру рядом с морем в Сочи",
      },
    ],
  },
};

export default function KvartiryUMoryaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

