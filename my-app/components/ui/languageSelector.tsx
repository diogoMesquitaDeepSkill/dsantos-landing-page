"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { code: "en", name: "English", short: "EN" },
  { code: "de", name: "Deutsch", short: "DE" },
  { code: "pt", name: "Português", short: "PT" },
  { code: "fr", name: "Français", short: "FR" },
  { code: "ru", name: "Русский", short: "RU" },
];

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Extract the current locale from the pathname
  const currentLocale = pathname.split("/")[1];

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  useEffect(() => {
    // Detect screen size for mobile vs. desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display full name on desktop, short code on mobile
  const currentLanguage = isMobile
    ? languages.find((lang) => lang.code === currentLocale)?.short || "EN"
    : languages.find((lang) => lang.code === currentLocale)?.name || "Language";

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-auto min-w-[60px] sm:min-w-[100px] border-primary text-primary">
        <SelectValue placeholder="Language">{currentLanguage}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            className="border-primary text-primary"
            key={lang.code}
            value={lang.code}
          >
            {isMobile ? lang.short : lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
