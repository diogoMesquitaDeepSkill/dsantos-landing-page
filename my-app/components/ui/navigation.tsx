/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { LanguageSelector } from "./languageSelector";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const params = useParams();
  const locale = params.locale as string; // Get the locale from the URL

  const navItems = [
    { name: t("home"), href: `/${locale}` },
    { name: t("ourProduct"), href: "#our-product" },
    { name: t("specifications"), href: "#specifications" },
    { name: t("sizes"), href: "#sizes" },
    { name: t("resources"), href: "#file-section" },
    { name: t("aboutUs"), href: "#about-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="text-2xl font-bold">
              <img
                src="/logo-onlydsantos250.png"
                alt="Logo"
                className="h-7 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Language Selector & Burger Menu - Now Closer Together */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button
              onClick={() => {
                const contactForm = document.getElementById("contact-form");
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {t("contact")}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="mt-4">
              <Button
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  const contactForm = document.getElementById("contact-form");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("contact")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
