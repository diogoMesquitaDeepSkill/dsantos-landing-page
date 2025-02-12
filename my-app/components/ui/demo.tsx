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
    <ImagesSlider className="h-[30rem] sm:h-[40rem] mt-16" images={images}>
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
        className="z-50 flex flex-col justify-center items-center text-center"
      >
        {/* Centered TextLoop */}
        <TextLoop>
          {[
            t("textLoopText1"),
            t("textLoopText2"),
            t("textLoopText3"),
            t("textLoopText4"),
            t("textLoopText5"),
            t("textLoopText6"),
            t("textLoopText7"),
            t("textLoopText8"),
          ].map((text) => (
            <span key={text} className="block text-center">
              {text}
            </span>
          ))}
        </TextLoop>

        {/* Contact Button - Smooth Scroll to Contact Form */}
        <Button
          onClick={() => {
            const contactForm = document.getElementById("contact-form");
            if (contactForm) {
              contactForm.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-6 w-auto bg-primary text-white px-6 py-2 rounded-md hover:bg-foreground 
             hover:text-white transition-all duration-300"
        >
          {t("contactUs")}
        </Button>
      </motion.div>
    </ImagesSlider>
  );
}
