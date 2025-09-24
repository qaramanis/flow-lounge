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
      imageUrl: "/images/menu/hookah-ultra.webp",
      link: "/hookah",
    },
    {
      title: "Cocktails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/menu/cocktail-icon-01.webp",
      link: "/menu/cocktails",
    },
    {
      title: "Homemade Lemonades",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/menu/coffee-icon-01.webp",
      link: "/menu/lemonades",
    },
    {
      title: "Soft Drinks and Juices",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/menu/beer-icon-01.webp",
      link: "/menu/soft-drinks",
    },
    {
      title: "Tea and Coffee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/spirits-icon-01.webp",
      link: "/menu/tea-coffee",
    },
    {
      title: "Drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/menu/soft-drinks-icon-01.webp",
      link: "/menu/drinks",
    },
    {
      title: "Wines",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/menu/wine-icon-01.webp",
      link: "/menu/wines",
    },
    {
      title: "Beers and Ciders",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/images/menu/tea-icon-01.webp",
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
          <span className="text-[#EF5021] text-6xl md:text-9xl font-echelon italic  drop-shadow-[0_0_30px_rgba(239,80,33,0.5)]">
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
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 items-center mb-6"
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
  );
}
