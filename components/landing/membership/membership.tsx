"use client";
import Image from "next/image";
import { useRef } from "react";
import ActionButton from "@/components/action-button";
import { ArrowUpRight } from "lucide-react";

export default function MembershipSection() {
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
          Flow{" "}
          <a className="self-center text-6xl md:text-[7rem] font-echelon italic text-accent">
            Community
          </a>
        </h2>
        <div className="h-full flex flex-col md:flex-row gap-6 p-4 mt-4">
          <div className="md:w-[35%] h-[500px] rounded-xl">
            <Image
              src="/flow-lounge.svg"
              alt="Flow Lounge Hookah"
              height={500}
              width={500}
              className="object-fit"
            />
          </div>
          <div className="flex flex-col md:w-[65%] md:h-[500px] h-[400px] rounded-xl gap-2">
            <div className="flex flex-col justify-between items-start md:items-start w-full h-full">
              <div className="text-xl md:text-2xl text-foreground leading-relaxed flex flex-col gap-10">
                <div>
                  Become a member of the{" "}
                  <a className="font-bold text-accent">
                    Flow Lounge Community.
                  </a>
                </div>
                <div>
                  Members enjoy special{" "}
                  <a className="font-bold">offers and discounts!</a>
                </div>
                <div>
                  Subscribe to our Newsletter and be the{" "}
                  <a className="font-bold">first</a> to learn about our
                  exclusive <a className="font-bold">Events</a>.
                </div>
                <div>
                  <ActionButton
                    text="Become a member"
                    icon={ArrowUpRight}
                    href="/community"
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

// @TODO mobile view
