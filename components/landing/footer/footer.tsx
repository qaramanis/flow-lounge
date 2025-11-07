"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "@/hooks/use-lenis";

interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerData: FooterColumn[] = [
  {
    title: "Experience",
    links: [
      { label: "Hookah", href: "/hookah", isExternal: false },
      { label: "Deals & Offers", href: "#", isExternal: false },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", href: "#", isExternal: false },
      {
        label: "Join the Team",
        href: "/contact",
        isNew: false,
        isExternal: false,
      },
      { label: "Flow Events", href: "/events", isExternal: false },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "For Events", href: "/services", isExternal: false },
      {
        label: "For Partners",
        href: "/services",
        isExternal: false,
      },
      {
        label: "For Businesses",
        href: "/services",
        isExternal: false,
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com/flowlounge",
        isExternal: true,
      },
      {
        label: "LinkTree",
        href: "https://linktr.ee/flowlounge",
        isExternal: true,
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Get in Touch",
        href: "/contact",
        isExternal: false,
      },
    ],
  },
  // {
  //   title: "Support",
  //   links: [
  //     { label: "Terms", href: "/terms", isExternal: false },
  //     { label: "Contact", href: "/contact", isExternal: false },
  //     { label: "Privacy Policy", href: "/privacy", isExternal: false },
  //   ],
  // }, @TODO remove comment later
];

type LenisWindow = Window & {
  lenis?: {
    scrollTo: (
      target: number,
      options?: {
        duration?: number;
        easing?: (t: number) => number;
        immediate?: boolean;
      },
    ) => void;
  };
};

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const { lenis } = useLenis();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal?: boolean,
  ) => {
    if (
      isExternal ||
      href.startsWith("http://") ||
      href.startsWith("https://")
    ) {
      return;
    }

    if (href === "#") {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    // Check if we're already on the same page
    if (pathname === href) {
      // Scroll to top using Lenis
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          immediate: false,
        });
      } else {
        if (typeof window !== "undefined" && (window as LenisWindow).lenis) {
          (window as LenisWindow).lenis?.scrollTo(0, {
            duration: 1.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            immediate: false,
          });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      // Stop scroll momentum and reset position before navigation
      if (lenis) {
        lenis.stop();
        lenis.scrollTo(0, { immediate: true });
      }
      setTimeout(() => {
        router.push(href);
      }, 50);
    }
  };

  return (
    <footer className="relative bg-[#f3f3f2] rounded-t-[40px] mt-auto">
      <div className="px-8 md:px-20 pt-12 pb-10">
        <h2
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter pb-16 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, black, #EF5021, black, #EF5021, black, #EF5021, black)",
            backgroundSize: "200% 100%",
            animation: "gradientPulse 20s ease-in-out infinite",
          }}
        >
          FLOW LOUNGE
        </h2>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-start gap-8 md:gap-[10rem] mb-16">
          {footerData.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-background">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        handleLinkClick(e, link.href, link.isExternal)
                      }
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-[#666666] hover:text-accent transition-all duration-300 inline-flex items-center gap-2"
                    >
                      {link.label}
                      {link.isNew && (
                        <span className="text-[10px] bg-gradient-to-bl from-background/95 to-accent text-foreground px-2 py-0.5 rounded font-semibold">
                          New!
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#666666] text-center md:text-left">
            © 2025 FLOW LOUNGE
            <br />
            ALL RIGHTS RESERVED
          </div>
          <div className="text-xs text-[#666666] text-center md:text-left">
            created by{" "}
            <Link
              href="https://qaramanis.com"
              target="_blank"
              rel="noopener"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              qaramanis
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
