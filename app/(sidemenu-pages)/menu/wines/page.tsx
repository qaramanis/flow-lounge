"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import {
  getRedWines,
  getWhiteWines,
  getRoseWines,
  getSparklingWines,
} from "@/data/wines";

export default function WinesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      // Animate menu cards with stagger
      gsap.fromTo(
        ".menu-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          // delay: 0.5,
          stagger: 0.08,
          ease: "elastic.in",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const redWines = getRedWines();
  const whiteWines = getWhiteWines();
  const roseWines = getRoseWines();
  const sparklingWines = getSparklingWines();

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Wine
        </a>{" "}
        Selection
      </h1>

      {/* Red Wines */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Red Wines</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {redWines.map((wine, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={wine.title}
              description={wine.description}
              // imageUrl={wine.imageUrl}
              price={wine.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* White Wines */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">White Wines</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {whiteWines.map((wine, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={wine.title}
              description={wine.description}
              // imageUrl={wine.imageUrl}
              price={wine.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Rosé Wines */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Rosé Wines</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {roseWines.map((wine, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={wine.title}
              description={wine.description}
              // imageUrl={wine.imageUrl}
              price={wine.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Sparkling Wines */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Sparkling Wines</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {sparklingWines.map((wine, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={wine.title}
              description={wine.description}
              // imageUrl={wine.imageUrl}
              price={wine.price}
            />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-white/60 mb-4">
          All prices listed above include vat 24% and municipal taxes 0.5%
          <br />
          Market Law Health Officer: Kyriakos Katikaridis
        </p>
      </div>
    </div>
  );
}
