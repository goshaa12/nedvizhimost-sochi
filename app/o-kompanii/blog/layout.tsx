import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог о недвижимости в Сочи | Аналитика рынка и советы экспертов",
  description: "Блог о недвижимости в Сочи ⭐ Аналитика рынка недвижимости, обзоры районов Сочи, советы покупателям и инвесторам ⭐ Узнайте, как сохранить и приумножить деньги!",
  keywords: "блог недвижимость сочи, статьи недвижимость сочи, аналитика недвижимость сочи, новости недвижимость сочи, советы по недвижимости сочи, обзоры районов сочи",
  openGraph: {
    title: "Блог о недвижимости в Сочи | Аналитика рынка и советы экспертов",
    description: "Блог о недвижимости в Сочи ⭐ Аналитика рынка недвижимости, обзоры районов Сочи, советы покупателям и инвесторам ⭐ Узнайте, как сохранить и приумножить деньги!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/blog",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/blog/blog-1.webp",
        width: 1200,
        height: 630,
        alt: "Блог о недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог о недвижимости в Сочи | Аналитика рынка и советы экспертов",
    description: "Блог о недвижимости в Сочи ⭐ Аналитика рынка недвижимости, обзоры районов Сочи, советы покупателям и инвесторам ⭐ Узнайте, как сохранить и приумножить деньги!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/blog/blog-1.webp",
        alt: "Блог о недвижимости в Сочи",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

