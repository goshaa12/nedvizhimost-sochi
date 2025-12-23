import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Участки у моря в Сочи | Более 500 участков на выбор",
  description: "Участки у моря в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
  keywords: "участки у моря Сочи, купить участок у моря, земельные участки у моря Сочи, участки на берегу моря",
  openGraph: {
    title: "Участки у моря в Сочи | Более 500 участков на выбор",
    description: "Участки у моря в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
    type: "website",
    images: [
      {
        url: "/images/uchastki/u-morya/u-morya-1.webp",
        alt: "Участки у моря в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Участки у моря в Сочи | Более 500 участков на выбор",
    description: "Участки у моря в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
    images: ["/images/uchastki/u-morya/u-morya-1.webp"],
  },
};

export default function UMoryaUchastkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

