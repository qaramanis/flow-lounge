"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLenis } from "@/hooks/use-lenis";

interface MenuCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  price?: string;
  link?: string;
  className?: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export default function MenuCard({
  title,
  description = "",
  imageUrl = "/flow-lounge.svg",
  className = "",
  link = "#",
  price = "",
  isExpanded = false,
  onToggleExpand,
}: MenuCardProps) {
  const router = useRouter();
  const { lenis } = useLenis();

  const handleCardClick = () => {
    // On mobile, toggle expansion instead of navigation
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      if (link === "#" && onToggleExpand) {
        onToggleExpand();
        return;
      }
    }

    if (link === "#") {
      return;
    }

    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // Stop scroll momentum and reset position before navigation
      if (lenis) {
        lenis.stop();
        lenis.scrollTo(0, { immediate: true });
      }
      setTimeout(() => {
        router.push(link);
      }, 50);
    }
  };
  return (
    <div
      onClick={handleCardClick}
      className={`menu-card group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:shadow-accent/10 opacity-0 ${className}`}
    >
      <div className="relative w-full aspect-[2/3] rounded-md overflow-hidden border-[0.5px] border-accent/50 md:border-none">
        {/*<div className="absolute top-0 right-0 p-2.5 flex text-lg md:text-2xl text-accent bg-background/50 rounded-bl-lg font-bold z-10 whitespace-pre-line">
          {price}
        </div>*/}

        <div className="absolute inset-0 bg-[#241F21]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-950" />
          )}
        </div>

        <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-background/45 md:group-hover:bg-background/85 transition-all duration-800 ease-in-out rounded-t-2xl">
          <div className="relative overflow-hidden">
            <div className="p-3">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-0 tracking-tight group-hover:text-accent transition-colors duration-200">
                {title}
              </h3>
            </div>

            <div className="h-full md:max-h-0 md:group-hover:max-h-64 transition-all duration-800 ease-in-out overflow-hidden">
              <div className="px-3 pb-3">
                <div className="text-foreground/60 text-sm lg:text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <div className="text-foreground font-medium whitespace-pre-line">
                    {price}
                  </div>
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[1px] rounded-md border border-accent/20" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Mobile description below image */}
      <div className="md:hidden mt-3 space-y-1">
        <h3 className="text-lg font-semibold text-white tracking-tight line-clamp-1">
          {title}
        </h3>
        <div className="text-foreground/90 font-medium text-sm whitespace-pre-line">
          {price}
        </div>
        {description && (
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isExpanded ? "max-h-[500px]" : "max-h-[2.5rem]"}`}
          >
            <p className="text-white/60 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
