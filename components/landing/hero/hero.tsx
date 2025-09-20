"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(ctaContainerRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(".hero-bg-element", {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(".hero-bg-element", {
        opacity: 0.1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
      });

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=1",
      );

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX - innerWidth / 2) / innerWidth;
      const yPos = (clientY - innerHeight / 2) / innerHeight;

      const rotateX = yPos * 15;
      const rotateY = xPos * 15;

      // Background elements - strong movement
      gsap.to(".hero-bg-element", {
        x: xPos * 100,
        y: yPos * 100,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          amount: 0.1,
          from: "center",
        },
      });

      // Title - opposite movement with 3D rotation
      gsap.to(titleRef.current, {
        x: xPos * -30,
        y: yPos * -30,
        rotateX: -rotateX * 0.5,
        rotateY: rotateY * 0.5,
        transformPerspective: 1000,
        duration: 1.2,
        ease: "power2.out",
      });

      // Subtitle - subtle movement
      // gsap.to(subtitleRef.current, {
      //   x: xPos * -15,
      //   y: yPos * -15,
      //   duration: 1.4,
      //   ease: "power2.out",
      // });

      // CTA container - floating effect
      // gsap.to(ctaContainerRef.current, {
      //   x: xPos * -20,
      //   y: yPos * -20,
      //   duration: 1.3,
      //   ease: "power2.out",
      // });

      // Additional glow effect at mouse position
      gsap.to(".mouse-glow", {
        x: clientX - innerWidth / 2 - 200,
        y: clientY - innerHeight / 2 - 200,
        duration: 0.3,
        opacity: 0.1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      // Reset all transforms when mouse leaves
      gsap.to(
        [titleRef.current, subtitleRef.current, ctaContainerRef.current],
        {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
      );

      gsap.to(".hero-bg-element", {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    };

    // Store the current ref value to use in cleanup
    const currentContainer = containerRef.current;

    window.addEventListener("mousemove", handleMouseMove);
    currentContainer?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      currentContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs for atmosphere */}
        <div className="hero-bg-element absolute top-20 left-20 w-96 h-96 bg-[#EF5021]/30 rounded-full blur-[120px]" />
        <div className="hero-bg-element absolute bottom-20 right-20 w-96 h-96 bg-[#EF5021]/20 rounded-full blur-[120px]" />
        <div className="hero-bg-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EF5021]/10 rounded-full blur-[150px]" />
        <div className="hero-bg-element absolute top-1/3 right-1/3 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]" />
        <div className="hero-bg-element absolute bottom-1/3 left-1/3 w-72 h-72 bg-red-500/15 rounded-full blur-[100px]" />

        {/* Mouse follow glow */}
        <div className="mouse-glow absolute top-1/2 left-1/2 w-96 h-96 bg-[#EF5021]/20 rounded-full blur-[80px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-8 will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="block">Immersive</span>
          <span className="block text-[#EF5021] drop-shadow-[0_0_30px_rgba(239,80,33,0.5)]">
            Experience
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light will-change-transform"
        >
          Step into a world where ambiance meets artistry. Your journey into
          relaxation and entertainment begins here.
        </p>

        {/* CTA Buttons - Fixed hover zone */}
        <div
          ref={ctaContainerRef}
          className="flex gap-4 justify-center will-change-transform"
        >
          <button className="relative px-8 py-4 rounded-xl bg-[#EF5021] text-black font-medium overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(239,80,33,0.6)] group cursor-pointer">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
