"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useLenis } from "@/hooks/use-lenis";

interface PlayroomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConsumptionRule {
  people: string;
  requirement: string;
}

interface Game {
  name: string;
  imageUrl: string;
}

export default function PlayroomModal({ isOpen, onClose }: PlayroomModalProps) {
  const { stop, start } = useLenis();

  useEffect(() => {
    if (isOpen) {
      // Stop Lenis smooth scrolling
      stop();

      // Prevent body scroll
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll position
      const storedScrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Restore scroll position
      if (storedScrollY) {
        window.scrollTo(0, parseInt(storedScrollY, 10) * -1);
      }

      // Restart Lenis smooth scrolling
      start();
    }

    return () => {
      // Cleanup on unmount
      if (isOpen) {
        const storedScrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        if (storedScrollY) {
          window.scrollTo(0, parseInt(storedScrollY, 10) * -1);
        }

        start();
      }
    };
  }, [isOpen, stop, start]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const consumptionRules: ConsumptionRule[] = [
    { people: "1-2 Persons", requirement: "1 Hookah + Drink per Person" },
    { people: "3-4 Persons", requirement: "2 Hookahs + Drink per Person" },
    { people: "5-6 Persons", requirement: "3 Hookahs + Drink per Person" },
    { people: "7+ Persons", requirement: "Contact staff for arrangement" },
  ];

  const availableGames: Game[] = [
    {
      name: "EA Sports FC 25",
      imageUrl:
        "https://image.api.playstation.com/vulcan/ap/rnd/202409/2712/1e1c42b14d92280e17bda697b8c4ae13ff9f91bdb10fca89.png",
    },
    {
      name: "UFC 5",
      imageUrl:
        "https://image.api.playstation.com/vulcan/ap/rnd/202309/0421/418704276d35ce02e8cb532c6ca3826cf866ad2ec66c0b17.png",
    },
    {
      name: "NBA 2K25",
      imageUrl:
        "https://image.api.playstation.com/vulcan/ap/rnd/202406/0521/e8ef2a542e532c17d91215173917798c5dbca0e8f5b0fc9c.png",
    },
    {
      name: "Tekken 8",
      imageUrl:
        "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA06014_00/3/i_1a82139fdf9aaeed91d74a6aef4e8c81e714779772e1f454da9c9afab7f9b3f3/i/icon0.png",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal container with fixed positioning for close button */}
      <div
        className="relative bg-[#1a1618] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Close button - absolutely positioned */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white group-hover:text-accent transition-colors duration-300" />
        </button>

        {/* Scrollable content container */}
        <div className="overflow-y-auto overscroll-contain">
          {/* Header */}
          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Playroom Information{" "}
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Gaming experience with premium hookah service
            </p>
          </div>

          {/* Minimum Consumption Section */}
          <div className="p-8 pb-6">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                Minimum Consumption
              </h3>
              <p className="text-white/50 text-sm mb-6">
                To enjoy our playroom facilities, the following minimum orders
                apply:
              </p>
            </div>
            <div className="space-y-3">
              {consumptionRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="text-accent font-semibold min-w-[120px]">
                    {rule.people}
                  </span>
                  <span className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    {rule.requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Available Games Section */}
          <div className="p-8 pt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Available Games
            </h3>
            <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-6">
              {availableGames.map((game, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-default aspect-[3/4] overflow-hidden"
                  title={game.name}
                >
                  <Image
                    src={game.imageUrl}
                    alt={game.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-white/70 text-sm">
                <span className="text-accent font-semibold">Note: </span>
                Ask our staff for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
