import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Мамайка в Сочи | Выбирайте новостройку без рисков",
  description: "Выбирайте новостройку без рисков и лишних вопросов. Онлайн-показы и дистанционное оформление сделки. Полная проверка документов и статуса дома. Лучшие локации с комфортом и безопасностью.",
  keywords: "новостройки Мамайка Сочи, купить новостройку в Мамайке, новостройки без рисков, новостройки Мамайка от застройщика",
  openGraph: {
    title: "Новостройки в районе Мамайка в Сочи | Выбирайте новостройку без рисков",
    description: "Выбирайте новостройку без рисков и лишних вопросов. Онлайн-показы и дистанционное оформление сделки. Полная проверка документов и статуса дома.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/mamayka",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/mamayka/mamayka-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Мамайка в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Мамайка в Сочи | Выбирайте новостройку без рисков",
    description: "Выбирайте новостройку без рисков и лишних вопросов. Онлайн-показы и дистанционное оформление сделки. Полная проверка документов и статуса дома.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/mamayka/mamayka-1.webp",
        alt: "Новостройки в районе Мамайка в Сочи",
      },
    ],
  },
};

export default function MamaykaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

