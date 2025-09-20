"use client";
import { cn } from "@/lib/utils";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

function NavItem({
  title,
  href,
  index,
}: {
  title: string;
  href: string;
  index: string;
}) {
  return (
    <Link
      href={href}
      className="w-full  text-black hover:text-[#EF5021] tracking-tight flex flex-col leading-none transition-all duration-300"
    >
      <div className="flex flex-row">
        <span className="mbn-item text-5xl">{title}</span>
        <div className="ml-2 text-lg mbn-item text-[#EF5021]">{index}</div>
      </div>

      <div className="w-full h-[1px] bg-black/10 my-2 mbn-line" />
    </Link>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        const storedScrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, parseInt(storedScrollY || "0", 10) * -1);
      };
    }
  }, [isOpen]);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        const openTl = gsap.timeline({
          defaults: {
            duration: 0.4,
            ease: "power3.inOut",
          },
        });
        openTl.set(".mbn-item", {
          y: 10,
          opacity: 0,
        });
        openTl.set(".mbn-line", {
          width: "0%",
        });
        openTl.to(".mbn-item", {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        });
        openTl.to(
          ".mbn-line",
          {
            width: "100%",
            stagger: 0.1,
          },
          0,
        );
      } else {
        const closeTl = gsap.timeline({});
        closeTl.to(".mbn-item", {
          y: 10,
          opacity: 0,
          stagger: 0.1,
        });
        closeTl.to(
          ".mbn-line",
          {
            width: "0%",
            stagger: 0.1,
          },
          0,
        );
      }
    });
    return () => {
      ctx.kill();
    };
  }, [isOpen]);

  return (
    <div className="fixed right-[2rem] top-[2rem] z-[100] flex">
      <button
        className="bg-[#EF5021] rounded-md items-center justify-center z-10 cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger size={25} color="#000" toggled={isOpen} toggle={setIsOpen} />
      </button>
      <div
        className={cn(
          "fixed top-0 right-0 h-full bg-white transition-all duration-500 ease-in-out z-0 px-6 pt-32 flex flex-col justify-between pb-10 md:rounded-l-3xl rounded-none",
          isOpen ? "md:w-[45%] w-full" : "w-0 px-0",
        )}
      >
        <div className="flex flex-col gap-3">
          <NavItem title="Menu" href="#" index="01." />
          <NavItem title="Hookah" href="#" index="02." />
          <NavItem title="Events" href="#" index="03." />
          <NavItem title="Playroom" href="#" index="04." />
        </div>
        <div className=" text-3xl text-black">
          <span className="text-[#EF5021] text-xl tracking-tighter mb-4 mbn-item">
            Socials
          </span>
          <div className="flex flex-row gap-12">
            <Link
              href="https://www.instagram.com/webconf2026"
              className="mbn-item hover:text-[#EF5021] transition-all duration-300"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
