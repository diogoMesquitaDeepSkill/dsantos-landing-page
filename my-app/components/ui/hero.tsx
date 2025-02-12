/* eslint-disable @next/next/no-img-element */
import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              {t("newCollections")}
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {t("meetDsantosTitle")}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {t("meetDsantosText")}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">
                {t("heroPrimaryButton")}
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                {t("heroSecondaryButton")}
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="/showroom.jpg"
              alt="placeholder hero"
              className="mx-auto max-h-96 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
