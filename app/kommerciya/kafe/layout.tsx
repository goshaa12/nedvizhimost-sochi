import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Купить кафе в Сочи — готовый бизнес с доходом | Недвижка в Сочи",
  description: "Купить кафе в Сочи ⭐ Более 1000 вариантов на выбор ⭐ Поддержка менеджера 24/7 ⭐ Оформление онлайн за пару кликов ⭐ Платежи собственнику — 0% переплат",
  keywords: "купить кафе в сочи, купить помещение под кафе в сочи, кафе сочи цена, готовое кафе сочи",
  openGraph: {
    title: "Купить кафе в Сочи — готовый бизнес с доходом | Недвижка в Сочи",
    description: "Купить кафе в Сочи ⭐ Более 1000 вариантов на выбор ⭐ Поддержка менеджера 24/7 ⭐ Оформление онлайн за пару кликов ⭐ Платежи собственнику — 0% переплат",
    type: "website",
    images: [
      {
        url: "/images/kommerciya/restorany/restorany-1.webp",
        alt: "Купить кафе в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить кафе в Сочи — готовый бизнес с доходом | Недвижка в Сочи",
    description: "Купить кафе в Сочи ⭐ Более 1000 вариантов на выбор ⭐ Поддержка менеджера 24/7 ⭐ Оформление онлайн за пару кликов ⭐ Платежи собственнику — 0% переплат",
    images: ["/images/kommerciya/restorany/restorany-1.webp"],
  },
};

export default function KafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

