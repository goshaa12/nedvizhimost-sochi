import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Подбор недвижимости в Сочи — помощь от экспертов",
  description: "Подбор недвижимости в Сочи ⭐ Профессионалы с опытом помогут найти идеальный объект, учитывая ваши цели и бюджет⭐ Получите персональную консультацию!",
  keywords: "подбор недвижимости сочи, консультация покупка недвижимости, выбрать недвижимость, консультация по недвижимости, сайты подбора недвижимости, услуга подбора недвижимости, агентства по подбору недвижимости",
  openGraph: {
    title: "1️⃣ Подбор недвижимости в Сочи — помощь от экспертов",
    description: "Подбор недвижимости в Сочи ⭐ Профессионалы с опытом помогут найти идеальный объект, учитывая ваши цели и бюджет⭐ Получите персональную консультацию!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/podbor-nedvizhimosti",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/podbor-nedvizhimosti/podbor-nedvizhimosti-1.webp",
        width: 1200,
        height: 630,
        alt: "Подбор недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Подбор недвижимости в Сочи — помощь от экспертов",
    description: "Подбор недвижимости в Сочи ⭐ Профессионалы с опытом помогут найти идеальный объект, учитывая ваши цели и бюджет⭐ Получите персональную консультацию!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/podbor-nedvizhimosti/podbor-nedvizhimosti-1.webp",
        alt: "Подбор недвижимости в Сочи",
      },
    ],
  },
};

export default function PodborNedvizhimostiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

