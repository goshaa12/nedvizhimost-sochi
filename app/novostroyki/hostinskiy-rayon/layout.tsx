import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в Хостинском районе в Сочи | Выбирайте среди 300+ новостроек",
  description: "Выбирайте среди 300+ новостроек. Получайте поддержку 24/7 на каждом этапе. Оформляйте сделку дистанционно. Платите напрямую застройщику. Сравните доступные новостройки в Хостинском районе и выберите те, что подходят по бюджету, срокам сдачи и локации.",
  keywords: "новостройки Хостинский район Сочи, новостройки в Хосте, купить квартиру в новостройке Хостинский район, новостройки Хоста, квартиры в новостройках Хостинский район, жилые комплексы Хостинский район Сочи",
  openGraph: {
    title: "Новостройки в Хостинском районе в Сочи | Выбирайте среди 300+ новостроек",
    description: "Выбирайте среди 300+ новостроек. Получайте поддержку 24/7 на каждом этапе. Оформляйте сделку дистанционно. Платите напрямую застройщику.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/hostinskiy-rayon",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/hostinskiy-rayon/hostinskiy-rayon-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в Хостинском районе в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в Хостинском районе в Сочи | Выбирайте среди 300+ новостроек",
    description: "Выбирайте среди 300+ новостроек. Получайте поддержку 24/7 на каждом этапе. Оформляйте сделку дистанционно. Платите напрямую застройщику.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/hostinskiy-rayon/hostinskiy-rayon-1.webp",
        alt: "Новостройки в Хостинском районе в Сочи",
      },
    ],
  },
};

export default function HostinskiyRayonNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

