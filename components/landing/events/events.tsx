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
      <div className="md:px-[4.8rem] px-[1.6rem]  mx-auto">
        <div className="flex flex-col space-y-8 lg:space-y-12 items-center md:items-stretch">
          <div className="space-y-5 flex flex-col md:flex-row justify-between items-center border-b border-foreground/15 pb-10">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl leading-tight text-foreground text-center md:text-start"
            >
              Keep Up With <br />
              Our{" "}
              <a className="self-center text-5xl md:text-[7.6rem] font-echelon italic text-accent">
                Events
              </a>
            </h2>
          </div>

          <EventCarousel events={events} eventsPerPage={3} />
        </div>
      </div>
    </section>
  );
}
