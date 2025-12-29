import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1️⃣ Недвижимость в Сочи — сертификаты и лицензии",
  description: "Недвижимость в Сочи ⭐ Действующие сертификаты и лицензии, прозрачные условия и надёжный подход ⭐ Ознакомьтесь с документами и убедитесь в нашей надёжности",
  keywords: "сертификаты недвижимость сочи, лицензии недвижимость, документы агентство недвижимость, подтверждённая экспертиза недвижимость",
  openGraph: {
    title: "1️⃣ Недвижимость в Сочи — сертификаты и лицензии",
    description: "Недвижимость в Сочи ⭐ Действующие сертификаты и лицензии, прозрачные условия и надёжный подход ⭐ Ознакомьтесь с документами и убедитесь в нашей надёжности",
    url: "https://nedvizhimost-sochi.ru/o-kompanii/sertifikaty",
    siteName: "Недвижимость Сочи",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/sertifikaty/sertifikaty-1.webp",
        width: 1200,
        height: 630,
        alt: "Сертификаты и подтверждённая экспертиза в недвижимости Сочи",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1️⃣ Недвижимость в Сочи — сертификаты и лицензии",
    description: "Недвижимость в Сочи ⭐ Действующие сертификаты и лицензии, прозрачные условия и надёжный подход ⭐ Ознакомьтесь с документами и убедитесь в нашей надёжности",
    images: [
      {
        url: "https://nedvizhimost-sochi.ru/images/o-kompanii/sertifikaty/sertifikaty-1.webp",
        alt: "Сертификаты и подтверждённая экспертиза в недвижимости Сочи",
      },
    ],
  },
};

export default function SertifikatyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

