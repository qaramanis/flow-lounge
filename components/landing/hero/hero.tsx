"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(ctaContainerRef.current, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      });

      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5",
      );

      tl.to(
        ctaContainerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-transparent flex items-center justify-center"
    >
      {/* Simple static background gradient */}
      {/*<div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-[#EF5021]/20" />
      </div>*/}

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-8"
        >
          <span className="block">Immersive</span>
          <span className="block text-[#EF5021] drop-shadow-[0_0_30px_rgba(239,80,33,0.5)]">
            Experience
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-[#666666] max-w-2xl mx-auto mb-12 font-light"
        >
          Κάνε ένα βήμα
        </p>

        {/* CTA Buttons */}
        <div ref={ctaContainerRef} className="flex gap-4 justify-center">
          <button className="relative px-8 py-4 rounded-xl bg-[#EF5021] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(239,80,33,0.6)] group cursor-pointer">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#EF5021]">
              Explore Now
            </span>
            <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-xl" />
          </button>

          <button className="relative px-8 py-4 rounded-xl border border-white/20 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white/40 group cursor-pointer">
            <span className="relative z-10">View Menu</span>
            <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-xl origin-center" />
          </button>
        </div>
      </div>

      {/* Animated decoration lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EF5021]/50 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666666]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#666666] to-transparent" />
      </div>
    </section>
  );
}
