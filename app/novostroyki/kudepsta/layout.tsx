import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новостройки в районе Кудепста в Сочи | Подберите из 300+ актуальных новостроек",
  description: "Подберите новостройку в Кудепсте из 300+ актуальных новостроек. Решайте вопросы с личным менеджером 24/7. Оформляйте покупку полностью онлайн, даже находясь в другом городе. Платите напрямую застройщику — без комиссий и скрытых переплат.",
  keywords: "новостройки Кудепста Сочи, новостройки в Кудепсте, купить квартиру в новостройке Кудепста, новостройки Кудепста, квартиры в новостройках Кудепста, жилые комплексы Кудепста Сочи",
  openGraph: {
    title: "Новостройки в районе Кудепста в Сочи | Подберите из 300+ актуальных новостроек",
    description: "Подберите новостройку в Кудепсте из 300+ актуальных новостроек. Решайте вопросы с личным менеджером 24/7. Оформляйте покупку полностью онлайн.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/kudepsta",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/kudepsta/kudepsta-1.webp",
        width: 1200,
        height: 630,
        alt: "Новостройки в районе Кудепста в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Новостройки в районе Кудепста в Сочи | Подберите из 300+ актуальных новостроек",
    description: "Подберите новостройку в Кудепсте из 300+ актуальных новостроек. Решайте вопросы с личным менеджером 24/7. Оформляйте покупку полностью онлайн.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/kudepsta/kudepsta-1.webp",
        alt: "Новостройки в районе Кудепста в Сочи",
      },
    ],
  },
};

export default function KudepstaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

