"use client";
import Image from "next/image";
import { useRef } from "react";
import ActionButton from "@/components/action-button";
import { ArrowUpRight } from "lucide-react";

export default function SpecialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-16 lg:py-24 lg:px-16 bg-transparent"
      id="specials"
    >
      <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl leading-tight text-foreground text-center md:text-start border-b border-foreground/15"
        >
          Planning something{" "}
          <a className="self-center text-5xl md:text-[5.6rem] font-echelon italic text-accent">
            Special
          </a>
        </h2>
        <div className="h-full flex flex-col md:flex-row gap-5 p-3 mt-3">
          <div className="flex flex-col md:w-[55%] md:h-[400px] h-[320px] rounded-lg gap-1.5">
            <div className="flex flex-col justify-between items-center md:items-start w-full h-full">
              <div className="h-full justify-center text-lg md:text-xl text-foreground leading-relaxed md:max-w-3/4 flex flex-col gap-8">
                <div>
                  Are you organizing your own{" "}
                  <a className="font-bold">events</a>?
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
                <div>
                  <ActionButton
                    text="Learn More"
                    icon={ArrowUpRight}
                    href="/contact"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[45%] self-center h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/landing/specials1.webp"
              alt="Flow Lounge Hookah"
              height={800}
              width={800}
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
