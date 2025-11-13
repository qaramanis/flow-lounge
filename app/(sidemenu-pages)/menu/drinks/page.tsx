"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import {
  getVodka,
  getGin,
  getRum,
  getTequila,
  getWhisky,
  getCognac,
  getMetaxa,
} from "@/data/drinks";
import VatDisclaimer from "@/components/vat-disclaimer";

export default function DrinksPage() {
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

  const vodka = getVodka();
  const gin = getGin();
  const rum = getRum();
  const tequila = getTequila();
  const whisky = getWhisky();
  const cognac = getCognac();
  const metaxa = getMetaxa();

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Drinks
        </a>{" "}
        Selection
      </h1>

      {/* Vodka */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Vodka</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {vodka.map((drink, index) => {
          const cardId = `vodka-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Gin */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Gin</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {gin.map((drink, index) => {
          const cardId = `gin-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Rum */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Rum</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {rum.map((drink, index) => {
          const cardId = `rum-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Tequila */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Tequila</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {tequila.map((drink, index) => {
          const cardId = `tequila-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Whisky */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Whisky</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {whisky.map((drink, index) => {
          const cardId = `whisky-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Cognac */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Cognac</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {cognac.map((drink, index) => {
          const cardId = `cognac-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Metaxa */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Metaxa</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
      >
        {metaxa.map((drink, index) => {
          const cardId = `metaxa-${index}`;
          return (
            <div
              key={index}
              className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <MenuCard
                title={drink.title}
                description={drink.description}
                price={drink.price}
                isExpanded={expandedCardId === cardId}
                onToggleExpand={() => setExpandedCardId(expandedCardId === cardId ? null : cardId)}
              />
            </div>
          );
        })}
      </div>

      <VatDisclaimer />
    </div>
  );
}
