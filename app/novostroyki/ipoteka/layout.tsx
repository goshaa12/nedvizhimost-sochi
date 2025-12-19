import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в ипотеку в Сочи | Смотрите новостройки, которые точно проходят по ипотеке",
  description: "Смотрите новостройки, которые точно проходят по ипотеке. Выбирайте квартиры из 300+ проверенных вариантов. Получайте поддержку менеджера 24/7 на каждом шаге. Смотрите объекты онлайн и оформляйте дистанционно.",
  keywords: "новостройки в ипотеку Сочи, ипотека на новостройки Сочи, купить квартиру в ипотеку Сочи, новостройки ипотека, квартиры в ипотеку Сочи, ипотечные программы новостройки Сочи",
  openGraph: {
    title: "Новостройки в ипотеку в Сочи | Смотрите новостройки, которые точно проходят по ипотеке",
    description: "Смотрите новостройки, которые точно проходят по ипотеке. Выбирайте квартиры из 300+ проверенных вариантов. Получайте поддержку менеджера 24/7 на каждом шаге.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/ipoteka",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/ipoteka/ipoteka-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в ипотеку в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в ипотеку в Сочи | Смотрите новостройки, которые точно проходят по ипотеке",
    description: "Смотрите новостройки, которые точно проходят по ипотеке. Выбирайте квартиры из 300+ проверенных вариантов. Получайте поддержку менеджера 24/7 на каждом шаге.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/ipoteka/ipoteka-1.webp",
        alt: "Новостройки в ипотеку в Сочи",
      },
    ],
  },
};

export default function IPotekaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

