"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import {
  getSingleEspresso,
  getDoubleEspresso,
  getColdCoffee,
  getGreekCoffee,
  getTeaRoute,
  getIceTea,
} from "@/data/tea-and-coffee";

export default function TeaAndCoffeePage() {
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

  const singleEspresso = getSingleEspresso();
  const doubleEspresso = getDoubleEspresso();
  const coldCoffee = getColdCoffee();
  const greekCoffee = getGreekCoffee();
  const teaRoute = getTeaRoute();
  const iceTea = getIceTea();

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Tea
        </a>{" "}
        &{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Coffee
        </a>
      </h1>

      {/* Single Espresso */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Single Espresso</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {singleEspresso.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Double Espresso */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Double Espresso</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {doubleEspresso.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Cold Coffee */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Cold Coffee</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {coldCoffee.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Greek Coffee */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Greek Coffee</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {greekCoffee.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Hot Tea Route */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Hot Tea</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {teaRoute.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Ice Tea */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Ice Tea</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {iceTea.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
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
