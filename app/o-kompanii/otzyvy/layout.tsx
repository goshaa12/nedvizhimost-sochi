import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы клиентов компании | Реальные отзывы о недвижимости в Сочи",
  description: "Отзывы клиентов компании ⭐ Кейсы клиентов: какие риски были при покупке, где можно было переплатить и какие решения сработали на практике ⭐ Хотите понять, подходит ли такой подход вам?",
  keywords: "отзывы недвижимость сочи, отзывы клиентов недвижимость сочи, реальные отзывы недвижимость сочи, отзывы о покупке недвижимости сочи, видео отзывы недвижимость сочи",
  openGraph: {
    title: "Отзывы клиентов компании | Реальные отзывы о недвижимости в Сочи",
    description: "Отзывы клиентов компании ⭐ Кейсы клиентов: какие риски были при покупке, где можно было переплатить и какие решения сработали на практике ⭐ Хотите понять, подходит ли такой подход вам?",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/otzyvy",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/otzyvy/otzyvy-1.webp",
        width: 1200,
        height: 630,
        alt: "Отзывы клиентов компании",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Отзывы клиентов компании | Реальные отзывы о недвижимости в Сочи",
    description: "Отзывы клиентов компании ⭐ Кейсы клиентов: какие риски были при покупке, где можно было переплатить и какие решения сработали на практике ⭐ Хотите понять, подходит ли такой подход вам?",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/otzyvy/otzyvy-1.webp",
        alt: "Отзывы клиентов компании",
      },
    ],
  },
};

export default function OtzyvyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

