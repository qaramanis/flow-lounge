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
      className="py-16 lg:py-24 lg:px-16 bg-transparent"
      id="events"
    >
      <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl leading-tight text-foreground text-center md:text-start border-b border-foreground/15 pb-5 md:pb-10 mb-5"
        >
          Join the{" "}
          <a className="self-center text-5xl md:text-[5.6rem] font-echelon italic text-accent">
            Team
          </a>
        </h2>
        <div className="h-full flex flex-col md:flex-row gap-10 p-3 mt-3">
          <div className="w-full md:w-[45%] md:h-[400px] rounded-lg flex items-center justify-center order-3 md:order-1">
            <Image
              src="/flow-lounge.svg"
              alt="Flow Lounge Hookah"
              height={400}
              width={400}
              className="object-fill"
            />
          </div>
          <div className="flex flex-col w-full md:w-[55%] md:h-[400px] rounded-lg gap-3 order-2">
            <div className="flex flex-col w-full h-[160px] md:h-[40%] rounded-lg items-center overflow-clip justify-center order-1 md:order-1">
              <Image
                src="/flow-lounge.svg"
                alt="Flow Lounge Hookah"
                height={140}
                width={220}
                className="object-fit"
              />
            </div>
            <div className="flex flex-col w-full md:h-[60%] order-2 md:order-2 gap-5">
              <div className="h-full justify-center text-lg md:text-xl text-foreground leading-relaxed md:max-w-full flex flex-col gap-5">
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
                <div className="flex justify-center md:justify-start mt-">
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
      </div>
    </section>
  );
}
