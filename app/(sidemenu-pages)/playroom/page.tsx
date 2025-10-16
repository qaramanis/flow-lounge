"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Image from "next/image";
import PlayroomModal from "@/components/playroom/modal";

export default function PlayroomPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <div ref={containerRef} className="pt-24 pb-20">
        <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-5"
          >
            Smoke and Play
          </h1>

          <p className="text-base md:text-lg text-foreground/70 max-w-2xl font-light mb-16">
            Enjoy our <span className="text-accent">Playroom</span> , equipped
            with board and console games.
          </p>
        </div>

        <div className="min-h-full w-full flex items-center overflow-hidden bg-[#241f21]/0 md:p-[4rem] py-[2rem] rounded-2xl">
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 md:gap-12 md:h-[700px]">
            {/* Left side - Image with overlay */}
            <div className="relative w-full md:w-[40%] h-[400px] md:h-full md:min-h-[700px] rounded-xl overflow-hidden group select-none">
              <Image
                src="/ps5-front.webp"
                alt="Flow Lounge Hookah Experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                draggable="false"
              />
            </div>

            {/* Right side - Dark card with Flow Lounge theme */}
            <div className="flex flex-col w-full md:w-[60%] rounded-2xl md:rounded-3xl py-6 md:p-12 justify-center min-h-[450px] md:h-full md:min-h-[700px] relative overflow-hidden text-center items-center">
              {/* Main content */}
              <div className="space-y-6 md:space-y-8 relative z-10 flex flex-col">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Enjoy Games Like
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff8c5a]">
                    FIFA 25, UFC 25,
                    <br /> NBA 2K25, Tekken 7
                  </span>
                  <br />
                  and many more
                  <br />
                  for free!
                </h2>
              </div>
              <div className="pt-8 md:pt-12">
                <p
                  onClick={() => setIsModalOpen(true)}
                  className="text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl pt-8 md:pt-12 group cursor-pointer hover:underline hover:text-accent transition-all duration-0"
                >
                  Click here for details
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36 flex flex-row">
          <div className="bottom-0 w-[45%] h-px bg-gradient-to-r from-transparent to-foreground/50" />
          <h1 className="text-5xl md:text-7xl px-8 font-echelon italic select-none text-foreground/75">
            /
          </h1>
          <div className="bottom-0 w-[45%] h-px bg-gradient-to-l from-transparent to-foreground/50" />
        </div>

        <div className="min-h-full w-full flex items-center overflow-hidden bg-[#241f21]/0 md:p-[4rem] py-[2rem] rounded-2xl">
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 md:gap-12 md:h-[700px]">
            {/* Right side - Dark card with Flow Lounge theme */}
            <div className="flex flex-col w-full md:w-[60%] rounded-2xl md:rounded-3xl py-6 md:p-12 justify-center min-h-[450px] md:h-full md:min-h-[700px] relative overflow-hidden text-center items-center">
              {/* Main content */}
              <div className="space-y-6 md:space-y-8 relative z-10 flex flex-col">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Challenge your friends
                  <br />
                  to a game of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff8c5a]">
                    Chess
                  </span>
                </h2>
              </div>
            </div>

            {/* Left side - Image with overlay */}
            <div className="relative w-full md:w-[40%] h-[400px] md:h-full md:min-h-[700px] rounded-xl overflow-hidden group select-none">
              <Image
                src="/chess.png"
                alt="Flow Lounge Hookah Experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <PlayroomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
