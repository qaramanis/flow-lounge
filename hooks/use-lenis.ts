import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface UseLenisOptions {
  onScroll?: (lenis: Lenis) => void;
}

export function useLenis({ onScroll }: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the global lenis instance
    if (typeof window !== "undefined") {
      lenisRef.current = (window as any).lenis;
    }

    if (lenisRef.current && onScroll) {
      const handleScroll = () => {
        if (lenisRef.current) {
          onScroll(lenisRef.current);
        }
      };

      lenisRef.current.on("scroll", handleScroll);

      return () => {
        if (lenisRef.current) {
          lenisRef.current.off("scroll", handleScroll);
        }
      };
    }
  }, [onScroll]);

  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  const start = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  const stop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    start,
    stop,
  };
}
