import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Купить складское помещение в Сочи — готовый бизнес | Недвижка в Сочи",
  description: "Купить складское помещение в Сочи ⭐ Более 500 вариантов на выбор ⭐ Поддержка менеджера 24/7 ⭐ Оформление онлайн за пару кликов ⭐ Платежи собственнику — 0% переплат",
  keywords: "купить склад в сочи, купить складское помещение в сочи, склады сочи цена, готовый склад сочи",
  openGraph: {
    title: "Купить складское помещение в Сочи — готовый бизнес | Недвижка в Сочи",
    description: "Купить складское помещение в Сочи ⭐ Более 500 вариантов на выбор ⭐ Поддержка менеджера 24/7 ⭐ Оформление онлайн за пару кликов ⭐ Платежи собственнику — 0% переплат",
    type: "website",
    images: [
      {
        url: "/images/kommerciya/restorany/restorany-1.webp",
        alt: "Купить складское помещение в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить складское помещение в Сочи — готовый бизнес | Недвижка в Сочи",
    description: "Купить складское помещение в Сочи ⭐ Более 500 вариантов на выбор ⭐ Поддержка менеджера 24/7 ⭐ Оформление онлайн за пару кликов ⭐ Платежи собственнику — 0% переплат",
    images: ["/images/kommerciya/restorany/restorany-1.webp"],
  },
};

export default function SkladskiePomeshcheniyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

