"use client";

import Image from "next/image";

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  price?: string;
  className?: string;
}

export default function MenuCard({
  title,
  description,
  imageUrl,
  className = "",
  price = "",
}: MenuCardProps) {
  return (
    <div
      className={`menu-card relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5021]/10 ${className}`}
    >
      <div className="absolute top-0 right-0 p-3 flex text-xl md:text-2xl text-[#EF5021] bg-background/30 rounded-bl-3xl font-bold z-10 ">
        {price}
      </div>

      {/* Image/Black Background Area */}
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

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          width="725"
          height="141"
          viewBox="0 0 725 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20C0 10.5719 0 5.85786 2.92893 2.92893C5.85786 0 10.5719 0 20 0H137.954C147.611 0 152.44 0 156.829 1.71587C161.219 3.43174 164.767 6.70645 171.864 13.2559L189.636 29.6572C196.733 36.2066 200.281 39.4813 204.671 41.1972C209.06 42.913 213.889 42.913 223.546 42.913H725V141H0V20Z"
            fill="#E5E4E6"
            fillOpacity="1"
          />
        </svg>

        {/* Text Content */}
        <div className="absolute top-0 left-0 h-full w-full flex flex-col pt-2 p-4 justify-start">
          <h3 className="text-2xl lg:text-3xl text-background mb-3 tracking-tight group-hover:text-[#EF5021] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-background/60 text-sm lg:text-base leading-relaxed group-hover:text-background/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[1px] rounded-[2rem] border border-[#EF5021]/30" />
      </div>

      {/* Bottom Glow on Hover */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EF5021]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
