"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useRouter } from "next/navigation";
import { useLenis } from "@/hooks/use-lenis";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { lenis } = useLenis();

  const handleMenuRedirect = () => {
    // Stop scroll momentum and reset position before navigation
    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
    }
    // Small delay to ensure scroll is stopped
    setTimeout(() => {
      router.push("/menu");
    }, 50);
  };

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
      className="relative min-h-[675px] md:min-h-screen overflow-hidden bg-transparent flex items-center justify-center"
    >
      <div className="relative z-10 text-center px-5 max-w-7xl mx-auto">
        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-light tracking-wider text-white mb-6"
        >
          <span className="text-4xl md:text-7xl block">Immersive</span>
          <span className="block text-accent text-7xl md:text-[11.2rem] font-echelon italic drop-shadow-[0_0_40px_rgba(239,80,33,1)]">
            Experience
          </span>
        </h1>
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm md:text-xl text-foreground max-w-2xl mx-auto mb-10 font-light"
        >
          Our mission is to bring people joy
          <br />
          Allow yourself to escape from the noise of everyday life
          <br />
          and enjoy the moment.
        </p>

        <div ref={ctaContainerRef} className="flex gap-3 justify-center">
          <button
            onClick={() => {
              const heroSection = containerRef.current;
              const nextSection =
                heroSection?.nextElementSibling as HTMLElement;
              if (nextSection) {
                gsap.to(window, {
                  duration: 1.5,
                  scrollTo: { y: nextSection, offsetY: 0 },
                  ease: "power2.inOut",
                });
              }
            }}
            className="relative px-3 py-3 rounded-lg bg-accent text-white font-medium overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_32px_rgba(239,80,33,0.6)] group cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-accent tracking-tight font-bold">
              Learn More
            </span>
            <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-lg" />
          </button>

          <button
            onClick={handleMenuRedirect}
            className="relative px-6 py-3 rounded-lg border border-white/20 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:border-white/40 group cursor-pointer"
          >
            <span className="relative z-10 font-bold tracking-tight">
              View Menu
            </span>
            <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-lg origin-center" />
          </button>
        </div>
      </div>

      {/* Animated decoration lines */}
      <div className="absolute bottom-0 w-[95%] h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />

      {/* Scroll indicator */}
      {/*<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground">
        <span className="text-xs text-foreground/50 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>*/}
    </section>
  );
}
