"use client";

import CountUp from "@/components/react-bits/count-up";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([leftContentRef.current, rightContentRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.to([leftContentRef.current, rightContentRef.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center overflow-hidden bg-background md:p-[3.2rem] p-[1.6rem] py-[3.2rem]"
    >
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-6 md:gap-10 md:h-[560px]"
      >
        {/* Left side - Image with overlay */}
        <div
          ref={leftContentRef}
          className="relative w-full md:w-[40%] h-[320px] md:h-full md:min-h-[560px] rounded-lg overflow-hidden group"
        >
          <div className="absolute inset-0 z-10" />
          <Image
            src="/flow-lounge.svg"
            alt="Flow Lounge Hookah Experience"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Floating stat card */}
          <div className="absolute top-5 left-5 md:top-6 md:left-6 z-20">
            <div className="bg-foreground/65 backdrop-blur-md p-3 md:p-5 rounded-md shadow-2xl">
              <div className="text-background text-3xl md:text-4xl lg:text-5xl font-bold flex items-baseline">
                <CountUp
                  from={0}
                  to={200}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                <span className="text-accent ml-1">+</span>
              </div>
              <p className="text-background/80 text-sm md:text-base mt-1 md:mt-1.5 font-medium">
                Unique Flavours
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Dark card with Flow Lounge theme */}
        <div
          ref={rightContentRef}
          className="flex flex-col w-full md:w-[60%] rounded-xl md:rounded-2xl p-5 md:p-10 justify-center min-h-[360px] md:h-full md:min-h-[560px] relative overflow-hidden text-center items-center"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EF5021' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>

          {/* Main content */}
          <div className="space-y-5 md:space-y-6 relative z-10 flex flex-col items-center">
            <h2
              ref={titleRef}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Guaranteed
              <br />
              Quality in Every
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff8c5a]">
                Experience.
              </span>
            </h2>

            <p
              ref={textRef}
              className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-md"
            >
              Guided by your personal Shisha Master, discover the perfect mix of
              200+ premium flavors. Each shisha session is a unique experience
              tailored to your preferences.
            </p>

            {/* Learn More Button with Flow Lounge style */}
            {/*<button
              ref={buttonRef}
              className="relative px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black text-sm md:text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,80,33,0.4)] group cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Μάθετε Περισσότερα
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-[#ff6b3d] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
