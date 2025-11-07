"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import {
  getSignatureCocktails,
  getClassicCocktails,
  getAperitifs,
  getMocktails,
} from "@/data/cocktails";
import VatDisclaimer from "@/components/vat-disclaimer";

export default function HookahPage() {
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

  const signatureCocktails = getSignatureCocktails();
  const classicCocktails = getClassicCocktails();
  const aperitifs = getAperitifs();
  const mocktails = getMocktails();

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Cocktail
        </a>{" "}
        List
      </h1>

      {/* Signature Cocktails */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Signature Cocktails</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {signatureCocktails.map((cocktail, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={cocktail.title}
              description={cocktail.description}
              // imageUrl={cocktail.imageUrl}
              price={cocktail.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Classic Cocktails */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Classic Cocktails</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {classicCocktails.map((cocktail, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={cocktail.title}
              description={cocktail.description}
              // imageUrl={cocktail.imageUrl}
              price={cocktail.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Aperitifs */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Aperitifs</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {aperitifs.map((aperitif, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={aperitif.title}
              description={aperitif.description}
              // imageUrl={aperitif.imageUrl}
              price={aperitif.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Mocktails */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Mocktails</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {mocktails.map((mocktail, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={mocktail.title}
              description={mocktail.description}
              // imageUrl={mocktail.imageUrl}
              price={mocktail.price}
            />
          </div>
        ))}
      </div>

      <VatDisclaimer />
    </div>
  );
}
