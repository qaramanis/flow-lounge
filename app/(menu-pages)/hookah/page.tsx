"use client";

import { useRef } from "react";

import MenuCard from "@/components/menu/card";

export default function HookahPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const hookahCategories = [
    {
      title: "Classic",
      description:
        "Μεγάλη ποικιλία γεύσεων ξανθού καπνού. Συστήνεται είτε για αρχάριους, είτε για εκείνους που δεν έχουν μεγάλη εμπειρία.",
      // imageUrl: "/images/hookah/hookah-classic.webp",
      price: "14.00 €",
    },
    {
      title: "Premium",
      description:
        "Σειρά ξανθών καπνών. Συστήνεται για εκείνους που τους αρέσει ο ξανθός καπνός και θέλουν το κάτι παραπάνω",
      // imageUrl: "/images/hookah/hookah-premium.webp",
      price: "18.00 €",
    },
    {
      title: "Exclusive",
      description:
        "Τεράστια ποικιλία μαύρου καπνού, από φύλλα Virginia, Burley, Συστήνεται για καπνιστές.",
      // imageUrl: "/images/hookah/hookah-exclusive.webp",
      price: "24.00 €",
    },
    {
      title: "Ultra",
      description:
        "Απολαύστε εξοτικές γεύσεις με εκλεπτυσμένα καπνικά στοιχεία, συμπληρωμένα με αρώματα πούρου. Μια ultra εμπειρία από την αρχή ως το τέλος.",
      // imageUrl: "/images/hookah/hookah-ultra.webp",
      price: "34.00 €",
    },
  ];

  const refillCategories = [
    {
      title: "Classic",
      description:
        "Μεγάλη ποικιλία γεύσεων ξανθού καπνού. Συστήνεται είτε για αρχάριους, είτε για εκείνους που δεν έχουν μεγάλη εμπειρία.",
      // imageUrl: "/images/hookah/refill-classic.webp",
      price: "7.00 €",
    },
    {
      title: "Premium",
      description: "Refill Premium γεύσης στον ναργιλές σας",
      // imageUrl: "/images/hookah/refill-classic.webp",
      price: "9.00 €",
    },
    {
      title: "Exclusive",
      description:
        "Τεράστια ποικιλία μαύρου καπνού, από φύλλα Virginia, Burley, Συστήνεται για καπνιστές.",
      // imageUrl: "/images/hookah/refill-exclusive.webp",
      price: "12.00 €",
    },
    {
      title: "Ultra",
      description:
        "Απολαύστε εξοτικές γεύσεις με εκλεπτυσμένα καπνικά στοιχεία, συμπληρωμένα με αρώματα πούρου. Μια ultra εμπειρία από την αρχή ως το τέλος.",
      // imageUrl: "/images/hookah/refill-ultra.webp",
      price: "20.00 €",
    },
  ];

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24 md:px-4"
      >
        The{" "}
        <a className="text-[#EF5021] font-echelon italic text-6xl md:text-9xl">
          Real
        </a>{" "}
        Hookah{" "}
        <span className="text-[#EF5021] font-echelon italic text-6xl md:text-9xl">
          Experience
        </span>
      </h1>

      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Hookah</h1>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 items-center"
      >
        {hookahCategories.map((category, index) => (
          <MenuCard
            key={index}
            title={category.title}
            description={category.description}
            // imageUrl={category.imageUrl}
            price={category.price}
          />
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Refill Bowls</h1>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 items-center"
      >
        {refillCategories.map((category, index) => (
          <MenuCard
            key={index}
            title={category.title}
            description={category.description}
            // imageUrl={category.imageUrl}
            price={category.price}
          />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-white/60 mb-4">
          All prices listed above include vat 24% and municipal taxes 0.5%
          <br />
          Market Law Health Officer: Kyriakos Katikaridis
        </p>
        {/*<button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-[#EF5021]/50 transition-all duration-300"></button>*/}
      </div>
    </div>
  );
}
