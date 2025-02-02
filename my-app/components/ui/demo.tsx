"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { TextLoop } from "./text-loop";

export function ImagesSliderDemo() {
  const images = ["/ex2.png", "/ex3.png", "/ex4.png", "/ex5.png", "/ex6.png"];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
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
      </motion.div>
    </ImagesSlider>
  );
}
