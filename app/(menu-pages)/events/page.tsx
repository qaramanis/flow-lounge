"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        ".event-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 pb-20">
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-8"
      >
        Flow <span className="text-[#EF5021]">Events</span>
      </h1>

      <p className="text-xl text-white/80 max-w-3xl mb-16">
        Join us for unforgettable nights with live DJs, themed parties, and
        exclusive gatherings.
      </p>

      <div
        ref={eventsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div className="event-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="text-[#EF5021] text-sm font-bold mb-2">
            EVERY FRIDAY
          </div>
          <h3 className="text-2xl text-white mb-3">DJ Nights</h3>
          <p className="text-white/70">
            House & electronic music with guest DJs
          </p>
        </div>

        <div className="event-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="text-[#EF5021] text-sm font-bold mb-2">SATURDAYS</div>
          <h3 className="text-2xl text-white mb-3">Theme Parties</h3>
          <p className="text-white/70">
            Special themed nights with unique experiences
          </p>
        </div>

        <div className="event-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="text-[#EF5021] text-sm font-bold mb-2">SPECIAL</div>
          <h3 className="text-2xl text-white mb-3">Private Events</h3>
          <p className="text-white/70">
            Book your private party or celebration
          </p>
        </div>
      </div>
    </div>
  );
}
