"use client";

import SimpleMarquee from "@/components/simple-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

function MarqueeItem({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center">
      <span className="text-5xl lg:text-[6rem] tracking-tight">{text}</span>
      <span className="block w-6 lg:w-8 px-8 lg:px-14 box-content mt-2">
        <Image
          src="/flow-lounge.svg"
          alt="Flow Lounge"
          width={32}
          height={32}
          className="w-full h-auto"
        />
      </span>
    </div>
  );
}

export function Marquees() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; //@TODO: create loading placeholder
  }

  return (
    <section className="w-screen flex flex-col relative px-24">
      <div className="w-full h-full flex flex-col gap-4 lg:gap-0">
        <SimpleMarquee
          className="w-full"
          baseVelocity={4}
          repeat={4}
          draggable={false}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="left"
        >
          <MarqueeItem text="Hookah" />
          <MarqueeItem text="Cocktails" />
          <MarqueeItem text="Beers" />
          <MarqueeItem text="Spirits" />
        </SimpleMarquee>
        <SimpleMarquee
          className="w-full"
          baseVelocity={4}
          repeat={2}
          draggable={false}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="right"
        >
          <MarqueeItem text="Tea" />
          <MarqueeItem text="Soft Drinks" />
          <MarqueeItem text="Juices" />
          <MarqueeItem text="Wines" />
        </SimpleMarquee>
      </div>
    </section>
  );
}

export default function MarqueesSection() {
  return (
    <div className="min-h-[844px] md:min-h-screen flex items-center overflow-hidden">
      <div className="relative">
        <Marquees />
      </div>
    </div>
  );
}
