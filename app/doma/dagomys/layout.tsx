import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дома в Дагомысе | Смотрите дома в зелёном районе",
  description: "Смотрите дома в зелёном районе. Заключите сделку онлайн. Проверьте объект, землю и документы. Покупайте для жизни, отдыха и аренды. Получите доступ к актуальным и проверенным предложениям в Дагомысе и заключите сделку за сутки.",
  keywords: "дома в Дагомысе, купить дом в Дагомысе, дома Дагомыс, частные дома Дагомыс, недвижимость Дагомыс, дома для ПМЖ Дагомыс, дома для отдыха Дагомыс",
  openGraph: {
    title: "Дома в Дагомысе | Смотрите дома в зелёном районе",
    description: "Смотрите дома в зелёном районе. Заключите сделку онлайн. Проверьте объект, землю и документы. Покупайте для жизни, отдыха и аренды. Получите доступ к актуальным и проверенным предложениям в Дагомысе и заключите сделку за сутки.",
    url: "https://nedvizhimost-sochi.ru/doma/dagomys",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/doma/dagomys/dagomys-hero.webp",
        width: 1200,
        height: 630,
        alt: "Дома в Дагомысе",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Дома в Дагомысе | Смотрите дома в зелёном районе",
    description: "Смотрите дома в зелёном районе. Заключите сделку онлайн. Проверьте объект, землю и документы. Покупайте для жизни, отдыха и аренды. Получите доступ к актуальным и проверенным предложениям в Дагомысе и заключите сделку за сутки.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/doma/dagomys/dagomys-hero.webp",
        alt: "Дома в Дагомысе",
      },
    ],
  },
};

export default function DagomysDomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

