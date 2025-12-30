import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Квартиры в ипотеку в Сочи | Выбирайте квартиры, которые точно проходят по ипотеке",
  description: "Квартиры в ипотеку в Сочи ⭐ Выбирайте квартиры, которые точно проходят по ипотеке ⭐ Смотрите объекты онлайн и оформляйте сделку дистанционно ⭐ Проверяйте квартиру и застройщика до принятия решения",
  keywords: "квартиры в ипотеку сочи, ипотека сочи, купить квартиру в ипотеку сочи, квартиры ипотека сочи, ипотечные квартиры сочи",
  openGraph: {
    title: "Квартиры в ипотеку в Сочи | Выбирайте квартиры, которые точно проходят по ипотеке",
    description: "Квартиры в ипотеку в Сочи ⭐ Выбирайте квартиры, которые точно проходят по ипотеке ⭐ Смотрите объекты онлайн и оформляйте сделку дистанционно",
    url: "https://nedvizhimost-sochi.ru/kvartiry/v-ipoteku",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/v-ipoteku/v-ipoteku-1.webp",
        width: 1200,
        height: 630,
        alt: "Квартиры в ипотеку в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Квартиры в ипотеку в Сочи | Выбирайте квартиры, которые точно проходят по ипотеке",
    description: "Квартиры в ипотеку в Сочи ⭐ Выбирайте квартиры, которые точно проходят по ипотеке",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/v-ipoteku/v-ipoteku-1.webp",
        alt: "Квартиры в ипотеку в Сочи",
      },
    ],
  },
};

export default function KvartiryIpotekaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

