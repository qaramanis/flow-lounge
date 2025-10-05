"use client";
import { useRef, memo } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Image from "next/image";

const ServiceCard = memo(
  ({
    service,
  }: {
    service: {
      id: string;
      category: string;
      title: string;
      subtitle?: string;
      description: string;
      color: string;
    };
  }) => (
    <div
      className="w-full md:w-[calc(30%-1.5rem)] service-card bg-[#241f21]/80 backdrop-blur-sm rounded-sm p-8 hover:bg-[#241f21] border border-white/10 group transition-all duration-300"
      style={{ "--service-color": service.color } as React.CSSProperties}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-3 h-3 rounded"
          style={{ backgroundColor: "var(--service-color)" }}
        />
        <span
          className="text-sm font-semibold tracking-wider"
          style={{ color: "var(--service-color)" }}
        >
          {service.category}
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-white mb-3">
        {service.title}
      </h3>

      {service.subtitle && (
        <p className="text-white/75 font-medium mb-4 group-hover:text-white transition-all duration-300">
          {service.subtitle}
        </p>
      )}

      <p className="text-white/50 leading-relaxed">{service.description}</p>
    </div>
  ),
);

ServiceCard.displayName = "ServiceCard";

export default function PlayroomPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".service-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: "mixology",
      category: "MIXOLOGY",
      title: "Get Custom Mixology Menu",
      // subtitle: "Lorem ipsum dolor sit amet",
      description:
        "We create custom mixology menus that cater to your business's unique style. Our team of experts will work with you to develop a menu that reflects your brand's personality.",
      color: "#21c0ef",
    },
    {
      id: "degustation",
      category: "DEGUSTATION",
      title: "Try our Best Mixes",
      subtitle: "Sample our mixes and find your favorite",
      description:
        "Meet our Hookah Master and try some of our best mixes, specially crafted by our expert mixologists.",
      color: "#efb721",
    },
    {
      id: "lorem-ipsum",
      category: "LOREM IPSUM",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      color: "#EF5021",
    },
  ];

  return (
    <div ref={containerRef} className="px-4 pt-32 pb-20">
      <div className="px-4 md:px-20">
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-foreground mb-8">
          Special Services
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-16">
          Collaboration with{" "}
          <a
            href="https://hookahjoy.gr/"
            className="text-accent hover:text-foreground hover:underline hover:underline-offset-2 hover:decoration-1 transition-all duration-300"
          >
            Hookah Joy
          </a>{" "}
          and{" "}
          <a
            href="https://linktr.ee/tittoperonetti"
            className="text-accent hover:text-foreground hover:underline hover:underline-offset-2 hover:decoration-1 transition-all duration-300"
          >
            Titto Peronetti
          </a>{" "}
          for custom services
        </p>
      </div>

      <div className="relative min-h-full w-full overflow-hidden bg-[#241f21]/0 md:p-[4rem] p-[2rem] rounded-sm">
        <div className="flex justify-center mb-16 md:mb-16">
          <a
            href="https://hookahjoy.gr/"
            target="_blank"
            className="w-full md:w-[20%] opacity-100 md:opacity-90 hover:opacity-100 transition-opacity duration-300 select-none"
          >
            <Image
              src="/hookah-joy.webp"
              alt="Hookah Joy Logo"
              width={150}
              height={100}
              className="w-full h-auto object-contain"
              draggable="false"
              priority
            />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {/*{services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}*/}
        </div>
      </div>
    </div>
  );
}

// @TODO mobile view, fix service card rendering
