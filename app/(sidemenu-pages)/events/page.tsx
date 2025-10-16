"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Masonry from "@/components/react-bits/masonry";
import { getEvents } from "@/data/events";

// Get events and transform to match Masonry component's expected format
const items = getEvents().map((event) => ({
  id: event.id,
  img: event.image,
  title: event.title,
  description: event.description,
  date: event.date,
  height: event.height || 400, // Default height if not specified
}));

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);

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
    <div ref={containerRef} className="pt-24 pb-16">
      <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-5"
          >
            Flow{" "}
            <span className="text-accent font-echelon italic text-5xl md:text-[7.6rem] drop-shadow-[0_0_32px_rgba(239,80,33,0.8)]">
              Events
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl font-light">
            Immerse yourself in our world of exclusive experiences. Click on any
            event to learn more.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="min-h-[480px]">
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
    </div>
  );
}
