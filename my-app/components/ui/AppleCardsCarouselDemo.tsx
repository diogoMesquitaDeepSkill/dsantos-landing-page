"use client";
import Image from "next/image";
import { Card, Carousel } from "./apple-cards-carousel";
import { useTranslations } from "next-intl";

export function AppleCardsCarouselDemo() {

  const t = useTranslations()

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
          {t('exploreOurFinishes')}
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const TileContent = ({ description }: { description: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <Image
        src="/ex2.png"
        alt="Tile example"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Polished Finish",
    title: "A smooth, reflective surface",
    src: "/ex2.png",
    content: <TileContent description="Brings out the shine in every space." />,
  },
  {
    category: "Matt Finish",
    title: "A soft, non-reflective surface",
    src: "/ex2.png",
    content: <TileContent description="Subtle elegance with a muted effect." />,
  },
  {
    category: "High Gloss Polished",
    title: "Ultra-reflective, premium shine",
    src: "/ex2.png",
    content: (
      <TileContent description="Luxurious brightness for your interiors." />
    ),
  },
  {
    category: "Antislip Matt",
    title: "Enhanced grip, stylish texture",
    src: "/ex2.png",
    content: <TileContent description="Designed for safety and style." />,
  },
  {
    category: "Carving Matte",
    title: "Textured patterns with a matte touch",
    src: "/ex2.png",
    content: (
      <TileContent description="Adds depth and character to your spaces." />
    ),
  },
  {
    category: "Rustic Finish",
    title: "A naturally aged look",
    src: "/ex2.png",
    content: <TileContent description="Timeless charm with an earthy feel." />,
  },
];
