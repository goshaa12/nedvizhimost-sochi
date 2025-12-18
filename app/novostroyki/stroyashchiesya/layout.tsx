import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Строящиеся новостройки в Сочи | Более 300 новостроек на выбор",
  description: "Более 300 новостроек на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — сделка с застройщиком. Квартиры в строящихся новостройках разбирают до сдачи. Получите подборку подходящих вариантов сейчас — зафиксируйте цену заранее и успейте забрать лучшие этажи.",
  keywords: "строящиеся новостройки Сочи, новостройки в стадии строительства, купить квартиру в строящейся новостройке, новостройки на этапе строительства Сочи, квартиры в строящихся домах, жилые комплексы строящиеся Сочи",
  openGraph: {
    title: "Строящиеся новостройки в Сочи | Более 300 новостроек на выбор",
    description: "Более 300 новостроек на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — сделка с застройщиком.",
    url: "https://nedvizhimost-sochi.ru/novostroyki/stroyashchiesya",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/stroyashchiesya/stroyashchiesya-1.webp",
        width: 1200,
        height: 630,
        alt: "Строящиеся новостройки в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Строящиеся новостройки в Сочи | Более 300 новостроек на выбор",
    description: "Более 300 новостроек на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — сделка с застройщиком.",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/novostroyki/stroyashchiesya/stroyashchiesya-1.webp",
        alt: "Строящиеся новостройки в Сочи",
      },
    ],
  },
};

export default function StroyashchiesyaNovostroykiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

