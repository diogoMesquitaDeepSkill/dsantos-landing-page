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
export const metadata: Metadata = {
  title: "DSantos",
  description: "DSantos",
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
      {/* Apply your fonts & classes to the <body> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* The NextIntlClientProvider makes messages/intl available on the client */}
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
