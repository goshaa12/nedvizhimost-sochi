import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Участки в Адлере | Выбирайте из 500+ доступных вариантов",
  description: "Участки в Адлере. Выбирайте из 500+ доступных вариантов. Приобретайте землю онлайн без визита. Покупайте у собственника без переплат.",
  keywords: "участки в Адлере, купить участок в Адлере, земельные участки Адлер, участки ИЖС Адлер",
  openGraph: {
    title: "Участки в Адлере | Выбирайте из 500+ доступных вариантов",
    description: "Участки в Адлере. Выбирайте из 500+ доступных вариантов. Приобретайте землю онлайн без визита. Покупайте у собственника без переплат.",
    type: "website",
    images: [
      {
        url: "/images/uchastki/adler/adler-1.webp",
        alt: "Участки в Адлере",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Участки в Адлере | Выбирайте из 500+ доступных вариантов",
    description: "Участки в Адлере. Выбирайте из 500+ доступных вариантов. Приобретайте землю онлайн без визита. Покупайте у собственника без переплат.",
    images: ["/images/uchastki/adler/adler-1.webp"],
  },
};

export default function AdlerUchastkiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

