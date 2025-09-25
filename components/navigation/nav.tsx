"use client";
import { cn } from "@/lib/utils";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";
import { useLenis } from "@/hooks/use-lenis";
import FlowLoungeLogo from "../flow-lounge-logo";

function NavItem({
  title,
  href,
  index,
  onClick,
}: {
  title: string;
  href: string;
  index: string;
  onClick?: () => void;
}) {
  const { scrollTo } = useLenis();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      scrollTo(href, {
        duration: 2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      });
    } else {
      router.push(href);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="w-full text-background hover:text-[#EF5021] tracking-tight flex flex-col leading-none transition-all duration-300"
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
  const { stop, start } = useLenis();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the menu and the hamburger button
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      // Add a small delay to prevent immediate closing when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener(
          "touchstart",
          handleClickOutside as unknown as EventListener,
        );
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener(
          "touchstart",
          handleClickOutside as unknown as EventListener,
        );
      };
    }
  }, [isOpen]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Stop smooth scrolling when menu is open
      stop();

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

        // Restart smooth scrolling when menu is closed
        start();
      };
    }
  }, [isOpen, stop, start]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
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
    <>
      {/* Logo - remains visible */}
      <div className="fixed top-[1rem] left-[1rem] z-[101]">
        <FlowLoungeLogo />
      </div>

      {/* Hamburger button */}
      <div className="fixed right-[2rem] top-[2rem] z-[100] flex">
        <button
          ref={buttonRef}
          className="relative rounded-md bg-[#EF5021] items-center justify-center z-10 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(239,80,33,0.6)] group overflow-hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#EF5021]">
            <Hamburger
              size={25}
              color="#000"
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </span>
        </button>
      </div>

      {/* Overlay background - clickable to close menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[98]",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 h-full bg-white transition-all duration-500 ease-in-out z-[99] px-6 pt-32 flex flex-col justify-between pb-10 md:rounded-l-3xl rounded-none shadow-2xl",
          isOpen
            ? "md:w-[45%] w-full translate-x-0"
            : "md:w-[45%] w-full translate-x-full",
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-3">
          <NavItem title="Home" href="/" index="01." onClick={closeMenu} />
          <NavItem title="Menu" href="/menu" index="02." onClick={closeMenu} />
          <NavItem
            title="Hookah"
            href="/hookah"
            index="03."
            onClick={closeMenu}
          />
          <NavItem
            title="Events"
            href="/events"
            index="04."
            onClick={closeMenu}
          />
          <NavItem
            title="Playroom"
            href="/playroom"
            index="05."
            onClick={closeMenu}
          />
          <NavItem
            title="Your Events"
            href="/#"
            index="06."
            onClick={closeMenu}
          />
        </div>
        <div className="text-3xl text-black">
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
    </>
  );
}
