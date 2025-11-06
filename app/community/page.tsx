"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import FlowLoungeLogo from "@/components/flow-lounge-logo";

export default function CommunityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" },
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
      <div className="flex justify-center">
        <div
          ref={contentRef}
          className="flex flex-row justify-between items-start gap-4 w-full rounded-4xl h-[700px] overflow-hidden p-6"
        >
          <div className="w-[25%] bg-red-500/20 h-[315px] rounded-xl overflow-hidden">
            <FlowLoungeLogo />
          </div>
          <div className="w-[25%] flex flex-col">
            <div className="bg-red-500/20 h-[315px] rounded-xl">
              <FlowLoungeLogo />
            </div>
            <div>Newsleter</div>
          </div>

          <div className="w-[50%] bg-red-500/20 h-full rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
