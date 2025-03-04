import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

// Load your local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// (Optional) Next.js metadata config

export const generateMetadata = ({ params }: { params: { locale: "en" | "pt" | "de" | "ru" | "fr" } }): Metadata => {
  const titles = {
    en: "DSantos – Excellence in Porcelain Stoneware",
    pt: "DSantos – Excelência em Grés Porcelânico",
    de: "DSantos – Exzellenz in Feinsteinzeug",
    ru: "DSantos – Совершенство в керамическом граните",
    fr: "DSantos – Excellence en Grès Cérame",
  };

  const descriptions = {
    en: "We specialize in premium porcelain stoneware and ceramic flooring solutions for the business sector. Discover excellence with DSantos.",
    pt: "Especialistas em grés porcelânico premium e soluções de revestimento cerâmico para o setor empresarial. Descubra a excelência com a DSantos.",
    de: "Wir sind spezialisiert auf hochwertiges Feinsteinzeug und keramische Bodenbeläge für Unternehmen. Entdecken Sie Exzellenz mit DSantos.",
    ru: "Мы специализируемся на высококачественном керамическом граните и напольных покрытиях для бизнеса. Откройте для себя совершенство с DSantos.",
    fr: "Nous sommes spécialisés dans le grès cérame haut de gamme et les solutions de revêtement de sol en céramique pour les entreprises. Découvrez l'excellence avec DSantos.",
  };

  return {
    title: titles[params.locale],
    description: descriptions[params.locale],
    alternates: {
      canonical: `https://dsantos.de/${params.locale}`,  // Always use the locale in the canonical URL
      languages: {
        "en": "https://dsantos.de/en",  // English is explicitly set as default
        "pt": "https://dsantos.de/pt",
        "de": "https://dsantos.de/de",
        "ru": "https://dsantos.de/ru",
        "fr": "https://dsantos.de/fr",
        "x-default": "https://dsantos.de/",  // x-default still points to the root domain
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

// This layout receives the locale param from the folder structure:
// e.g. app/[locale]/layout.tsx -> {params: {locale: 'en', ...}}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure the requested locale is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Retrieve the messages for the current locale
  // If needed, you can pass the `locale` explicitly:
  // const messages = await getMessages(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
