import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Собственникам — продажа недвижимости в Сочи",
  description: "Собственникам ⭐ Продажа недвижимости в Сочи без посредников, с подбором покупателей и безопасным сопровождением сделки⭐ Узнайте, как продать недвижимость выгодно",
  keywords: "продажа недвижимости сочи собственникам, продать квартиру сочи, продать дом сочи, продажа недвижимости без посредников, услуги для собственников недвижимости",
  openGraph: {
    title: "1️⃣ Собственникам — продажа недвижимости в Сочи",
    description: "Собственникам ⭐ Продажа недвижимости в Сочи без посредников, с подбором покупателей и безопасным сопровождением сделки⭐ Узнайте, как продать недвижимость выгодно",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/sobstvennikam",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/sobstvennikam/sobstvennikam-1.webp",
        width: 1200,
        height: 630,
        alt: "Продажа недвижимости в Сочи для собственников",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Собственникам — продажа недвижимости в Сочи",
    description: "Собственникам ⭐ Продажа недвижимости в Сочи без посредников, с подбором покупателей и безопасным сопровождением сделки⭐ Узнайте, как продать недвижимость выгодно",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/sobstvennikam/sobstvennikam-1.webp",
        alt: "Продажа недвижимости в Сочи для собственников",
      },
    ],
  },
};

export default function SobstvennikamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

