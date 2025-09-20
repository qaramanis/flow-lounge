"use client";

import MarqueesSection from "./marquees";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <div className="min-h-screen flex items-center overflow-hidden">
      <div className="relative">
        <Image
          src="flow-lounge.svg"
          alt="image"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
        />
        <MarqueesSection />
      </div>
    </div>
  );
}
