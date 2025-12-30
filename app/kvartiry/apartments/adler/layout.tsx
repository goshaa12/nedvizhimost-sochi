import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Апартаменты в Адлере | Купить апартаменты в Адлере с загрузкой от 70%",
  description: "Апартаменты в Адлере ⭐ Выберите апартаменты под свой бюджет ⭐ Смотрите апартаменты дистанционно ⭐ Исключите риски перед покупкой ⭐ Найдите локацию с высокой отдачей",
  keywords: "апартаменты адлер, апартаменты в адлере, купить апартаменты адлер, апартаменты сочи адлер, апартаменты имеретинка, апартаменты олимпийский парк",
  openGraph: {
    title: "Апартаменты в Адлере | Купить апартаменты в Адлере с загрузкой от 70%",
    description: "Апартаменты в Адлере ⭐ Выберите апартаменты под свой бюджет ⭐ Смотрите апартаменты дистанционно ⭐ Исключите риски перед покупкой",
    url: "https://nedvizhimost-sochi.ru/kvartiry/apartments/adler",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/apartments/adler/adler-1.webp",
        width: 1200,
        height: 630,
        alt: "Апартаменты в Адлере",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Апартаменты в Адлере | Купить апартаменты в Адлере с загрузкой от 70%",
    description: "Апартаменты в Адлере ⭐ Выберите апартаменты под свой бюджет ⭐ Смотрите апартаменты дистанционно",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/kvartiry/apartments/adler/adler-1.webp",
        alt: "Апартаменты в Адлере",
      },
    ],
  },
};

export default function ApartmentsAdlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

