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
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Contact us</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
