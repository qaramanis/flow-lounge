"use client";

import { useRef } from "react";
import FaqsContent from "./faqs-content";
import FaqsTitle from "./faqs-title";

export default function FaqsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 md:px-[4.8rem] min-h-[90vh] w-full bg-transparent my-[8rem]"
      id="faqs"
    >
      <div className="md:px-[4.8rem] px-[1.6rem] flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
        <FaqsTitle />
        <FaqsContent />
      </div>
    </section>
  );
}
