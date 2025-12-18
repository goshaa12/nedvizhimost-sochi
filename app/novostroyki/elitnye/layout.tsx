import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣Элитные новостройки в Сочи — квартиры у моря за 1 день",
  description: "Элитные квартиры и пентхаусы в Сочи ⭐ Панорамные виды, проверка документов и района, помощь с ипотекой и рассрочкой ⭐ Получите подборку за 24 часа.",
  keywords: "элитные новостройки в сочи, квартиры в элитных новостройках, дорогие новостройки, новостройка премиум класса, элитные новостройки, элитное жилье новостройки, купить элитную квартиру в новостройке, новостройки элитная недвижимость, элитные дома новостройки",
  openGraph: {
    title: "1️⃣Элитные новостройки в Сочи — квартиры у моря за 1 день",
    description: "Элитные квартиры и пентхаусы в Сочи ⭐ Панорамные виды, проверка документов и района, помощь с ипотекой и рассрочкой ⭐ Получите подборку за 24 часа.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/elitnye",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/elitnye/elitnye-1.webp",
        width: 1200,
        height: 630,
        alt: "Элитные новостройки в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣Элитные новостройки в Сочи — квартиры у моря за 1 день",
    description: "Элитные квартиры и пентхаусы в Сочи ⭐ Панорамные виды, проверка документов и района, помощь с ипотекой и рассрочкой ⭐ Получите подборку за 24 часа.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/elitnye/elitnye-1.webp",
        alt: "Элитные новостройки в Сочи",
      },
    ],
  },
};

export default function ElitnyeNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

