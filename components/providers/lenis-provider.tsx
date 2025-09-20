"use client";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

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

  return <>{children}</>;
}
