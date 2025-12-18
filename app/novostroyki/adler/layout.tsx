import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Адлера в Сочи | Более 300 новостроек на выбор",
  description: "Более 300 новостроек на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — платите напрямую застройщику.",
  keywords: "новостройки Адлер Сочи, новостройки в Адлере, купить квартиру в новостройке Адлер, новостройки Адлер, квартиры в новостройках Адлер, жилые комплексы Адлер Сочи",
  openGraph: {
    title: "Новостройки в районе Адлера в Сочи | Более 300 новостроек на выбор",
    description: "Более 300 новостроек на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — платите напрямую застройщику.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/adler",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/adler/adler-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Адлера в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Адлера в Сочи | Более 300 новостроек на выбор",
    description: "Более 300 новостроек на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — платите напрямую застройщику.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/adler/adler-1.webp",
        alt: "Новостройки в районе Адлера в Сочи",
      },
    ],
  },
};

export default function AdlerNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

