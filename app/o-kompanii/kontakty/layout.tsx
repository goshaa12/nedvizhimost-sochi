import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты агентства недвижимости в Сочи | Офисы и реквизиты",
  description: "Контакты агентства недвижимости в Сочи ⭐ Офисы в Сочи и Адлере, телефоны, email, режим работы ⭐ Свяжитесь с нами и закройте вопрос подбора, проверки и оформления недвижимости в Сочи за один разговор!",
  keywords: "контакты недвижимость сочи, адрес агентства недвижимости сочи, телефон недвижимость сочи, офис недвижимость сочи, реквизиты агентства недвижимости сочи",
  openGraph: {
    title: "Контакты агентства недвижимости в Сочи | Офисы и реквизиты",
    description: "Контакты агентства недвижимости в Сочи ⭐ Офисы в Сочи и Адлере, телефоны, email, режим работы ⭐ Свяжитесь с нами и закройте вопрос подбора, проверки и оформления недвижимости в Сочи за один разговор!",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/kontakty",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/kontakty/kontakty-1.webp",
        width: 1200,
        height: 630,
        alt: "Контакты агентства недвижимости в Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты агентства недвижимости в Сочи | Офисы и реквизиты",
    description: "Контакты агентства недвижимости в Сочи ⭐ Офисы в Сочи и Адлере, телефоны, email, режим работы ⭐ Свяжитесь с нами и закройте вопрос подбора, проверки и оформления недвижимости в Сочи за один разговор!",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/kontakty/kontakty-1.webp",
        alt: "Контакты агентства недвижимости в Сочи",
      },
    ],
  },
};

export default function KontaktyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

