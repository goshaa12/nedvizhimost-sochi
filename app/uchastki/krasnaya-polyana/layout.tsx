import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Участки в районе Красной Поляны в Сочи | Более 500 вариантов на выбор",
  description: "Купить участок в Красной Поляне. Более 500 вариантов на выбор. Поддержка менеджера 24/7. Оформление онлайн за пару кликов. Платежи собственнику — 0% переплат",
  keywords: "участки в Красной Поляне Сочи, купить участок Красная Поляна, земельные участки Красная Поляна, участки под строительство Красная Поляна",
  openGraph: {
    title: "Участки в районе Красной Поляны в Сочи | Более 500 вариантов на выбор",
    description: "Купить участок в Красной Поляне. Более 500 вариантов на выбор. Поддержка менеджера 24/7. Оформление онлайн за пару кликов. Платежи собственнику — 0% переплат",
    type: "website",
    images: [
      {
        url: "/images/uchastki/krasnaya-polyana/krasnaya-polyana-1.webp",
        alt: "Участки в районе Красной Поляны в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Участки в районе Красной Поляны в Сочи | Более 500 вариантов на выбор",
    description: "Купить участок в Красной Поляне. Более 500 вариантов на выбор. Поддержка менеджера 24/7. Оформление онлайн за пару кликов. Платежи собственнику — 0% переплат",
    images: ["/images/uchastki/krasnaya-polyana/krasnaya-polyana-1.webp"],
  },
};

export default function KrasnayaPolyanaUchastkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

