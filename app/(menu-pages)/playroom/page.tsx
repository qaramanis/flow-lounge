"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function PlayroomPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      tl.fromTo(
        ".game-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5",
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
        Play<span className="text-[#EF5021]">room</span>
      </h1>

      <p className="text-xl text-white/80 max-w-3xl mb-16">
        Enjoy our gaming lounge with board games, console gaming, and
        interactive entertainment.
      </p>

      <div
        ref={gamesRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="game-item bg-gradient-to-br from-[#EF5021]/20 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:from-[#EF5021]/30 transition-all duration-300">
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-xl text-white mb-2">Console Gaming</h3>
          <p className="text-white/60 text-sm">PS5, Xbox, Nintendo Switch</p>
        </div>

        <div className="game-item bg-gradient-to-br from-[#EF5021]/20 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:from-[#EF5021]/30 transition-all duration-300">
          <div className="text-4xl mb-4">🎲</div>
          <h3 className="text-xl text-white mb-2">Board Games</h3>
          <p className="text-white/60 text-sm">Classic & modern selection</p>
        </div>

        <div className="game-item bg-gradient-to-br from-[#EF5021]/20 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:from-[#EF5021]/30 transition-all duration-300">
          <div className="text-4xl mb-4">♟️</div>
          <h3 className="text-xl text-white mb-2">Chess & Backgammon</h3>
          <p className="text-white/60 text-sm">Traditional strategy games</p>
        </div>

        <div className="game-item bg-gradient-to-br from-[#EF5021]/20 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:from-[#EF5021]/30 transition-all duration-300">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl text-white mb-2">Darts & Pool</h3>
          <p className="text-white/60 text-sm">Classic bar games</p>
        </div>
      </div>
    </div>
  );
}
