"use client";

import { useRef } from "react";
import MenuCard from "@/components/menu/card";

export default function MenuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const menuCategories = [
    {
      title: "Hookah",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/hookah",
    },
    {
      title: "Cocktails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/menu/cocktails",
    },
    {
      title: "Homemade Lemonades",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/menu/lemonades",
    },
    {
      title: "Soft Drinks and Juices",
      link: "/menu/soft-drinks",
    },
    {
      title: "Tea and Coffee",
      link: "/menu/tea-coffee",
    },
    {
      title: "Drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/menu/drinks",
    },
    {
      title: "Wines",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/menu/wines",
    },
    {
      title: "Beers and Ciders",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/menu/beers-ciders",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-32 px-8 md:px-20 pb-20">
      {/* Header */}
      <div className="mb-16">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-6"
        >
          Our{" "}
          <span className="text-accent text-6xl md:text-9xl font-echelon italic  drop-shadow-[0_0_30px_rgba(239,80,33,0.5)]">
            Menu
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light"
        >
          Discover our extensive menu, where classics meet modern creativity.
        </p>
      </div>

      {/* Menu Grid */}
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-6"
      >
        {menuCategories.map((category, index) => (
          <div key={index} className="w-full md:w-[calc(23%-1.5rem)]">
            <MenuCard
              key={index}
              title={category.title}
              description={category.description}
              // imageUrl={category.imageUrl}
              link={category.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
