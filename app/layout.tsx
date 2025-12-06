import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Недвижимость в Сочи",
  description: "Проверенная недвижимость в Сочи: квартиры, дома, новостройки. Более 50 000 объектов, юридическая проверка, экономия до 15%",
  openGraph: {
    images: [
      {
        url: "/images/hero-main.webp",
        alt: "Недвижимость в Сочи",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD структурированные данные для организации
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Недвижимость Сочи",
    "url": "https://sochi-tur24.ru",
    "description": "Проверенная недвижимость в Сочи: квартиры, дома, новостройки. Более 50 000 объектов, юридическая проверка, экономия до 15%",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Сочи",
      "addressCountry": "RU"
    },
    "telephone": "+7 (900) 123-45-67",
    "priceRange": "₽₽₽",
    "areaServed": {
      "@type": "City",
      "name": "Сочи"
    }
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c')
          }}
        />
        {/* og:image fallback for crawlers */}
        <meta property="og:image" content="/images/hero-main.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
