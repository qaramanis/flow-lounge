"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import {
  getFreshJuices,
  getPackagedJuices,
  getSoftDrinks,
} from "@/data/soft-drinks-and-juices";

export default function SoftDrinksPage() {
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
          stagger: 0.08,
          ease: "elastic.in",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const freshJuices = getFreshJuices();
  const packagedJuices = getPackagedJuices();
  const softDrinks = getSoftDrinks();

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Soft Drinks
        </a>{" "}
        &{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Juices
        </a>
      </h1>

      {/* Fresh Juices */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Fresh Juices</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {freshJuices.map((juice, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={juice.title}
              description={juice.description}
              price={juice.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Packaged Juices */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Packaged Juices</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {packagedJuices.map((juice, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={juice.title}
              description={juice.description}
              price={juice.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Soft Drinks */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Soft Drinks</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {softDrinks.map((drink, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={drink.title}
              description={drink.description}
              price={drink.price}
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
