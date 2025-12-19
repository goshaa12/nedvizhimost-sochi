import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Участки в Сочи | Более 500 участков на выбор",
  description: "Купить участок в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — оплата собственнику",
  keywords: "участки Сочи, купить участок Сочи, земельные участки Сочи, участки ИЖС Сочи, участки у моря Сочи",
  openGraph: {
    title: "Участки в Сочи | Более 500 участков на выбор",
    description: "Купить участок в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — оплата собственнику",
    type: "website",
    images: [
      {
        url: "/images/kvartiry/mamayka/mamayka-1.webp",
        alt: "Участки в Сочи",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Участки в Сочи | Более 500 участков на выбор",
    description: "Купить участок в Сочи. Более 500 участков на выбор. Поддержка 24/7 на каждом этапе. Удалённые сделки — оформление онлайн. 0% переплат — оплата собственнику",
    images: ["/images/kvartiry/mamayka/mamayka-1.webp"],
  },
};

export default function UchastkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

