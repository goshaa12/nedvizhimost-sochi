import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки эконом-класса в Сочи | 1 800+ новостроек на выбор",
  description: "1 800+ новостроек эконом‑класса — на выбор. Покупка напрямую у застройщика — 0 % переплат. Оформление сделки онлайн — за пару кликов. Варианты под ваш бюджет — без лишних переплат. Смотрите новостройки в Сочи и выберите жильё, где удобно жить с семьёй!",
  keywords: "новостройки эконом-класса Сочи, купить квартиру в новостройке эконом-класса, дешевые новостройки Сочи, квартиры в новостройках эконом-класса, жилые комплексы эконом-класса Сочи, новостройки от застройщика эконом",
  openGraph: {
    title: "Новостройки эконом-класса в Сочи | 1 800+ новостроек на выбор",
    description: "1 800+ новостроек эконом‑класса — на выбор. Покупка напрямую у застройщика — 0 % переплат. Оформление сделки онлайн — за пару кликов.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/ekonom",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/ekonom/ekonom-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки эконом-класса в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки эконом-класса в Сочи | 1 800+ новостроек на выбор",
    description: "1 800+ новостроек эконом‑класса — на выбор. Покупка напрямую у застройщика — 0 % переплат. Оформление сделки онлайн — за пару кликов.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/ekonom/ekonom-1.webp",
        alt: "Новостройки эконом-класса в Сочи",
      },
    ],
  },
};

export default function EkonomNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

