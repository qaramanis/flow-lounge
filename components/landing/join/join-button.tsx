"use-client";

import { ArrowUpRight } from "lucide-react";

export default function JoinButton() {
  return (
    <button className="flex flex-row bg-[#EF5021] text-white font-bold py-1 pl-4 pr-2 rounded-full gap-4 items-center hover:scale-105 transition-all duration-500 cursor-pointer">
      <div>Join the team</div>
      <div className="bg-white text-background rounded-full p-2">
        <ArrowUpRight size={20} />
      </div>
    </button>
  );
}
