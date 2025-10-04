"use client";

import { useRef } from "react";
import FaqsContent from "./faqs-content";
import FaqsTitle from "./faqs-title";

export default function FaqsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 lg:px-20  min-h-[90vh] w-full bg-transparent px-[6rem]"
      id="faqs"
    >
      <div className="md:px-[6rem] px-[2rem] flex flex-row items-start justify-between">
        <FaqsTitle />
        <FaqsContent />
      </div>
    </section>
  );
}

// @TODO mobile view
