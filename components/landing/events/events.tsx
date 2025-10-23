"use client";

import { useRef } from "react";
import { getLatestEvents } from "@/data/events";
import EventCarousel from "./event-carousel";

const events = getLatestEvents(9); // Get 9 events for 3 pages of 3 events each

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-16 lg:py-24 lg:px-16 bg-transparent"
      id="events"
    >
      <div className="md:px-[4.8rem] px-[1.6rem]">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl leading-tight text-foreground text-center md:text-start border-b border-foreground/15 pb-5 md:pb-10 mb-5"
        >
          Keep Up With <br />
          Our{" "}
          <a className="self-center text-5xl md:text-[7.6rem] font-echelon italic text-accent">
            Events
          </a>
        </h2>

        <EventCarousel events={events} eventsPerPage={3} />
      </div>
    </section>
  );
}
