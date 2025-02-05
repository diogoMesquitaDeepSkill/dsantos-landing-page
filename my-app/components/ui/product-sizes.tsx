"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sizes = [
  {
    size: "30x60cm",
    finishes: ["Glossy", "Matt", "GVT/PGVT"],
  },
  {
    size: "60x120cm",
    finishes: [
      "Glossy",
      "Matt",
      "Satin Matt",
      "High gloss",
      "Sugar finish",
      "Carving Matt",
    ],
  },
  {
    size: "80x80cm",
    finishes: ["Glossy", "Matt", "Satin Matt", "High gloss"],
  },
  {
    size: "80x160cm",
    finishes: ["Glossy", "Matt", "Satin Matt", "High gloss", "Carving matt"],
  },
  {
    size: "120x120cm",
    finishes: ["Glossy", "Matt", "Satin Matt"],
  },
  {
    size: "100x100cm",
    finishes: ["Glossy", "Matt", "Satin Matt"],
  },
  {
    size: "120x240cm",
    finishes: ["Glossy", "Matt", "Satin Matt", "High gloss"],
  },
  {
    size: "20x120cm",
    finishes: ["Matt", "Carving Matt"],
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
    <Card className="w-full shadow-[0px_7px_21px_rgba(0,0,0,0.25)] border-none">
      {" "}
      {/* Ensures all text inside the card is black */}
      <CardHeader className="mb-4">
        <CardTitle className="text-black">Our Product Sizes</CardTitle>
        <CardDescription className="text-gray-600">
          Explore our wide range of sizes and finishes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sizes.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-md text-black"
            >
              {" "}
              <h3 className="font-bold mb-2 text-black">{item.size}</h3>
              <ul className="list-disc list-inside text-black">
                {item.finishes.map((finish, finishIndex) => (
                  <li key={finishIndex} className="text-black">
                    {finish}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={scrollToContact} className="w-full">
          Interested? Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
}
