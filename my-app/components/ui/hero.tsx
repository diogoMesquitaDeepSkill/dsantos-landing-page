/* eslint-disable @next/next/no-img-element */
import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              New Release
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Meet DSantos Products
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              DSantos is a B2B Germany and Portugal based company. We are
              focused on providing high quality tiles for the EU market and
              beyond.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Primary Button</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Secondary Button
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="https://shadcnblocks.com/images/block/placeholder-1.svg"
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
