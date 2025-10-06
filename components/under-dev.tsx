"use client";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function UnderDevDisclaimer({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <motion.div
      className="w-screen fixed bottom-0 left-0 z-50 py-4 md:py-6 pl-3 md:pl-4 pr-4 md:pr-8 flex items-center justify-center md:justify-end"
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.3,
          duration: 1,
          ease: [1, -0.4, 0.35, 0.95],
        },
      }}
      exit={{
        opacity: 0,
        x: 200,
        transition: {
          duration: 1,
          ease: [1, -0.4, 0.35, 0.95],
        },
      }}
    >
      <div className="w-fit h-full bg-accent rounded-full pl-4 md:pl-6 py-2 pr-2 flex items-center gap-6 drop-shadow-2xl border border-background/10">
        <h1 className="text-foreground text-base md:text-xl tracking-tight">
          This website is under development.
        </h1>
        <button
          className="size-9 lg:size-10 ml-auto cursor-pointer rounded-full bg-foreground flex items-center justify-center relative overflow-hidden text-background hover:scale-110 transtion-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
    </motion.div>
  );
}

export default function UnderDevDisclaimerWrapper() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && <UnderDevDisclaimer setIsOpen={setIsOpen} />}
    </AnimatePresence>
  );
}
