"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 pb-20">
      <div className="mb-12">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6"
        >
          Get in{" "}
          <span className="text-accent font-echelon italic text-7xl md:text-9xl drop-shadow-[0_0_40px_rgba(239,80,33,0.8)]">
            Touch
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl">
          Reach out to us for reservations, inquiries, or anything else you
          need.
        </p>
      </div>

      {/* Contact Information */}
      <div ref={contentRef} className="space-y-8 max-w-2xl">
        <div className="border-b border-white/15 pb-6">
          <h2 className="text-xl text-white/60 mb-2">Name</h2>
          <p className="text-3xl text-white font-light">Titto Peronetti</p>
        </div>

        <div className="border-b border-white/15 pb-6">
          <h2 className="text-xl text-white/60 mb-2">Phone</h2>
          <a
            href="tel:+30"
            className="text-3xl text-white font-light hover:text-accent transition-colors duration-300"
          >
            {/*+30 697 208 4941*/}
            <br /> +30 693 426 5802
          </a>
        </div>

        <div className="border-b border-white/15 pb-6">
          <h2 className="text-xl text-white/60 mb-2">Email</h2>
          <a
            href="mailto:info@flowlounge.gr"
            className="text-3xl text-white font-light hover:text-accent transition-colors duration-300"
          >
            info@flowlounge.gr
          </a>
        </div>
      </div>
    </div>
  );
}
