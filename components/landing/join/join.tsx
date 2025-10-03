"use client";

import { useRef } from "react";
import Image from "next/image";
import JoinButton from "./join-button";

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
          <a className="self-center text-6xl md:text-[7rem] font-echelon italic text-[#EF5021]">
            Team
          </a>
        </h2>
        <div className="h-full flex flex-row gap-6 p-4 mt-4">
          <div className="md:w-[45%] h-[500px] rounded-xl">
            <Image
              src="/flow-lounge.svg"
              alt="Flow Lounge Hookah"
              height={500}
              width={500}
              className="object-fit"
            />
          </div>
          <div className="flex flex-col md:w-[55%] h-[500px] rounded-xl gap-2">
            <div className="flex flex-col w-full h-[40%] rounded-xl items-center overflow-clip justify-center">
              <Image
                src="/flow-lounge.svg"
                alt="Flow Lounge Hookah"
                height={175}
                width={275}
                className="object-fit"
              />
            </div>
            <div className="flex flex-col justify-between w-full h-[60%]">
              <div className="text-base md:text-lg text-foreground leading-relaxed md:max-w-3/4 flex flex-col gap-4">
                <div>
                  Looking to work with us? Are you{" "}
                  <a className="font-bold">ambitious</a>,{" "}
                  <a className="font-bold">passionate</a> ready to work with{" "}
                  <a className="font-bold">great</a> people?
                  <br />
                </div>
                <div>
                  Get in touch with us today and ask for details about open
                  positions.
                </div>
              </div>
              <div>
                <JoinButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
