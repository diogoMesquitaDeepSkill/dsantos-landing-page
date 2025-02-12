"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "./button";
import { TextLoop } from "./text-loop";

export function ImagesSliderDemo() {
  const images = ["/ex2.png", "/ex3.png", "/ex4.png", "/ex5.png", "/ex6.png"];
  const t = useTranslations();

  return (
    <ImagesSlider className="h-[40rem] mt-16" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <TextLoop>
          {[
            t("textLoopText1"),
            t("textLoopText2"),
            t("textLoopText3"),
            t("textLoopText4"),
            t("textLoopText5"),
            "Do you have a business?",
            "Do you sell tiles?",
            "We'll provide you a better product.",
            "Than any competitor.",
            "And we'll increase your margins.",
          ].map((text) => (
            <span key={text} className="block text-left">
              {text}
            </span>
          ))}
        </TextLoop>
        <Button className="mt-6 w-full sm:w-auto text-white px-6 py-2 rounded-md border border-white bg-transparent hover:bg-primary hover:text-white transition-all duration-300">
          {t("contactUs")}
        </Button>
      </motion.div>
    </ImagesSlider>
  );
}
