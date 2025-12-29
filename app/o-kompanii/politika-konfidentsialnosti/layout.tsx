import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Политика конфиденциальности — Недвижимость в Сочи",
  description: "Политика конфиденциальности ⭐ Мы заботимся о безопасности ваших данных при подборе и аренде недвижимости в Сочи ⭐ Узнайте, как мы обрабатываем информацию",
  keywords: "политика конфиденциальности недвижимость сочи, защита персональных данных, конфиденциальность данных, обработка персональных данных",
  openGraph: {
    title: "1️⃣ Политика конфиденциальности — Недвижимость в Сочи",
    description: "Политика конфиденциальности ⭐ Мы заботимся о безопасности ваших данных при подборе и аренде недвижимости в Сочи ⭐ Узнайте, как мы обрабатываем информацию",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/politika-konfidencialnosti",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/politika-konfidencialnosti/politika-konfidencialnosti-1.webp",
        width: 1200,
        height: 630,
        alt: "Политика конфиденциальности — Недвижимость в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Политика конфиденциальности — Недвижимость в Сочи",
    description: "Политика конфиденциальности ⭐ Мы заботимся о безопасности ваших данных при подборе и аренде недвижимости в Сочи ⭐ Узнайте, как мы обрабатываем информацию",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/politika-konfidencialnosti/politika-konfidencialnosti-1.webp",
        alt: "Политика конфиденциальности — Недвижимость в Сочи",
      },
    ],
  },
};

export default function PolitikaKonfidencialnostiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

