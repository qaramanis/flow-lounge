"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLenis } from "@/hooks/use-lenis";
import { Event } from "@/types/event";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface EventCarouselProps {
  events: Event[];
  eventsPerPage?: number;
}

export default function EventCarousel({ events }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const { lenis } = useLenis();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 10000);

    return () => clearInterval(autoplayInterval);
  }, [events.length]);

  const getVisibleEvents = () => {
    const prevPrev = (currentIndex - 2 + events.length) % events.length;
    const prev = (currentIndex - 1 + events.length) % events.length;
    const center = currentIndex;
    const next = (currentIndex + 1) % events.length;
    const nextNext = (currentIndex + 2) % events.length;

    return [
      { event: events[prevPrev], position: "exit-left" },
      { event: events[prev], position: "left" },
      { event: events[center], position: "center" },
      { event: events[next], position: "right" },
      { event: events[nextNext], position: "exit-right" },
    ];
  };

  const visibleEvents = getVisibleEvents();

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handleEventsRedirect = () => {
    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
    }
    setTimeout(() => {
      router.push("/events");
    }, 50);
  };

  // Position-based layout variants
  const getPositionStyle = (position: string) => {
    switch (position) {
      case "exit-left":
      case "exit-right":
        return {
          width: "0%",
          height: isMobile ? "5rem" : "8rem",
          opacity: 0,
        };
      case "left":
        return {
          width: "25%",
          height: isMobile ? "10rem" : "16rem",
          opacity: 0.6,
        };
      case "center":
        return {
          width: "50%",
          height: isMobile ? "16rem" : "600px",
          opacity: 1,
        };
      case "right":
        return {
          width: "25%",
          height: isMobile ? "10rem" : "16rem",
          opacity: 0.6,
        };
      default:
        return {};
    }
  };

  return (
    <div className="relative">
      {/* Three Rectangle Layout */}
      <div className="flex items-end justify-center gap-3 md:gap-6 h-64 md:h-[600px]">
        {visibleEvents.map(({ event, position }) => {
          const isCenter = position === "center";

          const handleClick = () => {
            if (isCenter) {
              handleEventsRedirect();
            } else if (position === "left") {
              handlePrevious();
            } else if (position === "right") {
              handleNext();
            }
          };

          return (
            <motion.div
              key={event.id}
              layout
              animate={getPositionStyle(position)}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onClick={handleClick}
              className={`rounded-xl overflow-hidden relative flex-shrink-0 cursor-pointer group ${
                isCenter ? "" : ""
              }`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className={`object-cover transition-all duration-500 ${
                  isCenter
                    ? "group-hover:scale-105"
                    : "brightness-75 group-hover:brightness-100"
                }`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      {events.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:text-white transition-colors" />
          </button>

          <div className="flex gap-1.5">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5 text-foreground group-hover:text-foreground transition-colors" />
          </button>
        </div>
      )}
    </div>
  );
}
