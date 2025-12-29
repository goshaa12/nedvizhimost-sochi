import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Недвижимость в Сочи —команда экспертов",
  description: "Недвижимость в Сочи ⭐ Более 30 специалистов с опытом помогают подобрать и оформить объекты ⭐ Обратитесь к нам и начните поиск уже сегодня!",
  keywords: "команда недвижимость сочи, эксперты по недвижимости сочи, специалисты по недвижимости, агентство недвижимости команда",
  openGraph: {
    title: "1️⃣ Недвижимость в Сочи —команда экспертов",
    description: "Недвижимость в Сочи ⭐ Более 30 специалистов с опытом помогают подобрать и оформить объекты ⭐ Обратитесь к нам и начните поиск уже сегодня!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/komanda",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/komanda/komanda-1.webp",
        width: 1200,
        height: 630,
        alt: "Наша команда — Эксперты по недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Недвижимость в Сочи —команда экспертов",
    description: "Недвижимость в Сочи ⭐ Более 30 специалистов с опытом помогают подобрать и оформить объекты ⭐ Обратитесь к нам и начните поиск уже сегодня!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/komanda/komanda-1.webp",
        alt: "Наша команда — Эксперты по недвижимости в Сочи",
      },
    ],
  },
};

export default function KomandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

