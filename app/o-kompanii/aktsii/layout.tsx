import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Акции на недвижимость в Сочи | Специальные предложения и скидки",
  description: "Акции на недвижимость в Сочи ⭐ Специальные предложения и скидки до 10%, первый взнос от 2 млн ₽, аренда квартиры у моря от 22 000 ₽ ⭐ Получите до 65 000 ₽ компенсации расходов по сделке!",
  keywords: "акции на недвижимость сочи, акции недвижимость сочи, скидки на недвижимость сочи, специальные предложения недвижимость сочи, акции квартиры сочи, скидки квартиры сочи",
  openGraph: {
    title: "Акции на недвижимость в Сочи | Специальные предложения и скидки",
    description: "Акции на недвижимость в Сочи ⭐ Специальные предложения и скидки до 10%, первый взнос от 2 млн ₽, аренда квартиры у моря от 22 000 ₽ ⭐ Получите до 65 000 ₽ компенсации расходов по сделке!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/aktsii",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/aktsii/aktsii-1.webp",
        width: 1200,
        height: 630,
        alt: "Акции на недвижимость в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Акции на недвижимость в Сочи | Специальные предложения и скидки",
    description: "Акции на недвижимость в Сочи ⭐ Специальные предложения и скидки до 10%, первый взнос от 2 млн ₽, аренда квартиры у моря от 22 000 ₽ ⭐ Получите до 65 000 ₽ компенсации расходов по сделке!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/aktsii/aktsii-1.webp",
        alt: "Акции на недвижимость в Сочи",
      },
    ],
  },
};

export default function AktsiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

