"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { Children, useEffect, useState } from "react";

type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
};

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const intervalMs = interval * 1000;

    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div
      className={cn(
        "relative box-border w-full px-4",
        "flex items-center justify-center",
        className
      )}
    >
      <div className="w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            variants={variants || motionVariants}
            className="text-center w-full break-words whitespace-normal
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold text-white leading-tight tracking-tight
                       px-2 py-1"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TextLoop;
