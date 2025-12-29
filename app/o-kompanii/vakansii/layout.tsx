import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Недвижимость в Сочи — актуальные вакансии",
  description: "Недвижимость в Сочи ⭐ Актуальные вакансии с возможностью роста, обучения, гибким графиком и корпоративными бонусами ⭐ Станьте частью нашей компании!",
  keywords: "вакансии недвижимость сочи, работа в недвижимости сочи, вакансии агентство недвижимости, работа риелтором сочи",
  openGraph: {
    title: "1️⃣ Недвижимость в Сочи — актуальные вакансии",
    description: "Недвижимость в Сочи ⭐ Актуальные вакансии с возможностью роста, обучения, гибким графиком и корпоративными бонусами ⭐ Станьте частью нашей компании!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/vakansii",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/vakansii/vakansii-1.webp",
        width: 1200,
        height: 630,
        alt: "Вакансии в компании по недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Недвижимость в Сочи — актуальные вакансии",
    description: "Недвижимость в Сочи ⭐ Актуальные вакансии с возможностью роста, обучения, гибким графиком и корпоративными бонусами ⭐ Станьте частью нашей компании!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/vakansii/vakansii-1.webp",
        alt: "Вакансии в компании по недвижимости в Сочи",
      },
    ],
  },
};

export default function VakansiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

