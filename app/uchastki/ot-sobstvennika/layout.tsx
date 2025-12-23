import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Участки от собственника в Сочи | Более 500 участков на выбор",
  description: "Участки от собственника в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
  keywords: "участки от собственника Сочи, купить участок от собственника, земельные участки от собственника Сочи, участки без посредников",
  openGraph: {
    title: "Участки от собственника в Сочи | Более 500 участков на выбор",
    description: "Участки от собственника в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
    type: "website",
    images: [
      {
        url: "/images/uchastki/ot-sobstvennika/ot-sobstvennika-1.webp",
        alt: "Участки от собственника в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Участки от собственника в Сочи | Более 500 участков на выбор",
    description: "Участки от собственника в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — напрямую от собственника.",
    images: ["/images/uchastki/ot-sobstvennika/ot-sobstvennika-1.webp"],
  },
};

export default function OtSobstvennikaUchastkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

