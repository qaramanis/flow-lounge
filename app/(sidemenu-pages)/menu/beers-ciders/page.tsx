"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import { getBeers, getCiders } from "@/data/beers-and-ciders";

export default function BeersAndCidersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

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
          stagger: 0.08,
          ease: "elastic.in",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const beers = getBeers();
  const ciders = getCiders();

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Beers
        </a>{" "}
        &{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Ciders
        </a>
      </h1>

      {/* Beers */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Beers</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {beers.map((beer, index) => {
          const cardId = `beer-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={beer.title}
                description={beer.description}
                price={beer.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Ciders */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Ciders</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {ciders.map((cider, index) => {
          const cardId = `cider-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={cider.title}
                description={cider.description}
                price={cider.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
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
