"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, Carousel } from "./apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const t = useTranslations();

  const data = [
    {
      category: t("polishedFinish"),
      title: t("polishedFinishTitle"),
      src: "/ex2.png",
      content: <TileContent description={t("polishedFinishDesc")} />,
    },
    {
      category: t("matteFinish"),
      title: t("matteFinishTitle"),
      src: "/ex2.png",
      content: <TileContent description={t("matteFinishDesc")} />,
    },
    {
      category: t("highGlossFinish"),
      title: t("highGlossFinishTitle"),
      src: "/ex2.png",
      content: <TileContent description={t("highGlossFinishDesc")} />,
    },
    {
      category: t("antiSlipFinish"),
      title: t("antiSlipFinishTitle"),
      src: "/ex2.png",
      content: <TileContent description={t("antiSlipFinishDesc")} />,
    },
    {
      category: t("carvingMatte"),
      title: t("carvingMatteTitle"),
      src: "/ex2.png",
      content: <TileContent description={t("carvingMatteDesc")} />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full py-20">
      <div className="max-w-[90rem] mx-auto px-4">
        <h2 className="text-3xl font-bold text-left text-gray-800">
          {t("exploreOurTilesTitle")}
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

// Modernized TileContent Component
const TileContent = ({ description }: { description: string }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 p-6 md:p-10 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700">
      <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg font-sans max-w-3xl leading-relaxed">
        <span className="font-medium text-neutral-900 dark:text-white">
          {description}
        </span>
      </p>
      <div className="flex justify-center mt-6">
        <Image
          src="/ex2.png"
          alt="Tile example"
          height={400}
          width={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};
