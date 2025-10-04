"use client";
import Image from "next/image";
import { useRef } from "react";
import SpecialsButton from "./specials-button";

export default function SpecialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 lg:px-20 bg-transparent"
      id="specials"
    >
      <div className="md:px-[6rem] px-[2rem] mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl leading-tight text-foreground text-center md:text-start border-b border-foreground/15 pb-12"
        >
          Planning something{" "}
          <a className="self-center text-6xl md:text-[7rem] font-echelon italic text-[#EF5021]">
            Special
          </a>{" "}
        </h2>
        <div className="h-full flex flex-row gap-6 p-4 mt-4">
          <div className="flex flex-col md:w-[55%] h-[500px] rounded-xl gap-2">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="text-xl md:text-2xl text-foreground leading-relaxed md:max-w-3/4 flex flex-col gap-6">
                <div>
                  Are you organizing your own{" "}
                  <a className="font-bold">event(s)</a>?
                </div>
                <div>
                  We offer <a className="font-bold">custom</a> services for your
                  own events. We can assist with your{" "}
                  <a className="font-bold">
                    birthday party, corporate event, or any other special
                    occasion
                  </a>
                  .
                </div>
                <div>Get in touch and learn more.</div>
              </div>
              <div>
                <SpecialsButton />
              </div>
            </div>
          </div>
          <div className="md:w-[45%] h-[500px] rounded-xl">
            <Image
              src="/flow-lounge.svg"
              alt="Flow Lounge Hookah"
              height={500}
              width={500}
              className="object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// @TODO mobile view
