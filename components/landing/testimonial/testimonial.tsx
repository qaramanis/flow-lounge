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
  const statsRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([leftContentRef.current, rightContentRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create scroll trigger animation
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
      className="min-h-screen flex items-center overflow-hidden bg-background md:p-[4rem] p-[2rem] py-[4rem]"
    >
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 md:gap-12 md:h-[700px]"
      >
        {/* Left side - Image with overlay */}
        <div
          ref={leftContentRef}
          className="relative w-full md:w-[40%] h-[400px] md:h-full md:min-h-[700px] rounded-2xl md:rounded-3xl overflow-hidden group"
        >
          {/* Placeholder for actual hookah image */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#EF5021]/20 to-[#EF5021]/5 z-10" />
          <Image
            src="/flow-lounge.svg" // Replace with actual hookah image
            alt="Flow Lounge Hookah Experience"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Floating stat card */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
            <div className="bg-white/65 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl">
              <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold flex items-baseline">
                <CountUp
                  from={0}
                  to={200}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                <span className="text-[#EF5021] ml-1">+</span>
              </div>
              <p className="text-black/80 text-sm md:text-base lg:text-lg mt-1 md:mt-2 font-medium">
                Μοναδικές Γεύσεις
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Dark card with Flow Lounge theme */}
        <div
          ref={rightContentRef}
          className="flex flex-col w-full md:w-[60%] rounded-2xl md:rounded-3xl p-6 md:p-12 justify-between min-h-[450px] md:h-full md:min-h-[700px] relative overflow-hidden text-center items-center"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
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
          <div className="space-y-6 md:space-y-8 relative z-10 flex flex-col items-center">
            <h2
              ref={titleRef}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Εγγυημένη
              <br />
              Ποιότητα Σε Κάθε
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF5021] to-[#ff8c5a]">
                Εμπειρία.
              </span>
            </h2>

            <p
              ref={textRef}
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md"
            >
              Με τον προσωπικό σας Shisha Master, ανακαλύψτε το τέλειο mix από
              200+ premium γεύσεις. Κάθε ναργιλές είναι μια μοναδική εμπειρία
              προσαρμοσμένη στις προτιμήσεις σας.
            </p>

            {/* Learn More Button with Flow Lounge style */}
            {/*<button
              ref={buttonRef}
              className="relative px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black text-sm md:text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,80,33,0.4)] group cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Μάθετε Περισσότερα
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#EF5021] to-[#ff6b3d] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
            </button>*/}
          </div>

          {/* Statistics section */}
          <div
            ref={statsRef}
            className="space-y-4 md:space-y-6 mt-8 md:mt-12 relative z-10 w-full flex flex-col items-center justify-start"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <span className="text-gray-500 text-sm md:text-base lg:text-lg min-w-[70px] md:min-w-[100px]">
                Πελάτες
              </span>
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex-1 h-1.5 md:h-2 bg-gray-700/50 rounded-full overflow-hidden min-w-[108px] md:min-w-[162px] max-w-[120px] md:max-w-[180px]">
                  <div className="w-[90%] h-full bg-gradient-to-r from-[#EF5021] to-[#ff8c5a] rounded-full"></div>
                </div>
                <span className="text-white font-bold text-base md:text-lg lg:text-xl">
                  <CountUp
                    from={0}
                    to={5000}
                    duration={2}
                    delay={0.5}
                    className="inline"
                  />
                  +
                </span>
              </div>
            </div>

            <div className="-ml-2 flex items-center gap-4 md:gap-6">
              <span className="text-gray-500 text-sm md:text-base lg:text-lg min-w-[70px] md:min-w-[100px]">
                Γεύσεις
              </span>
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex-1 h-1.5 md:h-2 bg-gray-700/50 rounded-full overflow-hidden min-w-[108px] md:min-w-[162px] max-w-[120px] md:max-w-[180px]">
                  <div className="w-[70%] h-full bg-gradient-to-r from-[#EF5021] to-[#ff8c5a] rounded-full"></div>
                </div>
                <span className="text-white font-bold text-base md:text-lg lg:text-xl">
                  <CountUp
                    from={0}
                    to={200}
                    duration={2}
                    delay={0.7}
                    className="inline"
                  />
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
