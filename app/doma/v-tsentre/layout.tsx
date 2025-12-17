import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дома в центре Сочи | Выбирайте среди проверенных домов",
  description: "Выбирайте среди проверенных домов. Получайте помощь менеджера 24/7. Оформляйте покупку дистанционно. Избегайте переплат и комиссий. Займите подходящий вариант раньше других!",
  keywords: "дома в центре Сочи, купить дом в центре Сочи, частные дома центр Сочи, недвижимость центр Сочи, дома для ПМЖ центр Сочи, дома для отдыха центр Сочи",
  openGraph: {
    title: "Дома в центре Сочи | Выбирайте среди проверенных домов",
    description: "Выбирайте среди проверенных домов. Получайте помощь менеджера 24/7. Оформляйте покупку дистанционно. Избегайте переплат и комиссий. Займите подходящий вариант раньше других!",
    url: "https://nedvizhimost-sochi.ru/doma/v-tsentre",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/doma/v-tsentre/v-tsentre-1.webp",
        width: 1200,
        height: 630,
        alt: "Дома в центре Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Дома в центре Сочи | Выбирайте среди проверенных домов",
    description: "Выбирайте среди проверенных домов. Получайте помощь менеджера 24/7. Оформляйте покупку дистанционно. Избегайте переплат и комиссий. Займите подходящий вариант раньше других!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/doma/v-tsentre/v-tsentre-1.webp",
        alt: "Дома в центре Сочи",
      },
    ],
  },
};

export default function VTsentreDomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

