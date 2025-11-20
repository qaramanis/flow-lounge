"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";
import { getCocktailCategories } from "@/data/cocktails";
import VatDisclaimer from "@/components/vat-disclaimer";

export default function HookahPage() {
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
          // delay: 0.5,
          stagger: 0.08,
          ease: "elastic.in",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = getCocktailCategories();

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

      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
            <h1 className="text-5xl md:text-7xl">{category.name}</h1>
          </div>
          <div
            ref={gridRef}
            className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-8"
          >
            {category.items.map((item, index) => {
              const cardId = `${categoryIndex}-${index}`;
              return (
                <div
                  key={index}
                  className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(25%-1.5rem)]"
                >
                  <MenuCard
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    isExpanded={expandedCardId === cardId}
                    onToggleExpand={() =>
                      setExpandedCardId(
                        expandedCardId === cardId ? null : cardId,
                      )
                    }
                  />
                </div>
              );
            })}
          </div>

          {categoryIndex < categories.length - 1 && (
            <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />
          )}
        </div>
      ))}

      <VatDisclaimer />
    </div>
  );
}
