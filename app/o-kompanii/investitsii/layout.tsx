import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Инвестиции в недвижимость в Сочи — доходность до 78%",
  description: "Инвестиции в недвижимость в Сочи ⭐ Доходность до 78%, более 30 000 объектов в базе, проверенные сделки и выгодные условия ⭐ Начните инвестировать уже сегодня!",
  keywords: "инвестиции в недвижимость сочи, инвестиции в недвижимость, вложение инвестиций в недвижимости, надежные инвестиции в недвижимость, пассивные инвестиции в недвижимость, инвестиции в недвижимость способы, инвестиций в недвижимость доход, пассивный доход инвестиции в недвижимость, инвестиции в курортную недвижимость",
  openGraph: {
    title: "1️⃣ Инвестиции в недвижимость в Сочи — доходность до 78%",
    description: "Инвестиции в недвижимость в Сочи ⭐ Доходность до 78%, более 30 000 объектов в базе, проверенные сделки и выгодные условия ⭐ Начните инвестировать уже сегодня!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/investitsii",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/investitsii/investitsii-1.webp",
        width: 1200,
        height: 630,
        alt: "Инвестиции в недвижимость в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Инвестиции в недвижимость в Сочи — доходность до 78%",
    description: "Инвестиции в недвижимость в Сочи ⭐ Доходность до 78%, более 30 000 объектов в базе, проверенные сделки и выгодные условия ⭐ Начните инвестировать уже сегодня!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/investitsii/investitsii-1.webp",
        alt: "Инвестиции в недвижимость в Сочи",
      },
    ],
  },
};

export default function InvestitsiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

