import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки по ФЗ-214 в Сочи | Покупайте квартиры только в домах по 214-ФЗ",
  description: "Покупайте квартиры только в домах по 214-ФЗ. Сравнивайте 300+ проверенных новостроек с эскроу-счетами. Получайте поддержку 24/7 на всех этапах сделки. Оформляйте покупку онлайн без лишних визитов.",
  keywords: "новостройки ФЗ-214 Сочи, новостройки по 214-ФЗ, купить квартиру по ФЗ-214, эскроу-счета, ДДУ, новостройки с эскроу",
  openGraph: {
    title: "Новостройки по ФЗ-214 в Сочи | Покупайте квартиры только в домах по 214-ФЗ",
    description: "Покупайте квартиры только в домах по 214-ФЗ. Сравнивайте 300+ проверенных новостроек с эскроу-счетами. Получайте поддержку 24/7 на всех этапах сделки.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/fz-214",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/fz-214/fz-214-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки по ФЗ-214 в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки по ФЗ-214 в Сочи | Покупайте квартиры только в домах по 214-ФЗ",
    description: "Покупайте квартиры только в домах по 214-ФЗ. Сравнивайте 300+ проверенных новостроек с эскроу-счетами. Получайте поддержку 24/7 на всех этапах сделки.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/fz-214/fz-214-1.webp",
        alt: "Новостройки по ФЗ-214 в Сочи",
      },
    ],
  },
};

export default function Fz214NovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

