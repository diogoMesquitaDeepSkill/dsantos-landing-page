"use client"

import { useRouter, usePathname } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRef, useEffect, useState } from "react"

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "pt", name: "Português" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [width, setWidth] = useState<number>(100)
  const measureRef = useRef<HTMLSpanElement>(null)

  // Extract the current locale from the pathname
  const currentLocale = pathname.split("/")[1]

  const handleLanguageChange = (newLocale: string) => {
    // Construct the new path by replacing the locale
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  useEffect(() => {
    if (measureRef.current) {
      const newWidth = measureRef.current.offsetWidth
      setWidth(newWidth + 40) // Add some padding
    }
  }, [measureRef]) // Removed unnecessary dependency: currentLocale

  const currentLanguage = languages.find((lang) => lang.code === currentLocale)?.name || "Language"

  return (
    <>
      <span ref={measureRef} className="invisible absolute whitespace-nowrap">
        {currentLanguage}
      </span>
      <Select value={currentLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="min-w-[100px] border-primary text-primary" style={{ width: `${width}px` }}>
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem className="border-primary text-primary" key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

