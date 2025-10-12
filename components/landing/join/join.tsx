"use client";

import { useRef } from "react";
import Image from "next/image";
import ActionButton from "@/components/action-button";
import { ArrowUpRight } from "lucide-react";

export default function JoinSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 lg:px-20 bg-transparent"
      id="events"
    >
      <div className="md:px-[6rem] px-[2rem] mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl leading-tight text-foreground text-center md:text-start border-b border-foreground/15 pb-12"
        >
          Join the{" "}
          <a className="self-center text-6xl md:text-[7rem] font-echelon italic text-accent">
            Team
          </a>
        </h2>
        <div className="h-full flex flex-col md:flex-row gap-12 p-4 mt-4">
          <div className="w-full md:w-[45%] h-[300px] md:h-[500px] rounded-xl flex items-center justify-center order-3 md:order-1">
            <Image
              src="/flow-lounge.svg"
              alt="Flow Lounge Hookah"
              height={500}
              width={500}
              className="object-fit"
            />
          </div>
          <div className="flex flex-col w-full md:w-[55%] md:h-[500px] rounded-xl gap-4 order-2">
            <div className="flex flex-col w-full h-[200px] md:h-[40%] rounded-xl items-center overflow-clip justify-center order-1 md:order-1">
              <Image
                src="/flow-lounge.svg"
                alt="Flow Lounge Hookah"
                height={175}
                width={275}
                className="object-fit"
              />
            </div>
            <div className="flex flex-col w-full md:h-[60%] order-2 md:order-2 gap-6">
              <div className="text-xl md:text-2xl text-foreground leading-relaxed md:max-w-full flex flex-col gap-4">
                <div>
                  Looking to work with us? Are you{" "}
                  <a className="font-bold">ambitious</a>,{" "}
                  <a className="font-bold">passionate</a> and ready to work with{" "}
                  <a className="font-bold">great</a> people?
                  <br />
                </div>
                <div>
                  Get in touch with us today and get details about open
                  positions.
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <ActionButton
                  text="Join the team"
                  icon={ArrowUpRight}
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
