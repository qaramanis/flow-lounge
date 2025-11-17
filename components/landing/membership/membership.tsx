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
      className="py-16 lg:py-24 lg:px-16 bg-transparent mb-16 lg:mb-24"
      id="specials"
    >
      <div className="md:px-[4.8rem] px-[1.6rem] mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl leading-tight text-foreground text-center md:text-start border-b border-foreground/15 pb-5 md:pb-10 mb-5"
        >
          Flow{" "}
          <a className="self-center text-5xl md:text-[5.6rem] font-echelon italic text-accent">
            Community
          </a>
        </h2>
        <div className="h-full flex flex-col md:flex-row mt-3">
          <div className="md:w-[35%] h-[400px] rounded-lg">
            <Image
              src="/flow-lounge.svg"
              alt="Flow Lounge Hookah"
              height={400}
              width={400}
              className="object-fit"
            />
          </div>
          <div className="flex flex-col md:w-[65%] md:h-[400px] h-[320px] rounded-lg gap-1.5">
            <div className="flex flex-col justify-between items-start md:items-start w-full h-full">
              <div className="h-full justify-center text-lg md:text-xl text-foreground leading-relaxed flex flex-col gap-8 md:ml-[2rem]">
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
                    href="/deals"
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
