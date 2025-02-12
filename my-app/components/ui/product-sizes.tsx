"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const TileSizeIcon = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.4 4.8C18.7314 4.8 19 5.06863 19 5.4V11.6C19 11.9314 18.7314 12.2 18.4 12.2C18.0686 12.2 17.8 11.9314 17.8 11.6V7.45822L7.45822 17.8H11.6C11.9314 17.8 12.2 18.0686 12.2 18.4C12.2 18.7314 11.9314 19 11.6 19L5.4 19C5.21902 19 5.04589 18.9242 4.91086 18.7891C4.77583 18.6541 4.7 18.481 4.7 18.3L4.7 12.1C4.7 11.7686 4.96863 11.5 5.3 11.5C5.63137 11.5 5.9 11.7686 5.9 12.1L5.9 16.2418L16.2418 5.9L12.1 5.9C11.7686 5.9 11.5 5.63137 11.5 5.3C11.5 4.96863 11.7686 4.7 12.1 4.7L18.4 4.8Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const sizes = [
  {
    size: "60x120cm",
    finishes: [
      "Polished",
      "Matt",
      "High gloss",
      "Anti-slip Matt",
      "Carving Matt",
    ],
  },
  {
    size: "120x120cm",
    finishes: ["Glossy", "Matt", "Satin Matt"],
  },
  {
    size: "120x240cm",
    finishes: ["Glossy", "Matt", "Satin Matt", "High gloss"],
  },
  {
    size: "60x60cm",
    finishes: ["Matt", "Carving Matt"],
  },
  {
    size: "80x160cm",
    finishes: ["Glossy", "Matt", "Satin Matt", "High gloss", "Carving matt"],
  },
  {
    size: "30x60cm",
    finishes: ["Glossy", "Matt", "GVT/PGVT"],
  },
  {
    size: "80x80cm",
    finishes: ["Glossy", "Matt", "Satin Matt", "High gloss"],
  },
  {
    size: "100x100cm",
    finishes: ["Glossy", "Matt", "Satin Matt"],
  },
];

export function ProductSizes() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-8 text-gray-800">
          Our Product Sizes
        </h2>
        <p className="text-gray-600 mb-8">
          Explore our wide range of sizes and finishes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TileSizeIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-gray-800 text-lg">
                  {item.size}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.finishes.map((finish, finishIndex) => (
                    <li
                      key={finishIndex}
                      className="flex items-center text-gray-600"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                      {finish}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            onClick={scrollToContact}
            className="px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
          >
            Interested? Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
