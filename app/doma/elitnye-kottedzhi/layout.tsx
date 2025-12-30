import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Элитные коттеджи в Сочи | Купить элитный коттедж в Сочи",
  description: "Элитные коттеджи в Сочи ⭐ Подбор коттеджей под ваш бюджет и пожелания ⭐ Онлайн-просмотры и дистанционная сделка ⭐ Юридическая проверка коттеджа и участка ⭐ Топ-локации с видами и приватностью",
  keywords: "элитные коттеджи сочи, купить элитный коттедж сочи, коттеджи сочи элит, элитные дома сочи, коттеджи премиум сочи",
  openGraph: {
    title: "Элитные коттеджи в Сочи | Купить элитный коттедж в Сочи",
    description: "Элитные коттеджи в Сочи ⭐ Подбор коттеджей под ваш бюджет и пожелания ⭐ Онлайн-просмотры и дистанционная сделка ⭐ Юридическая проверка коттеджа и участка",
    url: "https://nedvizhimost-sochi.ru/doma/elitnye-kottedzhi",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/doma/elitnye-kottedzhi/elitnye-kottedzhi-2.webp",
        width: 1200,
        height: 630,
        alt: "Элитные коттеджи в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Элитные коттеджи в Сочи | Купить элитный коттедж в Сочи",
    description: "Элитные коттеджи в Сочи ⭐ Подбор коттеджей под ваш бюджет и пожелания ⭐ Онлайн-просмотры и дистанционная сделка",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/doma/elitnye-kottedzhi/elitnye-kottedzhi-2.webp",
        alt: "Элитные коттеджи в Сочи",
      },
    ],
  },
};

export default function ElitnyeKottedzhiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

