import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Участки в центре Сочи | Более 500 участков на выбор",
  description: "Участки в центре Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
  keywords: "участки в центре Сочи, купить участок в центре, земельные участки центр Сочи, участки ИЖС в центре",
  openGraph: {
    title: "Участки в центре Сочи | Более 500 участков на выбор",
    description: "Участки в центре Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
    type: "website",
    images: [
      {
        url: "/images/uchastki/v-tsentre/v-tsentre-1.webp",
        alt: "Участки в центре Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Участки в центре Сочи | Более 500 участков на выбор",
    description: "Участки в центре Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
    images: ["/images/uchastki/v-tsentre/v-tsentre-1.webp"],
  },
};

export default function VTsentreUchastkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

