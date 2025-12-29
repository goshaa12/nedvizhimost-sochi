import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Партнёры агентства недвижимости в Сочи — доход до 1 млн",
  description: "Партнёрство с агентством недвижимости Сочи⭐Быстрое подключение, полное сопровождение клиентов и прозрачные выплаты⭐Присоединяйтесь и зарабатывайте без рисков",
  keywords: "партнеры недвижимость сочи, партнерство агентство недвижимость, сотрудничество недвижимость, партнерская программа недвижимость",
  openGraph: {
    title: "1️⃣ Партнёры агентства недвижимости в Сочи — доход до 1 млн",
    description: "Партнёрство с агентством недвижимости Сочи⭐Быстрое подключение, полное сопровождение клиентов и прозрачные выплаты⭐Присоединяйтесь и зарабатывайте без рисков",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/partnery",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/partnery/partnery-1.webp",
        width: 1200,
        height: 630,
        alt: "Партнёры агентства недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Партнёры агентства недвижимости в Сочи — доход до 1 млн",
    description: "Партнёрство с агентством недвижимости Сочи⭐Быстрое подключение, полное сопровождение клиентов и прозрачные выплаты⭐Присоединяйтесь и зарабатывайте без рисков",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/partnery/partnery-1.webp",
        alt: "Партнёры агентства недвижимости в Сочи",
      },
    ],
  },
};

export default function PartneryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

