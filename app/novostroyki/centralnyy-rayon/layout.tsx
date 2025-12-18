import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в Центральном районе в Сочи | Выбирайте среди 300+ новостроек",
  description: "Выбирайте среди 300+ новостроек. Получайте поддержку 24/7. Оформляйте сделку дистанционно. Платите напрямую застройщику. Найдите новостройку, которая подходит по бюджету, локации и срокам сдачи — показываем только актуальные варианты.",
  keywords: "новостройки Центральный район Сочи, новостройки в центре Сочи, купить квартиру в новостройке Центральный район, новостройки центр Сочи, квартиры в новостройках Центральный район, жилые комплексы Центральный район Сочи",
  openGraph: {
    title: "Новостройки в Центральном районе в Сочи | Выбирайте среди 300+ новостроек",
    description: "Выбирайте среди 300+ новостроек. Получайте поддержку 24/7. Оформляйте сделку дистанционно. Платите напрямую застройщику.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/tsentralny-rayon",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/tsentralny-rayon/tsentralny-rayon-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в Центральном районе в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в Центральном районе в Сочи | Выбирайте среди 300+ новостроек",
    description: "Выбирайте среди 300+ новостроек. Получайте поддержку 24/7. Оформляйте сделку дистанционно. Платите напрямую застройщику.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/tsentralny-rayon/tsentralny-rayon-1.webp",
        alt: "Новостройки в Центральном районе в Сочи",
      },
    ],
  },
};

export default function TsentralnyRayonNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

