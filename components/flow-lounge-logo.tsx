"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "@/hooks/use-lenis";

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

export default function FlowLoungeLogo() {
  const router = useRouter();
  const pathname = usePathname();
  const { lenis } = useLenis();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 2,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          immediate: false,
        });
      } else {
        if (typeof window !== "undefined" && (window as LenisWindow).lenis) {
          (window as LenisWindow).lenis?.scrollTo(0, {
            duration: 1,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            immediate: false,
          });
        } else {
          // Final fallback to native scroll
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
        router.push("/");
      }, 50);
    }
  };

  return (
    <button
      onClick={handleLogoClick}
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-110"
      aria-label="Flow Lounge - Go to homepage"
    >
      <Image
        src="/flow-lounge.svg"
        alt="Flow Lounge Logo"
        width={80}
        height={80}
        className="rounded-full transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(239,80,33,0.5)]"
      />
    </button>
  );
}
