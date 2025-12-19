import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки от застройщика в Сочи | Выбирайте из 300+ актуальных новостроек",
  description: "Выбирайте из 300+ актуальных новостроек. Получайте поддержку 24/7 на всех этапах. Оформляйте сделку полностью онлайн. Покупайте напрямую без комиссий.",
  keywords: "новостройки от застройщика Сочи, купить квартиру от застройщика, новостройки без комиссий, новостройки Сочи от застройщика",
  openGraph: {
    title: "Новостройки от застройщика в Сочи | Выбирайте из 300+ актуальных новостроек",
    description: "Выбирайте из 300+ актуальных новостроек. Получайте поддержку 24/7 на всех этапах. Оформляйте сделку полностью онлайн. Покупайте напрямую без комиссий.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/ot-zastroyshchika",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/ot-zastroyshchika/ot-zastroyshchika-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки от застройщика в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки от застройщика в Сочи | Выбирайте из 300+ актуальных новостроек",
    description: "Выбирайте из 300+ актуальных новостроек. Получайте поддержку 24/7 на всех этапах. Оформляйте сделку полностью онлайн. Покупайте напрямую без комиссий.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/ot-zastroyshchika/ot-zastroyshchika-1.webp",
        alt: "Новостройки от застройщика в Сочи",
      },
    ],
  },
};

export default function OtZastroyshchikaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

