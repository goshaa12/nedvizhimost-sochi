import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Купить ресторан в Сочи — готовый бизнес с доходом | Недвижка в Сочи",
  description: "Купить ресторан в Сочи ⭐ 500+ помещений под рестораны, кафе и бары с проверенными документами ⭐ Узнайте актуальные предложения прямо сейчас!",
  keywords: "купить ресторан в сочи, купить кафе в сочи, купить бар в сочи, рестораны сочи цена, готовый ресторан сочи",
  openGraph: {
    title: "Купить ресторан в Сочи — готовый бизнес с доходом | Недвижка в Сочи",
    description: "Купить ресторан в Сочи ⭐ 500+ помещений под рестораны, кафе и бары с проверенными документами ⭐ Узнайте актуальные предложения прямо сейчас!",
    type: "website",
    images: [
      {
        url: "/images/kommerciya/restorany/restorany-1.webp",
        alt: "Купить ресторан в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить ресторан в Сочи — готовый бизнес с доходом | Недвижка в Сочи",
    description: "Купить ресторан в Сочи ⭐ 500+ помещений под рестораны, кафе и бары с проверенными документами ⭐ Узнайте актуальные предложения прямо сейчас!",
    images: ["/images/kommerciya/restorany/restorany-1.webp"],
  },
};

export default function RestoranyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

