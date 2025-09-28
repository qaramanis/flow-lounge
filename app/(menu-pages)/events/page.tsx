"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Masonry from "@/components/react-bits/masonry";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1003/600/850?grayscale",
    url: "https://example.com/four",
    height: 450,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1032/600/700?grayscale",
    url: "https://example.com/five",
    height: 300,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1045/600/950?grayscale",
    url: "https://example.com/six",
    height: 500,
  },
  {
    id: "7",
    img: "https://picsum.photos/id/1051/600/780?grayscale",
    url: "https://example.com/seven",
    height: 350,
  },
  {
    id: "8",
    img: "https://picsum.photos/id/1060/600/880?grayscale",
    url: "https://example.com/eight",
    height: 420,
  },
  {
    id: "9",
    img: "https://picsum.photos/id/1072/600/820?grayscale",
    url: "https://example.com/nine",
    height: 380,
  },
  {
    id: "10",
    img: "https://picsum.photos/id/1084/600/750?grayscale",
    url: "https://example.com/ten",
    height: 300,
  },
  {
    id: "11",
    img: "https://picsum.photos/id/1072/600/820?grayscale",
    url: "https://example.com/eleven",
    height: 550,
  },
  {
    id: "12",
    img: "https://picsum.photos/id/1072/600/820?grayscale",
    url: "https://example.com/twelve",
    height: 400,
  },
  {
    id: "13",
    img: "https://picsum.photos/id/1072/600/820?grayscale",
    url: "https://example.com/thirteen",
    height: 320,
  },
  {
    id: "14",
    img: "https://picsum.photos/id/1045/600/950?grayscale",
    url: "https://example.com/fourteen",
    height: 480,
  },
  {
    id: "15",
    img: "https://picsum.photos/id/1045/600/950?grayscale",
    url: "https://example.com/fifteen",
    height: 430,
  },
];

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useIsomorphicLayoutEffect(() => {
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
    <div ref={containerRef} className="pt-32 px-8 md:px-20 pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6"
        >
          Flow{" "}
          <span className="text-[#EF5021] font-echelon italic text-7xl md:text-9xl drop-shadow-[0_0_40px_rgba(239,80,33,0.8)]">
            Events
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl">
          Immerse yourself in our world of exclusive experiences. Click on any
          event to learn more.
        </p>
      </div>

      {/* Masonry Grid */}

      <div className="min-h-[600px]">
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
  );
}
