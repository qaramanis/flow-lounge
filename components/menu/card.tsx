"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface MenuCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  price?: string;
  link?: string;
  className?: string;
}

export default function MenuCard({
  title,
  description,
  imageUrl = "/flow-lounge.svg",
  className = "",
  link = "#",
  price = "",
}: MenuCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    if (link === "#") {
      // If it's just a hash, you might want to prevent navigation
      // or handle it differently
      return;
    }

    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      router.push(link);
    }
  };
  return (
    <div
      onClick={handleCardClick}
      className={`menu-card relative w-full aspect-[2/3] rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:shadow-[#EF5021]/10 ${className}`}
    >
      <div className="absolute top-0 right-0 p-3 flex text-xl md:text-3xl text-[#EF5021] bg-background/30 rounded-bl-xl font-bold z-10 ">
        {price}
      </div>

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

      <div className="absolute bottom-0 left-0 right-0 bg-[#f3f3f2]/85 md:group-hover:bg-[#f3f3f2] transition-all duration-800 ease-in-out rounded-t-sm">
        <div className="relative overflow-hidden">
          <div className="p-4">
            <h3 className="text-2xl lg:text-3xl text-background mb-0 tracking-tight group-hover:text-[#EF5021] transition-colors duration-300">
              {title}
            </h3>
          </div>

          <div className="h-full md:max-h-0 md:group-hover:max-h-32 transition-all duration-800 ease-in-out overflow-hidden">
            <div className="px-4 pb-4">
              <p className="text-background/60 text-sm lg:text-base leading-relaxed group-hover:text-background/80 transition-colors duration-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[1px] rounded-sm border border-[#EF5021]/20" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EF5021]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
