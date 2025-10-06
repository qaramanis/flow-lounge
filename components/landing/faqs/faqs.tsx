"use client";

import { useRef } from "react";
import FaqsContent from "./faqs-content";
import FaqsTitle from "./faqs-title";

export default function FaqsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 md:px-[6rem] min-h-[90vh] w-full bg-transparent my-[10rem]"
      id="faqs"
    >
      <div className="md:px-[6rem] px-[2rem] flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
        <FaqsTitle />
        <FaqsContent />
      </div>
    </section>
  );
}
