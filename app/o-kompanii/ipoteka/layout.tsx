import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Ипотека на недвижимость в Сочи — одобрение за 1 день",
  description: "Ипотека на недвижимость в Сочи ⭐ Более 10 банков-партнёров, 95% одобрений за 1 день, выгодные ставки и прозрачные условия ⭐ Оформите ипотеку сегодня!",
  keywords: "ипотека сочи, ипотека от застройщика сочи, семейная ипотека в сочи, калькулятор ипотеки, взять ипотеку, ипотека 2026, рассчитать ипотеку, ипотека онлайн, оформить ипотеку, расчет ипотеки, покупка в ипотеку, ипотека от застройщика, получение ипотеки",
  openGraph: {
    title: "1️⃣ Ипотека на недвижимость в Сочи — одобрение за 1 день",
    description: "Ипотека на недвижимость в Сочи ⭐ Более 10 банков-партнёров, 95% одобрений за 1 день, выгодные ставки и прозрачные условия ⭐ Оформите ипотеку сегодня!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/ipoteka",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/ipoteka/ipoteka-1.webp",
        width: 1200,
        height: 630,
        alt: "Ипотека на недвижимость в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Ипотека на недвижимость в Сочи — одобрение за 1 день",
    description: "Ипотека на недвижимость в Сочи ⭐ Более 10 банков-партнёров, 95% одобрений за 1 день, выгодные ставки и прозрачные условия ⭐ Оформите ипотеку сегодня!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/ipoteka/ipoteka-1.webp",
        alt: "Ипотека на недвижимость в Сочи",
      },
    ],
  },
};

export default function IpotekaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

