"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

import MenuCard from "@/components/menu/card";

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
          duration: 0.6,
          stagger: 0.08,
          ease: "elastic.in",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
    <div ref={containerRef} className="pt-24 mb-10">
      <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-20"
        >
          The{" "}
          <span className="text-accent font-echelon italic text-5xl md:text-[7.6rem]">
            Real
          </span>{" "}
          Hookah{" "}
          <span className="text-accent font-echelon italic text-5xl md:text-[7.6rem]">
            Experience
          </span>
        </h1>

        <div className="self-center items-center text-center mb-6 mt-20 md:mb-10 md:mt-28">
          <h2 className="text-4xl md:text-5xl">Hookah</h2>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6 items-center"
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

        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-20" />

        <div className="self-center items-center text-center mb-6 mt-20 md:mb-12 md:mt-10">
          <h2 className="text-4xl md:text-5xl">Refill Bowls</h2>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6 items-center"
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

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-3">
            All prices listed above include vat 24% and municipal taxes 0.5%
            <br />
            Market Law Health Officer: Kyriakos Katikaridis
          </p>
          {/*<button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-accent/50 transition-all duration-300"></button>*/}
        </div>
      </div>
    </div>
  );
}
