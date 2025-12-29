import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Оплата недвижимости в Сочи — удобные способы",
  description: "Оплата недвижимости в Сочи ⭐ Безопасные и удобные способы: наличные, перевод или карта, с прозрачными условиями ⭐ Оплачивайте быстро и без риска!",
  keywords: "оплата недвижимости сочи, способы оплаты недвижимость, оплата квартиры сочи, безопасная оплата недвижимость, оплата сделки недвижимость",
  openGraph: {
    title: "1️⃣ Оплата недвижимости в Сочи — удобные способы",
    description: "Оплата недвижимости в Сочи ⭐ Безопасные и удобные способы: наличные, перевод или карта, с прозрачными условиями ⭐ Оплачивайте быстро и без риска!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/oplata",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/oplata/oplata-1.webp",
        width: 1200,
        height: 630,
        alt: "Выбирайте удобный способ оплаты недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Оплата недвижимости в Сочи — удобные способы",
    description: "Оплата недвижимости в Сочи ⭐ Безопасные и удобные способы: наличные, перевод или карта, с прозрачными условиями ⭐ Оплачивайте быстро и без риска!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/oplata/oplata-1.webp",
        alt: "Выбирайте удобный способ оплаты недвижимости в Сочи",
      },
    ],
  },
};

export default function OplataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

