"use client";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    direction?: "vertical" | "horizontal";
    gestureDirection?: "vertical" | "horizontal" | "both";
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
  };
}

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function LenisProvider({
  children,
  options = {},
}: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      ...options,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }

    // Cleanup
    return () => {
      lenis.destroy();
      if (typeof window !== "undefined") {
        delete window.lenis;
      }
    };
  }, [options]);

  // Reset scroll position and stop momentum on route change
  useLayoutEffect(() => {
    if (lenisRef.current) {
      // Stop current scroll momentum immediately
      lenisRef.current.stop();

      // Immediately scroll to top
      lenisRef.current.scrollTo(0, { immediate: true, force: true });

      // Also reset native scroll position
      window.scrollTo(0, 0);

      // Restart Lenis after a brief delay
      const timeoutId = setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.start();
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return <>{children}</>;
}
