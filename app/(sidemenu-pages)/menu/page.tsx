"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import MenuCard from "@/components/menu/card";
import { getMenuCategories } from "@/data/menu-categories";

export default function MenuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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
          duration: 0.6,
          stagger: 0.1,
          ease: "elastic.in",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const menuCategories = getMenuCategories();

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16">
      <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-5"
          >
            Our{" "}
            <span className="text-accent text-5xl md:text-[7.6rem] font-echelon italic drop-shadow-[0_0_24px_rgba(239,80,33,0.5)]">
              Menu
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-white/70 max-w-2xl font-light"
          >
            Discover our extensive menu, where classics meet modern creativity.
          </p>
        </div>

        {/* Menu Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5"
        >
          {menuCategories.map((category, index) => (
            <MenuCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
