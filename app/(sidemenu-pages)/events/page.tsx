"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Masonry from "@/components/react-bits/masonry";

const items = [
  {
    id: "1",
    img: "/flow-lounge.svg",
    title: "2 Years Birthday Party",
    description:
      "Δευτέρα 28 Απριλίου στις 20:00, σας περιμένουμε να γιορτάσουμε 2 χρόνια λειτουργίας του καταστήματος, 2 χρόνια γεμάτη με στιγμές και εμπειρίες! θα βρείτε φωρεάν degustation και ποτό καλωσορίσματος",
    date: "Δευτέρα 28 Απριλίου 2025",
    height: 570,
  },
  {
    id: "2",
    img: "/flow-lounge.svg",
    title: "CloudZ Open Party - ep.1",
    description:
      "Παρασκευή 9 Μαίου στις 20:00 με Special Cocktails & Degustation καθώς και House Beats από Dj Billakos. Σας περιμένουμε όλους για μια αξέχαστη βραδιά!",
    date: "Παρασκευή 9 Μαίου 2025",
    height: 250,
  },
  {
    id: "3",
    img: "/flow-lounge.svg",
    title: "Cocktails Essentials",
    description:
      "Τετάρτη 9 Ιουλίου Σας προσκαλούμε σε ένα μοναδικό καλοκαιρινό Cocktail Party με δροσιστικά signature drinks, εκρηκτικά vibes και τις μουσικές επιλογές του DJ Adam",
    date: "Τετάρτη 9 Ιουλίου 2025",
    height: 400,
  },
  {
    id: "4",
    img: "/flow-lounge.svg",
    title: "Hookah Festival Schedule",
    description:
      "ΤΟ HOOKAH FESTIVAL ΣΤΗ ΘΕΣΣΑΛΟΝΙΚΗ ΕΙΝΑΙ ΠΛΕΟΝ ΓΕΓΟΝΟΣ! 😮‍💨😮‍💨 Κάθε παρέα δικαιούται απο ένα ΔΩΡΕΑΝ ναργιλέ ❗️❗️❗️3 μέρες γεμάτες μουσική και ζωντάνια, κάντε swipe δεξιά για να δείτε το πρόγραμμα του Festival! Να είστε όλοι εκεί! ",
    date: "26-28 Σεπτεμβρίου 2025",
    height: 600,
  },
  {
    id: "5",
    img: "/flow-lounge.svg",
    title: "Hookah Festival - Day 1",
    description:
      "Ελάτε μαζί μας για την πρώτη μέρα του Hookah Festival, όπου θα βρείτε εξωτερικό Bar Station για εύκολη πρόσβαση σε ποτά και αναψυκτικά. Θα υπάρχει επίσης δωρεάν Degustation από τον Τίττο Περονέττι, όπου μπορέιτε να δοκιμάσετε ιδιαίτερα mix φτιαγμένα από τον ίδιο.",
    date: "Παρασκευή 26 Σεπτεμβρίου 2025",
    height: 570,
  },
  {
    id: "6",
    img: "/flow-lounge.svg",
    title: "Hookah Festival - Day 2",
    description:
      "Την δεύτερη μέρα του φεστιβάλ θα ακούσετε σημερινά hits από τον Dj Kyzi. Θα έχετε επίσης την ευκαιρία να δοκιμάσετε τα καταπληκτικά mix φτιαγμένα από τον Τίττο Περονέττι (για όσους δεν πρόλαβαν την πρώτη μερα, και για όσους τους άρεσαν και ήρθαν να ξαναδοκιμάσουν).",
    date: "Σάββατο 27 Σεπτεμβρίου 2025",
    height: 600,
  },
  {
    id: "7",
    img: "/flow-lounge.svg",
    title: "Hookah Festival - Day 3",
    description:
      "Σας περιμένουμε την τρίτη και τελευτία μέρα του φεστιβάλ μας όπου θα ακούσουμε μαζί Afro House από τον Dj Adam Rig. Θα έχετε μία ακόμα ευκαιρία να δοκιμάσετε τα καταπληκτικά mix φτιαγμένα από τον Τίττο Περονέττι. Μην χάσετε την ευκαιρία!",
    date: "Κυριακή 28 Σεπτεμβρίου 2025",
    height: 500,
  },
  {
    id: "8",
    img: "/flow-lounge.svg",
    title: "CloudZ Open Party - ep.2",
    description:
      "Spooky vibes meet elegant masquerade! Φορέστε τη μάσκα σας και ελάτε να γιορτάσουμε το Halloween με στυλ. Costume contest με amazing prizes, themed cocktails, και haunting music. Best costume wins free hookah for a month!",
    date: "Παρασκευή 17 Οκτωβρίου 2025",
    height: 570,
  },
  {
    id: "9",
    img: "/flow-lounge.svg",
    title: "Halloween Party",
    description:
      "Spooky vibes meet elegant masquerade! Φορέστε τη μάσκα σας και ελάτε να γιορτάσουμε το Halloween με στυλ. Costume contest με amazing prizes, themed cocktails, και haunting music. Best costume wins free hookah for a month!",
    date: "Πέμπτη 31 Οκτωβρίου 2025",
    height: 520,
  },
];

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6"
        >
          Flow{" "}
          <span className="text-[#EF5021] font-echelon italic text-7xl md:text-9xl drop-shadow-[0_0_40px_rgba(239,80,33,0.8)]">
            Events
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl">
          Immerse yourself in our world of exclusive experiences. Click on any
          event to learn more.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="min-h-[600px]">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
}
